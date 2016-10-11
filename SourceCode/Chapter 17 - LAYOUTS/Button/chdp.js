/*
Common Library -- CSS and HTML Design Patterns  
     Version: 0.24  - 1/2/2007 11:17PM
     Copyright (c) 2006, Michael Bowers. All rights reserved.
     Code licensed under the BSD License: http://cssdesignpatterns.com/license.txt
     
   Dependent on yahoo.js, event.js, cssQuery.js
     yahoo.js, event.js, version: 0.11.4, 
     Copyright (c) 2006, Yahoo! Inc. All rights reserved.
     Code licensed under the BSD License: http://developer.yahoo.net/yui/license.txt

	 cssQuery, version 2.0.2 (2005-08-19)
	 Copyright: 2004-2005, Dean Edwards (http://dean.edwards.name/)
	 License: http://creativecommons.org/licenses/LGPL/2.1/
	
    ******************************************************************************
    ** FUNCTION DESCRIPTIONS                                                    **
    ******************************************************************************
  --EVENT ASSIGNMENT
	addEvent                    adds an event handler to one of an element's events.
	purgeAllEvents              removes all events that have been added through code.
	assignEvent                 assigns events and event handlers to elements.
	eventScope                  creates an object that is passed to an event handler when an event is triggered.

  --EVENT HANDLERS
	applyToDescendants                    applies a function to selected elements that are descendants of the element that fired the event.
	applyToChildrenOfAncestorWithClass    applies a function to the children of the first ancestor of the element that fired the event. The ancestor's class must match the specified class. The function is not applied to the child containing the trigger element.
	applyToThis                           applies a function to the element that generated the event.
    doDefaultAction                       executes or cancels the default action of the event.
    
  --EVENT HELPERS    
    addClass                    adds a value to an element's class.
    removeClass                 removes a value from an element's class. 
    replaceClass                replaces an old value in an element's class with a new value.
    swapClasses                 swaps a new value in for an old value in an element's class.
    toggleClass                 toggles the presence of a value in an element's class.

  --ELEMENTS
	getElementsByClass          returns a set of elements that match a given class.
	getElement                  returns an element given an ID or an element.
	toElementArray              returns an array of elements given any combination of IDs, elements, and arrays containing IDs and elements.
	toElementArrayFromArray     returns an array of elements given an array of IDs or elements.
	removeDuplicatesFromArray   returns an array with duplicate entries removed.
	toElementArrayFromString    returns an array of elements given a string contain an ID or a list of comma- or space-separated IDs.
	toElementArrayFromIdArray   returns an array of elements given an array of strings containing IDs.
	
  --STRINGS
	getStringBefore             returns a new string extracted from the original string before the position of the search string (search string not included).
	getStringAfter              returns a new string extracted from the original string after  the position of the search string (search string not included).
	insertString                returns a new string derived from the original string plus a string inserted at a specific character position.
	insertStringBefore          returns a new string derived from the original string plus a string inserted before the position of the search string.
	insertStringAfter           returns a new string derived from the original string plus a string inserted after  the position of the search string.
	replaceString               returns a new string derived from the original string with all occurrances of the search string replaced by the replacement string.
	deleteString                returns a new string derived from the original string with all occurrances of the search string removed.
	trimString                  returns a new string derived from the original string with all the whitespace before and after the string removed.
	inClassList                 returns true when a class (string) is found in a space-delimited list of classes (string).
    inList                      returns true when an item (string) is found in a delimited list of items (string).

  --LOGIC
    isFalse                     returns true when the value passed to it is boolean and is false -- use to avoid false negatives.
    isTrue                      returns true when the value passed to it is boolean and is true  -- use to avoid false positives.
    
  --DEBUGGING    
	debugWrite                  writes one or more strings, variables, or objects to the end of the current browser window.
	debugToString               converts any type of variable into a readable string suitable for displaying during debugging.

    ******************************************************************************
    ** FUNCTION SIGNATURES                                                      **
    ******************************************************************************
    
	addEvent            (eElement, sEventName, fEventHandler)       
	purgeAllEvents      ()                               
	assignEvent         (sEventSelector, sEventName, fEventHandler, fHelper, sHandlerSelector, extraInfo)      
	eventScope          (fRun, sCssSelector, extraInfo)      

	applyToDescendants                  (e, oEventScope)
    applyToChildrenOfAncestorWithClass  (e, oEventScope)
    applyToThis                         (e, oEventScope)       
    doDefaultAction                     (e, doDefault)

    addClass            (eElement, e, extraInfo )
    removeClass         (eElement, e, extraInfo ) 
    replaceClass        (eElement, e, extraInfo )
    swapClasses         (eElement, e, extraInfo )
    toggleClass         (eElement, e, extraInfo )

	getElementsByClass        (sHtmlClassName, eStartingNode, sHtmlTag)          
	getElement                (eElement_or_sID)
	toElementArray            (...) 
	toElementArrayFromArray   (aAny)
	removeDuplicatesFromArray (aAny, bCompareNumStr, bCaseInsensitive)    
	toElementArrayFromString  (sIDs, bAllowDuplicates)  
	toElementArrayFromIdArray (aIDs, bAllowDuplicates)  
	
	getStringBefore     (sMain, sSearch)              
	getStringAfter      (sMain, sSearch)              
	insertString        (sMain, nPosition, sInsert)   
	insertStringBefore  (sMain, sSearch,   sInsert)   
	insertStringAfter   (sMain, sSearch,   sInsert)   
	replaceString       (sMain, sSearch,   sReplace)  
	deleteString        (sMain, sSearch)              
	trimString          (sMain)                       
    inClassList         (sClassList, sClass )
	inList              (sList, sItem, sDelimiter, bCaseSensitive, bNoTrim)

    isFalse                             (val)
    isTrue                              (val)
	
	debugWrite          (...)
	debugToString       (anyVar, maxContentLength)

   
   You can beep in IE by inserting the following HTML and using the following JavaScript:
   <bgsound src="#" id="beep" autostart="true" />
    document.all.beep.src='beep.wav';
   -->
*/


/*******************************************************************************
 *******************************************************************************
 * EVENT ASSIGNMENT                                                            *
 *******************************************************************************
 *******************************************************************************/

