import Vue from 'vue'
import Button from './button/button'
import Icon from './button/icon'
import ButtonGroup from './button/button-group'
import Input from './input/input'
import Row from './grid/row'
import Col from './grid/col'
import Layout from './layout/layout'
import Header from './layout/header'
import Content from './layout/content'
import Footer from './layout/footer'
import Sider from './layout/sider'
import plugin from './toast/plugin.js'
import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs-head'
import TabsHeadItem from './tabs/tabs-head-item'
import TabsBody from './tabs/tabs-body'
import TabsBodyPane from './tabs/tabs-body-pane'
import Popover from './popover/popover'
import Collapse from './collapse/collapse'
import CollapseItem from './collapse/collapse-item'

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
Vue.component('j-collapse', Collapse);
Vue.component('j-collapse-item', CollapseItem);
Vue.use(plugin)

new Vue({
  el: '#app',
  data:{
    selectedTab: ['2','3']
  },
  created(){
  },
  methods:{
    yyy(){
      console.log('yyy')
    }
  }
});

