Template.layout.helpers({
  pageTitle:function(){
    return Session.get("pageTitle");
  }
});

Template.layout.onRendered(function(){
  this.find("#main").uihooks = {
    insertElement: function(node, next){
      $(node).hide().insertBefore(next).fadeIn();
    }, 

    removeElement:function(node){
      $(node).fadeOut(function(){
        $(this).remove();
      });
    }
  }
});