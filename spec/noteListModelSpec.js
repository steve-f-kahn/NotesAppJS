var noteList = new NoteList();


it("adds a new note", function () {
  assert.isEqual(note.text(),'I am a Note!')
});

it("check to see if 'I am a Note!' is actually in there", function() {
  noteList.addNote("This is a new one")
  assert.includedInArray(noteList.notes(),'This is a new one')
});
