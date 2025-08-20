CREATE TABLE Endereco (
    id_endereco INT PRIMARY KEY AUTO_INCREMENT,
    rua VARCHAR(100),
    numero VARCHAR(10),
    complemento VARCHAR(50),
    bairro VARCHAR(50),
    cidade VARCHAR(50),
    estado VARCHAR(2)
);

CREATE TABLE Usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome_completo VARCHAR(100),
    cpf CHAR(11) UNIQUE,
    data_nascimento DATE,
    email VARCHAR(100) UNIQUE,
    id_endereco INT,
    FOREIGN KEY (id_endereco) REFERENCES Endereco(id_endereco)
);

CREATE TABLE Ong (
    id_ong INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    id_endereco INT,
    telefone VARCHAR(20),
    email VARCHAR(100) UNIQUE,
    site VARCHAR(100),
    FOREIGN KEY (id_endereco) REFERENCES Endereco(id_endereco)
);

CREATE TABLE Raca (
    id_raca INT PRIMARY KEY AUTO_INCREMENT,
    raca VARCHAR(50)
);

CREATE TABLE Origem (
    id_origem INT PRIMARY KEY AUTO_INCREMENT,
    descricao ENUM('resgatado', 'criado', 'doado')
);

CREATE TABLE Pet (
    id_pet INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    id_raca INT,
    data_nascimento DATE,
    sexo ENUM('M', 'F'),
    id_origem INT,
    id_ong INT,
    FOREIGN KEY (id_raca) REFERENCES Raca(id_raca),
    FOREIGN KEY (id_origem) REFERENCES Origem(id_origem),
    FOREIGN KEY (id_ong) REFERENCES Ong(id_ong)
);

CREATE TABLE Vacinas (
    id_vacina INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100)
);

CREATE TABLE Carteira_Vacinacao (
    id_carteira INT PRIMARY KEY AUTO_INCREMENT,
    id_pet INT,
    id_vacina INT,
    data_aplicacao DATE,
    FOREIGN KEY (id_pet) REFERENCES Pet(id_pet),
    FOREIGN KEY (id_vacina) REFERENCES Vacinas(id_vacina)
);

CREATE TABLE Status (
    id_status INT PRIMARY KEY AUTO_INCREMENT,
    descricao ENUM('aprovado', 'recusado', 'pendente')
);

CREATE TABLE Solicitacao_Adocao (
    id_solicitacao INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_pet INT,
    id_ong INT,
    data DATE,
    id_status INT,
    observacao TEXT,
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_pet) REFERENCES Pet(id_pet),
    FOREIGN KEY (id_ong) REFERENCES Ong(id_ong),
    FOREIGN KEY (id_status) REFERENCES Status(id_status)
);

CREATE TABLE Adocao (
    id_adocao INT PRIMARY KEY AUTO_INCREMENT,
    id_solicitacao INT,
    data_adocao DATE,
    FOREIGN KEY (id_solicitacao) REFERENCES Solicitacao_Adocao(id_solicitacao)
);

CREATE TABLE Formulario (
    id_formulario INT PRIMARY KEY AUTO_INCREMENT,
    perguntas_respostas TEXT
);

CREATE TABLE Usuario_Formulario (
    id_usuario INT,
    id_formulario INT,
    data DATE,
    PRIMARY KEY (id_usuario, id_formulario),
    FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
    FOREIGN KEY (id_formulario) REFERENCES Formulario(id_formulario)
);
