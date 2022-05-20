function Quad(A,B,C)
{   
    let b=B*(-1)
    let k=Math.sqrt((B**2 - 4*A*C))
    let X1 = (b + k)/2*A
    let X2 = (b -k)/2*A
    console.log(X1)
    console.log(X2)
}
Quad(1,-3,-10)