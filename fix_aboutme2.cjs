const fs = require('fs');
const file = 'src/components/AboutMe.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">',
  '<div className="md:rounded-2xl overflow-hidden md:border border-white/10 shadow-xl">'
);

content = content.replace(
  '<div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-emerald-500/40 rounded-bl-xl -z-10" />',
  '<div className="hidden md:block absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-emerald-500/40 rounded-bl-xl -z-10" />'
);

content = content.replace(
  'className="w-full aspect-[4/5] object-cover scale-105"',
  'className="w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] object-cover md:scale-105"'
);

fs.writeFileSync(file, content);