/*------------------------------------------------------------------------------
* addEvent()                        assigns one event to one HTML element.
*
* @param  {Object}   eElement       is the HTML element to which the event 
*                                   will be added.
*
* @param  {String}   sEventName     is a string containing the name of the event.
*                                   The event does not contain the on prefix, 
*                                   such as 'click' instead of 'onclick'.
*
* @param  {Function} fEventHandler  is the function that will be called when 
*                                   the event fires. The function can use _ this _ 
*                                   to reference the element that fired the event.
*
* @return {boolean}  true           if the action was successful or defered,
*                    false          if one or more of the elements could not have 
*                                   the event bound to it.
*
* NOTE: use YAHOO.util.Event.addListener directly for more powerful features. 
*/
function addEvent(eElement, sEventName, fEventHandler) {
  return YAHOO.util.Event.addListener(eElement, sEventName, fEventHandler); 
}

/*------------------------------------------------------------------------------
* purgeAllEvents()                  purges all events added to elements.
*                                   This should be called when the page unloads
*                                   to free memory.
*/
function purgeAllEvents() {
  YAHOO.util.Event.purgeElement(window, true);  
}

/*------------------------------------------------------------------------------
* assignEvent()                       assigns one event to each HTML element 
*                                     that matches the css selector in sEventSelector.
*
* @param  {String}   sEventName       is a string containing the name of the event.
*                                     The event does not contain the 'on' prefix, 
*                                     e.g. you use 'click' instead of 'onclick'.
*
* @param  {Object}   sEventSelector   is a CSS selector used to select the HTML 
*                                     elements to which the event will be added.
*
* @param  {Function} fEventHandler    is the function that will be called 
*                                     when the event fires. fEventHandler() can 
*                                     use _ this _ to reference the element that 
*                                     fired the event. You can create your own
*                                     event handler functions, or you can use 
*                                     the generic ones in this library, such as
*                                     applyToDescendants() or applyToThis().
*                                     These generic event handlers use simple 
*                                     helper functions that do the actual work
*                                     of modifying the document in response to 
*                                     an event.
*
* @param  {String}   sHandlerSelector is an optional CSS Selector string that 
*                                     can be used by the fEventHandler to select 
*                                     elements that should be affected by the event. 
*                                     For example, applyToDescendants() uses this
*                                     CSS selector to select descendants of the
*                                     element that triggered the event, and then
*                                     fHelper() to each of the selected elements.
*
* @param  {Function} fHelper          is an optional helper function that 
*                                     fEventHandler() can run against each 
*                                     element that should be affected by the event. 
*
* @param  {String}   extraInfo        is an optional value or object that will be
*                                     passed to the fEventHandler() when the 
*                                     event is fired. Your custom event handler 
*                                     can use this information to control how it 
*                                     processes events.
*
* @return {null}
*/
function assignEvent( sEventName, sEventSelector, fEventHandler, sHandlerSelector, fHelper, extraInfo ) {

  var oEventScope = new eventScope( fHelper, sHandlerSelector, extraInfo );

  //Select elements to which the event handler will be assigned.
  var matches = cssQuery(sEventSelector);
  var len = matches.length;
  if (len > 0)
  {
    for ( var i=0; i < len; i++ ) 
    {        
      YAHOO.util.Event.addListener(matches[i], sEventName, fEventHandler, oEventScope); 
    }
  }
}

/*------------------------------------------------------------------------------
* eventScope()                      This object's properties define the scope 
*                                   of an event. 
*                                   When an event is fired, an event hander  
*                                   function can use these properties to determine 
*                                   how to act.
*
* @param  {Function} fRun           is an optional helper function applied by an 
*                                   event hander function to each element in the 
*                                   scope. Some event hander functions use this 
*                                   function and others do not, e.g.
*                                   applyToDescendants() uses this function.
*
* @param  {String}   sCssSelector   is a string containing a CSS selector. An 
*                                   event hander function typically applies fRun() 
*                                   to elements that match this sCssSelector.
*                                   Further, an event hander function typically matches 
*                                   only descendants of the element that generated 
*                                   the event, e.g. applyToDescendants().
*
* @param  {String}   extraInfo      is anything that you want to pass to the 
*                                   event handler function, and helper functions
*                                   called by the event hander function.
*
* @return {null}  
*/
function eventScope(fRun, sCssSelector, extraInfo ) {
  this.run           = fRun;
  this.cssSelector   = sCssSelector;
  this.extraInfo     = extraInfo;
}


/*******************************************************************************
 *******************************************************************************
 * EVENT HANDLERS                                                              *
 *******************************************************************************
 *******************************************************************************/

/*------------------------------------------------------------------------------
* applyToDescendants()              Applies the function in oEventScope.run to 
*                                   descendants of the element that triggered 
*                                   the event. It filters the descendants to only
*                                   those that match oEventScope.cssSelector.
*                                   It passes the following to oEventScope.run:
*                                   the element that it should process, 
*                                   the event object supplied by the browser, 
*                                   and the extraInfo that you added to oEventScope.
*                                   This function is designed to be called from 
*                                   an event. It is an event handler.
*                                   If one or more of the helper functions returns 
*                                   false, the default action of the event is 
*                                   cancelled.
*
* @param  {Object}   e              is the event object supplied by the browser. 
*        
* @param  {Object}   oEventScope    is the oEventScope object assigned to 
*                                   this event by assignEvents().
*
* @return {null}  
*/
function applyToDescendants(e, oEventScope) {

  //Select elements to which the event handler will be assigned.
  var matches = cssQuery(oEventScope.cssSelector, this);

  //Apply oEventScope.run to each matching element...
  var cancel = false;
  var len = matches.length;
  for ( var i=0; i < len; i++ ) 
  {
    if ( isFalse( oEventScope.run(matches[i], e, oEventScope.extraInfo) ) ) 
    { cancel = true; }
  }
  if (cancel) { doDefaultAction(e, false); }
} 

