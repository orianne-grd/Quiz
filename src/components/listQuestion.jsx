import { useParams } from "react-router-dom";
import { getQuestionListJson, setList, passed, active, disable } from "../util/questionListUtil";
import { getScore } from "../util/scoreUtil";
import { getListByLevel } from "../util/listUtil";
import { getLevel, setLevel, getLevelTxt } from "../util/levelUtil";


export const ListQuestion = () => {

  let params = useParams();
  let level = params.level;
  setLevel(level);

  let list = getListByLevel(level);

  /**
   * Retourne la liste de question du quiz
   * Sauvegarde en session les questions et leurs avancées 
   */
  function getQuestions(list) {
    let content = [];

    let listQuestion = getQuestionListJson(level);

    // save in store
    if (listQuestion === null) {
      listQuestion = setList(list, level);
    }

    for (let question of listQuestion) {

      switch (question.state) {
        case passed:
          content.push(
            <a key={level + "-" + question.key} className="col-8 btn btn-outline-secondary btn-list passed" type="button" href={"/question/" + question.key}>Question {question.key}</a>
          )
          break;
        case active:
          content.push(
            <a key={level + "-" + question.key} className="col-8 btn btn-outline-secondary btn-list active" type="button" href={"/question/" + question.key}>Question {question.key}</a>)
          break;
        case disable:
          content.push(
            <button key={level + "-" + question.key} className="col-8 btn btn-outline-secondary btn-list" disabled>Question {question.key}</button>)
          break;
        default:
          break;
      }
    }

    return content;
  }


  function showScore() {
    if (getScore()) {
      return (<p className="score">Score : {getScore()}</p>);
    }
  }

  function showLevel() {
    let level = getLevel();
    if (level) {
      return (<h3 className={level}> {getLevelTxt(level)} </h3>)
    }
  }

  /**
   * Retourne l'affichage du composant
   */

  return (
    <div className="list-questions">
      <h1>Liste des questions</h1>
      {showLevel()}
      {showScore()}
      {getQuestions(list)}
    </div>
  );

}
