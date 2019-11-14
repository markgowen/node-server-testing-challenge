const Users = require('./user-model')
const db = require('../../data/dbConfig')

describe('User Model', () => {
    
    beforeEach(async () => {
        await db('users').truncate();
    })

    describe('the insert function', () => {

        it('should add a new user', async () => {
            // test setup
            const userInfo = { name: 'Don' };
            await Users.insert(userInfo)

            // assertion
            const users = await db('users');
            expect(users.length).toBe(1);
            expect(users[0].name).toBe('Don');
        });
    })

});