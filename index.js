import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";



const app = express();
const port = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use('/', express.static(path.resolve(__dirname, './public')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/', (req, res) => {  
    res.send('Hello World');
});

app.listen(port, () => { 
    
    console.log(`Escuchando el puerto ${port}`);
})

const httpServer = http.createServer(app);

httpServer.listen(80, (req, res) => {
    console.log('Escuchando el puerto 80');
})