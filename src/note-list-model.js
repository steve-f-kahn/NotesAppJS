(function(exports) {

  function NoteList() {

    this._notes = ["I am in your array"];

  }

  NoteList.prototype.notes = function() {
    return this._notes;
  }

  exports.NoteList = NoteList;

})(this);
