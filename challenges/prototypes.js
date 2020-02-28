/* ---- LETS PRACTICE PROTOTYPES ---- */

// Task: You are to build a pentagonal pyramid that can return values for its volume as well as its surface areas. Follow the steps to achieve this.

// Step 1: Base Constructor -- You should create a constructor function names PentagonalPyramid that will accept properties for its base edge, and heights.✅

// Step 2: Volume Method -- You should create a prototype for PentagonalPyramid that returns the volume of a pentagonal pyramid. Curious about the formula??? Use Google (A DEVELOPERS BEST FRIEND)

// Step 3: Surface Area Method -- You should create a prototype fro PentagonalPyramid that returns the surface area of a pentagonal pyramid. Curious about the formula??? Use Google (A DEVELOPERS BEST FRIEND)

// Step 4: New Object -- You should create a new object that uses PentagonalPyramid. Give it the length, width, and height.

// Test your volume and surfaceArea methods here using console.log

function PentagonalPyramid(input){
    this.baseEdge = input.baseEdge,
    this.height = input.height
}
PentagonalPyramid.prototype.volume = function(){
    return volume = (5/12) * Math.tan(54) * this.height * Math.pow(this.baseEdge, 2);
}

const test = new PentagonalPyramid({
    baseEdge: 5,
    height: 10
})

console.log(test);
console.log(test.volume());
