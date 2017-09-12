var getTime = function (stringTime) {
    var hoursMins = stringTime.split(' ')[0].split(':');
    hours = parseInt(hoursMins[0]);
    minutes = parseInt(hoursMins[1]);
    return {
        "hours" : hours,
        "mins" : minutes
    };

}

var inputarr = [ [ 2131, "2016-01-01", "1:00 PM", "FA1" ],
        [ 2131, "2016-01-01", "2:00 PM", "FA1" ],
        [ 2131, "2016-01-01", "3:00 PM", "FA1" ],
        [ 2132, "2016-01-02", "4:00 PM", "FA1" ],
        [ 2132, "2016-01-02", "5:00 PM", "FA1" ],
        [ 2132, "2016-01-02", "6:00 PM", "FA1" ],
        [ 2133, "2016-01-03", "7:00 PM", "FA1" ],
        [ 2133, "2016-01-03", "8:00 PM", "FA1" ],
        [ 2133, "2016-01-03", "9:00 PM", "FA1" ] ];

inputarr = [ [ 2131, "2016-01-01", "1:00 PM", "FA1" ],
        [ 2131, "2016-01-01", "2:00 PM", "FA1" ],
        [ 2131, "2016-01-02", "5:00 PM", "FA1" ],
        [ 2131, "2016-01-02", "3:00 PM", "FA1" ],
        [ 2131, "2016-01-02", "2:00 PM", "FA1" ] ];

map = {};
for ( var element in inputarr) {
    if (!map[inputarr[element][0] + ' ' + inputarr[element][1]]) {
        map[inputarr[element][0] + ' ' + inputarr[element][1]] = [];
    }
    map[inputarr[element][0] + ' ' + inputarr[element][1]]
            .push(inputarr[element]);
}
output = [];

console.log(map);

for ( var key in map) {
    map[key].sort(function (a, b) {
        aTime = getTime(a[2]);
        bTime = getTime(b[2]);
        if (aTime.hours == bTime.hours) {
            return aTime.minutes - bTime.minutes;
        }
        return aTime.hours - bTime.hours;
    });
}

console.log(map["2131 2016-01-02"]);

for ( var key in map) {
    output.push(map[key].shift());
    output.push(map[key].pop());
}

// console.log(output);
