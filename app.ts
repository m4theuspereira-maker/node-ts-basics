import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

class App {
    public express: express.Application

    public constructor () {
      this.express = express()
      this.middlewares()
      this.databse()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private databse (): void{
      mongoose.connect('mongodb://localhost/tsnode', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(() => {
        console.log('Mongo connected')
      }).catch((err) => {
        console.log(err)
      })
    }

    private routes (): void{
      this.express.use(routes)
    }
}

export default new App().express
