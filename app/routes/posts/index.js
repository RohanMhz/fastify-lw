export default async function posts(fastify, options) {
    fastify.get('/posts', async (request, reply) => {
        reply.send({ message: 'All the posts' })
    })
}