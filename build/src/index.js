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


getAntcient()
getDifficulties()

document.body.style.backgroundImage = `url('${BGimg}')`
document.querySelector('.showNextCard').style.backgroundImage = `url('${showNextBG}')`
getEvent()

