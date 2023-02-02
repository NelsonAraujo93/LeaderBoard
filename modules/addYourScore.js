import ScoreList from './ScoreList.js';

const addYourScore = (container) => {
  const list = new ScoreList();
  const addScoreContainer = document.createElement('div');
  addScoreContainer.id = 'add-container';
  container.append(addScoreContainer);
  const title = document.createElement('h2');
  title.innerHTML = 'Add your score';
  addScoreContainer.append(title);
  const form = document.createElement('form');
  form.id = 'main-form';
  addScoreContainer.append(form);
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('placeholder', 'Name...');
  form.append(nameInput);

  const scoreInput = document.createElement('input');
  scoreInput.setAttribute('type', 'numeric');
  scoreInput.setAttribute('placeholder', 'Score...');
  form.append(scoreInput);

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.innerHTML = 'Submit';
  submitBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const score = scoreInput.value;
    if (score === '' || name === '') {
      return alert('Please fill the User and Score fields');
    }
    if (!Number.isNaN(parseInt(score, 10))) {
      nameInput.value = '';
      scoreInput.value = '';
      return list.addScore(name, score);
    }
    return alert('Score must be a numeric value');
  });
  form.append(submitBtn);
};

export default addYourScore;