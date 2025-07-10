# 🔥 Ignite Call

Este é um projeto de agendamento desenvolvido com **Next.js**, **TypeScript**, **Prisma**, **NextAuth**, entre outras tecnologias modernas. Ele permite que usuários configurem sua disponibilidade, conectem seu Google Calendar e compartilhem um link para que outras pessoas possam agendar compromissos diretamente.

## 🚀 Funcionalidades

* Autenticação com conta do Google
* Integração com Google Calendar
* Definição de dias e horários disponíveis
* Página pública de agendamento via `/schedule/[username]`
* Evita conflitos com eventos existentes no Google Calendar
* Validação de nome de usuário
* Layout limpo e responsivo com Styled Components

---

## 🧱 Estrutura do Projeto

```bash
📁 prisma               # Configurações e migrações do banco (Prisma)
📁 public               # Arquivos estáticos
📁 src
 ┣ 📁 @types            # Tipagens customizadas (ex: NextAuth)
 ┣ 📁 assets            # Recursos estáticos (ex: imagens)
 ┣ 📁 components        # Componentes reutilizáveis
 ┃ ┗ 📁 Calendar
 ┣ 📁 lib               # Bibliotecas e helpers (axios, prisma, Google API, etc)
 ┣ 📁 pages
 ┃ ┣ 📁 api             # Rotas da API (Next.js API Routes)
 ┃ ┃ ┣ 📁 auth          # Autenticação com NextAuth
 ┃ ┃ ┗ 📁 users         # Endpoints relacionados aos usuários
 ┃ ┗ 📁 home            # Landing page e formulário de username
 ┣ 📁 register          # Fluxo de registro (calendar, perfil, disponibilidade)
 ┣ 📁 schedule          # Página pública para agendamento
 ┣ 📁 styles            # Estilos globais
 ┗ 📁 utils             # Funções utilitárias
```

---

## 🛠️ Tecnologias Utilizadas

* [Next.js](https://nextjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Prisma ORM](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)
* [NextAuth.js](https://next-auth.js.org/) (OAuth com Google)
* [React Query](https://tanstack.com/query)
* [Day.js](https://day.js.org/) (manipulação de datas)
* [Styled Components](https://styled-components.com/)
* [Axios](https://axios-http.com/)

---

## 🧪 Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/dmardoqueu/ignite-call.git
cd ignite-call
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` com base no `.env.example`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/ignitecall"
GOOGLE_CLIENT_ID="sua-chave-google"
GOOGLE_CLIENT_SECRET="seu-segredo-google"
NEXTAUTH_SECRET="uma-string-secreta"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Configure o banco de dados

```bash
npx prisma migrate dev
```

### 5. Inicie o servidor

```bash
npm run dev
# ou
yarn dev
```

---

## 🖼️ Capturas de Tela

<img width="1600" height="791" alt="image" src="https://github.com/user-attachments/assets/01100248-228c-4580-8940-fbe6e3688a0d" />
<img width="1600" height="785" alt="image" src="https://github.com/user-attachments/assets/3c253505-46a4-4c06-afa8-de1288d4dd47" />
<img width="1600" height="789" alt="image" src="https://github.com/user-attachments/assets/972fb445-284e-4d3b-b8a4-0d3b9b03aae1" />
<img width="1600" height="788" alt="image" src="https://github.com/user-attachments/assets/db274f6b-ba73-4d0f-ada8-cb7573042ba2" />
<img width="1600" height="781" alt="image" src="https://github.com/user-attachments/assets/6a9534ac-3c45-445a-b928-cbf5c8809443" />
<img width="1866" height="923" alt="image" src="https://github.com/user-attachments/assets/31272fe8-ff6f-4e37-88f1-3d4f28d86c09" />
<img width="1600" height="791" alt="image" src="https://github.com/user-attachments/assets/ee725e76-a477-4982-bffc-a8781751b1f7" />
<img width="1600" height="789" alt="image" src="https://github.com/user-attachments/assets/96218464-f006-4c08-88a2-4b0891fbe13a" />
<img width="1600" height="789" alt="image" src="https://github.com/user-attachments/assets/974bfb3d-8536-4d29-8287-eb0e6e8fe946" />

