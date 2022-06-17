const searchIcon = document.querySelector('.search_icon');
const searchInput = document.getElementById("js-search_input");
const search = document.getElementById('js-search');
const fakeButton = document.querySelector('.fakeButton');
let tempLocalStorage;

function getStars() {
    let FavoritesSummoners = [];
    const summoner = document.querySelectorAll('js-summoner');
    const stars = document.querySelectorAll('.js-star');
    const summonerPage = document.querySelector(".content").querySelector(".summoner");

    stars.forEach(star => {
        star.classList.remove('js-star');
        star.addEventListener('click', () => {
            star.classList.toggle('star-active');
            star.innerText = star.classList.contains('star-active') ? 'star' : 'grade';

            if (summonerPage !== null) {
                let summonerName = summonerPage.querySelector(".js-summoner").innerText;

                if (star.classList.contains('star-active')) {
                    FavoritesSummoners = JSON.parse(localStorage.getItem('FavoritesSummoners')) || [];
                    FavoritesSummoners.push(summonerName);

                    localStorage.setItem('FavoritesSummoners', JSON.stringify(FavoritesSummoners));
                }

                if (!star.classList.contains('star-active')) {
                    FavoritesSummoners = JSON.parse(localStorage.getItem('FavoritesSummoners')) || [];
                    FavoritesSummoners.splice(FavoritesSummoners.indexOf(summonerName), 1);
                    localStorage.setItem('FavoritesSummoners', JSON.stringify(FavoritesSummoners));
                }
            }
        });
    });
}

function removeFavorite(summonerName) {
    const FavoritesSummoners = JSON.parse(localStorage.getItem('FavoritesSummoners')) || [];
    FavoritesSummoners.splice(FavoritesSummoners.indexOf(summonerName), 1);
    localStorage.setItem('FavoritesSummoners', JSON.stringify(FavoritesSummoners));
}

const confirm = document.createElement('div');
let undoRemoval = (message, currentlocalStorage) => {

    confirm.classList.add('confirmation');
    confirm.innerHTML = `
            <div class="confirm__message">
                <p class="confirm__message_p">${message}</p>
            </div>

            <div class="sep"></div>

            <div class="confirm__button">
                <span class="material-symbols-rounded undo-btn js-undo">undo</span>
            </div>
        `;

    document.body.appendChild(confirm);
    const confirmation = document.querySelector('.confirmation');
    const confirm__message_p = document.querySelector('.confirm__message_p');
    confirmation.animate([{
        opacity: 0,
        transform: 'translate(-50%, 30px)'
    }, {
        opacity: 1,
        transform: 'translate(-50%, 0)'
    }], {
        duration: 300,
        easing: 'ease'
    });

    processChanges();

    const undo = document.querySelectorAll('.js-undo');
    undo.forEach(undo => {
        undo.addEventListener('click', () => {
            localStorage.setItem('FavoritesSummoners', JSON.stringify(currentlocalStorage));
            confirm__message_p.innerText = 'Canceled';

            setTimeout(() => {
                deleteConfirmation();
                getFavorites();
            }, 500);

        });
    });
}

function debounce(func, timeout = 2000) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function deleteConfirmation() {
    fadeOut();
    setTimeout(() => { confirm.remove(); }, 400);
}

let fadeOut = () => {
    confirm.animate([{
        opacity: 1,
        transform: 'translate(-50%, 0)'
    }, {
        opacity: 0,
        transform: 'translate(-50%, 30px)'
    }], {
        duration: 500,
        easing: 'ease'
    });
};

const processChanges = debounce(() => deleteConfirmation());
let close;

