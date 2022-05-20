function palindrome(n)
{   
    
    for(i=1;i<=n;i++)
    {
    let x=String(i)
    var y=''
    for(j=0;j<x.length;j++)
    {
        y=x[j]+y
    }
    if (x==y)
    console.log(x);
    }
}
palindrome(152)