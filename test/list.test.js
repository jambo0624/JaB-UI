const expect = chai.expect;
import Vue from "vue";
import List from "../src/list/list.vue";

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.component("j-list", List);

describe("List", () => {
  it("存在.", () => {
    expect(List).to.exist;
  });

  describe("props", () => {
    const Constructor = Vue.extend(List);
    it("接受 originalList 和 itemHeight", () => {
      const div = document.createElement("div");
      document.body.appendChild(div);
      div.innerHTML = `
        <j-list
          style="width: 500px; height: 600px;"
        >
          <template #items="{ visibleData }">
            <div
              class="item"
              v-for="item in visibleData"
              :key="item.id"
              :style="{ height: itemHeight + 'px', lineHeight: itemHeight + 'px' }"
            >
              {{ item.value }}
            </div>
          </template>
        </j-list>
      `;
      let vm = new Constructor({
        propsData: {
          originalList: [1, 2, 3],
          itemHeight: 30,
        },
      }).$mount(div);
      vm.$nextTick(() => {
        const phantom = vm.$el.querySelector(".j-list-phantom");
        expect(getComputedStyle(phantom).height).to.eq("90px");
        div.remove();
        vm.$destroy();
      });
    });
  });
});
