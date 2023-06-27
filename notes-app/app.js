const fs = require('fs')

//fs.writeFileSync('notes.txt','Created by Node.js')

// Challenge : to append a message to notes.txt.
fs.appendFileSync('notes.txt', 'data to append');

