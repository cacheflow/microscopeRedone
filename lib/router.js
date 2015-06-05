Router.configure({
  layoutTemplate: "layout",
  loadingTemplate: "loading",
  waitOn:function(){
    return Meteor.subscribe('posts');
  }

});

Router.route("/", {name: "postsList"});

Router.route('/posts/:_id', {
  name: "postPage", 
  data:function(){
    return Post.findOne(this.params._id);
  }
});

var requireLogin = function(){
  if(!Meteor.user()){
   
    if (Meteor.loggingIn()){
      this.render(this.loadingTemplate);
    }
      else {
        this.render('accessDenied');
      }
  }
    
      else {
        this.next();
      }
}

Router.route("/submit", {
  name: "postSubmit"
});

Router.onBeforeAction('dataNotFound', {only: 'postPage'});

Router.onBeforeAction(requireLogin, {only: "postSubmit"});