/*------------------------------------------------------------------------------
* applyToChildrenOfAncestorWithClass() 
*                                   Finds the first element that matches the class 
*                                   in oEventScope.cssSelector that is the ancestor 
*                                   of the element that fired the event.
*                                   It then applies the function in oEventScope.run 
*                                   to each child of the ancestor, but not the 
*                                   ancestor itself. It also does not apply the 
*                                   function to the child containing the element 
*                                   that fired the event.
*                                   For example, you can use this event handler
*                                   to toggle the visibility of the children 
*                                   of an element assigned to a specific class 
*                                   and you can assign the event trigger to any 
*                                   descendant of that element. The element tree
*                                   containing the trigger element is not hidden.
*                                   It passes the following to oEventScope.run:
*                                   the element that it should process, 
*                                   the event object supplied by the browser, 
*                                   and the extraInfo that you added to oEventScope.
*                                   This function is designed to be called from 
*                                   an event. It is an event handler.
*                                   If one or more of the helper functions returns 
*                                   false, the default action of the event is 
*                                   cancelled.
*
* @param  {Object}   e              is the event object supplied by the browser. 
*        
* @param  {Object}   oEventScope    is the oEventScope object assigned to 
*                                   this event by assignEvents().
*
* @return {null}  
*/
function applyToChildrenOfAncestorWithClass(e, oEventScope) {

  //Clean target class by trimming it and removing * and .
  var targetClass = trimString(oEventScope.cssSelector);
  targetClass     = replaceString(targetClass, "*", "");
  targetClass     = replaceString(targetClass, ".", "");

  //Find closest ancestor with a class matching the class specified in oEventScope.cssSelector.
  var b = this;
  var p = this.parentNode;
  var c = p.className;
  if ( typeof c == "undefined") return; //no matches found 
  while(!inClassList(c, targetClass))
  {
    b = p
    p = p.parentNode;
    c = p.className 
    if ( typeof c == "undefined") return; //no matches found
  } 
  
  /*alert("targetClass=" + targetClass + "\n target: <" + p.tagName + " class='" + p.className + "'>" 
                                     + "\n branch: <" + b.tagName + " class='" + b.className + "'>" );   */
  
  var matches = p.childNodes;
  //debugWrite(debugToString(matches.length));
  
  /* Execute the function in oEventScope.run for each element in the ancestor,
     except for the top element of the branch that fired this event.
     For example if we are hiding the children of the ancestor, 
     we don't want to hide the branch that contains the child that triggered the event. 
  */
  var len = matches.length;
  var cancel = false;
  for ( var i=0; i < len; i++ ) 
  {
    if ( matches[i].nodeType == 1 && matches[i] != b )
    {
      if ( isFalse( oEventScope.run(matches[i], e, oEventScope.extraInfo) ) ) 
      { cancel = true; }
    }
  }
  if (cancel) { doDefaultAction(e, false); }
} 

/*------------------------------------------------------------------------------
* applyToThis()                     Applies the function in oEventScope.run 
*                                   to the element that triggered the event. 
*                                   This function is designed to be called from 
*                                   an event. It is an event handler.
*                                   If the function in oEventScope.run returns 
*                                   false, the default action of the event is 
*                                   cancelled.
* @param  {Object}   e              is the event object supplied by the browser.         
* @param  {Object}   oEventScope    is the oEventScope object assigned to 
*                                   this event by assignEvents().
* @return {null}                    
*/
function applyToThis(e, oEventScope) {
  var doDefault = oEventScope.run(this, e, oEventScope.extraInfo);
  doDefaultAction(e, doDefault);
}

/*------------------------------------------------------------------------------
* doDefaultAction()                 Prevents the default action when 
*                                   doDefault is false.
* @param  {Object}   e              is the event object supplied by the browser.         
* @param  {Boolean}  doDefault      cancels the event's default action when false. 
* @return {null}                    
*/
function doDefaultAction(e, doDefault) {
  if ( isFalse(doDefault) ) { YAHOO.util.Event.preventDefault(e);  }
} 


/*******************************************************************************
 *******************************************************************************
 * EVENT HELPERS                                                               *
 *******************************************************************************
 *******************************************************************************/

/*------------------------------------------------------------------------------
* addClass()                        Adds a new value to an element's class. 
*                                   If the value is already present, 
*                                   it is not added again.
*                                   This function does not disturb other class 
*                                   values in the class.
*
* @param  {Object}   eElement       is the HTML element that will be toggled.
*
* @param  {Object}   e              is the event object supplied by the browser. 
*        
* @param  {String}   extraInfo      is the class to add to the element's list of classes. 
*
* @return null
*/
function addClass( eElement, e, extraInfo )  {

  if ( extraInfo ) { if ( typeof extraInfo != "string" ) return; }
  else { return; }
  extraInfo = replaceString(trimString(extraInfo), "*", "");
  extraInfo = replaceString(extraInfo, ".", "");
  
  if ( eElement.className.lastIndexOf(extraInfo) != -1 ) return;

  if ( eElement.className.length > 0 )
  {
    eElement.className = trimString(eElement.className) + " " + extraInfo;
  }
  else
  {
    eElement.className = extraInfo;
  }
  //debugWrite("'" + debugToString(eElement.className) + "'" );
}

/*------------------------------------------------------------------------------
* removeClass()                     Removes a value from an element's class. 
*                                   This function does not disturb other class 
*                                   values in the class.
*
* @param  {Object}   eElement       is the HTML element that will be toggled.
*
* @param  {Object}   e              is the event object supplied by the browser. 
*        
* @param  {String}   extraInfo      is the class to remove from the element's list of classes. 
*
* @return null
*/
function removeClass( eElement, e, extraInfo )  {

  //debugWrite("class='" + debugToString(eElement.className) + "' extraInfo='" + extraInfo + "'" );
  if ( extraInfo ) { if ( typeof extraInfo != "string" ) return; }
  else { return; }
  extraInfo = replaceString(trimString(extraInfo), "*", "");
  extraInfo = replaceString(extraInfo, ".", "");

  if ( eElement.className.lastIndexOf(extraInfo) == -1 ) return;

  eElement.className = deleteString(eElement.className, extraInfo);
}

/*------------------------------------------------------------------------------
* replaceClass()                    Replaces an existing value in an element's class 
*                                   with a new value. If the value to be replaced 
*                                   is not present and the new value is not present,
*                                   then the new value is added to the end.
*                                   The old value and the replaced value 
*                                   are passed in as two strings embedded in an 
*                                   array assigned to extraInfo. 
*                                   This function does not disturb other class 
*                                   values in the class.
*
* @param  {Object}   eElement       is the HTML element that will be toggled.
*
* @param  {Object}   e              is the event object supplied by the browser. 
*        
* @param  {Array}    extraInfo      must be an array of two strings, 
*                                   such as ['old-class', 'new-class'].
*                                   Each array item should be a plain classname.
*                                   The first array item is the class that is to be replaced.
*                                   The second array item is the class that replaces the first.
*
* @return null
*/
function replaceClass( eElement, e, extraInfo )  {

  if ( extraInfo )  
  {
    if ( typeof extraInfo[0] != "string" ) return; 
    if ( typeof extraInfo[1] != "string" ) return; 
  }
  else { return; }

  extraInfo[0] = replaceString(trimString(extraInfo[0]), "*", "");
  extraInfo[0] = replaceString(extraInfo[0], ".", "");

  extraInfo[1] = replaceString(trimString(extraInfo[1]), "*", "");
  extraInfo[1] = replaceString(extraInfo[1], ".", "");
    
  var c = deleteString(eElement.className, extraInfo[0]);
  c = deleteString(c, extraInfo[1]);

  if ( c.length > 0 )
  {
    eElement.className = trimString(c) + " " + extraInfo[1];
  }
  else
  {
    eElement.className = extraInfo[1];
  }
  //debugWrite("'" + debugToString(eElement.className) + "'" );
}

