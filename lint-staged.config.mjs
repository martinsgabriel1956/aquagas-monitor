export default {
  '*.{js,mjs,cjs,ts}': (filenames) => [
    'eslint --fix' + filenames.join(' '),
  ]
}