import ScoreList from "./ScoreList";

const apiList = [{name:'Nelson', score:10}, {name:'Mauricio', score:50}];
const recentScore = (container) => {
  const list = new ScoreList(apiList);
  const recentHeader = document.createElement('div');
  container.append(recentHeader);
  const title = document.createElement('h2');
  title.innerHTML = 'Recent scores';
  recentHeader.append(title);
  const refreshBtn = document.createElement('button');
  refreshBtn.innerHTML = 'Refresh';
  recentHeader.append(refreshBtn);
  const scoreList = document.createElement('ul');
  scoreList.id = 'score-list';
  container.append(scoreList);
  list.print(scoreList);
}

export default recentScore;