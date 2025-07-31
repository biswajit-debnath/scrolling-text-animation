# Step 1: Project Setup and Basic HTML Structure

## What We Created:
- `index.html` - The main HTML file with proper structure and library imports

## Key Learning Points:

### HTML Structure:
1. **DOCTYPE and Meta Tags**: Standard HTML5 setup with responsive viewport
2. **Main Container**: `<main>` element will serve as our scroll trigger area
3. **Text Element**: `<p class="text-revel">` contains our text to be animated
4. **Highlight Span**: `<span class="highlights">` will have special animations

### Library Imports (in order of loading):
1. **GSAP Core** - The main animation library that handles all animations
2. **ScrollTrigger** - GSAP plugin that triggers animations based on scroll position
3. **SplitType** - Splits text into individual characters/words/lines for granular animation
4. **Lenis** - Provides smooth scrolling experience (better than native browser scrolling)

### Why This Order Matters:
- GSAP core must load first as other plugins depend on it
- ScrollTrigger depends on GSAP core
- SplitType and Lenis are independent but we load them before our custom script
- Our `script.js` loads last so it can use all the libraries

## What Each Library Does:

### GSAP (GreenSock Animation Platform):
- Industry-standard animation library
- Provides smooth, performant animations
- Works with CSS properties, transforms, and more

### ScrollTrigger:
- GSAP plugin for scroll-based animations
- Triggers animations when elements enter/leave viewport
- Allows pinning elements during scroll
- Provides scrubbing (animation tied directly to scroll position)

### SplitType:
- Automatically wraps each character/word in spans
- Enables individual character animations
- Preserves original text structure

### Lenis:
- Smooth scrolling library
- Better than native browser scrolling
- Integrates well with GSAP ScrollTrigger

## Next Steps:
In the next step, we'll create the CSS styling to make our text look good and set up the basic layout.
