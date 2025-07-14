# 🚀 Desafio Angular 19 - Aplicação Standalone com Componentes e Rotas

Este é um projeto Angular 19 desenvolvido como parte de um desafio técnico. A aplicação foi criada usando o novo modelo **standalone**, com boas práticas de componentização, serviços e integração com API REST.

## 🧩 Funcionalidades

A aplicação contém 3 páginas principais:

### 1. 🏠 Página Inicial (Home)
- Exibe dois botões:
  - **Calcular Área ao Quadrado**
  - **Autenticar e Listar Dados**
- Permite navegação entre os componentes através de rotas.

### 2. 📐 Calcular Área ao Quadrado
- Inputs para **largura** e **altura**
- Calcula a fórmula: `(largura × altura)²`
- Exibe o resultado na própria tela
- Botão para **voltar à página inicial**

### 3. 🔐 Autenticar e Listar Dados
- Consome a API pública: [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)
- Exibe os campos `title` e `body` em uma tabela estilizada
- Botão para **voltar à página inicial**

---

## 🛠️ Tecnologias Utilizadas

- Angular 19 (Standalone)
- TypeScript
- HTML e CSS
- API REST pública (jsonplaceholder)
- Angular Router
- Forms Module para `[(ngModel)]`
- HTTP Client Module

---

## ▶️ Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

src/
├── app/
│   ├── home/
│   ├── calcular-quadrado/
│   ├── auth-api/
│   ├── app.routes.ts
│   └── app.component.ts
├── main.ts
└── index.html

📄 Licença
Este projeto foi desenvolvido para fins de estudo. Fique à vontade para usar como referência.

✍️ Autor
Feito com 💻 por Thiago de Assis.
