const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000
const apiClient = require('./apiClient')

app.get('/', (req, res) =>{
    res.send("<h1>Landing Test</h1>")
})

app.get('/api/fun-fact', async (req, res)=> {
    try{
        const response = await apiClient.get('facts/random')
        
        const fact = response.data
        const transformedFact = {
            "fact": fact.text
        }

        res.json(transformedFact)

    }catch (error){
        //Status Erros
        if(error.response){
            console.error('API Error: ', error.response.status, error.response.data) //for devs
            res.status.apply(error.response.status).json({error: 'Could not fetch fun fact from API. (っ °Д °;)っ'}) //for users
        }else{ //Network Errors
            console.error('Network Error: ', error.message)
            res.status(500).json({error: 'A network error occured while fetching your fact.(´。＿。｀)'})
        }
    }
})



app.listen(port, () =>{
     console.log(`Server is running: http://localhost:${port} :)`)
})