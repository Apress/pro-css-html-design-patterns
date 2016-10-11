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

 assignEvent( 'submit','#form1',   applyToThis, null, confirmIt,  'Are you sure?');
 assignEvent( 'click', '#message', applyToThis, null, showIt,     'Hi There' );
 assignEvent( 'click', '#button',  applyToThis, null, showIt,     'Hi There' );
 assignEvent( 'click', '#link',    applyToThis, null, confirmIt,  'Jump here?' );
 assignEvent( 'click', '#change',  applyToThis, null, changeIt,   'Enter content:');
 assignEvent( 'click', '#submit4', applyToThis, null, submitForm, 'form1' );
 assignEvent( 'click', '#reset2',  applyToThis, null, resetForm,  'form1' );

 assignEvent( 'mouseover', '*.button, #submit2', applyToThis, null, 
              addClass,    "hover" );
 assignEvent( 'mouseout',  '*.button, #submit2', applyToThis, null, 
              removeClass, "hover" );
}
function confirmIt(eElement, e, extraInfo) { return confirm(extraInfo); }
function showIt   (eElement, e, extraInfo) { alert(extraInfo); }

function changeIt (eElement, e, extraInfo) { 
 try{  var result = prompt(extraInfo,  eElement.innerHTML); 
 if (result) eElement.innerHTML = result; } catch (ex) { return false; } 
}

function submitForm  (eElement, e, extraInfo) { 
  document.getElementById(extraInfo).submit(); 
}

function resetForm  (eElement, e, extraInfo) { 
  document.getElementById(extraInfo).reset(); 
}

addEvent(window,'unload',purgeAllEvents);
addEvent(window,'load',initPage);






/* Advanced functions */
function submitForm2 (eElement, e, extraInfo) {
 try { 
  if ( confirm("Are you sure you want to submit this form?") ) {
       document.getElementById(extraInfo).submit(); 
  }
 } 
 catch (ex) { 
  if (ex.name=="TypeError") { 
   alert('ERROR: You have assigned name="submit" and/or id="submit" to the submit'
          + ' button. You must change its name and/or id. ');
  }  
 }  
}
function resetForm2 (eElement, e, extraInfo) {
 try { 
  if ( confirm("Are you sure you want to reset this form?") ) {
       document.getElementById(extraInfo).reset(); 
  }
 } 
 catch (ex) { 
  if (ex.name=="TypeError") { 
   alert('ERROR: You have assigned name="reset" and/or id="reset" to the reset'
          + ' button. You must change its name and/or id. ');
  }  
 }  
}