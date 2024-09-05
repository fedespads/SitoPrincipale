function insertAfter(newElement, referenceElement) {
  referenceElement.parentNode.insertBefore(
    newElement,
    referenceElement.nextSibling
  );
}

function randint(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function y3(x1, y1, x2, y2, x3) {
  return ((y2 - y1) / (x2 - x1)) * x3 + (y1 - ((y2 - y1) / (x2 - x1)) * x1);
}
