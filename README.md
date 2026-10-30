# Simulado e Flashcards | VemMED

Página de captura Astro para acesso ao Simulado e Flashcards, com identidade visual VemMED.

## Desenvolvimento

```powershell
npm install
npm run dev
```

## Build

```powershell
npm run build
```

## Integrações

- Mautic: `https://mautic.vemmed.com.br/form/generate.js?id=26`.
- Bubble: `POST https://flashcard-turbo.bubbleapps.io/api/1.1/wf/sign_up_hg6/`.
- JSON: `nome`, `sobrenome`, `email` e `celular` (somente dígitos).
- Obrigado: `https://flashcardturbo.vemmed.com/obrigado?email=EMAIL_DO_ALUNO&produto=hg6`.

O formulário Mautic 26 é o único formulário visível. Nome usa `texto_resposta_curta`; os demais campos são `sobrenome`, `email` e `telefone`. O envio confirma o Bubble antes de enviar ao Mautic e direciona para a página de obrigado após sucesso. Celular vai no JSON somente com dígitos.

Ainda é necessário confirmar um cadastro real no banco e o redirecionamento publicado.
