import express from 'express';
import { cliente } from '../database/index.js';

const router = express.Router();


router.post('/cliente', async (req, res) => {
    try {
        const novoCliente = await cliente.create({
            nome: req.body.nome, 
            cnpj: req.body.cnpj,
            datainclusao: new Date()
        });
        res.status(201).json(novoCliente); 
    } catch (error) {
        console.log(`Erro ao criar cliente: ${error}`);
        res.status(400).json({ error: 'Falha ao criar cliente' }); 
    }
});


router.get('/cliente', async (req, res) => {
    try {
        const clientes = await cliente.findAll(); 
        res.json(clientes);
    } catch (error) {
        console.log(`Erro ao buscar clientes: ${error}`);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.get ('/cliente/:id', async (req, res) => {
    try {
        const cliente = await cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ error: 'Cliente não encontrado' });
        }
        res.json(cliente);
    }catch (error) {
        console.log(`Erro ao buscar cliente: ${error}`);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

router.put('/cliente/:id', async (req, res) => {
    try {
        const [update] = await cliente.update(req.body, {
            where: { id: req.params.id }
        });
        
        if (update) {
            const clienteAtualizado = await cliente.findByPk(req.params.id);
            res.json(clienteAtualizado);
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        console.log(`Erro ao atualizar cliente: ${error}`);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});


router.delete('/cliente/:id', async (req, res) => {
    try {
        const deleted = await cliente.destroy({
            where: { id: req.params.id },
        });
        
        if (deleted) {
            res.status(204).end(''); 
        } else {
            res.status(404).json({ error: 'Cliente não encontrado' });
        }
    } catch (error) {
        console.log(`Erro ao deletar cliente: ${error}`);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
});

export default router;