

var pLen = document.getElementsByTagName("p").length;

var h1Len = document.getElementsByTagName("h1").length;

var h2Len = document.getElementsByTagName("h2").length;

var h3Len = document.getElementsByTagName("h3").length;

var h4Len = document.getElementsByTagName("h4").length;

var h5Len = document.getElementsByTagName("h5").length;

var spanLen = document.getElementsByTagName("span").length;

var liLen = document.getElementsByTagName("li").length;

var divLen = document.getElementsByTagName("div").length;

var bLen = document.getElementsByTagName("b").length;


var curses = ["crap ","heck","heck ","crap","fuck","fuck "];


function search(type,len){


for (var i = 0; i < len; i++) {
 
var curEl = document.getElementsByTagName(type)[i].innerHTML;  //PLEASE WORK
if(curEl.tagName !== "img"){
var curEle = curEl.toLowerCase();
var outCurEle = document.getElementsByTagName(type)[i]



for(var z = 0; z < curses.length; z++){
  var curCurse = curses[z];
  
 
  
  if(curEle.includes(curCurse)){ //.innerHTML
    console.log("Substring Bad Word Found");
    //TEST
    if(outCurEle.hasAttribute("href")){
	var curHref = outCurEle.href;
	outCurEle.innerHTML = curEle.replace(curCurse,"****");
	outCurEle.href = curHref;

    }
    //END TEST
    else{
    console.log(outCurEle);
    outCurEle.innerHTML = curEle.replace(curCurse,"****") //.innerHTML;
    }
    

  
 }
}

}
}
}


search("p",pLen);

search("h1",h1Len);

search("h2",h2Len);

search("h3",h3Len);

search("h4",h4Len);

search("h5",h5Len);

search("span",spanLen);

search("li",liLen);

//search("div",divLen);

search("b",bLen);
//search("a",aLen);
