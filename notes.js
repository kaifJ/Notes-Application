const fs = require('fs');

var fetchNotes = () => {
  try{
    var stringNotes = fs.readFileSync('notes-data.json');
    return JSON.parse(stringNotes);
  }
  catch(e){
    return []
  }
}

var writeNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var add = (title,body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  }

  var duplicate = notes.filter((note) => note.title === title);

  if(duplicate.length === 0){
    notes.push(note);
    writeNotes(notes);
    return note;
  }

}

var remove = (title) => {
  var notes = fetchNotes();
  var note = {title};

  var requiredNotes = notes.filter((note) =>note.title !== title );

  writeNotes(requiredNotes);
  return(requiredNotes.length !== notes.length);
}

var list = () => {
  return fetchNotes();
}


module.exports = {
  add,
  remove,
  list
};
