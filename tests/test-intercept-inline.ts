import { RequestLogger, t as TestController } from 'testcafe';

fixture('intercept test').page(
  `file:///${__dirname}/../resources/dummyPage1.html`,
);

test('intercepts correct url', async t => {
  const requestLogger = RequestLogger({
    method: 'get',
    url: /.*package.json.*/,
  });

  await t.addRequestHooks(requestLogger);

  // uiActions
  await t.click('#requests');

  // validation
  let interceptedUrl;
  let request;
  const isCorrectUrl = await requestLogger.contains(http => {
    interceptedUrl = http.request.url;
    return interceptedUrl.startsWith(
      'https://raw.githubusercontent.com/danrusu/test-cafe-poc/master1',
    );
  });

  await t.removeRequestHooks(requestLogger);

  if (!isCorrectUrl) {
    throw new Error(
      `Intercepted URL is not correct: ${JSON.stringify(request)}`,
    );
  }
});
