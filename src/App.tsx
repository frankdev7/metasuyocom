import React, { useState } from 'react';
import axios from 'axios';

function App() {

  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();

    const data = {
      email: email
    };

    axios.post("/api/registerEmail", data).then(res => {
      console.log(res)
    });
  }

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(email);
  }

  return (
    <>
      <div className="desktop w-hidden-medium w-hidden-small w-hidden-tiny w-form">
        <form id="email-form" name="email-form" className="form" onSubmit={handleSubmit}>
          <div data-ix="thanks-initial" className="thanks-wrap">
            <p className="success-message">¡Gracias por suscribirte!</p>
          </div>
          <div className="input-wrap">
            <div className="mail-icon"></div>
            <input type="email" className="email w-input" name="email" data-name="email"
              data-ix="click-on-input" placeholder="Escribe tu correo electr&oacute;nico.." id="email-4" value={email}
              onChange={handlechange} />
          </div>
          <button className="subscribe-btn w-button" data-ix="subscribe">ENVIAR</button>
        </form>
        <div className="success-message w-form-done">
          <div className="text-block-2">¡Gracias por ser parte de Metasuyo!</div>
        </div>
      </div>
      <div className="mobile w-hidden-main w-form">
        <form id="email-form" name="email-form" className="form" onSubmit={handleSubmit}>
          <div data-ix="thanks-initial" className="thanks-wrap">
            <p className="success-message">¡Gracias por suscribirte!</p>
          </div>
          <div className="input-wrap">
            <div className="mail-icon"></div>
            <input type="email" className="email w-input" name="email" data-name="email"
              data-ix="click-on-input" placeholder="Escribe tu correo electrónico.." id="email-5" onChange={handlechange} />
          </div>
          <button data-ix="subscribe-2" className="subscribe-btn w-button">ENVIAR</button>
        </form>
        <div className="success-message w-form-done">
          <div className="text-block-3">¡Gracias por ser parte de Metasuyo!</div>
        </div>
      </div>
    </>
  );
}

export default App;
