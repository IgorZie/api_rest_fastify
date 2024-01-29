import fastify from 'fastify'
import { knex } from './database'
import crypto from 'crypto'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'Transação de teste',
      amount: 1000,
    })
    .returning('*')

  return transaction
})

app.listen({ port: env.PORT }, () =>
  console.log(`Server is running in port ${env.PORT}`),
)
