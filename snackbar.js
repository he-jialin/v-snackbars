/**
 * @param msg 信息
 * @param color snackbar 颜色
 * @param visible 是否可见
 * @param showClose 关闭按钮
 * @param timeout 停留持续时间 
 */
const snackbar = {
  // 
  namespaced: true,
  state: {
    objects: [],
    messages: [],
    color: '',
    visible: false,
    showClose: true,
    timeout: 5000,
    top: true
  },
  // 逻辑处理,同步函数
  mutations: {
    setObjects(state, objects) {
      state.objects = objects
    },
    setMessages(state, messages) {
      state.messages = messages
    },
    pushObject(state, object) {
      state.objects.push(object)
    }
  },
  // 逻辑处理,异步函数
  actions: {
    openSnackbar(context, options) {
      let timeout = context.state.timeout
      if (options.timeout != undefined) {
        timeout = options.timeout
      }
      if (options.top == undefined) {
        options.top = true
      }
      if (options.transition == undefined) {
        options.transition = 'fade-transition'
      }
      //context.state.messages.push(options.msg);
      //transitions: ["fab-transition", "scale-transition", "fade-transition"],
      context.commit('pushObject', {
        message: options.message,
        top: options.top,
        color: options.color,
        transition: options.transition,
        timeout: timeout,
      });
    }
  }
}

export default snackbar;
