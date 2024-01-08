/* Euclidean distance between two points in Euclidean space is the length of the line segment between them. Uses Pythagorean theorem. */
function euclideanDistance(p1, p2) {
  /* First, check to see if points have the same number of dimensions. If not, we throw an error. */
  if (p1.length != p2.length){
   throw new Error("Incompatible Points");
  }
  /* Calculate the squared distance here. Loop through all of the dimensions. At each step we add the differenc on each dimension square. Return square root of value. */
 let sqDist = 0;
 for (let i = 0; i < p1.length; i++) {
   sqDist += (p2[i] - p1[i]) ** 2;
 }
 /* Raising it to 0.5 alleviates the need for a library in this instance */
 return sqDist ** 0.5;
}