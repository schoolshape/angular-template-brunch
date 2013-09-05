describe('Plugin', function() {
  var plugin;

  beforeEach(function() {
    plugin = new Plugin({});
  });

  it('should init', function() {
    var config = {ngTemplate : { template: 'src/template' }};
    plugin = new Plugin( config );
    expect(plugin.templateDir).to.equal('src/template/');

    var config = {ngTemplate : { template: 'src/template/' }};
    plugin = new Plugin( config );
    expect(plugin.templateDir).to.equal('src/template/');
  });

  it('should compile with full path', function() {
    var path = 'src/template/test.html';
    var data = 'html';
    var callback = function(error, html){
      expect(html).to.equal("<script type='text/ng-template' id='src/template/test.html'>\nhtml</script>\n");
    }
    plugin.compile(data, path, callback);
  });

  it('should compile with trim path', function() {
    var path = 'src/template/test.html';
    var data = 'html';
    var callback = function(error, html){
      expect(html).to.equal("<script type='text/ng-template' id='test.html'>\nhtml</script>\n");
    }
    plugin.templateDir = 'src/template/';
    plugin.compile(data, path, callback);
  });

});
