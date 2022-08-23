import { chain } from 'lodash';
import ancients from '../assets/Ancients/index.js';

export function getAntcient() {
	for (let key in ancients) {
		let div = document.createElement('div')
		div.id = key
		div.style.backgroundImage = `url('${ancients[key]}')`
		document.querySelector('.ancients').append(div)
	}
}