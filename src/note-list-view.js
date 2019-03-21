(function(exports) {

function NoteListView(noteList = new NoteList()){
  this.list = noteList
};

NoteListView.prototype.format = function () {
  var text = new String()
  this.list._notes.forEach(function(note){
    text +=("<li><a id='note"
          + note.id
          + "' href='#notes/"
          + note.id 
          + "'><div>"
          + note.text.substring(0, 20)
          + "</div></a></li>")
  })
  return "<ul>" + text + "</ul>"
};

exports.NoteListView = NoteListView;

})(this);
