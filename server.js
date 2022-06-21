import app from './src/app.js'

const port = process.env.PORT || 3000;
 
app.listen(port,() =>{

    console.log(`Servidor connectado em http://localhost:${port}`)

})


