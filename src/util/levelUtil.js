const levelItem = "level";

export function getLevel() {
  return sessionStorage.getItem(levelItem);
}

export function setLevel(level) {
  sessionStorage.setItem(levelItem, level);
}

export function getLevelTxt(level) {
  switch (level) {
    case "easy": return "Facile";
    case "medium": return "Moyen";
    case "hard": return "Difficile";
  
    default:
      break;
  }
}