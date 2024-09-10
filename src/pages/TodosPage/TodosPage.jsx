import Todo from "../../components/Todo/Todo";

const TodosPage = () => {
  const todos = ["todo 1", "todo 2", "todo 3",];

  return (
    <>
      {
        todos.map((todo,index) => {
        return <Todo key={index}
        todo={todo}/>;
      })
      }
    </>
  );
};

export default TodosPage;