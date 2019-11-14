const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

describe('The Server', () => {

    beforeEach(async () => {
        await db('users').truncate();
    })

    describe('GET /users', () => {
        it('Should return status 200', () => {
            return request(server)
                .get('/users')
                .then(res => {
                    expect(res.status).toBe(200);
                })
        })
    })
})