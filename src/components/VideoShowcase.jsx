import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Play, X, Facebook, ExternalLink, Volume2, VolumeX } from 'lucide-react';
import thumbHero from '../assets/thumbnails/video-hero-slice.jpg';
import thumbFibre from '../assets/thumbnails/video-fibre-slice.jpg';
import thumbPasta from '../assets/thumbnails/la-pasta-fa-male-domanda.jpg';
import thumbCibi from '../assets/thumbnails/cibi-buoni-e-cattivi.jpg';
import thumbServeTempo from '../assets/thumbnails/serve-tempo-slice.jpg';
import thumbGonfiore from '../assets/thumbnails/gonfiore-forse-eccesso-sale.jpg';

// Video files live in /public/videos/{previews,full}/{slug}.mp4
// Previews: 320p, ~6s, no audio, ~80–250KB each (lazy-loaded only when visible)
// Full: 540p, full duration, mono audio, ~1.5–2.7MB each (loaded on modal open)
const videos = [
  {
    id: 1,
    slug: 'video-hero-slice',
    fbUrl: 'https://www.facebook.com/reel/1475015316934969',
    title: 'Il Metodo SLICE',
    description: 'Una panoramica completa del nostro approccio rivoluzionario.',
    thumbnail: thumbHero,
  },
  {
    id: 2,
    slug: 'video-fibre-slice',
    fbUrl: 'https://www.facebook.com/reel/778289771893267',
    title: "L'importanza delle Fibre",
    description: 'Scopri perché le fibre sono fondamentali nella tua alimentazione quotidiana.',
    thumbnail: thumbFibre,
  },
  {
    id: 3,
    slug: 'la-pasta-fa-male-domanda',
    fbUrl: 'https://www.facebook.com/reel/813920464842881',
    title: 'La pasta fa male?',
    description: 'Sfatiamo uno dei miti più diffusi sulla nutrizione italiana.',
    thumbnail: thumbPasta,
  },
  {
    id: 4,
    slug: 'cibi-buoni-e-cattivi',
    fbUrl: 'https://www.facebook.com/reel/807042642249674',
    title: 'Cibi buoni e cattivi',
    description: 'Esistono davvero alimenti "cattivi"? La verità sul cibo.',
    thumbnail: thumbCibi,
  },
  {
    id: 5,
    slug: 'serve-tempo-slice',
    fbUrl: 'https://www.facebook.com/reel/1271520127798886',
    title: 'Serve Tempo per Cambiare',
    description: 'Il vero cambiamento richiede pazienza e metodo. Ecco perché.',
    thumbnail: thumbServeTempo,
  },
  {
    id: 6,
    slug: 'gonfiore-forse-eccesso-sale',
    fbUrl: 'https://www.facebook.com/reel/1687490845262920',
    title: 'Gonfiore? Forse è il sale',
    description: 'Un eccesso di sale può causare ritenzione e gonfiore: ecco cosa sapere.',
    thumbnail: thumbGonfiore,
  },
];

const previewSrc = (slug) => `/videos/previews/${slug}.mp4`;
const fullSrc = (slug) => `/videos/full/${slug}.mp4`;

function VideoCard({ video, onClick }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Lazy-load: only mount <video> when card enters viewport.
  // Prevents loading all 6 previews on page load (saves ~1MB on initial paint).
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Pause off-screen videos to save battery/CPU
  useEffect(() => {
    if (!shouldLoad) return;
    const el = containerRef.current;
    const vid = videoRef.current;
    if (!el || !vid) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      onClick={onClick}
      className="group relative aspect-[9/16] bg-black rounded-2xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Real video preview (autoplay, muted, looped) — lazy mounted */}
      {shouldLoad && (
        <video
          ref={videoRef}
          src={previewSrc(video.slug)}
          poster={video.thumbnail}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Thumbnail fallback (visible until video loads, or if video fails) */}
      {!shouldLoad && (
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-kenburns"
        />
      )}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30 pointer-events-none" />

      {/* Subtle play hint - bottom right (smaller, doesn't cover the video) */}
      <div className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-lg group-hover:bg-white/40 group-hover:scale-110 transition-all pointer-events-none">
        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
      </div>

      {/* Title and description - bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none">
        <h3 className="text-white font-bold text-base sm:text-lg leading-tight mb-1 drop-shadow-lg">
          {video.title}
        </h3>
        <p className="text-white/90 text-xs sm:text-sm line-clamp-2 drop-shadow-md">
          {video.description}
        </p>
      </div>
    </div>
  );
}

function VideoModal({ video, onClose }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(false);

  // Keyboard: Esc to close, M to toggle mute
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'm' || e.key === 'M') setMuted((m) => !m);
    };
    window.addEventListener('keydown', handleKey);

    // Scroll lock that does NOT break position:fixed children (portal):
    // lock <html> with overflow hidden + compensate scrollbar width.
    // Avoids the Safari/iOS bug where body{position:fixed} re-anchors fixed children.
    const html = document.documentElement;
    const { body } = document;
    const scrollbarWidth = window.innerWidth - html.clientWidth;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPaddingRight: body.style.paddingRight,
      bodyTouchAction: body.style.touchAction,
    };
    html.style.overflow = 'hidden';
    body.style.overflow = 'hidden';
    body.style.touchAction = 'none';
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      window.removeEventListener('keydown', handleKey);
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      body.style.paddingRight = prev.bodyPaddingRight;
      body.style.touchAction = prev.bodyTouchAction;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[2147483646] bg-black backdrop-blur-xl flex items-center justify-center animate-fadeIn p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Close button - top right */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[2147483647] w-12 h-12 rounded-full bg-red-500/20 hover:bg-red-500/40 backdrop-blur-md border border-red-300/40 flex items-center justify-center text-red-100 hover:text-white transition-all duration-300 hover:scale-110 shadow-2xl"
        aria-label="Chiudi"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Video container — auto-fits viewport while preserving 9:16.
          Height is min(availableHeight, widthBasedHeight) so it never overflows. */}
      <div
        className="relative rounded-2xl overflow-hidden shadow-2xl bg-black"
        style={{
          aspectRatio: '9 / 16',
          height: 'min(calc(100dvh - 2rem), calc((100vw - 2rem) * 16 / 9))',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Native HTML5 video — local file, full quality with audio. No native controls. */}
        <video
          ref={videoRef}
          key={video.id}
          src={fullSrc(video.slug)}
          poster={video.thumbnail}
          autoPlay
          muted={muted}
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload noplaybackrate noremoteplayback"
          className="w-full h-full object-cover bg-black"
        />

        {/* Mute toggle - top left */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMuted((m) => !m);
          }}
          className="absolute top-3 left-3 z-30 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
          aria-label={muted ? 'Riattiva audio' : 'Disattiva audio'}
        >
          {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>

        {/* Open on Facebook link - bottom overlay */}
        <a
          href={video.fbUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5 bg-blue-600/90 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <Facebook className="w-3.5 h-3.5" />
          Apri su Facebook
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>,
    document.body
  );
}

export function VideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(null);

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
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}
