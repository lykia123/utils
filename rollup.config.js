import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json'

const banner = `/*!
 * ${pkg.name}.js v${pkg.version}
 * (c) 2020-${new Date().getFullYear()} Russell
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
    plugins: [babel(), commonjs(), resolve(), terser()]
}
