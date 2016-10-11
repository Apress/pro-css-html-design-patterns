/* 
Tests the functions in chdp_common.js -- CSS and HTML Design Patterns  

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

/**********************************************************************************/
function test()
{
 //Put function calls here that you want to test.
 
}
/**********************************************************************************/

/*--------------------------------------------------------------------------------*/
function test_getStringBefore()
{
 var strMain   = "1234567890 24680"; 
 var strSearch = "246"; 
 var result = getStringBefore(strMain, strSearch);
 debugWrite(result);

 var strMain   = new String("1234567890 24680");
 var strSearch = new String("5");
 var result = getStringBefore(strMain, strSearch);
 debugWrite(result);

 var result = getStringBefore("123", "123");
 debugWrite('empty string:"' + result + '"');

 var result = getStringBefore("123", "a");
 debugWrite(result);

 var strMain   = new String("1234567890 24680");
 var strSearch = new String("579");
 var result = getStringBefore(strMain, strSearch);
 debugWrite(result);

 var strMain   = new Date();
 var strSearch = "5";
 var result = getStringBefore(strMain, strSearch);
 debugWrite(result);
 
 var strMain   = 5;
 var strSearch = "5";
 var result = getStringBefore(strMain, strSearch);
 debugWrite(result);

 var strMain   = "1234567890 24680"; 
 var strSearch = new Date();
 var result = getStringBefore(strMain, strSearch);
 debugWrite(result);

 var result = getStringBefore();
 debugWrite(result);

 var result = getStringBefore(null, null);
 debugWrite(result);

 var result = getStringBefore("123");
 debugWrite(result);

 var result = getStringBefore("123", null);
 debugWrite(result);

 var result = getStringBefore("", null);
 debugWrite(result);

 var result = getStringBefore(null);
 debugWrite(result);

 var result = getStringBefore(null, "123");
 debugWrite(result);

 var result = getStringBefore(null, "");
 debugWrite(result);

 var result = getStringBefore("", "");
 debugWrite(result);

} 


/*--------------------------------------------------------------------------------*/
function test_getStringAfter()
{
 var strMain   = "1234567890 24680"; 
 var strSearch = "246"; 
 var result = getStringAfter(strMain, strSearch);
 debugWrite(result);

 var strMain   = new String("1234567890 24680");
 var strSearch = new String("5");
 var result = getStringAfter(strMain, strSearch);
 debugWrite(result);

 var result = getStringAfter("123", "123");
 debugWrite('"' + result + '"');

 var result = getStringAfter("123", "a");
 debugWrite(result);

 var strMain   = new String("1234567890 24680");
 var strSearch = new String("579");
 var result = getStringAfter(strMain, strSearch);
 debugWrite(result);

 var strMain   = new Date();
 var strSearch = "5";
 var result = getStringAfter(strMain, strSearch);
 debugWrite(result);
 
 var strMain   = 5;
 var strSearch = "5";
 var result = getStringAfter(strMain, strSearch);
 debugWrite(result);

 var strMain   = "1234567890 24680"; 
 var strSearch = new Date();
 var result = getStringAfter(strMain, strSearch);
 debugWrite(result);

 var result = getStringAfter();
 debugWrite(result);

 var result = getStringAfter(null, null);
 debugWrite(result);

 var result = getStringAfter("123");
 debugWrite(result);

 var result = getStringAfter("123", null);
 debugWrite(result);

 var result = getStringAfter("", null);
 debugWrite(result);

 var result = getStringAfter(null);
 debugWrite(result);

 var result = getStringAfter(null, "123");
 debugWrite(result);

 var result = getStringAfter(null, "");
 debugWrite(result);

 var result = getStringAfter("", "");
 debugWrite(result);

}


