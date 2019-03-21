var noteList = new NoteList();
var noteList2 = new NoteList();
var noteList3 = new NoteList();
var noteList4 = new NoteList();

function NoteDouble() {
  this.text = 'test note'
};

it("check to see if 'I am a Note!' is actually in there", function() {
  noteList.addNote("This is a new one")
  assert.includedInArray(noteList.notes(),'This is a new one')
});

it('increments the id number when adding a note to the list', function(){
  noteDouble = new NoteDouble
  noteList2.addNote(noteDouble)
  assert.isEqual(noteList2.n, 1)
})

it('further increments the id number when adding a note to the list', function(){
for (i=0;i<5;i++){
  noteList3.addNote(noteDouble)
}
  assert.isEqual(noteList3.n, 5)
})

it('the note is given an id after being added to the list', function(){
  noteDouble = new NoteDouble
  noteList4.addNote(noteDouble)
  assert.isEqual(noteDouble.id, 0)
})
