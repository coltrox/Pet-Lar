# 🐾 PetLar - Sistema de Adoção Consciente de Animais

📱💻 **Projeto de TCC**

O **PetLar** é um aplicativo completo que promove a adoção consciente de pets, integrando tecnologias de desenvolvimento **web**, **mobile**, **banco de dados**, **design de interfaces** e **sistemas embarcados (Arduino)**. O objetivo é conectar pessoas interessadas em adotar animais de forma responsável, levando em consideração o tamanho do pet e o espaço físico disponível na residência do adotante.

Além da principal funcionalidade, que é a adoção personalizada, o sistema também oferece um módulo dedicado à **busca de animais desaparecidos**, facilitando o reencontro de tutores com seus pets.

---

## 🎯 Objetivo do Projeto

Garantir que os animais sejam adotados por famílias preparadas para recebê-los, respeitando critérios como tipo de residência (apartamento, casa pequena, casa grande) e perfil do pet (porte, grau de atividade física, necessidades específicas).

O aplicativo apresentará sugestões de pets de acordo com o local de moradia do usuário e com os resultados de um **questionário personalizado** sobre gostos, estilo de vida e preferências comportamentais. A partir dessas informações, o sistema recomendará animais por raça, porte e grau de necessidade física, garantindo uma melhor compatibilidade entre o pet e seu futuro tutor.

---

## 👤 Cadastro de Usuários

Para solicitar a adoção de um pet, o usuário deverá realizar um cadastro completo na plataforma, fornecendo os seguintes dados:

* Nome completo
* RG
* CPF
* Número de telefone
* E-mail
* Comprovante de residência
* Respostas ao **questionário de personalidade e estilo de vida**

Após o envio dos dados, a ONG responsável pelo ponto de adoção realizará a análise e validação manual da documentação.

> O sistema **permite que qualquer pessoa visualize os pets disponíveis para adoção**, mas somente usuários **com cadastro validado** poderão enviar uma **solicitação de adoção**.

A validação pelas ONGs garante um processo de adoção consciente e seguro. Após a aprovação, o usuário passa a ter acesso à funcionalidade de **solicitação de adoção de animais** pelo aplicativo ou site.

Além disso, com base nas respostas do questionário, o sistema apresentará sugestões de pets compatíveis com o perfil do adotante, utilizando critérios como:

* Tipo de residência
* Preferências comportamentais
* Estilo de vida
* Tempo disponível para cuidados com o pet

---

## 🐶 Cadastro de Pets para Adoção

Informações completas sobre cada animal:

* **Raça**
* **Porte** (Pequeno, Médio, Grande)
* **Perfil comportamental** (ativo, calmo, independente, sociável)
* **Necessidades específicas:**

  * Grau de atividade física (necessidade diária de exercícios e brincadeiras)
  * Alimentação recomendada
  * Cuidados especiais

---

## 📍 Locais de Adoção e Feiras

Listagem dos pontos de adoção ativos e feiras de pets.

Cada local possui:

* Endereço
* Datas e horários de funcionamento
* Lista de pets disponíveis no local com fotos e descrições

---

## 🛒 Adoção Online

O usuário, após ter seu cadastro validado, poderá:

* Escolher um pet disponível no local desejado
* Realizar a solicitação de adoção online

---

## ✅ Sistema de Aprovação pelas ONGs

Cada solicitação de adoção ou cadastro de usuário com documentos passará por um processo de **validação manual feito pela ONG** responsável pelo animal ou ponto de adoção.

A ONG terá autonomia total para aprovar ou recusar:

* Documentos e dados do adotante
* Adoções realizadas pelo aplicativo

Essa validação garante que a ONG continue com **controle completo sobre o processo**, com segurança e responsabilidade.

---

## 📳 Validação Presencial via Arduino + QR Code

No ponto de adoção, haverá um terminal com tecnologia **Arduino** e **QR Code**:

* O adotante aproxima o celular ou escaneia o código
* O sistema verifica seu cadastro
* Caso aprovado, o sistema libera a retirada do pet

---

## 🧩 Área Exclusiva para ONGs

As ONGs parceiras contarão com um **painel administrativo exclusivo**, que permitirá:

* Editar informações dos pets cadastrados
* Gerenciar os pontos de adoção e feiras
* Aprovar ou recusar **novos cadastros de usuários**
* Acessar a **lista de pessoas interessadas** em um determinado pet

⚙️ As pessoas interessadas responderão a um **questionário de personalidade e estilo de vida** no momento do cadastro. Isso facilitará a ONG a identificar o perfil ideal para cada animal e tomar decisões mais assertivas na aprovação da adoção.

