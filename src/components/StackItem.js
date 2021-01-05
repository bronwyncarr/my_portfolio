import { render } from "@testing-library/react"

function StackItem({name, icon}) {
  return (
    <div>
      <p>{name}
        <i className={icon}></i>
      </p>
    </div>
  )
}

export default StackItem