// import { list } from "../data/data";
import { useParams } from "react-router-dom";
import { getQuestionListJson, setList } from "../util/questionListUtil";
import { getScore } from "../util/scoreUtil";
import { getListByLevel } from "../util/listUtil";
import { setLevel } from "../util/levelUtil";


export const ListQuestion = () => {
  let params = useParams();
  let level = params.level;
  setLevel(level);

  let list = getListByLevel(level);

  let score = getScore();

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
      question.check ?
        content.push(<p className="col-8 btn btn-outline-secondary check">
          <a href={"/question/" + question.key}>Question {question.key}</a>
        </p>)
        :
        content.push(<p className="col-8 btn btn-outline-secondary disable-links">
          <a href={"/question/" + question.key}>Question {question.key}</a>
        </p>)
    }

    return content
  }

  /**
   * Retourne l'affichage du composant
   */
  return (
    <div className="list-questions">
      <h1>Liste des questions</h1>
      <p className="score">Score : {score}</p>
      {getQuestions(list)}
    </div>
  );
}
