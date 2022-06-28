import Layout from "./components/Layout";
import errorIcon from "./assets/icon-connection-error.svg";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Layout>
      <div className="bg-white max-w-md mx-auto px-20 py-10 shadow-lg flex flex-col items-center rounded-2xl">
        <img src={errorIcon} className="w-24 mb-4" />
        <h1 className="text-2xl font-bold py-4">Error de Conexión</h1>
        <p className="text-gray-700">La conexión con el banco ha fallado</p>
        <p className="text-center py-4 text-gray-700">
          Se ha enviado un aviso a nuestro equipo técnico. Resolveremos el
          problema lo antes posible.
        </p>
        <Link
          to={{
            pathname: "/",
          }}
          type="submit"
          className="text-white mt-8 flex justify-center items-center mx-auto bg-gradient-to-r from-myblue to-mylightblue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-4/6 px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <p className="font-bold text-lg py-2">Volver</p>
        </Link>
      </div>
    </Layout>
  );
}

export default Error;
