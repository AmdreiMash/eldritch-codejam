import _ from 'lodash';
import './style.css';
import ancients from '../assets/Ancients/index.js';
import BGimg from '../assets/home.png';
import { getAntcient, getChoice } from './getAntcient.js';

console.log(ancients)
document.body.style.backgroundImage = `url('${BGimg}')`

const ancientsW = document.querySelector('.ancients')
getAntcient()
