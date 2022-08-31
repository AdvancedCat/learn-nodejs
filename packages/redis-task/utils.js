import client from './mqClient.js';

export const TASK_NAME = 'local_tasks';
export const TASK_AMOUNT = 20;

export const getRedisValue = (key) => {
    return new Promise((resolve) => {
        client.get(key, (err, reply) => resolve(reply));
    });
};

export const setRedisValue = (key, value) => {
    return new Promise((resolve) => {
        client.set(key, value, resolve);
    });
};

export const delRedisKey = (key) => client.del(key);

export const popTask = async () => {
    const result = await client.blPop(TASK_NAME, 1000)
    // console.log(result)
    return result?.element || ''
}


