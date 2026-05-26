Este é um projeto [**React Native**](https://reactnative.dev), inicializado com o [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Começando

> **Atenção**: Antes de continuar, certifique-se de ter concluído o guia [Configurando seu Ambiente](https://reactnative.dev/docs/set-up-your-environment).

## Passo 1: Instalar as dependências

A partir da raiz do projeto, instale as dependências:

```sh
# Usando npm
npm install

# OU usando Yarn
yarn install
```

## Passo 2: Iniciar o Metro

O **Metro** é o empacotador (bundler) JavaScript do React Native. A partir da raiz do projeto, rode:

```sh
# Usando npm
npm start

# OU usando Yarn
yarn start
```

Deixe esse terminal aberto e abra uma nova aba/janela para os próximos passos.

## Passo 3: Rodar o app

Com o Metro rodando, em um novo terminal execute o comando de acordo com a plataforma:

### Android

```sh
# Usando npm
npm run android

# OU usando Yarn
yarn android
```

### iOS

No iOS, instale as dependências do CocoaPods (necessário no primeiro clone ou após atualizar dependências nativas):

```sh
# Apenas na primeira vez, instala o próprio CocoaPods
bundle install

# Sempre que atualizar dependências nativas
bundle exec pod install
```

Em seguida, rode o app:

```sh
# Usando npm
npm run ios

# OU usando Yarn
yarn ios
```

Se tudo estiver configurado corretamente, o app deve abrir no Emulador Android, no Simulador iOS ou no seu dispositivo conectado.

> **Dica**: você também pode rodar o app diretamente pelo Android Studio ou pelo Xcode.

## Passo 4: Modificar o app

Agora que o app está rodando, é hora de fazer alterações!

Abra o `App.tsx` no seu editor de preferência e edite à vontade. Ao salvar, o app atualiza automaticamente graças ao [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

Quando precisar recarregar do zero (por exemplo, para resetar o estado do app), faça um reload completo:

- **Android**: pressione a tecla <kbd>R</kbd> duas vezes ou selecione **"Reload"** no **Dev Menu**, acessado via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) ou <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: pressione <kbd>R</kbd> no Simulador iOS.

## Parabéns! :tada:

Você rodou e modificou seu app React Native com sucesso. :partying_face:

# Solução de Problemas

Se algo não funcionar nos passos acima, consulte a página de [Troubleshooting](https://reactnative.dev/docs/troubleshooting).

Alguns comandos úteis quando algo dá errado:

```sh
# Limpar o cache do Metro
npm start -- --reset-cache

# Limanr o build do Android
cd android && ./gradlew clean && cd ..
```

# Saiba Mais

Para aprender mais sobre React Native, confira os recursos abaixo:

- [Site do React Native](https://reactnative.dev) — visão geral do React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) — uma **introdução** ao React Native e como configurar o ambiente.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) — um **tour guiado** pelos **fundamentos** do React Native.
- [Blog](https://reactnative.dev/blog) — os **posts** oficiais mais recentes do React Native.
- [`@facebook/react-native`](https://github.com/facebook/react-native) — o **repositório** open source no GitHub do React Native.