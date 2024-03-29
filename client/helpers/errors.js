Errors = new Mongo.Collection(null);

throwError = function(message){
  Errors.insert({message: message});
};

Template.errors.helpers({
  errors:function(){
    return Errors.find();
  }
})

Template.error.onRendered(function(){
  var error = this.data; 
  Meteor.setTimeout(function(){
    Errors.remove(error.id);
  }, 3000);
});