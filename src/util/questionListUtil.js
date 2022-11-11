import { getLevel } from "./levelUtil";
const questionListItem = "questionList";
let level = getLevel() ? getLevel() : "easy";
const questionListLevelItem = questionListItem + "-" + level;

export const passed = "passed";
export const active = "active";
export const disable = "disable";


export function getQuestionListJson(level) {
  return sessionStorage.getItem(questionListItem + "-" + level) ?
    JSON.parse(sessionStorage.getItem(questionListItem + "-" + level)) : null;
}

export function setList(list, level) {
  let sessionStore = []
  list.forEach((elem, index) => {
    if (index === 0) {
      sessionStore.push({ key: elem.key, state: active });
    } else {
      sessionStore.push({ key: elem.key, state: disable });
    }
  });

  sessionStorage.setItem(questionListItem + "-" + level, JSON.stringify(sessionStore));
  return JSON.stringify(sessionStore);
}

/**
 * Sauvegarde l'état de la question et de la suivante
 * @param {key} key de la question suivante 
 */
export function saveCheck(key) {
  let store = JSON.parse(sessionStorage.getItem(questionListLevelItem))

  if (store[key] !== undefined) {
    let elem = store[key];
    store[key] = { key: elem.key, state: active };
  }

  if (key > 0) {
    let current = store[key - 1];
    store[key - 1] = { key: current.key, state: passed };
  }

  sessionStorage.setItem(questionListLevelItem, JSON.stringify(store))
}


/**
 * Vérifie que la question n'a pas été répondu avant
 * @param {*} question la question
 * @returns vrai si la réponse à déjà été répondu
 */
export function isCheck(question) {
  let store = JSON.parse(sessionStorage.getItem(questionListLevelItem))
  return store[question.key-1] ? store[question.key-1].state === passed : true;
}

export function isNextQuestionDisable(key) {
  let store = JSON.parse(sessionStorage.getItem(questionListLevelItem))
  return store[key] ? store[key].state === disable : true;
}
