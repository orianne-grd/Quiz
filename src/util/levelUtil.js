const levelItem = "level";

export function getLevel() {
  return sessionStorage.getItem(levelItem);
}

export function setLevel(level) {
  sessionStorage.setItem(levelItem, level);
}