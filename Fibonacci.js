function fibs(n){
    let fibArr = [];
    for(let i = 0; i < n; i++){
        if (i===0 || i===1){
            fibArr.push(i);
        }
        else{
            let result = fibArr[i-1] + fibArr[i-2];
            fibArr.push(result);
        }
    }
    console.log(fibArr);
}
fibs(8);






