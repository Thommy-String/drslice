import re

with open('src/components/HeroVideo.jsx', 'r') as f:
    content = f.read()

# Add ArrowLeft to imports
content = content.replace("import { Volume2, VolumeX } from 'lucide-react';", "import { Volume2, VolumeX, ArrowLeft } from 'lucide-react';")

# Replace from HeroVideo top up to useEffect bounds
old = """export function HeroVideo({ className }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

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

  return (
    <div className={`relative w-full h-full overflow-hidden group ${className || ''}`}>"""
    
new = """export function HeroVideo({ className }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
          } else {
            videoRef.current.pause();
            // Automatically mute when out of view
            videoRef.current.muted = true;
            setIsMuted(true);
            // Optionally, reset 'hasInteracted' so the prompt shows up again if desired
            // setHasInteracted(false); 
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
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden group ${className || ''}`}>"""

content = content.replace(old, new)


old_button = """      {/* Audio Mute/Unmute Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 left-4 z-50 p-2 md:p-2.5 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 text-white transition-all duration-300 shadow-xl"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 md:w-5 md:h-5" />
        ) : (
          <Volume2 className="w-4 h-4 md:w-5 md:h-5" />
        )}
      </button>"""

new_button = """      {/* Audio Mute/Unmute Toggle Button overlay */}
      <div className="absolute top-4 left-4 z-50 flex items-center gap-3">
        <button
          onClick={toggleMute}
          className="p-3 md:p-4 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md border border-white/30 text-white transition-all duration-300 shadow-xl hover:scale-105"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 md:w-8 md:h-8" />
          ) : (
            <Volume2 className="w-6 h-6 md:w-8 md:h-8" />
          )}
        </button>

        {/* Pulsing CTA string */}
        {!hasInteracted && isMuted && (
          <div className="flex items-center gap-2 text-white animate-pulse drop-shadow-md cursor-pointer" onClick={toggleMute}>
            <ArrowLeft className="w-5 h-5 md:w-7 md:h-7" />
            <span className="font-bold text-sm md:text-base tracking-wide bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
              Attiva l'audio!
            </span>
          </div>
        )}
      </div>"""

content = content.replace(old_button, new_button)

with open('src/components/HeroVideo.jsx', 'w') as f:
    f.write(content)

