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
// 2. DOM ELEMENT REFERENCES (Next Step)
// =============================================
// We'll store references to our HTML elements here

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
// 4. DYNAMIC ELEMENT CREATION (Next Step)
// =============================================
// We'll create the animated badge element using JavaScript

// =============================================
// 5. GSAP ANIMATIONS SETUP (Future Step)
// =============================================
// All our scroll-triggered animations will go here

// =============================================
// 6. SMOOTH SCROLLING SETUP (Future Step)
// =============================================
// Lenis configuration for enhanced scrolling experience