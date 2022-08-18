function Navbar(props) {
  return (
    <nav className="navbar mt-8">
      <ul className="flex justify-center">
        {["All", "Breakfast", "Lunch", "Shakes"].map((item, i) => (
          <li>
            <a href="_q">{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navbar;
