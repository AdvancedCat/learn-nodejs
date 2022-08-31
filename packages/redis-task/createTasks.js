import { TASK_NAME, TASK_AMOUNT, setRedisValue, delRedisKey } from './utils.js';
import client from './myclient.js';

client.on('ready', async () => {
    console.log('成功了？')
    await delRedisKey(TASK_NAME);

    for (let i = TASK_AMOUNT; i > 0; i--) {
        client.lPush(TASK_NAME, `task-${i}`);
    }

    client.lRange(TASK_NAME, 0, TASK_AMOUNT, async (err, reply) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(reply);
        process.exit();
    });
});
