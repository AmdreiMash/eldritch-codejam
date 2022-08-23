import _ from 'lodash';
import './style.css';
import ancients from '../assets/Ancients/index.js';
import BGimg from '../assets/home.png';
import { getAntcient } from './getAntcient.js';

console.log(ancients)
document.body.style.backgroundImage = `url('${BGimg}')`

getAntcient()