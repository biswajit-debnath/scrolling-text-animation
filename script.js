/*
   ===============================================
   SCROLLING TEXT ANIMATION - LEARNING PROJECT
   ===============================================
   
   This project demonstrates:
   - GSAP (GreenSock) animations for smooth text effects
   - SplitType for character-by-character text splitting
   - ScrollTrigger for scroll-based animation timing
   - Lenis for enhanced smooth scrolling experience
   
   Learning Objectives:
   - Understand how libraries work together
   - Master scroll-triggered animations
   - Learn character-level text manipulation
   - Create smooth, professional animations
*/

// =============================================
// 1. LIBRARY LOADING VERIFICATION
// =============================================
console.log("🚀 JavaScript file loaded successfully!");

// Check if all our animation libraries loaded correctly
console.log("📚 Library Status Check:");
console.log("  ✓ GSAP loaded:", typeof gsap !== 'undefined' ? "✅ Success" : "❌ Failed", gsap);
console.log("  ✓ ScrollTrigger loaded:", typeof ScrollTrigger !== 'undefined' ? "✅ Success" : "❌ Failed", ScrollTrigger);
console.log("  ✓ SplitType loaded:", typeof SplitType !== 'undefined' ? "✅ Success" : "❌ Failed", SplitType);
console.log("  ✓ Lenis loaded:", typeof Lenis !== 'undefined' ? "✅ Success" : "❌ Failed", Lenis);

// =============================================
// 2. DOM ELEMENT REFERENCES
// =============================================
/*
   Getting references to our HTML elements before we manipulate them
   We use querySelector (single element) vs querySelectorAll (multiple elements)
*/

// Get the highlighted span element (there's only one, so querySelector is better than querySelectorAll)
const highlightedSpan = document.querySelector('.highlights');

console.log("🎯 DOM Element References:");
console.log("  ✓ Highlighted span found:", highlightedSpan ? "✅ Success" : "❌ Not found");

if (highlightedSpan) {
    console.log("  ✓ Text content:", `"${highlightedSpan.textContent}"`);
    console.log("  ✓ Current color:", getComputedStyle(highlightedSpan).color);
    console.log("  ✓ Element ready for badge insertion");
} else {
    console.error("❌ Could not find .highlights element!");
}

// =============================================
// 3. SPLITTYPE SETUP
// =============================================
/*
   SplitType automatically wraps each character in a <span> element
   This allows us to animate individual characters independently
   
   What happens:
   Before: "Hello" 
   After:  <span class="char">H</span><span class="char">e</span><span class="char">l</span><span class="char">l</span><span class="char">o</span>
*/

const splitText = new SplitType('.text-revel', {
    /*
       types: 'chars' tells SplitType to split by individual characters
       Other options include:
       - 'words' (split by words)
       - 'lines' (split by lines)  
       - 'chars,words' (split by both)
    */
    types: 'chars'
});

console.log("📖 SplitType Results:");
console.log("  ✓ SplitType instance:", splitText);
console.log("  ✓ Characters created:", splitText.chars ? splitText.chars.length : 0);
console.log("  ✓ Individual characters:", splitText.chars);

/*
   IMPORTANT: After SplitType runs, we can access:
   - splitText.chars = array of all character elements
   - Each character is now a <span class="char"> element
   - We can animate these characters with GSAP using the class '.char'
*/

// =============================================
// 4. DYNAMIC ELEMENT CREATION
// =============================================
/*
   Creating the animated badge element dynamically with JavaScript
   This is better than hardcoding it in HTML because:
   1. It keeps our HTML clean and semantic
   2. We can conditionally create it based on JavaScript availability
   3. We have full control over when and how it's created
*/

