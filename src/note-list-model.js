(function(exports) {

  function NoteList() {

    this._notes = [];

  }

  NoteList.prototype.notes = function() {
    return this._notes;
  }

  NoteList.prototype.addNote = function (text) {
    this._notes.push(text)
  };

  exports.NoteList = NoteList;

})(this);