/*--------------------------------------------------------------------------------*/
function test_insertString()
{
 var strMain   = "123"; 
 var strInsert = "-abc-"; 
 var dNow = new Date();

 debugWrite(  insertString(strMain, -2000000, strInsert) + " Position: " + "-2000000" );
 debugWrite(  insertString(strMain, -2,       strInsert) + " Position: " + "-2" );
 debugWrite(  insertString(strMain, -1,       strInsert) + " Position: " + "-1" );
 debugWrite(  insertString(strMain, 0,        strInsert) + " Position: " + "0" );
 debugWrite(  insertString(strMain, 1,        strInsert) + " Position: " + "1" );
 debugWrite(  insertString(strMain, 2,        strInsert) + " Position: " + "2" );
 debugWrite(  insertString(strMain, 3,        strInsert) + " Position: " + "3" );
 debugWrite(  insertString(strMain, 4,        strInsert) + " Position: " + "4" );
 debugWrite(  insertString(strMain, 5,        strInsert) + " Position: " + "5" );
 debugWrite(  insertString(strMain, 2000000,  strInsert) + " Position: " + "2000000" );
 debugWrite(  insertString(strMain, null,     strInsert) + " Position: " + "null" );
 debugWrite(  insertString(strMain, "2",      strInsert)  + " Position: " + '"2"' );
 debugWrite(  insertString(strMain, "",       strInsert)  + " Position: " + '""' );
 debugWrite(  insertString(strMain, dNow,     strInsert)  + " Position: " + 'Date()' );

 debugWrite(  insertString(null, -2,  strInsert) + " Position: " + '-2: null   strMain' );
 debugWrite(  insertString(7,    -2,  strInsert) + " Position: " + '-2: 7      strMain' );
 debugWrite(  insertString(dNow, -2,  strInsert) + " Position: " + '-2: Date() strMain' );
 debugWrite(  insertString("",   -2,  strInsert) + " Position: " + '-2: ""     strMain' );

 debugWrite(  insertString(null, -2,  null ) + " Position: " + '-2: null   strMain and  null   strInsert' );
 debugWrite(  insertString(null, -2,  7    ) + " Position: " + '-2: null   strMain and  7      strInsert' );
 debugWrite(  insertString(null, -2,  dNow ) + " Position: " + '-2: null   strMain and  Date() strInsert' );

 debugWrite(  insertString(7,    -2,  null ) + " Position: " + '-2: 7   strMain and  null   strInsert' );
 debugWrite(  insertString(7,    -2,  7    ) + " Position: " + '-2: 7   strMain and  7      strInsert' );
 debugWrite(  insertString(7,    -2,  dNow ) + " Position: " + '-2: 7   strMain and  Date() strInsert' );

 debugWrite(  insertString(dNow, -2,  null ) + " Position: " + '-2: Date()   strMain and  null   strInsert' );
 debugWrite(  insertString(dNow, -2,  7    ) + " Position: " + '-2: Date()   strMain and  7      strInsert' );
 debugWrite(  insertString(dNow, -2,  dNow ) + " Position: " + '-2: Date()   strMain and  Date() strInsert' );

 debugWrite(  insertString("", 2,  ""      ) + " Position: " + '2: ""      strMain and  ""     strInsert' );
 debugWrite(  insertString("", 2,  null    ) + " Position: " + '2: ""      strMain and  null   strInsert' );
 debugWrite(  insertString("", 2,  7       ) + " Position: " + '2: ""      strMain and  7      strInsert' );
 debugWrite(  insertString("", 2,  dNow    ) + " Position: " + '2: ""      strMain and  Date() strInsert' );
 debugWrite(  insertString(null, -2,  ""   ) + " Position: " + '-2: null   strMain and  ""     strInsert' );


 debugWrite(  insertString(strMain, 2,  "")   + " Position: " + '2: ""     strInsert' );
 debugWrite(  insertString(strMain, 2,  null) + " Position: " + '2: null   strInsert' );
 debugWrite(  insertString(strMain, 2,  7)    + " Position: " + '2: 7      strInsert' );
 debugWrite(  insertString(strMain, 2,  dNow) + " Position: " + '2: Date() strInsert' );

}

/*--------------------------------------------------------------------------------*/
function test_insertStringBefore()
{

 var strInsert = "-abc-"; 


 var strMain   = "1234567890 24680"; 
 var strSearch = "246"; 
 var result = insertStringBefore(strMain, strSearch, strInsert);
 debugWrite(result);

 var strMain   = new String("1234567890 24680");
 var strSearch = new String("5");
 var result = insertStringBefore(strMain, strSearch, strInsert);
 debugWrite(result);

 var result = insertStringBefore("1234567890 24680", "1234567890 24680", "-abc-");
 debugWrite(result);

 var result = insertStringBefore("1234567890 24680", "a", "-abc-");
 debugWrite(result);

 var strMain   = new String("1234567890 24680");
 var strSearch = new String("579");
 var result = insertStringBefore(strMain, strSearch, strInsert);
 debugWrite(result);

 var result = insertStringBefore("1234567890 24680");
 debugWrite(result);

 var result = insertStringBefore("1234567890 24680", null);
 debugWrite(result);

 var result = insertStringBefore(Date(), "6", "-abc-");
 debugWrite(result);

 var strMain   = new Date();
 var strSearch = "6";
 var result = insertStringBefore(strMain, strSearch, strInsert);
 debugWrite(result);

 var result = insertStringBefore();
 debugWrite(result);

 var result = insertStringBefore(null, null);
 debugWrite(result);

 var result = insertStringBefore(null, null, strInsert);
 debugWrite(result);


 var result = insertStringBefore("", null);
 debugWrite(result);

 var result = insertStringBefore("", null, strInsert);
 debugWrite(result);

 var result = insertStringBefore(null);
 debugWrite(result);

 var result = insertStringBefore(null, "1234567890 24680");
 debugWrite(result);

 var result = insertStringBefore(null, "1234567890 24680", strInsert);
 debugWrite(result);

 var result = insertStringBefore(null, "");
 debugWrite(result);

 var result = insertStringBefore(null, "", strInsert);
 debugWrite(result);

 var result = insertStringBefore("", "");
 debugWrite(result);

 var result = insertStringBefore("", "", strInsert);
 debugWrite(result);

} 


