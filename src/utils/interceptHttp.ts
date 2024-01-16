import { RequestLogger } from 'testcafe';

export default async function interceptHttp(
  t: TestController,
  requestFilter: string | object | RegExp | (<U>(req: U) => boolean),
  uiActions: (t: TestController) => Promise<void>,
  interceptProcessor: (requestLogger: RequestLogger) => Promise<{
    result: boolean;
    request?: RequestData;
    response?: ResponseData;
  }>,
) {
  const requestLogger = RequestLogger(requestFilter);
  await t.addRequestHooks(requestLogger);

  await uiActions(t);

  const validationResult = await interceptProcessor(requestLogger);

  await t.removeRequestHooks(requestLogger);

  return validationResult;
}
