export default async function users(fastify, options) {
    fastify.get('/users', async (request, reply) => {
        reply.send({ message: 'All the users' })
    })
}