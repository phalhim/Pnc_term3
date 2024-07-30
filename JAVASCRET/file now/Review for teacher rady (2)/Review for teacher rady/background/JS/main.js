let position = "to left";
let coler1 = "red";
let coler2 ="yellow";

// Template string 
document.body.style.background=`linear-gradient(${position},${coler1},${coler2})`;

// simple connet value wiht stribg
document.body.style.background=`linear-gradient('position','coler1','coler2')`;