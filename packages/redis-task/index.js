import {taskHandler} from './tasksHandler.js';
import client from './mqClient.js';

client.on('connect', () => {
    console.log('Redis is connected!');
});
client.on('ready', async () => {
    console.log('Redis is ready!');
    await taskHandler();
});
client.on('error', (e) => {
    console.log('Redis error! ' + e);
});

await client.connect();
