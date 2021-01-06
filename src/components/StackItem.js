import "./StackItem.css";

function StackItem({ name, idx, angle }) {
  //
  return (
    <div
      style={{
        transform: `rotate(${angle}deg)`,
      }}
      className="inner-container"
    >
      <span
        style={{
          transform: `rotate(${-angle}deg)`,
        }}
        className={idx}
      >
        <i className={name}></i>E
      </span>
    </div>
  );
}

export default StackItem;
