import { type Express } from 'express'
import request from 'supertest'
import { setupApp } from '../../../src/main/config/app'

let app: Express

describe('HealthCheck route', () => {
  beforeAll(async () => {
    app = setupApp()
  })

  it('GET "/api" should return 200 on success', async () => {
    await request(app)
      .get('/api')
      .expect(200)
      .expect({ message: 'Server is running' })
  })

  describe('/api/auth_transactions', () => {
    describe('when the transaction amount is less than $1k', () => {
      it('approves the transaction', async () => {
        const payload = {
          amount: 700,
          card_number: '4321123443211234'
        }

        await request(app)
          .post('/api/auth_transactions')
          .send(payload)
          .expect(201)
          .expect({ message: 'OK' })
      })
    })

    describe('when the transaction amount is equal to $1k', () => {
      it('approves the transaction', async () => {
        const payload = {
          amount: 1000,
          card_number: '4321123443211234'
        }

        await request(app)
          .post('/api/auth_transactions')
          .send(payload)
          .expect(201)
          .expect({ message: 'OK' })
      })
    })

    describe('when the transaction amount is greater than $1k', () => {
      it('denies the transaction', async () => {
        const payload = {
          amount: 1001,
          card_number: '4321123443211234'
        }

        await request(app)
          .post('/api/auth_transactions')
          .send(payload)
          .expect(422)
          .expect({ message: 'Not enough funds' })
      })
    })
  })
})
