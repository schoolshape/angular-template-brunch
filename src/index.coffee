module.exports = class HtmlTempalate
    brunchPlugin: yes
    type: 'template'
    extension: 'html'

    constructor: (@config) ->
        @templateDir = config.ngTemplate?.template or "_template"

    compile: (data, path, callback) ->
        head = "<script type='text/ng-template' id='"+path+"'>\n"
        tail = "</script>\n"
        callback null, head + data + tail
