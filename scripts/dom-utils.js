// Creates a new element of the given type and appends a textArea to it with the text provided then appends the new element with the text to the parent provided
export const createNewTextElement = (
  elementType,
  textContent,
  parent,
  classes = []
) => {
  const newEl = document.createElement(elementType);
  const textEl = document.createTextNode(textContent);
  classes.forEach((c) => newEl.classList.add(c));
  newEl.appendChild(textEl);
  parent.appendChild(newEl);
};

// Checks if a parent given has any children of the type provided and will remove it
export const removeChildOfType = (childClass, parent) => {
  if (document.querySelector(childClass)) {
    parent.removeChild(document.querySelector(childClass));
  }
};
