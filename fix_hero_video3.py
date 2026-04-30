import re

with open('src/components/HeroVideo.jsx', 'r') as f:
    content = f.read()

# We need to ensure pointer events are correct on the overlay container and button
old_overlay = """      {/* Audio Mute/Unmute Toggle Button overlay */}
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
        </button>"""

new_overlay = """      {/* Audio Mute/Unmute Toggle Button overlay */}
      {/* Increased z-index and explicit pointer-events to ensure constant clickability */}
      <div className="absolute top-4 left-4 z-[99] flex items-center gap-3 pointer-events-auto">
        <button
          onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             toggleMute(e);
          }}
          className="p-3 md:p-4 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 text-white transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-6 h-6 md:w-8 md:h-8 pointer-events-none" />
          ) : (
            <Volume2 className="w-6 h-6 md:w-8 md:h-8 pointer-events-none" />
          )}
        </button>"""

content = content.replace(old_overlay, new_overlay)

with open('src/components/HeroVideo.jsx', 'w') as f:
    f.write(content)

