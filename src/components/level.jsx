import { useState } from 'react';
import { getLevel } from "../util/levelUtil";
import { getScore } from "../util/scoreUtil";

export const Level = () => {
  const [up, setUpdate] = useState(false);

function reset() {
  sessionStorage.clear();
  setUpdate(true);
}

function getAccess(niv) {
  if (getScore() < niv) 
    return "disabled"
}

function showScore() {
  if(getLevel()) {
    return (<h3 className="score">Score : {getScore()}</h3>);
  }
}

  return (
    <div>
      {showScore()}
      <a href="/easy" className="btn btn-outline-success btn-lg col-8 mt-3" type="button">Facile</a>
      <a href="/medium" className={"btn btn-outline-warning btn-lg col-8 mt-3 " + getAccess(40)} type="button">Moyen</a>
      <a href="/hard" className={"btn btn-outline-danger btn-lg col-8 mt-3 " + getAccess(80)} type="button">Dur</a>
      <button className="btn btn-outline-dark btn-lg col-8 mt-5" type="button" onClick={ () => reset()}>Rejouer</button>
    </div>
  )
}