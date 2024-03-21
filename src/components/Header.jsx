import "../App.css";
import Logo from "./Logo";
import User from "./User";
export default function Header() {
  return (
    <header>
      <div className="g_dive_Header">
        <Logo />
        <User />
      </div>
    </header>
  );
}
