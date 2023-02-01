import './style.css';
import addYourScore from '../modules/addYourScore';
import recentScore from '../modules/recentScore';

const init = () => {
  const mainContainer = document.getElementById('dynamic-content');
  recentScore(mainContainer);
  addYourScore(mainContainer);
}

init();