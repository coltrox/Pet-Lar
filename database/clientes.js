import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const clientes = sequelize.define('Clientes', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {type: DataTypes.STRING},
        cnpj: {type: DataTypes.STRING},
        datainclusao: {type: DataTypes.DATE}
    })
    return clientes;
};
