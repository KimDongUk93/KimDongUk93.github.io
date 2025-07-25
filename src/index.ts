import TodoListApp from './TodoListApp';

const el = document.getElementById('app')!;

const todoListApp = new TodoListApp({
  el,
  useDnd: true,
});

todoListApp.render();