Template.postEdit.events({
  'submit form':function(postEditData){
    postEditData.preventDefault();

    var currentPostId = this._id; 

    var postProperties = {
      url: $(postEditData).find('[name=url]').val(), 
      title: $(postEditData).find('[name=title]').val()
    }

    Posts.update(currentPostId, {$set: postProperties}, 
      function(error) {
        if(error) {
          alert(error.reason);
        }
        else {
          Router.go('postPage', {_id: currentPostId});
        }
      });
  },

  'click .delete':function(e) {
    e.preventDefault(); 
    if (confirm("Delete this post")) {
      var currentPostId = this._id; 
      Posts.remove(currentPostId); 
      Router.go('postsList');
    }
  }

});