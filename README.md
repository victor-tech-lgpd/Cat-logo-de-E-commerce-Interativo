Catálogo de E-commerce Interativo com React
Uma aplicação web moderna e responsiva de um catálogo de e-commerce, construída com React, TypeScript e Vite. A aplicação consome a FakeStoreAPI para exibir produtos, oferece funcionalidades avançadas de filtragem e ordenação, e inclui um carrinho de compras persistente gerenciado com Zustand.

(Dica: Tire um print da sua aplicação rodando e substitua o link acima para mostrar uma pré-visualização)

✨ Funcionalidades
Listagem de Produtos: Exibição dos produtos em um layout de grade responsivo.    

Filtro por Categoria: Permite filtrar os produtos por categorias específicas.    

Ordenação: Classifica os produtos por preço (crescente e decrescente).    

Barra de Pesquisa: Filtra produtos dinamicamente pelo título.    

Página de Detalhes: Rota dedicada para cada produto com informações completas.    

Carrinho de Compras:

Adicionar e remover itens.

Atualizar a quantidade de cada item.

Cálculo do valor total.

Persistência de Dados: O estado do carrinho é salvo no localStorage, mantendo os itens mesmo após recarregar a página.    

Feedback Visual: Notificações "toast" para ações do usuário, como adicionar um item ao carrinho.    

🚀 Tech Stack
Framework:(https://react.dev/)

Linguagem:(https://www.typescriptlang.org/)

Ferramenta de Build: Vite

Estilização:(https://tailwindcss.com/)

Roteamento:(https://reactrouter.com/)

Gerenciamento de Estado: Zustand

Notificações:(https://fkhadra.github.io/react-toastify/introduction)

Testes: Vitest +(https://testing-library.com/)    

API:(https://fakestoreapi.com/)    

⚙️ Como Começar
Siga os passos abaixo para configurar e rodar o projeto em seu ambiente local.

Pré-requisitos
Node.js (versão 18 ou superior)

Git

Instalação
Clone o repositório:

Bash

git clone https://github.com/victor-tech-lgpd/Cat-logo-de-E-commerce-Interativo.git
Navegue para o diretório do projeto:

Bash

cd Cat-logo-de-E-commerce-Interativo
Instale as dependências:

Bash

npm install
Executando a Aplicação
Para iniciar o servidor de desenvolvimento, execute:

Bash

npm run dev
A aplicação estará disponível em http://localhost:5173.

Executando os Testes
Para rodar os testes unitários e de componentes, execute:    

Bash

npm run test
☁️ Deploy
Este projeto está pronto para o deploy! Você pode hospedá-lo facilmente em plataformas como:

Vercel

Netlify    

Ambas as plataformas se integram perfeitamente com repositórios do GitHub, automatizando o processo de build e deploy a cada push para a branch main.
