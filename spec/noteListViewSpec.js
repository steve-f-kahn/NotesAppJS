it("an empty string is outputted when nothing is in the notelist", function (){
  var noteListView = new NoteListView();
  assert.isEqual(noteListView.format(), "<ul></ul>")
});

it("produces a correctly formatted output", function (){
  var noteListView = new NoteListView();
  noteListView.list.addNote("Text for formatting")
  assert.isEqual(noteListView.format(), "<ul><li><div>Text for formatting</div></li></ul>")
});
