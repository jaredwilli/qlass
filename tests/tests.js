function isNodeList(nodes) {
	var result = Object.prototype.toString.call(nodes);
		// Check if 'nodes' is a NodeList
	if (typeof nodes === 'object'
		&&
		/^\[object (HTMLCollection|NodeList|Object)\]$/.test(result)
		&&
		nodes.hasOwnProperty('length')
		&&
		(nodes.length === 0 || (typeof nodes[0] === "object" && nodes[0].nodeType > 0))
	) {
		return true;
	}
	return false;
}

test( 'Testing Nodes Exist', function() {
	var div = document.getElementsByTagName('div');
	var a = document.getElementsByTagName('a');
	var nav = document.getElementsByTagName('nav');
	var span1 = document.getElementById('id-1' );
	var span3 = document.getElementById('id-3');
	var item = document.getElementById('thisItem');
	var span2 = document.querySelectorAll('.span-class');
	var link = document.querySelectorAll('.link');
	var section = document.querySelectorAll('section');

	// Testing existing selectors
	ok( div !== null || div.length > 0, 'div is not null or has length > 0' );
	ok( a !== null || a.length > 0, 'a is not null or has length > 0' );
	ok( span1 !== null || span1.length > 0, 'span1 is not null or has length > 0' );
	ok( span3 !== null || span3.length > 0, 'span3 is not null or has length > 0' );
	ok( span2 !== null || span2.length > 0, 'span2 is not null or has length > 0' );
	ok( link !== null || link.length > 0, 'link is not null or has length > 0' );

	// Testing non-existing selectors
	ok( section === null || section.length === 0, 'section is null or length of 0' );
	ok( item === null || item.length === 0, 'item is null or has length of 0' );
	ok( nav === null || nav.length === 0, 'nav is null or length of 0' );
});

test( 'Testing the Nodelists', function() {
	var div = document.getElementsByTagName('div');
	var a = document.getElementsByTagName('a');
	var span2 = document.querySelectorAll('.span-class');
	var link = document.querySelectorAll('.link');

	ok( isNodeList(div) === true, 'div is a NodeList' );
	ok( isNodeList(a) === true, 'a is a NodeList' );
	ok( isNodeList(span2) === true, 'span-class is a NodeList' );
	ok( isNodeList(link) === true, 'link is a NodeList' );

	ok( q(div).selector[0].nodeType === 1, 'div.selector[0] is element' );
	ok( q(a).selector[0].nodeType === 1, 'a.selector[0] is element' );
	ok( q(span2).selector[0].nodeType === 1, 'span2.selector[0] is element' );
	ok( q(link).selector[0].nodeType === 1, 'link.selector[0] is element' );
});

test( 'Testing Elements', function() {
	var span1 = document.getElementById('id-1' );
	var span3 = document.getElementById('id-3');

	ok( span1.nodeType === 1, 'span1 is an Element' );
	ok( span3.nodeType === 1, 'span3 is an Element' );
});

test( 'Testing .hasClass()', function() {
	var div = document.getElementsByTagName('div');
	var a = document.getElementsByTagName('a');
	var span1 = document.getElementById('id-1' );
	var span3 = document.getElementById('id-3');
	var span2 = document.querySelectorAll('.span-class');
	var link = document.querySelectorAll('.link');

	// Testing hasClass()
	ok( q(div).hasClass('testClass') === false, 'div.hasClass(testClass) is false' );
	ok( q(div).hasClass('div-class') === true, 'div.hasClass(div-class) is true' );
	ok( q(a).hasClass('testClass') === false, 'a.hasClass(testClass) is false' );
	ok( q(a).hasClass('link') === true, 'a.hasClass(link) is true' );
	ok( q(span1).hasClass('testClass') === false, 'span1.hasClass(testClass) is false' );
	ok( q(span3).hasClass('testClass') === false, 'span3.hasClass(testClass) is false' );
	ok( q(span2).hasClass('testClass') === false, 'span2.hasClass(testClass) is false' );
	ok( q(span2).hasClass('span-class') === true, 'span2.hasClass(span-class) is true' );
	ok( q(link).hasClass('testClass') === false, 'link.hasClass(testClass) is false' );
});

test( 'Testing .addClass()', function() {
	var div = document.getElementsByTagName('div');
	var a = document.getElementsByTagName('a');
	var span1 = document.getElementById('id-1' );
	var span3 = document.getElementById('id-3');
	var span2 = document.querySelectorAll('.span-class');
	var link = document.querySelectorAll('.link');

	// Testing addClass()
	ok( q(div).addClass('testClass').hasClass('testClass') === true, 'addClass() worked' );
	ok( q(a).addClass('testClass').hasClass('testClass') === true, 'addClass() worked' );
	ok( q(span1).addClass('testClass').hasClass('testClass') === true, 'addClass() worked' );
	ok( q(span3).addClass('testClass').hasClass('testClass') === true, 'addClass() worked' );
	ok( q(span2).addClass('testClass').hasClass('testClass') === true, 'addClass() worked' );
	ok( q(link).addClass('testClass').hasClass('testClass') === true, 'addClass() worked' );
});

test( 'Testing .removeClass()', function() {
	var div = document.getElementsByTagName('div');
	var a = document.getElementsByTagName('a');
	var span1 = document.getElementById('id-1' );
	var span3 = document.getElementById('id-3');
	var span2 = document.querySelectorAll('.span-class');
	var link = document.querySelectorAll('.link');

	q(div).addClass('testClass');
	q(a).addClass('testClass');
	q(span1).addClass('testClass');
	q(span3).addClass('testClass');
	q(span2).addClass('testClass');
	q(link).addClass('testClass');

	// Testing removeClass()
	ok( q(div).removeClass('testClass').hasClass('testClass') === false, 'removeClass() worked' );
	ok( q(a).removeClass('testClass').hasClass('testClass') === false, 'addClass() worked' );
	ok( q(span1).removeClass('testClass').hasClass('testClass') === false, 'addClass() worked' );
	ok( q(span3).removeClass('testClass').hasClass('testClass') === false, 'addClass() worked' );
	ok( q(span2).removeClass('testClass').hasClass('testClass') === false, 'addClass() worked' );
	ok( q(link).removeClass('testClass').hasClass('testClass') === false, 'addClass() worked' );
});