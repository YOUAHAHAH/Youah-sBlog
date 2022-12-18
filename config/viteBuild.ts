export default (OUTPUT_DIR: string) => {
  const viteBuild = {
    minify: 'terser', // build配置项minify没有配置，默认是esbuild，需要配置为terser
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    }, // 清除console和debugger
    rollupOptions: {
      output: {
        manualChunks(id: string | string[]) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        }, //静态资源分拆打包
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
      },
    },
    outDir: OUTPUT_DIR,
    target: 'es2015',
    cssTarget: 'chrome80',
    brotliSize: false,
    chunkSizeWarningLimit: 1500,
  };

  return viteBuild;
};
