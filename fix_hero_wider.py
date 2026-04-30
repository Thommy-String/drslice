import re

with open('src/components/HeroSection.jsx', 'r') as f:
    content = f.read()

# Make the outer container even wider to accommodate
content = content.replace("max-w-7xl mx-auto px-4", "max-w-[90rem] mx-auto px-4")

# Also the text container should take up maybe 40% and video 60%
# Instead of strict grid-cols-2, let's change the grid template
content = content.replace("grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-start", "flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-12 items-center lg:items-start")

content = content.replace("order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0 relative z-20 overflow-visible w-full lg:pr-12", "order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0 relative z-20 overflow-visible w-full lg:w-5/12 lg:pr-8 lg:shrink-0")

content = content.replace("order-1 lg:order-2 relative mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[600px] lg:pl-4 pb-2 lg:pb-0 pt-0 lg:pt-4 -mt-6 lg:-mt-0", "order-1 lg:order-2 relative mx-auto w-full lg:w-7/12 max-w-[400px] sm:max-w-[500px] lg:max-w-[800px] pb-2 lg:pb-0 pt-0 lg:pt-4 -mt-6 lg:-mt-0")

content = content.replace("aspect-square lg:aspect-[4/3] border border-white/80", "aspect-square sm:aspect-[4/3] lg:aspect-[16/10] border border-white/80")
 
with open('src/components/HeroSection.jsx', 'w') as f:
    f.write(content)

