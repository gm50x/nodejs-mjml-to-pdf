# nodejs-mjml-to-pdf

Pequena prova de conceito sobre geração de PDFs a partir de MJML.

## 🤔 Como executar?

Não perca tempo, use 🐋.

```bash
# Roda tudo pra mim! (é preciso ter o docker e o docker compose instalados.)
npm run start:docker

# Quero rodar na mão!
# instalar as dependências listadas abaixo, ou vai dar pau!
npm install
npm start
```

Após a execução que dura alguns segundos, um arquivo comprovante.pdf aparecerá na raiz do diretório

### ⚠️ Esta aplicação utiliza puppeteer como base para geração dos pdfs. Assim sendo, é necessário que as libs utilizadas pelo chromium estejam presentes no sistema, ou não funcionará.

```bash
# Instalação das dependências do Puppeteer
sudo apt install libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2
```
