'use strict';

document.querySelector('.button').addEventListener('click',() =>{
	document.getElementById('target').textContent = '文字が変わったよ！';
});
document.querySelector('.button2').addEventListener('click',()=>{
	for(let i = 0;i < 5;i++){
		document.getElementsByClassName('hello')[i].textContent = 'お疲れ様です';
	}
});

document.querySelector('.button3').addEventListener('click',()=>{
	document.getElementById('target').textContent = '文字が変わったよ！';
	for(let i = 0;i < 5;i++){
		document.getElementsByClassName('hello')[i].textContent = 'お疲れ様です';
	}
});

document.querySelector('.button4').addEventListener('click',()=>{
	location.reload();
});

document.querySelector('.button5').addEventListener('click',()=>{
	const targetNode = document.getElementById('target');
	targetNode.textContent = '文字が変わったよ！';
	targetNode.style.color="red";
	
	
	for(let i = 0;i < 5;i++){
		const targetNode2 = document.getElementsByClassName('hello')[i];
		
		targetNode2.textContent = 'お疲れ様です。';
		targetNode2.style.backgroundColor="skyblue";
	}
});