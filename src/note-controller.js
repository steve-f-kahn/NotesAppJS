(function(exports){
  function NoteController(){
    this._setup
  }

  NoteController.prototype = {
    _setup: function(){
      window.addEventListener('load', function() {
        var note = new Note("This is great")
        var noteListView = new NoteListView()
        noteListView.list.addNote(note)
        document.getElementById("app").innerHTML = noteListView.format()
      });

    }
  }
exports.NoteController = NoteController
})(this);
