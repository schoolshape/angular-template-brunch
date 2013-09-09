describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('compile without templateDir', function() {
    var path = 'dev/test/test.html';
    var data = 'html';
    var callback = function(error, html){
      expect(html).to.equal("<script type='text/ng-template' id='dev/test/test.html'>\nhtml</script>\n");
    }
    plugin.compile(data, path, callback);
  });

  it('should compile with trim path', function() {
    plugin.templateDir = /^(app|dev)\//

    var path = undefined;
    var data = 'html';
    var callback = function(error, html){
      expect(html).to.equal("<script type='text/ng-template' id='login/login.html'>\nhtml</script>\n");
    }

    path = 'app/login/login.html';
    plugin.compile(data, path, callback);

    path = 'dev/login/login.html';
    plugin.compile(data, path, callback);
  });

});
