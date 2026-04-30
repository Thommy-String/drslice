import React, { useRef, useState, useEffect } from 'react';
import { Play, X, Volume2, VolumeX, ChevronUp, ChevronDown, Facebook } from 'lucide-react';
import videoFibre from '../assets/videos/video-fibre-slice.mp4';
import videoServeTempo from '../assets/videos/serve-tempo-slice.mp4';
import videoHero from '../assets/videos/video-hero-slice.mp4';
import videoCibi from '../assets/videos/cibi-buoni-e-cattivi.mp4';
import videoPasta from '../assets/videos/la-pasta-fa-male-domanda.mp4';
import videoGonfiore from '../assets/videos/gonfiore-forse-eccesso-sale.mp4';

const videos = [
  {
    id: 1,
    src: videoHero,
    title: 'Il Metodo SLICE',
    description: 'Una panoramica completa del nostro approccio rivoluzionario.',
  },
  {
    id: 2,
    src: videoFibre,
    title: 'L\'importanza delle Fibre',
    description: 'Scopri perché le fibre sono fondamentali nella tua alimentazione quotidiana.',
  },
  {
    id: 3,
    src: videoPasta,
    title: 'La pasta fa male?',
    description: 'Sfatiamo uno dei miti più diffusi sulla nutrizione italiana.',
  },
  {
    id: 4,
    src: videoCibi,
    title: 'Cibi buoni e cattivi',
    description: 'Esistono davvero alimenti "cattivi"? La verità sul cibo.',
  },
  {
    id: 5,
    src: videoServeTempo,
    title: 'Serve Tempo per Cambiare',
    description: 'Il vero cambiamento richiede pazienza e metodo. Ecco perché.',
  },
  {
    id: 6,
    src: videoGonfiore,
    title: 'Gonfiore? Forse è il sale',
    description: 'Un eccesso di sale può causare ritenzione e gonfiore: ecco cosa sapere.',
  },
];

function VideoCard({ video, onClick }) {
  const previewRef = useRef(null);
  const containerRef = useRef(null);

  // Force a frame to be decoded (some videos start with a black frame)
  const handleLoadedMetadata = () => {
    const v = previewRef.current;
    if (!v) return;
    try {
      // Seek to a small offset to ensure a non-black frame is rendered as poster
      if (v.duration && v.duration > 0.5 && v.currentTime < 0.05) {
        v.currentTime = 0.1;
      }
    } catch {}
  };

  // Autoplay muted previews always (looping silently for preview)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (previewRef.current) {
          if (entry.isIntersecting) {
            previewRef.current.play().catch(() => {});
          } else {
            previewRef.current.pause();
          }
        }
      },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="group relative aspect-[9/16] bg-black rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Video preview - always playing silently */}
      <video
        ref={previewRef}
        src={video.src}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        onLoadedMetadata={handleLoadedMetadata}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      {/* Play icon - center, fades on hover */}
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:scale-90">
        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl">
          <Play className="w-7 h-7 text-white fill-white ml-1" />
        </div>
      </div>

      {/* Title and description */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="text-white font-bold text-base sm:text-lg leading-tight mb-1 drop-shadow-lg">
          {video.title}
        </h3>
        <p className="text-white/80 text-xs sm:text-sm line-clamp-2 drop-shadow-md">
          {video.description}
        </p>
      </div>
    </div>
  );
}

function VideoModal({ video, videos, currentIndex, onClose, onNavigate }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {});
          }
        });
      }
    }
  }, [video.id]);

  // Keyboard + wheel navigation (with loop)
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') onNavigate(-1);
    };

    let wheelLock = false;
    const handleWheel = (e) => {
      e.preventDefault();
      if (wheelLock) return;
      if (Math.abs(e.deltaY) < 10) return;
      wheelLock = true;
      onNavigate(e.deltaY > 0 ? 1 : -1);
      setTimeout(() => {
        wheelLock = false;
      }, 600);
    };

    // Touch swipe (mobile)
    let touchStartY = null;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e) => {
      if (touchStartY === null) return;
      const dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dy) > 50) {
        onNavigate(dy < 0 ? 1 : -1);
      }
      touchStartY = null;
    };

    window.addEventListener('keydown', handleKey);
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      document.body.style.overflow = '';
    };
  }, [onClose, onNavigate]);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !isMuted;
      videoRef.current.muted = newMuted;
      setIsMuted(newMuted);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      {/* Close button - top right, very visible */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="fixed top-20 right-4 sm:top-24 sm:right-6 z-[210] w-12 h-12 rounded-full bg-red-500/20 hover:bg-red-500/40 backdrop-blur-md border border-red-300/40 flex items-center justify-center text-red-100 hover:text-white transition-all duration-300 hover:scale-110 shadow-2xl"
        aria-label="Chiudi"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Video counter top-left */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[210] bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium px-3 py-1.5 rounded-full">
        {currentIndex + 1} / {videos.length}
      </div>

      {/* Video container */}
      <div
        className="relative h-[90vh] max-h-[900px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          key={video.id}
          src={video.src}
          className="w-full h-full object-cover"
          autoPlay
          loop
          playsInline
          muted={isMuted}
        />

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 pr-20 z-20">
          <h3 className="text-white font-bold text-xl mb-2 drop-shadow-lg">{video.title}</h3>
          <p className="text-white/90 text-sm drop-shadow-md">{video.description}</p>
        </div>

        {/* Mute toggle - bottom right */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 z-30 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
          aria-label={isMuted ? 'Attiva audio' : 'Disattiva audio'}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation Buttons - desktop side */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(-1);
        }}
        className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-[210] w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/30 items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Precedente"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(1);
        }}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-[210] w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/30 items-center justify-center text-white transition-all duration-300 hover:scale-110"
        aria-label="Successivo"
      >
        <ChevronDown className="w-6 h-6" />
      </button>

      {/* Mobile swipe hint */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[210] text-white/60 text-xs font-medium animate-pulse">
        Tocca per chiudere
      </div>
    </div>
  );
}

export function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleNavigate = (direction) => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      const len = videos.length;
      return (prev + direction + len) % len;
    });
  };

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-emerald-50/30 to-slate-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Play className="w-3.5 h-3.5 fill-emerald-700" />
            Pillole sulla nutrizione
          </div>
         
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Curiosità per migliorare le tue abitudini.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <a
            href="https://www.facebook.com/SliceNutrizione/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40 hover:scale-105"
          >
            <Facebook className="w-5 h-5" />
            Scopri altre curiosità
          </a>
        </div>
      </div>

      {/* Modal */}
      {activeIndex !== null && (
        <VideoModal
          video={videos[activeIndex]}
          videos={videos}
          currentIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={handleNavigate}
        />
      )}
    </section>
  );
}
