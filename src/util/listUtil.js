import { easy } from "../data/easy"
import { medium } from "../data/medium";
import { hard } from "../data/hard";
import { getLevel } from "./levelUtil";
import { setList, getQuestionListJson } from "./questionListUtil";

const level = ["easy", "medium", "hard"];

export function findByIdList(list, key) {
  return list.find(o => o.key === key);
}

export function findById(key) {
  let list = getListByLevel(getLevel());
  return list.find(o => o.key === key);
}

export function getListByLevel(level) {
  switch (level) {
    case "easy": return easy;
    case "medium": return medium;
    case "hard": return hard;
    default: break;
  }
}

export function initList() {
  level.forEach(lvl => {
    if(getQuestionListJson(lvl) === null) setList(getListByLevel(lvl), lvl)
  });
}
