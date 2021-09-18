/*
 * @Description
 * @Autor 朱俊
 * @Date 2021-09-18 09:57:49
 * @LastEditors 朱俊
 * @LastEditTime 2021-09-18 10:02:27
 */
import { App, defineComponent } from "vue";
import Button from "./src/button.vue";

Button.install = (app: App) => {
  app.component(Button.name, Button);
};

type IWithInstall = ReturnType<typeof defineComponent> & {
  install(app: App): void;
};

let _Button: IWithInstall = Button;

export default _Button;
