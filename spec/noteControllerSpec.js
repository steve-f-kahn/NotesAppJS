function NoteDouble() {
  this.text = 'test note'
};


it("app div has not text on load", function() {
  var noteController = new NoteController()
  noteController._setup()
  console.log(document.getElementById('app'))
  assert.isEqual(document.getElementById('app').child, )
});
