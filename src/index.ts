import checkFile from './checkFile'
import express from 'express'
import resizeImage from './resize'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Image processing API')
})

app.get('/api/images', async (req: express.Request, res: express.Response) => {
  try {
    let filename = '' as string
    let width = 200 as number
    let height = 200 as number

    if (req.query.width && !isNaN(+req.query.width)) {
      width = Number(req.query.width) || 200
    } else {
      throw 'Width must be number and not empty'
    }

    if (req.query.height && !isNaN(+req.query.height)) {
      height = Number(req.query.height) || 200
    } else {
      throw 'Height  must be number and not empty'
    }

    if (req.query.filename) {
      filename = req.query.filename.toString()
      const isExist = await checkFile(filename as string, width as number, height as number)
      if (!isExist) {
        await resizeImage(filename as string, width as number, height as number)
      }
      res.sendFile(
        `${__dirname}/assets/thumb/${filename}-${width}-${height}.jpg`
      )
    } else {
      throw 'No file name no provide, Please check again!'
    }
  } catch (error) {
    console.log(error)
    res.send(error)
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}!`)
})

export default app
