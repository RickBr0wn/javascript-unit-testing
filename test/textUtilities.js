var expect = require('chai').expect;

function titleCase(title){
    let connectionWords = ["of", "and", "from", "in", "on", "a", "the"];
    let words = title.split(' ');
    let titleCaseWords = words.map(function(word, index){
        if(connectionWords.includes(word.toLowerCase())
        && index != 0)
        {
            return word.toLowerCase();
        }else{
            return word[0].toUpperCase() + word.substring(1).toLowerCase();
        }
        
    });
    return titleCaseWords.join(' ');
}

expect(titleCase('the towers of the city of london')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertical')).to.equal('Vertical');

expect(titleCase('the towers of the city of london')).to.equal('The Towers of the City of London');