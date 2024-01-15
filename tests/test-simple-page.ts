import { Selector } from 'testcafe';

fixture('simple page actions test').page(
  `file:///${__dirname}/../resources/dummyPage1.html`,
);

test('dummy2 link navigates to dummy2 page', async t => {
  await t.click('#dummy2').expect(Selector('h1').innerText).eql('dummy2');
});
