import classes from './TodosPage.module.css';

console.log(classes)

const Todo = ({todo}) => {
  return (
    <div className={classes.todo}>
      {todo}
    </div>
  );
};

export default Todo;