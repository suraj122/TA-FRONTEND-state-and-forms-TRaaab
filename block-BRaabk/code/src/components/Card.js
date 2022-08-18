function Card(props) {
  return (
    <article className="flex">
      <img src={props.menu.img} alt="" width="280" height="160" />
      <div className="ml-4">
        <header className="flex justify-between items-center border-bottom">
          <h2 className="capitalize">{props.menu.title}</h2>
          <strong className="inline-block">${props.menu.price}</strong>
        </header>
        <p className="mt-4">{props.menu.desc}</p>
      </div>
    </article>
  );
}
export default Card;
