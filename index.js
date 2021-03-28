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

// function createButton() {
//     const button1 = createElement('button');
//     const button2 = createElement('button');
//     const searchBox = createElement('input');
//     button1.id = 'button1';
//     button2.id = 'button2';
//     searchBox.id = 'input';

//     button1.innerText = `About Me`;
//     button2.innerText = `search`;
//     searchBox.innerText = `type recipe name here`;

//     return button1, button2, searchBox;

// }

function alertUser() {
    alert("You've clicked me!");
}

function hoverAlert() {
    alert("You hovered above me!");
}

function alertInputBox() {
    alert(searchBox.value);
}

const button1 = document.getElementById('submit');
button1.addEventListener('click', alertUser);

const searchBox = document.getElementById('searchBox');
const button2 = document.getElementById('search');
button2.addEventListener('click', alertInputBox);