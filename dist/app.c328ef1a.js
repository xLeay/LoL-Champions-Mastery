// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"champ.json":[function(require,module,exports) {
module.exports = {
  "Aatrox": {
    "key": "266",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Aatrox.png"
  },
  "Ahri": {
    "key": "103",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ahri.png"
  },
  "Akali": {
    "key": "84",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Akali.png"
  },
  "Akshan": {
    "key": "166",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Akshan.png"
  },
  "Alistar": {
    "key": "12",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Alistar.png"
  },
  "Amumu": {
    "key": "32",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Amumu.png"
  },
  "Anivia": {
    "key": "34",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Anivia.png"
  },
  "Annie": {
    "key": "1",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Annie.png"
  },
  "Aphelios": {
    "key": "523",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Aphelios.png"
  },
  "Ashe": {
    "key": "22",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ashe.png"
  },
  "AurelionSol": {
    "key": "136",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/AurelionSol.png"
  },
  "Azir": {
    "key": "268",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Azir.png"
  },
  "Bard": {
    "key": "432",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Bard.png"
  },
  "Blitzcrank": {
    "key": "53",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Blitzcrank.png"
  },
  "Brand": {
    "key": "63",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Brand.png"
  },
  "Braum": {
    "key": "201",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Braum.png"
  },
  "Caitlyn": {
    "key": "51",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Caitlyn.png"
  },
  "Camille": {
    "key": "164",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Camille.png"
  },
  "Cassiopeia": {
    "key": "69",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Cassiopeia.png"
  },
  "Chogath": {
    "key": "31",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Chogath.png"
  },
  "Corki": {
    "key": "42",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Corki.png"
  },
  "Darius": {
    "key": "122",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Darius.png"
  },
  "Diana": {
    "key": "131",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Diana.png"
  },
  "DrMundo": {
    "key": "36",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/DrMundo.png"
  },
  "Draven": {
    "key": "119",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Draven.png"
  },
  "Ekko": {
    "key": "245",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ekko.png"
  },
  "Elise": {
    "key": "60",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Elise.png"
  },
  "Evelynn": {
    "key": "28",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Evelynn.png"
  },
  "Ezreal": {
    "key": "81",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ezreal.png"
  },
  "Fiddlesticks": {
    "key": "9",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Fiddlesticks.png"
  },
  "Fiora": {
    "key": "114",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Fiora.png"
  },
  "Fizz": {
    "key": "105",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Fizz.png"
  },
  "Galio": {
    "key": "3",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Galio.png"
  },
  "Gangplank": {
    "key": "41",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Gangplank.png"
  },
  "Garen": {
    "key": "86",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Garen.png"
  },
  "Gnar": {
    "key": "150",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Gnar.png"
  },
  "Gragas": {
    "key": "79",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Gragas.png"
  },
  "Graves": {
    "key": "104",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Graves.png"
  },
  "Gwen": {
    "key": "887",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Gwen.png"
  },
  "Hecarim": {
    "key": "120",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Hecarim.png"
  },
  "Heimerdinger": {
    "key": "74",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Heimerdinger.png"
  },
  "Illaoi": {
    "key": "420",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Illaoi.png"
  },
  "Irelia": {
    "key": "39",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Irelia.png"
  },
  "Ivern": {
    "key": "427",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ivern.png"
  },
  "Janna": {
    "key": "40",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Janna.png"
  },
  "JarvanIV": {
    "key": "59",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/JarvanIV.png"
  },
  "Jax": {
    "key": "24",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Jax.png"
  },
  "Jayce": {
    "key": "126",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Jayce.png"
  },
  "Jhin": {
    "key": "202",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Jhin.png"
  },
  "Jinx": {
    "key": "222",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Jinx.png"
  },
  "Kaisa": {
    "key": "145",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kaisa.png"
  },
  "Kalista": {
    "key": "429",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kalista.png"
  },
  "Karma": {
    "key": "43",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Karma.png"
  },
  "Karthus": {
    "key": "30",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Karthus.png"
  },
  "Kassadin": {
    "key": "38",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kassadin.png"
  },
  "Katarina": {
    "key": "55",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Katarina.png"
  },
  "Kayle": {
    "key": "10",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kayle.png"
  },
  "Kayn": {
    "key": "141",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kayn.png"
  },
  "Kennen": {
    "key": "85",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kennen.png"
  },
  "Khazix": {
    "key": "121",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Khazix.png"
  },
  "Kindred": {
    "key": "203",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kindred.png"
  },
  "Kled": {
    "key": "240",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kled.png"
  },
  "KogMaw": {
    "key": "96",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/KogMaw.png"
  },
  "Leblanc": {
    "key": "7",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Leblanc.png"
  },
  "LeeSin": {
    "key": "64",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/LeeSin.png"
  },
  "Leona": {
    "key": "89",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Leona.png"
  },
  "Lillia": {
    "key": "876",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Lillia.png"
  },
  "Lissandra": {
    "key": "127",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Lissandra.png"
  },
  "Lucian": {
    "key": "236",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Lucian.png"
  },
  "Lulu": {
    "key": "117",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Lulu.png"
  },
  "Lux": {
    "key": "99",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Lux.png"
  },
  "Malphite": {
    "key": "54",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Malphite.png"
  },
  "Malzahar": {
    "key": "90",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Malzahar.png"
  },
  "Maokai": {
    "key": "57",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Maokai.png"
  },
  "MasterYi": {
    "key": "11",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/MasterYi.png"
  },
  "MissFortune": {
    "key": "21",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/MissFortune.png"
  },
  "Mordekaiser": {
    "key": "82",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Mordekaiser.png"
  },
  "Morgana": {
    "key": "25",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Morgana.png"
  },
  "Nami": {
    "key": "267",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nami.png"
  },
  "Nasus": {
    "key": "75",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nasus.png"
  },
  "Nautilus": {
    "key": "111",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nautilus.png"
  },
  "Neeko": {
    "key": "518",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Neeko.png"
  },
  "Nidalee": {
    "key": "76",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nidalee.png"
  },
  "Nocturne": {
    "key": "56",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nocturne.png"
  },
  "Nunu": {
    "key": "20",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nunu.png"
  },
  "Olaf": {
    "key": "2",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Olaf.png"
  },
  "Orianna": {
    "key": "61",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Orianna.png"
  },
  "Ornn": {
    "key": "516",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ornn.png"
  },
  "Pantheon": {
    "key": "80",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Pantheon.png"
  },
  "Poppy": {
    "key": "78",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Poppy.png"
  },
  "Pyke": {
    "key": "555",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Pyke.png"
  },
  "Qiyana": {
    "key": "246",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Qiyana.png"
  },
  "Quinn": {
    "key": "133",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Quinn.png"
  },
  "Rakan": {
    "key": "497",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Rakan.png"
  },
  "Rammus": {
    "key": "33",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Rammus.png"
  },
  "RekSai": {
    "key": "421",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/RekSai.png"
  },
  "Renata": {
    "key": "888",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Renata.png"
  },
  "Renekton": {
    "key": "58",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Renekton.png"
  },
  "Rengar": {
    "key": "107",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Rengar.png"
  },
  "Riven": {
    "key": "92",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Riven.png"
  },
  "Rumble": {
    "key": "68",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Rumble.png"
  },
  "Ryze": {
    "key": "13",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ryze.png"
  },
  "Sejuani": {
    "key": "113",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sejuani.png"
  },
  "Senna": {
    "key": "235",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Senna.png"
  },
  "Seraphine": {
    "key": "147",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Seraphine.png"
  },
  "Sett": {
    "key": "875",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sett.png"
  },
  "Shaco": {
    "key": "35",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Shaco.png"
  },
  "Shen": {
    "key": "98",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Shen.png"
  },
  "Shyvana": {
    "key": "102",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Shyvana.png"
  },
  "Singed": {
    "key": "27",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Singed.png"
  },
  "Sion": {
    "key": "14",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sion.png"
  },
  "Sivir": {
    "key": "15",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sivir.png"
  },
  "Skarner": {
    "key": "72",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Skarner.png"
  },
  "Sona": {
    "key": "37",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sona.png"
  },
  "Soraka": {
    "key": "16",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Soraka.png"
  },
  "Swain": {
    "key": "50",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Swain.png"
  },
  "Sylas": {
    "key": "517",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sylas.png"
  },
  "Syndra": {
    "key": "134",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Syndra.png"
  },
  "TahmKench": {
    "key": "223",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/TahmKench.png"
  },
  "Taliyah": {
    "key": "163",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Taliyah.png"
  },
  "Talon": {
    "key": "91",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Talon.png"
  },
  "Taric": {
    "key": "44",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Taric.png"
  },
  "Teemo": {
    "key": "17",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Teemo.png"
  },
  "Thresh": {
    "key": "412",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Thresh.png"
  },
  "Tristana": {
    "key": "18",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Tristana.png"
  },
  "Trundle": {
    "key": "48",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Trundle.png"
  },
  "Tryndamere": {
    "key": "23",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Tryndamere.png"
  },
  "TwistedFate": {
    "key": "4",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/TwistedFate.png"
  },
  "Twitch": {
    "key": "29",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Twitch.png"
  },
  "Udyr": {
    "key": "77",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Udyr.png"
  },
  "Urgot": {
    "key": "6",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Urgot.png"
  },
  "Varus": {
    "key": "110",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Varus.png"
  },
  "Vayne": {
    "key": "67",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Vayne.png"
  },
  "Veigar": {
    "key": "45",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Veigar.png"
  },
  "Velkoz": {
    "key": "161",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Velkoz.png"
  },
  "Vex": {
    "key": "711",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Vex.png"
  },
  "Viego": {
    "key": "234",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Viego.png"
  },
  "Viktor": {
    "key": "112",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Viktor.png"
  },
  "Vi": {
    "key": "254",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Vi.png"
  },
  "Vladimir": {
    "key": "8",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Vladimir.png"
  },
  "Volibear": {
    "key": "106",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Volibear.png"
  },
  "Warwick": {
    "key": "19",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Warwick.png"
  },
  "Wukong": {
    "key": "62",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/MonkeyKing.png"
  },
  "Xayah": {
    "key": "498",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Xayah.png"
  },
  "Xerath": {
    "key": "101",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Xerath.png"
  },
  "XinZhao": {
    "key": "5",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/XinZhao.png"
  },
  "Yasuo": {
    "key": "157",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Yasuo.png"
  },
  "Yorick": {
    "key": "83",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Yorick.png"
  },
  "Yuumi": {
    "key": "350",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Yuumi.png"
  },
  "Zac": {
    "key": "154",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zac.png"
  },
  "Zed": {
    "key": "238",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zed.png"
  },
  "Zeri": {
    "key": "221",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zeri.png"
  },
  "Ziggs": {
    "key": "115",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ziggs.png"
  },
  "Zilean": {
    "key": "26",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zilean.png"
  },
  "Zoe": {
    "key": "142",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zoe.png"
  },
  "Zyra": {
    "key": "143",
    "img": "https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zyra.png"
  }
};
},{}],"app.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

