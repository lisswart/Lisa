const searchBox = document.querySelector('#search');
const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetchSearchResults(searchBox.value);
})

function fetchSearchResults(searchValue) {
    return fetch(`https://api.github.com/search/users?q=${searchValue}`, {
        headers: {
            "Accept": "application/vnd.github.v3+json"
        }
    })
    .then(resp => resp.json())
    .then(data => renderSearchResult(data.items));
}

function renderSearchResult(users) {
    users.forEach(user => {
        const userList = document.querySelector('#user-list');
        const div = document.createElement('div');
        div.className = "user-container";
        div.appendChild(getUserName(user));
        div.appendChild(getUserAvatar(user));
        div.appendChild(getUserLinkToProfile(user));
        userList.appendChild(div);
    });    
}

function getUserName(user) {
    const userName = document.createElement('li');
    userName.textContent = `${user.login}`;
    return userName;
}

function getUserAvatar(user) {
    
    const userAvatar = document.createElement('li');
    userAvatar.innerHTML = `<a href="${user.avatar_url}">avatar</a>`;
    return userAvatar;
}

function getUserLinkToProfile(user) {
    const userProfile = document.createElement('li');
    userProfile.innerHTML = `<a href="${user.html_url}">profile</a>`;
    return userProfile;
}