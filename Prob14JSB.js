function leftRotate(arr, n, k){

    let mod = k % n;

    for (let i = 0; i < n; i++)
        console.log((arr[(mod + i) % n]));
 
}
 
leftRotate([1,2,3,4,5,6,7],7,3)