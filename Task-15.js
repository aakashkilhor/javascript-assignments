// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// For x intercept y = 0 and for y intercept x = 0
function xintercept()
{
    let y = 0;
    x = (y + 2)/2 ;
    return x;
}
function yintercept ()
{
    let x = 0;    
    y = 2*x-2
    return y;
}
xi = xintercept();
console.log(`X intercept is ${xi}`);
let y1 = 0;
yi = yintercept();
console.log(`Y intercept is ${yi}`);
let x1 = 0;
m = ((yi-y1)/(x1-xi));
console.log(`Slope is ${m}`);