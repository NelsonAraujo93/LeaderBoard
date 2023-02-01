import ScoreList from './ScoreList.js';

const addYourScore = (container) => {
  const list = new ScoreList
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
  scoreInput.required;
  form.append(scoreInput);

  const submitBtn = document.createElement('button');
  submitBtn.setAttribute('type', 'button');
  submitBtn.innerHTML = 'Submit'
  submitBtn.addEventListener('click', () => {
    if(scoreInput.value === '' || nameInput.value === ''){
      alert('Please fill the User and Score fields');
    }else {
      if(isNaN(scoreInput.value)){ 
        alert('Score must be numeric');
      }else {
        list.addScore(nameInput.value, scoreInput.value);
      };
    }
  })
  form.append(submitBtn);
};

export default addYourScore;