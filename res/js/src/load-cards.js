function readJSON(file) {
    var request = new XMLHttpRequest();
    request.open('GET', file, false);
    request.send(null);
    if (request.status == 200)
        return request.responseText;
};
var cards = JSON.parse(readJSON('/res/js/details.json'));

$.Mustache.load('/res/html/src/card.htm').done(function () {
    $('#insert-details').mustache('print-card', cards, {
        method: 'html'
    });
});