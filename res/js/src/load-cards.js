//var cards = {
//    apoint: 'example.com'
//    , atarget: '_blank'
//    , cardtitle: 'Test card title'
//    , cardcontent: 'Test card content here!'
//};
//$.Mustache.load('/res/html/src/card.htm').done(function () {
//    $('#insert-details').mustache('print-card', cards, {
//        method: 'html'
//    });
//});
var cards = {
        "cards": [
            {
                "apoint": "//example.com",
                "atarget": "_blank",
                "cardtitle": "Test Card Title",
                "cardcontent": "Test card content would kindly go here please :D"
            },
            {
                "apoint": "//example.com",
                "atarget": "_blank",
                "cardtitle": "Test Card Title",
                "cardcontent": "Test card content would kindly go here please :D"
            }
          ]
    }

$.Mustache.load('/res/html/src/card.htm').done(function () {
    $('#insert-details').mustache('print-card', cards, {
        method: 'html'
    });
});