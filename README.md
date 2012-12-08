# Qlass.js
=====

A library for performing common classy functions on elements and collections.

## Usage

`<div id="main" class="content js"></div>`

``` javascript
q(document.getElementsByTagName('div')).addClass('new-class');

var main = document.getElementById('main');

if (q(main).hasClass('js')) {
	q(main)
		.addClass('css')
		.removeClass('content');
}
```

Use `q()` as the wrapper and pass it any `Element` or `HTMLCollection` of elements that you want to add, remove or check if they have a class.

``` javascript
q(elem).addClass('string')
q(nodes).hasClass('string')
q(el).removeClass('string')
```

If there is no element or nodelist selected it will return `this` back after checking for a null element or nodelist length of 0.