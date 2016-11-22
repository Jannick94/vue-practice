// Components

Vue.component('vp-header', {
  template: 
    `<div class="header">
      <slot></slot>
    </div>`
});

Vue.component('vp-nav-items', {
  props: ['items'],
  template: 
    `<ul>
      <li v-for="item in items">{{ item.text }}</li>
    </ul>`
})

var app = new Vue({
  el: '#app',

  data: {
    message: 'Hello Vue',
    seen: true,
    todo: '',
    todos: [
      { text: 'Item 1' },
      { text: 'Item 2' },
      { text: 'Item 3' }
    ]
  },

  methods: {
    addTodo: function(todo) {
      this.todos.push({ text: todo });
    }
  }
});