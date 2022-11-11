// import { findById } from "../data/data";
import { useParams } from "react-router-dom";
import { Answers } from "./answers";
import { Image } from "../util/imageUtil.js"
import { saveCheck } from "../util/questionListUtil";
import { findById } from "../util/listUtil";

/**
 * Retourne la liste des réponses possible
 */
function getQuestion(q) {
  let img = Image(q.img);
  return (
    <div>
      <h3 className="sm-question">{q.question}</h3>
      <img src={img} alt="" />
      <div className="answers">
        <Answers question={q} />
      </div>
    </div>
  );
}

/**
 * Retourne l'affichage du composant
 */
function Question() {
  let params = useParams();
  let q = findById(parseInt(params.questionId));
  console.log(q)
  saveCheck(q.key - 1);

  return (
    <div>
      <h1 className="question">Questions</h1>
      {getQuestion(q)}
    </div>
  );
}

export default Question;