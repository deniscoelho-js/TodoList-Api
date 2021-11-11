import express from 'express'

const app = express()

app.use(express.json())

const task = {
    id: "1",
    name: "Lavar a louça",
    done: true
}

const taskList = [
    task
]

app.get('/task', (req, res) => {
    res.send(taskList)
})

app.post("/task", (req, res) => {
    const body = req.body

    taskList.push(body)

    res.send(taskList)
})

app.get('/ping', (_, res)=> {
    res.send('PONG')
})

app.listen(3333, () => console.log('iniciou o servidor'))

// parei em 36min