/*--------------------------------------------------------------------------------*/
function test_insertStringAfter()
{

 var strInsert = "-abc-"; 


 var strMain   = "1234567890 24680"; 
 var strSearch = "246"; 
 var result = insertStringAfter(strMain, strSearch, strInsert);
 debugWrite(result);

 var strMain   = new String("1234567890 24680");
 var strSearch = new String("5");
 var result = insertStringAfter(strMain, strSearch, strInsert);
 debugWrite(result);

 var result = insertStringAfter("1234567890 24680", "1234567890 24680", "-abc-");
 debugWrite(result);

 var result = insertStringAfter("1234567890 24680", "a", "-abc-");
 debugWrite(result);

 var strMain   = new String("1234567890 24680");
 var strSearch = new String("579");
 var result = insertStringAfter(strMain, strSearch, strInsert);
 debugWrite(result);

 var result = insertStringAfter("1234567890 24680");
 debugWrite(result);

 var result = insertStringAfter("1234567890 24680", null);
 debugWrite(result);

 var result = insertStringAfter(Date(), "6", "-abc-");
 debugWrite(result);

 var strMain   = new Date();
 var strSearch = "6";
 var result = insertStringAfter(strMain, strSearch, strInsert);
 debugWrite(result);

 var result = insertStringAfter();
 debugWrite(result);

 var result = insertStringAfter(null, null);
 debugWrite(result);

 var result = insertStringAfter(null, null, strInsert);
 debugWrite(result);


 var result = insertStringAfter("", null);
 debugWrite(result);

 var result = insertStringAfter("", null, strInsert);
 debugWrite(result);

 var result = insertStringAfter(null);
 debugWrite(result);

 var result = insertStringAfter(null, "1234567890 24680");
 debugWrite(result);

 var result = insertStringAfter(null, "1234567890 24680", strInsert);
 debugWrite(result);

 var result = insertStringAfter(null, "");
 debugWrite(result);

 var result = insertStringAfter(null, "", strInsert);
 debugWrite(result);

 var result = insertStringAfter("", "");
 debugWrite(result);

 var result = insertStringAfter("", "", strInsert);
 debugWrite(result);

} 

/*--------------------------------------------------------------------------------*/
function test_replaceString()
{
 debugWrite( replaceString("12, 34, 12, 34", "12", "56" ) );
 debugWrite( replaceString("12, 34, 12, 34", " ", "" ) );
 debugWrite( replaceString("12, 34, 12, 34", "12, 34", "hi" ) );
 debugWrite( replaceString("12, 34, 12, 34", "12, 34", "" ) );
 debugWrite( replaceString("12, 34, 12, 34", "12, 34", null ) );
 debugWrite( replaceString("12, 34, 12, 34", "12, 34", Date() ) );
 debugWrite( replaceString("12, 34, 12, 34", "12, 34", 2 ) );

 debugWrite( replaceString("12, 34, 12, 34", null,   "a" ) );
 debugWrite( replaceString("12, 34, 12, 34", Date(), "a" ) );
 debugWrite( replaceString("12, 34, 12, 34", 2,      "a" ) );


 debugWrite('1) ' + replaceString(null, "a", "b" ) );
 debugWrite('2) ' + replaceString("", "a", "b" ) );
 debugWrite('3) ' + replaceString(7, "a", "b" ) );
 debugWrite('4) ' + replaceString(Date(), "6", "x" ) );


 debugWrite('5) "' + replaceString("          " , " ", "" ) + '"' );
 debugWrite('6) "' + replaceString("  1   2 34    " , " ", "" ) + '"' );
 debugWrite('7) "' + replaceString("" , "", "" ) + '"' );
 debugWrite('8) "' + replaceString("" , " ", " " ) + '"' );

}

