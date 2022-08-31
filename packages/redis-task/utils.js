import client from './myclient.js';

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

export const delRedisKey = (key) => {
    return new Promise((resolve) => {
        client.del(key, resolve);
    });
};

export const TASK_NAME = 'local_tasks'
export const TASK_AMOUNT = 20