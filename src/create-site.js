const fs = require('fs');

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