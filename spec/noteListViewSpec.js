function NoteDouble() {
  this.text = 'test note'
};

NoteDouble.prototype.text = function() {
  return this.text
};

it("an empty string is outputted when nothing is in the notelist", function (){
  var noteListView = new NoteListView();
  assert.isEqual(noteListView.format(), "<ul></ul>")
});

it("produces a correctly formatted output", function (){
  var noteDouble = new NoteDouble();
  var noteListView = new NoteListView();
  noteListView.list.addNote(noteDouble)
  assert.isEqual(noteListView.format(), "<ul><li><div>test note</div></li></ul>")
});

it("produces a correctly formatted output", function (){
  var noteListView = new NoteListView();
  noteListView.list.addNote("Text for formatting")
  noteListView.list.addNote("Text for formatting 2")
  text = "<ul><li><div>Text for formatting</div></li><li><div>Text for formatting 2</div></li></ul>"
  assert.isEqual(noteListView.format(), text)
});
