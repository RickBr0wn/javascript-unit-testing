var expect = require('chai').expect;

function titleCase(title){
    let words = title.split(' ');
    let titleCaseWords = words.map(function(word){
        return word[0].toUpperCase() + word.substring(1);
    });

    return titleCaseWords.join(' ');
}

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertical')).to.equal('Vertical');

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');