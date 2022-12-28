import LoadingComponent from '@/components/Loading.vue';
import Error from '@/views/Error/Error.vue';
import type { Component } from '@/router/types';

export const timer = (t: number | undefined, callback = () => {}) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      callback();
      resolve();
    }, t);
  });
};

export const AsyncComponent = (components: string, time: number) => {
  return defineAsyncComponent({
    loader: () => {
      return new Promise((resolve, reject) => {
        (async function () {
          try {
            await timer(time);
            const res: Component = components;
            resolve(res);
          } catch (error) {
            reject(error);
          }
        })();
      });
    },
    loadingComponent: LoadingComponent,
    errorComponent: Error,
    delay: 200,
    timeout: 5000,
    suspensible: false,
    onError(
      _error: any,
      retry: () => void,
      fail: () => void,
      attempts: number,
    ) {
      if (attempts < 3) {
        retry();
      } else {
        fail();
      }
    },
  }) as unknown as any;
};
