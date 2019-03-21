(function(exports) {

  function NoteList() {

    this._notes = [];
    this.n = 0
  }

  NoteList.prototype.notes = function() {
    return this._notes;
  }

  NoteList.prototype.addNote = function (text) {
    text.id = this.n
    this._notes.push(text)
    this.n += 1
  };

  exports.NoteList = NoteList;

})(this);
