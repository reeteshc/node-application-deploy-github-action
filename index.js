import express from 'express'
const app = express ()
const PORT = process.env.PORT   ?? 8080
app.get('/', (req, res) => {
return res.json({msg: 'Hello from the Server which is running on node js v1'})
})
 
app.listen(PORT, () => {
    console.log ('The Server is up and Running on PORT  ${PORT}')
})



