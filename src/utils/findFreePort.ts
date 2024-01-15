// https://github.com/baalexander/node-portscanner
import { findAPortNotInUse } from 'portscanner';
const LOCALHOST_IP = '127.0.0.1';

export default async function (
  startPort: number,
  endPort: number,
  localhostIp: string = LOCALHOST_IP,
) {
  let freePort: number | undefined;
  try {
    freePort = await findAPortNotInUse(startPort, endPort, localhostIp);
  } catch (e) {}
  if (!freePort) {
    throw new Error(`No free port in interval [${startPort}, ${endPort}]`);
  }
  return freePort;
}
