// client/chat.js

Template.chat.helpers({
    messages: function () {
        return Messages.find({},{sort:{ts:1}});
    },
    formatTime: function (date) {
        return date.toLocaleTimeString();
    }
});

Template.chatEntry.events({
    'keypress .jsText': function (event, template) {
        if (event.which === 13 /* enter */ && $('.jsUser').val()) {
            var mid = Messages.insert({ username:$('.jsUser').val(),
                              text:$('.jsText').val(),
                              channel_id:currentChan,
                              ts: new Date() }, afterConfirm);
            $('#'+mid).addClass('disabled');
            // scroll to bottom & reset
            window.scrollTo(0,document.body.scrollHeight);
            $('.jsText').val('');
        }
    }
});

// remove the gray
var afterConfirm = function (err, id) {
    $('#'+id).removeClass('disabled');
}