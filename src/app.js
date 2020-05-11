import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'

Vue.component('j-button', Button);
Vue.component('j-icon', Icon);
Vue.component('j-button-group', ButtonGroup);
Vue.component('j-input', Input);
Vue.component('j-row', Row);
Vue.component('j-col', Col);

new Vue({
  el: '#app',
  data:{
    loading1: false,
    loading2: true,
    loading3: false,
    message: '张三'
  },
  methods:{
    inputChange(event){
      console.log(event.target.value)
    }
  }
});

