const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, list) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if (!duplicateNote) {
        notes.push({
            title: title,
            list, list
        })
        saveNotes(notes)
        console.log(chalk.green('New note added!'))
    } else {
        console.log('Note title taken!')
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const keepNotes = notes.filter((note) => note.title !== title)
    if (notes.length > keepNotes.length) {
        console.log(chalk.green('Note Removed!'))
        saveNotes(keepNotes)
    } else {
        console.log(chalk.red.inverse('no Note Found!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach((item) => {
        console.log(chalk.green.bold(item.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const findNote = notes.find((item) => item.title === title)
    if (findNote) {
        console.log(chalk.inverse(findNote.title))
        console.log(findNote.list)
    } else {
        console.log(chalk.red.inverse('no Note found!'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes) 
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}