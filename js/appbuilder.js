//variables 
var systems;
var limitations;

//helper functions
function makeLinkID(title) {
		var linkID = title.split(" ")[0].toLowerCase();
		return linkID;
	};

//add info-data
$("<p>"+info.purpose+"</p>").insertAfter("#home .content #purpose");
$("<p>"+info.policies+"</p>").insertAfter("#home .content #policies");

//add global footer navbar
$(function () {
	$(".footer").append(JQMnavbar);
});

//add QB data
function displayQuestions(category) {
	var categoryName = category[0][0].category;
	$("#"+categoryName+"Home .content").append("<p>"+info[categoryName]+"</p>");
	for (subject in category) {
		var subjectTitle = category[subject][0].title;
		var subjectID = makeLinkID(subjectTitle);

		$(JQMpage.replace("%data%",subjectID)).insertAfter("section:last");
		$("#"+subjectID+":last").append(JQMpageHeader.replace("%data%",subjectTitle));
		$("#"+subjectID+":last").append(JQMpageContent);

		for (question in category[subject]) {
			var questionID = "q-"+subject+"-"+question;
			var questionItem = category[subject][question];

			$("#"+subjectID+" .content:last").append(JQMcollapsible.replace("%data%",questionID));
			$("#"+questionID+":last").append(JQMcollapsibleH1.replace("%data%",questionItem.question));
			
			if (questionItem.a321.length === 0) {
				$("#"+questionID+":last").append(JQMcollapsibleP.replace("%data%",questionItem.a320));
			} else {
				$("#"+questionID+":last").append(JQMgridHeader);
				$(".ui-grid-b:last").append(JQMgridA320.replace("%data%",questionItem.a320));
				$(".ui-grid-b:last").append(JQMgridA321.replace("%data%",questionItem.a321));
			}
			for (image in questionItem.illustrations) {
				$("#"+questionID+":last").append(JQMimg.replace("%data%",questionItem.illustrations[image]));
			}
		}
		$("#"+subjectID+":last").append(JQMpageFooter);
	}
}

//testing dialogue pages
$("#q-1-2").append('<a href="#pagetwo">Go to Dialog Page</a>');
$('<div data-role="page" data-dialog="true" id="pagetwo"><div data-role="header"><h1>A Dialog Box!</h1></div><div data-role="main" class="ui-content"><p>The dialog box is different from a normal page</p><a href="#pageone">Go to Page One</a></div><div data-role="footer"><h1>Footer Text In Dialog</h1></div></div>').insertAfter("section:last");

//display panel
function displayPanel(category) {
	var categoryName = category[0][0].category;
	$("#"+categoryName).prepend(JQMpanel);
	for (subject in category) {
		var subjectTitle = category[subject][0].title;
		$("#"+categoryName+" #panel ul").append(JQMlistItem.replace("%data%",subjectTitle));
		$("#"+categoryName+" #panel ul a:last").attr("href","#"+makeLinkID(subjectTitle));
	}
}


//initializations
$(function () {
	$("[data-role=panel]").panel().enhanceWithin();
 	$("[data-role=navbar]").navbar().enhanceWithin();
});

//animate collapsibles
$(function () {
	$("[data-role='collapsible']").collapsible({

	    collapse: function( event, ui ) {
	        $(this).children().next().slideUp(100);
	    },
	    expand: function( event, ui ) {
	        $(this).children().next().hide();
	        $(this).children().next().slideDown(100);
	    }

	});
});
