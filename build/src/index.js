import _ from 'lodash';
import './style.css';
import ancients from '../assets/Ancients/index.js';
import difficulties from '../data/difficulties.js';
import BGimg from '../assets/home.png';
import showNextBG from '../assets/mythicCardBackground.png';
import mCards from '../data/mythicCards/index.js';
import { getEvent, getSettings, conditions, getDeck, shuffle } from './helper';
import { getAntcient, getDifficulties } from './getAntcient.js';
import ancientsData from '../data/ancients.js';
console.log(`+ На выбор предоставляется 4 картаы древнего +20 баллов\n+ На выбор предоставляется 5 уровней сложности + 25 баллов\n+ Карты замешиваются согласно правилам игры +40 баллов\n+ Есть трекер текущего состояния колоды +20 баллов\nИтог 105 баллво\nЕсли что-то отвалится напишите плиз в тг - @And7114`)

getAntcient()
getDifficulties()

document.body.style.backgroundImage = `url('${BGimg}')`
document.querySelector('.showNextCard').style.backgroundImage = `url('${showNextBG}')`
getEvent()

