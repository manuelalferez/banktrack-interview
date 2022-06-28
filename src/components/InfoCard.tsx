import lockIcon from "../assets/icon-lock-bg.svg";
import tranferIcon from "../assets/icon-transfer.svg";
import invisibleIcon from "../assets/icon-invisible.svg";

function InfoCard() {
  return (
    <div className="row-start-2 xl:row-start-1 col-start-2 md:col-start-3 col-end-6 mt-8 xl:col-start-5 xl:col-end-7 bg-white max-w-xs text-sm shadow-md rounded-2xl h-min py-6 px-2 xl:ml-8 xl:mt-0">
      <div className="flex items-start p-2">
        <img src={lockIcon} />
        <p className="px-4">
          Conexión via <a>afterbanks</a>: API segura{" "}
          <b>utilizado por cientos de miles de personas</b> para conectar con
          sus entidades financieras.
        </p>
      </div>
      <div className="flex items-start p-2">
        <img src={tranferIcon} />
        <p className="px-4">
          <b>Solo tenemos acceso a tus movimientos</b>, con este acceso no se
          puede hacer transperencias ni modificar nada.
        </p>
      </div>
      <div className="flex items-start p-2">
        <img src={invisibleIcon} />
        <p className="px-4">
          <b>No guardamos tu contraseña.</b> Solo se utiliza para crear la
          conexión
        </p>
      </div>
    </div>
  );
}

export default InfoCard;
