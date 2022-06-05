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
    let selectedServer;
    let nickname;
    let champData = require('./champ.json');

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

        console.log(data);
        getSumm(data);

        return data;
    }

    search.addEventListener('submit', () => {
        selectedServer = allServers[sb.selectedIndex];
        nickname = searchInput.value;
        console.log(selectedServer, nickname);
        searchInput.value = '';
        searchIcon.classList.remove('search_icon--active');
        getData(`https://champmastery.xleay.workers.dev/api/?region=${selectedServer}&endpoint=/lol/summoner/v4/summoners/by-name/{summonerName}&summonerName=${nickname}`)
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
                <span class="material-symbols-outlined star">grade</span>
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

    const listaus = document.querySelector('.listaus');

    let champId = 1;
    for (let key in champData) {
        if (champData.hasOwnProperty(key)) {
            // console.log(key + " -> " + champData[key]);


            let li = document.createElement('li');
            li.classList.add('listaus__item');
            li.classList.add('listaus__item--' + champId);
            li.innerHTML = `
                    <div class="listaus__item_wrap">
                        <div class="listaus__item__img">
                            <img src="${champData[key]}" alt="${key}" height="40" width="40" loading="lazy">
                        </div>
                        <div class="listaus__item__name">
                            <p>${key}</p>
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


    function filterNames() {
        // Get value of input
        let filterValue = document.getElementById('filterInput').value.toUpperCase();

        // Get names ul
        let ul = document.getElementById('names');
        // Get lis from ul
        let li = ul.querySelectorAll('li.listaus__item');

        let champAlreadyClicked = [];

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

                console.clear();
                console.log(counter);
            } else {
                listaus.style.display = 'none';
            }

            let champInfoCard = document.createElement('div');
            champInfoCard.classList.add('champ_info__card__item');

            li[i].addEventListener('click', function () {
                let name = this.getElementsByTagName('p')[0].innerHTML;
                console.log(this);

                if (!champAlreadyClicked.includes(name)) {
                champInfoCard.innerHTML = `
                    <div class="champ_info__card_img">
                        <img src="https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${name}.png" alt="${name}" height="40" width="40">
                    </div>
                    <div class="champ_info__card_name">
                        <p>${name}</p>
                    </div>
                `;
                }

                champInfo.appendChild(champInfoCard);

                champAlreadyClicked.push(name);

                // TODO - Ajouter les cards des champs cliqués avec leur maitrise et leurt rank
            });
        }


        
    }











});