fetch('data.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Gagal mengambil data');
    }
    return response.json();
  })
  .then(dt => {
    const container = document.getElementById('daftar-lagu');
    dt.forEach(item => {
      container.innerHTML += `<div style="margin-bottom: 20px;">
          <h3>${item.judul}</h3>
          <p>Penyanyi: ${item.penyanyi}</p>
          <img src="./img/${item.gambar}" width="150" alt="${item.judul}" />
        </div>`;
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });