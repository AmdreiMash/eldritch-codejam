import { values } from 'lodash';
import ancients from '../assets/Ancients';
import cards from '../assets/MythicCards/blue';
import ancientsData from '../data/ancients.js';
import mCards from '../data/mythicCards/index.js';

let conditions = {
	cardSet: [],
	level: 0,
	blue: 0,
	brown: 0,
	green: 0,
	deck: {
		blue: [1],
		brown: [2],
		green: [3],
	},
};

export function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {

		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

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
	conditions.level = activeSettings[1].id
	conditions.blue = conditions.cardSet[0] + conditions.cardSet[3] + conditions.cardSet[6]
	conditions.brown = conditions.cardSet[1] + conditions.cardSet[4] + conditions.cardSet[7]
	conditions.green = conditions.cardSet[2] + conditions.cardSet[5] + conditions.cardSet[8]
	getDeck()
}

//export function getDeck() {
//	if (conditions.level == 'very-easy') {
//		conditions.deck.blue = (mCards.blueCards.filter(cards => cards.difficulty == 'easy'))

//	}
//	if (conditions.deck.blue.length < conditions.blue) {
//		let arr = mCards.blueCards.filter(cards => cards.difficulty == 'normal')
//		arr = shuffle(arr)
//		for (let i = conditions.deck.blue.length; i < conditions.blue; i++) {
//			conditions.deck.blue.push(arr.pop())
//		}
//	}
//	conditions.deck.blue = shuffle(conditions.deck.blue)
//	console.log(conditions.deck.blue)
//}

export function getDeck() {
	if (conditions.level == 'very-easy' || conditions.level == 'very-hard') {
		let main = conditions.level.slice(5,)
		console.log(main)
		for (let key in mCards) {
			conditions.deck[String(key).slice(0, -5)] = (mCards[key].filter(cards => cards.difficulty == main && cards.color == String(key).slice(0, -5)))

			if (conditions.deck[String(key).slice(0, -5)].length < conditions[String(key).slice(0, -5)]) {
				let arr = mCards[key].filter(cards => cards.difficulty == 'normal')
				arr = shuffle(arr)
				for (let i = conditions.deck[String(key).slice(0, -5)].length; i < conditions[String(key).slice(0, -5)]; i++) {
					conditions.deck[String(key).slice(0, -5)].push(arr.pop())
				}
			}
			if (conditions.deck[String(key).slice(0, -5)].length > conditions[String(key).slice(0, -5)]) {
				let arr = conditions.deck[String(key).slice(0, -5)]
				arr = shuffle(arr)
				let x = conditions.deck[String(key).slice(0, -5)].length - conditions[String(key).slice(0, -5)]
				for (let i = 0; i < x; i++) {
					arr.pop()
				}
				conditions.deck[String(key).slice(0, -5)] = arr
			}
		}
	}
	if (conditions.level == 'easy' || conditions.level == 'hard') {
		let main = conditions.level
		console.log(main)
		for (let key in mCards) {
			conditions.deck[String(key).slice(0, -5)] = (mCards[key].filter(cards => cards.difficulty == main || cards.difficulty == 'normal' && cards.color == String(key).slice(0, -5)))
			if (conditions.deck[String(key).slice(0, -5)].length > conditions[String(key).slice(0, -5)]) {
				let arr = conditions.deck[String(key).slice(0, -5)]
				arr = shuffle(arr)
				let x = conditions.deck[String(key).slice(0, -5)].length - conditions[String(key).slice(0, -5)]
				for (let i = 0; i < x; i++) {
					arr.pop()
				}
				conditions.deck[String(key).slice(0, -5)] = arr
			}
		}
	}
	if (conditions.level == 'normal') {
		for (let key in mCards) {
			conditions.deck[String(key).slice(0, -5)] = (mCards[key])
			if (conditions.deck[String(key).slice(0, -5)].length > conditions[String(key).slice(0, -5)]) {
				let arr = conditions.deck[String(key).slice(0, -5)]
				arr = shuffle(arr)
				let x = conditions.deck[String(key).slice(0, -5)].length - conditions[String(key).slice(0, -5)]
				for (let i = 0; i < x; i++) {
					arr.pop()
				}
				conditions.deck[String(key).slice(0, -5)] = arr
			}
		}
	}
	conditions.deck.blue = shuffle(conditions.deck.blue)
	conditions.deck.brown = shuffle(conditions.deck.brown)
	conditions.deck.green = shuffle(conditions.deck.green)
	console.log(conditions.deck.blue)
	console.log(conditions.deck.brown)
	console.log(conditions.deck.green)
}