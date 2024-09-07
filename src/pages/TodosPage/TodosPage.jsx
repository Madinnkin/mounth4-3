import Todo from "../../components/Todo/Todo";
import classes from './TodosPage.module.css';
console.log(classes)

const TodosPage = () => {
  const todos = ["todo 1", "todo 2", "todo 3"];

  return (
    <div className={classes.inform}>
      <h1>Todos Page</h1>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodosPage;