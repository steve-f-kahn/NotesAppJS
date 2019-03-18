var note = new Note('I am a Note!');

var note2 = new Note('Hello');

assert.isEqual(note.text(),'I am a Note!');

assert.isEqual(note2.text(),'Hello');

assert.isEqual(note.text(),'I am a Note!');