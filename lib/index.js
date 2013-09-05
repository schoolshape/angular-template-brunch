// Generated by CoffeeScript 1.6.2
var HtmlTempalate;

module.exports = HtmlTempalate = (function() {
  HtmlTempalate.prototype.brunchPlugin = true;

  HtmlTempalate.prototype.type = 'template';

  HtmlTempalate.prototype.extension = 'html';

  function HtmlTempalate(config) {
    var _ref;

    this.config = config;
    this.templateDir = ((_ref = config.ngTemplate) != null ? _ref.template : void 0) || "_template";
  }

  HtmlTempalate.prototype.compile = function(data, path, callback) {
    var head, tail;

    head = "<script type='text/ng-template' id='" + path + "'>\n";
    tail = "</script>\n";
    return callback(null, head + data + tail);
  };

  return HtmlTempalate;

})();