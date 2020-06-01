import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import plugin from './plugin'

Vue.component('j-button', Button);
Vue.component('j-icon', Icon);
Vue.component('j-button-group', ButtonGroup);
Vue.component('j-input', Input);
Vue.component('j-row', Row);
Vue.component('j-col', Col);
Vue.component('j-layout', Layout);
Vue.component('j-header', Header);
Vue.component('j-content', Content);
Vue.component('j-sider', Sider);
Vue.component('j-footer', Footer);
Vue.use(plugin)

new Vue({
  el: '#app',
  data:{
    loading1: false,
    loading2: true,
    loading3: false,
    message: '张三'
  },
  created(){
  },
  methods:{
    showToast(){
      this.$toast('兔斯基')
    }
  }
});

