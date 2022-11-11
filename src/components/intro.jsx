import logo from "../img/logo2.png"

function Intro() {
  return (
    <div className="intro align-middle">
      <div className="bg">
        <img src={logo} alt="" />
        <h1>QUIZ</h1>
        <div class="d-grid gap-2">
          <a href="/level"><button className="btn btn-outline-dark btn-lg col-12" type="button">Start</button></a>
        </div>
      </div>
    </div>
  );
}

export default Intro;