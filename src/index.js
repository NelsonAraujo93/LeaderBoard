import './style.css';
import addYourScore from '../modules/addYourScore.js';
import recentScore from '../modules/recentScore.js';

const init = () => {
  debugger;
  const mainContainer = document.getElementById('dynamic-content');
  recentScore(mainContainer);
  addYourScore(mainContainer);
};

init();