if (highlightedSpan) {
    // Create a new span element for our animated badge
    const badge = document.createElement('span');
    
    /*
       Set the CSS class - this connects to our .highlighted-one styles
       The CSS we created in Step 2 will automatically apply:
       - position: absolute
       - opacity: 0 (hidden initially)
       - circular shape, orangered background, etc.
    */
    badge.className = 'highlighted-one';
    
    /*
       Set the content - this will be the number "1" inside the circle
       You could make this dynamic (like a counter) in more complex projects
    */
    badge.textContent = "1";
    
    /*
       Append the badge to the highlighted span
       This makes the badge a child of .highlights, so our absolute positioning works
    */
    highlightedSpan.appendChild(badge);
    
    console.log("🎯 Dynamic Element Creation:");
    console.log("  ✅ Badge element created successfully");
    console.log("  ✅ Badge element:", badge);
    console.log("  ✅ Badge positioned relative to:", highlightedSpan.textContent);
    console.log("  ✅ Badge should be invisible (opacity: 0) until animated");
    
} else {
    console.error("❌ Cannot create badge - highlighted span not found!");
}

// =============================================
// 5. BASIC ANIMATION TEST (DISABLED FOR SCROLL ANIMATIONS)
// =============================================
/*
   These basic animations were for testing - now commented out
   so they don't interfere with our scroll-triggered animations
*/

/*
console.log("🎬 Starting Basic Animation Test:");

// Test 1: Badge fade-in animation
gsap.to('.highlighted-one', {
    opacity: 1,
    duration: 1,
    delay: 1,
    ease: "power2.out",
    onStart: () => console.log("  ✅ Badge animation started"),
    onComplete: () => console.log("  ✅ Badge animation completed - badge should be visible!")
});

// Test 2: Character animation preview (very subtle)
gsap.from('.text-revel .char', {
    yPercent: -10,
    opacity: 0.3,
    duration: 2,
    delay: 0.5,
    stagger: 0.03,
    ease: "power2.out",
    onStart: () => console.log("  ✅ Character animation preview started"),
    onComplete: () => console.log("  ✅ Character animation preview completed")
});

console.log("  ⏳ Animations queued - watch the page for 3 seconds!");
*/

// =============================================
// 6. SCROLLTRIGGER TIMELINE SETUP
// =============================================
/*
   Creating a GSAP timeline with ScrollTrigger for scroll-based animations
   This is the foundation of our scrolling text animation
*/

console.log("🎬 Setting up ScrollTrigger Timeline:");

const scrollTimeLine = gsap.timeline({
    scrollTrigger: {
        /*
           trigger: 'main' - The element that triggers the animation
           When this element enters the viewport, animations start
        */
        trigger: 'main',
        
        /*
           scroller: 'body' - The scrolling container
           Usually 'body' for full-page scrolling
           Could be a specific div for custom scroll containers
        */
        scroller: 'body',
        
        /*
           scrub: true - Animation progress tied directly to scroll position
           - true: Animation syncs perfectly with scroll
           - number (like 1): Adds smooth delay to animation
           - false: Animation plays once when triggered
        */
        scrub: true,
        
        /*
           pin: true - "Pins" the trigger element during animation
           The main element stays fixed while user scrolls
           Creates the effect of scrolling "through" the animation
        */
        pin: true,
        
        /*
           start/end determine when animation begins/ends
           Default: "top bottom" and "bottom top"
           We're using defaults which work perfectly for our use case
        */
        
        // Debug markers (uncomment to see trigger points)
        // markers: true,
        
        // Callbacks for debugging
        onStart: () => console.log("  ✅ ScrollTrigger animation started"),
        onComplete: () => console.log("  ✅ ScrollTrigger animation completed"),
        onUpdate: self => {
            // Log progress occasionally (every 25%)
            if (Math.floor(self.progress * 4) !== Math.floor((self.progress - 0.01) * 4)) {
                console.log(`  📊 Animation progress: ${Math.round(self.progress * 100)}%`);
            }
        }
    }
});

console.log("  ✅ ScrollTrigger timeline created:", scrollTimeLine);
console.log("  ✅ Ready to add animations to timeline");

// =============================================
// 7. TIMELINE ANIMATIONS
// =============================================
/*
   Adding animations to our ScrollTrigger timeline
   Each animation will play in sequence as the user scrolls
*/

console.log("🎭 Adding animations to timeline:");

