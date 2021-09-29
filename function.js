//Imports
const opn = require('opn');
const fs = require('fs');

//Functions

function openLink(link){
    opn(link);
}

function fileList(folder, Log){
    fs.readdir(folder, (err, files) => {
        files.forEach(fileListString => {
            let fileListResult = fileListString;
            if(Log == true){
                console.log(fileListResult)
            }
            exports.fileListResult = fileListResult;
        });
    });
}

function fileCreate(name, content){
    fs.writeFile(name, content, function (err) {
        if (err) throw err;
    });
}

function createCharacters(length){
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   exports.resultCharacters = result;
   return result;
}

exports.openLink = openLink;
exports.createCharacters = createCharacters;
exports.fileList = fileList;
exports.fileCreate = fileCreate;
