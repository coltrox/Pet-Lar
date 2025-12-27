# 🐾 PetLar - Sistema de Adoção Consciente e Inteligente

<div align="center">

![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Stack](https://img.shields.io/badge/Tech-FullStack_JS-green?style=for-the-badge)

<br>

> **Projeto de TCC (Trabalho de Conclusão de Curso)**
>
> *Conectando corações peludos a lares preparados através de tecnologia, dados e inteligência artificial.*

</div>

---

## 📖 1. Visão Geral do Projeto

O **PetLar** é um ecossistema multiplataforma (Mobile e Web) desenvolvido para mitigar o problema da devolução de animais adotados.

Diferente de plataformas comuns que funcionam apenas como vitrines de fotos, o PetLar atua como um **Sistema de Suporte à Decisão (SSD)**. Utilizamos Inteligência Artificial para garantir que o perfil do animal seja compatível com a rotina e o ambiente do adotante.

### 🎯 Os Pilares do Projeto
1.  **Adoção Baseada em Dados:** Match comportamental entre humano e animal.
2.  **Identidade Digital (IoT):** Histórico médico armazenado na coleira (Smart Tags).
3.  **Segurança e Ética:** A decisão final é sempre humana (ONG), amparada por dados (IA).

---

## 🧠 2. Inteligência Artificial e Automação

O "cérebro" do sistema utiliza fluxos de automação (**n8n**) integrados a Agentes de IA (**LLMs**).

### 🔄 Como o "Match" Funciona (Passo a Passo)

1.  **Coleta de Dados Subjetivos**
    * O usuário responde a um *Quiz Interativo* no App Mobile.
    * *Perguntas:* Rotina, tamanho da residência, tempo livre, experiência prévia, etc.

2.  **Processamento Semântico (Agente de IA)**
    * O sistema não faz apenas um filtro de "Sim/Não".
    * O Agente analisa o contexto.
        * *Exemplo:* "Usuário mora em apartamento pequeno" + "Corre 5km todo dia" = **Compatível** com cães de energia média/alta.

3.  **Recomendação e Score**
    * O sistema gera um **Score de Compatibilidade**.
    * Quando o usuário solicita a adoção, a ONG recebe esse relatório pronto.

> **⚠️ Nota Importante:** A IA atua como um **filtro qualificado**. Ela recomenda, mas não decide. A aprovação da adoção permanece **100% manual** pela ONG.

---

## 🏷️ 3. Internet das Coisas (IoT): Smart Tags

Substituímos a carteirinha de vacinação de papel por uma **Identidade Digital** física.

* **Hardware:** Tag NFC ou Placa com QR Code na coleira.
* **Funcionalidade:**
    * Ao aproximar o celular da tag, abre-se o **Prontuário Digital**.
    * Contém: Vacinas, alergias, idade e contato do tutor (para casos de perda).
    * *Segurança:* Apenas o tutor validado e a ONG podem editar os dados médicos.

---

## 🚀 4. Funcionalidades Detalhadas

### 📱 Aplicativo Mobile (Adotante)
* **Gestão de Identidade:**
    * Cadastro com upload de documentos (RG/Comp. Residência).
    * Validação de perfil.
* **Adoção:**
    * Feed de pets ordenado por compatibilidade.
    * Solicitação de adoção com envio automático de "Dossiê".
* **Utilitários:**
    * Leitor de Smart Tag (QR/NFC).
    * Mural colaborativo de **Pets Desaparecidos**.

### 💻 Painel Web (ONG / Administrador)
* **Gestão de Processos:**
    * Visualização de solicitações pendentes.
    * Acesso ao "Relatório de IA" sobre o candidato.
* **Controle de Estoque (Pets):**
    * Cadastro de animais e vínculo com Smart Tags.
    * Gestão de vacinas e histórico médico.
* **Aprovação:**
    * Ferramentas para Aprovar (transfere a posse digital) ou Recusar solicitações.

---

## 🛠 5. Stack Tecnológica

O projeto utiliza uma arquitetura **Full Stack JavaScript** moderna.

| Camada | Tecnologia | Detalhes |
| :--- | :--- | :--- |
| **Mobile** | **React Native** | Framework principal. |
| **Plataforma** | **Expo** | Gerenciamento de build e acesso nativo (NFC/Câmera). |
| **Front-end Web** | **React.js** | SPA para o painel administrativo. |
| **Build Tool** | **Vite** | Compilação rápida e otimizada. |
| **Back-end** | **Node.js** | Runtime de servidor. |
| **Framework API** | **Express.js** | API RESTful. |
| **Banco de Dados** | **MySQL** | Armazenamento relacional (via Sequelize ORM). |
| **Automação** | **n8n** | Orquestração dos fluxos de dados. |
| **Design** | **Figma** | Prototipagem de UI/UX. |

---

## 📂 6. Estrutura de Pastas

A organização do código segue o padrão de monorepo lógico:

```bash
petlar-project/
├── backend/            # API (Node.js + Express)
│   ├── src/
│   │   ├── controllers/# Lógica das rotas
│   │   ├── models/     # Modelos do Banco (Sequelize)
│   │   ├── services/   # Integração com AI e n8n
│   │   └── routes/     # Endpoints da API
│   └── .env            # Variáveis de ambiente
│
├── frontend-web/       # Painel Admin (React + Vite)
│   ├── src/
│   │   ├── components/ # Componentes reutilizáveis
│   │   ├── pages/      # Telas do Dashboard
│   │   └── services/   # Conexão com a API (Axios)
│
└── mobile/             # App do Usuário (Expo)
    ├── src/
    │   ├── screens/    # Telas do App
    │   ├── context/    # AuthContext e UserContext
    │   └── components/ # Botões, Cards, Inputs
    └── app.json        # Configuração do Expo
````

-----

## 📦 7. Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente.

### Pré-requisitos

  * Node.js (v18 ou superior)
  * MySQL Server rodando
  * Expo Go instalado no celular (para testar o mobile)

### Passo 1: Back-end (API)

```bash
# 1. Clone o repositório
git clone [https://github.com/seu-usuario/petlar.git](https://github.com/seu-usuario/petlar.git)

# 2. Entre na pasta
cd petlar/backend

# 3. Instale as dependências
npm install

# 4. Configure as variáveis de ambiente
# Crie um arquivo .env na raiz do backend e preencha:
# DB_HOST=localhost
# DB_USER=root
# DB_PASS=sua_senha
# OPENAI_API_KEY=sua_chave_aqui

# 5. Execute as migrações do banco
npx sequelize-cli db:migrate

# 6. Inicie o servidor
npm run dev
```

### Passo 2: Front-end (Web)

```bash
# 1. Entre na pasta web
cd ../frontend-web

# 2. Instale as dependências
npm install

# 3. Rode o projeto
npm run dev
# O painel estará acessível em: http://localhost:5173
```

### Passo 3: Mobile (App)

```bash
# 1. Entre na pasta mobile
cd ../mobile

# 2. Instale as dependências
npm install

# 3. Inicie o Expo
npx expo start
# Escaneie o QR Code gerado com o app Expo Go no seu celular.
```

-----

## 🛡️ 8. Conformidade Legal

Este projeto foi desenvolvido respeitando as diretrizes éticas e legais vigentes no Brasil.

1.  **LGPD (Lei Geral de Proteção de Dados):**
      * Coleta mínima de dados.
      * Consentimento explícito para processamento via IA.
2.  **Bem-Estar Animal:**
      * A tecnologia serve como meio para a Posse Responsável.
      * Termos de responsabilidade são assinados digitalmente.

-----

## 🤝 9. Colaboradores
Pedro Henrique Coltro
Lucas D'ávila Martins
