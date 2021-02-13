

export default () => {

    let words = require('an-array-of-english-words')
    let text = '';
    for (var i = 0; i < 50; i++){
        let word = words[Math.floor(Math.random()*words.length)];
        if(word.length < 6){
            text += word + " "
        }
        else {
            i--;
        } 
    }

    return text.slice(0, -1);
}