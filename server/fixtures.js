if (Posts.find().count() === 0) {

  Posts.insert({
    title: "Forbes",
    url: "http://www.forbes.com",
    name: "lex"
  }); 

  Posts.insert({
    title: "CNN", 
    url: "http://www.cnn.com",
    name: "Tom"
  });


  Posts.insert({
    title: "Time", 
    url: "http://www.time.com",
    name: "Sean"
  });
}