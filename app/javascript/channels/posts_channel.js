import consumer from "./consumer"
import Preview from '../preview'

const postsChannel = consumer.subscriptions.create("PostsChannel", {
  connected() {
    console.log("connected");
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log("disconnected");
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const preview = new Preview(data)
    preview.show()
  },

  notify: function (id) {
    return this.perform('notify', { id: id });
  }
});

window.app = { postsChannel }
