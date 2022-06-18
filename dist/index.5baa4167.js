// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8Of3k":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"igcvL":[function(require,module,exports) {
const searchIcon = document.querySelector(".search_icon");
const searchInput = document.getElementById("js-search_input");
const search = document.getElementById("js-search");
const fakeButton = document.querySelector(".fakeButton");
let tempLocalStorage;
function getStars() {
    let FavoritesSummoners = [];
    const summoner = document.querySelectorAll("js-summoner");
    const stars = document.querySelectorAll(".js-star");
    const summonerPage = document.querySelector(".content").querySelector(".summoner");
    stars.forEach((star)=>{
        star.classList.remove("js-star");
        star.addEventListener("click", ()=>{
            star.classList.toggle("star-active");
            star.innerText = star.classList.contains("star-active") ? "star" : "grade";
            if (summonerPage !== null) {
                let summonerName = summonerPage.querySelector(".js-summoner").innerText;
                if (star.classList.contains("star-active")) {
                    FavoritesSummoners = JSON.parse(localStorage.getItem("FavoritesSummoners")) || [];
                    FavoritesSummoners.push(summonerName);
                    localStorage.setItem("FavoritesSummoners", JSON.stringify(FavoritesSummoners));
                }
                if (!star.classList.contains("star-active")) {
                    FavoritesSummoners = JSON.parse(localStorage.getItem("FavoritesSummoners")) || [];
                    FavoritesSummoners.splice(FavoritesSummoners.indexOf(summonerName), 1);
                    localStorage.setItem("FavoritesSummoners", JSON.stringify(FavoritesSummoners));
                }
            }
        });
    });
}
function removeFavorite(summonerName) {
    const FavoritesSummoners = JSON.parse(localStorage.getItem("FavoritesSummoners")) || [];
    FavoritesSummoners.splice(FavoritesSummoners.indexOf(summonerName), 1);
    localStorage.setItem("FavoritesSummoners", JSON.stringify(FavoritesSummoners));
}
const confirm = document.createElement("div");
let undoRemoval = (message, currentlocalStorage)=>{
    confirm.classList.add("confirmation");
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
    const confirmation = document.querySelector(".confirmation");
    const confirm__message_p = document.querySelector(".confirm__message_p");
    confirmation.animate([
        {
            opacity: 0,
            transform: "translate(-50%, 30px)"
        },
        {
            opacity: 1,
            transform: "translate(-50%, 0)"
        }
    ], {
        duration: 300,
        easing: "ease"
    });
    processChanges();
    const undo1 = document.querySelectorAll(".js-undo");
    undo1.forEach((undo)=>{
        undo.addEventListener("click", ()=>{
            localStorage.setItem("FavoritesSummoners", JSON.stringify(currentlocalStorage));
            confirm__message_p.innerText = "Canceled";
            setTimeout(()=>{
                deleteConfirmation();
                getFavorites();
            }, 500);
        });
    });
};
function debounce(func, timeout = 2000) {
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this, args);
        }, timeout);
    };
}
function deleteConfirmation() {
    fadeOut();
    setTimeout(()=>{
        confirm.remove();
    }, 400);
}
let fadeOut = ()=>{
    confirm.animate([
        {
            opacity: 1,
            transform: "translate(-50%, 0)"
        },
        {
            opacity: 0,
            transform: "translate(-50%, 30px)"
        }
    ], {
        duration: 500,
        easing: "ease"
    });
};
const processChanges = debounce(()=>deleteConfirmation());
let close;
function getFavorites() {
    const section__items_container = document.querySelector(".section__items_container");
    if (JSON.parse(localStorage.getItem("FavoritesSummoners")).length !== 0) section__items_container.innerHTML = "";
    for(let i = 0; i < JSON.parse(localStorage.getItem("FavoritesSummoners")).length; i++){
        const summonerName = JSON.parse(localStorage.getItem("FavoritesSummoners"))[i];
        const summoner = document.createElement("div");
        let lastElementInArray;
        if (i === JSON.parse(localStorage.getItem("FavoritesSummoners")).length - 1) lastElementInArray = true;
        summoner.innerHTML = `
        <div class="section__items_wrap ${lastElementInArray ? "lastFav" : ""}">
            <p class="section__items_names">${summonerName}</p>
            <span class="material-symbols-rounded close">close</span>
        </div>
        `;
        section__items_container.appendChild(summoner);
    }
    close = document.querySelectorAll(".close");
    close.forEach((close1)=>{
        close1.addEventListener("click", ()=>{
            tempLocalStorage = JSON.parse(localStorage.getItem("FavoritesSummoners"));
            const summonerName = close1.parentElement.querySelector(".section__items_names").innerText;
            removeFavorite(summonerName);
            close1.parentElement.remove();
            console.log(tempLocalStorage);
            undoRemoval(`${summonerName} has been removed`, tempLocalStorage);
            if (JSON.parse(localStorage.getItem("FavoritesSummoners")).length == 0) section__items_container.innerHTML = `
                    <div class="section__items_wrap no_fav">
                        <p>You don't have any favorite summoner</p>
                    </div>
                `;
        });
    });
}
function clickOnFavorite() {
    const section__items_wrap = document.querySelectorAll(".section__items_wrap");
    section__items_wrap.forEach((wrap)=>{
        close = wrap.querySelector(".close");
        wrap.addEventListener("click", (e)=>{
            if (!e.target.classList.contains("close")) {
                searchInput.value = wrap.querySelector(".section__items_names").innerText;
                searchInput.focus();
                fakeButton.click();
            }
        });
    });
}
document.addEventListener("DOMContentLoaded", ()=>{
    const sb = document.getElementById("js-region");
    const allServers = [
        "euw1",
        "eun1",
        "kr",
        "na1",
        "br1",
        "jp1",
        "la1",
        "oc1",
        "ru",
        "tr1"
    ];
    const allServersAlpha = [
        "EUW",
        "EUNE",
        "KR",
        "NA",
        "BR",
        "JP",
        "LAN",
        "OCE",
        "RU",
        "TR"
    ];
    const content = document.querySelector(".content");
    const mastery = document.querySelector(".mastery");
    const champInfo = document.querySelector(".champ_info__card");
    const listaus = document.querySelector(".listaus");
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
    let champData = require("./champ.json");
    let masteryData;
    let rankData;
    let alreadyFavorite = false;
    let httpStatus;
    if (localStorage.getItem("FavoritesSummoners") == null) localStorage.setItem("FavoritesSummoners", JSON.stringify([]));
    searchInput.oninput = function() {
        if (searchInput.value.length > 0) searchIcon.classList.add("search_icon--active");
        else searchIcon.classList.remove("search_icon--active");
    };
    getStars();
    getFavorites();
    clickOnFavorite();
    async function getData(url) {
        const response = await fetch(url);
        // console.log(response);
        httpStatus = response.ok;
        const data = await response.json();
        // console.log(data);
        getSumm(data);
        masteryData = getMasteryData(`https://champmastery.xleay.workers.dev/api/?region=${selectedServer}&endpoint=/lol/champion-mastery/v4/champion-masteries/by-summoner/${data.id}`);
        setTimeout(()=>{
            rankData = getRankData(`https://champmastery.xleay.workers.dev/api/?region=${selectedServer}&endpoint=/lol/league/v4/entries/by-summoner/${data.id}`);
        }, 500);
        setTimeout(()=>{
            getStars();
        }, 100);
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
    search.addEventListener("submit", ()=>{
        selectedServer = allServers[sb.selectedIndex];
        nickname = searchInput.value;
        alreadyFavorite = JSON.parse(localStorage.getItem("FavoritesSummoners")).find((summoner)=>summoner.toLowerCase() === nickname.toLowerCase()) !== undefined;
        searchInput.value = "";
        searchIcon.classList.remove("search_icon--active");
        clearChampionCard();
        getData(`https://champmastery.xleay.workers.dev/api/?region=${selectedServer}&endpoint=/lol/summoner/v4/summoners/by-name/{summonerName}&summonerName=${nickname}`);
    });
    function getSumm(data) {
        mastery.classList.remove("mastery--active");
        if (!httpStatus) {
            content.innerHTML = `
                <div class="no_data">
                    <div class="no_data_img">
                        <img src="https://i.imgur.com/kb7jOh8.png" alt="League of Legends Leona - Data not found" loading="lazy">
                    </div>
                    <p class="no_data_p">This summoner is lost in the Rift</p>
                    <button class="no_data_back">
                        <span class="material-symbols-rounded back_arrow">arrow_back</span>
                        Go back to lane
                    </button>
                </div>
            `;
            let noDataBack = document.querySelector(".no_data_back");
            console.log(noDataBack);
            noDataBack.addEventListener("click", ()=>{
                window.location.href = "/";
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
                                <img class="js-summoner_icon" src="https://ddragon.leagueoflegends.com/cdn/12.10.1/img/profileicon/${data.profileIconId}.png" alt="Summoner icon">
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
        mastery.classList.add("mastery--active");
        fetch("summoner.html").then((response)=>response.text()).then((text)=>content.innerHTML += text);
    }
    function addFavoriteSummoner(data) {
        let summonerInfo = [
            allServersAlpha[sb.selectedIndex],
            data.profileIconId,
            data.summonerLevel
        ];
        localStorage.setItem(data.name, JSON.stringify(summonerInfo));
        let storedSummonerInfo = JSON.parse(localStorage.getItem(data.name));
    }
    let champId = 1;
    for(let cle in champData)if (champData.hasOwnProperty(cle)) {
        // console.log(`${cle} : ${champData[cle].key}`);
        let li = document.createElement("li");
        li.classList.add("listaus__item");
        li.classList.add("listaus__item--" + champId);
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
    // Get input element
    let filterInput = document.getElementById("filterInput");
    // Add event listener
    filterInput.addEventListener("keyup", filterNames);
    listaus.addEventListener("mouseover", createChampionCard);
    function filterNames() {
        // Get value of input
        let filterValue = document.getElementById("filterInput").value.toUpperCase();
        // Get names ul
        let ul = document.getElementById("names");
        // Get lis from ul
        let li = ul.querySelectorAll("li.listaus__item");
        // Loop through collection-item list
        let counter = 0;
        for(let i = 0; i < li.length; i++)if (filterValue.length > 0) {
            listaus.style.display = "flex";
            let a = li[i].getElementsByTagName("p")[0];
            // If matched
            if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                li[i].style.display = "block";
                counter++;
            } else li[i].style.display = "none";
            if (counter === 0) listaus.style.display = "none";
        // console.clear();
        // console.log(counter);
        } else listaus.style.display = "none";
    }
    let champAlreadyClicked = [];
    function createChampionCard() {
        // console.log(champAlreadyClicked);
        let ul = document.getElementById("names");
        let li = ul.querySelectorAll("li.listaus__item");
        li.forEach((item)=>{
            item.addEventListener("click", function() {
                let name = this.getElementsByTagName("p")[0].innerHTML;
                console.log(name);
                if (champAlreadyClicked.includes(name)) ;
                else {
                    let championId = champData[name].key;
                    // console.log(championId);
                    let championMastery;
                    let rankDivision;
                    let rankTier;
                    let champ;
                    masteryData.then((value)=>{
                        for(champ in value)if (value.hasOwnProperty(champ)) {
                            if (value[champ].championId == championId) {
                                console.log(value[champ].championId, value[champ].championPoints);
                                championMastery = value[champ].championPoints;
                                return championMastery;
                            } else {
                                console.log("You don't have mastery points for this champion");
                                championMastery = 0;
                            }
                        }
                    });
                    rankData.then((value)=>{
                        for(rank in value)if (value.hasOwnProperty(rank)) {
                            rankDivision = value[rank].rank;
                            rankTier = value[rank].tier;
                            console.log(rankTier, rankDivision);
                        }
                    });
                    let champInfoCard = document.createElement("div");
                    champInfoCard.classList.add("champ_info__card__item");
                    champAlreadyClicked.push(name);
                    let Wukong = name === "Wukong";
                    setTimeout(()=>{
                        rankTier === undefined ? rankTier = "UNRANKED" : rankTier;
                        champInfoCard.innerHTML = `
                            <div class="champ_info__card__item__part1">
                                <div class="champ_info__card_img">
                                    <img src="https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${Wukong ? "MonkeyKing" : name}.png" alt="${name}">
                                </div>
                                <div class="champ_info__card_name">
                                    <p>${name}</p>
                                </div>
                            </div>

                            <div class="separator"></div>

                            <div class="champ_info__card__item__part2">
                                <div class="champ_info__card_rank">
                                    <img src="${allRanks[rankTier]}" alt="Highest League of Legends Ranked Icon">
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
                listaus.style.display = "none";
            });
        });
    }
    function clearChampionCard() {
        champInfo.innerHTML = "";
        filterInput.value = "";
        listaus.style.display = "none";
        champAlreadyClicked = [];
    }
});

},{"./champ.json":"5PXR7"}],"5PXR7":[function(require,module,exports) {
module.exports = JSON.parse('{"Aatrox":{"key":"266","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Aatrox.png"},"Ahri":{"key":"103","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ahri.png"},"Akali":{"key":"84","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Akali.png"},"Akshan":{"key":"166","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Akshan.png"},"Alistar":{"key":"12","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Alistar.png"},"Amumu":{"key":"32","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Amumu.png"},"Anivia":{"key":"34","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Anivia.png"},"Annie":{"key":"1","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Annie.png"},"Aphelios":{"key":"523","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Aphelios.png"},"Ashe":{"key":"22","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ashe.png"},"AurelionSol":{"key":"136","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/AurelionSol.png"},"Azir":{"key":"268","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Azir.png"},"Bard":{"key":"432","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Bard.png"},"Blitzcrank":{"key":"53","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Blitzcrank.png"},"Brand":{"key":"63","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Brand.png"},"Braum":{"key":"201","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Braum.png"},"Caitlyn":{"key":"51","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Caitlyn.png"},"Camille":{"key":"164","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Camille.png"},"Cassiopeia":{"key":"69","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Cassiopeia.png"},"Chogath":{"key":"31","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Chogath.png"},"Corki":{"key":"42","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Corki.png"},"Darius":{"key":"122","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Darius.png"},"Diana":{"key":"131","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Diana.png"},"DrMundo":{"key":"36","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/DrMundo.png"},"Draven":{"key":"119","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Draven.png"},"Ekko":{"key":"245","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ekko.png"},"Elise":{"key":"60","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Elise.png"},"Evelynn":{"key":"28","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Evelynn.png"},"Ezreal":{"key":"81","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ezreal.png"},"Fiddlesticks":{"key":"9","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Fiddlesticks.png"},"Fiora":{"key":"114","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Fiora.png"},"Fizz":{"key":"105","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Fizz.png"},"Galio":{"key":"3","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Galio.png"},"Gangplank":{"key":"41","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Gangplank.png"},"Garen":{"key":"86","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Garen.png"},"Gnar":{"key":"150","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Gnar.png"},"Gragas":{"key":"79","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Gragas.png"},"Graves":{"key":"104","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Graves.png"},"Gwen":{"key":"887","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Gwen.png"},"Hecarim":{"key":"120","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Hecarim.png"},"Heimerdinger":{"key":"74","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Heimerdinger.png"},"Illaoi":{"key":"420","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Illaoi.png"},"Irelia":{"key":"39","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Irelia.png"},"Ivern":{"key":"427","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ivern.png"},"Janna":{"key":"40","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Janna.png"},"JarvanIV":{"key":"59","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/JarvanIV.png"},"Jax":{"key":"24","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Jax.png"},"Jayce":{"key":"126","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Jayce.png"},"Jhin":{"key":"202","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Jhin.png"},"Jinx":{"key":"222","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Jinx.png"},"Kaisa":{"key":"145","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kaisa.png"},"Kalista":{"key":"429","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kalista.png"},"Karma":{"key":"43","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Karma.png"},"Karthus":{"key":"30","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Karthus.png"},"Kassadin":{"key":"38","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kassadin.png"},"Katarina":{"key":"55","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Katarina.png"},"Kayle":{"key":"10","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kayle.png"},"Kayn":{"key":"141","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kayn.png"},"Kennen":{"key":"85","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kennen.png"},"Khazix":{"key":"121","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Khazix.png"},"Kindred":{"key":"203","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kindred.png"},"Kled":{"key":"240","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Kled.png"},"KogMaw":{"key":"96","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/KogMaw.png"},"Leblanc":{"key":"7","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Leblanc.png"},"LeeSin":{"key":"64","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/LeeSin.png"},"Leona":{"key":"89","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Leona.png"},"Lillia":{"key":"876","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Lillia.png"},"Lissandra":{"key":"127","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Lissandra.png"},"Lucian":{"key":"236","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Lucian.png"},"Lulu":{"key":"117","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Lulu.png"},"Lux":{"key":"99","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Lux.png"},"Malphite":{"key":"54","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Malphite.png"},"Malzahar":{"key":"90","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Malzahar.png"},"Maokai":{"key":"57","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Maokai.png"},"MasterYi":{"key":"11","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/MasterYi.png"},"MissFortune":{"key":"21","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/MissFortune.png"},"Mordekaiser":{"key":"82","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Mordekaiser.png"},"Morgana":{"key":"25","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Morgana.png"},"Nami":{"key":"267","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nami.png"},"Nasus":{"key":"75","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nasus.png"},"Nautilus":{"key":"111","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nautilus.png"},"Neeko":{"key":"518","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Neeko.png"},"Nidalee":{"key":"76","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nidalee.png"},"Nocturne":{"key":"56","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nocturne.png"},"Nunu":{"key":"20","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Nunu.png"},"Olaf":{"key":"2","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Olaf.png"},"Orianna":{"key":"61","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Orianna.png"},"Ornn":{"key":"516","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ornn.png"},"Pantheon":{"key":"80","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Pantheon.png"},"Poppy":{"key":"78","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Poppy.png"},"Pyke":{"key":"555","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Pyke.png"},"Qiyana":{"key":"246","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Qiyana.png"},"Quinn":{"key":"133","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Quinn.png"},"Rakan":{"key":"497","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Rakan.png"},"Rammus":{"key":"33","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Rammus.png"},"RekSai":{"key":"421","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/RekSai.png"},"Renata":{"key":"888","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Renata.png"},"Renekton":{"key":"58","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Renekton.png"},"Rengar":{"key":"107","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Rengar.png"},"Riven":{"key":"92","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Riven.png"},"Rumble":{"key":"68","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Rumble.png"},"Ryze":{"key":"13","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ryze.png"},"Sejuani":{"key":"113","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sejuani.png"},"Senna":{"key":"235","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Senna.png"},"Seraphine":{"key":"147","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Seraphine.png"},"Sett":{"key":"875","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sett.png"},"Shaco":{"key":"35","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Shaco.png"},"Shen":{"key":"98","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Shen.png"},"Shyvana":{"key":"102","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Shyvana.png"},"Singed":{"key":"27","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Singed.png"},"Sion":{"key":"14","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sion.png"},"Sivir":{"key":"15","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sivir.png"},"Skarner":{"key":"72","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Skarner.png"},"Sona":{"key":"37","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sona.png"},"Soraka":{"key":"16","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Soraka.png"},"Swain":{"key":"50","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Swain.png"},"Sylas":{"key":"517","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Sylas.png"},"Syndra":{"key":"134","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Syndra.png"},"TahmKench":{"key":"223","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/TahmKench.png"},"Taliyah":{"key":"163","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Taliyah.png"},"Talon":{"key":"91","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Talon.png"},"Taric":{"key":"44","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Taric.png"},"Teemo":{"key":"17","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Teemo.png"},"Thresh":{"key":"412","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Thresh.png"},"Tristana":{"key":"18","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Tristana.png"},"Trundle":{"key":"48","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Trundle.png"},"Tryndamere":{"key":"23","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Tryndamere.png"},"TwistedFate":{"key":"4","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/TwistedFate.png"},"Twitch":{"key":"29","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Twitch.png"},"Udyr":{"key":"77","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Udyr.png"},"Urgot":{"key":"6","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Urgot.png"},"Varus":{"key":"110","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Varus.png"},"Vayne":{"key":"67","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Vayne.png"},"Veigar":{"key":"45","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Veigar.png"},"Velkoz":{"key":"161","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Velkoz.png"},"Vex":{"key":"711","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Vex.png"},"Viego":{"key":"234","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Viego.png"},"Viktor":{"key":"112","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Viktor.png"},"Vi":{"key":"254","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Vi.png"},"Vladimir":{"key":"8","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Vladimir.png"},"Volibear":{"key":"106","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Volibear.png"},"Warwick":{"key":"19","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Warwick.png"},"Wukong":{"key":"62","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/MonkeyKing.png"},"Xayah":{"key":"498","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Xayah.png"},"Xerath":{"key":"101","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Xerath.png"},"XinZhao":{"key":"5","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/XinZhao.png"},"Yasuo":{"key":"157","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Yasuo.png"},"Yorick":{"key":"83","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Yorick.png"},"Yuumi":{"key":"350","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Yuumi.png"},"Zac":{"key":"154","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zac.png"},"Zed":{"key":"238","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zed.png"},"Zeri":{"key":"221","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zeri.png"},"Ziggs":{"key":"115","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Ziggs.png"},"Zilean":{"key":"26","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zilean.png"},"Zoe":{"key":"142","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zoe.png"},"Zyra":{"key":"143","img":"https://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/Zyra.png"}}');

},{}]},["8Of3k","igcvL"], "igcvL", "parcelRequire94c2")

//# sourceMappingURL=index.5baa4167.js.map
