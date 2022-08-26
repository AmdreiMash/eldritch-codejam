import { chain } from 'lodash';
import ancients from '../assets/Ancients/index.js';
import difficulties from '../data/difficulties.js';



export function getAntcient() {
	for (let key in ancients) {
		let div = document.createElement('div')
		div.id = key
		div.classList.add('ancient')
		div.style.backgroundImage = `url('${ancients[key]}')`
		document.querySelector('.ancients').append(div)
	}
}

export function getDifficulties() {
	difficulties.forEach(element => {
		console.log(element.id)
		let button = document.createElement('button');
		button.id = element.id;
		button.textContent = element.name;
		button.classList.add('difficulties');
		document.querySelector('.level').append(button)
	})
}

