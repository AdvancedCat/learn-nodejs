import { popTask } from './utils.js';

function handleTask(task) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Handling task:', task, '...');
            resolve();
        }, 2000);
    });
}

export async function taskHandler() {
    const task = await popTask();
    await handleTask(task);
    await taskHandler();
}
