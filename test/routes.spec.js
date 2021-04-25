const { expect } = require('chai');

const app = require('supertest')(require('../app'))



describe('Testing the Route', ()=>{
    describe('/api/products exists', ()=> {
      it('expects the route to be accessible', ()=>{
        const response = await app.get('/api/products')
        expect(respo)
      })
    })
  })