/*--------------------------------------------------------------------------------*/
function test_deleteString()
{
 debugWrite( deleteString("12, 34, 12, 34", "12," ) );
 debugWrite( deleteString("12, 34, 12, 34", " ") );
 debugWrite( deleteString("12, 34, 12, 34", "12, 34" ) );
 debugWrite( deleteString("12, 34, 12, 34", "," ) );
 debugWrite( deleteString("12, 34, 12, 34", ", " ) );

 debugWrite( deleteString("12, 34, 12, 34", null    ) );
 debugWrite( deleteString("12, 34, 12, 34", Date()  ) );
 debugWrite( deleteString("12, 34, 12, 34", 2       ) );


 debugWrite('1) ' + deleteString(null, "a" )    );
 debugWrite('2) ' + deleteString("", "a" )      );
 debugWrite('3) ' + deleteString(7, "a" )       );
 debugWrite('4) ' + deleteString(Date(), "6" )  );

 debugWrite('1) ' + deleteString(null, null )    );
 debugWrite('2) ' + deleteString("", null )      );
 debugWrite('3) ' + deleteString(7, null )       );
 debugWrite('4) ' + deleteString(Date(), null )  );

}

/*--------------------------------------------------------------------------------*/
function test_trimString()
{
 debugWrite('"' +  trimString( "test" ) + '"' );
 debugWrite('"' + trimString( " test" ) + '"' );
 debugWrite('"' + trimString( "test " ) + '"' );
 debugWrite('"' + trimString( " test " ) + '"' );
 debugWrite('"' + trimString( "      test      " ) + '"' );
 debugWrite('"' + trimString( "  			  test  			  " ) + '"' );

 debugWrite( trimString( null ) );
 debugWrite('"' +  trimString( 7 ) + '"');
 debugWrite( trimString( Date() ) );

}


/*--------------------------------------------------------------------------------*/
function test_toElementArrayFromString()
{


 listArray( toElementArrayFromString("") );
 listArray( toElementArrayFromString(" ") );
 listArray( toElementArrayFromString(null) );
 listArray( toElementArrayFromString(7) );
 listArray( toElementArrayFromString(Date()) );
 listArray( toElementArrayFromString(Array()) );

 
 listArray( toElementArrayFromString(Array(" test1 ", " test2 ")) ); 
 listArray( toElementArrayFromString("test1") );
 listArray( toElementArrayFromString("test4 test2 test3 test5 test3 test2 test4 test5") );
 listArray( toElementArrayFromString("test4,test2,test3,test5,test3,test2,test4,test5") );
 listArray( toElementArrayFromString("test4,test2,test3,test5,test3,test2,test4,test5", true) );
 listArray( toElementArrayFromString("   test1,test9  ,   test2,  test2,test3,test9    ") );
 listArray( toElementArrayFromString(",te st4,,") );
 listArray( toElementArrayFromString(",te st4,,,,,test9,test3,,test3, ,test3     ,     ,     test2,   test2,test2,test3,test9,test3,test2,test3,") );

}

/*--------------------------------------------------------------------------------*/
function test_removeDuplicatesFromArray()
{
 var test1 = document.getElementById('test1');
 var test2 = document.getElementById('test2');
 var test3 = document.getElementById('test3');
 var test4 = document.getElementById('test4');

 //aArray = Array(1, 2, 3, 1, 2, 3)
 //debugWrite( aArray  );  debugWrite( removeDuplicatesFromArray( aArray  ) );

 //aArray = Array(1, 1, 2, 2, 3, 3, 1, 2, 3)
 //debugWrite( aArray  );  debugWrite( removeDuplicatesFromArray( aArray  ) );

 //aArray = Array(1, 1, 2, null, null, 2, null, 3, 3, null, 1, 2, null, 3)
 //debugWrite( aArray  );  debugWrite( removeDuplicatesFromArray( aArray  ) );

 //aArray = Array(1, 2, "1", "2")
 //debugWrite( aArray  );  debugWrite( removeDuplicatesFromArray( aArray  ) );

 //aArray = Array(1, "2", 1, "Ab", "Ab", 2, "aB", "1")
 //debugWrite( aArray  );  debugWrite( removeDuplicatesFromArray( aArray), " -- NO strs&nums & Case Sensitive" );
 //debugWrite( aArray  );  debugWrite( removeDuplicatesFromArray( aArray , true), " -- strs&nums & Case Sensitive" );
 //debugWrite( aArray  );  debugWrite( removeDuplicatesFromArray( aArray, true, true), " -- strs&nums & Case Insensitive" );
 //debugWrite( aArray  );  debugWrite( removeDuplicatesFromArray( aArray, false, true), " -- NO strs&nums & Case Insensitive" );

 //aArray = Array( test1, test1, test2, test1, test1, test2)
 //listArray( aArray  );  listArray( removeDuplicatesFromArray( aArray  ) );
 //listArray( aArray  );  listArray( removeDuplicatesFromArray( aArray  ), true );
 //listArray( aArray  );  listArray( removeDuplicatesFromArray( aArray  ), true, true );
 //listArray( aArray  );  listArray( removeDuplicatesFromArray( aArray  ), false, true );

}

