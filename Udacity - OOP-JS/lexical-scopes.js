var hero = "hello";
function abc() {

}
//console.log(abc());


var newSaga = function() {
    var foil=console.log('inside newSaga');
    var saga=function(){
        var deed=console.log('inside saga');
        console.log(hero+deed+foil);
    };
    saga();
    saga();
};
newSaga();
newSaga();
