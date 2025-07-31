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
// 5. GSAP ANIMATIONS SETUP (Future Step)
// =============================================
// All our scroll-triggered animations will go here

// =============================================
// 6. SMOOTH SCROLLING SETUP (Future Step)
// =============================================
// Lenis configuration for enhanced scrolling experience