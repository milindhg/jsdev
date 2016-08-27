function increment( tdelem ) {
	var id = tdelem.id;
	console.log( 'clicked ' +
		id );
	searchElemStr = id + '-counter';
	targetElem = document.getElementById( searchElemStr );
	targetElemVal = !parseInt( targetElem.innerText ) ? 0 : parseInt( targetElem.innerText );
	targetElemVal += 1;
	targetElem.innerHTML = targetElemVal;
}
