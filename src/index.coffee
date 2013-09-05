module.exports = class HtmlTempalate
    brunchPlugin: yes
    type: 'template'
    extension: 'html'

    constructor: (config) ->
        if config.plugins.ngTemplate != undefined
            @templateDir = config.plugins.ngTemplate.template
            if @templateDir.slice(-1) != "/"
                @templateDir=@templateDir + "/"
        else
            @templateDir = undefined

    compile: (data, path, callback) ->
        if (@templateDir != undefined) and (path.indexOf(@templateDir) != -1)
            path = path.slice(@templateDir.length)
        head = "<script type='text/ng-template' id='"+path+"'>\n"
        tail = "</script>\n"
        callback null, head + data + tail
