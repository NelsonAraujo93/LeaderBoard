export default class ScoreList {
  constructor(list) {
    this.localStorageList = list;
  }

  print(container) {
    this.localStorageList.map((item) => {
      const ulItem = document.createElement('li');
      const name = document.createElement('div');
      const score = document.createElement('div');
      name.innerHTML = item.name;
      score.innerHTML = item.score;
      ulItem.append(name);
      ulItem.append(score);
      return container.append(ulItem);
    });
  }
}