/*------------------------------------------------------------------------------
* swapClasses()                     Toggles an HTML element's class between 
*                                   two values. These values are passed in as 
*                                   two strings embedded in an array assigned to
*                                   extraInfo. If neither of the two values are 
*                                   in the class, the first value in the array 
*                                   is added to the class.
*                                   This function does not disturb other class 
*                                   values in the class.
*
* @param  {Object}   eElement       is the HTML element that will be toggled.
*
* @param  {Object}   e              is the event object supplied by the browser. 
*        
* @param  {Array}    extraInfo      must be an array of two strings, 
*                                   such as ['class1', 'class2'].
*                                   Each array item should be a plain classname.
*
* @return null
*/
function swapClasses( eElement, e, extraInfo )  {

  if ( extraInfo )  
  {
    if ( typeof extraInfo[0] != "string" ) return; 
    if ( typeof extraInfo[1] != "string" ) return; 
  }
  else { return; }

  extraInfo[0] = replaceString(trimString(extraInfo[0]), "*", "");
  extraInfo[0] = replaceString(extraInfo[0], ".", "");

  extraInfo[1] = replaceString(trimString(extraInfo[1]), "*", "");
  extraInfo[1] = replaceString(extraInfo[1], ".", "");

  if ( eElement.className.lastIndexOf(extraInfo[0]) != -1 ) 
  {
   eElement.className = replaceString(eElement.className, extraInfo[0], extraInfo[1])
  }
  else
  {
    if ( eElement.className.lastIndexOf(extraInfo[1]) != -1 ) 
    {
     eElement.className = replaceString(eElement.className, extraInfo[1], extraInfo[0])
    }
    else
    {
      if (eElement.className.length > 0 )
      {
        eElement.className = trimString(eElement.className) + " " + extraInfo[0];
      }
      else
      {
        eElement.className = extraInfo[0];
      }
    }  
  }
  //debugWrite("'" + debugToString(eElement.className) + "'" );
}

/*------------------------------------------------------------------------------
* toggleClass()                     Adds a value to an element's class
*                                   if it is not already there. 
*                                   Removes the value if it is already there.
*                                   This function does not disturb other class 
*                                   values in the class.
*
* @param  {Object}   eElement       is the HTML element that will be toggled.
*
* @param  {Object}   e              is the event object supplied by the browser. 
*        
* @param  {String}   extraInfo      is the class to be added if not present or removed if present. 
*
* @return null
*/
function toggleClass( eElement, e, extraInfo )  {

  if ( extraInfo ) { if ( typeof extraInfo != "string" ) return; }
  else { return; }
  extraInfo = replaceString(trimString(extraInfo), "*", "");
  extraInfo = replaceString(extraInfo, ".", "");

  if ( eElement.className.lastIndexOf(extraInfo) != -1 ) 
  {
    eElement.className = deleteString(eElement.className, extraInfo);
  }
  else
  {
    if ( eElement.className.length > 0 )
    {
      eElement.className = trimString(eElement.className) + " " + extraInfo;
    }
    else
    {
      eElement.className = extraInfo;
    }    
  }
  //debugWrite("'" + debugToString(eElement.className) + "'" );
}


/*******************************************************************************
 *******************************************************************************
 * ELEMENTS                                                                    *
 *******************************************************************************
 *******************************************************************************/

/*------------------------------------------------------------------------------
*  getElementsByClass()             returns an array of elements assigned to the 
*                                   specified class; optionally starting at the 
*                                   specified node; and optionally filtered 
*                                   to contain only certain types of elements.
*
*  @param {String} sHtmlClassName   is a string containing the name of the class 
*                                   to search for. An element may be assigned 
*                                   to more than one class, and this function will 
*                                   match any element containing any matching class.
*
*  @param {Object} eStartingNode    is the element from which to start searching 
*                                   for child elements. If null, the document node 
*                                   is used as the starting point.
*
*  @param {String} sHtmlTag         is a string naming the type of element 
*                                   to include in the results. If null, all types 
*                                   of elements are included in the results.
*
*  @return                          an array of elements that are assigned 
*                                   to the specified class.
*/
function getElementsByClass(sHtmlClassName, eStartingNode, sHtmlTag) {
  var classElements = new Array();
  if ( eStartingNode == null )
      eStartingNode = document;
  if ( sHtmlTag == null )
      sHtmlTag = '*';
  var els = eStartingNode.getElementsByTagName(sHtmlTag);
  var elsLen = els.length;
  var pattern = new RegExp('(^|\\s)'+sHtmlClassName+'(\\s|$)');
  for (i = 0, j = 0; i < elsLen; i++) {
      if ( pattern.test(els[i].className) ) {
          classElements[j] = els[i];
          j++;
      }
  }
  return classElements;
}

/*------------------------------------------------------------------------------
*  getElement() receives an element or a string ID as an argument
*  Returns the element passed to it.
*  Returns the element that matches the string ID passed to it.
*  Returns null if the element cannot be found.
*  Returns the value passed to it if the value is not a string or an element.
*/
function getElement( elementOrElementId ) {
  if (typeof elementOrElementId == 'string')
      return document.getElementById(elementOrElementId);
  else
      return elementOrElementId;
}

/*------------------------------------------------------------------------------
*  toElementArray()                 normalizes whatever you pass in as arguments 
*                                   into a single array containing element objects.
*                                   You can pass in elements by object reference 
*                                   or by string ID. You can pass in as many 
*                                   element references or string IDs as you want 
*                                   in any order.
*                                   You can embed IDs in a string by separating 
*                                   them with spaces or commas.
*                                   You can pass in arrays of element objects,
*                                   arrays of string IDs, and arrays of strings 
*                                   containing lists of comma- or space-delimited IDs.
*                                   Duplicate elements are removed.
*
*  @return {Array }                 an array of HTML element objects. 
*/
function toElementArray() {
  
  var aElements =  toElementArrayFromArray(arguments);
  
  return removeDuplicatesFromArray(aElements);

}

