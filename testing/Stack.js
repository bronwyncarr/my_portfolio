import "./Stack.css";
import StackItem from './StackItem'

function Stack() {
  return (
    <ul class="container">
      <StackItem name="HTML" icon="fab fa-html5"/>
      <StackItem name="CSS" icon="fa-css3-alt"/>
      <StackItem name="JAVASCRIPT" icon="fa-js"/>
      <StackItem name="RUBY" icon=""/>
      <StackItem name="RAILS" icon=""/>
      <StackItem name="REACT" icon=""/>
      <StackItem name="POSTGRESQL" icon=""/>
      <StackItem name="MONGODB" icon=""/>
      <StackItem name="NODE.JS" icon=""/>
      <StackItem name="EXPRESS" icon=""/>
      <StackItem name="BOOTSTRAP" icon=""/>
    </ul>
  )
}

export default Stack
