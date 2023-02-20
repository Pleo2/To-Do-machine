import React from "react";
import { TodoCounter } from '../Counter'
import { SearchInput } from '../SearchInput'
import { ListItems } from "../ListItems";
import { Item } from "../Item";
import { CreateTodoButton } from "../CreateBtn";
import { ProgressBar } from "../ProgressBar";

export const AppUI = ({
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchTodos,
      completeOrUncompleteTodo,
      deleteTodo,
}) => {
  return (
    <>
      <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
      />

      <ProgressBar 
        completed={completedTodos}
        total={totalTodos}
      />

      <SearchInput 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <CreateTodoButton/>
      <ListItems>  
        {/* cuando se hace un recorrido se debe enviar la propiedad "key" dentro del componente de una lista  */}
        {searchTodos.map((todo) => {
          return (
            <Item 
              key={todo.itemId} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeOrUncompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          );
        })}
      </ListItems>
    </>
  );
}