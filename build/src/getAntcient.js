import { chain } from 'lodash';
import ancients from '../assets/Ancients/index.js';


export function getAntcient() {
	for (let key in ancients) {
		let div = document.createElement('div')
		div.id = key
		div.classList.add('ancient')
		div.style.backgroundImage = `url('${ancients[key]}')`
		document.querySelector('.ancients').append(div)
		div.addEventListener('click', getChoice)
	}
	//let arr = document.querySelectorAll('.ancient')
	console.log(arr)
}

export function getChoice(event) {
	event.target.classList.add('active')
	console.log(document.querySelector('.ancients').childNodes)
}