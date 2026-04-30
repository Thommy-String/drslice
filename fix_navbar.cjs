const fs = require('fs');

const navbarPath = 'src/components/Navbar.jsx';
let content = fs.readFileSync(navbarPath, 'utf8');

// 1. Change position from fixed to sticky
content = content.replace('nav className={`fixed top-0 left-0 right-0 w-full z-[100]', 'nav className={`sticky top-0 w-full z-[100]');

// 2. Adjust height
content = content.replace('h-14 lg:h-20', 'h-12 lg:h-16');

// 3. Make scroll up show navbar
content = content.replace(
  /if \(currentScrollY > lastScrollY && !isOpen\) {\s+setVisible\(false\);\s+} else {\s+setVisible\(true\);\s+}/g,
  `if (currentScrollY < lastScrollY) {
          setVisible(true);
        } else if (currentScrollY > 100 && currentScrollY > lastScrollY && !isOpen) {
          setVisible(false);
        }`
);

// 4. Update the mobile menu overlay so the button is at the top
const overlayRegex = /<div className="flex flex-col h-full p-6 pt-24">([\s\S]*?)<\/div>\s*<\/div>\s*<\/nav>/m;
const match = content.match(overlayRegex);

if (match) {
  const newOverlayContent = `<div className="flex flex-col h-full p-6 pt-20 overflow-y-auto">
          
          <div className={\`mb-6 transition-all duration-700 \${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }\`}
          style={{ transitionDelay: isOpen ? '100ms' : '0ms' }}>
            <a 
              href={SOCIAL_LINKS.miodottore}
              target="_blank"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between w-full p-5 bg-slate-900 text-white rounded-[1.5rem] text-lg font-bold transition-all hover:bg-emerald-600 shadow-xl shadow-slate-900/20"
            >
              <span>Prenota Visita</span>
              <div className="bg-white/20 p-2 rounded-full">
                <ChevronRight className="w-5 h-5" />
              </div>
            </a>
          </div>

          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link, index) => (
              <a 
                key={link.label}
                href={getNavHref(link.href)} 
                onClick={() => setIsOpen(false)}
                className={\`group p-4 rounded-[1.5rem] bg-slate-50/50 text-xl font-bold text-slate-900 flex items-center justify-between transition-all duration-500 border border-transparent hover:border-emerald-100 hover:bg-emerald-50/50 \${
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }\`}
                style={{ transitionDelay: isOpen ? \`\${index * 50 + 200}ms\` : '0ms' }}
              >
                <span className="group-hover:translate-x-2 transition-transform duration-300">{link.label}</span>
                <ChevronRight className="w-5 h-5 text-emerald-500 transform group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </nav>`;

  content = content.replace(match[0], newOverlayContent);
}

// 5. Replace logo sizes
content = content.replace(/h-10 lg:h-16/g, 'h-8 lg:h-12');

// 6. Make sure background works for sticky behavior on mobile
content = content.replace(/bg-transparent py-1\.5/g, 'bg-[#f0f7f4] lg:bg-transparent py-1.5');

// Additional scroll logic to ensure it works properly

fs.writeFileSync(navbarPath, content, 'utf8');

console.log('Navbar updated successfully.');
