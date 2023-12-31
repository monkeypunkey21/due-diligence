const exp = require('constants')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { error } = require('console')
const {getPost, getPosts, createPost} = require('./controllers/PostController')
const {getUser, createUser, updateUser, deleteUser, loginUser} = require('./controllers/UserController')
const {authenticateToken} = require('./middleware/AuthToken');
const cookieParser = require('cookie-parser')

require('dotenv').config()

//create app
const app = express()


/*==============MiddleWare===================*/

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(express.json())


app.use((req, res, next) =>
{
    console.log(req.path, req.method)
    next()
})

app.use(cookieParser())


/*============== Routes ===================*/


/*============== User Routes =================== */

//Get user
app.get('/api/users/:id', getUser)

//Create user
app.post('/api/users/', createUser)

app.post('/api/users/login', loginUser)

//Update user
app.patch('/api/users/:id', updateUser)

//Delete user
app.delete('/api/users/:id', deleteUser)

/*============== Post Routes =================== */

//Get all posts
app.get('/api/posts/', getPosts)

//Create a post
app.post('/api/posts/', authenticateToken, createPost)

//Get a specific post
app.get('/api/posts/:id', getPost)


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