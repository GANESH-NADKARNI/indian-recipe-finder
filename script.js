// Data Component - Indian Recipe Database
const RECIPES_DATA = [
    {
        id: 1,
        title: "Butter Chicken",
        cuisine: "North Indian",
        time: "45 mins",
        difficulty: "Medium",
        ingredients: ["chicken", "butter", "tomato", "cream", "garam masala", "garlic", "ginger", "onion"],
        instructions: [
            "Marinate chicken pieces with yogurt, lemon juice, and spices for 30 minutes",
            "Heat butter in a pan and cook marinated chicken until golden brown",
            "In the same pan, add chopped onions and cook until translucent",
            "Add ginger-garlic paste and cook for 2 minutes",
            "Add tomato puree and cook until oil separates",
            "Add cream, garam masala, and cooked chicken",
            "Simmer for 10 minutes and garnish with fresh coriander"
        ],
        emoji: "🍗"
    },
    {
        id: 2,
        title: "Biryani",
        cuisine: "Hyderabadi",
        time: "60 mins",
        difficulty: "Hard",
        ingredients: ["basmati rice", "mutton", "saffron", "yogurt", "mint", "onion", "ghee", "spices"],
        instructions: [
            "Soak basmati rice for 30 minutes and boil with whole spices",
            "Marinate mutton with yogurt, red chili powder, and garam masala",
            "Deep fry sliced onions until golden brown and crispy",
            "Cook marinated mutton until 70% done",
            "Layer rice and mutton alternately in a heavy-bottomed pot",
            "Sprinkle fried onions, mint, saffron soaked in milk",
            "Cover with aluminum foil and cook on high heat for 3 minutes, then simmer for 45 minutes"
        ],
        emoji: "🍚"
    },
    {
        id: 3,
        title: "Masala Dosa",
        cuisine: "South Indian",
        time: "30 mins",
        difficulty: "Medium",
        ingredients: ["rice", "urad dal", "potato", "onion", "mustard seeds", "curry leaves", "turmeric"],
        instructions: [
            "Prepare dosa batter by grinding soaked rice and urad dal",
            "Ferment the batter overnight",
            "For filling, boil and mash potatoes",
            "Heat oil, add mustard seeds, curry leaves, and onions",
            "Add turmeric, salt, and mashed potatoes to make filling",
            "Heat dosa pan, pour batter and spread thin",
            "Add potato filling, fold dosa and serve with coconut chutney"
        ],
        emoji: "🥞"
    },
    {
        id: 4,
        title: "Palak Paneer",
        cuisine: "North Indian",
        time: "25 mins",
        difficulty: "Easy",
        ingredients: ["paneer", "spinach", "tomato", "onion", "garlic", "ginger", "cream", "cumin"],
        instructions: [
            "Blanch spinach leaves in boiling water for 2 minutes",
            "Blend blanched spinach into smooth puree",
            "Cut paneer into cubes and lightly fry until golden",
            "Heat oil, add cumin seeds and chopped onions",
            "Add ginger-garlic paste and cook for 2 minutes",
            "Add tomatoes and cook until soft",
            "Add spinach puree, fried paneer, cream and simmer for 5 minutes"
        ],
        emoji: "🥬"
    },
    {
        id: 5,
        title: "Samosa",
        cuisine: "North Indian",
        time: "40 mins",
        difficulty: "Medium",
        ingredients: ["potato", "peas", "flour", "cumin seeds", "coriander", "ginger", "green chili", "oil"],
        instructions: [
            "Make dough with flour, oil, and water. Rest for 30 minutes",
            "Boil and mash potatoes, mix with peas and spices",
            "Heat oil, add cumin seeds, ginger, and green chilies",
            "Add potato mixture and cook for 5 minutes",
            "Roll dough into small circles and cut in half",
            "Make cone shape, fill with potato mixture and seal edges",
            "Deep fry samosas until golden brown and crispy"
        ],
        emoji: "🥟"
    },
    {
        id: 6,
        title: "Dal Tadka",
        cuisine: "North Indian",
        time: "30 mins",
        difficulty: "Easy",
        ingredients: ["toor dal", "onion", "tomato", "garlic", "cumin", "turmeric", "ghee", "coriander"],
        instructions: [
            "Wash and cook toor dal in pressure cooker with turmeric",
            "Mash cooked dal and add water to desired consistency",
            "Heat ghee in pan, add cumin seeds",
            "Add chopped onions and cook until golden",
            "Add garlic and chopped tomatoes",
            "Add cooked dal and simmer for 10 minutes",
            "Garnish with fresh coriander and serve hot"
        ],
        emoji: "🍲"
    },
    {
        id: 7,
        title: "Idli Sambhar",
        cuisine: "South Indian",
        time: "20 mins",
        difficulty: "Easy",
        ingredients: ["idli rice", "urad dal", "toor dal", "drumstick", "okra", "tamarind", "sambhar powder"],
        instructions: [
            "Prepare idli batter by grinding rice and urad dal separately",
            "Mix both batters and ferment overnight",
            "Steam idlis in idli maker for 12-15 minutes",
            "For sambhar, cook toor dal until soft",
            "Add vegetables like drumstick and okra",
            "Add tamarind water and sambhar powder",
            "Simmer until vegetables are cooked and serve with idlis"
        ],
        emoji: "⚪"
    },
    {
        id: 8,
        title: "Rogan Josh",
        cuisine: "Kashmiri",
        time: "90 mins",
        difficulty: "Hard",
        ingredients: ["mutton", "yogurt", "fennel powder", "ginger", "garlic", "red chili", "cardamom", "cinnamon"],
        instructions: [
            "Cut mutton into medium pieces and wash thoroughly",
            "Heat oil in heavy-bottomed pan, add whole spices",
            "Add mutton pieces and cook on high heat until browned",
            "Add ginger-garlic paste and cook for 5 minutes",
            "Add whisked yogurt gradually while stirring",
            "Add red chili powder, fennel powder, and salt",
            "Cover and cook on low heat for 60-75 minutes until tender"
        ],
        emoji: "🍖"
    },
    {
        id: 9,
        title: "Pani Puri",
        cuisine: "Chaat",
        time: "25 mins",
        difficulty: "Medium",
        ingredients: ["puri", "potato", "chickpeas", "tamarind water", "mint water", "chaat masala", "sev"],
        instructions: [
            "Boil potatoes and chickpeas separately until tender",
            "Prepare tamarind water by soaking tamarind in water",
            "Make mint water by blending mint, coriander, and green chilies",
            "Strain both waters and add chaat masala",
            "Make small hole in puri carefully",
            "Fill puri with potato, chickpeas, and chutneys",
            "Serve immediately and eat in one bite"
        ],
        emoji: "🫧"
    },
    {
        id: 10,
        title: "Rajma Chawal",
        cuisine: "North Indian",
        time: "50 mins",
        difficulty: "Medium",
        ingredients: ["rajma beans", "rice", "onion", "tomato", "ginger", "garlic", "cumin", "garam masala"],
        instructions: [
            "Soak rajma beans overnight and pressure cook until soft",
            "Heat oil, add cumin seeds and chopped onions",
            "Add ginger-garlic paste and cook until fragrant",
            "Add chopped tomatoes and cook until mushy",
            "Add cooked rajma with its water",
            "Add garam masala and simmer for 20 minutes",
            "Serve hot with steamed basmati rice"
        ],
        emoji: "🍛"
    },
    {
        id: 11,
        title: "Chole Bhature",
        cuisine: "Punjabi",
        time: "60 mins",
        difficulty: "Medium",
        ingredients: ["chickpeas", "flour", "yogurt", "onion", "tomato", "ginger", "garlic", "chole masala"],
        instructions: [
            "Soak chickpeas overnight and pressure cook with tea bags",
            "For bhature, make dough with flour, yogurt, and baking powder",
            "Rest dough for 2 hours and roll into circles",
            "Deep fry bhature until puffed and golden",
            "For chole, cook onions, ginger-garlic paste, and tomatoes",
            "Add cooked chickpeas and chole masala",
            "Simmer for 15 minutes and serve with hot bhature"
        ],
        emoji: "🍞"
    },
    {
        id: 12,
        title: "Fish Curry",
        cuisine: "South Indian",
        time: "35 mins",
        difficulty: "Medium",
        ingredients: ["fish", "coconut milk", "curry leaves", "mustard seeds", "tamarind", "red chili", "turmeric"],
        instructions: [
            "Clean and cut fish into medium pieces",
            "Marinate fish with turmeric and salt for 15 minutes",
            "Heat oil, add mustard seeds and curry leaves",
            "Add sliced onions and cook until translucent",
            "Add ginger-garlic paste and red chili powder",
            "Add coconut milk and tamarind water",
            "Add marinated fish and simmer until cooked through"
        ],
        emoji: "🐟"
    },
    {
        id: 13,
        title: "Aloo Gobi",
        cuisine: "North Indian",
        time: "25 mins",
        difficulty: "Easy",
        ingredients: ["potato", "cauliflower", "onion", "tomato", "turmeric", "cumin", "coriander", "ginger"],
        instructions: [
            "Cut potatoes and cauliflower into medium pieces",
            "Heat oil, add cumin seeds",
            "Add chopped onions and cook until golden",
            "Add ginger and cook for 1 minute",
            "Add potatoes and cauliflower with turmeric",
            "Cover and cook for 15 minutes, stirring occasionally",
            "Add tomatoes and coriander powder, cook until tender"
        ],
        emoji: "🥔"
    },
    {
        id: 14,
        title: "Tandoori Chicken",
        cuisine: "Punjabi",
        time: "120 mins",
        difficulty: "Medium",
        ingredients: ["chicken", "yogurt", "tandoori masala", "ginger", "garlic", "lemon", "red chili powder"],
        instructions: [
            "Make deep cuts in chicken pieces",
            "Mix yogurt, tandoori masala, ginger-garlic paste, and lemon juice",
            "Marinate chicken in this mixture for at least 2 hours",
            "Preheat oven to 220°C or prepare tandoor",
            "Thread chicken pieces onto skewers",
            "Cook for 20-25 minutes, turning occasionally",
            "Serve hot with mint chutney and onion rings"
        ],
        emoji: "🔥"
    },
    {
        id: 15,
        title: "Gulab Jamun",
        cuisine: "Dessert",
        time: "40 mins",
        difficulty: "Medium",
        ingredients: ["khoya", "flour", "sugar", "cardamom", "rose water", "ghee", "milk powder"],
        instructions: [
            "Mix khoya, milk powder, and little flour to make dough",
            "Make small balls from the dough without cracks",
            "Heat ghee and deep fry balls on low heat until golden brown",
            "Prepare sugar syrup with cardamom and rose water",
            "Add fried balls to warm syrup immediately",
            "Let them soak for at least 2 hours",
            "Serve warm or at room temperature"
        ],
        emoji: "🍯"
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const cuisineFilter = document.getElementById('cuisineFilter');
const recipesGrid = document.getElementById('recipesGrid');
const resultsCount = document.getElementById('resultsCount');
const recipeModal = document.getElementById('recipeModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// State Management
let filteredRecipes = [...RECIPES_DATA];

// Search Component Logic
class SearchComponent {
    static filterRecipes() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedCuisine = cuisineFilter.value;

        filteredRecipes = RECIPES_DATA.filter(recipe => {
            // Enhanced search logic - search in title, ingredients, and cuisine
            const matchesSearch = searchTerm === '' || 
                recipe.ingredients.some(ingredient => 
                    ingredient.toLowerCase().includes(searchTerm)
                ) ||
                recipe.title.toLowerCase().includes(searchTerm) ||
                recipe.cuisine.toLowerCase().includes(searchTerm);

            const matchesCuisine = selectedCuisine === '' || 
                recipe.cuisine === selectedCuisine;

            return matchesSearch && matchesCuisine;
        });

        UIComponent.renderRecipes();
        UIComponent.updateResultsCount();
    }

    static highlightSearchTerm(text, searchTerm) {
        if (!searchTerm) return text;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
}

// UI Component Logic
class UIComponent {
    static renderRecipes() {
        if (filteredRecipes.length === 0) {
            recipesGrid.innerHTML = `
                <div class="no-results">
                    <h3>No recipes found</h3>
                    <p>Try searching for different ingredients or adjust your filters</p>
                    <p><strong>Popular ingredients:</strong> paneer, chicken, dal, rice, potato, tomato</p>
                </div>
            `;
            return;
        }

        const searchTerm = searchInput.value.toLowerCase().trim();

        recipesGrid.innerHTML = filteredRecipes.map(recipe => `
            <div class="recipe-card" onclick="UIComponent.showRecipeModal(${recipe.id})">
                <div class="recipe-image">
                    ${recipe.emoji}
                </div>
                <div class="recipe-content">
                    <h3 class="recipe-title">${SearchComponent.highlightSearchTerm(recipe.title, searchTerm)}</h3>
                    <div class="recipe-meta">
                        <span>⏱️ ${recipe.time}</span>
                        <span>📊 ${recipe.difficulty}</span>
                        <span class="cuisine-badge">${recipe.cuisine}</span>
                    </div>
                    <div class="recipe-ingredients">
                        <h4>Key Ingredients:</h4>
                        <div class="ingredients-list">
                            ${recipe.ingredients.slice(0, 6).map(ingredient => 
                                `<span class="ingredient-tag">${SearchComponent.highlightSearchTerm(ingredient, searchTerm)}</span>`
                            ).join('')}
                            ${recipe.ingredients.length > 6 ? `<span class="ingredient-tag">+${recipe.ingredients.length - 6} more</span>` : ''}
                        </div>
                    </div>
                    <button class="view-recipe-btn" onclick="event.stopPropagation(); UIComponent.showRecipeModal(${recipe.id})">
                        View Full Recipe
                    </button>
                </div>
            </div>
        `).join('');
    }

    static updateResultsCount() {
        const count = filteredRecipes.length;
        const searchTerm = searchInput.value.trim();
        const cuisine = cuisineFilter.value;
        
        let message = `Found ${count} recipe${count !== 1 ? 's' : ''}`;
        
        if (searchTerm || cuisine) {
            message += ' matching your search';
            if (searchTerm) message += ` for "${searchTerm}"`;
            if (cuisine) message += ` in ${cuisine} cuisine`;
        }
        
        resultsCount.textContent = message;
    }

    static showRecipeModal(recipeId) {
        const recipe = RECIPES_DATA.find(r => r.id === recipeId);
        if (!recipe) return;

        modalTitle.textContent = recipe.title;
        modalBody.innerHTML = `
            <div class="recipe-emoji">${recipe.emoji}</div>
            
            <div class="recipe-info">
                <div class="info-item">
                    <h4>Cooking Time</h4>
                    <p>${recipe.time}</p>
                </div>
                <div class="info-item">
                    <h4>Difficulty</h4>
                    <p>${recipe.difficulty}</p>
                </div>
                <div class="info-item">
                    <h4>Cuisine</h4>
                    <p>${recipe.cuisine}</p>
                </div>
            </div>

            <div class="recipe-section">
                <h3>Ingredients</h3>
                <div class="ingredients-grid">
                    ${recipe.ingredients.map(ingredient => 
                        `<div class="ingredient-item">${ingredient}</div>`
                    ).join('')}
                </div>
            </div>

            <div class="recipe-section">
                <h3>Instructions</h3>
                <ol class="instructions-list">
                    ${recipe.instructions.map(instruction => 
                        `<li>${instruction}</li>`
                    ).join('')}
                </ol>
            </div>
        `;

        recipeModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    static hideRecipeModal() {
        recipeModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Event Listeners Component
class EventListeners {
    static init() {
        // Real-time search with debouncing
        let searchTimeout;
        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(SearchComponent.filterRecipes, 300);
        });
        
        // Filter change
        cuisineFilter.addEventListener('change', SearchComponent.filterRecipes);
        
        // Enter key search
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                clearTimeout(searchTimeout);
                SearchComponent.filterRecipes();
            }
        });

        // Modal event listeners
        closeModal.addEventListener('click', UIComponent.hideRecipeModal);
        
        // Close modal when clicking outside
        recipeModal.addEventListener('click', (e) => {
            if (e.target === recipeModal) {
                UIComponent.hideRecipeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && recipeModal.style.display === 'block') {
                UIComponent.hideRecipeModal();
            }
        });

        // Enhanced search input interactions
        searchInput.addEventListener('focus', () => {
            searchInput.style.transform = 'scale(1.02)';
            searchInput.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
        });
        
        searchInput.addEventListener('blur', () => {
            searchInput.style.transform = 'scale(1)';
        });

        // Add keyboard navigation for recipe cards
        document.addEventListener('keydown', (e) => {
            const cards = document.querySelectorAll('.recipe-card');
            if (cards.length === 0) return;

            let currentIndex = Array.from(cards).findIndex(card => 
                card.classList.contains('keyboard-focus')
            );

            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                e.preventDefault();
                if (currentIndex < cards.length - 1) {
                    cards[currentIndex]?.classList.remove('keyboard-focus');
                    cards[currentIndex + 1].classList.add('keyboard-focus');
                    cards[currentIndex + 1].focus();
                }
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                e.preventDefault();
                if (currentIndex > 0) {
                    cards[currentIndex]?.classList.remove('keyboard-focus');
                    cards[currentIndex - 1].classList.add('keyboard-focus');
                    cards[currentIndex - 1].focus();
                }
            } else if (e.key === 'Enter' && currentIndex >= 0) {
                const recipeId = parseInt(cards[currentIndex].getAttribute('onclick').match(/\d+/)[0]);
                UIComponent.showRecipeModal(recipeId);
            }
        });
    }
}

