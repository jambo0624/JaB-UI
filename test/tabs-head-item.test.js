const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs/tabs'
import TabsHead from "../src/tabs/tabs-head";
import TabsHeadItem from "../src/tabs/tabs-head-item";
import TabsBody from "../src/tabs/tabs-body";
import TabsBodyPane from "../src/tabs/tabs-body-pane";

Vue.component('j-tabs', Tabs);
Vue.component('j-tabs-head', TabsHead);
Vue.component('j-tabs-head-item', TabsHeadItem);
Vue.component('j-tabs-body', TabsBody);
Vue.component('j-tabs-body-pane', TabsBodyPane);
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
// 配置是否允许 vue-devtools 检查代码
Vue.config.devtools = false

describe('TabsHeadItem', () => {
  // BDD 行为驱动测试
  it('存在', () => {
    expect(TabsHeadItem).to.exist
  })

  it('接收 name 属性', ()=>{
    // const Constructor = Vue.extend(TabsHeadItem)
    // const vm = new Constructor({
    //   propsData:{
    //     name: 'xxx'
    //   }
    // }).$mount()
    // expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
    // vm.$el.remove()
    // vm.$destroy()
  })
  it('接收 disabled 属性', ()=>{
    // const Constructor = Vue.extend(TabsHeadItem)
    // const vm = new Constructor({
    //   propsData:{
    //     disabled: true,
    //     name: 'xxx'
    //   }
    // }).$mount()
    // expect(vm.$el.classList.contains('disabled')).to.be.true
    // const callback = sinon.fake()
    // vm.$on('click', callback)
    // vm.$el.click()
    // expect(callback).to.have.not.been.called
    // vm.$el.remove()
    // vm.$destroy()
  })
})
