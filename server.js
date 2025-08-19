import express from 'express';
import {connect} from './database/index.js';
import clienteroutes from './routes/clienteroutes.js';
import enderecoroutes from './routes/enderecoroutes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({
    origin: 'http://127.0.0.1:3001',
}));
app.use(express.json());

connect();

app.use('/', clienteroutes);
app.use('/', enderecoroutes);

app.get('/', (req, res) => {
    res.send.json('API de Clientes e Endereços');
});

app.listen(PORT, () => {
    console.log(`Servidor está rodando em: http://localhost:${PORT}`);
});
