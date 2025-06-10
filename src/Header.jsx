import { Link } from "react-router-dom";

function Header() {
  return (
    <div class='bg-zinc-800 p-6'>
      <div class='flex justify-between mx-auto items-center'>
        <Link to="/">
          <p class='text-white text-xl font-bold'>blog</p>
        </Link>
        <Link to="/contact">
          <p class='text-white text-xl  font-bold'>お問い合せ</p>
        </Link>
      </div>
    </div>
  );
}
export default Header;
