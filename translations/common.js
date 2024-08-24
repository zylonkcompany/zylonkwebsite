document.addEventListener('DOMContentLoaded', function() {
    // Verifica se há um idioma armazenado na sessão
    const storedLanguage = sessionStorage.getItem('language');
    const defaultLanguage = 'en'; // Idioma padrão
    
    // Função para carregar traduções com base no idioma selecionado
    function loadTranslations(language) {
        fetch(`/translations/${language}.json`)
            .then(response => response.json())
            .then(translations => {
                // Aplicar traduções aos elementos da página
                document.querySelector('header h1').textContent = translations.company_name;
                document.querySelector('nav a[href="contact.html"]').textContent = translations.menu_contact;
                document.querySelector('nav a[href="about.html"]').textContent = translations.menu_about;
                document.querySelector('nav a[href="downloads.html"]').textContent = translations.menu_downloads;
                document.querySelector('nav a[href="safiraos.html"]').textContent = translations.menu_safiraos;
                document.querySelector('nav a[href="sourcecode.html"]').textContent = translations.menu_sourcecode;
                // Adicione mais atribuições conforme necessário para outros elementos da página
            })
            .catch(error => console.error('Error loading translations:', error));
    }

    // Verifica se há um idioma armazenado na sessão, caso contrário, usa o idioma padrão
    const initialLanguage = storedLanguage || defaultLanguage;
    loadTranslations(initialLanguage);

    // Evento para mudança de idioma
    const languageSelector = document.getElementById('language-select');
    if (languageSelector) {
        languageSelector.addEventListener('change', function() {
            const selectedLanguage = languageSelector.value;
            sessionStorage.setItem('language', selectedLanguage); // Armazena o idioma selecionado na sessão
            loadTranslations(selectedLanguage);
        });
    }
});
