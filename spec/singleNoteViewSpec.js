function NoteDouble() {
  this.text = 'test note'
};

it("Returns an html string of the note", function(){
  singleNoteView = new SingleNoteView(new NoteDouble())
  assert.isEqual(singleNoteView.format(), "<div>test note</div>")
})
