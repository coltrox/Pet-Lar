import { DataTypes } from 'sequelize';

export default (sequelize) => {
    const Endereco = sequelize.define('Endereco', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        logradouro: {type: DataTypes.STRING},
        numero: {type: DataTypes.STRING},
        CEP: {type: DataTypes.STRING},
        municipio: {type: DataTypes.STRING},
        UF: {type: DataTypes.STRING}
    })
    return Endereco;
};