/*------------------------------------------------------------------------------
*  toElementArrayFromArray()        Returns an array containing element objects.
*                                   This function does not remove duplicate 
*                                   element objects, but it does remove 
*                                   duplicate IDs in strings.
*
*  @param {Array} aAny              Array containing strings, elements, or arrays.
*
*  @return {Array }                 an array of HTML element objects. 
*/
function toElementArrayFromArray( aAny ) {
  var aElements = new Array();

  //Cannot verify that aAny is an array because in FireFox and IE, arguments is not an array!

  var len = aAny.length;
  for (var i=0; i < len; ++i) 
  {
    //Ignore the following types of array elements:
    if (aAny[i] == null )                continue;
    if (aAny[i].constructor == Number)   continue;
    if (aAny[i].constructor == Date)     continue;
    if (aAny[i].constructor == Boolean)  continue;
    if (aAny[i].constructor == Function) continue;
    if (aAny[i].constructor == Error)    continue;

    //If a string, extract and lookup the IDs in it.
    if (aAny[i].constructor == String) 
    {
      var aTemp = toElementArrayFromString(aAny[i]);
      if ( aTemp.length > 0 ) aElements = aElements.concat(aTemp);
    }
    else 
    {
      //If an array, recurse and process any embedded arrays
      if (aAny[i].constructor == Array)  
      {
        aElements = aElements.concat( toElementArrayFromArray(aAny[i]) );
      }
      else  //If an element, directly add any Element Objects 
      {
        aElements.push(aAny[i]);
      }
    }

  }
  return aElements;
}

/*------------------------------------------------------------------------------
*  removeDuplicatesFromArray()        returns an array containing no duplicate items 
*                                     and no null items.
*
*  @param  {Array}   aAny             is an array containing elements of any data type.
*
*  @param  {Boolean} bCompareNumStr   if true, then numbers are compared to strings
*
*  @param  {Boolean} bCaseInsensitive if true, then strings are compared case insensitive.
*  
*  @return {Array}                    an array containing no duplicates. 
*/
function removeDuplicatesFromArray( aAny, bCompareNumStr, bCaseInsensitive ) {
  var aResult = [];

  if (aAny.constructor != Array)  return aResult;

  var i = 0;
  var len = aAny.length;
  var sTemp = "";
  

  if (!bCompareNumStr && !bCaseInsensitive)  //Compare Strictly
  {
    for ( i=0; i < len; i++ ) 
    {
      if ( aAny[i] != null )
      {
        for ( var j=i+1; j < len; j++ ) 
        {
          if ( aAny[j] != null && aAny[i] === aAny[j] )
          {
            aAny[j] = null; //mark duplicates as null
          }
        }
      }
    }   
  }
  else
  { 
    if (bCompareNumStr)  //Compare numbers to strings
    {
      for ( i=0; i < len; i++ ) 
      {
        if ( aAny[i] != null )
        {
          if ( bCaseInsensitive && aAny[i].constructor == String ) //if case-insensitive
          {
            sTemp = aAny[i].toLowerCase();
            for ( var j=i+1; j < len; j++ ) 
            {
              if ( aAny[j] != null )
              {
                if ( aAny[j].constructor == String )
                {
                  if ( sTemp == aAny[j].toLowerCase() )  aAny[j] = null; //mark duplicates as null
                }
                else
                {
                  if ( sTemp == aAny[j] )                aAny[j] = null; //mark duplicates as null
                }
              }              
            }
  
          }
          else  //if case-sensitive or not comparing to a string
          {
            for ( var j=i+1; j < len; j++ ) 
            {
              if ( aAny[j] != null && aAny[i] == aAny[j] ) //use == to compare numbers to strings
              {
                aAny[j] = null; //mark duplicates as null
              }
            }
          }
        }
      }
    }
    else //Do not compare numbers to strings
    {
      for ( i=0; i < len; i++ ) 
      {
        if ( aAny[i] != null )
        {
          //if case-insensitive and comparing a string 
          if ( bCaseInsensitive && aAny[i].constructor == String ) 
          {
            sTemp = aAny[i].toLowerCase();
            for ( var j=i+1; j < len; j++ ) 
            {
              if ( aAny[j] != null )
              {
                if ( aAny[j].constructor == String )
                  if ( sTemp === aAny[j].toLowerCase() )  aAny[j] = null; //mark duplicates as null
                else
                  if ( sTemp === aAny[j] )                aAny[j] = null; //mark duplicates as null
              }              
            }
  
          }
          else  //if case-sensitive or not comparing to a string
          {
            for ( var j=i+1; j < len; j++ ) 
            {
              if ( aAny[j] != null && aAny[i] === aAny[j] ) //use === to compare numbers to strings
              {
                aAny[j] = null; //mark duplicates as null
              }
            }
          }
        }
      }
    }
  }

  //Remove all array elements marked null
  for ( i=0; i < len; i++ ) 
  {
    if (aAny[i] != null) aResult.push(aAny[i]);
  }
  
  return aResult;
}

/*------------------------------------------------------------------------------
*  toElementArrayFromString()         returns an array of element objects by 
*                                     reading one or more IDs from the string and 
*                                     using getElementById() to retrieve elements.
*                                     Multiple IDs can be embedded in a string
*                                     separating them with commas or spaces.
*                                     If an ID is cannot be found, it is not included
*                                     in the results.
*
*  @param {String} sIDs               is a string containing one or more IDs. 
*
*  @param {Boolean} bAllowDuplicates  if true, duplicate IDs are not removed.
*
*  @return {Array }                   an array of HTML element objects. 
*/
function toElementArrayFromString( sIDs, bAllowDuplicates ) {
  var aElements = new Array();
  var count = -1;

  if (sIDs == null) return aElements;
  sIDs = sIDs.toString();
  
  count = sIDs.indexOf(",");
  if (count > -1)
  {
    //If it contains a comma, assume it is a comma-delimited list of element IDs.

    //If it contains spaces, remove them.
    count = sIDs.indexOf(" ");
    if (count > -1)
    {
      var aTemp = sIDs.split(" ");
      var sTemp =  aTemp.join("");
      
      //Extract IDs from sTemp and convert them to elements.
      var aIDs = sTemp.split(',');
      return toElementArrayFromIdArray(aIDs, bAllowDuplicates);
    }
    else
    {
      //Extract IDs from sIDs and convert them to elements.
      var aIDs = sIDs.split(',');
      return toElementArrayFromIdArray(aIDs, bAllowDuplicates);
    }
  }
  else  //If the string does NOT contain comma delimiters, check for space delimiters.
  {
    count = sIDs.indexOf(" ");
    if (count > -1)
    {
      //Extract IDs from sIDs and convert them to elements.
      var aIDs = sIDs.split(' ');
      return toElementArrayFromIdArray(aIDs, bAllowDuplicates);      
    }
    else  //If the string does NOT contain a comma or a space, assume it is one ID.
    {
        var eElement = document.getElementById(sIDs);       
        if ( eElement != null ) aElements.push(eElement);
    }
  }
 
 return aElements;
}