// Utility Functions
class Utils {
    static getRandomRecipes(count = 3) {
        const shuffled = [...RECIPES_DATA].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    static getRecipesByDifficulty(difficulty) {
        return RECIPES_DATA.filter(recipe => recipe.difficulty === difficulty);
    }

    static getPopularIngredients() {
        const allIngredients = RECIPES_DATA.flatMap(recipe => recipe.ingredients);
        const ingredientCount = {};
        
        allIngredients.forEach(ingredient => {
            ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
        });

        return Object.entries(ingredientCount)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 10)
            .map(([ingredient]) => ingredient);
    }

    static addSearchSuggestions() {
        const suggestions = Utils.getPopularIngredients();
        const datalist = document.createElement('datalist');
        datalist.id = 'ingredient-suggestions';
        
        suggestions.forEach(ingredient => {
            const option = document.createElement('option');
            option.value = ingredient;
            datalist.appendChild(option);
        });

        document.body.appendChild(datalist);
        searchInput.setAttribute('list', 'ingredient-suggestions');
    }
}

// App Initialization Component
class App {
    static init() {
        // Initialize core functionality
        UIComponent.renderRecipes();
        UIComponent.updateResultsCount();
        EventListeners.init();
        
        // Add search suggestions
        Utils.addSearchSuggestions();
        
        // Add welcome message for first-time users
        if (!localStorage.getItem('visited')) {
            setTimeout(() => {
                const welcomeToast = document.createElement('div');
                welcomeToast.innerHTML = `
                    <div style="
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        background: linear-gradient(45deg, #667eea, #764ba2);
                        color: white;
                        padding: 15px 20px;
                        border-radius: 10px;
                        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
                        z-index: 1000;
                        max-width: 300px;
                        font-size: 14px;
                        animation: slideInRight 0.5s ease-out;
                    ">
                        <strong>Welcome to Recipe Finder! 🍛</strong><br>
                        Search for recipes by typing ingredients like "paneer", "chicken", or "dal"
                        <button onclick="this.parentElement.remove()" style="
                            background: none;
                            border: none;
                            color: white;
                            float: right;
                            cursor: pointer;
                            font-size: 16px;
                            margin-top: -5px;
                        ">&times;</button>
                    </div>
                `;
                document.body.appendChild(welcomeToast);
                
                // Auto-remove after 5 seconds
                setTimeout(() => {
                    if (welcomeToast.parentElement) {
                        welcomeToast.remove();
                    }
                }, 5000);
                
                localStorage.setItem('visited', 'true');
            }, 1000);
        }

        // Add CSS animation for welcome toast
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            .keyboard-focus {
                outline: 3px solid #667eea;
                outline-offset: 2px;
            }
            
            mark {
                background-color: #fff3cd;
                padding: 1px 2px;
                border-radius: 2px;
            }
        `;
        document.head.appendChild(style);

        console.log('🍛 Recipe Finder App Initialized');
        console.log(`📊 Loaded ${RECIPES_DATA.length} recipes`);
        console.log('🔍 Try searching for: paneer, chicken, dal, rice');
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', App.init);