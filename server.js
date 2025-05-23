// Require the framework and instantiate it

// ESM
import Fastify from 'fastify'
// import dotenv from 'dotenv'
import fastifyEnv from '@fastify/env'
import autoload from '@fastify/autoload'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

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
  const __filename = fileURLToPath(import.meta.url)
  const __dirname = dirname(__filename)

  await fastify.register(fastifyEnv, options)
  
  // registering plugins
  fastify.register(autoload, {
    dir: join(__dirname, 'app/plugins'),
    options: {}
  })

  // Register routes
  fastify.register(autoload, {
    dir: join(__dirname, 'app/routes'),
    options: {}
  })
  
  
  // Use the env variable for port
  const port = parseInt(fastify.config.PORT, 10)
  fastify.after(() => {
    const routesT = fastify.printRoutes();
  });
  // Start the server
  await fastify.listen({ port })

  console.log(`Server is running at http://localhost:${port}`)
} catch (err) {
  console.error('Error starting server:', err)
  process.exit(1)
}
