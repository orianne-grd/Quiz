import { list } from "../data/data";

/**
 * Retourne la liste de question du quiz
 * Sauvegarde en session les questions et leurs avancées 
 * Sauvegarde en session le score du joueur
 */
function getQuestions() {
  let content = [];

  let sessionStore = sessionStorage.getItem("questionList") ?
    JSON.parse(sessionStorage.getItem("questionList")) : null;

  if (sessionStore === null) {
    sessionStore = []
    for (let l of list) {
      l.key === 1 ?
        sessionStore.push({ key: l.key, question: l.question, check: true }) :
        sessionStore.push({ key: l.key, question: l.question, check: false })
    }
  }

  for (let question of sessionStore) {
    question.check ?
      content.push(<p className="col-8 btn btn-outline-secondary check">
        <a href={"/" + question.key}>Question {question.key}</a>
      </p>)
      :
      content.push(<p className="col-8 btn btn-outline-secondary disable-links">
        <a href={"/" + question.key}>Question {question.key}</a>
      </p>)
  }

  sessionStorage.setItem("questionList", JSON.stringify(sessionStore));
  return content
}

/**
 * Retourne l'affichage du composant
 */
function ListQuestion() {
  
  let score = sessionStorage.getItem("score");

  return (
    <div className="list-questions">
      <h1>Liste des questions</h1>
      <p className="score">Score : {score}</p>
      {getQuestions()}
    </div>
  );
}

export default ListQuestion;

