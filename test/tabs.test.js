import Row from "../src/row";

const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from "../src/tabs-head";
import TabsHeadItem from "../src/tabs-head-item";
import TabsBody from "../src/tabs-body";
import TabsBodyPane from "../src/tabs-body-pane";
import Col from "../src/col";
Vue.component('j-tabs', Tabs);
Vue.component('j-tabs-head', TabsHead);
Vue.component('j-tabs-head-item', TabsHeadItem);
Vue.component('j-tabs-body', TabsBody);
Vue.component('j-tabs-body-pane', TabsBodyPane);
// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
// 配置是否允许 vue-devtools 检查代码
Vue.config.devtools = false

describe('Tabs', () => {
  // BDD 行为驱动测试
  it('存在', () => {
    expect(Tabs).to.exist
  })

  it('接收 selected 属性', (done)=>{
    const div = document.createElement('div')
    div.innerHTML = `
    <j-tabs selected="singer">
      <j-tabs-head>
        <j-tabs-head-item name="singer">李志</j-tabs-head-item>
        <j-tabs-head-item name="dancer">玮玮</j-tabs-head-item>
        <j-tabs-head-item name="poetry">张佺</j-tabs-head-item>
      </j-tabs-head>
      <j-tabs-body>
        <j-tabs-body-pane name="singer">山阴路</j-tabs-body-pane>
        <j-tabs-body-pane name="dancer">米店</j-tabs-body-pane>
        <j-tabs-body-pane name="poetry">黄河谣</j-tabs-body-pane>
       </j-tabs-body>
    </j-tabs>
    `
    document.body.appendChild(div)
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(()=>{
      let activeItem = vm.$el.querySelector(`.tabs-head-item[data-name="singer"]`)
      expect(activeItem.classList.contains('active')).to.be.true
      done()
    })
  })
  it('接收 direction 属性', ()=>{
  })

})
