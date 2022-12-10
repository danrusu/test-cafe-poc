const { Selector } = require('testcafe');

fixture('ExpectOk').page('http://qatools.ro');

test('shoud pass 1', async t => {
  await expectOk(t, Selector('h1').visible, 'h1 is visible');
});

test('shoud pass 2', async t => {
  await expectOk(t, await Selector('h1').visible, 'h1 is visible');
});

test('should fail 1', async t => {
  await expectOk(t, Selector('#h1').visible, '#h1 is visible');
});

test('should fail 2', async t => {
  await expectOk(t, await Selector('#h1').visible, '#h1 is visible');
});

async function expectOk(t, actual, message) {
  //await t.expect(actual).ok(message); // wrong if actual is a promise and it is not awaited; test 'should fail 1' will pass

  // https://testcafe.io/documentation/402702/reference/test-api/testcontroller/expect
  await t.expect(actual).ok(message, { allowUnawaitedPromise: true });
}
