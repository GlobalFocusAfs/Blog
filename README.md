# Blog Project

Este projeto é uma aplicação web com backend em Java (Spring Boot) e frontend em React.

## Estrutura do Projeto

- backend/: código fonte do backend em Java com Spring Boot
- frontend/: código fonte do frontend em React

## Como rodar o projeto

### Backend

Para rodar o backend, navegue até a pasta `backend` e execute:

```powershell
.\mvnw spring-boot:run
```

> **Nota para Windows PowerShell:** Caso receba erro informando que o comando `.\mvnw` não foi encontrado, certifique-se de estar no diretório correto e que o arquivo `mvnw` existe. Use o comando com `.\` para executar scripts locais.

> **Nota:** Certifique-se de que a variável de ambiente `JAVA_HOME` esteja configurada corretamente no seu sistema, apontando para a instalação do Java. Caso não esteja configurada, siga os passos abaixo para configurá-la no Windows:

1. Abra o menu Iniciar e pesquise por "Variáveis de Ambiente". Clique em "Editar as variáveis de ambiente do sistema".
2. Na janela "Propriedades do Sistema", clique no botão "Variáveis de Ambiente...".
3. Em "Variáveis do sistema", clique em "Novo..." para criar uma nova variável.
4. No campo "Nome da variável", digite: `JAVA_HOME`
5. No campo "Valor da variável", insira o caminho da pasta onde o Java está instalado. Exemplo: `C:\Program Files\Java\jdk-17.0.2`
6. Clique em OK para salvar e feche todas as janelas.
7. Para verificar se a variável foi configurada corretamente, abra um novo terminal e execute: `echo %JAVA_HOME%`

### Frontend

Para rodar o frontend, navegue até a pasta `frontend` e execute:

```bash
npm install
npm start
```

## Como importar para o GitHub

1. Inicialize um repositório git na raiz do projeto (se ainda não existir):

```bash
git init
```

2. Adicione todos os arquivos:

```bash
git add .
```

3. Faça o commit inicial:

```bash
git commit -m "Commit inicial do projeto"
```

4. Crie um repositório no GitHub e copie a URL do repositório remoto.

5. Adicione o repositório remoto:

```bash
git remote add origin <URL_DO_REPOSITORIO>
```

6. Envie os arquivos para o GitHub:

```bash
git push -u origin master
```

Substitua `<URL_DO_REPOSITORIO>` pela URL do seu repositório GitHub.
