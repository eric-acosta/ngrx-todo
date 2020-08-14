import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './models/todo.model';

 
export const estadoInicial:Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('Vencer a thanos'),
  new Todo('comprar traje de ironman'),
  new Todo('saludar al cap'),
];
 
const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)] ),
);
 
export function todoReducer(state, action) {
  return _todoReducer(state, action);
}