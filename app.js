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
