export const loadFromLocalStorage = (key, initialValue) => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return initialValue;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Erro ao carregar do localStorage", error);
    return initialValue;
  }
};

export const saveToLocalStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Erro ao salvar no localStorage", error);
  }
};