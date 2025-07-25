type TodoListAppProps = {
  el: HTMLElement;
  useDnd: boolean;
};

class TodoListApp {
  private el: HTMLElement;
  private useDnd: boolean;

  constructor({ el, useDnd }: TodoListAppProps) {
    this.el = el;
    this.useDnd = useDnd;
  }

  render() {
    this.el.innerHTML = `
      <h1>Todo List Test</h1>
    `;
  }
}

export default TodoListApp;
