import { accessSync, constants } from 'fs'

const checkFile = async (filename: string, width: number,
  height: number): Promise<boolean> => {
  try {
    accessSync(`src/assets/thumb/${filename}-${width}-${height}.jpg`, constants.R_OK)
    return Promise.resolve(true)
  } catch (err) {
    console.log(err)
    return Promise.resolve(false)
  }
}

export default checkFile
