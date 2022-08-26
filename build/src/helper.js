import { values } from 'lodash';
import ancients from '../assets/Ancients';
import ancientsData from '../data/ancients.js';

let conditions = {
	cardSet: [],
	level: 0,
	blue: 0,
	brown: 0,
	green: 0,
};

let mod = ''
export function getEvent() {
	document.body.addEventListener('click', () => {
		if (event.target.classList.contains('difficulties')) {
			document.querySelectorAll('.difficulties').forEach(e => {
				e.classList.remove('active')
			})
			event.target.classList.add('active')
		}
		if (event.target.classList.contains('ancient')) {
			document.querySelectorAll('.ancient').forEach(e => {
				e.classList.remove('active')
			})
			event.target.classList.add('active')
		}
		if (event.target.classList.contains('mixCard')) {
			getSettings()
		}
	})
}

export function getSettings() {
	conditions.cardSet = []
	let activeSettings = document.querySelectorAll('.active')
	let count = document.querySelectorAll('.counter')
	ancientsData.forEach(a => {
		if (a.id == activeSettings[0].id) {
			console.log('еесть ')
			for (let key in a.firstStage) {
				conditions.cardSet.push(a.firstStage[key])
			}
			for (let key in a.secondStage) {
				conditions.cardSet.push(a.secondStage[key])
			}
			for (let key in a.thirdStage) {
				conditions.cardSet.push(a.thirdStage[key])
			}
		}
	})
	count.forEach((elem, index) => {
		elem.textContent = conditions.cardSet[index]
	})
	conditions.lvel = activeSettings[1].id
	conditions.blue = conditions.cardSet[0] + conditions.cardSet[3] + conditions.cardSet[6]
	conditions.brown = conditions.cardSet[1] + conditions.cardSet[4] + conditions.cardSet[7]
	conditions.green = conditions.cardSet[2] + conditions.cardSet[5] + conditions.cardSet[8]
	console.log(conditions)
}
