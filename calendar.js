var noteStoreURL = 'https://sandbox.evernote.com/shard/s1/notestore';
var authenticationToken = 'S=s1:U=91cf0:E=158eaae2c6d:C=15192fd0068:P=1cd:A=en-devtoken:V=2:H=8351a9a250308abcb5812b3a08e939e8';
var noteStoreTransport = new Thrift.BinaryHttpTransport(noteStoreURL);
var noteStoreProtocol = new Thrift.BinaryProtocol(noteStoreTransport);
var noteStore = new NoteStoreClient(noteStoreProtocol);

noteStore.findNotes(authenticationToken, new NoteFilter({}), 0, 100, function (noteList) {
  for (var i = 0; i < noteList.notes.length; i++) {
    console.log(noteList.notes[i].attributes.reminderTime);
  };
}, function onerror(error) {
     console.log(error);
});