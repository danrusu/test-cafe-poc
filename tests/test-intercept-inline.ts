import { RequestLogger } from 'testcafe';

fixture
  .only('intercept test')
  .page(`file:///${__dirname}/../resources/dummyPage1.html`);

test('intercepts correct url', async t => {
  const requestLogger = RequestLogger({
    method: 'get',
    url: /.*package.json.*/,
  });

  await t.addRequestHooks(requestLogger);

  // uiActions
  await t.click('#requests');

  // validation
  let request;
  const validationSuccess = await requestLogger.contains(httpRequest => {
    request = httpRequest;
    return httpRequest.request.url.startsWith(
      'https://raw.githubusercontent.com/danrusu/test-cafe-poc/master1',
    );
  });

  await t.removeRequestHooks(requestLogger);

  if (!validationSuccess) {
    throw new Error(
      `Intercepted URL is not correct for request: ${JSON.stringify(
        request,
        null,
        2,
      )}`,
    );
  }
});