/*------------------------------------------------------------------------------
*  toElementArrayFromIdArray()        returns an array of element objects by 
*                                     using getElementById() to convert each 
*                                     string ID in aIDs to an element object.
*
*  @param {String}  aIDs              is an array containing one or more string IDs. 
*
*  @param {Boolean} bAllowDuplicates  if true, duplicate IDs are not removed.
*
*  @return {Array }                   an array of HTML element objects. 
*/
function toElementArrayFromIdArray( aIDs, bAllowDuplicates ) {
  var aElements = [];

  if (aIDs.constructor != Array)  return aElements;

  var i = 0;
  var sTemp = "";
  var len = aIDs.length;

  if ( !bAllowDuplicates )
  {
    for ( i=0; i < len; i++ ) 
    {
      if ( aIDs[i] != null )
      {
        for ( var j=i+1; j < len; j++ ) 
        {
          if ( aIDs[j] != null && aIDs[i] == aIDs[j] )
          {
            aIDs[j] = null; //mark duplicates as null
          }
        }
      }
    }
  }

  //Lookup the IDs in aIDs[] and return the results
  var eElement = null;
  for ( i=0; i < len; i++ ) 
  {
    if (aIDs[i] != null)
    {
      eElement = document.getElementById(aIDs[i]);       
      if ( eElement != null ) aElements.push(eElement);
    }
  }
  return aElements;
}


/*******************************************************************************
 *******************************************************************************
 * STRINGS                                                                     *
 *******************************************************************************
 *******************************************************************************/
 
/*------------------------------------------------------------------------------
*  getStringBefore()                returns the string in sMain that is before 
*                                   the first instance of sSearch.
*                                   The return string does not include sSearch.
*
*  @param  {String} sMain           is the string being operated on.
*
*  @param  {String} sSearch         is the string being searched for.
*
*  @return {String}                 Returns a substring from sMain.
*  @return {null}                   Returns null if sSearch is not found.
*                                   Returns null if sMain or sSearch is null.
*                                   Returns null if sMain or sSearch is "".
*                                   Returns null if sMain or sSearch is not a string.
*                                   Returns "" only when sMain == sSearch.
*/
function getStringBefore(sMain, sSearch) {
 try { 
   var lenSearch = sSearch.length 
   if (lenSearch == null || lenSearch == 0) return null;
   var lenMain = sMain.length 
   if (lenMain == null   || lenMain == 0  ) return null;

   var foundOffset = sMain.indexOf(sSearch); 
 }
 catch (e) { return null; }
 
 if (foundOffset == -1)   return null; 
 return sMain.substring(0, foundOffset);
}

/*------------------------------------------------------------------------------
*  getStringAfter()                 returns the string in sMain that is after 
*                                   the first instance of sSearch.
*                                   The return string does not include sSearch.
*
*  @param  {String} sMain           is the string being operated on.
*
*  @param  {String} sSearch         is the string being searched for.
*
*  @return {String}                 Returns a substring from sMain.
*  @return {null}                   Returns null if sSearch is not found.
*                                   Returns null if sMain or sSearch is null.
*                                   Returns null if sMain or sSearch is "".
*                                   Returns null if sMain or sSearch is not a string.
*                                   Returns "" only when sMain == sSearch.
*/
function getStringAfter(sMain, sSearch) {
  try { 
   var lenSearch = sSearch.length 
   if (lenSearch == null || lenSearch == 0) return null;
   var lenMain = sMain.length 
   if (lenMain == null   || lenMain == 0  ) return null;

   var foundOffset = sMain.indexOf(sSearch); 
 }
 catch (e) { return null; }
 
 if (foundOffset == -1)   return null; 
 return sMain.substring(foundOffset+lenSearch, lenMain);
}

/*------------------------------------------------------------------------------
*  insertString()                   inserts sInsert into sMain after
*                                   the specified character position. 
*                                   Zero or null is before the first character.
*                                   One is after the first character.
*                                   The length of sMain is after the last character.
*
*  @param  {String} sMain           is the string being operated on.
*
*  @param  {String} sInsert         is the string being inserted.
*
*  @param  {Number} nPosition       is the zero-based character position where the 
*                                   string will be inserted. Zero is the beginning.
*                                   If nPosition is larger than the length 
*                                   of sMain, then sInsert will be appended at
*                                   the end of sMain.
*
*  @return {String}                 Returns sMain with sInsert inserted at
*                                   the specified character position. If there
*                                   is a problem locating the position, 
*                                   sInsert is inserted before sMain.
*
*  @return {null}                   Returns null if sMain and sInsert are both 
*                                   null or both are not a string.
*/
function insertString(sMain, nPosition, sInsert) {
  if ( sMain == null && sInsert == null) return null;
  
  if ( sMain == null ) {
     if ( sInsert.constructor == String ) return sInsert;
     else return null;
  }
  if ( sInsert == null ) {
     if ( sMain.constructor == String ) return sMain;
     else return null;
  }
  
  try { 
    
    var lenMain = sMain.length;
    if ( lenMain == null || lenMain == 0  )  {
      if ( sInsert.constructor == String ) return sInsert;
      else {
       if ( sMain.constructor == String ) return "";
       else return null;
      }
    }

    var lenInsert = sInsert.length; 
    if (lenInsert == null || lenInsert == 0) return sMain;
 
    if (typeof nPosition != "number" ) return sInsert + sMain;
    if (nPosition < 0 )                return sInsert + sMain;
 
    if (nPosition >= lenMain )         return sMain + sInsert;
 
    var strBefore = sMain.substring(0, nPosition);
    var strAfter  = sMain.substring(nPosition, lenMain);
 
    return strBefore + sInsert + strAfter;
  }
  catch (e) 
  { 
   return sMain + sInsert; 
  }
  
}

