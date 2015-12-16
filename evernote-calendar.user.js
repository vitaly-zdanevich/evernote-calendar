// ==UserScript==
// @name        evernote-calendar
// @namespace   zdanevich.vitaly@ya.ru
// @match       https://sandbox.evernote.com/Home.action*
// @version     1
// @grant       none
// ==/UserScript==

function addButton() {
    // replace user's avatar with calendar button
    var date = new Date().getDate();
    $('.GNTMVRYDXB')[0].innerHTML = '<div id="calendar-button">' + date + '</div>';
}
setTimeout(function(){
  addButton();
  $('#calendar-button').click(function() {
    showCalendar();
  });
  $('.gwt-DatePicker').clone().appendTo('html');
  $('.gwt-DatePicker')[1].id = 'calendar';
}, 10000);

function showCalendar() {
  $('#calendar').css({position:'absolute', top:0, background:'#000', 'z-index':999, height:'100%'});
  $('#calendar').find('.datePickerDays').css({width:'100%', height:'100%'});
  $('#calendar').find('colgroup').css({height:'100%'});
}

// .datePickerDay: increase width & height to fullscreen
