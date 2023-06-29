import mongoose from 'mongoose'
import app from './app'
import config from './config/index'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Connection', `WoW Successfully your database🚪connect...♻️`)
    //
    app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Error:', 'Failed❌ to connect your database🚪', err)
  }
}

main