// Animation 1: Character Reveal
scrollTimeLine.from('.text-revel .char', {
    /*
       yPercent: -20 - Characters start 20% above their normal position
       Using yPercent instead of y makes it responsive to character size
    */
    yPercent: -20,
    
    /*
       opacity: 0 - Characters start completely invisible
       They will animate to their natural opacity (1)
    */
    opacity: 0,
    
    /*
       willChange: 'transform' - Tells browser to optimize for transform animations
       This improves performance during scroll-triggered animations
    */
    willChange: 'transform',
    
    /*
       stagger: 0.05 - Each character starts 0.05 seconds after the previous one
       Creates the typewriter effect as characters appear sequentially
    */
    stagger: 0.05,
    
    /*
       No duration needed - ScrollTrigger with scrub handles timing
       Animation duration is determined by scroll distance
    */
});

console.log("  ✅ Character reveal animation added to timeline");

// Animation 2: Highlight Color Change
scrollTimeLine.to(highlightedSpan, {
    /*
       color: '#c75656' - Changes text color to a red shade
       This creates visual emphasis on the highlighted word "distracting"
       The color transition happens after characters are revealed
    */
    color: '#c75656',
    
    /*
       The CSS transition we added earlier (transition: color 0.3s ease-in-out)
       will work together with this GSAP animation for smooth color changes
    */
});

console.log("  ✅ Highlight color change animation added to timeline");

// Animation 3: Badge Keyframe Animation
scrollTimeLine.to('.highlighted-one', {
    /*
       Keyframes allow multiple animation stages in one animation
       Each array represents the values at different points in the animation
    */
    keyframes: {
        /*
           yPercent: [0, -50, 0] - Badge movement in 3 stages:
           - Stage 1: 0 (normal position)
           - Stage 2: -50 (moves up 50% of its height)  
           - Stage 3: 0 (back to normal position)
           Creates a bounce-up effect
        */
        yPercent: [0, -50, 0],
        
        /*
           opacity: [0, 1, 1] - Badge visibility in 3 stages:
           - Stage 1: 0 (invisible)
           - Stage 2: 1 (fully visible)
           - Stage 3: 1 (stays visible)
           Badge fades in and stays visible after bounce
        */
        opacity: [0, 1, 1]
    }
});

console.log("  ✅ Badge keyframe animation added to timeline");

// =============================================
// 8. LENIS SMOOTH SCROLLING INTEGRATION
// =============================================
/*
   Setting up Lenis for buttery-smooth scrolling experience
   Lenis provides better scrolling than native browser scrolling
*/

function smoothScroll() {
    console.log("🚀 Initializing Lenis Smooth Scrolling:");
    
    /*
       Create new Lenis instance with default settings
       Lenis automatically detects the scrolling container and applies smooth scrolling
    */
    const lenis = new Lenis();
    
    /*
       Connect Lenis to GSAP ScrollTrigger
       Every time Lenis updates scroll position, it tells ScrollTrigger to update
       This ensures ScrollTrigger animations stay synchronized with smooth scrolling
    */
    lenis.on('scroll', ScrollTrigger.update);
    
    /*
       Set up RequestAnimationFrame loop using GSAP's ticker
       GSAP's ticker is more reliable than regular requestAnimationFrame
       lenis.raf() updates Lenis on every frame for smooth performance
    */
    gsap.ticker.add((time) => {
        /*
           time * 1000 converts GSAP's time (in seconds) to milliseconds
           Lenis expects time in milliseconds for proper timing calculations
        */
        lenis.raf(time * 1000);
    });
    
    /*
       Disable GSAP's lag smoothing for better Lenis integration
       This prevents GSAP from trying to "catch up" after frame drops
       Lenis handles timing more accurately without this interference
    */
    gsap.ticker.lagSmoothing(0);
    
    console.log("  ✅ Lenis instance created:", lenis);
    console.log("  ✅ Connected to ScrollTrigger");
    console.log("  ✅ RAF loop established with GSAP ticker");
    console.log("  ✅ Smooth scrolling is now active!");
}

// Initialize smooth scrolling
smoothScroll();