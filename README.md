# 💰 CoinAnalytics

Uma aplicação web moderna para análise e visualização de dados de criptomoedas em tempo real, desenvolvida com React, TypeScript e Vite.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Uso](#-uso)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Deploy](#-deploy)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Utilizada](#-api-utilizada)
- [Contribuindo](#-contribuindo)
- [Licença](#-licença)

## 🎯 Sobre o Projeto

CoinAnalytics é uma plataforma que permite aos usuários visualizar informações atualizadas sobre criptomoedas, incluindo preços, valores de mercado, volumes de negociação e variações percentuais. A aplicação oferece uma interface intuitiva e responsiva para explorar o mercado de criptomoedas.

## ✨ Funcionalidades

- 📊 **Listagem de Criptomoedas**: Visualize as principais criptomoedas do mercado
- 🔍 **Busca de Moedas**: Pesquise criptomoedas específicas pelo nome
- 📈 **Detalhes Completos**: Acesse informações detalhadas sobre cada criptomoeda
- 💵 **Formatação de Valores**: Valores formatados em USD com notação compacta
- 📱 **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- ⚡ **Paginação**: Carregue mais resultados conforme necessário
- 🎨 **Indicadores Visuais**: Destaque para variações positivas e negativas

## 🛠 Tecnologias

- **[React](https://react.dev/)** (v19.2.0) - Biblioteca JavaScript para construção de interfaces
- **[TypeScript](https://www.typescriptlang.org/)** (v5.9.3) - Superset tipado do JavaScript
- **[Vite](https://vite.dev/)** (v7.2.4) - Build tool e dev server rápido
- **[React Router](https://reactrouter.com/)** (v7.12.0) - Roteamento para aplicações React
- **[React Icons](https://react-icons.github.io/react-icons/)** (v5.5.0) - Biblioteca de ícones
- **[ESLint](https://eslint.org/)** - Linter para qualidade de código

## 📦 Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)

## 🚀 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/coinanalytics.git
```

2. Entre no diretório do projeto:
```bash
cd coinanalytics
```

3. Instale as dependências:
```bash
npm install
```

## ⚙️ Configuração

1. Crie um arquivo `.env` na raiz do projeto:
```bash
cp .env.example .env
```

2. Adicione sua API Key do CoinCap:
```env
VITE_COINCAP_API_KEY=sua_api_key_aqui
```

> **Nota**: Para obter uma API Key gratuita, acesse [CoinCap API](https://docs.coincap.io/)

## 💻 Uso

### Modo de Desenvolvimento

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

Gere os arquivos otimizados para produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`

### Preview da Build

Visualize a build de produção localmente:

```bash
npm run preview
```

## 📜 Scripts Disponíveis

Markdown Preview Enhanced- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar o código

## 🌐 Deploy

### Deploy no Vercel

1. Faça push do código para um repositório Git (GitHub, GitLab, Bitbucket)

2. Acesse [Vercel](https://vercel.com) e faça login

3. Clique em "Add New Project" e conecte seu repositório

4. Configure as variáveis de ambiente:
   - Nome: `VITE_COINCAP_API_KEY`
   - Valor: Sua API Key do CoinCap
   - Ambientes: Production, Preview, Development

5. Clique em "Deploy"

O Vercel detectará automaticamente que é um projeto Vite e configurará o build corretamente.

### Configuração do Vercel

O projeto já inclui um arquivo `vercel.json` configurado para suportar rotas SPA (Single Page Application).

## 📁 Estrutura do Projeto

```
coinanalytics/
├── public/                 # Arquivos estáticos públicos
│   └── logo.png
├── src/
│   ├── assets/            # Recursos da aplicação
│   │   └── logo.png
│   ├── components/        # Componentes reutilizáveis
│   │   ├── header/        # Cabeçalho da aplicação
│   │   └── layout/        # Layout principal
│   ├── pages/             # Páginas da aplicação
│   │   ├── home/          # Página inicial (listagem)
│   │   ├── detail/        # Página de detalhes
│   │   └── notfound/      # Página 404
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Ponto de entrada
│   ├── router.tsx         # Configuração de rotas
│   └── index.css          # Estilos globais
├── .env                   # Variáveis de ambiente (não versionado)
├── .gitignore            # Arquivos ignorados pelo Git
├── index.html            # HTML principal
├── package.json          # Dependências e scripts
├── tsconfig.json         # Configuração TypeScript
├── vite.config.ts        # Configuração Vite
└── vercel.json           # Configuração Vercel
```

## 🔌 API Utilizada

Este projeto utiliza a [CoinCap API](https://docs.coincap.io/) para obter dados de criptomoedas em tempo real.

### Endpoints Utilizados

- `GET /v3/assets` - Lista de criptomoedas
- `GET /v3/assets/:id` - Detalhes de uma criptomoeda específica

### Documentação

Para mais informações sobre a API, consulte: [CoinCap API Documentation](https://docs.coincap.io/)


## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**

- GitHub: [@HadiltonSelis](https://github.com/HadiltonSelis)
- LinkedIn: [Hadilton Silva](https://www.linkedin.com/in/hadiltonsilva/)

## 🙏 Agradecimentos

- [CoinCap](https://www.coincap.io/) pela API gratuita
- Comunidade React e Vite pelo excelente ecossistema

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!

