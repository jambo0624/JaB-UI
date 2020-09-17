
const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/grid/col'
import Row from "../src/grid/row";

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
// 配置是否允许 vue-devtools 检查代码
Vue.config.devtools = false

describe('Col', () => {
  // BDD 行为驱动测试
  it('存在', () => {
    expect(Col).to.exist
  })
  it('可以接收span属性', () => {
    const div = document.createElement('div')
    document.body.append(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData:{
        span: 1
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('可以接收offset属性', () => {
    const div = document.createElement('div')
    document.body.append(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData:{
        offset: 1
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('offset-1')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('可以接收pc属性', () => {
    const div = document.createElement('div')
    document.body.append(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData:{
        pc: {span:1,offset:2}
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('可以接收ipad属性', () => {
    const div = document.createElement('div')
    document.body.append(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData:{
        ipad: {span:1,offset:2}
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-ipad-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-ipad-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('可以接收narrow-pc属性', () => {
    const div = document.createElement('div')
    document.body.append(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData:{
        narrowPc: {span:1,offset:2}
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-narrow-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-narrow-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
  it('可以接收wide-pc属性', () => {
    const div = document.createElement('div')
    document.body.append(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData:{
        widePc: {span:1,offset:2}
      }
    }).$mount(div)
    expect(vm.$el.classList.contains('col-wide-pc-1')).to.eq(true)
    expect(vm.$el.classList.contains('offset-wide-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  })
})
