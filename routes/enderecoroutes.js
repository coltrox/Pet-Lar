import express from 'express';
import { endereco, cliente } from '../database/index.js';

const router = express.Router();

router.post('/cliente/:clienteID/endereco', async (req, res) => {
    try {
        const novoEndereco = await endereco.create({
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            CEP: req.body.CEP,
            municipio: req.body.municipio,
            UF: req.body.UF,
            clienteID: req.params.clienteID
        });
        res.status(201).json(novoEndereco); 
    } catch (error) {
        console.log(`Erro ao criar endereco: ${error}`);
        res.status(400).json({ error: 'Falha ao criar endereco' }); 
    }
});

router.get('/cliente/:clienteID/endereco', async (req, res) => {
    try {
        const enderecosCliente = await endereco.findAll({
            where: { clienteID: req.params.clienteID }
        });

        if (!enderecosCliente || enderecosCliente.length === 0) {
            return res.status(404).json({ error: 'Nenhum endereço encontrado para este cliente' });
        }

        res.json(enderecosCliente);
    } catch (error) {
        console.log(`Erro ao buscar endereços do cliente: ${error}`);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.get ('/endereco', async (req, res) => {
    try {
        const todosendereco = await endereco.findAll();
        if (!endereco) {
            return res.status(404).json({ error: 'não há endereços cadastrados' });
        }
        res.json(todosendereco);
    }catch (error) {
        console.log(`Erro ao buscar endereço: ${error}`);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.put('/cliente/:clienteID/endereco/:id', async (req, res) => {
    try {
        const update = await endereco.update(req.body, {
            where: { id: req.params.id }
        });
        if (update) {
            const clienteAtualizado = await cliente.findByPk(req.params.id);
            res.json(clienteAtualizado);
        } else {
            res.status(404).json({ error: 'endereço não encontrado' });
        }
    } catch (error) {
        console.log(`Erro ao atualizar endereço: ${error}`);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.delete('/cliente/:clienteID/endereco/:id', async (req, res) => {
    try {
        const deleted = await endereco.destroy({
            where: { id: req.params.id }
        });
        
        if (deleted) {
            res.status(204).end(); 
        } else {
            res.status(404).json({ error: 'endereço não encontrado' });
        }
    } catch (error) {
        console.log(`Erro ao deletar cliente: ${error}`);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default router;