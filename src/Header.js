import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="title">掲示板</div>
      <div className="create-thread-link">
        <Link to={"/thread/new"}>スレッドをたてる</Link>
      </div>
    </header>
  );
}

export default Header;
