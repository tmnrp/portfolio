export const isElementInsideViewport = (el: HTMLElement | null) => {
  if (!el) {
    return false;
  }

  //
  const windowInnerHeight = window.innerHeight;
  const elTop = el?.getBoundingClientRect()?.top;
  return elTop > 0 && elTop < windowInnerHeight;
};
