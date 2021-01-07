import "./StackItem.css";

// default prop if angle not required for small screens
function StackItem({ name, idx, angle = 0 }) {
  // Each item has a different, evenly spaced angle around the circle.
  // The outer represents bike spokes
  // The inner span is just the icon rotated opposite to the spoke angle so the icon is upright.
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
        <i className={name}></i>
      </span>
    </div>
  );
}

export default StackItem;
