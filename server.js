const express =require('express')
const app = express()
const bodyParser = require('body-parser')
const knex = require('./knex')
const path = require('path');
var cors = require('cors')
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Get all route
app.get('/api', (req, res, next) => {
    knex('users')
    .select('id','organization','lead_person','email','api_token')
    .then(data=>{
        res.send(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

//Get one route
app.get('/api/:id',(req,res,next) => {
    let id = req.params.id;
    knex('tasks')
    .where('id',id)
    .select('id','slack_steps','email_steps')
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// // post route 
app.post('/api',(req,res,next)=>{
    console.log(req.body)
    let rb = req.body
    knex('users')
    .insert({
        organization: rb.organization,
        lead_person: rb.lead_person,
        email: rb.email,
        api_token: rb.api_token,
    })
    .then(data => {
        res.status(200).send(data[0])
    }) 
    .catch(err => {
        res.status(404).send(err)
    })    
})

////////// Deals Route //////////

// Get all route
app.get('/deals', (req, res, next) => {
    knex('deals')
    .select('*')
    .then(data=>{
        res.send(data)
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

//Get one route
app.get('/deals/:id',(req,res,next) => {
    let id = req.params.id;
    knex('deals')
    .where('id',id)
    .select('*')
    .then(data => {
        res.send(data[0])
    })
    .catch(err => {
        res.status(404).send(err)
    })
})

// // post route 
app.post('/deals',(req,res,next)=>{
    console.log(req.body)
    let rb = req.body
    knex('deals')
    .insert({
        application: rb.application,
        product_name: rb.product_name,
        cellular_tech: rb.cellular_tech,
        cellular_bands: rb.cellular_bands,
        size_viable: rb.size_viable,
        org_name: rb.org_name,
        lead_person: rb.lead_person,
        lead_email: rb.lead_email,
        org_person_email: rb.org_person_email,
        mnda_started: rb.mnda_started,
        mnda_archived: rb.mnda_archived,
    })
    .then(data => {
        res.status(200).send(data[0])
    }) 
    .catch(err => {
        res.status(404).send(err)
    })    
})


// // Update/patch route
// app.patch('/messages/:id',(req,res,next) => {
//     let id = req.params.id; 
//     knex('messages')
//     .where('id',id)
//     .update({
//         id: req.body.id,
//         name:req.body.name,
//         message:req.body.message
//     })
//     .then(data =>{
//         res.send(data[0])
//     })
//     .catch(err => {
//         res.status(404).send(err)
//     })
// })
// //delete route
// app.delete('/messages/:id',(req,res,next) => {
//     let id = req.params.id;
//     let body = req.body;
//     knex('messages')
//     .where('id',id)
//     .returning(['id','name','message'])
//     .del()
//     .then(data => {
//         res.send(data[0])
//     })
//     .catch(err => {
//         res.status(404).send(err)
//     })
// })
//Error
app.use((err, req, res, next) => {
    const status = err.status || 404
    res.status(status).json({ error: err })
})
  
app.use((req, res, next) => {
    res.status(404).json({ error: { status: 404, message: 'Not found' }})
})

const listener = () => console.log( `Listening on port ${port}!`)
app.listen(port, listener)
    