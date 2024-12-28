document.addEventListener("DOMContentLoaded", function() {
    const languageSelector = document.getElementById("language-selector");

    // Função para carregar traduções
    async function loadTranslations(language) {
        try {
            const response = await fetch(`translations.json`);
            if (!response.ok) throw new Error("Traduções não encontradas");
            const translations = await response.json();
            applyTranslations(translations[language]);  // Ajustado para pegar traduções específicas do idioma
        } catch (error) {
            console.error("Erro ao carregar traduções:", error);
        }
    }

    // Função para aplicar traduções
    function applyTranslations(translations) {
        for (const key in translations) {
            const element = document.getElementById(key);
            if (element) {
                element.textContent = translations[key];
            }
        }
    }

    // Detectar idioma do navegador
    function detectBrowserLanguage() {
        const lang = navigator.language || navigator.userLanguage;
        return lang.toLowerCase().startsWith("pt") ? "pt-br" : lang.toLowerCase().startsWith("es") ? "es" : "en";
    }

    // Carregar idioma preferido ou detectar idioma do navegador
    const savedLanguage = localStorage.getItem("preferredLanguage") || detectBrowserLanguage();
    languageSelector.value = savedLanguage;
    loadTranslations(savedLanguage);

    // Alterar idioma ao selecionar no seletor
    languageSelector.addEventListener("change", function() {
        const selectedLanguage = languageSelector.value;
        localStorage.setItem("preferredLanguage", selectedLanguage);
        loadTranslations(selectedLanguage);
    });
});
