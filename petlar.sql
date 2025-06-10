-- Criação e uso do banco
CREATE DATABASE PetLar;
USE PetLar;

-- Tabela de Usuários
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf CHAR(11) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(200) NOT NULL,
    tipo_residencia ENUM('Apartamento', 'Casa Pequena', 'Casa Grande') NOT NULL,
    senha VARCHAR(255) NOT NULL,
    documento_validado BOOLEAN DEFAULT FALSE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Locais de Adoção e Feiras
CREATE TABLE LocalAdocao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(200) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado CHAR(2) NOT NULL,
    tipo ENUM('Ponto Fixo', 'Feira') NOT NULL,
    data_inicio DATE,
    data_fim DATE,
    horario_funcionamento VARCHAR(100),
    descricao TEXT
);

-- Tabela de Pets disponíveis para adoção
CREATE TABLE Pet (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50),
    raca VARCHAR(50) NOT NULL,
    porte ENUM('Pequeno', 'Médio', 'Grande') NOT NULL,
    perfil_comportamental ENUM('Ativo', 'Calmo', 'Independente', 'Sociável') NOT NULL,
    grau_atividade ENUM('Baixo', 'Moderado', 'Alto') NOT NULL,
    alimentacao VARCHAR(200),
    cuidados_especiais VARCHAR(200),
    descricao TEXT,
    foto VARCHAR(255),
    local_id INT,
    disponivel BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (local_id) REFERENCES LocalAdocao(id)
);

-- Tabela de Adoções
CREATE TABLE Adocao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    pet_id INT NOT NULL,
    local_id INT NOT NULL,
    data_solicitacao DATE DEFAULT CURRENT_DATE,
    status ENUM('Pendente', 'Aprovada', 'Recusada') DEFAULT 'Pendente',
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id),
    FOREIGN KEY (pet_id) REFERENCES Pet(id),
    FOREIGN KEY (local_id) REFERENCES LocalAdocao(id)
);

-- Tabela de Validações via Arduino no ponto de adoção
CREATE TABLE ValidacaoArduino (
    id INT AUTO_INCREMENT PRIMARY KEY,
    adocao_id INT NOT NULL,
    data_validacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    metodo ENUM('NFC', 'QR') NOT NULL,
    validado BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (adocao_id) REFERENCES Adocao(id)
);

-- Tabela de Questionários preenchidos por usuários
CREATE TABLE Questionario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    data_resposta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);

-- Tabela de Perguntas (estáticas)
CREATE TABLE Pergunta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    texto VARCHAR(200) NOT NULL
);

-- Tabela de Respostas aos questionários
CREATE TABLE Resposta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    questionario_id INT NOT NULL,
    pergunta_id INT NOT NULL,
    resposta TEXT NOT NULL,
    FOREIGN KEY (questionario_id) REFERENCES Questionario(id),
    FOREIGN KEY (pergunta_id) REFERENCES Pergunta(id)
);

-- Tabela de Pets Desaparecidos
CREATE TABLE PetDesaparecido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    nome_pet VARCHAR(50),
    raca VARCHAR(50),
    cor VARCHAR(50),
    descricao TEXT,
    foto VARCHAR(255),
    data_desaparecimento DATE NOT NULL,
    local_desaparecimento VARCHAR(200) NOT NULL,
    tipo_local ENUM('Residência', 'Rua', 'Parque', 'Praia', 'Outro') NOT NULL,
    telefone_contato VARCHAR(20) NOT NULL,
    email_contato VARCHAR(100) NOT NULL,
    encontrado BOOLEAN DEFAULT FALSE,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES Usuario(id)
);
