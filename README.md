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
- [Expo](https://expo.dev/go) no dispositivo físico *(para desenvolvimento rápido)*
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

# Para iniciar o programa
npm run web ou npm run android
```
---

## Estrutura do Projeto

```
assets/
├── expo.icon/
│   └── Assets/
│       └── grid.png
└── images/
    ├── android-icon-background.png
    ├── android-icon-foreground.png
    ├── android-icon-monochrome.png
    ├── expo-badge-white.png
    ├── expo-badge.png
    ├── expo-logo.png
    ├── favicon.png
    ├── icon.png
    ├── logo-glow.png
    ├── react-logo.png
    ├── react-logo@2x.png
    ├── react-logo@3x.png
    ├── splash-icon.png
    ├── tutorial-web.png
    └── tabIcons/                           # Ícones da tab bar (PNG)
        ├── explore.png
        ├── explore@2x.png
        ├── explore@3x.png
        ├── home.png
        ├── home@2x.png
        └── home@3x.png
src/
├── Api/
│   ├── MenuCarrinho.tsx                    # Chamadas à API do carrinho
│   ├── Produto.ts                          # Chamadas à API de produtos
│   └── apiConfig.ts                        # Configuração base do Axios/API
├── Components/
│   ├── HeaderBack.tsx                      # Componente de cabeçalho com voltar
│   └── Stepper/                            # Componente de etapas
│       ├── Stepper.tsx
│       └── styles.tsx
├── Hooks/
│   ├── useMenuCarrinho.tsx                 # Hook customizado do carrinho
│   └── useProduto.ts                       # Hook customizado de produto
├── Navigation/
│   └── rotas.tsx                           # Definição de rotas/navegação
├── Screens/
│   ├── Carrinho/                           # Tela do carrinho
│   │   ├── Screens/
│   │   │   ├── MenuCarrinho.tsx            # Listagem de itens do carrinho
│   │   │   └── styles.tsx
│   │   └── index.tsx
│   ├── Endereco/                           # Tela de endereço
│   │   ├── Componets/
│   │   │   └── CardEndereco/              # Card de endereço salvo
│   │   │       ├── CardEndereco.tsx
│   │   │       └── styles.tsx
│   │   ├── Screens/
│   │   │   ├── Endereco.tsx               # Tela principal de endereço
│   │   │   └── styles.tsx
│   │   └── index.tsx
│   ├── Pagamento/                          # Tela de pagamento
│   │   ├── Components/
│   │   │   └── OpcaoPagamento/            # Componente de opção de pagamento
│   │   │       ├── OpcaoPagamento.tsx
│   │   │       └── styles.tsx
│   │   ├── Screens/
│   │   │   ├── Pagamento/                 # Seleção de método de pagamento
│   │   │   │   ├── Pagamento.tsx
│   │   │   │   └── styles.tsx
│   │   │   └── PaguePix/                  # Fluxo de pagamento via Pix
│   │   │       ├── PaguePix.tsx
│   │   │       └── styles.tsx
│   │   └── index.tsx
│   ├── Pedido/                             # Tela de pedido
│   │   ├── Screens/
│   │   │   ├── PedidoConfirmado.tsx       # Confirmação de pedido
│   │   │   └── styles.tsx
│   │   └── index.tsx
│   └── Produto/                            # Tela de produto
│       ├── Screens/
│       │   ├── Produto.tsx                # Detalhe do produto
│       │   └── styles.tsx
│       └── index.tsx
├── Styles/
│   └── commonStyles.tsx                    # Estilos globais compartilhados
├── Types/
│   ├── Produto.ts                          # Tipos TypeScript de produto
│   └── navigation.ts                       # Tipos de navegação TypeScript
└── app.tsx                                 # Entrada principal da aplicação

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
