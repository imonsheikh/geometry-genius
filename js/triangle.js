/**
 * objective: get base, height of a triangle. calculate the area by using the provided formula and then display the area
 *
 * step-01: get the base value of the triangle
 * step-02: added an id in the base input field;
 * step-03: use getElementById to access the inputField
 * step-04: get value from the input field.(string value)
 * step-05: convert the value to a number. use parseFloat
 */

function calculateTriangleArea() {
    // get triangle base value 
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);
  console.log(base);

//   console.log(typeof base);

// get triangle height value 
const triangleHeightInput = document.getElementById('triangle-height');
const triangleHeightText = triangleHeightInput.value;
const height = parseFloat(triangleHeightText)

console.log(height);

// calculate triangle area 
const area = 0.5 * base * height;

console.log('area of the triangle is:', area);

// display triangle area
const triangleAreaSpan = document.getElementById('triangle-area');
triangleAreaSpan.innerText = area;

}




