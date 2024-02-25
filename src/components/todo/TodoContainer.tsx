import { Button } from '../ui/button';
import AddTodoModal from './AddTodoModal';
import TodoCart from './TodoCart';

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between m-5">
        <AddTodoModal />
        <Button className="bg-primary-gradient text-xl font-semibold">
          Filter
        </Button>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TodoCart />
          <TodoCart />
        </div>
        {/* <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md">
          <p>There is no task pending</p>
        </div> */}
      </div>
    </div>
  );
};
export default TodoContainer;