/*------------------------------------------------------------------------------
*  insertStringBefore()             inserts sInsert into sMain at the position
*                                   before the first instance of sSearch.
*                                   Because we are searching for a string and 
*                                   and inserting before that string, this function
*                                   returns null if sMain is "" because you 
*                                   cannot search for "".
*
*  @param  {String} sMain           is the string being operated on.
*
*  @param  {String} sSearch         is the string being searched for.
*
*  @param  {String} sInsert         is the string being inserted.
*
*  @return {String}                 Returns sMain with sInsert inserted before
*                                   the position matching sSearch.
*                                   Returns sMain if sInsert is null, "", or 
*                                   if sSearch does not match anything in sMain.
*
*  @return {null}                   Returns null if sMain is null or not a string.
*/
function insertStringBefore(sMain, sSearch, sInsert) {
  try { 
   var lenMain = sMain.length 
   if (lenMain == null   || lenMain == 0  ) return null;
   var lenSearch = sSearch.length 
   if (lenSearch == null || lenSearch == 0) return sMain;
   var lenInsert = sInsert.length 
   if (lenInsert == null || lenInsert == 0) return sMain;

   var foundOffset = sMain.indexOf(sSearch); 
  }
  catch (e) { return sMain; }

  if (foundOffset == -1) return sMain;

  var strBefore = sMain.substring(0, foundOffset);
  var strAfter  = sMain.substring(foundOffset+lenSearch, lenMain);


  return strBefore + sInsert + sSearch + strAfter;
  
}

/*------------------------------------------------------------------------------
*  insertStringAfter()              inserts sInsert into sMain at the position
*                                   before the first instance of sSearch.
*                                   Because we are searching for a string and 
*                                   and inserting before that string, this function
*                                   returns null if sMain is "" because you 
*                                   cannot search for "".
*
*  @param  {String} sMain           is the string being operated on.
*
*  @param  {String} sSearch         is the string being searched for.
*
*  @param  {String} sInsert         is the string being inserted.
*
*  @return {String}                 Returns sMain with sInsert inserted before
*                                   the position matching sSearch.
*                                   Returns sMain if sInsert is null, "", or 
*                                   if sSearch does not match anything in sMain.
*
*  @return {null}                   Returns null if sMain is null or not a string.
*/
function insertStringAfter(sMain, sSearch, sInsert) {
  try { 
   var lenMain = sMain.length 
   if (lenMain == null   || lenMain == 0  ) return null;
   var lenSearch = sSearch.length 
   if (lenSearch == null || lenSearch == 0) return sMain;
   var lenInsert = sInsert.length 
   if (lenInsert == null || lenInsert == 0) return sMain;

   var foundOffset = sMain.indexOf(sSearch); 
  }
  catch (e) { return sMain; }

  if (foundOffset == -1) return sMain;

  var strBefore = sMain.substring(0, foundOffset);
  var strAfter  = sMain.substring(foundOffset+lenSearch, lenMain);


  return strBefore + sSearch + sInsert + strAfter;
  
}

/*------------------------------------------------------------------------------
*  replaceString()                  replaces all instances of sSearch in sMain with 
*                                   sReplace.
*
*  @param  {String} sMain           is the string being operated on.
*
*  @param  {String} sSearch         is the string being searched for.
*
*  @param  {String} sReplace        is the string replacing sSearch.
*
*  @return {String}                 Returns sMain with sReplace replacing sSearch.
*  @return {null}                   Returns null if sMain is null.
*/
function replaceString(sMain, sSearch, sReplace) {
  try{
    var aTemp = sMain.split(sSearch);
    return aTemp.join(sReplace);
  }
  catch (e) { return sMain; }
}

/*------------------------------------------------------------------------------
*  deleteString()                   deletes all instances of sSearch in sMain.
*
*  @param  {String} sMain           is the string being operated on.
*
*  @param  {String} sSearch         is the string being searched for.
*
*  @return {String}                 Returns sMain with all instances of sSearch removed.
*  @return {null}                   Returns null if sMain is null.
*/
function deleteString(sMain, sSearch) {
  try{
    var aTemp = sMain.split(sSearch);
    return aTemp.join("");
  }
  catch (e) { return sMain; }
}

/*------------------------------------------------------------------------------
*  trimString()                     removes all whitespace from beginning 
*                                   and end of sMain.
*
*  @param  {String} sMain           is the string being operated on.
*
*  @return {String}                 Returns sMain with all whitespace 
*                                   removed from the beginning and end.
*  @return {null}                   Returns null if sMain is null.
*/
function trimString(sMain) {
  try{
    if ( sMain == null) return null;
    sMain = sMain.toString();
    var lenMain = sMain.length 
    if (lenMain == null   || lenMain == 0  ) return "";
    
    //Find first non-whitespace character (searching from first to last)
    var firstChar = 0;
    var nChar = sMain.charCodeAt(firstChar);

    while ( nChar < 33 )
    {
     firstChar += 1;
     if ( firstChar > lenMain ) return "";
     nChar = sMain.charCodeAt(firstChar);
    }


    //Find last non-whitespace character (searching from last to first)
    var lastChar = lenMain-1;
    var nChar = sMain.charCodeAt(lastChar);
    //debugWrite('"' + nChar + '"');

    while ( nChar < 33 )
    {
     lastChar -= 1;
     if ( lastChar < 0 ) return "";
     nChar = sMain.charCodeAt(lastChar);
    }
    lastChar += 1; 
  
  //debugWrite('firstChar:'+ firstChar );
  //debugWrite('lastChar:'+ lastChar );

  return sMain.substring(firstChar, lastChar);

  }
  catch (e) { return sMain; }
}

/*------------------------------------------------------------------------------
* inClassList()                     Returns True if sClassList contains sClass.
*                                   The search is case sensitive.
*
* @param  {String}   eElement       is the element containing the class that will be searched.
*
* @param  {String}   sClass         is the item to search for in the list. 
*
* @return {Boolean}                 true if class is found; otherwise false.
*/
function inClassList( sClassList, sClass )  {
 try
 {
  var pattern = new RegExp('(^|\\s)'+trimString(sClass)+'(\\s|$)');
  if ( pattern.test(sClassList) ) { return true; }
 }
 catch (e) { return false; }
 return false; 
}

