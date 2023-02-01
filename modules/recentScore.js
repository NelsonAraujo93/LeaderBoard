import ScoreList from './ScoreList.js';

const recentScore = async (container) => {
  const list = new ScoreList;
  const scoreListContainer = document.createElement('div');
  scoreListContainer.id = 'score-list-container';
  container.append(scoreListContainer);
  const recentHeader = document.createElement('div');
  scoreListContainer.append(recentHeader);
  const title = document.createElement('h2');
  title.innerHTML = 'Recent scores';
  recentHeader.append(title);
  const refreshBtn = document.createElement('button');
  refreshBtn.innerHTML = 'Refresh';
  refreshBtn.addEventListener('click', () => {
    list.getList(scoreList);
  })
  recentHeader.append(refreshBtn);
  const scoreList = document.createElement('ul');
  scoreList.id = 'score-list';
  scoreListContainer.append(scoreList);
  list.getList(scoreList);
};

export default recentScore;