import { app } from './app'
import { env } from './env'

app.listen({ port: env.PORT }, () =>
  console.log(`Server is running in port ${env.PORT}`),
)
