import fp from 'fastify-plugin'
import pkg from 'pg'

const { Pool } = pkg

export default fp(async function (fastify) {
  const pool = new Pool({
    connectionString: fastify.config.PG_URI, 
  })

  // Make pgClient available across Fastify instance
  fastify.decorate('pgClient', pool)
})
