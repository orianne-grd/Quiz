import { useState } from 'react';
import { saveCheck, isCheck } from '../util/questionListUtil';
import { addPoint } from '../util/scoreUtil';
import { findById } from '../util/listUtil';

/**
 * La liste de réponses
 * @param {*} prop permet de passer la question
 * @returns 
 */
export const Answers = (prop) => {
  const [answerResult, setAnswerResult] = useState(undefined);
  const [isSuccess, setSuccess] = useState(false);

  const question = prop.question

  /**
   * Retourne les boutons de réponses à la question
   */
  function getListResponses(question) {
    let content = [];
    for (let r of question.responses) {
      content.push(
        <button className="btn btn-secondary mt-3 col-10 btn-ans" onClick={() => checkAnswer(r, question)}>{r.res}</button>
      )
    }
    return content;
  }

  /**
   * SUCCESS
   * Retourne les boutons de réponses à la question
   */
  function getListResponsesSuccess(question) {
    let content = [];
    for (let r of question.responses) {
      if (r.valid) {
        content.push(
          <button className="btn btn-success mt-3 col-10 btn-ans" disabled>{r.res}</button>
        )
      } else {
        content.push(
          <button className="btn btn-secondary mt-3 col-10 btn-ans" disabled>{r.res}</button>
        )
      }

    }

    content.push(
      <p className='mt-4 result success-msg'> Bien joué ! </p>
    )

    if (isQuestionInList(question.key + 1)) {
      content.push(<button className='btn btn-outline-dark col-4 mt-3 btn-res'><a href={"/question/" + (question.key + 1)}> Suivant </a></button>)
    } else {
      content.push(<button className='btn btn-outline-dark col-4 mt-3 btn-res'><a href={"/level"}> Terminé </a></button>)
    }
    return content;
  }

  /**
   * FAIL
   * Retourne les boutons de réponses à la question
   */
  function getListResponsesFail(question, response) {
    let content = [];
    for (let r of question.responses) {
      if (r.res === response.res) {
        content.push(
          <button className="btn btn-danger mt-3 col-10 btn-ans">{r.res}</button>
        )
      } else if (r.valid) {
        content.push(
          <button className="btn btn-success mt-3 col-10 btn-ans" disabled>{r.res}</button>
        )
      } else {
        content.push(
          <button className="btn btn-secondary mt-3 col-10 btn-ans" disabled>{r.res}</button>
        )
      }
    }

    content.push(
      <p className='mt-4 result error-msg '> Dommage ! </p>
    )

    if (isQuestionInList(question.key + 1)) {
      content.push(<button className='btn btn-outline-dark col-4 mt-3 btn-res'><a href={"/question/" + (question.key + 1)}> Suivant </a></button>)
    } else {
      content.push(<button className='btn btn-outline-dark col-4 mt-3 btn-res'><a href={"/level"}> Terminé </a></button>)
    }
    return content;
  }

  /**
   * Verifie si la réponse est bonne et update les états
   * @param {*} res la réponse
   * @param {*} question la question actuelle
   */
  function checkAnswer(res, question) {
    setAnswerResult(res);
    if (res.valid) {
      setSuccess(true);
      addPoint(isCheck(question));
    }
    saveCheck(question.key);
  }

  /**
   * Vérifie que la prochaine question est dans la liste
   * @param {*} key la clé de la question
   * @returns vrai si dans la liste
   */
  function isQuestionInList(key) {
    return findById(parseInt(key)) ? true : false;
  }

  /**
   * Affiche les réponses 
   */
  if (!answerResult) {
    return (getListResponses(question));
  } else {
    if (isSuccess) {
      return (getListResponsesSuccess(question))
    } else {
      return getListResponsesFail(question, answerResult)
    }
  }
}