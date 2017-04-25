import { crazyLog, superCrazyLog } from './someFolder/crazyLog';
import { randomInt, randomStr } from './someOtherFolder/random';

crazyLog(`${randomInt()}${randomStr()}`);
superCrazyLog(`${randomInt()}${randomStr()}`);
