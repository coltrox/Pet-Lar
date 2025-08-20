const sqlite3 = require('sqlite3').verbose();

// Conecta ou cria o banco de dados localmente
const db = new sqlite3.Database('./adocao.db', (err) => {
  if (err) return console.error(err.message);
  console.log('Conectado ao banco de dados SQLite.');
});

// Execução sequencial para evitar problemas de sincronização
db.serialize(() => {
  // Tabela Endereco
  db.run(`
    CREATE TABLE IF NOT EXISTS Endereco (
      id_endereco INTEGER PRIMARY KEY AUTOINCREMENT,
      rua TEXT,
      numero TEXT,
      complemento TEXT,
      bairro TEXT,
      cidade TEXT,
      estado TEXT
    )
  `);

  // Tabela Usuario
  db.run(`
    CREATE TABLE IF NOT EXISTS Usuario (
      id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
      nome_completo TEXT,
      cpf TEXT UNIQUE,
      data_nascimento TEXT,
      email TEXT UNIQUE,
      id_endereco INTEGER,
      FOREIGN KEY (id_endereco) REFERENCES Endereco(id_endereco)
    )
  `);

  // Tabela Ong
  db.run(`
    CREATE TABLE IF NOT EXISTS Ong (
      id_ong INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      id_endereco INTEGER,
      telefone TEXT,
      email TEXT UNIQUE,
      site TEXT,
      FOREIGN KEY (id_endereco) REFERENCES Endereco(id_endereco)
    )
  `);

  // Tabela Raca
  db.run(`
    CREATE TABLE IF NOT EXISTS Raca (
      id_raca INTEGER PRIMARY KEY AUTOINCREMENT,
      raca TEXT
    )
  `);

  // Tabela Origem
  db.run(`
    CREATE TABLE IF NOT EXISTS Origem (
      id_origem INTEGER PRIMARY KEY AUTOINCREMENT,
      descricao TEXT CHECK(descricao IN ('resgatado', 'criado', 'doado'))
    )
  `);

  // Tabela Pet
  db.run(`
    CREATE TABLE IF NOT EXISTS Pet (
      id_pet INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      id_raca INTEGER,
      data_nascimento TEXT,
      sexo TEXT CHECK(sexo IN ('M', 'F')),
      id_origem INTEGER,
      id_ong INTEGER,
      FOREIGN KEY (id_raca) REFERENCES Raca(id_raca),
      FOREIGN KEY (id_origem) REFERENCES Origem(id_origem),
      FOREIGN KEY (id_ong) REFERENCES Ong(id_ong)
    )
  `);

  // Tabela Vacinas
  db.run(`
    CREATE TABLE IF NOT EXISTS Vacinas (
      id_vacina INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT
    )
  `);

  // Tabela Carteira_Vacinacao
  db.run(`
    CREATE TABLE IF NOT EXISTS Carteira_Vacinacao (
      id_carteira INTEGER PRIMARY KEY AUTOINCREMENT,
      id_pet INTEGER,
      id_vacina INTEGER,
      data_aplicacao TEXT,
      FOREIGN KEY (id_pet) REFERENCES Pet(id_pet),
      FOREIGN KEY (id_vacina) REFERENCES Vacinas(id_vacina)
    )
  `);

  // Tabela Status
  db.run(`
    CREATE TABLE IF NOT EXISTS Status (
      id_status INTEGER PRIMARY KEY AUTOINCREMENT,
      descricao TEXT CHECK(descricao IN ('aprovado', 'recusado', 'pendente'))
    )
  `);

  // Tabela Solicitacao_Adocao
  db.run(`
    CREATE TABLE IF NOT EXISTS Solicitacao_Adocao (
      id_solicitacao INTEGER PRIMARY KEY AUTOINCREMENT,
      id_usuario INTEGER,
      id_pet INTEGER,
      id_ong INTEGER,
      data TEXT,
      id_status INTEGER,
      observacao TEXT,
      FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
      FOREIGN KEY (id_pet) REFERENCES Pet(id_pet),
      FOREIGN KEY (id_ong) REFERENCES Ong(id_ong),
      FOREIGN KEY (id_status) REFERENCES Status(id_status)
    )
  `);

  // Tabela Adocao
  db.run(`
    CREATE TABLE IF NOT EXISTS Adocao (
      id_adocao INTEGER PRIMARY KEY AUTOINCREMENT,
      id_solicitacao INTEGER,
      data_adocao TEXT,
      FOREIGN KEY (id_solicitacao) REFERENCES Solicitacao_Adocao(id_solicitacao)
    )
  `);

  // Tabela Formulario
  db.run(`
    CREATE TABLE IF NOT EXISTS Formulario (
      id_formulario INTEGER PRIMARY KEY AUTOINCREMENT,
      perguntas_respostas TEXT
    )
  `);

  // Tabela Usuario_Formulario
  db.run(`
    CREATE TABLE IF NOT EXISTS Usuario_Formulario (
      id_usuario INTEGER,
      id_formulario INTEGER,
      data TEXT,
      PRIMARY KEY (id_usuario, id_formulario),
      FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario),
      FOREIGN KEY (id_formulario) REFERENCES Formulario(id_formulario)
    )
  `);

  console.log('Todas as tabelas foram criadas com sucesso!');
});

// Fecha a conexão após a criação
db.close((err) => {
  if (err) return console.error(err.message);
  console.log('Conexão com o banco de dados encerrada.');
});
