const cleanElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

export default cleanElement;