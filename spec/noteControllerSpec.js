function NoteDouble() {
  this.text = 'test note'
};


it("app div has no text on load", function() {
  window.addEventListener('load', function(){
    var noteController = new NoteController()
    noteController._setup()
    assert.isEqual(document.getElementById('app').innerHTML, "<ul></ul>" )
    })
});
