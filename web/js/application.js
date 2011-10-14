(function( $ ){

	//Title
	var title = "Team Ganz 2012";

	//Side bar items
	var sideBarMenu = [ 'Project', 'Team','Documents' ];

	//Main text display
	var mainPageText = "<p>Welcome to the website for SDP's Team Ganz 2012.</p>";
	
	//Parses doc root
	function docRoot(){
		var location = document.location.href.split("/");
		var root = new Array();
		for(var i= 0; i < (location.length - 1); i++){
			root[i] = location[i];
		}
		var returnRoot = root.join("/");		
		return returnRoot;
	}

	//Function that generates the sidebar items
	function generateSideBarHtml(){
		var list = jQuery('<ul/>');
		$.each(sideBarMenu, function(index, value) { 
			var item = jQuery('<li/>');
			var button = jQuery('<a/>');
			button.attr("href", value.replace(/ /g, '').toLowerCase()+".html");
			button.text(value);
			button.appendTo(item); 
			item.appendTo(list); 
		});
		return list;
	}
	
	$.fn.generateText = function(options){
		this.load('fragment.html #'+options);
	};

	//Header plugin
	$.fn.header = function () {
		this.text("");
		var banner = jQuery("<img />");
		var lineBreak = jQuery("<br />");
		var titleText = jQuery("<a />");
		titleText.attr("href", docRoot() + "/index.html");
		titleText.text(title);	
		titleText.button();
		titleText.appendTo(this);
		lineBreak.appendTo(this);
		banner.appendTo(this);
	};

	//SideBar plugin
  $.fn.sideBar = function() {
  	//Creating the sidebar!
		generateSideBarHtml().appendTo(this);
  };
	
	//Footer plugin
	$.fn.footer = function(){
		this.html("<hr /><p>"+title+" by Daniel Bercht</p>");
	};

	$.fn.makeSite = function(){
				jQuery("#header").header();
				jQuery("#sidebar").sideBar();
				jQuery("#footer").footer();
				jQuery("#sidebar li a").button();
	};

})( jQuery );

