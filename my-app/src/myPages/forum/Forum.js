import { useRef, useState } from "react";

import "./forum.css";
function Forum() {
  const forumnRef = useRef(null);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const areaRef = useRef(null);

  const [showFormStatus, setShowForm] = useState(false);
  const showForm = () => {
    if (!showFormStatus) {
      forumnRef.current.className = "form";
      setShowForm(true);
    } else {
      forumnRef.current.className = "formDisable";
      setShowForm(false);
    }
  };
  const submit=(e)=>{
    e.preventDefault()
    areaRef.current.value=""
    emailRef.current.value=""
    nameRef.current.value=""
    alert("Naciśnij jeśli nie jesteś robotem");

  }
  return (
    <>
      <button onClick={showForm} className="btnWhite btnContact">
        Contact
      </button>
      <form onSubmit={submit}className="formNotUsed" ref={forumnRef}>
        <div>
          <label for="name">Wpisz swoje imię: </label>
          <input ref={nameRef} type="text" name="name" id="name" required />
        </div>
        <div class="form-example">
          <label for="email">Wpisz swój email: </label>
          <input  ref={emailRef}  type="email" name="email" id="email" required />
        </div>
        <textarea className="describeYourSelfArea"
        ref={areaRef} 
          name="textarea"
          rows="5"
          cols="30"
          minlength="10"
          maxlength="20"
          required
        >
          Napisz coś o sobie
        </textarea>
        <div class="form-example">
          <input className="btnWhite" type="submit" value="Wyślij!" />
        </div>
      </form>

    </>
  );
}

export default Forum;
