import { useState } from 'react';
import { getScore } from "../util/scoreUtil";
import { initList } from '../util/listUtil';
import logo from "../img/logo2.png"

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
    if (getScore()) {
      return (<h3 className="score">Score : {getScore()}</h3>);
    }
  }

  initList();

  return (
    <div>
      <img src={logo} alt="" className='img-logo mt-1 mb-3' />
      {showScore()}
      <a href="/easy" className="btn btn-secondary btn-lg col-8 mt-3 easy-btn" type="button">Facile</a>
      <a href="/medium" className={"btn btn-secondary btn-lg col-8 mt-3 medium-btn " + getAccess(40)} type="button">Moyen</a>
      <a href="/hard" className={"btn btn-secondary btn-lg col-8 mt-3 hard-btn " + getAccess(80)} type="button">Difficile</a>
      <button className="btn btn-outline-dark btn-lg col-8 mt-5" type="button" onClick={() => reset()}>Rejouer</button>
    </div>
  )
}