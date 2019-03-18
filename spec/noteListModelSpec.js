var noteList = new NoteList();

assert.includedInArray("I am in your array", noteList.notes());

assert.isEqual(noteList.notes(), ["I am in your array", "So am I"]);
