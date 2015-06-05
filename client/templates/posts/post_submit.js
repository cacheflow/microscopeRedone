Template.postSubmit.events({
  'submit form':function(form_data){
    form_data.preventDefault();

    var post = {
      url: $(form_data.target).find('[name=url]').val(),
     title: $(form_data.target).find('[name=url]').val()
    };

    Meteor.call('postInsert', post, function(error, post_submission){
      if(error) {
        return alert(error.reason);
      }

      if(post_submission.exists){
        alert("This link has already been posted");
      }

        Router.go('postPage', {_id: post_submission._id});
    });
  }
});