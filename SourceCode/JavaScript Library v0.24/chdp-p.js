
function addEvent(eElement,sEventName,fEventHandler){
return YAHOO.util.Event.addListener(eElement,sEventName,fEventHandler);}
function purgeAllEvents(){
YAHOO.util.Event.purgeElement(window,true);}
function assignEvent(sEventName,sEventSelector,fEventHandler,sHandlerSelector,fHelper,extraInfo){
var oEventScope=new eventScope(fHelper,sHandlerSelector,extraInfo);
var matches=cssQuery(sEventSelector);
var len=matches.length;
if(len>0){
for(var i=0;i<len;i++){
YAHOO.util.Event.addListener(matches[i],sEventName,fEventHandler,oEventScope);}}}
function eventScope(fRun,sCssSelector,extraInfo){
this.run=fRun;
this.cssSelector=sCssSelector;
this.extraInfo=extraInfo;}
function applyToDescendants(e,oEventScope){
var matches=cssQuery(oEventScope.cssSelector,this);
var cancel=false;
var len=matches.length;
for(var i=0;i<len;i++){
if(isFalse(oEventScope.run(matches[i],e,oEventScope.extraInfo))){cancel=true;}}
if(cancel){doDefaultAction(e,false);}}
function applyToChildrenOfAncestorWithClass(e,oEventScope){
var targetClass=trimString(oEventScope.cssSelector);
targetClass=replaceString(targetClass,"*","");
targetClass=replaceString(targetClass,".","");
var b=this;
var p=this.parentNode;
var c=p.className;
if(typeof c=="undefined")return;
while(!inClassList(c,targetClass)){
b=p
p=p.parentNode;
c=p.className
if(typeof c=="undefined")return;}
var matches=p.childNodes;
var len=matches.length;
var cancel=false;
for(var i=0;i<len;i++){
if(matches[i].nodeType==1&&matches[i]!=b){
if(isFalse(oEventScope.run(matches[i],e,oEventScope.extraInfo))){cancel=true;}}}
if(cancel){doDefaultAction(e,false);}}
function applyToThis(e,oEventScope){
var doDefault=oEventScope.run(this,e,oEventScope.extraInfo);
doDefaultAction(e,doDefault);}
function doDefaultAction(e,doDefault){
if(isFalse(doDefault)){YAHOO.util.Event.preventDefault(e);}}
function addClass(eElement,e,extraInfo){
if(extraInfo){if(typeof extraInfo!="string")return;}
else{return;}
extraInfo=replaceString(trimString(extraInfo),"*","");
extraInfo=replaceString(extraInfo,".","");
if(eElement.className.lastIndexOf(extraInfo)!=-1)return;
if(eElement.className.length>0){
eElement.className=trimString(eElement.className)+" "+extraInfo;}
else{
eElement.className=extraInfo;}}
function removeClass(eElement,e,extraInfo){
if(extraInfo){if(typeof extraInfo!="string")return;}
else{return;}
extraInfo=replaceString(trimString(extraInfo),"*","");
extraInfo=replaceString(extraInfo,".","");
if(eElement.className.lastIndexOf(extraInfo)==-1)return;
eElement.className=deleteString(eElement.className,extraInfo);}
function replaceClass(eElement,e,extraInfo){
if(extraInfo){
if(typeof extraInfo[0]!="string")return;
if(typeof extraInfo[1]!="string")return;}
else{return;}
extraInfo[0]=replaceString(trimString(extraInfo[0]),"*","");
extraInfo[0]=replaceString(extraInfo[0],".","");
extraInfo[1]=replaceString(trimString(extraInfo[1]),"*","");
extraInfo[1]=replaceString(extraInfo[1],".","");
var c=deleteString(eElement.className,extraInfo[0]);
c=deleteString(c,extraInfo[1]);
if(c.length>0){
eElement.className=trimString(c)+" "+extraInfo[1];}
else{
eElement.className=extraInfo[1];}}
function swapClasses(eElement,e,extraInfo){
if(extraInfo){
if(typeof extraInfo[0]!="string")return;
if(typeof extraInfo[1]!="string")return;}
else{return;}
extraInfo[0]=replaceString(trimString(extraInfo[0]),"*","");
extraInfo[0]=replaceString(extraInfo[0],".","");
extraInfo[1]=replaceString(trimString(extraInfo[1]),"*","");
extraInfo[1]=replaceString(extraInfo[1],".","");
if(eElement.className.lastIndexOf(extraInfo[0])!=-1){
eElement.className=replaceString(eElement.className,extraInfo[0],extraInfo[1])}
else{
if(eElement.className.lastIndexOf(extraInfo[1])!=-1){
eElement.className=replaceString(eElement.className,extraInfo[1],extraInfo[0])}
else{
if(eElement.className.length>0){
eElement.className=trimString(eElement.className)+" "+extraInfo[0];}
else{
eElement.className=extraInfo[0];}}}}
function toggleClass(eElement,e,extraInfo){
if(extraInfo){if(typeof extraInfo!="string")return;}
else{return;}
extraInfo=replaceString(trimString(extraInfo),"*","");
extraInfo=replaceString(extraInfo,".","");
if(eElement.className.lastIndexOf(extraInfo)!=-1){
eElement.className=deleteString(eElement.className,extraInfo);}
else{
if(eElement.className.length>0){
eElement.className=trimString(eElement.className)+" "+extraInfo;}
else{
eElement.className=extraInfo;}}}
function getElementsByClass(sHtmlClassName,eStartingNode,sHtmlTag){
var classElements=new Array();
if(eStartingNode==null)
eStartingNode=document;
if(sHtmlTag==null)
sHtmlTag='*';
var els=eStartingNode.getElementsByTagName(sHtmlTag);
var elsLen=els.length;
var pattern=new RegExp('(^|\\s)'+sHtmlClassName+'(\\s|$)');
for(i=0,j=0;i<elsLen;i++){
if(pattern.test(els[i].className)){
classElements[j]=els[i];
j++;}}
return classElements;}
function getElement(elementOrElementId){
if(typeof elementOrElementId=='string')
return document.getElementById(elementOrElementId);
else
return elementOrElementId;}
function toElementArray(){
var aElements=toElementArrayFromArray(arguments);
return removeDuplicatesFromArray(aElements);}
function toElementArrayFromArray(aAny){
var aElements=new Array();
var len=aAny.length;
for(var i=0;i<len;++i){
if(aAny[i]==null)continue;
if(aAny[i].constructor==Number)continue;
if(aAny[i].constructor==Date)continue;
if(aAny[i].constructor==Boolean)continue;
if(aAny[i].constructor==Function)continue;
if(aAny[i].constructor==Error)continue;
if(aAny[i].constructor==String){
var aTemp=toElementArrayFromString(aAny[i]);
if(aTemp.length>0)aElements=aElements.concat(aTemp);}
else{
if(aAny[i].constructor==Array){
aElements=aElements.concat(toElementArrayFromArray(aAny[i]));}
else{
aElements.push(aAny[i]);}}}
return aElements;}
function removeDuplicatesFromArray(aAny,bCompareNumStr,bCaseInsensitive){
var aResult=[];
if(aAny.constructor !=Array)return aResult;
var i=0;
var len=aAny.length;
var sTemp="";
if(!bCompareNumStr&&!bCaseInsensitive){
for(i=0;i<len;i++){
if(aAny[i]!=null){
for(var j=i+1;j<len;j++){
if(aAny[j]!=null&&aAny[i]===aAny[j]){
aAny[j]=null;}}}}}
else{
if(bCompareNumStr){
for(i=0;i<len;i++){
if(aAny[i]!=null){
if(bCaseInsensitive&&aAny[i].constructor==String){
sTemp=aAny[i].toLowerCase();
for(var j=i+1;j<len;j++){
if(aAny[j]!=null){
if(aAny[j].constructor==String){
if(sTemp==aAny[j].toLowerCase())aAny[j]=null;}
else{
if(sTemp==aAny[j])aAny[j]=null;}}}}
else{
for(var j=i+1;j<len;j++){
if(aAny[j]!=null&&aAny[i]==aAny[j]){
aAny[j]=null;}}}}}}
else{
for(i=0;i<len;i++){
if(aAny[i]!=null){
if(bCaseInsensitive&&aAny[i].constructor==String){
sTemp=aAny[i].toLowerCase();
for(var j=i+1;j<len;j++){
if(aAny[j]!=null){
if(aAny[j].constructor==String)
if(sTemp===aAny[j].toLowerCase())aAny[j]=null;
else
if(sTemp===aAny[j])aAny[j]=null;}}}
else{
for(var j=i+1;j<len;j++){
if(aAny[j]!=null&&aAny[i]===aAny[j]){
aAny[j]=null;}}}}}}}
for(i=0;i<len;i++){
if(aAny[i]!=null)aResult.push(aAny[i]);}
return aResult;}
function toElementArrayFromString(sIDs,bAllowDuplicates){
var aElements=new Array();
var count=-1;
if(sIDs==null)return aElements;
sIDs=sIDs.toString();
count=sIDs.indexOf(",");
if(count>-1){
count=sIDs.indexOf(" ");
if(count>-1){
var aTemp=sIDs.split(" ");
var sTemp=aTemp.join("");
var aIDs=sTemp.split(',');
return toElementArrayFromIdArray(aIDs,bAllowDuplicates);}
else{
var aIDs=sIDs.split(',');
return toElementArrayFromIdArray(aIDs,bAllowDuplicates);}}
else{
count=sIDs.indexOf(" ");
if(count>-1){
var aIDs=sIDs.split(' ');
return toElementArrayFromIdArray(aIDs,bAllowDuplicates);}
else{
var eElement=document.getElementById(sIDs);
if(eElement!=null)aElements.push(eElement);}}
return aElements;}
function toElementArrayFromIdArray(aIDs,bAllowDuplicates){
var aElements=[];
if(aIDs.constructor !=Array)return aElements;
var i=0;
var sTemp="";
var len=aIDs.length;
if(!bAllowDuplicates){
for(i=0;i<len;i++){
if(aIDs[i]!=null){
for(var j=i+1;j<len;j++){
if(aIDs[j]!=null&&aIDs[i]==aIDs[j]){
aIDs[j]=null;}}}}}
var eElement=null;
for(i=0;i<len;i++){
if(aIDs[i]!=null){
eElement=document.getElementById(aIDs[i]);
if(eElement!=null)aElements.push(eElement);}}
return aElements;}
function getStringBefore(sMain,sSearch){
try{
var lenSearch=sSearch.length
if(lenSearch==null||lenSearch==0)return null;
var lenMain=sMain.length
if(lenMain==null||lenMain==0)return null;
var foundOffset=sMain.indexOf(sSearch);}
catch(e){return null;}
if(foundOffset==-1)return null;
return sMain.substring(0,foundOffset);}
function getStringAfter(sMain,sSearch){
try{
var lenSearch=sSearch.length
if(lenSearch==null||lenSearch==0)return null;
var lenMain=sMain.length
if(lenMain==null||lenMain==0)return null;
var foundOffset=sMain.indexOf(sSearch);}
catch(e){return null;}
if(foundOffset==-1)return null;
return sMain.substring(foundOffset+lenSearch,lenMain);}
function insertString(sMain,nPosition,sInsert){
if(sMain==null&&sInsert==null)return null;
if(sMain==null){
if(sInsert.constructor==String)return sInsert;
else return null;}
if(sInsert==null){
if(sMain.constructor==String)return sMain;
else return null;}
try{
var lenMain=sMain.length;
if(lenMain==null||lenMain==0){
if(sInsert.constructor==String)return sInsert;
else{
if(sMain.constructor==String)return "";
else return null;}}
var lenInsert=sInsert.length;
if(lenInsert==null||lenInsert==0)return sMain;
if(typeof nPosition!="number")return sInsert+sMain;
if(nPosition<0)return sInsert+sMain;
if(nPosition>=lenMain)return sMain+sInsert;
var strBefore=sMain.substring(0,nPosition);
var strAfter=sMain.substring(nPosition,lenMain);
return strBefore+sInsert+strAfter;}
catch(e){
return sMain+sInsert;}}
function insertStringBefore(sMain,sSearch,sInsert){
try{
var lenMain=sMain.length
if(lenMain==null||lenMain==0)return null;
var lenSearch=sSearch.length
if(lenSearch==null||lenSearch==0)return sMain;
var lenInsert=sInsert.length
if(lenInsert==null||lenInsert==0)return sMain;
var foundOffset=sMain.indexOf(sSearch);}
catch(e){return sMain;}
if(foundOffset==-1)return sMain;
var strBefore=sMain.substring(0,foundOffset);
var strAfter=sMain.substring(foundOffset+lenSearch,lenMain);
return strBefore+sInsert+sSearch+strAfter;}
function insertStringAfter(sMain,sSearch,sInsert){
try{
var lenMain=sMain.length
if(lenMain==null||lenMain==0)return null;
var lenSearch=sSearch.length
if(lenSearch==null||lenSearch==0)return sMain;
var lenInsert=sInsert.length
if(lenInsert==null||lenInsert==0)return sMain;
var foundOffset=sMain.indexOf(sSearch);}
catch(e){return sMain;}
if(foundOffset==-1)return sMain;
var strBefore=sMain.substring(0,foundOffset);
var strAfter=sMain.substring(foundOffset+lenSearch,lenMain);
return strBefore+sSearch+sInsert+strAfter;}
function replaceString(sMain,sSearch,sReplace){
try{
var aTemp=sMain.split(sSearch);
return aTemp.join(sReplace);}
catch(e){return sMain;}}
function deleteString(sMain,sSearch){
try{
var aTemp=sMain.split(sSearch);
return aTemp.join("");}
catch(e){return sMain;}}
function trimString(sMain){
try{
if(sMain==null)return null;
sMain=sMain.toString();
var lenMain=sMain.length
if(lenMain==null||lenMain==0)return "";
var firstChar=0;
var nChar=sMain.charCodeAt(firstChar);
while(nChar<33){
firstChar+=1;
if(firstChar>lenMain)return "";
nChar=sMain.charCodeAt(firstChar);}
var lastChar=lenMain-1;
var nChar=sMain.charCodeAt(lastChar);
while(nChar<33){
lastChar-=1;
if(lastChar<0)return "";
nChar=sMain.charCodeAt(lastChar);}
lastChar+=1;
return sMain.substring(firstChar,lastChar);}
catch(e){return sMain;}}
function inClassList(sClassList,sClass){
try{
var pattern=new RegExp('(^|\\s)'+trimString(sClass)+'(\\s|$)');
if(pattern.test(sClassList)){return true;}}
catch(e){return false;}
return false;}
function inList(sList,sItem,sDelimiter,bCaseSensitive,bNoTrim){
try{
var aTemp=sList.split(sDelimiter);
len=aTemp.length;
if(bNoTrim){
if(bCaseSensitive){
for(var i=0;i<len;i++){if(aTemp[i]==sItem)return true;}}
else{
var sTemp=sItem.toLowerCase();
for(var i=0;i<len;i++){if(aTemp[i].toLowerCase()==sTemp)return true;}}}
else{
sItem=trimString(sItem)
if(bCaseSensitive){
for(var i=0;i<len;i++){if(trimString(aTemp[i])==sItem)return true;}}
else{
var sTemp=sItem.toLowerCase();
for(var i=0;i<len;i++){if(trimString(aTemp[i]).toLowerCase()==sTemp)return true;}}}}
catch(e){return false;}
return false;}
function isFalse(val){
if(val){if(val.constructor !=Boolean){return false;}}
if(val==false){return true;}
return false;}
function isTrue(val){
if(val){if(val.constructor !=Boolean){return false;}}
if(val==true){return true;}
return false;}
function showElement(eElement){
eElement.style.visibility='visible';}
function hideElement(eElement){
eElement.style.visibility='hidden';}
function toggleVisibility(eElement){
eElement.style.visibility=(eElement.style.visibility!='hidden'?'hidden':'visible');}
function displayElement(eElement){
eElement.style.display='';}
function undisplayElement(eElement){
eElement.style.display='none';}
function toggleDisplay(eElement){
eElement.style.display=(eElement.style.display!='none'?'none':'');}
function debugWrite(){
var newElement=document.createElement("li");
var len=arguments.length;
for(var i=0;i<len;i++){
var newText=document.createTextNode(debugToString(arguments[i]));
newElement.appendChild(newText);}
document.body.appendChild(newElement);}
function debugToString(anyVar,maxContentLength){
if(anyVar==null)return 'null';
if(anyVar.constructor==String)return anyVar;
if(anyVar.constructor==Number)return anyVar.toString();
if(anyVar.constructor==Array)return 'Array('+anyVar.valueOf()+')';
if(anyVar.constructor==Date)return '#'+anyVar.toGMTString()+'#';
if(anyVar.constructor==Boolean){if(anyVar)return 'true';else return 'false';}
if(anyVar.constructor==Function)return anyVar.valueOf();
if(anyVar.constructor==Error)return "ERROR "+anyVar.number+", "+anyVar.name+": "+anyVar.description+"; LINE: "+anyVar.lineNumber+"; FILENAME: "+anyVar.fileName+"; MESSAGE: "+anyVar.message;
if(!anyVar.tagName)return anyVar.toString();
var tag=anyVar.tagName.toLowerCase()
if(typeof maxContentLength=="number"){
var content=anyVar.innerHTML;
var len=content.length;
var content=content.substring(0,maxContentLength);
if(len>maxContentLength)content=content+"...";}
else{
var content=anyVar.innerHTML}
return '<'+tag+' id="'+anyVar.id+'" class="'+anyVar.className+'">'+content+'</'+tag+'>';}

