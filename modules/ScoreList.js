export default class ScoreList {
  constructor() {
    this.apiList = [];
  }

  print(container) {
    container.innerHTML = '';
    this.apiList.map((item) => {
      const ulItem = document.createElement('li');
      const user = document.createElement('div');
      const score = document.createElement('div');
      user.innerHTML = item.user;
      score.innerHTML = item.score;
      ulItem.append(user);
      ulItem.append(score);
      return container.append(ulItem);
    });
  }

  addScore = (userData, scoreData) => {
    fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ndRdpIGELEXUgnHiuYRW/scores/', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        score: scoreData,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  async getList(container) {
    const fetchServ = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ndRdpIGELEXUgnHiuYRW/scores/');
    this.fetching(fetchServ, container);
  }

  async fetching(fetchServ, container) {
    const toJson = await fetchServ.json();
    this.apiList = toJson.result;
    this.print(container);
  }
}