document.addEventListener('DOMContentLoaded', function () {
  var searchIcon = document.querySelector('.search_icon');
  var searchInput = document.getElementById("js-search_input");
  var search = document.getElementById('js-search');
  var sb = document.getElementById('js-region');
  var allServers = ['euw1', 'eun1', 'kr', 'na1', 'br1', 'jp1', 'la1', 'oc1', 'ru', 'tr1'];
  var allServersAlpha = ['EUW', 'EUNE', 'KR', 'NA', 'BR', 'JP', 'LAN', 'OCE', 'RU', 'TR'];
  var content = document.querySelector('.content');
  var mastery = document.querySelector('.mastery');
  var champInfo = document.querySelector('.champ_info__card');
  var listaus = document.querySelector('.listaus');
  var allRanks = {
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
  var selectedServer;
  var nickname;

  var champData = require('./champ.json');

  var masteryData;
  var rankData;

  searchInput.oninput = function () {
    if (searchInput.value.length > 0) {
      searchIcon.classList.add('search_icon--active');
    } else {
      searchIcon.classList.remove('search_icon--active');
    }
  }; // sessionStorage.clear();
  // localStorage.clear();


  var en = "ouioui";

  function getData(_x) {
    return _getData.apply(this, arguments);
  }

  function _getData() {
    _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(url);

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              data = _context.sent;
              // const text = await data.text();
              // console.log(data);
              getSumm(data);
              masteryData = getMasteryData("https://champmastery.xleay.workers.dev/api/?region=".concat(selectedServer, "&endpoint=/lol/champion-mastery/v4/champion-masteries/by-summoner/").concat(data.id));
              setTimeout(function () {
                rankData = getRankData("https://champmastery.xleay.workers.dev/api/?region=".concat(selectedServer, "&endpoint=/lol/league/v4/entries/by-summoner/").concat(data.id));
              }, 500);
              return _context.abrupt("return", data);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getData.apply(this, arguments);
  }

  function getMasteryData(_x2) {
    return _getMasteryData.apply(this, arguments);
  }

  function _getMasteryData() {
    _getMasteryData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch(url);

            case 2:
              response = _context2.sent;
              _context2.next = 5;
              return response.json();

            case 5:
              data = _context2.sent;
              return _context2.abrupt("return", data);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _getMasteryData.apply(this, arguments);
  }

  function getRankData(_x3) {
    return _getRankData.apply(this, arguments);
  }

  function _getRankData() {
    _getRankData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return fetch(url);

            case 2:
              response = _context3.sent;
              _context3.next = 5;
              return response.json();

            case 5:
              data = _context3.sent;
              return _context3.abrupt("return", data);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _getRankData.apply(this, arguments);
  }

  search.addEventListener('submit', function () {
    selectedServer = allServers[sb.selectedIndex];
    nickname = searchInput.value;
    console.log(selectedServer, nickname);
    searchInput.value = '';
    searchIcon.classList.remove('search_icon--active');
    clearChampionCard();
    getData("https://champmastery.xleay.workers.dev/api/?region=".concat(selectedServer, "&endpoint=/lol/summoner/v4/summoners/by-name/{summonerName}&summonerName=").concat(nickname));
  });

  function getSumm(data) {
    content.innerHTML = "\n            <section class=\"summoner\">\n                <div class=\"summoner_hero\">\n                    <div class=\"summoner_hero__summoner\">\n                        <p class=\"summoner_hero__p\">summoner:</p>\n                        <p class=\"summoner_hero__name js-summoner\">".concat(data.name, "</p>\n                    </div>\n\n                    <div class=\"summoner_hero__region\">\n                        <p class=\"summoner_hero__p\">region:</p>\n                        <p class=\"summoner_hero__name js-region\">").concat(allServersAlpha[sb.selectedIndex], "</p>\n                    </div>\n                </div>\n\n                <div class=\"summoner_icon\">\n                    <div class=\"summoner_icon_handler\">\n                        <div class=\"summoner_icon__img\">\n                            <img class=\"js-summoner_icon\" src=\"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/profileicon/").concat(data.profileIconId, ".png\" alt=\"Summoner icon\" height=\"50\" width=\"50\">\n                            <div class=\"summoner_icon__level\">\n                                <p class=\"summoner_icon__level_p js-summoner_level\">").concat(data.summonerLevel, "</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n        ");
    loadHTML();
  }

  function loadHTML(data) {
    mastery.classList.add('mastery--active');
    fetch('summoner.html').then(function (response) {
      return response.text();
    }).then(function (text) {
      return content.innerHTML += text;
    });
  }

  function addFavoriteSummoner(data) {
    var summonerInfo = [allServersAlpha[sb.selectedIndex], data.profileIconId, data.summonerLevel];
    localStorage.setItem(data.name, JSON.stringify(summonerInfo));
    var storedSummonerInfo = JSON.parse(localStorage.getItem(data.name));
  }

  var champId = 1;

  for (var cle in champData) {
    if (champData.hasOwnProperty(cle)) {
      // console.log(`${cle} : ${champData[cle].key}`);
      var li = document.createElement('li');
      li.classList.add('listaus__item');
      li.classList.add('listaus__item--' + champId);
      li.innerHTML = "\n                    <div class=\"listaus__item_wrap\">\n                        <div class=\"listaus__item__img\">\n                            <img src=\"".concat(champData[cle].img, "\" alt=\"League of Legends icon of the champion ").concat(cle, "\" height=\"40\" width=\"40\" loading=\"lazy\">\n                        </div>\n                        <div class=\"listaus__item__name\">\n                            <p>").concat(cle, "</p>\n                        </div>\n                    </div>\n                    ");
      listaus.appendChild(li);
      champId++;
    }
  } // Get input element


  var filterInput = document.getElementById('filterInput'); // Add event listener

  filterInput.addEventListener('keyup', filterNames);
  listaus.addEventListener('mouseover', createChampionCard);

  function filterNames() {
    // Get value of input
    var filterValue = document.getElementById('filterInput').value.toUpperCase(); // Get names ul

    var ul = document.getElementById('names'); // Get lis from ul

    var li = ul.querySelectorAll('li.listaus__item'); // Loop through collection-item list

    var counter = 0;

    for (var i = 0; i < li.length; i++) {
      if (filterValue.length > 0) {
        listaus.style.display = 'flex';
        var a = li[i].getElementsByTagName('p')[0]; // If matched

        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
          li[i].style.display = 'block';
          counter++;
        } else {
          li[i].style.display = 'none';
        }

        if (counter === 0) {
          listaus.style.display = 'none';
        } // console.clear();
        // console.log(counter);

      } else {
        listaus.style.display = 'none';
      }
    }
  }

  var champAlreadyClicked = [];

  function createChampionCard() {
    // console.log(champAlreadyClicked);
    var ul = document.getElementById('names');
    var li = ul.querySelectorAll('li.listaus__item');
    li.forEach(function (item) {
      item.addEventListener('click', function () {
        var name = this.getElementsByTagName('p')[0].innerHTML;

        if (champAlreadyClicked.includes(name)) {} else {
          var championId = champData[name].key; // console.log(championId);

          var championMastery;
          var rankDivision;
          var rankTier;
          masteryData.then(function (value) {
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
          });
          rankData.then(function (value) {
            for (rank in value) {
              if (value.hasOwnProperty(rank)) {
                rankDivision = value[rank].rank;
                rankTier = value[rank].tier;
                console.log(rankTier, rankDivision);
              }
            }
          });
          var champInfoCard = document.createElement('div');
          champInfoCard.classList.add('champ_info__card__item');
          champAlreadyClicked.push(name);
          setTimeout(function () {
            rankTier === undefined ? rankTier = 'UNRANKED' : rankTier;
            champInfoCard.innerHTML = "\n                            <div class=\"champ_info__card__item__part1\">\n                                <div class=\"champ_info__card_img\">\n                                    <img src=\"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/".concat(name, ".png\" alt=\"").concat(name, "\" height=\"40\" width=\"40\">\n                                </div>\n                                <div class=\"champ_info__card_name\">\n                                    <p>").concat(name, "</p>\n                                </div>\n                            </div>\n\n                            <div class=\"separator\"></div>\n\n                            <div class=\"champ_info__card__item__part2\">\n                                <div class=\"champ_info__card_rank\">\n                                    <img src=\"").concat(allRanks[rankTier], "\" alt=\"Highest League of Legends Ranked Icon\" height=\"40\" width=\"40\">\n                                </div>\n                            </div>\n\n                            <div class=\"separator\"></div>\n\n                            <div class=\"champ_info__card__item__part3\">\n                                <div class=\"champ_info__card_mastery\">\n                                    <p>").concat(championMastery, "</p>\n                                </div>\n                            </div>\n                        ");
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
  } // TODO : Dark mode et style PC

});
},{"./champ.json":"champ.json"}],"C:/Users/xLeay.DESKTOP-6B07JFG/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54547" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/xLeay.DESKTOP-6B07JFG/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map