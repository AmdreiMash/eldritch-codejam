import _ from 'lodash';
import './style.css';
import ancients from '../assets/Ancients/index.js';
import difficulties from '../data/difficulties.js';
import BGimg from '../assets/home.png';
import showNextBG from '../assets/mythicCardBackground.png';
import { getEvent, getSettings, conditions } from './helper';
import { getAntcient, getDifficulties } from './getAntcient.js';
import ancientsData from '../data/ancients.js';

let conditions = {
	cardSet: 0,
	level: 0,
};

getAntcient()
getDifficulties()

document.body.style.backgroundImage = `url('${BGimg}')`
document.querySelector('.showNextCard').style.backgroundImage = `url('${showNextBG}')`
getEvent()