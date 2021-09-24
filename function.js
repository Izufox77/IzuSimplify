//Imports
const opn = require('opn');

//Functions

function openLink(link){
    opn(link);
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