import { application } from '@/application/application';
import { createAppRouter } from './application/router';
import { ColorService } from './presentation/services/color-service';
import { VueQueryPlugin, VueQueryPluginOptions } from '@tanstack/vue-query';
import { bindServices } from './configuration/provide/container';
import { routes } from './configuration/routes/routes';

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  }
};

ColorService.setVariables(document.body);

bindServices((key, value) => application.provide(key, value));
application
  .use(createAppRouter(routes))
  .use(VueQueryPlugin, vueQueryPluginOptions)
  .mount('#app');
