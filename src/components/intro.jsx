import logo from "../img/logo2.png"

function Intro() {
  return (
    <div className="intro d-flex flex-column justify-content-between">
      <div className=" mt-3">
        <img src={logo} alt="" className="logo"/>
        <h1 className="logo">QUIZ</h1>
      </div>
      <div className="">
        <a href="/level" className="btn easy-btn text-light btn-lg col-12 align-self-end mb-5 fs-1 dropshadow" type="button">START</a>
      </div>
    </div>
  );
}

export default Intro;