import { t as TestController } from 'testcafe';
import interceptHttp from '../src/utils/interceptHttp';

fixture
  .only('intercept test')
  .page(`file:///${__dirname}/../resources/dummyPage1.html`);

const requestFilter = {
  method: 'get',
  url: /.*package.json.*/,
};

const uiActions = async (t: typeof TestController) => {
  await t.click('#requests');
};

const interceptProcessor = async (requestLogger: RequestLogger) => {
  let request: RequestData;
  let response: ResponseData;
  const result = await requestLogger.contains(httpRequest => {
    request = httpRequest.request;
    response = httpRequest.response;
    return httpRequest.request.url.startsWith(
      'https://raw.githubusercontent.com/danrusu/test-cafe-poc/master1',
    );
  });
  return {
    result,
    request,
    response,
  };
};

test('intercepts correct url', async t => {
  const intercepted = await interceptHttp(
    t,
    requestFilter,
    uiActions,
    interceptProcessor,
  );

  if (!intercepted.result) {
    throw new Error(
      `Url validation failed for intercepted request: ${JSON.stringify(
        intercepted,
        null,
        2,
      )}`,
    );
  }
});
