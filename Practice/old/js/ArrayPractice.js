// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((number) => number * 2);
// console.log(doubled);

const newArr = [1,2,3,4,5];

for(i=0;i<newArr.length;i++){
    console.log(newArr[i]);
    
}
console.log("for文出力ここまで");

const sumArr = newArr.map((arr) => arr+"こ");
console.log(sumArr);
