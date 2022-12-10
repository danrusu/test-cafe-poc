import * as percySnapshot from '@percy/testcafe';

fixture('Fixture 2').page('http://qatools.ro/calculate/appApi.html');

test.meta({
  id: 'GLOBAL15-T23321',
  regression: 'true',
  canvas: 'true',
  visual: 'true',
  scenario: 'DEMO',
})('Test 2', async t => {
  const location = await t.eval(() => window.location);

  await t.expect(location.pathname).eql('/calculate/appApi.html');

  await percySnapshot.default(t, 'Integrate with Percy');
});
