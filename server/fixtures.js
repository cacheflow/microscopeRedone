if (Posts.find().count() === 0) {
  var now = new Date().getTime();
  var tomId = Meteor.users.insert({
    profile: {name: "Tom Coleman"}
  });

  var tom = Meteor.users.findOne(tomId);

  var sachaId = Meteor.users.insert({
    profile: {name: "Sacha Greif"}
  });

  var sacha = Meteor.users.findOne(sachaId);

  var telescopeId = Posts.insert({
    title: "Introducing Telescope",
    userId: sacha._id,
    author: sacha.profile.name,
    url: "http://sachagrief.com/introducing-telescope/",
    submitted: new Date(now - 7 * 3600 * 1000),
    commentsCount: 2, 
    upvoters: [], 
    votes: 0
  });

  Comments.insert({
    postId: telescopeId, 
    userId: tom._id, 
    author: tom.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: "You sure can Tom!"
  });

  Comments.insert({
    postId: telescopeId, 
    userId: sacha._id, 
    author: sacha.profile.name,
    submitted: new Date(now - 5 * 3600 * 1000),
    body: "Interesting project Sacha, can I get involved?"
  });



  Posts.insert({
    title: "Meteor", 
    userId: tom._id, 
    author: tom.profile.name, 
    url: "https://meteor.com",
    submitted: new Date(now - 10 * 3600 * 1000),
    commentsCount: 0,
    upvoters: [],
    votes: 0
  }); 

  Posts.insert({
    title: "The Meteor Book", 
    userId: tom._id, 
    author: tom.profile.name, 
    url: "http://themeteorbook.com",
    submitted: new Date(now - 12 * 3600 * 1000), 
    commentsCount: 0,
    upvoters: [], 
    votes: 0
  });

  for(var i = 0; i < 40; ++i){
    Posts.insert({
      title: "Sample", 
      userId: sacha._id, 
      author: sacha.profile.name, 
      url: "http://www.time.com" + i, 
      submitted: new Date(now - i * 3600 * 1000), 
      commentsCount: 0,
      upvotes: [],
      votes: 0
    });
  }
}