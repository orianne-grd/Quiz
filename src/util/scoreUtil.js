const scoreItem = "score";

export function getScore() {
  return sessionStorage.getItem(scoreItem);
}

/**
 * Ajoute des points au joueur si il réussi
 * @param {*} question la question
 */
 export function addPoint(isCheck) {
  if (!isCheck) {
    let score = sessionStorage.getItem(scoreItem);
    sessionStorage.setItem(scoreItem, (Number(score) + 10));
  }
}