/*
 * @Description
 * @Autor 朱俊
 * @Date 2021-09-18 10:05:51
 * @LastEditors 朱俊
 * @LastEditTime 2021-09-18 10:05:51
 */
// will-ui/index.ts

import { App } from "vue";
import Button from "@suit-ui/button";
const components = [Button];

const install = (app: App): void => {
  components.forEach((component) => {
    // 遍历组件，挂载到全局
    app.component(component.name, component);
  });
};

export default {
  install, // 导出install方法。createApp({}).use() 需要install方法
};
