const request = require('supertest');
const express = require('express');

const app =express();
app.get('/api/v1/welcome', (req,res) => {
    res.status(200).send('Ten el coraje de seguir tu corazón e intuición. De algún modo, ya saben lo que realmente quieres ser');
});

describe('GET /api/v1/welcome', () => {
    it('respond with hello world', (done) => {
        request(app)
        .get('/api/v1/welcome')
        .expect('Ten el coraje de seguir tu corazón e intuición. De algún modo, ya saben lo que realmente quieres ser', done);
    });
});