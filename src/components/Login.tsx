import sabadellLogo from "../assets/logo_sabadell.png";
import afterbanksLogo from "../assets/icon-ab.png";
import iconLock from "../assets/icon-lock.svg";
import iconVisible from "../assets/icon-view.svg";
import iconInvisible from "../assets/icon-invisible.svg";
import { Input } from "@material-tailwind/react";
import { useState } from "react";

function Login() {
  let [visible, setVisible] = useState(false);
  let [password, setPassword] = useState("");

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget.value.length == 0) {
      setPassword("");
    } else if (event.currentTarget.value.length < password.length) {
      setPassword(password.slice(0, -1));
    } else {
      setPassword(password.concat(event.currentTarget.value.slice(-1)));
    }
  }

  return (
    <div className="bg-white max-w-md px-16 py-10 mx-auto shadow-md rounded-2xl">
      <div className="flex items-center">
        <img src={sabadellLogo} className="w-16" />
        <h1 className="text-xl md:text-2xl ml-6">Banco Sabadell</h1>
      </div>
      <p className="text-gray-600">
        Escribe tu identificador y contraseña de Banco Sabadell para conectar
        con el banco.
      </p>
      <div className="form my-8 space-y-6">
        <div>
          <Input color="indigo" label="Identificador" />
          <p className="text-[12px] text-gray-500 mt-6">
            Identificador que pones en la web o app de Banco Sabadell
          </p>
        </div>
        <div>
          <Input
            type={"text"}
            color="indigo"
            label="Contraseña"
            size="lg"
            value={visible ? password : "*".repeat(password.length)}
            onChange={(e) => handleChange(e)}
            icon={
              visible ? (
                <img
                  src={iconInvisible}
                  onClick={() => setVisible(!visible)}
                  className="w-6 mt-2"
                />
              ) : (
                <img
                  src={iconVisible}
                  onClick={() => setVisible(!visible)}
                  className="w-6 mt-2"
                />
              )
            }
          />
          <p className="text-[12px] text-gray-500 mt-6">
            Contraseña que pones en la web o app de Banco Sabadell
          </p>
          <button
            type="submit"
            className="text-white mt-8 flex justify-center items-center mx-auto bg-gradient-to-r from-myblue to-mylightblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-4/6 px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <img src={iconLock} />
            <p className="ml-2 font-bold text-lg">Conectar</p>
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <img src={afterbanksLogo} className="w-10" />
        <p className="text-gray-600 ml-2">
          Conexión segura via{" "}
          <a
            href="https://www.afterbanks.com/"
            target="_blank"
            className="underline"
          >
            afterbanks
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
