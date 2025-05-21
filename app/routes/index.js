async function routes(fastify, options){
    fastify.get('/', function (request, reply) {

        reply.send({ hello: 'world' })
    });
    
    // posts routes
    fastify.get('/posts', function (request, reply) {
        reply.send({ posts: ['first post', 'second post']})
    });
}

export default routes;