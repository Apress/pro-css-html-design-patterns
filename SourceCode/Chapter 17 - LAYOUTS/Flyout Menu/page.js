/* 
Page-specific JavaScript -- CSS and HTML Design Patterns  
    Dependent on chdp_common.js, chdp_popup.js, cssQuery.js, yahoo.js, event.js
    Version: 0.11

    Copyright (c) 2006, Michael Bowers. All rights reserved.
    Code licensed under the BSD License: http://cssdesignpatterns.com/license.txt

    yahoo.js, event.js, version: 0.11.4, 
    Copyright (c) 2006, Yahoo! Inc. All rights reserved.
    Code licensed under the BSD License: http://developer.yahoo.net/yui/license.txt

	cssQuery, version 2.0.2 (2005-08-19)
	Copyright: 2004-2005, Dean Edwards (http://dean.edwards.name/)
	License: http://creativecommons.org/licenses/LGPL/2.1/
*/

function initPage() {

  assignEvent( 'click',     '*.menu', 
                applyToDescendants, '*.dropdown', toggleClass, "hidden" );

  assignEvent( 'mouseover', '*.menu', 
                applyToDescendants, '*.dropdown', removeClass, "hidden" );

  assignEvent( 'mouseout',  '*.menu', 
                applyToDescendants, '*.dropdown', addClass,    "hidden" );



  assignEvent( 'mouseover', '*.menu li, *.menu h3', 
                applyToThis, null, addClass,    "hover" );

  assignEvent( 'mouseout',  '*.menu li, *.menu h3', 
                applyToThis, null, removeClass, "hover" );



  assignEvent( 'mouseover', '*.menu li.flyout-trigger', 
                applyToDescendants, '> *.submenu', removeClass, "hidden" );

  assignEvent( 'mouseout',  '*.menu li.flyout-trigger', 
                applyToDescendants, '> *.submenu', addClass,    "hidden" );

}

addEvent(window,'unload',purgeAllEvents);
addEvent(window,'load',initPage);

