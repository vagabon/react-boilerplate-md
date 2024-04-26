export const emptyCopyButton = (
  tagName: string,
  copyHtml: string,
  buttonElement: HTMLCollectionOf<Element>,
  buttonElementParent?: HTMLCollectionOf<Element>,
) => {
  return (
    (tagName.startsWith('CODE') ||
      tagName.startsWith('code') ||
      tagName.startsWith('PRE') ||
      tagName.startsWith('pre')) &&
    buttonElement.length === 0 &&
    (!tagName.startsWith('code') || (tagName.startsWith('code') && buttonElementParent?.length === 0)) &&
    copyHtml !== ''
  );
};
