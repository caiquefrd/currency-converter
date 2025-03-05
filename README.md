🚀 Conversor de Moedas

Este projeto é um conversor de moedas desenvolvido com React + TypeScript, consumindo uma API externa para obter taxas de câmbio atualizadas.

📌 Funcionalidades

Seleção de moedas de origem e destino.

Conversão em tempo real usando uma API de câmbio.

Interface responsiva e intuitiva.

🛠 Tecnologias Utilizadas

React (com Vite)

TypeScript

Axios (para requisições HTTP)

CSS (para estilização)

📂 Estrutura do Projeto

/currency-converter
├── src
│   ├── components
│   │   ├── CurrencyConverter.tsx
│   ├── api.ts
│   ├── App.tsx
│   ├── main.tsx
│   ├── styles.css
├── index.html
├── tsconfig.json
├── package.json
├── README.md

🚀 Como Executar o Projeto

1️⃣ Clonar o Repositório

git clone https://github.com/caiquefrd/currency-converter.git
cd currency-converter

2️⃣ Instalar Dependências

npm install

3️⃣ Rodar o Servidor

npm run dev

O projeto será iniciado em http://localhost:5173.

🔧 Configuração da API

Este projeto usa a API Exchange Rate API para obter as taxas de câmbio.
Se desejar alterar a API, modifique o arquivo api.ts com a URL da nova API escolhida.