📊 O sistema também contará com uma **ferramenta de recomendação automática** que sugere as **raças mais compatíveis** com a rotina da pessoa, levando em consideração fatores como:

* Gasto de energia diário do animal
* Necessidades específicas
* Comportamento (mais agitado ou mais calmo)

---

## 🔍 Funcionalidade Extra: Pets Desaparecidos

O PetLar também terá um módulo específico para auxiliar na busca de pets desaparecidos. O tutor poderá cadastrar:

* Raça
* Cor
* Nome pelo qual o animal atende
* Foto do pet
* Descrição adicional (características marcantes, comportamento)
* Local e data do desaparecimento
* Dados de contato (telefone, e-mail)

Essas informações ficarão **disponíveis publicamente** para todos os usuários, aumentando as chances de reencontro.

---

## 🗣️ Perguntas Feitas às ONGs Parceiras

* Como funciona o processo de adoção responsável na sua ONG ou em parcerias?
* Quais documentos costumam pedir de quem quer adotar um pet?
* Existe algum termo de responsabilidade que os adotantes precisam assinar?
* Quais critérios vocês consideram importantes para aprovar ou recusar uma adoção?
* Como organizam e mantêm os dados dos animais (vacinas, saúde, histórico)?
* Que informações são essenciais sobre o pet para divulgar em um app de adoção?
* Como vocês lidam com casos de pets desaparecidos?

---

## 🐾 Perguntas Feitas à Veterinária

* Quais documentos normalmente são exigidos para alguém adotar um pet de forma responsável?
* É comum exigir comprovante de residência e documento com foto no processo de adoção?
* Existe algum modelo padrão de termo de responsabilidade que os adotantes devem assinar?
* O atestado de saúde do animal é obrigatório no momento da adoção? Quem costuma emitir esse documento?
* Quais informações médicas básicas (vacinas, vermifugação, castração) devem constar no histórico entregue ao novo tutor?
* Como é feita a atualização do prontuário de saúde de um animal em caso de adoção por meio de uma ONG ou feira?
* Você acredita que a exigência de documentos e critérios rigorosos ajuda na redução de devoluções ou maus-tratos?
* Existe alguma exigência legal ou orientação de conselhos veterinários sobre como documentar uma adoção de forma ética e segura?

---

## 🛠 Tecnologias Utilizadas

### 🌐 Desenvolvimento Web

* Front-end: HTML, CSS, JavaScript, React
* Back-end: Java (API REST)

### 📱 Desenvolvimento Mobile

* React Native

### 💾 Banco de Dados

* MySQL

### 🔌 Sistemas Embarcados

* Arduino + C (para interação com QR Code)

### 🎨 Design

* Figma

---

## 📑 Arquitetura do Sistema

```
Usuário
  ↳ Aplicativo Mobile/Web
    ↳ API (Java)
      ↳ Banco de Dados (SQL)
Ponto de Adoção
  ↳ Dispositivo Arduino (QR Code)
    ↳ Integração com API para validação
ONG
  ↳ Painel administrativo (Web)
    ↳ Gerenciamento completo do processo
```

---

## 🏗 Requisitos Funcionais

* **RF01** – O sistema deve permitir cadastro de usuários com validação de documentos e comprovação de endereço.
* **RF02** – O sistema deve listar pets de acordo com o tipo de residência do usuário.
* **RF03** – O usuário pode buscar locais de adoção e feiras na sua cidade.
* **RF04** – O sistema deve permitir adoção online, vinculada ao local.
* **RF05** – A confirmação da adoção deve ser feita por aproximação no ponto físico (Arduino + QR Code).
* **RF06** – O sistema deve aplicar um questionário de preferências ao usuário e, com base nos resultados, sugerir pets compatíveis por raça, porte e grau de atividade física.
* **RF07** – O sistema deve permitir o cadastro de pets desaparecidos, com informações como raça, cor, nome pelo qual atende, foto, descrição e dados de contato do tutor.
* **RF08** – O sistema deve disponibilizar uma seção pública com a listagem dos pets desaparecidos e os respectivos contatos dos tutores.
* **RF09** – As ONGs terão acesso a um painel administrativo para aprovar ou recusar adoções e cadastros, editar informações de pets, e consultar interessados.

---

## 🔐 Requisitos Não Funcionais

* **RNF01** – O sistema deve ser responsivo.
* **RNF02** – A autenticação dos usuários deve ser segura.
* **RNF03** – As informações dos pets devem ser atualizadas em tempo real.
* **RNF04** – O sistema Arduino deve ser robusto e suportar múltiplas conexões simultâneas.

---

## 🤝 Colaboradores

* **Pedro Henrique Coltro**
* **Lucas D'ávila Martins**
