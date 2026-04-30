import re

with open('src/components/HeroVideo.jsx', 'r') as f:
    content = f.read()

# Let's cleanly replace the entire button container
old_overlay = """      {/* Audio Mute/Unmute Toggle Button overlay */}
      {/* Increased z-index and explicit pointer-events to ensure constant clickability */}
      <div className="absolute top-4 left-4 z-[999] flex items-center gap-3 pointer-events-auto">
        <button
          onClick={(e) => {
             e.preventDefault();
             e.stopPropagation();
             toggleMute(e);
          }}
          className="relative flex items-center justify-center shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/30 text-white transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {/* Explicit overlay inside the button to forcefully capture all clicks uniformly over the entire circular area */}
          <span className="absolute inset-0 w-full h-full rounded-full cursor-pointer z-10"></span>
          
          {isMuted ? (
            <VolumeX className="w-6 h-6 md:w-8 md:h-8 relative z-20 pointer-events-none" />
          ) : (
            <Volume2 className="w-6 h-6 md:w-8 md:h-8 relative z-20 pointer-events-none" />
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

new_overlay = """      {/* Audio Mute/Unmute Toggle Button overlay */}
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
      </div>"""

content = content.replace(old_overlay, new_overlay)

with open('src/components/HeroVideo.jsx', 'w') as f:
    f.write(content)

