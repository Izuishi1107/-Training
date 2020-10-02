const textChange = () => {
	document.querySelector('h1').textContent = '文字が変わったよ！';
}

setTimeout(textChange,1000);