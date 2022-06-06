document.addEventListener('DOMContentLoaded', () => {

    const searchIcon = document.querySelector('.search_icon');
    const searchInput = document.getElementById("js-search_input");
    const search = document.getElementById('js-search');
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

    searchInput.oninput = function () {
        if (searchInput.value.length > 0) {
            searchIcon.classList.add('search_icon--active');
        } else {
            searchIcon.classList.remove('search_icon--active');
        }
    };

    // sessionStorage.clear();
    // localStorage.clear();

    const en = "ouioui";


    async function getData(url) {
        const response = await fetch(url);
        const data = await response.json();
        // const text = await data.text();

        // console.log(data);
        getSumm(data);
        masteryData =
            getMasteryData(`https://champmastery.xleay.workers.dev/api/?region=${selectedServer}&endpoint=/lol/champion-mastery/v4/champion-masteries/by-summoner/${data.id}`);

        setTimeout(() => {
            rankData =
                getRankData(`https://champmastery.xleay.workers.dev/api/?region=${selectedServer}&endpoint=/lol/league/v4/entries/by-summoner/${data.id}`);
        }, 500);

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
        console.log(selectedServer, nickname);
        searchInput.value = '';
        searchIcon.classList.remove('search_icon--active');
        clearChampionCard();
        getData(`https://champmastery.xleay.workers.dev/api/?region=${selectedServer}&endpoint=/lol/summoner/v4/summoners/by-name/{summonerName}&summonerName=${nickname}`);
    });


    function getSumm(data) {
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
                    </div>
                </div>
            </section>
        `;
        loadHTML();
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

                    setTimeout(() => {

                        rankTier === undefined ? rankTier = 'UNRANKED' : rankTier;
                        champInfoCard.innerHTML = `
                            <div class="champ_info__card__item__part1">
                                <div class="champ_info__card_img">
                                    <img src="https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${name}.png" alt="${name}" height="40" width="40">
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
