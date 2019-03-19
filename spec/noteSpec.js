var note = new Note('I am a Note!');

var note2 = new Note('Hello');

it("check to see if 'I am a Note!' is actually in there", function () {
  assert.isEqual(note.text(),'I am a Note!')
});

it('check to see if Hello is in note2', function (){
  assert.isEqual(note2.text(),'Hello')
});
