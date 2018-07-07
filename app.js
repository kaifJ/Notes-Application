const yargs = require('yargs');
const notes = require('./notes');
const fs = require('fs');

var titleObject = {
  describe:'Title of the note',
  demand:true,
  alias:'t'
};

var bodyObject = {
  describe:'Body of the note',
  demand:true,
  alias:'b'
};

var args = yargs
          .command('add','Add a new note',{
          title:titleObject,
          body:bodyObject
          })
          .command('remove','remove a note',{
            title:titleObject
          })
          .help()
          .argv;

var command = args._[0];

if(command === 'add'){
  var note = notes.add(args.t,args.b);

  if(note){
    console.log(`${note.title} note added to the Notes.`);
  }
  else{
    console.log('Sorry Note title already taken');
  }
}
else if(command === 'remove'){
  var result = notes.remove(args.title);
  var message = result ? 'Note removed':'Note not found';
  console.log(message);

}
else if(command === 'list'){
  var result = notes.list();
  console.log(JSON.stringify(result,undefined,2));
}

else if(command === 'read'){

}
else{
  console.log('Sorry ! Invalid command');
}
