const notesJs = require('./note.js')
const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')
// run > node app.js add
// run > node app.js add --title="food" --list="eggs"
yargs.command({
    command: 'add',
    describe: 'Add a new node',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        list: {
            describe: 'Note list',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesJs.addNote(argv.title, argv.list)
    }
})
yargs.command({
    command: 'remove',
    describe: 'remove a node',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesJs.removeNote(argv.title)
    }
})
yargs.command({
    command: 'listNotes',
    describe: 'listing notes',
    handler() {
        notesJs.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'finding notes',
    builder: {
        title: {
            describe: 'Find note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesJs.readNote(argv.title)
    }
})

yargs.parse()