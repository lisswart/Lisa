const recipes = [
{name: "Pork Fry with Chili", ingredientList: "", instructions: ""},
{name: "Red Beans and Pork", ingredientList: "", instructions: ""},
{name: "Bird in a Thick Sauce", ingredientList: "", instructions: ""},
{name: "Chili-Hot Chicken", ingredientList: "", instructions: ""},
{name: "Roast Duck with Peanut Spice Paste", ingredientList: "", instructions: ""},
{name: "Duck Curry in Nut Sauce", ingredientList: "", instructions: ""}
];


function createTileFromRecipe (recipe) {
    const tile = document.createElement('div');
    // const innerTile = document.createElement('div');

    tile.className = 'tile';
    // innerTile.className = 'innerTile';
    tile.innerHTML =
    `
        <div>
            <h2>${recipe.name}</h2>
            <div>
                <p>INGREDIENTS: ${recipe.ingredientList}</p>
                <p>INSTRUCTIONS: ${recipe.instructions}</p>
            </div>
        </div>
    `;

    return tile;
}

const tileContainer = document.getElementsByClassName('container')[0];

for(let i = 0; i < recipes.length; i++) {
    const tile = createTileFromRecipe(recipes[i]);
    tileContainer.appendChild(tile);
}