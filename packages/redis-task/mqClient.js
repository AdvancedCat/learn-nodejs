import * as Redis from 'redis'

// 默认： {url: 'redis://localhost:6379'}
const client = Redis.createClient()

export default client