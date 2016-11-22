// Components

Vue.component('vp-header', {
  template: 
    `<div class="header">
      <vp-content>
        <slot></slot>
      </vp-content>
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
    `<div class="content"><slot></slot></div>`
});

Vue.component('vp-section', {
  data: function() {
    return {
      content: ''
    }
  },
  methods: {
    fetchContent() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
        .then(function(data) {
          var random   = Math.round(Math.random() * (9 - 0) + 0);
          this.content = data.body[random].body;
        });
    }
  },
  props: ['type'],
  template: 
    `<section class="section" :class="{ 'section-dark': type }">
      <vp-content>
        <slot name="title"></slot>
        {{ content }}

        <button @click="fetchContent()">Fetch new content</button>
      </vp-content>
    </section>`
})

var app = new Vue({
  el: '#app',

  data: {
    content: '',
    items: [
      { text: 'Item 1' },
      { text: 'Item 2' },
      { text: 'Item 3' }
    ]
  }
});