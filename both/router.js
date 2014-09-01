// both/router.js

Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('home', {path: '/'});
  
    this.route('chat', { 
        path: '/chat/:channel_id',
            waitOn: function() {
                currentChan = this.params.channel_id;
                // meteor remove autopublish
                return Meteor.subscribe('messages', currentChan);
            }
    });
});