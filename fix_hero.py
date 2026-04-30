import re

with open('src/components/HeroSection.jsx', 'r') as f:
    content = f.read()

# Add import
content = content.replace("import paoloImg from '../assets/Paolo/paoloheroimage.png'", "import paoloImg from '../assets/Paolo/paoloheroimage.png'\nimport { HeroVideo } from './HeroVideo'")

# Replace image with video
img_pattern = r"{/\* Main Hero Image \*/}.*?<img.*?style={{ objectPosition: 'center 15%' }}\n\s*/>"
video_str = """{/* Main Hero Video Component */}
                <HeroVideo className="relative z-10 w-full h-full" />"""

content = re.sub(img_pattern, video_str, content, flags=re.DOTALL)

with open('src/components/HeroSection.jsx', 'w') as f:
    f.write(content)

