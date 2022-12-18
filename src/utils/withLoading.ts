import { ElLoading, type LoadingParentElement } from 'element-plus';
import type { ComponentPublicInstance, ComponentOptionsBase, Ref } from 'vue';

interface defaultOptionsType {
  lock?: boolean;
  text?: string;
  background?: string;
  spinner?: string;
  fullscreen?: boolean;
  target?: object | string;
  body?: boolean;
}

const defaultOptions: defaultOptionsType = {
  lock: true,
  text: '正在加载',
  background: 'rgba(122, 122, 122, 0.8)',
};

export const withLoading = (fn = () => {}, options = {}) => {
  let loading: {
    close: any;
    setText?: (text: string) => void;
    removeElLoadingChild?: () => void;
    handleAfterLeave?: () => void;
    vm?: ComponentPublicInstance<
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      {},
      false,
      ComponentOptionsBase<
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        any,
        {},
        {},
        string
      >,
      {}
    >;
    $el?: HTMLElement;
    originalPosition?: Ref<string>;
    originalOverflow?: Ref<string>;
    visible?: Ref<boolean>;
    parent?: Ref<LoadingParentElement>;
    background?: Ref<string>;
    svg?: Ref<string>;
    svgViewBox?: Ref<string>;
    spinner?: Ref<string | boolean>;
    text?: Ref<string>;
    fullscreen?: Ref<boolean>;
    lock?: Ref<boolean>;
    customClass?: Ref<string>;
    target?: Ref<HTMLElement>;
    beforeClose?: Ref<(() => boolean) | undefined> | undefined;
    closed?: Ref<(() => void) | undefined> | undefined;
  };

  const showLoading = (options: defaultOptionsType) => {
    loading = ElLoading.service(options as unknown as any);
  };

  const hideLoading = () => {
    if (loading) {
      loading.close();
    }
  };

  const _options = Object.assign(defaultOptions, options);

  const newFn = (...args: any[]) => {
    try {
      showLoading(_options);
      const result = fn(...args);
      const isPromise = result instanceof Promise;
      if (!isPromise) {
        hideLoading();
        return result;
      }
      return result
        .then((res) => {
          hideLoading();
          return res;
        })
        .catch((err) => {
          hideLoading();
          throw err;
        });
    } catch (err) {
      hideLoading();
      throw err;
    }
  };
  return newFn;
};
