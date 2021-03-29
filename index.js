const recipes = [
{name: "Pork Fry with Chili", ingredientList: "", instructions: "", link: "./project1.html"},
{name: "Red Beans and Pork", ingredientList: "", instructions: "", link: "./project2.html"},
{name: "Bird in a Thick Sauce", ingredientList: "", instructions: "", link: "./project3.html"},
{name: "Chili-Hot Chicken", ingredientList: "", instructions: "", link: "./project4.html"},
{name: "Roast Duck with Peanut Spice Paste", ingredientList: "", instructions: "", link: "./project5.html"},
{name: "Duck Curry in Nut Sauce", ingredientList: "", instructions: "", link: "./project6.html"}
];


function createTileFromRecipe (recipe) {
    const tile = document.createElement('div');
    const innerTile = document.createElement('div');
    const innerBox = document.createElement('div');

    tile.className = 'tile';
    innerTile.className = 'innerTile';
    innerBox.className = 'innerBox';

    tile.innerHTML =
    `
        <a href="${recipe.link}">
            <div class="${innerTile.className}">
                <h2>${recipe.name}</h2>
                <div class="${innerBox.className}">
                    <p>INGREDIENTS: ${recipe.ingredientList}</p>
                    <p>INSTRUCTIONS: ${recipe.instructions}</p>
                </div>
            </div>
        </a>
    `;

    return tile;
}

const tileContainer = document.getElementsByClassName('container')[0];

for(let i = 0; i < recipes.length; i++) {
    const tile = createTileFromRecipe(recipes[i]);
    tileContainer.appendChild(tile);
}

function alertUser() {
    alert("You've clicked me!");
}

function hoverAlert() {
    alert("You hovered above me!");
}

function alertInputBox(input) {
    alert(input);
}

const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', alertUser);

const searchBox = document.getElementById('searchBox');
const searchButton = document.getElementById('search');
searchButton.addEventListener('click', e => alertInputBox(searchBox.value));