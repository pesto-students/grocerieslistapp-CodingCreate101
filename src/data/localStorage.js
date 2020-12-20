// Local storage
const appendableKey = 'grocery-app'; // To keep keys unique
export function getLocalStorage(key) {
  if (!key) {
    console.error(`${key} doesn't exists.`);
    return null;
  }

  try {
    const valueStr = localStorage.getItem(`${key}-${appendableKey}`);
    if (valueStr) {
      return JSON.parse(valueStr);
    }
    return null;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export function setLocalStorage(key, obj) {
  if (!key) {
    console.error(`${key} doesn't exists.`);
    return null;
  }

  try {
    localStorage.setItem(`${key}-${appendableKey}`, JSON.stringify(obj));
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

export function deleteLocalStorage(key) {
  if (!key) {
    console.error(`${key} doesn't exists.`);
    return null;
  }
  try {
    localStorage.removeItem(`${key}-${appendableKey}`);
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}
