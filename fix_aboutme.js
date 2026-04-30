const fs = require('fs');
const file = 'src/components/AboutMe.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  '<div className="max-w-6xl mx-auto px-6 relative z-10">',
  '<div className="max-w-6xl mx-auto md:px-6 relative z-10">'
);

content = content.replace(
  '<div className="lg:w-1/5 md:w-1/3 w-full lg:mx-0">',
  '<div className="lg:w-1/5 md:w-1/3 w-full lg:mx-0 -mx-6 w-[calc(100%+3rem)] md:mx-0 md:w-1/3">'
);


fs.writeFileSync(file, content);
