let { createApp, h } = Vue;

window.onload = function () {
  createApp({
    data() {
      return {
        msg: "render",
      };
    },
    render() {
      return h("div", this.msg);
    },
  }).mount("#app");
};
