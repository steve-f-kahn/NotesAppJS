(function(exports){
  function NoteController(noteList = new NoteList){
    this.noteList = noteList
    this.noteList.addNote(new Note('Favourite drink: seltzer'))
    this._setup
  }

  NoteController.prototype = {
    _setup: function(){
        // var note = new Note("This is great")
        var noteListView = new NoteListView(this.noteList)
        // noteListView.list.addNote(note)
        document.getElementById("app").innerHTML = noteListView.format()
      },
    listen: function() {
      window.addEventListener('hashchange', function(){
        var div = document.createElement('div')
        var text = document.createTextNode("Is this working")
        div.append(text)
        document.getElementById("app").append(div)
        console.log("hi")
      })
    }

    }
exports.NoteController = NoteController
})(this);
