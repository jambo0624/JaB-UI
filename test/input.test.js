const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
// 配置是否允许 vue-devtools 检查代码
Vue.config.devtools = false

describe('Button', () => {
  // BDD 行为驱动测试
  it('存在', () => {
    expect(Input).to.exist
  })
  describe('props',()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('接收value',()=>{
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })
    it('接收disabled',()=>{
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('接收readonly',()=>{
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    it('接收error', () => {
      vm = new Constructor({
        propsData: {
          error: 'unsuccess'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#j-error')
      const spanElement = vm.$el.querySelector('span')
      expect(spanElement.innerText).to.equal('unsuccess')
    })
  })
  describe('events',()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('支持change/input/focus/blur事件',()=> {
      ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
        vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        // 触发input的change事件
        let event = new Event(eventName)
        Object.defineProperty(event,'target',{
          value: {value:'hi'},
          enumerable:false
        })
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith('hi')
      })
    })
  })
})