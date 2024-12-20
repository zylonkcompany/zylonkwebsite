const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('search-button');

  searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    switch (searchTerm) {
      case 'downloads':
        window.location.href = 'downloads.html';
        break;
      case 'sobre':
        window.location.href = 'sobre.html';
        break;
      case 'contato':
        window.location.href = 'contato.html';
        break;
      // adicione mais casos aqui
      default:
        window.location.href = 'pesquisa.html'; // página de pesquisa padrão
    }
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const searchTerm = searchInput.value.trim().toLowerCase();
      switch (searchTerm) {
        case 'downloads':
          window.location.href = 'downloads.html';
          break;
        case 'sobre':
          window.location.href = 'about.html';
          break;
        case 'contato':
          window.location.href = 'contact.html';
          break;
        case 'SafiraOS':
            window.location.href = 'safiraos.html';
        // adicione mais casos aqui
        default:
          window.location.href = 'index.html'; // página de pesquisa padrão
      }
    }
  });