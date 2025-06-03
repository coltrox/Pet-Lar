Perfeito! Aqui está o documento completo, já com a funcionalidade de pets desaparecidos devidamente integrada e atualizada, incluindo a substituição de “porte” por “nome pelo qual o animal atende” na seção de desaparecidos:

---

# 🐾 *PetMatch - Sistema de Adoção Consciente de Animais*

## 📱💻 Projeto de TCC

O *PetMatch* é um aplicativo completo que promove a *adoção consciente de pets*, integrando tecnologias de desenvolvimento **web, mobile, banco de dados, design de interfaces e sistemas embarcados (Arduino)**. O objetivo é conectar pessoas interessadas em adotar animais de forma responsável, levando em consideração o tamanho do pet e o espaço físico disponível na residência do adotante.

Além da principal funcionalidade, que é a **adoção personalizada**, o sistema também oferece um módulo dedicado à **busca de animais desaparecidos**, facilitando o reencontro de tutores com seus pets.

---

## 🎯 *Objetivo do Projeto*

Garantir que os animais sejam adotados por famílias preparadas para recebê-los, respeitando critérios como tipo de residência (apartamento, casa pequena, casa grande) e perfil do pet (porte, grau de atividade física, necessidades específicas). Além disso, facilitar o processo de adoção por meio de um sistema integrado e inteligente.

O aplicativo apresentará sugestões de pets **de acordo com o local de moradia do usuário** e **com os resultados de um questionário personalizado** sobre gostos, estilo de vida e preferências comportamentais. A partir dessas informações, o sistema recomendará animais por **raça, porte e grau de necessidade física**, garantindo uma melhor compatibilidade entre o pet e seu futuro tutor.

---

## 🐶 *Cadastro de Pets para Adoção*

* Informações completas sobre cada animal:

  * Raça
  * Porte (Pequeno, Médio, Grande)
  * Perfil comportamental (ativo, calmo, independente, sociável)
  * Necessidades específicas:

    * Grau de atividade física (necessidade diária de exercícios e brincadeiras)
    * Alimentação recomendada
    * Cuidados especiais

---

## 📍 *Locais de Adoção e Feiras*

* Listagem dos pontos de adoção ativos e feiras de pets.
* Cada local possui:

  * Endereço
  * Datas e horários de funcionamento
  * Lista de pets disponíveis no local com fotos e descrições

---

## 🛒 *Adoção Online*

* O usuário, após ter seu cadastro validado, poderá:

  * Escolher um pet disponível no local desejado
  * Realizar a solicitação de adoção online

---

## 📳 *Validação Presencial via Arduino*

* No ponto de adoção, haverá um terminal com tecnologia Arduino e NFC (ou QR Code)
* O adotante aproxima o celular e o sistema verifica seu cadastro
* Caso aprovado, o sistema libera a retirada do pet

---

## 🔍 *Funcionalidade Extra: Pets Desaparecidos*

Pensando também no bem-estar dos animais e no auxílio à comunidade, o *PetMatch* oferece um módulo específico para ajudar na busca de pets desaparecidos.

O tutor poderá cadastrar informações como:

* **Raça**
* **Cor**
* **Nome pelo qual o animal atende**
* **Foto do pet**
* **Descrição adicional** (características marcantes, comportamento)
* **Local e data do desaparecimento**
* **Dados de contato** (telefone, e-mail)

Essas informações ficarão disponíveis em uma **seção de "Desaparecidos"**, onde qualquer usuário pode acessar, visualizar os animais perdidos e, caso tenha informações, entrar diretamente em contato com os tutores.

---

## 🛠 *Tecnologias Utilizadas*

### 🌐 *Desenvolvimento Web*

* *Front-end:* HTML, CSS, JavaScript, React
* *Back-end:* Java

### 📱 *Desenvolvimento Mobile*

* *React Native*

### 💾 *Banco de Dados*

* *SQL* (MySQL)

### 🔌 *Sistemas Embarcados*

* *Arduino + C* (para interação física nos pontos de adoção)

### 🎨 *Design*

* Figma

---

## 📑 *Arquitetura do Sistema*

```plaintext
Usuário
  ↳ Aplicativo Mobile/Web
    ↳ API (Java)
      ↳ Banco de Dados (SQL)
Ponto de Adoção
  ↳ Dispositivo Arduino (NFC/QR)
    ↳ Integração com API para validação
```

---

## 🏗 *Requisitos Funcionais*

* **RF01** – O sistema deve permitir cadastro de usuários com validação de documentos e comprovação de endereço.
* **RF02** – O sistema deve listar pets de acordo com o tipo de residência do usuário.
* **RF03** – O usuário pode buscar locais de adoção e feiras na sua cidade.
* **RF04** – O sistema deve permitir adoção online, vinculada ao local.
* **RF05** – A confirmação da adoção deve ser feita por aproximação no ponto físico (Arduino).
* **RF06** – O sistema deve aplicar um questionário de preferências ao usuário e, com base nos resultados, sugerir pets compatíveis por raça, porte e grau de atividade física.
* **RF07** – O sistema deve permitir o cadastro de pets desaparecidos, com informações como raça, cor, nome pelo qual atende, foto, descrição e dados de contato do tutor.
* **RF08** – O sistema deve disponibilizar uma seção pública com a listagem dos pets desaparecidos e os respectivos contatos dos tutores.

---

## 🔐 *Requisitos Não Funcionais*

* **RNF01** – O sistema deve ser responsivo.
* **RNF02** – A autenticação dos usuários deve ser segura.
* **RNF03** – As informações dos pets devem ser atualizadas em tempo real.
* **RNF04** – O sistema Arduino deve ser robusto e suportar múltiplas conexões.

---

## 🤝 *Colaboradores*

| Nome                  |
| --------------------- |
| Pedro Henrique Coltro |
| Lucas D'ávila Martins |

