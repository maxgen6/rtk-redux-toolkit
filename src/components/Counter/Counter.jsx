import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useGetTodoQuery, useAddTodoMutation} from '../../store/counter.api';

import { plusOne, minusOne } from "../../store/counter.slice";

const Counter = () => {
  const [number, setNumber] = useState('');
  const [todoTitle, setTodoTitle] = useState('');
  // const number = useSelector(state => state.number);
  // const dispatch = useDispatch();

  const {isLoading, data = []} = useGetTodoQuery(number);
  const [addTodo, {isLoading: loading}] = useAddTodoMutation();

  const handlerAddOne = () => {
    // dispatch(plusOne());
    setNumber(prev => prev + 1)
  }
  const handlerMinusOne = () => {
    // dispatch(minusOne())
    setNumber(prev => prev - 1)
  };

  const handlerInputTodoName = e => setTodoTitle(e.target.value);

  const handlerAddTodo = async () => {
    const body = {
      title: todoTitle,
      id: 201,
      userId: 1,
      completed: false
    };

    await addTodo(body).unwrap();
    setTodoTitle('')
  }

  return (
    isLoading
    ? <h1>Loading...</h1>
    : (
      <>
        <div>
          <button onClick={handlerMinusOne}>-</button>
          <button onClick={handlerAddOne}>+</button>
          <span>{number}</span>
        </div>
        <div>
          {
            loading
            ? <p>Load.....</p>
            : <>
                <p>add todo</p>
                <input type="text" onChange={handlerInputTodoName}/>
                <button onClick={handlerAddTodo}>add</button>
              </>
          }

        </div>
        <div>
          <ul>
            {data?.map(todo => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </div>
      </>
    )
  )
};

export default Counter;