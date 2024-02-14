import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addNotes, removeNotes, listNotes, readNote } from "./notes.js";

const yarg = yargs(hideBin(process.argv));

yarg.command({
  command: "add",
  describe: "Add a new note",
  builder: (a) => {
    a.option("title", {
      type: "string",
      demandOption: true,
      describe: "Notes Title",
    }).option("body", {
      type: "string",
      demandOption: true,
      describe: "Note Description",
    });
  },
  handler: (b) => {
    addNotes(b.title, b.body);
  },
});

yarg.command({
  command: "remove",
  describe: "Remove an existing note",
  builder: (a) => {
    a.option("title", {
      type: "string",
      demandOption: true,
      describe: "Notes Title",
    });
  },
  handler: (b) => {
    removeNotes(b.title);
  },
});

yarg.command({
  command: "list",
  describe: "List all your notes",
  handler: () => listNotes(),
});

yarg.command({
  command: "read",
  describe: "Read the contents of a note",
  builder: (a) => {
    a.option("title", {
      type: "string",
      demandOption: true,
      describe: "Note title",
    });
  },
  handler: (b) => {
    readNote(b.title);
  },
});

yarg.parse();
