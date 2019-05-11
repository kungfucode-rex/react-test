const fs = require('fs');
const nn = require("node-notifier");

function BuildNotifyPlugin() {}

BuildNotifyPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', function (compiler, callback) {
    nn.notify({
      title: 'Construction complete!',
      message: 'Refresh to try use resource ^_^'
    });
    console.log(arguments)
  })
}

module.exports = BuildNotifyPlugin;