function getFavorites() {
    const section__items_container = document.querySelector(".section__items_container");

    if (JSON.parse(localStorage.getItem('FavoritesSummoners')).length !== 0) { section__items_container.innerHTML = ""; }
    for (let i = 0; i < JSON.parse(localStorage.getItem('FavoritesSummoners')).length; i++) {
        const summonerName = JSON.parse(localStorage.getItem('FavoritesSummoners'))[i];
        const summoner = document.createElement('div');
        let lastElementInArray;

        if (i === JSON.parse(localStorage.getItem('FavoritesSummoners')).length - 1) { lastElementInArray = true; }
        summoner.innerHTML = `
        <div class="section__items_wrap ${lastElementInArray ? 'lastFav' : ''}">
            <p class="section__items_names">${summonerName}</p>
            <span class="material-symbols-rounded close">close</span>
        </div>
        `;
        section__items_container.appendChild(summoner);
    }

    close = document.querySelectorAll('.close');
    close.forEach(close => {
        close.addEventListener('click', () => {

            tempLocalStorage = JSON.parse(localStorage.getItem('FavoritesSummoners'));
            const summonerName = close.parentElement.querySelector('.section__items_names').innerText;

            removeFavorite(summonerName);
            close.parentElement.remove();
            console.log(tempLocalStorage);
            undoRemoval(`${summonerName} has been removed`, tempLocalStorage);
            if (JSON.parse(localStorage.getItem('FavoritesSummoners')).length == 0) {
                section__items_container.innerHTML = `
                    <div class="section__items_wrap no_fav">
                        <p>You don't have any favorite summoner</p>
                    </div>
                `;
            }

        });
    });
}

