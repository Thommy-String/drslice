import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import sliceVideo from '../assets/videos/video-hero-slice.mp4';

export function VideoReel() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const toggleMute = (e) => {
    e.preventDefault();
    e.stopPropagation();
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
          } else {
            videoRef.current.pause();
            videoRef.current.muted = true;
            setIsMuted(true);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-screen bg-black overflow-hidden flex items-center justify-center h-screen md:h-screen"
      style={{ marginLeft: 'calc(-50vw + 50%)' }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={sliceVideo}
        className="w-full h-full object-fill md:object-contain"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      />

      {/* Audio Toggle Button - Floating bottom right */}
      <div className="absolute bottom-8 right-8 z-50">
        <button
          onClick={toggleMute}
          className="relative flex items-center justify-center shrink-0 w-14 h-14 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 text-white transition-all duration-300 shadow-xl hover:scale-110 cursor-pointer"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 pointer-events-none" />
          ) : (
            <Volume2 className="w-6 h-6 pointer-events-none" />
          )}
        </button>
      </div>

      {/* Scroll Indicator - Bottom center */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-xs font-medium">Scorri</span>
          <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
