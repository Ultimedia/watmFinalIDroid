appData.views.ProfileView = Backbone.View.extend({

    initialize: function () {

    },
    
    render: function() { 
    	this.$el.html(this.template());
        appData.settings.currentPageHTML = this.$el;
        return this; 
    },

    events: {
        "click #profileTabs .cl-btn": "profileTabHandler"
    },

    profileTabHandler: function(evt){ 
    	var page = this.$el;
        var currentActivityPage = '#atleetContent';


        $('#profileTabs .cl-btn', appData.settings.currentPageHTML).removeClass('active');
        $(evt.target, appData.settings.currentPageHTML).addClass('active');

        currentActivityPage = selectedPage;

        var selectedPage = $(evt.target, appData.settings.currentPageHTML).attr('data');
        var view;

        switch(selectedPage){
          case "#atleetContent":
            view = new appData.views.ProfileAvatarView();
          break;

          case "#uitdagingenContent":
            view = new appData.views.ProfileChallengeView();
          break;

          case "#vriendenContent":
            view = new appData.views.ProfileFriendsView();
          break;
        }

        $('#profileContent', appData.settings.currentPageHTML).empty().append(view.render().$el);
        this.currentActivityPage = selectedPage;
    } 
});