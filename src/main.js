import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";

import "./scss/main.scss";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App).use(store).use(router);
app.mount("#app");
