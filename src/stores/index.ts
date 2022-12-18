import { createPinia, type Pinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persistedstate';

const store: Pinia = createPinia();
store.use(piniaPluginPersist);

export default store;
