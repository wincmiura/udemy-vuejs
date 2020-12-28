import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber',LikeNumber)
// Vue.directive("border",{
//   bind(el, binding, vnode){
//     // ディレクティブが初めて対象の要素に紐づいたとき。最初の１回のみ。
//   },
//   inserted(el, binding, vnode){
//     // 親Nodeに挿入されたとき。DOMに実際に挿入されるとき。
//   },
//   update(el, binding, vnode, oldVnode){
//     // コンポーネントが更新される度。子コンポーネントが更新される前
//   },
//   componentUpdated(el, binding, vnode, oldVnode){
//     // コンポーネントが更新される度。子コンポーネントが更新されたあと
//   },
//   unbind(el, binding, vnode){
//     // ディレクティブがひもづいている要素から取り除かれたとき
//   }
// });

Vue.directive("border",function(el){
el.style.border="solid black 2px"
})
;

new Vue({
   render: h => h(App),
  // render: h => h('div','こんにちは'),
}).$mount('#app')
