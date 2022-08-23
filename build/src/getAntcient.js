import { chain } from 'lodash';
import ancients from '../assets/Ancients/index.js';


export function getAntcient() {
	for (let key in ancients) {
		let div = document.createElement('div')
		div.id = key
		div.classList.add('ancient')
		div.style.backgroundImage = `url('${ancients[key]}')`
		document.querySelector('.ancients').append(div)
		div.addEventListener('click', () => {
			event.target.classList.add('active')
			//for (let i = 0; i < document.querySelector('.ancients').childNodes.length; i++) {
			//};
			console.log(document.querySelector('.ancients').childNodes)
		})
	}
	//let arr = document.querySelectorAll('.ancient')
	console.log(arr)
}

