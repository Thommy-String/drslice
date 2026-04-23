const fs = require('fs');

// File 1: Sedi/Locations
const locFile = '/Users/thomasdascalu/Desktop/slice nutrizione/src/components/Locations.jsx';
let locContent = fs.readFileSync(locFile, 'utf8');
locContent = locContent.replace(/<section className=\"py-20 bg-slate-50\/50\" id=\"sedi\">/, '<section className="py-20 bg-slate-50/50 relative z-10" id="sedi">');
fs.writeFileSync(locFile, locContent, 'utf8');

// File 2: App.jsx (Main container stacking context)
const appFile = '/Users/thomasdascalu/Desktop/slice nutrizione/src/App.jsx';
let appContent = fs.readFileSync(appFile, 'utf8');
appContent = appContent.replace(/<div className=\"min-h-screen bg-slate-50 font-sans text-slate-900\">/, '<div className="min-h-screen bg-slate-50 font-sans text-slate-900 relative">');
fs.writeFileSync(appFile, appContent, 'utf8');

// File 3: Services.jsx z-index sanity check
const servFile = '/Users/thomasdascalu/Desktop/slice nutrizione/src/components/Services.jsx';
let servContent = fs.readFileSync(servFile, 'utf8');
servContent = servContent.replace(/className=\"fixed inset-0 z-\[1000\] flex items-end justify-center\"/g, 'className="fixed inset-0 z-[9999] flex items-end justify-center"');
fs.writeFileSync(servFile, servContent, 'utf8');

