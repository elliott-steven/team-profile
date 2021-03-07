//required install
const fs = require('fs');

//this will write the output html
const writeFile = fileContent => {

    return new Promise((resolve,reject) => {

        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                message: 'Success'
            })
        })
    })
}

module.exports = writeFile