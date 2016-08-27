var cats = [ {
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


document.addEventListener( 'DOMContentLoaded', function () {
	var catList = document.getElementById( 'catList' );
	for ( var index in cats ) {
		var row = catList.insertRow();
		row.id = cats[ index ].name;
		var cell = row.insertCell();
		cell.innerHTML = catItemTemplStart + cats[ index ].name + catItemTemplEnd;
		cell = row.insertCell();
		cell.innerHTML = cats[ index ].cnt;
		cell.id = cats[ index ].name + '-cnt';
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
	imgelem.className = 'img-responsive img-rounded';
	imgelem.src = 'images\\' + cat.id + '.jpg';
	imgelem.onclick = increment.bind( cat.id );
	imagePlaceholder.innerHTML = '';
	imagePlaceholder.appendChild( imgelem );
}

var increment = function ( catname ) {
	console.log(this);
	var elem = document.getElementById( this + '-cnt' );
	// console.log( 'clicked ' +
	// 	this + ' ' + elem.innerHTML + ' times' );
	var count=parseInt(elem.innerText);
	count+=1;
	elem.innerText=count;
};
