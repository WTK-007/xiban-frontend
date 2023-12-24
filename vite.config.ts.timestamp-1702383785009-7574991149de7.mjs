// vite.config.ts
import { defineConfig } from "file:///D:/Desktop/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%B0%B1%E4%B8%9A/Java/%E9%A1%B9%E7%9B%AE/%E6%9B%A6%E4%BC%B4%E4%BC%99%E4%BC%B4%E5%8C%B9%E9%85%8D%E7%B3%BB%E7%BB%9F/xiban-frontend/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Desktop/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%B0%B1%E4%B8%9A/Java/%E9%A1%B9%E7%9B%AE/%E6%9B%A6%E4%BC%B4%E4%BC%99%E4%BC%B4%E5%8C%B9%E9%85%8D%E7%B3%BB%E7%BB%9F/xiban-frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///D:/Desktop/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%B0%B1%E4%B8%9A/Java/%E9%A1%B9%E7%9B%AE/%E6%9B%A6%E4%BC%B4%E4%BC%99%E4%BC%B4%E5%8C%B9%E9%85%8D%E7%B3%BB%E7%BB%9F/xiban-frontend/node_modules/unplugin-vue-components/dist/vite.mjs";
import { VantResolver } from "file:///D:/Desktop/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%B0%B1%E4%B8%9A/Java/%E9%A1%B9%E7%9B%AE/%E6%9B%A6%E4%BC%B4%E4%BC%99%E4%BC%B4%E5%8C%B9%E9%85%8D%E7%B3%BB%E7%BB%9F/xiban-frontend/node_modules/@vant/auto-import-resolver/dist/index.esm.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXNrdG9wXFxcXFx1OEJBMVx1N0I5N1x1NjczQVx1NUMzMVx1NEUxQVxcXFxKYXZhXFxcXFx1OTg3OVx1NzZFRVxcXFxcdTY2RTZcdTRGMzRcdTRGMTlcdTRGMzRcdTUzMzlcdTkxNERcdTdDRkJcdTdFREZcXFxceGliYW4tZnJvbnRlbmRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERlc2t0b3BcXFxcXHU4QkExXHU3Qjk3XHU2NzNBXHU1QzMxXHU0RTFBXFxcXEphdmFcXFxcXHU5ODc5XHU3NkVFXFxcXFx1NjZFNlx1NEYzNFx1NEYxOVx1NEYzNFx1NTMzOVx1OTE0RFx1N0NGQlx1N0VERlxcXFx4aWJhbi1mcm9udGVuZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRGVza3RvcC8lRTglQUUlQTElRTclQUUlOTclRTYlOUMlQkElRTUlQjAlQjElRTQlQjglOUEvSmF2YS8lRTklQTElQjklRTclOUIlQUUvJUU2JTlCJUE2JUU0JUJDJUI0JUU0JUJDJTk5JUU0JUJDJUI0JUU1JThDJUI5JUU5JTg1JThEJUU3JUIzJUJCJUU3JUJCJTlGL3hpYmFuLWZyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcbmltcG9ydCB7IFZhbnRSZXNvbHZlciB9IGZyb20gJ0B2YW50L2F1dG8taW1wb3J0LXJlc29sdmVyJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW1ZhbnRSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgXSxcbn0pXG5cblxuXG5cblxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3YyxTQUFTLG9CQUFvQjtBQUNyZSxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxvQkFBb0I7QUFHN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osV0FBVztBQUFBLE1BQ1QsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUFBLElBQzVCLENBQUM7QUFBQSxFQUNIO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
