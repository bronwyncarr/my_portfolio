import "./StackItem.css";

function StackItem({ name, idx }) {
  // 
  return (
    <div className="inner-container" >
      <span className={idx}>
        <i className={name}></i>E
      </span>
    </div>
  );
}

export default StackItem;
