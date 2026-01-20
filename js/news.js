const news = JSON.parse(localStorage.getItem('news')) || [];
const container = document.getElementById('newsContainer');

container.innerHTML = news.map(n => `
  <div class="news-card">
    <img src="${n.image}" alt="${n.title}">
    <div class="content">
      <h3>${n.title}</h3>
      <p>${n.text}</p>
    </div>
  </div>
`).join('');
