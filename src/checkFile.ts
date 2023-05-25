import { accessSync, constants } from 'fs'

const checkFile = async (filename: string): Promise<boolean> => {
  try {
    accessSync(filename, constants.R_OK)
    return Promise.resolve(true)
  } catch (err) {
    console.log(err)
    return Promise.resolve(false)
  }
}

export default checkFile
