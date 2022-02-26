import { createApp } from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";

import "./scss/main.scss";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Import sweet alert
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

//

const app = createApp(App).use(VueSweetalert2).use(store).use(router);
app.mount("#app");
