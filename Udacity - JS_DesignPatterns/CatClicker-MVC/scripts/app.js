/* ============================ Model ============================ */

var model = {
    currentCat : null,
    adminMode : false,
    
    storageCats : [ {
	name : 'kitty',
	cnt : 0
    }, {
	name : 'serious',
	cnt : 0
    }, {
	name : 'lucy',
	cnt : 0
    }, {
	name : 'middle',
	cnt : 0
    }, {
	name : 'thul',
	cnt : 0
    }, {
	name : 'fluffy',
	cnt : 0
    } ],
    
    init : function() {
	if (!localStorage.cats) {
	    localStorage.cats = JSON.stringify(this.storageCats);
	} else {
	    this.storageCats = JSON.parse(localStorage.cats);
	}
    },
    
    getStorageCats : function() {
	return this.storageCats;
    },
    
    updateStorageCats : function() {
	if (this.currentCat) {
	    this.storageCats[this.findCatIndex(this.currentCat.name)] = this.currentCat;
	}
	localStorage.cats = JSON.stringify(this.storageCats);
    },
    
    findCatIndex : function(cat) {
	for ( var index in this.storageCats) {
	    if (this.storageCats[index].name === cat)
		return index;
	}
    }
};

/* ============================ Controller ============================ */

var controller = {
    init : function() {
	model.init();
	model.currentCat = model.storageCats[0];
	catListView.init();
	catView.init();
	adminView.init();
    },
    
    getCurrentCat : function() {
	return model.currentCat;
    },
    
    getCats : function() {
	return model.getStorageCats();
    },
    
    setCurrentCat : function(cat) {
	model.currentCat = cat;
    },
    
    incrementCounter : function() {
	model.currentCat.cnt++;
	model.updateStorageCats();
	catView.render();
	adminView.render();
    },
    
    toggleAdminView : function() {
	model.adminMode ? model.adminMode = false : model.adminMode = true;
	adminView.toggleAdminForm(model.adminMode);
    },
    
    saveAdminView : function(cat, newcnt) {
	cat.cnt = newcnt;
	this.setCurrentCat(cat);
	model.updateStorageCats();
	catView.render();
	adminView.render();
    }
};

/* ============================ View ============================ */

var catView = {
    init : function() {
	this.catElem = document.getElementById('cat');
	this.catNameElem = document.getElementById('cat-name');
	this.catImageElem = document.getElementById('cat-image');
	this.catCountElem = document.getElementById('cat-count');
	
	this.catImageElem.addEventListener('click', function(e) {
	    controller.incrementCounter();
	});
	
	this.render();
    },
    
    render : function() {
	var currentCat = controller.getCurrentCat();
	this.catCountElem.textContent = currentCat.cnt;
	this.catNameElem.textContent = currentCat.name;
	this.catImageElem.src = 'images\\' + currentCat.name + '.jpg';
    }
};

var catListView = {
    init : function() {
	this.catListElem = document.getElementById('cat-list');
	this.render();
    },
    
    render : function() {
	var cats = controller.getCats();
	var catItemTemplStart = '<div class="text-center">';
	var catItemTemplEnd = '</div>';
	for ( var index in cats) {
	    var row = this.catListElem.insertRow();
	    row.id = cats[index].name;
	    var cell = row.insertCell();
	    cell.innerHTML = catItemTemplStart + cats[index].name
		    + catItemTemplEnd;
	    /*
	     * cell = row.insertCell(); cell.innerHTML = cats[ index ].cnt; cell.id = cats[ index
	     * ].name + '-cnt';
	     */
	    row.addEventListener('click', (function(cat) {
		return function() {
		    controller.setCurrentCat(cat);
		    catView.render();
		    adminView.render();
		};
	    })(cats[index]));
	}
    }
};

var adminView = {
    init : function() {
	this.adminForm = document.getElementById('admin-form');
	this.adminButton = document.getElementById('admin-button');
	this.saveButton = document.getElementById('save-button');
	this.nameField = document.getElementById('name-field');
	this.clickCntField = document.getElementById('click-cnt-field');
	this.toggleAdminForm(false);
	this.adminButton.addEventListener('click', (function() {
	    return function() {
		controller.toggleAdminView();
	    };
	})());
	this.saveButton.addEventListener('click', (function() {
	    return function() {
		controller.saveAdminView(controller.getCurrentCat(),
			adminView.clickCntField.value);
	    }
	})(this.currCat));
	this.nameField.addEventListener('change', (function() {
	    return function(cat) {
		cat.name = nameField.value;
	    }
	})(model.currentCat));
	this.render();
    },
    
    render : function() {
	var currCat = controller.getCurrentCat();
	this.nameField.value = currCat.name;
	this.clickCntField.value = currCat.cnt;
    },
    
    toggleAdminForm : function(flag) {
	flag ? this.renderAdminForm() : this.closeAdminForm();
    },
    
    renderAdminForm : function() {
	this.adminForm.style.display = 'block';
    },
    
    closeAdminForm : function() {
	this.adminForm.style.display = 'none';
    }
}

controller.init();
