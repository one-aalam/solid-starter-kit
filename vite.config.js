import path from 'path';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
    resolve: {
        alias: {
          '~/': `${path.resolve(__dirname, 'src')}/`,
        },
    },
    plugins: [
        solidPlugin(),
        AutoImport({
            resolvers: [
              IconsResolver({
                prefix: 'Icon',
                extension: 'jsx',
                alias: {
                    'hero': 'heroicons-solid'
                }
              })
            ],
        }),
        Icons({
            compiler: 'solid',
            defaultClass: 'w-7 h-7 inline-block'
        }),
    ],
    build: {
        target: 'esnext',
        polyfillDynamicImport: false,
    },
});
