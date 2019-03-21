function NoteDouble() {
  this.text = 'test note'
};

function NoteListDouble() {
  this._notes = []
}

NoteListDouble.prototype.addNote = function (note) {
  noteDouble = new NoteDouble()
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
    assert.isEqual(document.getElementById('app').innerHTML, "<ul><li><div>test note</div></li></ul>" )
    })
});
