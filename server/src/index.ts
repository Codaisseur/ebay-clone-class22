import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import Controller from "./controller"
import setupDb from './db'

const port = process.env.PORT || 4000

const app = createKoaServer({
   cors: true,
   controllers: [Controller]
})

setupDb()
  .then(_ =>
    app.listen(port, () => console.log('Listening on port 4000'))
  )
  .catch(err => console.error(err))