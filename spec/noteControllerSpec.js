function NoteDouble() {
  this.text = 'test note'
};

function NoteListDouble() {
  this._notes = []
}

NoteListDouble.prototype.addNote = function (note) {
  noteDouble = new NoteDouble()
  noteDouble.id = 0
  this._notes.push(noteDouble)
}

it("is created with a default note", function(){
  noteListDouble = new NoteListDouble()
  noteController = new NoteController(noteListDouble)
  assert.isEqual(noteController.noteList._notes[0].text, 'test note')
})

it("app div has no text on load", function() {
  window.addEventListener('load', function(){
    noteListDouble2 = new NoteListDouble()
    var noteController = new NoteController(noteListDouble2)
    noteController._setup()
    assert.isEqual(document.getElementById('app').innerHTML, "<ul><li><a id=\"note0\" href=\"#notes/0\"><div>test note</div></a></li></ul>" )
    })
});
it("sets up and then clicks on link which takes you to new location",function(){
  noteListDouble3 = new NoteListDouble()
  var noteController = new NoteController(noteListDouble3)
  noteController._setup()
  noteController.listen()
  document.getElementById('note0').click()
  assert.isEqual(window.location.hash.split('#')[1],"notes/0")
})
