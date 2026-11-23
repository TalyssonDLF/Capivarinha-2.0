# Capivarinha 2.0

> Base de aplicação **full stack** organizada em frontend React e backend NestJS.

![React](https://img.shields.io/badge/React-149ECA?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![Status](https://img.shields.io/badge/status-estrutura_inicial-8B80F9?style=flat-square)

## Visão geral

Este repositório reúne duas aplicações distintas para explorar a separação entre **interface do usuário** e **API HTTP**.

**Situação verificada no código:** a versão publicada no repositório ainda contém principalmente os projetos iniciais gerados pelo Vite/React e pelo NestJS. O frontend exibe a tela de exemplo do Vite, enquanto o backend expõe a rota de exemplo que retorna `Hello World!`. Ainda não há integração funcional entre os dois lados nesta versão.

Documentar claramente o estágio de um projeto ajuda quem está avaliando o portfólio a diferenciar **estrutura existente** de **funcionalidades planejadas**.

## Stack e organização

```text
Capivarinha-2.0/
  frontend/
    src/
      App.tsx            # tela React inicial
      main.tsx           # ponto de entrada
    package.json         # Vite, React e TypeScript
  backend/
    src/
      app.controller.ts  # rota GET /
      app.service.ts     # retorno de exemplo
      app.module.ts      # composição do NestJS
    package.json
```

| Camada | Tecnologias | Estado |
|:--|:--|:--|
| Frontend | React 19, TypeScript, Vite | Scaffold inicial |
| Backend | NestJS 11, TypeScript | API básica de exemplo |
| Integração | Comunicação entre frontend e API | Ainda não implementada no código atual |

## Como executar

É necessário **Node.js compatível com os projetos** e npm. Abra dois terminais.

**Terminal 1 — backend:**

```bash
cd backend
npm install
npm run start:dev
```

API: `http://localhost:3000/` (rota de exemplo).

**Terminal 2 — frontend:**

```bash
cd frontend
npm install
npm run dev
```

Frontend: normalmente `http://localhost:5173/` (confirme a URL no terminal).

### Scripts úteis

Em ambos os diretórios é possível executar `npm run build`. No frontend, `npm run lint` também está disponível; no backend, há scripts de testes Jest, sem que isso implique cobertura verificada.

## Próximas etapas propostas

1. Definir o objetivo funcional do Capivarinha 2.0 e os principais casos de uso.
2. Criar o layout próprio e remover a tela de exemplo do Vite.
3. Modelar recursos e implementar endpoints reais.
4. Integrar o frontend à API, com estados de carregamento e erro.
5. Adicionar validação, testes e documentação dos fluxos.

## O que este repositório demonstra hoje

- Organização inicial de um workspace com camadas separadas.
- Configuração de ferramentas modernas para frontend e backend em TypeScript.
- Base para evolução incremental e experimentação com aplicações full stack.

---

**Projeto em estágio inicial**, mantido por [Talysson Decol](https://github.com/TalyssonDLF). O README será atualizado conforme funcionalidades reais forem adicionadas.
