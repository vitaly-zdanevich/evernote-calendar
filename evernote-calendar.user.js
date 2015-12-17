// ==UserScript==
// @name        evernote-calendar
// @namespace   zdanevich.vitaly@ya.ru
// @match       https://sandbox.evernote.com/Home.action*
// @version     1
// @grant       none
// @require     evernote-sdk-minified.js
// ==/UserScript==

setTimeout(function(){
  addButton();
  initCalendar();
  $(document).keydown(function(e){
    if (e.key == 'Escape') showCalendar();
  })
}, 15000);

function addButton() {
    // replace user's avatar with calendar button
    var date = new Date().getDate();
    $('.GNTMVRYDXB')[0].innerHTML = '<div id="calendar-button">' + date + '</div>';
    $('#calendar-button').click(function() {
      showCalendar();
    })
}

function initCalendar() {
  $('.gwt-DatePicker').clone().appendTo('html');
  $('.gwt-DatePicker')[1].id = 'calendar';
  $('#calendar').css({position:'absolute', top:'-24px', background:'#000', 'z-index':999, height:'100%', display:'none'});
  $('#calendar').find('.datePickerDays').css({width:'100%', height:'100%'});
  $('#calendar').find('colgroup').css({height:'100%'});
}

function showCalendar() {
  $('#calendar').toggle();

  var noteStoreURL = 'https://sandbox.evernote.com/shard/s1/notestore';
  var authenticationToken = 'S=s1:U=91cf0:E=158eaae2c6d:C=15192fd0068:P=1cd:A=en-devtoken:V=2:H=8351a9a250308abcb5812b3a08e939e8';
  var noteStoreTransport = new Thrift.BinaryHttpTransport(noteStoreURL);
  var noteStoreProtocol = new Thrift.BinaryProtocol(noteStoreTransport);
  var noteStore = new NoteStoreClient(noteStoreProtocol);

  noteStore.findNotes(authenticationToken, new NoteFilter({}), 0, 100, function (noteList) {
    for (var i = 0; i < noteList.notes.length; i++) {
      var dateReminder = new Date(noteList.notes[i].attributes.reminderTime).getDate();
      $('#calendar').find('.datePickerDay').each(function() {
          var dayCalendar = $(this).text();
          if (dayCalendar == dateReminder) {
            $(this).parent().css({background:'darkgreen'});
            var guid = noteList.notes[i].guid;
            $(this).parent().html('<a href="#n='+guid+'&ses=4&sh=2&sds=5" class="calendar-event">'+noteList.notes[i].title+'</a>');
            $('.calendar-event').click(function(){
              $('#calendar').toggle();
            })
            console.log(noteList.notes[i]);
          }
      });
    };
  }, function onerror(error) {
       console.log(error);
  });
}
