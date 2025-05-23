export default async function (fastify, options) {
    fastify.get('/', async (request, reply) => {
        reply.send({ message: 'All the users' })
    })

    fastify.post('/create', async (request, reply) => {
        const { data } = request.body;
        const users = new fastify.pgClient.query('SELECT * FROM users')
        console.log("🚀 ~ fastify.post ~ users:", users, users.rows)
        
    })
}