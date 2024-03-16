// Array de citações (apenas para exemplo)
const quotes = [
    { text: "A vida é o que acontece enquanto você está ocupado fazendo outros planos.", author: "John Lennon", category: "Inspiracional" },
    { text: "O sucesso é a soma de pequenos esforços repetidos dia após dia.", author: "Robert Collier", category: "Motivacional" },
    { text: "O único modo de fazer um excelente trabalho é amar o que você faz.", author: "Steve Jobs", category: "Profissional" }
];

// Função para exibir uma citação aleatória
function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteText = document.querySelector('.quote-text');
    const authorText = document.querySelector('.author');
    quoteText.textContent = `"${randomQuote.text}"`;
    authorText.textContent = `- ${randomQuote.author}`;
}

// Função para preencher as opções de categorias no seletor
function fillCategoryOptions() {
    const categories = quotes.map(quote => quote.category);
    const uniqueCategories = Array.from(new Set(categories));
    const categorySelect = document.getElementById('category-select');
    uniqueCategories.forEach(category => {
        const option = document.createElement('option');
        option.textContent = category;
        option.value = category.toLowerCase();
        categorySelect.appendChild(option);
    });
}

// Event listener para o botão de nova citação
document.getElementById('new-quote-btn').addEventListener('click', showRandomQuote);

// Preencher as opções de categoria ao carregar a página
fillCategoryOptions();

// Exibir uma citação aleatória quando a página carregar
showRandomQuote();
