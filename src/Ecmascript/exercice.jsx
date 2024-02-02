
const findLongestWord = (words) => {
    let [firstWord, ...restOfWords] = words;
  
    let wordsWithLength = [firstWord, ...restOfWords].map(word => ({ mot: word, longueur: word.length }));
  
    let longestWordObject = wordsWithLength.reduce((prev, current) => (prev.longueur > current.longueur) ? prev : current);
  
    return { mot: longestWordObject.mot, longueur: longestWordObject.longueur };
  }

  
 

  export default findLongestWord;