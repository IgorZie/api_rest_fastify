import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

const app = fastify()

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: '/transactions',
})

app.listen({ port: env.PORT }, () =>
  console.log(`Server is running in port ${env.PORT}`),
)
