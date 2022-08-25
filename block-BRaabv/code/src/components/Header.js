function Header(props) {
  return (
    <header>
      <ul className="flex">
        <li className={`${props.index === 0 ? "active" : ""} flex`}>
          <span>1</span>
          <h3>Signup</h3>
        </li>
        <li className={`${props.index === 1 ? "active" : ""} flex`}>
          <span>2</span>
          <h3>Message</h3>
        </li>
        <li className={`${props.index === 2 ? "active" : ""} flex`}>
          <span>3</span>
          <h3>Checkbox</h3>
        </li>
      </ul>
    </header>
  );
}

export default Header;
