import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowLeft } from 'lucide-react';
import sliceVideo from '../assets/videos/video-hero-slice.mp4';

export function HeroVideo({ className }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(true);

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setHasInteracted(true);
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Try to autoplay with sound. If browser blocks it, fall back to muted.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser blocked unmuted autoplay - fall back to muted and show CTA
        video.muted = true;
        setIsMuted(true);
        setHasInteracted(false);
        video.play().catch(err => console.log("Autoplay prevented:", err));
      });
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            // Try to restore unmuted playback when scrolling back into view
            videoRef.current.muted = false;
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  setIsMuted(false);
                })
                .catch(() => {
                  // Browser blocked unmuted - fallback to muted
                  if (videoRef.current) {
                    videoRef.current.muted = true;
                    setIsMuted(true);
                    videoRef.current.play().catch(err => console.log("Autoplay prevented:", err));
                  }
                });
            }
          } else {
            videoRef.current.pause();
            // Automatically mute when out of view
            videoRef.current.muted = true;
            setIsMuted(true);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden group ${className || ''}`}>
      <video
        ref={videoRef}
        src={sliceVideo}
        className="w-full h-full object-contain bg-black z-10 filter contrast-[1.05]"
        style={{ objectPosition: 'center' }}
        autoPlay
        loop
        muted={isMuted}
        playsInline
      />
      
      {/* Audio Mute/Unmute Toggle Button overlay */}
      <div className="absolute top-4 left-4 z-[100] flex items-center gap-3 w-full pointer-events-none">
        
        {/* Button Wrapper with explicit size and pointer-events-auto to catch clicks precisely on the shape */}
        <div 
           className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden pointer-events-auto cursor-pointer" 
           onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             toggleMute(e);
          }}
        >
          <div className="w-full h-full flex items-center justify-center bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 text-white transition-all duration-300 shadow-xl hover:scale-105">
            {isMuted ? (
              <VolumeX className="w-6 h-6 md:w-8 md:h-8 pointer-events-none" />
            ) : (
              <Volume2 className="w-6 h-6 md:w-8 md:h-8 pointer-events-none" />
            )}
          </div>
        </div>

        {/* Pulsing CTA string */}
        {!hasInteracted && isMuted && (
          <div className="flex items-center gap-2 text-white animate-pulse drop-shadow-md cursor-pointer pointer-events-auto" onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             toggleMute(e);
          }}>
            <ArrowLeft className="w-5 h-5 md:w-7 md:h-7 pointer-events-none" />
            <span className="font-bold text-sm md:text-base tracking-wide bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg pointer-events-none">
              Attiva l'audio!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
