Websites = new Mongo.Collection("websites");

Comments.config({
  allowAnonymous: () => false,
  anonymousSalt: 'myRandomSalt'
});
