import app from '../index'
import resizeImage from '../resize'
import supertest from 'supertest'

const request = supertest(app)

it('Expect resizeImage() result to equal value', async () => {
  const result = await resizeImage('fjord', 200, 200)
  expect(result).toEqual(true)
})

describe('Test endpoint responses', () => {
  it('gets the api/images endpoint', async () => {
    await request.get('/api/images').expect(200)
  })
})
