
Comments.ui.config({
   template: 'bootstrap' // or ionic, semantic-ui
});

	/////
	// template helpers
	/////

	Template.registerHelper('formatDate', function(date) {
    return moment(date).format('MM-DD-YYYY');
	});

	// helper function that returns all available websites
	Template.website_list.helpers({
		websites:function(){
			var regexp = new RegExp(Session.get('search/keyword'), 'i');
			return Websites.find({$or:[{title: regexp}, {description: regexp}, {url: regexp}]}, {sort:{votesUp:-1, votesDown:1}});
		},
		voteUp:function(id){
			website = Websites.findOne({_id: id});
		}
	});


	/////
	// template events
	/////

	Template.website_item.events({
		"click .js-upvote":function(event){
			var count = this.votesUp + 1;

			Websites.update(this._id, {
				$set: {votesUp: count}
			});

			return false;// prevent the button from reloading the page
		},
		"click .js-downvote":function(event){
			var count = this.votesDown + 1;

			Websites.update(this._id, {
				$set: {votesDown: count}
			});

			return false;// prevent the button from reloading the page
		},
		"formatDate":function(date){
			return moment(date).format('MM-DD-YYYY');
		}
	})

	Template.website_form.events({
		"click .js-toggle-website-form":function(event){
			$("#website_form").toggle('slow');
		},
		"submit .js-save-website-form":function(event){

			if(Meteor.user()) {
				//	user is logged in
				Websites.insert({
		      title:				event.target.title.value,
		      url:					event.target.title.value,
		      description:	event.target.description.value,
		      createdOn:		new Date(),
		      votesUp: 			0,
		      votesDown: 		0
		    });

				$("#website_form").toggle('show');

			} else {
				$('#notLoggedModal').modal('show');
			}
			return false;// stop the form submit from reloading the page

		}
	});

	Template.navbar.events({
		"click .js-search":function(event){

			Session.set('search/keyword', $("#custom-search-input input").val());

		}
	});

	Template.website.events({
		"click .js-upvote":function(event){
			var count = this.votesUp + 1;

			Websites.update(this._id, {
				$set: {votesUp: count}
			});

			return false;// prevent the button from reloading the page
		},
		"click .js-downvote":function(event){
			var count = this.votesDown + 1;

			Websites.update(this._id, {
				$set: {votesDown: count}
			});

			return false;// prevent the button from reloading the page
		}
	});
