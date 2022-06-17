// ==UserScript==
// @name        Redirect2OldReddit
// @author      ConnerWill
// @version     1.0.0
// @description Always Redirect Reddit to Old Reddit
// @license     GPL-3.0-or-later; http://www.gnu.org/licenses/gpl-3.0.txt
// @namespace   https://github.com/ConnerWill/Redirect2OldReddit
// @homepage    https://github.com/ConnerWill/Redirect2OldReddit
// @homepageURL https://github.com/ConnerWill/Redirect2OldReddit
// @downloadURL https://raw.githubusercontent.com/ConnerWill/Redirect2OldReddit/main/Redirect2OldReddit.js
// @updateURL   https://raw.githubusercontent.com/ConnerWill/Redirect2OldReddit/main/Redirect2OldReddit.js
// @supportURL  https://github.com/ConnerWill/Redirect2OldReddit/issues
// @icon        https://www.redditstatic.com/logo.svg
// @grant       none
// @run-at      document-start
// @include     *://www.reddit.com/*
// ==/UserScript==
window.location.replace("https://old.reddit.com" + window.location.pathname + window.location.search);