module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    [
      'component',
      {
        'libraryName': 'element-ui',
        'styleLibraryName': 'theme-chalk'
      }
    ],
    ["import", {
    "libraryName": "view-design",
    "libraryDirectory": "src/components"
  }]
  ]
}
