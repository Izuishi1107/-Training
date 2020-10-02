'use strict';

document.write("Hello World!");
alert("Hello World!");

console.log("因果"+"応報");


let x = 3.14;
x = 3;　 //値を変えようとしてみる。
console.log(x);

console.log(`円周率は${x}で計算してください。`);


let nameList = ['佐藤', '伊藤', '鈴木', '木村', '田中', '高橋'];
for ( let i = 0; i < nameList.length; i++ ) {
	console.log ( nameList[i] );
}



const fruitList = ["リンゴ","バナナ","イチゴ"];

for ( let i = 0; i < 3; i++ ) {
	if ( i % 2 != 0 ) continue; //←2で割り切れる時だけ処理を行わない。
	console.log (fruitList[i]);
}

let ichi=1;
if(ichi === 1){
	console.log(`Xは${ichi}です`);
}
//==の使いどころがよくわからないな。。。
