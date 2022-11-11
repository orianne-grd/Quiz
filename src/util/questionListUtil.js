import { getLevel } from "./levelUtil";
const questionListItem = "questionList";
let level = getLevel() ? getLevel() : "easy";
const questionListLevelItem = questionListItem + "-" + level;


export function getQuestionListJson(level) {
  return sessionStorage.getItem(questionListItem + "-" + level) ?
    JSON.parse(sessionStorage.getItem(questionListItem + "-" + level)) : null;
}

export function setList(list, level) {
  let sessionStore = []
  list.forEach((elem, index) => {
    if (index === 0) {
      sessionStore.push({ key: elem.key, check: true });
    } else {
      sessionStore.push({ key: elem.key, check: false }); 
    }
  });

  // for (let l of list) {
  //   l.key === 1 ?
  //     sessionStore.push({ key: l.key, check: true }) :
  //     sessionStore.push({ key: l.key, check: false });
  // }
  sessionStorage.setItem(questionListItem + "-" + level, JSON.stringify(sessionStore));
  return JSON.stringify(sessionStore);
}

/**
 * Sauvegarde l'avancée
 * @param {question} question 
 */
export function saveCheck(key) {
  let store = JSON.parse(sessionStorage.getItem(questionListLevelItem))
  let elem = store[key]
  store[key] = { key: elem.key, check: true } //up check
  sessionStorage.setItem(questionListLevelItem, JSON.stringify(store))
}


/**
 * Vérifie que la question n'a pas été répondu avant
 * @param {*} question la question
 * @returns vrai si la réponse à déjà été répondu
 */
export function isCheck(question) {
  let store = JSON.parse(sessionStorage.getItem(questionListLevelItem))
  return store[question.key] ? store[question.key].check : true;
}

