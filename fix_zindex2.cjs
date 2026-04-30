const fs = require('fs')

const heroFile = '/Users/thomasdascalu/Desktop/slice nutrizione/src/components/HeroSection.jsx'
let content = fs.readFileSync(heroFile, 'utf8')

// Services Wrapper Z-index
content = content.replace(/<div className="mt-8 lg:mt-12 w-\[100vw\] ml-\[calc\(-50vw\+50\%\)\] relative z-10">\n\s*<Services \/>/g, '<div className="mt-8 lg:mt-12 w-[100vw] ml-[calc(-50vw+50%)] relative z-50">\n            <Services />')

// Locations Wrapper Z-index
content = content.replace(/<div className="mt-8 lg:mt-12 w-\[100vw\] ml-\[calc\(-50vw\+50\%\)\] relative z-10">\n\s*<Locations \/>/g, '<div className="mt-8 lg:mt-12 w-[100vw] ml-[calc(-50vw+50%)] relative z-0">\n            <Locations />')

fs.writeFileSync(heroFile, content, 'utf8')