/*------------------------------------------------------------------------------
* inList()                          Returns True if an item is in a list. 
*                                   A list is a string containing a set of  
*                                   delimited items.
*                                   For example: "item1 item2 3 4.0 item5"
*                                   For example: "item1,item2,3,4.0,item5"
*                                   For example: "  item1, item2,  3, 4.0,   item5   "
*
* @param  {String}   sList          is the string that will be searched.
*
* @param  {String}   sItem          is the item to search for in the list. 
*        
* @param  {String}   sDelimiter     is the delimiter that separates items in the list. 
*
* @param  {Boolean}  bCaseSensitive when true, the search is case sensitive. 
*        
* @param  {Boolean}  bNoTrim        when true, sItem and each item in the list are 
*                                   NOT trimmed prior to being compared. 
*                                   This is a performance optimization when you 
*                                   know a list does not contain extra whitespace.
*
* @return {Boolean}                 true if item is found in the list; otherwise false.
*/
function inList( sList, sItem, sDelimiter, bCaseSensitive, bNoTrim )  {
 try
 {
   //debugWrite( "sList=", sList);
   //debugWrite( "sItem=", sItem);
   //debugWrite( "sDelimiter='" + sDelimiter + "'" );
   //debugWrite( "bCaseSensitive=", bCaseSensitive);
   //debugWrite( "bTrim=", bTrim );

   var aTemp = sList.split(sDelimiter);
   len=aTemp.length;
   //debugWrite("aTemp=", aTemp);
   //debugWrite("Length of aTemp=", len);

   if ( bNoTrim )
   {
     if ( bCaseSensitive )
     {
       for ( var i=0; i < len; i++ ) 
       { if ( aTemp[i] == sItem ) return true; }
     }
     else
     {
       var sTemp = sItem.toLowerCase();
       for ( var i=0; i < len; i++ ) 
       { if ( aTemp[i].toLowerCase() == sTemp ) return true; }
     }
   }
   else
   {
     sItem = trimString(sItem)
     if ( bCaseSensitive )
     {
       for ( var i=0; i < len; i++ ) 
       { if ( trimString(aTemp[i]) == sItem ) return true; }
     }
     else
     {
       var sTemp = sItem.toLowerCase();
       for ( var i=0; i < len; i++ ) 
       { if ( trimString(aTemp[i]).toLowerCase() == sTemp ) return true; }
     }
   }
 }
 catch (e) { return false; }
 return false; 
}

/*******************************************************************************
 *******************************************************************************
 * LOGIC                                                                       *
 *******************************************************************************
 *******************************************************************************/

/*------------------------------------------------------------------------------
* isFalse()                         Returns true when val is a boolean and is false.
* @param  {any}  val                val can be any value of any type. 
* @return {Boolean}                 returns true when val is boolean and is false; 
*                                   otherwise returns false.   
*/
function isFalse(val) {
  if (val) { if (val.constructor != Boolean ) { return false; } }
  if ( val == false ) { return true; }
  return false;
} 
/*------------------------------------------------------------------------------
* isTrue()                          Returns true when val is a boolean and is true.
* @param  {any}  val                val can be any value of any type. 
* @return {Boolean}                 returns true when val is boolean and is true; 
*                                   otherwise returns false.   
*/
function isTrue(val) {
  if (val) { if (val.constructor != Boolean ) { return false; } }
  if ( val == true ) { return true; }
  return false;
} 

/*******************************************************************************
 *******************************************************************************
 * DIRECT STYLE MANIPULATION -- NOT RECOMMENDED                                *
 *******************************************************************************
 *******************************************************************************/

/*------------------------------------------------------------------------------
* The following functions are included as examples of how to change element styles
* directly with JavaScript. This should be avoided, because it is better to keep 
* all styles in a stylesheet. Javascript should simply add, remove, or change  
* an element's classes, which in turn should change an element's style. 
* Another problem with these functions is that they are not accessible unless 
* used very carefully because they hide elements from screenreaders.
*
* These functions take an element object as an argument and return null.
*/
function showElement(eElement)  {
  eElement.style.visibility = 'visible';
}
function hideElement(eElement)  {
  eElement.style.visibility = 'hidden';
}
function toggleVisibility(eElement)  {
  eElement.style.visibility = (eElement.style.visibility != 'hidden' ? 'hidden' : 'visible' );
}
function displayElement(eElement)  {
  eElement.style.display = '';
}
function undisplayElement(eElement)  {
  eElement.style.display = 'none';
}
function toggleDisplay(eElement)  {
  eElement.style.display = (eElement.style.display != 'none' ? 'none' : '' );
}


/*******************************************************************************
 *******************************************************************************
 * DEBUGGING                                                                   *
 *******************************************************************************
 *******************************************************************************/

/*--------------------------------------------------------------------------------
*  debugWrite                      writes output to the end of the document.
*
*  @param {String}  output         is the item that will be output. 
*                                  If it is not a string,
*                                  it will be converted to a string and output.
*
*  @param {Boolean} boolDebugging  if true then this function works.
*
*/
function debugWrite() {
  var newElement = document.createElement("li");

  var len = arguments.length;
  for (var i=0; i<len; i++)
  {
    var newText = document.createTextNode( debugToString(arguments[i]) );  
    newElement.appendChild(newText);
  }
  document.body.appendChild(newElement);
}  

/*--------------------------------------------------------------------------------
*  debugToString                     Returns a string describing an element 
*                                    including the element's tagName, id, 
*                                    className, and content.
*
*  @param {Object}  anyVar             is the element being described.
*
*  @param {Number}  maxContentLength is the optional maximum length of the content 
*                                    that you want this function to return.
*/
function debugToString( anyVar, maxContentLength ) {
  if (anyVar == null )                return 'null';
  if (anyVar.constructor == String)   return anyVar;
  if (anyVar.constructor == Number)   return anyVar.toString();
  if (anyVar.constructor == Array)    return 'Array('  + anyVar.valueOf() +')';
  if (anyVar.constructor == Date)     return '#'       + anyVar.toGMTString() + '#' ;
  if (anyVar.constructor == Boolean) {if (anyVar) return 'true'; else return 'false';}
  if (anyVar.constructor == Function) return anyVar.valueOf();
  if (anyVar.constructor == Error)    return "ERROR "           + anyVar.number
                                               + ", "           + anyVar.name 
                                               + ": "           + anyVar.description
                                               + "; LINE: "     + anyVar.lineNumber 
                                               + "; FILENAME: " + anyVar.fileName 
                                               + "; MESSAGE: "  + anyVar.message ;
  if ( !anyVar.tagName )              return anyVar.toString();

  //If we get here, assume we have a valid HTML element object...
  var tag = anyVar.tagName.toLowerCase()

  if (typeof maxContentLength == "number")    
  { 
    var content = anyVar.innerHTML;
    var len = content.length;
    var content = content.substring(0,maxContentLength);
    if (len > maxContentLength) content = content + "...";
  }
  else
  {
   var content = anyVar.innerHTML 
  }  
  return '<' + tag + ' id="' 
             + anyVar.id + '" class="'  + anyVar.className + '">'
             + content 
             + '</' + tag + '>';
}  

