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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsHeadItem from './tabs-head-item'
import TabsBody from './tabs-body'
import TabsBodyPane from './tabs-body-pane'
import Popover from './popover'

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
Vue.component('j-tabs', Tabs);
Vue.component('j-tabs-head', TabsHead);
Vue.component('j-tabs-head-item', TabsHeadItem);
Vue.component('j-tabs-body', TabsBody);
Vue.component('j-tabs-body-pane', TabsBodyPane);
Vue.component('j-popover', Popover);
Vue.use(plugin)

new Vue({
  el: '#app',
  data:{
    selectedTab: 'poetry'
  },
  created(){
  },
  methods:{
    yyy(){
      console.log('yyy')
    }
  }
});

