const { Selector } = require('testcafe');

fixture('Fixture 1').page('http://devexpress.github.io/testcafe/example');

test('Test 1', async t => {        
    await t
      .typeText('#developer-name', 'John Smith')
      .click('#submit-button')
      .expect(Selector('#article-header').innerText)
      .eql('Thank you, John Smith!');
});
