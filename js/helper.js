var JQMnavbar = '<div data-role="navbar">' +
				    '<ul>' + 
				      '<li><a href="index.html" data-icon="home" rel="external">Home</a></li>' +
				      '<li><a href="limitations.html" data-icon="alert" rel="external">Limitation</a></li>' +
				      '<li><a href="memory.html" data-icon="star" rel="external">Memory</a></li>' +
				      '<li><a href="systems.html" data-icon="gear" rel="external">Systems</a></li>' +
				      '<li><a href="quiz.html" data-icon="bullets" rel="external">quiz</a></li>' +
				    '</ul>' +
		  		'</div>';


var JQMlistItem = '<li><a href="#">%data%</a></li>';

var JQMpanel = '<div data-role="panel" data-position-fixed="true" data-display="overlay" id="panel" data-theme="b">' +
    		   		'<ul data-role="listview">' +
    				'</ul>' +
				'</div>';

var JQMpage = '<section data-role="page" id="%data%"></section>';

var JQMpageHeader = '<div data-role="header" data-position="fixed">' +
    					'<a href="#panel" data-icon="bars" data-shadow="false" data-iconpos="notext">menu</a>' +
    					'<h1>%data%</h1>' +
  					'</div>';

var JQMpageContent = '<div data-role="content" ><div data-role="collapsibleset" class="content"></div></div>'
var JQMpageFooter = '<div data-role="footer" data-position="fixed" class="footer"></div>';

var JQMcollapsible = '<div data-role="collapsible" id="%data%"></div>';
var JQMcollapsibleH1 = '<h1>%data%</h1>';
var JQMcollapsibleP = '<p>%data%</p>';

var JQMgridHeader = '<div class="ui-grid-b">' +
	               		'<div class="ui-block-a ui-block-head">A320</div>' +
	              		'<div class="ui-block-b ui-block-head">A321</div>' +
            		'</div>';

var JQMgridA320 = '<div class="ui-block-a">%data%</div>';
var JQMgridA321 = '<div class="ui-block-b">%data%</div>';

var JQMimg = '<img src="%data%" class="illustrations">'

var JQMinputRadio = '<label for="radio-%data%">%data%</label>' +
                    '<input type="radio" name="radio-category" id="radio-%data%" value="%data%">'

var JQMinputCheck = '<label for="check-%data%">%data%</label>' +
                    '<input type="checkbox" name="check-%data%" id="check-%data%" value="%data%">'