/*--------------------------------------------------------------------------------*/
function test_toElementArray()
{
 var test1 = document.getElementById('test1');
 var test2 = document.getElementById('test2');
 var test3 = document.getElementById('test3');
 var test4 = document.getElementById('test4');
 var test9;

 debugWrite( test1 );
 debugWrite( test2 );
 debugWrite( test3 );
 debugWrite( test4 );

 
 /*
 listArray( toElementArray("") );
 listArray( toElementArray(" ") );
 listArray( toElementArray(null) );
 listArray( toElementArray(7) );
 listArray( toElementArray(Date()) );
 listArray( toElementArray(Array()) );
 */

 //ARRAYS
 //listArray( toElementArray( Array("test1", test2, null, Array(test3, "test3 test4", test2, null), "test3,test4", "test3 test4 test5") ) );
 //listArray( toElementArray( Array(" test1 ", " test2 ") ) ); 
 
 //STRINGS
 //listArray( toElementArray("test1") );
 //listArray( toElementArray("test4 test2 test3 test5 test3 test2 test4 test5") );
 //listArray( toElementArray("test4,test2,test3,test5,test3,test2,test4,test5") );
 //listArray( toElementArray("test4,test2,test3,test5,test3,test2,test4,test5", true) );
 //listArray( toElementArray(",te st4,,,     test2,   test2,test2,,,,test9,test3,,test3, ,test3     ,     test3,test9,test3,test2,test3,") );
 //listArray( toElementArray("   test4,test9  ,   test2,  test2,test3,test9    ") );
 //listArray( toElementArray(",te st 4,, test2, t e s t 3") );

 //MULTIPLE ARGUMENTS - STRINGS
 //listArray( toElementArray("test1", "test2", "test3") );
 //listArray( toElementArray("test1,test2", "test3 test4") );
 //listArray( toElementArray(" ,test1, test1, test2, test2, ", "  test3 test4   test3 test4  ") );
 //listArray( toElementArray("test1", "test2", "test3", "test9", "test3", "test3", test3, test2, test1, test9) );

 //MULTIPLE ARGUMENTS - ELEMENTS
 //listArray( toElementArray(test1) );
 //listArray( toElementArray(test1, null, test2, test3, test4, null) );
 //listArray( toElementArray(test1, null, test2, "test3", test4, "test5", null) );
 //listArray( toElementArray(test1, null, test2, "test3 test2 test1 test4", test4, "test5 test1", null) );
 //listArray( toElementArray(null, "", test4, "test5, test9", "test6 test4 test2", test2, test3, "test3", test1, "test5 test1", null) );


}

/*--------------------------------------------------------------------------------*/
function listArray( anyArray )
{
 if ( anyArray == null ) 
 {
   debugWrite ("null");
   return;
 }
 len = anyArray.length;
 debugWrite ("# Elements: " + len);
 
 for ( var i=0; i < len; i++ ) 
 {
  debugWrite( i + ': ' + debugToString(anyArray[i], 30) );
 }

}

/*--------------------------------------------------------------------------------*/
function test_debugToString() {
  debugWrite(  "string?"+ 1 ) ;
  debugWrite(  1 )  ;
  debugWrite(  1.1  ) ;
  debugWrite(  0x2b  ) ;
  debugWrite(  NaN  ) ;
  
  var a = new Error();
  a.description = "This is a description of the error.";
  a.fileName = "c:/devil/is/in/the/details.js";
  a.lineNumber = 100;
  a.message = "Message";
  a.name = "Testing";
  a.number = 200;
  debugWrite( a ) ;


  var a = new String("hello")
  debugWrite( a ) ;

  var a = new Array();
  a.push("1");
  a.push(2);
  a.push(null);
  a.push("Mike");
  debugWrite( a ) ;

  var a = new Date();
  debugWrite( a ) ;

  var a = false;
  debugWrite( a ) ;

  var a = eventScope;
  debugWrite( a ) ;

  var a = new eventScope;
  debugWrite( a ) ;
}

