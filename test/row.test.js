const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
// 配置是否允许 vue-devtools 检查代码
Vue.config.devtools = false

describe('Row', () => {
  // BDD 行为驱动测试
  it('存在', () => {
    expect(Row).to.exist
  })

  it('可以接收gutter属性', (done) => {
    Vue.component('j-row',Row)
    Vue.component('j-col',Col)
    const div = document.createElement('div')
    document.body.append(div)
    div.innerHTML = `
      <j-row gutter="20">
        <j-col span="12"></j-col>
        <j-col span="12"></j-col>
      </j-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(()=>{
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    },0)
  })
  it('可以接收align属性', () => {
    const div = document.createElement('div')
    document.body.append(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData:{
        align: 'right'
      }
    }).$mount(div)
    expect(getComputedStyle(vm.$el).justifyContent).to.eq('flex-end')
    div.remove()
    vm.$destroy()
  })
})
