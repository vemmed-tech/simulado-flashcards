export const capture = {
  product: 'analise_tri',
  thankYouUrl: 'https://flashcardturbo.vemmed.com/obrigado',
  bubbleEndpoint: 'https://flashcard-turbo.bubbleapps.io/api/1.1/wf/sign_up_tri/',
  mauticScriptUrl: 'https://mautic.vemmed.com.br/form/generate.js?id=24',
};

export function getThankYouUrl(email) {
  const url = new URL(capture.thankYouUrl);
  url.searchParams.set('email', email.trim());
  url.searchParams.set('produto', capture.product);
  return url.toString();
}
