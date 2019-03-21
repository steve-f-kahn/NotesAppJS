function NoteDouble(text = 'test note') {
  this.text = text
};

it("an empty string is outputted when nothing is in the notelist", function (){
  var noteListView = new NoteListView();
  assert.isEqual(noteListView.format(), "<ul></ul>")
});

it("produces a correctly formatted output", function (){
  var noteDouble = new NoteDouble();
  var noteListView = new NoteListView();
  noteListView.list.addNote(noteDouble)
  assert.isEqual(noteListView.format(), "<ul><li><a id='note0' href='#notes/0'><div>test note</div></a></li></ul>")
});

it("produces a correctly formatted output", function (){
  var noteListView = new NoteListView();
  var noteDouble = new NoteDouble();
  var noteDouble2 = new NoteDouble();

  noteListView.list.addNote(noteDouble)
  noteListView.list.addNote(noteDouble2)
  text = "<ul><li><a id='note0' href='#notes/0'><div>test note</div></a></li><li><a id='note1' href='#notes/1'><div>test note</div></a></li></ul>"
  assert.isEqual(noteListView.format(), text)
});

it("Only shows the first 20 characters of a note", function(){
  noteListView = new NoteListView()
  noteListView.list.addNote(new NoteDouble("James is really good at canoe polo and got promoted"))
  assert.isEqual(noteListView.format(),"<ul><li><a id='note0' href='#notes/0'><div>James is really good</div></a></li></ul>")
})
