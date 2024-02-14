import fs from "fs";
import chalk from "chalk";

const addNotes = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => {
  //   return note.title === title;
  // });

  //here 'find" is better than "filter"
  //filter returns an array of notes, while as find returns the first duplicate note and stops processing further
  /** 
    const duplicateNotes = notes.filter((note) => note.title === title);
      if (duplicateNotes.length === 0) {
      notes.push({
        title,
        body,
      });

      saveNotes(notes);

      console.log(chalk.bgGreen("Notes added successfully"));
    } else {
      console.log(chalk.bgRed("Notes title already taken"));
    }
  */

  const duplicateNote = notes.find((note) => note.title === title);
  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("Note added successfully"));
  } else {
    console.log(chalk.bgRed("Note title already taken"));
  }
};

function loadNotes() {
  try {
    const bufferNotes = fs.readFileSync("notes.json");
    const jsonNotes = bufferNotes.toString();
    const notesObject = JSON.parse(jsonNotes);
    return notesObject;
  } catch (err) {
    return [];
  }
}

function saveNotes(notes) {
  const jsonNotes = JSON.stringify(notes);
  fs.writeFileSync("notes.json", jsonNotes);
}

const removeNotes = (title) => {
  // console.log("Notes to be removed: ", title);
  const notes = loadNotes();

  // const notesToKeep = notes.filter((note) => {
  //   return note.title !== title;
  // });

  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgGreen("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgGreen("Your Notes!"));
  notes.forEach((note) => {
    console.log(chalk.bgBlue(note.title));
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const targetNote = notes.find((note) => note.title === title); //returns undefined if no note found for the given title

  if (!targetNote) {
    console.log(chalk.bgRed("No note found!"));
  } else {
    console.log(chalk.bgGreen(targetNote.title));
    console.log(targetNote.body);
  }
};

export { addNotes, removeNotes, listNotes, readNote };
