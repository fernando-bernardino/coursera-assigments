Router.route('/',function(){
  this.render('home');
});

Router.route('/website/:_id',function(){
  this.render('website', {
      data: function () {
        return Websites.findOne({_id: this.params._id});
      }
    });
});
