// JavaScript Document


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


