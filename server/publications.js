Meteor.publish("posts", function(){
  // function(options){
  //   check(options, {
  //     sort: Object,
  //     limit: Number
  //   });
  return Posts.find({});
});

Meteor.publish("comments", function(postId){
  check(postId, String); 
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function(){
  return Notifications.find({userId: this.userId, read: false});
});

Meteor.publish('newPosts', function(limit){
  return Posts.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('bestPosts', function(limit){
  return Posts.find({}, {sort: {votes: -1, submitted: -1}, limit: limit});
});

Meteor.publish('singlePost', function(id){
  check(id, String)
  return Posts.find(id);
});

Meteor.publish('topPosts', function(limit){
  var sub = this, commentHandles = [], postHandle = null;

  function publishPostComments(postId){
    var commentsCursor = Comments.find({postId: postId}, {limit: 2});
    commentHandles[postId] = Mongo.Collection._publishCursor(commentsCursor, sub, 'comments');
  }

  postHandle = Posts.find({}, {limit: limit}).observeChanges({
    added:function(id, post){
      publishPostComments(id); 
      sub.added('posts', id, post);
    }, 
    changed: function(id, fields){
      sub.changed('posts', id, fields);
    },
    removed: function(id){
      commentHandles[id] && commentHandles[id].stop();
      sub.removed('posts', id);
    }
  });

  sub.ready();

  sub.onStop(function(){
    postHandle.stop(); 
  });
});