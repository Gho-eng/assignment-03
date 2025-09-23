import express from "express"
import cors from "cors"

const app = express()
const PORT = process.eventNames.PORT || 3000
app
    .use(cors())
    .use(express.urlencoded({ extended: true}))
    .listen(PORT, () => {
        console.log('server at http://localhost:3000')
    });