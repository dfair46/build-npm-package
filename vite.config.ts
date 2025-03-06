import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'), // 入口文件
            name: 'MyNpmPackage', // 库的全局变量名
            fileName: (format) => `my-utils.${format}.js`, // 输出文件名
        }
    },
});