function clickOnFavorite() {
    const section__items_wrap = document.querySelectorAll('.section__items_wrap');

    section__items_wrap.forEach(wrap => {
        close = wrap.querySelector('.close');
        wrap.addEventListener('click', (e) => {
            if (!e.target.classList.contains('close')) {
                searchInput.value = wrap.querySelector('.section__items_names').innerText;
                searchInput.focus();
                fakeButton.click();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const sb = document.getElementById('js-region');
    const allServers = ['euw1', 'eun1', 'kr', 'na1', 'br1', 'jp1', 'la1', 'oc1', 'ru', 'tr1'];
    const allServersAlpha = ['EUW', 'EUNE', 'KR', 'NA', 'BR', 'JP', 'LAN', 'OCE', 'RU', 'TR'];
    const content = document.querySelector('.content');
    const mastery = document.querySelector('.mastery');
    const champInfo = document.querySelector('.champ_info__card');
    const listaus = document.querySelector('.listaus');

    const allRanks = {
        "UNRANKED": "https://i.imgur.com/LZFsBz1.png",
        "IRON": "https://i.imgur.com/RE2oI4q.png",
        "BRONZE": "https://i.imgur.com/kVp33uW.png",
        "SILVER": "https://i.imgur.com/x8nxi0a.png",
        "GOLD": "https://i.imgur.com/vl1NFHd.png",
        "PLATINUM": "https://i.imgur.com/B4po1BT.png",
        "DIAMOND": "https://i.imgur.com/9TjI414.png",
        "MASTER": "https://i.imgur.com/3NvnpCi.png",
        "GRANDMASTER": "https://i.imgur.com/qzRiTSc.png",
        "CHALLENGER": "https://i.imgur.com/Bf5V2s5.png"
    };

    let selectedServer;
    let nickname;
    let champData = require('./champ.json');
    let masteryData;
    let rankData;
    let alreadyFavorite = false;
    let httpStatus;

    if (localStorage.getItem('FavoritesSummoners') == null) { localStorage.setItem('FavoritesSummoners', JSON.stringify([])); }

    searchInput.oninput = function () {
        if (searchInput.value.length > 0) {
            searchIcon.classList.add('search_icon--active');
        } else {
            searchIcon.classList.remove('search_icon--active');
        }
    };

    getStars();
    getFavorites();
    clickOnFavorite();

    async function getData(url) {
        const response = await fetch(url)
        // console.log(response);
        httpStatus = response.ok;
        const data = await response.json();

        // console.log(data);
        getSumm(data);
        masteryData =
            getMasteryData(`https://champmastery.xleay.workers.dev/api/?region=${selectedServer}&endpoint=/lol/champion-mastery/v4/champion-masteries/by-summoner/${data.id}`);

        setTimeout(() => {
            rankData =
                getRankData(`https://champmastery.xleay.workers.dev/api/?region=${selectedServer}&endpoint=/lol/league/v4/entries/by-summoner/${data.id}`);
        }, 500);

        setTimeout(() => { getStars(); }, 100);

        return data;
    }

    async function getMasteryData(url) {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);

        return data;
    }

    async function getRankData(url) {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);

        return data;
    }

    search.addEventListener('submit', () => {
        selectedServer = allServers[sb.selectedIndex];
        nickname = searchInput.value;

        alreadyFavorite = JSON.parse(localStorage.getItem('FavoritesSummoners')).find(summoner => summoner.toLowerCase() === nickname.toLowerCase()) !== undefined;

        searchInput.value = '';
        searchIcon.classList.remove('search_icon--active');
        clearChampionCard();
        getData(`https://champmastery.xleay.workers.dev/api/?region=${selectedServer}&endpoint=/lol/summoner/v4/summoners/by-name/{summonerName}&summonerName=${nickname}`);
    });

    function getSumm(data) {
        mastery.classList.remove('mastery--active');
        if (!httpStatus) {
            content.innerHTML = `
                <div class="no_data">
                    <div class="no_data_img">
                        <img src="https://i.imgur.com/kb7jOh8.png" alt="League of Legends Leona - Data not found" loading="lazy" height="150">
                    </div>
                    <p class="no_data_p">This summoner is lost in the Rift</p>
                    <button class="no_data_back">
                        <span class="material-symbols-rounded back_arrow">arrow_back</span>
                        Go back to lane
                    </button>
                </div>
            `;
            let noDataBack = document.querySelector('.no_data_back');
            console.log(noDataBack);
            noDataBack.addEventListener('click', () => {
                window.location.href = '/';
            });
        }

        if (httpStatus) {
            content.innerHTML = `
                <section class="summoner">
                    <div class="summoner_hero">
                        <div class="summoner_hero__summoner">
                            <p class="summoner_hero__p">summoner:</p>
                            <p class="summoner_hero__name js-summoner">${data.name}</p>
                        </div>

                        <div class="summoner_hero__region">
                            <p class="summoner_hero__p">region:</p>
                            <p class="summoner_hero__name js-region">${allServersAlpha[sb.selectedIndex]}</p>
                        </div>
                    </div>

                    <div class="summoner_icon">
                        <div class="summoner_icon_handler">
                            <div class="summoner_icon__img">
                                <img class="js-summoner_icon" src="https://ddragon.leagueoflegends.com/cdn/12.10.1/img/profileicon/${data.profileIconId}.png" alt="Summoner icon" height="50" width="50">
                                <div class="summoner_icon__level">
                                    <p class="summoner_icon__level_p js-summoner_level">${data.summonerLevel}</p>
                                </div>
                            </div>
                            <span class="material-symbols-rounded star js-star ${alreadyFavorite ? 'star-active">star</span>' : '">grade</span>'}
                        </div>
                    </div>
                </section>
            `;
            loadHTML();
        }
    }

    function loadHTML(data) {
        mastery.classList.add('mastery--active');
        fetch('summoner.html')
            .then(response => response.text())
            .then(text => content.innerHTML += text);
    }

    function addFavoriteSummoner(data) {

        let summonerInfo = [allServersAlpha[sb.selectedIndex], data.profileIconId, data.summonerLevel];
        localStorage.setItem(data.name, JSON.stringify(summonerInfo));
        let storedSummonerInfo = JSON.parse(localStorage.getItem(data.name));

    }

    let champId = 1;
    for (let cle in champData) {
        if (champData.hasOwnProperty(cle)) {
            // console.log(`${cle} : ${champData[cle].key}`);

            let li = document.createElement('li');
            li.classList.add('listaus__item');
            li.classList.add('listaus__item--' + champId);
            li.innerHTML = `
                    <div class="listaus__item_wrap">
                        <div class="listaus__item__img">
                            <img src="${champData[cle].img}" alt="League of Legends icon of the champion ${cle}" height="40" width="40" loading="lazy">
                        </div>
                        <div class="listaus__item__name">
                            <p>${cle}</p>
                        </div>
                    </div>
                    `;
            listaus.appendChild(li);
            champId++;
        }
    }

    // Get input element
    let filterInput = document.getElementById('filterInput');
    // Add event listener
    filterInput.addEventListener('keyup', filterNames);
    listaus.addEventListener('mouseover', createChampionCard);


    function filterNames() {
        // Get value of input
        let filterValue = document.getElementById('filterInput').value.toUpperCase();

        // Get names ul
        let ul = document.getElementById('names');
        // Get lis from ul
        let li = ul.querySelectorAll('li.listaus__item');

        // Loop through collection-item list
        let counter = 0;
        for (let i = 0; i < li.length; i++) {

            if (filterValue.length > 0) {

                listaus.style.display = 'flex';
                let a = li[i].getElementsByTagName('p')[0];
                // If matched
                if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                    li[i].style.display = 'block';
                    counter++;
                } else {
                    li[i].style.display = 'none';
                }

                if (counter === 0) {
                    listaus.style.display = 'none';
                }

                // console.clear();
                // console.log(counter);
            } else {
                listaus.style.display = 'none';
            }
        }
    }

    let champAlreadyClicked = [];
    function createChampionCard() {

        // console.log(champAlreadyClicked);
        let ul = document.getElementById('names');
        let li = ul.querySelectorAll('li.listaus__item');

        li.forEach(item => {
            item.addEventListener('click', function () {
                let name = this.getElementsByTagName('p')[0].innerHTML;
                console.log(name);

                if (champAlreadyClicked.includes(name)) { }
                else {

                    let championId = champData[name].key;
                    // console.log(championId);

                    let championMastery;
                    let rankDivision;
                    let rankTier;

                    masteryData.then(
                        value => {
                            for (champ in value) {
                                if (value.hasOwnProperty(champ)) {
                                    if (value[champ].championId == championId) {

                                        console.log(value[champ].championId, value[champ].championPoints);
                                        championMastery = value[champ].championPoints;
                                        return championMastery;

                                    } else {
                                        console.log('You don\'t have mastery points for this champion');
                                        championMastery = 0;
                                    }
                                }
                            }
                        }
                    );

                    rankData.then(
                        value => {
                            for (rank in value) {
                                if (value.hasOwnProperty(rank)) {
                                    rankDivision = value[rank].rank;
                                    rankTier = value[rank].tier;
                                    console.log(rankTier, rankDivision);
                                }
                            }
                        }
                    );

                    let champInfoCard = document.createElement('div');
                    champInfoCard.classList.add('champ_info__card__item');
                    champAlreadyClicked.push(name);

                    let Wukong = name === 'Wukong';
                    setTimeout(() => {

                        rankTier === undefined ? rankTier = 'UNRANKED' : rankTier;
                        champInfoCard.innerHTML = `
                            <div class="champ_info__card__item__part1">
                                <div class="champ_info__card_img">
                                    <img src="https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${Wukong ? 'MonkeyKing' : name}.png" alt="${name}" height="40" width="40">
                                </div>
                                <div class="champ_info__card_name">
                                    <p>${name}</p>
                                </div>
                            </div>

                            <div class="separator"></div>

                            <div class="champ_info__card__item__part2">
                                <div class="champ_info__card_rank">
                                    <img src="${allRanks[rankTier]}" alt="Highest League of Legends Ranked Icon" height="40" width="40">
                                </div>
                            </div>

                            <div class="separator"></div>

                            <div class="champ_info__card__item__part3">
                                <div class="champ_info__card_mastery">
                                    <p>${championMastery}</p>
                                </div>
                            </div>
                        `;
                        champInfo.appendChild(champInfoCard);
                    }, 100);
                }

                listaus.style.display = 'none';
            });
        });
    }

    function clearChampionCard() {
        champInfo.innerHTML = '';
        filterInput.value = '';
        listaus.style.display = 'none';
        champAlreadyClicked = [];
    }
    // TODO : Dark mode et style PC
});
