import re

with open('src/components/HeroSection.jsx', 'r') as f:
    content = f.read()

# Make the container wider
content = content.replace("max-w-[280px] sm:max-w-[320px] lg:max-w-[480px] lg:pl-10 pb-2 lg:pb-0 pt-0 lg:pt-8 -mt-6 lg:-mt-0", "max-w-[320px] sm:max-w-[400px] lg:max-w-[600px] lg:pl-4 pb-2 lg:pb-0 pt-0 lg:pt-4 -mt-6 lg:-mt-0")

# Adjust aspect ratio
content = content.replace("aspect-square lg:aspect-[4.2/5]", "aspect-square lg:aspect-[4/3]")

# Remove the refined label
# Let's find the Refined label block and remove it
pattern = r"{\s*/\*\s*Refined label - now slightly larger and at bottom-left of the image card\s*\*/\s*}.*?Nutrizionista e Dietista\s*</span>\s*</div>\s*</div>"
content = re.sub(pattern, "", content, flags=re.DOTALL)

with open('src/components/HeroSection.jsx', 'w') as f:
    f.write(content)

