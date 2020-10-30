import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json'

const banner = `/*!
 * ${pkg.name}.js v${pkg.version}
 * (c) 2018-${new Date().getFullYear()} Russell
 * Released under the MIT License.
 */`;

export default {
    input: 'src/main.js',
    output: [
        {
            format: 'cjs',
            file: pkg.main,
            banner
        },
        {
            format: 'umd',
            file: pkg.browser,
            name: 'ccUtil',
            banner,
        },
        {
            format: 'esm',
            file: pkg.module,
            banner
        },
        {
            format: 'amd',
            file: 'dist/ccUtil.amd.js',
            banner
        },
        {
            format: 'iife',
            file: 'dist/ccUtil.iife.js',
            name: 'ccUtil',
            banner
        }
    ],
    plugins: [commonjs(), resolve(), terser()]
}
