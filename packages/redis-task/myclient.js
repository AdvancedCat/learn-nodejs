import * as Redis from 'redis'

const client = Redis.createClient({
    host: 'localhost',
    port: '6379'
})

export default client