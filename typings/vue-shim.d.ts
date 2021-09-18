/*
 * @Description
 * @Autor 朱俊
 * @Date 2021-09-18 09:49:28
 * @LastEditors 朱俊
 * @LastEditTime 2021-09-18 09:49:31
 */
// typings/vue-shim.d.ts

declare module "*.vue" {
  // 取defineComponent的返回值，标识组件类型
  import { defineComponent, App } from "vue";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  // 导出组件类型
  export default component;
}
