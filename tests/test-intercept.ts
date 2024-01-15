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

const validation = async (requestLogger: RequestLogger) => {
  let request;
  const success = await requestLogger.contains(httpRequest => {
    request = httpRequest;
    return httpRequest.request.url.startsWith(
      'https://raw.githubusercontent.com/danrusu/test-cafe-poc/master1',
    );
  });
  return {
    success,
    request,
  };
};

test('intercepts correct url', async t => {
  const result = await interceptHttp(t, requestFilter, uiActions, validation);
  //console.log(JSON.stringify(result, null, 2));

  if (!result.success) {
    throw new Error(
      `Validation failed for request: ${JSON.stringify(
        result.request,
        null,
        2,
      )}`,
    );
  }
});
