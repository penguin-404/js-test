// Immediately Invoked Function Expressions [IIFE]

(function chai(){
    // named IIFE
    // console.log(`DB Connected`);
})();

// IIFE => Global scope causes pollution a lot of times in the program. To remove the pollution that are caused due to the declaration of the global variables IIFE is used.
// Simple IIFE or Unnamed IIFE
( () => {
    // console.log(`DB Connected two`);
} )();

( (name) => {
    console.log(`She is not just SQL. She is ${name}`);
} )('MySQL')
