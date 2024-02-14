# node-notes-cli
Node Notes CLI is a command-line application built with Node.js that allows you to manage notes conveniently using flags through the terminal. You can create, read, list, and remove notes, and they will be saved in your computer's file system.

## Features

- **Add a Note:** Create a new note with a title and content.
- **Read a Note:** View the content of a specific note.
- **List All Notes:** Display a list of all saved notes.
- **Remove a Note:** Delete a note by its title.

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.

## Usage

- To add a note, use the `add` command with `--title` and `--body` flags.   
node app.js add --title="Note Title" --body="Note Content"   

- To read a note, use the `read` command with `--title` flag.   
node app.js read --title="Note Title"   

- To list all notes, use the `list` command.   
node app.js list   

- To remove a note, use the `remove` command with `--title` flag.   
node app.js remove --title="Note Title"   

## Example   

$ node app.js add --title="Shopping List" --body="1. Milk\n2. Eggs\n3. Bread"   
Note added successfully!   

$ node app.js list    
Your Notes:   
Shopping List   

$ node app.js read --title="Shopping List"   
Title: Shopping List   
1. Milk   
2. Eggs   
3. Bread   

$ node app.js remove --title="Shopping List"   
Note removed successfully!   
