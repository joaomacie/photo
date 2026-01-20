function addNews() {
  const title = document.getElementById('title').value;
  const text = document.getElementById('text').value;
  const category = document.getElementById('category').value;
  const file = document.getElementById('imageFile').files[0];

  if (!file) {
    alert('Seleciona uma imagem');
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    const news = JSON.parse(localStorage.getItem('news')) || [];
    news.unshift({
      title,
      text,
      category,
      image: reader.result,
      date: new Date()
    });
    localStorage.setItem('news', JSON.stringify(news));
    alert('Notícia publicada com sucesso');
  };
  reader.readAsDataURL(file);
}
