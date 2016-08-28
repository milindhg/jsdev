var storageCats = [ {
	name: 'kitty',
	cnt: 0
}, {
	name: 'serious',
	cnt: 0
}, {
	name: 'lucy',
	cnt: 0
}, {
	name: 'middle',
	cnt: 0
}, {
	name: 'thul',
	cnt: 0
}, {
	name: 'fluffy',
	cnt: 0
} ];
var imagesPath = 'images\\';
var imagePlaceholder;
var catItemTemplStart = '<div class="text-center">';
var catItemTemplEnd = '</div>';

function initStorage() {
	if ( !localStorage.cats ) {
		localStorage.cats = JSON.stringify( cats );
	}
}

function getStorageCats() {
	if ( localStorage.cats ) {
		return JSON.parse( localStorage.cats );
	} else {
		updateStorage();
	}
}

function updateStorageCats( cat, count ) {
	var index = findCatIndex( cat );
	if ( index >= 0 ) storageCats[ index ].cnt = count;
	updateStorage();
}

function updateStorage() {
	localStorage.cats = JSON.stringify( storageCats );
}

function findCatIndex( cat ) {
	for ( var index in storageCats ) {
		if ( storageCats[ index ].name === cat )
			return index;
	}
}

document.addEventListener( 'DOMContentLoaded', function () {
	initStorage();
	storageCats = getStorageCats();
	//console.log( storageCats );
	var catList = document.getElementById( 'catList' );
	for ( var index in storageCats ) {
		var row = catList.insertRow();
		row.id = storageCats[ index ].name;
		var cell = row.insertCell();
		cell.innerHTML = catItemTemplStart + storageCats[ index ].name + catItemTemplEnd;
		cell = row.insertCell();
		cell.innerHTML = storageCats[ index ].cnt;
		cell.id = storageCats[ index ].name + '-cnt';
		row.onclick = addImageEventListener;
	}
}, false );

function addImageEventListener() {
	displayCat( this );
	//console.log( this );
}

function displayCat( cat ) {
	if ( !imagePlaceholder ) {
		imagePlaceholder = document.getElementById( 'image-placeholder' );
	}
	var imgelem = document.createElement( "img" );
	imgelem.id = cat.id + '-image';
	imgelem.className = 'img-responsive img-rounded center-block';
	imgelem.src = 'images\\' + cat.id + '.jpg';
	imgelem.onclick = increment.bind( cat.id );
	imagePlaceholder.innerHTML = '';
	imagePlaceholder.appendChild( imgelem );
}

var increment = function ( catname ) {
	//console.log( this );
	var elem = document.getElementById( this + '-cnt' );
	// console.log( 'clicked ' +
	// 	this + ' ' + elem.innerHTML + ' times' );
	var count = parseInt( elem.innerText );
	count += 1;
	updateStorageCats( elem.id.split('-')[0], count );
	elem.innerText = count;
};
