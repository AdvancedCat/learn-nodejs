import { TASK_NAME, TASK_AMOUNT, setRedisValue, delRedisKey } from './utils.js';
import client from './mqClient.js';

client.on('ready', async () => {
    await delRedisKey(TASK_NAME);

    for (let i = TASK_AMOUNT; i > 0; i--) {
        client.lPush(TASK_NAME, `task-${i}`);
    }

    const reply = await client.lRange(TASK_NAME, 0, TASK_AMOUNT);
    console.log(reply);
    process.exit();
});

await client.connect();
