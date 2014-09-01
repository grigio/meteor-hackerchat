// meteor remove autopublish
Meteor.publish("messages", function (id) {
  check(id, String);
  // return Messages.find({channel_id: id});
  return Messages.find({channel_id: id},{limit:8, sort:{ts:-1} });
});

// meteor remove insecure
Messages.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function (userId, doc, fields, modifier) {},
  remove: function (userId, doc) {}
});