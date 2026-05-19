<div align="center">
    <img src="https://raw.githubusercontent.com/Vitryne/.github/main/assets/logotipoGradiente.png" width="280" />
    <h1>Aplicativo mobile da plataforma Vitryne</h1>
    <p>Catálogo, compras e rastreamento de pedidos para consumidores — gestão de entregas para entregadores.</p>
    <br>

[![Mobile](https://skillicons.dev/icons?i=react,ts,docker)](https://skillicons.dev)
</div>

---

## Sobre

O `vitryne-mobile` é o aplicativo mobile da plataforma Vitryne, desenvolvido com React Native e Expo. Serve dois perfis distintos com interfaces separadas:

- **Consumidor** — onboarding, catálogo de lojas locais, busca por proximidade, carrinho, checkout, acompanhamento de pedidos em tempo real e perfil.
- **Entregador** — disponibilidade online/offline, recebimento e aceite de entregas, confirmação de coleta e entrega com validação por geofencing e histórico de ganhos.

A interface consome a API REST do [`vitryne-backend`](https://github.com/Vitryne/vitryne-backend) e se comunica via WebSocket para atualizações em tempo real de status de pedido e rastreamento.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | React Native + Expo (SDK 52+) |
| Linguagem | TypeScript |
| Navegação | Expo Router (file-based routing) |
| Fonte | Poppins — `@expo-google-fonts/poppins` |
| Requisições HTTP | Axios |
| Tempo real | WebSocket (nativo) |
| Notificações push | Expo Notifications + FCM |

---

## Pré-requisitos

- [Node.js 20+](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/more/expo-cli/) — `npm install -g expo-cli`
- [Expo Go](https://expo.dev/go) no dispositivo físico *(para desenvolvimento rápido)*
- Emulador Android (Android Studio) ou Simulador iOS (Xcode) *(opcional)*
- [`vitryne-backend`](https://github.com/Vitryne/vitryne-backend) rodando localmente ou em staging

---

## Instalação

```bash
# Clone o repositório
git clone https://github.com/Vitryne/vitryne-mobile.git
cd vitryne-mobile

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env

# Inicie o servidor de desenvolvimento
npx expo start
```

Com o servidor rodando, escaneie o QR Code com o **Expo Go** no celular ou pressione:

- `a` para abrir no emulador Android
- `i` para abrir no simulador iOS

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com base no `.env.example`:

```env
# URL base da API
EXPO_PUBLIC_API_URL=http://192.168.x.x:8080/api/v1

# URL do WebSocket
EXPO_PUBLIC_WS_URL=ws://192.168.x.x:8080/ws

# Gateway de pagamento (chave pública)
EXPO_PUBLIC_PAYMENT_GATEWAY_KEY=sua_chave_publica
```

> Use o IP local da máquina (não `localhost`) para que o dispositivo físico consiga alcançar a API. **Nunca versione o arquivo `.env` com credenciais reais.**

---

## Estrutura do Projeto

```
app/                        # Expo Router — rotas e layouts (file-based)
├── (consumer)/             # Grupo de rotas do consumidor
│   ├── (tabs)/             # Tab bar — Home, Busca, Carrinho, Pedidos, Perfil
│   │   ├── index.tsx       # Home — banners, categorias e lojas abertas
│   │   ├── search.tsx      # Busca e filtros
│   │   ├── cart.tsx        # Carrinho
│   │   ├── orders.tsx      # Pedidos e histórico
│   │   └── profile.tsx     # Perfil do consumidor
│   ├── product/[id].tsx    # Detalhe do produto
│   ├── store/[id].tsx      # Perfil da loja
│   └── checkout.tsx        # Checkout e pagamento
├── (deliverer)/            # Grupo de rotas do entregador
│   └── (tabs)/             # Tab bar — Entregas, Histórico, Perfil
├── auth/                   # Login, registro e recuperação de senha
│   ├── login.tsx
│   ├── register.tsx
│   └── forgot-password.tsx
├── onboarding.tsx          # Fluxo de onboarding (4 telas)
└── _layout.tsx             # Layout raiz com providers globais

assets/
├── fonts/                  # Poppins (pesos 200–700) copiados localmente
└── icons/                  # Ícones da tab bar (PNG, gerados via SVG)

src/
├── components/
│   └── ui/                 # Componentes reutilizáveis (botões, cards, inputs)
├── features/               # Módulos por funcionalidade
│   ├── auth/
│   ├── catalog/
│   ├── cart/
│   ├── orders/
│   ├── delivery/
│   └── profile/
├── hooks/                  # Custom hooks
├── services/               # Instâncias Axios e chamadas à API
├── types/                  # Tipos e interfaces TypeScript globais
└── utils/                  # Funções utilitárias
```

---

## Telas Implementadas

| Tela | Perfil | Status |
|---|---|---|
| Onboarding (4 telas) | Consumidor | ✅ Concluído |
| Login | Ambos | ✅ Concluído |
| Registro | Consumidor | ✅ Concluído |
| Home | Consumidor | ✅ Concluído |
| Pedidos | Consumidor | ✅ Concluído |
| Perfil | Consumidor | ✅ Concluído |

---

## Compatibilidade

| Plataforma | Versão mínima |
|---|---|
| Android | 8.0 (API 26) |
| iOS | 13.0 |

---

## Build de Produção

O projeto utiliza **EAS Build** (Expo Application Services) para gerar os binários de produção:

```bash
# Instale o EAS CLI
npm install -g eas-cli

# Configure o projeto (necessário apenas uma vez)
eas build:configure

# Build para Android (.apk / .aab)
eas build --platform android

# Build para iOS (.ipa)
eas build --platform ios
```

---

## Outros Repositórios

| Repositório | Descrição |
|---|---|
| [vitryne-backend](https://github.com/Vitryne/vitryne-backend) | API REST — Java + Spring Boot |
| [vitryne-web](https://github.com/Vitryne/vitryne-web) | Portal web — Next.js + TypeScript |
| [vitryne-docs](https://github.com/Vitryne/vitryne-docs) | Documentação técnica e acadêmica |

---

<details>
<summary>Contexto acadêmico</summary>

O `vitryne-mobile` é desenvolvido como parte do Trabalho de Conclusão de Curso da turma de 2026 da **Escola de TI**. Para os artefatos acadêmicos completos (diagramas UML, requisitos, regras de negócio e fluxos), consulte [vitryne-docs](https://github.com/Vitryne/vitryne-docs).

</details>