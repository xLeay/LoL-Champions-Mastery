const searchIcon = document.querySelector('.search_icon');
const searchInput = document.getElementById("js-search_input");


function showSearch() {
    searchIcon.classList.toggle('search_icon--active');
}

searchInput.oninput = function () {
    if (searchInput.value.length > 0) {
        searchIcon.classList.add('search_icon--active');
    } else {
        searchIcon.classList.remove('search_icon--active');
    }
};

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // const text = await data.text();
    return data;
}

getData('https://champmastery.xleay.workers.dev/api/?region=europe&endpoint=/lol/match/v5/matches/by-puuid/{puuid}/ids&puuid=bDL6N71AYFjleZiWPBkTxAwZplB1itxIfXRn8w9hvzgdobjO7BvLpXZIhh6OTExkFJFS4npI7ZQfxg&count=10')

