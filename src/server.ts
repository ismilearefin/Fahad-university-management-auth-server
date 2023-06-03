import app from './app'
import config from './config'
import mongoose from 'mongoose'
import { logger, errorLogger } from './shared/logger'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`successfully connected to Database`)

    app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    errorLogger.error(`Failed to connect to Database.`, err)
  }
}
main()
