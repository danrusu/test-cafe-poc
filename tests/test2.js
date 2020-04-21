const { Selector } = require('testcafe');

fixture('Fixture 2').page('http://qatools.ro/calculate/appApi.html');

test('Test 2', async t => {
  
    const location = await t.eval(() => window.location);

    await t.expect(location.pathname).eql('/calculate/appApi.html');
});
