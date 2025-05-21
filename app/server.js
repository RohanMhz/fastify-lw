// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'
// import dotenv from 'dotenv'
import fastifyEnv from '@fastify/env'
import routes from './routes/index.js'

const fastify = Fastify({
  logger: true
})

// fastify-nv Plugin
const schema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: {
      type: 'string',
      default: '8000',
    },
  },
}

const options = {
  confKey: 'config', // Will be accessible via fastify.config
  schema,
  dotenv: true,      // Load from `.env` file
}


// Run the server!
try {
  await fastify.register(fastifyEnv, options)
  
  // Declare routes
  fastify.register(routes);
  
  // Use the env variable for port
  const port = parseInt(fastify.config.PORT, 10)

  // Start the server
  await fastify.listen({ port })

  console.log(`Server is running at http://localhost:${port}`)
} catch (err) {
  console.error('Error starting server:', err)
  process.exit(1)
}
