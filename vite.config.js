/** @type {import('vite').UserConfig} */
export default {
    build: {
        outDir: 'build',
        manifest: true,
        rollupOptions: {
            input: 'src/js/main.ts',
        },
    },
}