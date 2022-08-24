import _ from 'lodash';
import './style.css';
import ancients from '../assets/Ancients/index.js';
import difficulties from '../data/difficulties.js';
import BGimg from '../assets/home.png';
import showNextBG from '../assets/mythicCardBackground.png';
import { getAntcient, getChoice, getDifficulties } from './getAntcient.js';

getAntcient()
getDifficulties()
console.log(ancients)
document.body.style.backgroundImage = `url('${BGimg}')`
document.querySelector('.showNextCard').style.backgroundImage = `url('${showNextBG}')`

const ancientsW = document.querySelector('.ancients')
