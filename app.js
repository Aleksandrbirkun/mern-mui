const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()
app.use(express.json({extended:true}))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/links.routes'))

const PORT = config.get('port') || 5000
const MONGO = config.get('mongoUri') || ''

async function start() {
try{
    await mongoose.connect(MONGO,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    }
    catch(e){
            console.log('Server error', e.message)
            process.exit(1)
            }
    }

start()
app.listen(PORT, ()=> console.log(`App has been started on port ${PORT}`))