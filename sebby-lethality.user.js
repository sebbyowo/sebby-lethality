
// ==UserScript==
// @name         Lethality - Sebby Button
// @namespace    https://lethality.io/
// @version      8.0
// @description  Adds a Sebby profile button to Lethality navigation
// @match        https://lethality.io/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const targetUrl = 'https://lethality.io/members/sebby.4728/';
    const buttonId = 'sebby-button';

    function addSebbyButton() {
        const nav = document.querySelector(
            'ul.p-nav-list.js-offCanvasNavSource'
        );

        if (!nav || document.getElementById(buttonId)) return;

        const isSebbyProfile =
            window.location.pathname.startsWith('/members/sebby.4728');

        // Create the same structure as the Home navigation button
        const li = document.createElement('li');

        li.id = buttonId;

        const navEl = document.createElement('div');
        navEl.className = 'p-navEl' +
            (isSebbyProfile ? ' is-selected' : '');

        const link = document.createElement('a');
        link.href = targetUrl;
        link.className = 'p-navEl-link';
        link.textContent = 'sebby';
        link.setAttribute('data-nav-id', 'sebby');

        navEl.appendChild(link);
        li.appendChild(navEl);

        // Add to navigation
        nav.appendChild(li);
    }

    // Initial execution
    addSebbyButton();

    // Handle dynamically loaded navigation
    const observer = new MutationObserver(() => {
        addSebbyButton();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
