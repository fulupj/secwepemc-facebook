// Secwepemc Facebook!
// version 0.1 BETA!
// 2010-08-25
// Copyright (c) 2010, Neskie Manuel
// Released under the GPL license
// http://www.gnu.org/copyleft/gpl.html
//
// --------------------------------------------------------------------
//
// This is a Greasemonkey user script.  To install it, you need
// Greasemonkey 0.3 or later: http://greasemonkey.mozdev.org/
// Then restart Firefox and revisit this script.
// Under Tools, there will be a new menu item to "Install User Script".
// Accept the default configuration and install.
//
// To uninstall, go to Tools/Manage User Scripts,
// select "Secwepemctsin Facebook", and click Uninstall.
//
// --------------------------------------------------------------------
//
// ==UserScript==
// @name          Secwepemctsin Facebook
// @namespace     http://neskiemanuel.ath.cx/projects/greasemonkey/
// @description   script to change the Facebook
// @include       http://www.facebook.com/*
// ==/UserScript==

var es = new Array();
es["Home"] = "Tsitcw";
es["News Feed"] = "Lexeyem";
es["Friends"] = "Kweselkten";
es["Like"] = "Xwexwisten";
es[" likes this."] = " r xwexwistes.";
es["Today"] = "Pyin Te Sitqt";
es["Say hello."] = "Say weytk.";
es["Say hi."] = "Say weytk.";
es["Tomorrow"] = "Pexwéyt";
es["What are you planning?"] = "Me7 Stemi7 Ke7 Tsuwet?";

function loadSecwepemc() {
	var fbelem = document.getElementsByTagName('a');

	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.textContent in es) {
		thisElem.textContent = es[thisElem.textContent];
	    }
	}

	var fbelem = document.getElementsByTagName('span');

	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.textContent in es) {
		thisElem.textContent = es[thisElem.textContent];
		thisElem.addEventListener( "load", loadSecwepemc, false );  // capture phase

	    }
	}

	var fbelem = document.getElementsByClassName('ego_social_context');

	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.textContent in es) {
		thisElem.textContent = es[thisElem.textContent];
	    }
	}

	var fbelem = document.getElementsByTagName('input');
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.getAttribute('placeholder') in es) {
		thisElem.setAttribute('placeholder',es[thisElem.getAttribute('placeholder')]);
	    }
	    if (thisElem.getAttribute('value') in es) {
		thisElem.setAttribute('value',es[thisElem.getAttribute('value')]);
	    }
	}

	var fbelem = document.getElementsByTagName('h3');
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.textContent in es) {
		thisElem.textContent = es[thisElem.textContent];
		thisElem.addEventListener( "click", loadSecwepemc(), false );  // capture phase
	    }
	}

	var fbelem = document.getElementsByTagName('h2');
	for (var i = 0; i < fbelem.length; i++) {
	    var thisElem = fbelem[i];
	    if (thisElem.textContent in es) {
		icon = thisElem.childNodes[0]
		thisElem.textContent = es[thisElem.textContent];
		thisElem.appendChild(icon)
	    }
	}
}

loadSecwepemc();

function changedNode(e) {
	var fbelem = e.target.getElementsByTagName('a');

	for (var i = 0; i < fbelem.length; i++) {
		    var thisElem = fbelem[i];
		    if (thisElem.textContent in es) {
		    		thisElem.textContent = es[thisElem.textContent];
		    	    }
		}

	var fbelem = e.target.getElementsByTagName('span');

	for (var i = 0; i < fbelem.length; i++) {
		    var thisElem = fbelem[i];
		    if (thisElem.textContent in es) {
		    		thisElem.textContent = es[thisElem.textContent];
		    		thisElem.addEventListener( "load", loadSecwepemc, false );  // capture phase
		    
		    	    }
		}

	var fbelem = e.target.getElementsByClassName('ego_social_context');

	for (var i = 0; i < fbelem.length; i++) {
		    var thisElem = fbelem[i];
		    if (thisElem.textContent in es) {
		    		thisElem.textContent = es[thisElem.textContent];
		    	    }
		}

	var fbelem = e.target.getElementsByTagName('input');
	for (var i = 0; i < fbelem.length; i++) {
		    var thisElem = fbelem[i];
		    if (thisElem.getAttribute('placeholder') in es) {
		    		thisElem.setAttribute('placeholder',es[thisElem.getAttribute('placeholder')]);
		    	    }
		    if (thisElem.getAttribute('value') in es) {
		    		thisElem.setAttribute('value',es[thisElem.getAttribute('value')]);
		    	    }
		}

	var fbelem = e.target.getElementsByTagName('h3');
	for (var i = 0; i < fbelem.length; i++) {
		    var thisElem = fbelem[i];
		    if (thisElem.textContent in es) {
		    		thisElem.textContent = es[thisElem.textContent];
		    		thisElem.addEventListener( "click", loadSecwepemc(), false );  // capture phase
		    	    }
		}

	var fbelem = e.target.getElementsByTagName('h2');
	for (var i = 0; i < fbelem.length; i++) {
		    var thisElem = fbelem[i];
		    if (thisElem.textContent in es) {
		    		icon = thisElem.childNodes[0]
		    		thisElem.textContent = es[thisElem.textContent];
		    		thisElem.appendChild(icon)
		    	    }
		}
}

document.addEventListener('DOMNodeInserted', changedNode, false);
