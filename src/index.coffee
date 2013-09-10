module.exports = class HtmlTempalate

    brunchPlugin : yes
    type         : 'template'
    extension    : 'html'

    constructor: (config) ->
        @templateDir = config?.plugins?.ngTemplate?.template ? ""

    compile: (data, path, callback) ->
        try
            path   = path.replace @templateDir, ''
            result = "<script type='text/ng-template' id='#{path}'>#{data}</script>"
        catch err
            error  = "Template minify failed on #{path}: #{err}"
        process.nextTick ->
            callback error, result
