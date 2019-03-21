(function(exports) {

function NoteListView(noteList = new NoteList()){
  this.list = noteList
};

NoteListView.prototype.format = function () {
  var text = new String()
  this.list._notes.forEach(function(note){
    text +=("<li><div>" + note.text + "</div></li>")
  })
  return "<ul>" + text + "</ul>"
};

exports.NoteListView = NoteListView;

})(this);
