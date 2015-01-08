

//helper functions
function makeLinkID(title) {
	var linkID = title.split(" ")[0].toLowerCase();
	return linkID;
};

function questionCounter (category,subject) {
	var questionCount = category[subject].length;
	return questionCount;
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
		category[subject][0].questionCount = category[subject].length;
		var questionCount = category[subject][0].questionCount;
		var subjectTitle = category[subject][0].title;
		var subjectID = makeLinkID(subjectTitle);

		$(JQMpage.replace("%data%",subjectID)).insertAfter("section:last");
		$("#"+subjectID+":last").append(JQMpageHeader.replace("%data%",subjectTitle+" ("+questionCount+")"));
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
};

//display panel
function displayPanel(category) {

	var categoryName = category[0][0].category;
	$("#"+categoryName).prepend(JQMpanel);
	for (subject in category) {
		var questionCount = category[subject].length;
		var subjectTitle = category[subject][0].title;
		$("#"+categoryName+" #panel ul").append(JQMlistItem.replace("%data%",subjectTitle+" ("+questionCount+")"));
		$("#"+categoryName+" #panel ul a:last").attr("href","#"+makeLinkID(subjectTitle));
	}
};

//display quize home
function displayQuizHome(category) {
    var categoryName = category[0][0].category;
    $("form").append(JQMquizSubject.replace(/%data%/g, categoryName));
    $("#category").append(JQMinputRadio.replace(/%data%/g, categoryName));
    for (subject in category) {
    	var questionCount = category[subject].length;
        var subjectTitle = category[subject][0].title;
        $("#"+categoryName+"-subjects").append(JQMinputCheck.replace(/%data%/g, subjectTitle+" ("+questionCount+")"));
    }

    $("#question-count").attr("max","50");
};


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
	$(".category-subjects").hide();
        $("[type=radio]").click(function(){
        	var checkedCategory = $(this).val();
                $("#"+checkedCategory+"-subjects").show();
                $("#"+checkedCategory+"-subjects").siblings(".category-subjects").hide();
        });
});
