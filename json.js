const recipeContainer = document.getElementById('recipeContainer');
const searchInput = document.getElementById('searchInput');
const searchInputMobile = document.getElementById('searchInputMobile');
const mobileDrawer = document.getElementById('mobileDrawer');

const recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://images.unsplash.com/photo-1617119815789-67ed56c65984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFZlZ2dpZSUyMERlbGlnaHR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    // ... (Rest of the recipe objects from the provided JSON array)
    {
        "name": "Chicken Grill",
        "imageSrc": "https://plus.unsplash.com/premium_photo-1664472724753-0a4700e4137b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpY2tlbiUyMEdyaWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
      },
      {
        "name": "Cheese Pizza",
        "imageSrc": "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hpY2tlbiUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
      },
      {
        "name": "Steak",
        "imageSrc": "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
      },
      {
        "name": "Grilled Salmon",
        "imageSrc": "https://images.unsplash.com/photo-1509402308-817902776267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JpbGxlZCUyMHNhbG1vbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.6
      },
      {
        "name": "Tomato Pasta",
        "imageSrc": "https://images.unsplash.com/photo-1599749011927-9a77278bfa61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvJTIwcGFzdGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.0
      },
      {
        "name": "Vegan Salad",
        "imageSrc": "https://plus.unsplash.com/premium_photo-1673581152321-7904acc23d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW4lMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
      },
      {
        "name": "Fried Chicken",
        "imageSrc": "https://images.unsplash.com/photo-1626082896492-766af4eb6501?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJpZWQlMjBjaGlja2VufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
      },
      {
        "name": "Mushroom Risotto",
        "imageSrc": "https://images.unsplash.com/photo-1595908129746-57ca1a63dd4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaHJvb20lMjByaXNvdHRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
      },
      {
        "name": "Chocolate Cake",
        "imageSrc": "https://images.unsplash.com/photo-1646321155200-0dbac918eeef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hvY29sb2F0ZSUyMGNha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
      },
      {
        "name": "Burger",
        "imageSrc": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
      },
      {
        "name": "Panner Tikka",
        "imageSrc": "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
      },
];

let displayedRecipes = recipes;

function displayRecipes() {
    recipeContainer.innerHTML = '';
    displayedRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        recipeCard.innerHTML = `
            <img src="${recipe.imageSrc}" alt="${recipe.name}">
            <h2>${recipe.name}</h2>
            <p>${recipe.type}</p>
            <p>${recipe.time}</p>
            <p>Rating: ${recipe.rating}</p>
            <span class="like-btn ${recipe.isLiked ? 'active' : ''}" onclick="toggleLike(${recipes.indexOf(recipe)})">&#10084;</span>
        `;

        recipeContainer.appendChild(recipeCard);
    });
}

function toggleLike(index) {
    recipes[index].isLiked = !recipes[index].isLiked;
    displayRecipes();
}

function filterRecipes(type) {
    if (type === 'all') {
        displayedRecipes = recipes;
    } else {
        displayedRecipes = recipes.filter(recipe => recipe.type === type);
    }
    displayRecipes();
}

function filterByRating(filter) {
    if (filter === 'above-4.5') {
        displayedRecipes = recipes.filter(recipe => recipe.rating > 4.5);
    } else if (filter === 'below-4.0') {
        displayedRecipes = recipes.filter(recipe => recipe.rating < 4.0);
    } else {
        displayedRecipes = recipes;
    }
    displayRecipes();
}

function toggleMobileDrawer() {
    mobileDrawer.classList.add('show');
}

function closeMobileDrawer() {
    mobileDrawer.classList.remove('show');
}

searchInput.addEventListener('input', () => {
    const searchQuery = searchInput.value.toLowerCase();
    displayedRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery));
    displayRecipes();
});

searchInputMobile.addEventListener('input', () => {
    const searchQuery = searchInputMobile.value.toLowerCase();
    displayedRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery));
    displayRecipes();
});

displayRecipes();