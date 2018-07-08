const startupDebugger = require('debug')('app:startup') // For debugging you have to execute "export DEBUG=app:startup"
const dbDebugger = require('debug')('app:db')
const config = require('config')
const Joi = require('joi')
const express = require('express')
const app = express()

// Routes
const coursesRouter = require('./routes/courses')
const mainRouter = require('./routes/main')

app.use(express.json())
app.use('/', mainRouter)
app.use('/api/courses', coursesRouter)

// Configuration
// export NODE_ENV=production
console.log(`Application name: ${config.get('name')}`)

if(app.get('env') === 'development') {
    startupDebugger('Debugger startup')
}

dbDebugger('Connected to the database')



const port = process.env.PORT || 3000
app.listen(port, () => {console.log(`Listening on port ${port}`)})