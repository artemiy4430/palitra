// const parent = document.getElementById('parent'); 
// const child = document.getElementById('child'); 
// const descandant = document.getElementById('descandant'); 
// descandant.addEventListener('click',() =>{
// alert('you clicked descandant')
// }); 
// parent.addEventListener('click', () => {
// 	alert('you clicked parent')
// }); 
// child.addEventListener('click', () => {
// 	alert('you clicked descandant')
// })

let output = document.querySelector('.output')
let colorPalette = document.querySelector('.colorPalette')

colorPalette.addEventListener('click', colorSelector)

function colorSelector(e) {
	if (e.target.nodeName !== 'BUTTON') {
		return
	}
	let colorSelected = e.target.dataset.color
	output.innerHTML = `${colorSelected} - ви обрали колір`
	output.style.color = colorSelected
}

function colorCreate() {
	let items = []
	for (let i = 0; i < 60; i++) {
		const randomColor = getRandomColor()
		let button = document.createElement('button')
		button.type = 'button'
		button.dataset.color = randomColor
		button.style.backgroundColor = randomColor
		button.classList.add('element')
		items.push(button)
	}
	colorPalette.append(...items)
}

function getRandomColor() {
	return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`
}

function getRandomHex() {
	return Math.floor(Math.random() * 256)
		.toString(16)
		.padStart(2, '0')
}

colorCreate()
