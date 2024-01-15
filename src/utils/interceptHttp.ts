import { RequestLogger } from 'testcafe';

export default async function interceptHttp(
  t: TestController,
  requestFilter: string | object | RegExp | (<U>(req: U) => boolean),
  uiActions: (t: TestController) => Promise<void>,
  validation: (requestLogger: RequestLogger) => Promise<{
    success: boolean;
    request: LoggedRequest;
  }>,
) {
  const requestLogger = RequestLogger(requestFilter);
  await t.addRequestHooks(requestLogger);

  await uiActions(t);

  const validationResult = await validation(requestLogger);

  await t.removeRequestHooks(requestLogger);

  return validationResult;
}
