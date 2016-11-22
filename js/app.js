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
});

Vue.component('vp-content', {
  template: 
    `<section class="padding">
      <slot></slot>
    </section>`
})

var app = new Vue({
  el: '#app',

  data: {
    items: [
      { text: 'Item 1' },
      { text: 'Item 2' },
      { text: 'Item 3' }
    ]
  }
});