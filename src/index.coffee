module.exports = class HtmlTempalate
    brunchPlugin: yes
    type: 'template'
    extension: 'html'

    constructor: (config) ->
        if config?.plugins?.ngTemplate != undefined
            @templateDir = config.plugins.ngTemplate.template
        else
            @templateDir = undefined

    compile: (data, path, callback) ->
        path = path.replace @templateDir, ''
        head = "<script type='text/ng-template' id='"+path+"'>\n"
        tail = "</script>\n"
        callback null, head + data + tail
