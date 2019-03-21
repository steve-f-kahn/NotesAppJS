(function(exports){
  function NoteController(noteList){
    this.noteList = noteList
    console.log(this.noteList)
    this.noteList.addNote(new Note('Favourite drink: seltzer'))
    this._setup
  }

  NoteController.prototype = {
    _setup: function(){
        // var note = new Note("This is great")
        var noteListView = new NoteListView()
        // noteListView.list.addNote(note)
        document.getElementById("app").innerHTML = noteListView.format()
      }

    }
exports.NoteController = NoteController
})(this);
