import { findById } from "../data/data";
import { useParams } from "react-router-dom";
import { Answers } from "./answers";
import { Image } from "../img/image.js"

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
 * Sauvegarde l'avancée
 * @param {question} question 
 */
function saveCheck(question) {
  let store = JSON.parse(sessionStorage.getItem("questionList"))
  let elem = store[question.key-1]
  store[question.key-1] = {key: elem.key, question: elem.question, check: true}
  sessionStorage.setItem("questionList", JSON.stringify(store))
} 

/**
 * Retourne l'affichage du composant
 */
function Question() {
  let params = useParams();
  let q = findById(parseInt(params.questionId));
  saveCheck(q);

  return (
    <div>
      <h1 className="question">Questions</h1>
      {getQuestion(q)}
    </div>
  );
}

export default Question;