const addYourScore = (container) => {
  const title = document.createElement('h2');
  title.innerHTML = 'Add your score';
  container.append(title);
  const form = document.createElement('form');
  container.append(form);
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('placeholder', 'Name...');
  form.append(nameInput);

  const scoreInput = document.createElement('input');
  scoreInput.setAttribute('type', 'numeric');
  scoreInput.setAttribute('placeholder', 'Score...');
  form.append(scoreInput);

  const submitBtn = document.createElement('input');
  submitBtn.setAttribute('type', 'submit');
  submitBtn.setAttribute('label', 'Submit');
  form.append(submitBtn);
}

module.exports = addYourScore;