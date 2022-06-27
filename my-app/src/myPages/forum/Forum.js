import { useRef, useState } from "react";
import BotChecker from "./BotChecker";
import "./forum.css";
function Forum() {
  const forumnRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const areaRef = useRef(null);
  const phoneRef = useRef(null);
  const [showFormStatus, setShowForm] = useState(false);
  const [showBotChecker, setshowBotChecker] = useState(false);
  const showForm = () => {
    if (!showBotChecker) {
      if (!showFormStatus) {
        forumnRef.current.className = "form";
        setShowForm(true);
      } else {
        forumnRef.current.className = "formDisable";
        setShowForm(false);
      }
    }
  };
  const submit = (e) => {
    e.preventDefault();
    setshowBotChecker(true);
    areaRef.current.value = "";
    emailRef.current.value = "";
    nameRef.current.value = "";
    phoneRef.current.value = "";
    forumnRef.current.className = "formDisable";
    setShowForm(false);
  };
  return (
    <>
      <button onClick={showForm} className="btnWhite btnContact">
        Contact
      </button>
      <form onSubmit={submit} className="formNotUsed" ref={forumnRef}>
        <div className="form-input-container">
          <label className="form-input-container-label" htmlFor="name">
            Wpisz swoje imię:{" "}
          </label>
          <input
            className="form-input"
            ref={nameRef}
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="form-input-container">
          <label className="form-input-container-label" htmlFor="email">
            Wpisz swój email:{" "}
          </label>
          <input
            className="form-input"
            ref={emailRef}
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="form-input-container">
          <label className="form-input-container-label" htmlFor="phone">
            Wpisz numer telefonu:{" "}
          </label>
          <input
            className="form-input"
            ref={phoneRef}
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          />
          <p>(xxx-xxx-xxx)</p>
        </div>

        <textarea
          ref={areaRef}
          className="form-input"
          defaultValue={"Napisz wiadomość do mnie"}
          rows={6}
        />

        <div>
          <input className="btnWhite" type="submit" value="Wyślij!" />
        </div>
      </form>
      <BotChecker
        showBotChecker={showBotChecker}
        setshowBotChecker={setshowBotChecker}
        setShowForm={setShowForm}
      />
    </>
  );
}

export default Forum;
