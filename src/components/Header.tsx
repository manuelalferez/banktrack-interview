import logo from "../assets/bt-icon.png";
function Header() {
  return (
    <div className="bg-mygray py-10 flex justify-center">
      <img src={logo} alt="Logo" className="w-12" />
    </div>
  );
}

export default Header;
