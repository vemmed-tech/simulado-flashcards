# Análise de TRI | VemMED

Página de captura em Astro para a Análise de TRI, que contém questões. Projeto independente da Calculadora TRI, com identidade visual VemMED, logo, favicon, Google Tag Manager e VK Pixel iguais aos das outras iscas.

## Desenvolvimento

```powershell
npm install
npm run dev
```

Para executar junto de outras páginas:

```powershell
npm run dev -- --port 4326
```

Encerre com `Ctrl+C` no terminal que iniciou o servidor.

## Build

```powershell
npm run build
npm run preview
```

## Integrações

- Mautic: `https://mautic.vemmed.com.br/form/generate.js?id=24`.
- Bubble: `POST https://flashcard-turbo.bubbleapps.io/api/1.1/wf/sign_up_tri/`.
- JSON: `nome`, `sobrenome`, `email` e `celular` (somente dígitos).
- Obrigado: `https://flashcardturbo.vemmed.com/obrigado?email=EMAIL_DO_ALUNO&produto=analise_tri`.

A configuração fica em `src/config/capture.js`. O único formulário visível é gerado pelo Mautic. O campo real de Nome é `mauticform[texto_resposta_curta]`; os demais são `sobrenome`, `email` e `telefone`. Campos ocultos como `formName` não são usados no JSON.

O cadastro envia primeiro ao Bubble e, após confirmação, permite o envio pelo SDK do Mautic. A resposta de sucesso do Mautic recebe a URL de obrigado configurada com o e-mail cadastrado e `produto=analise_tri`. Uma falha no Bubble mantém o formulário e apresenta erro; uma nova tentativa após falha do Mautic não repete um envio já confirmado pelo Bubble para os mesmos dados.

Ainda é necessário confirmar um cadastro real no banco e o redirecionamento em ambiente publicado. Os testes locais com respostas simuladas não comprovam as configurações internas desses serviços.

## Enviar para o GitHub

1. No GitHub, crie um repositório vazio na organização desejada, por exemplo `tri`. Não marque README, licença ou `.gitignore`, pois os arquivos já existem localmente.
2. No terminal do VS Code:

```powershell
cd "C:\Users\VemMED\Desktop\captura_iscas\Analise TRI"
git init
git add .
git commit -m "feat: cria pagina de captura TRI"
git branch -M main
```

3. Copie a URL HTTPS real do repositório criado. No comando abaixo, substitua `URL_HTTPS_COPIADA_DO_GITHUB` pela URL completa antes de executar:

```powershell
git remote add origin URL_HTTPS_COPIADA_DO_GITHUB
git remote -v
git push -u origin main
```

Se já houver `origin`, corrija a URL com `git remote set-url origin URL_HTTPS_COPIADA_DO_GITHUB`.

Se o Git informar `dubious ownership`, autorize somente esta pasta:

```powershell
git config --global --add safe.directory "C:/Users/VemMED/Desktop/captura_iscas/Analise TRI"
```

Na Vercel, importe o novo repositório, selecione Astro, build `npm run build` e saída `dist`. A página pode ser visualizada antes da integração, mas ainda não libera acesso nem cadastra interessados.
