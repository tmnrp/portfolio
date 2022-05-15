export const isElementInViewPort = (el: HTMLElement | null) => {
  if (!el) {
    return false;
  }

  //
  const bounding = el.getBoundingClientRect();
  const myElementHeight = el?.offsetHeight;
  const myElementWidth = el?.offsetWidth;

  //
  return bounding.top - 600 >= -myElementHeight &&
    bounding.left >= -myElementWidth &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth) +
        myElementWidth &&
    bounding.bottom + 200 <=
      (window.innerHeight || document.documentElement.clientHeight) +
        myElementHeight
    ? true
    : false;
};
