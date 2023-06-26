const exp = require('constants')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { error } = require('console')
require('dotenv').config()

//create app
const app = express()


/*==============MiddleWare===================*/

app.use(cors())

app.use(express.json())


app.use((req, res, next) =>
{
    console.log(req.path, req.method)
})


/*==============Routes===================*/



/*==============Listening and Database Connection===================*/

mongoose.connect(process.env.DB_URI)
    .then(
        () => {
        console.log('Connected to Database')

        app.listen(process.env.PORT,
            () => {
                console.log('Listening on Port', process.env.PORT)
            }
        )
        }
    )
    .catch(error)
        {
            console.log(error)
        }