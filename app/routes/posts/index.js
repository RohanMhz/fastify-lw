export default async function (fastify, options) {
    fastify.get('/', async (request, reply) => {
        reply.send({ message: 'All the posts' })
    })
}