// eslint-disable-next-line no-undef
require('esbuild').buildSync({
    entryPoints: ['./src/sw.js', './src/scripts/scrappingLinkedin.js'],
    bundle: true,
    platform: 'node',
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    outdir: './dist',
});