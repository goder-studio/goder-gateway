module.exports = {
  header: '# History \n\n',
  releaseCommitMessageFormat: 'chore(release): 📦 {{currentTag}}',
  types: [
    {
      type: 'feat',
      section: '✨ Features | 新功能',
    },
    {
      type: 'fix',
      section: '🐛 Bug Fixes | Bug 修复',
    },
    {
      type: 'perf',
      section: '⚡ Performance Improvements | 性能优化',
      hidden: false,
    },
    {
      type: 'revert',
      section: '⏪ Reverts | 回退',
      hidden: false,
    },
    {
      type: 'chore',
      section: '📦 Chores | 其他更新',
      hidden: true,
    },
    {
      type: 'docs',
      section: '📝 Documentation | 文档',
      hidden: true,
    },
    {
      type: 'style',
      section: '💄 Styles | 风格',
      hidden: false,
    },
    {
      type: 'refactor',
      section: '♻ Code Refactoring | 代码重构',
      hidden: false,
    },
    {
      type: 'test',
      section: '✅ Tests | 测试',
      hidden: false,
    },
    {
      type: 'wip',
      section: '👀 Wip | 开发中',
      hidden: false,
    },
  ],
  bumpFiles: [
    {
      filename: 'package.json',
      updater: require.resolve('./config/version-updater.js'),
    },
  ],
}
