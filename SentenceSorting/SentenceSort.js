/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let wordsArr = s.split(" ");
    let wordInd = [];
    let words = [];
    wordsArr.forEach(el => {
        wordInd.push(el.slice(-1));
        words.push(el.slice(0, -1));
    })
    let sortedWordArr = new Array(words.length).fill("");
    for(let i=1; i<=words.length; i++) {
        sortedWordArr[wordInd[i-1]] = words[i-1];
    }
    let sentence = sortedWordArr.join(" ");
    sentence = sentence.slice(1);
    return sentence;
};
