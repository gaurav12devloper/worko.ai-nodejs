import app from '../src/server.js';
import User from '../src/models/userModel.js';
import { use, expect } from 'chai';
import chaiHttp from 'chai-http';
const chai = use(chaiHttp);
chai.request();
chai.should();
describe('User API', () => {
    // before each test clear the database
    beforeEach(async () => {
        await User.deleteMany();
    });

    // Test the GET route
    describe('GET /worko/user', () => {
        it('It should GET all the users', (done) => {
            chai.request(app)
                .get('/worko/user')
                .end((_, response) => {
                    response.should.have.status(200);
                    response.body.should.be.an('array');
                    response.body.length.should.be.eq(0);  // initially the database is empty
                    done();
                });
        });
    });

    // Test the GET (by id) route
    describe('GET /worko/user/:id', () => {
        it('It should GET a user by ID', (done) => {
            const user = new User({
                name: 'gaurav',
                email: 'gaurav@gmail.com',
                password: '123456'
            });
            user.save((_, user) => {
                chai.request(app)
                    .get('/worko/user/' + user.id)
                    .end((_, response) => {
                        response.should.have.status(200);
                        response.body.should.be.an('object');
                        response.body.should.have.property('name').eq('gaurav');
                        response.body.should.have.property('email').eq('gaurav@gmail.com');
                        response.body.should.have.property('password').eq('123456');
                        response.body.should.have.property('_id').eq(user.id);
                        done();
                    });
            });
        });
    });

});


// test the POST route
describe('POST /worko/user', () => {
    it('It should POST a new user', (done) => {
        const user = {
            name: 'akshay',
            email: 'akshay@gmail.com',
            password: '123456'
        };
        chai.request(app)
            .post('/worko/user')
            .send(user)
            .end((err, response) => {
                response.should.have.status(201);
                response.body.should.be.an('object');
                response.body.should.have.property('name').eq('akshay');
                response.body.should.have.property('email').eq('akshay@gmail.com');
                response.body.should.have.property('password').eq('123456');
                done();
            });
    });
});

// Test the PUT route
describe('PUT /worko/user/:id', () => {
    it('It should PUT an existing user', (done) => {
        const user = new User({
            name: 'akshay',
            email: 'akshay123@gmail.com',
            password: '123456'
        });
        user.save((_, user) => {
            chai.request(app)
                .put('/worko/user/' + user.id)
                .send({ name: 'akshay kumar' })
                .end((_, response) => {
                    response.should.have.status(200);
                    response.body.should.be.an('object');
                    response.body.should.have.property('name').eq('akshay kumar');
                    response.body.should.have.property('email').eq('akshay123@gmail.com');
                    response.body.should.have.property('password').eq('123456');
                    done();
                });
        });
    });
});