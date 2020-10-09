import resolve from 'rollup-plugin-node-resolve'
export default {
    input: 'src/main.js',
    output: [
        {
            file: 'bundle.js',
            format: 'cjs'
        },
        {
            file: 'amd.js',
            format: 'amd'
        },
        {
            file: 'umd.js',
            format: 'umd',
            name: 'myUmd'
        },
        {
            file: 'esm.js',
            format: 'esm'
        },
        {
            file: 'iife.js',
            format: 'iife',
            name: 'myIife'
        }
    ],
    plugins: [ resolve() ]
}
