import { sum } from './lib.js'
import fs from 'node:fs'

// - `fs.copyFile()`: copies a file
// - `fs.mkdir()`: create a new folder
// - `fs.readFile()`: read the content of a file
// - `fs.rename()`: rename a file or folder
// - `fs.rmdir()`: remove a folder

console.log('test')
console.log(sum(1, 2))

fs.rename('file.txt', 'newName.txt', (err) => {
    if (err) {
        console.error(err)
        return
    }
})