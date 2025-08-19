import Sequelize from 'sequelize';
import enderecoModel from './endereco.js';
import clientesModel from './clientes.js';

    const sequelize = new Sequelize({
        dialect : 'sqlite',
        storage : './database/database.sqlite'
    });
    
    const endereco = enderecoModel(sequelize);
    const cliente = clientesModel(sequelize);

    cliente.hasMany(endereco, { foreignKey: 'clienteID' });
    endereco.belongsTo(cliente, { foreignKey: 'clienteID' });

const connect = async () =>  {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Conexão com o banco de dados foi bem sucedida.');
    }
    catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    };
};
export {sequelize, cliente, endereco, connect };

