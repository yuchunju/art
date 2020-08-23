// JavaScript Document
function setCookie(name,value)
{
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}
 
//获取cookie
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
    else
    return null;
}

var LanguageList = {
  "EN" : "English",
  "CN" : "Chinese",
  "IT" : "Italian"
};

//languages Objects
var WORDS_EN = {
  "text1" : "Home",
  "text2" : "Me",
  "text3" : "Works",
  "text4" : "CV",
  "text5" : "Contact"

};

var WORDS_CN = {
 "text1" : "主页",
  "text2" : "我",
  "text3" : "作品",
  "text4" : "简历",
  "text5" : "联系我"
};

var WORDS_IT = {
 "text1" : "Home",
  "text2" : "Me",
  "text3" : "Lavori",
  "text4" : "cv",
  "text5" : "Contatti"
};



window.onload = initialize;

function initialize() {
	  var lan = getCookie('LanguageList');
  var $dropdown = $("#country_select");    
  $.each(LanguageList, function(key, value) {
    $dropdown.
      append($("<option/>").
      val(key).
      text(value));
    });
    
  loadsLanguage("EN");



}

function loadsLanguage(lang){
  /*fills all the span tags with class=lang pattern*/ 
  $('span[class^="lang"]').each(function(){
    var LangVar = (this.className).replace('lang-','');
    var Text = window["WORDS_"+lang][LangVar];
    $(this).text(Text);        
  });
}


