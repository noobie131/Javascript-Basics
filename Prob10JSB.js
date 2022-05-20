/*
var n = [3,9,1,44,6];

n.sort(function(a, b) {
  for(i=0;i<n.length;i++)
  {
  if(n[i]%2 == 0)
   { return a - b;}
  }
});

console.log(n);

*/

function Numeric_sort(ar) {
     
    for(i=0;i<ar.length;i++){
    
        for(j=i+1;j<ar.length;j++){
            
            if(ar[i]%2 == 0)
                {
            if (ar[j] < ar[i]) {
                
                var temp = ar[i];
                ar[i] = ar[j];
                ar[j] = temp;
                }
            } 
    }
    }
    console.log(ar)
}

var arr = [3,9,1,44,6];
Numeric_sort(arr)


     