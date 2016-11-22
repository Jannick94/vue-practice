var Home    = { template: '<div class="home">Home</div>' };
var Skills  = { template: '<div class="skills">Skills</div>' };

var routes = [
  { path: '/', component: Home },
  { path: '/skills', component: Skills }
];

var router = new VueRouter({
  routes: routes
})