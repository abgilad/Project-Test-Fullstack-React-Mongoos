const express = require('express');
const app = express();
const db = require('mongoose');
const bp = require('body-parser');

db.connect('mongodb://127.0.0.1:27017/myTasks')

const taskSchema = db.Schema({
    name: String,
    desc: String
})

const taskList = db.model('tasks', taskSchema)

app.use(bp.json())

app.use(express.static('newapp/build'))

let arr = [{ name: 'asd', desc: 'fsadsds' }, { name: 'reree', desc: 'vcvxxvxv' }, { name: 'hgfd', desc: 'lkfkkf' },]

// app.get('/add', (req, res) => {
//     const addToDb = async () => {
//         await taskList.insertMany(arr);
//         res.send('ok')
//     }
//     addToDb()
// })

app.get('/all', (req, res) => {
    const getAllData = async () => {
        let temp = await taskList.find();
        res.json(temp);
    }

    getAllData()
})

app.post('/', (req, res) => {
    console.log(req.body.temp);
    res.json({ 'message': 'ok' })
})


app.listen('5000', () => {
    console.log('server is on')
})