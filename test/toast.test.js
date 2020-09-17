const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast/toast'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false
// 配置是否允许 vue-devtools 检查代码
Vue.config.devtools = false

describe('Toast', () => {
  // BDD 行为驱动测试
  it('存在', () => {
    expect(Toast).to.exist
  })

  describe('props',()=>{
    const Constructor = Vue.extend(Toast)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('接收 autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      vm = new Constructor({
        propsData: {
          autoClose: 1
        }
      }).$mount(div)
      vm.$on('close',() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    })
    it('接收 closeButton', () => {
      const callback = sinon.fake()
      vm = new Constructor({
        propsData: {
          closeButton: {
            text: 'closed!',
            callback
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('closed!')
      closeButton.click()
      expect(callback).to.have.been.called
    })
    it('接收 enableHtml', () => {
      vm = new Constructor({
        propsData: {
          enableHtml: true
        }
      })
      vm.$slots.default = '<strong id="test">hi</strong>'
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    })
    it('接收 position', () => {
      vm = new Constructor({
        propsData: {
          position: 'bottom'
        }
      }).$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })
  })
})
