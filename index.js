const recipes = [
{name: "Pork Fry with Chili", ingredientList: "", instructions: ""},
{name: "Red Beans and Pork", ingredientList: "", instructions: ""},
{name: "Bird in a Thick Sauce", ingredientList: "", instructions: ""},
{name: "Chili-Hot Chicken", ingredientList: "", instructions: ""},
{name: "Roast Duck with Peanut Spice Paste", ingredientList: "", instructions: ""},
{name: "Duck Curry in Nut Sauce", ingredientList: "", instructions: ""}
];

let tiles = document.getElementsByClassName("tiles");

for(let i = 0; i < tiles.length; i++) {
    let h2 = tiles[i].getElementsByTagName('h2')[0];
    let p1 = tiles[i].getElementsByTagName('p')[0];
    let p2 = tiles[i].getElementsByTagName('p')[1];

    h2.innerText = recipes[i].name;
    p1.innerText = "ingredients: " + recipes[i].ingredientList;
    p2.innerText = `instructions: ${recipes[i].instructions}`;

}

