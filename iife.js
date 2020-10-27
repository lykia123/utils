var myIife = (function () {
    'use strict';

    // 数字千分位用逗号分隔
    function numberSplitWithComma(n) {
        // 如果不是字符或者数字，则直接返回
        if (typeof n !== 'string' && typeof n !== 'number') {
            return n
        }
        if(typeof n !== 'string') {
            n = n.toString();
        }
        var len = n.length;
        if (len <= 3) { return n }
        var r = len % 3;
        const start = n.slice(0, r);
        const end = n.slice(r).match(/\d{3}/g).join(',');
        return r > 0 ? start + ',' + end : end
    }
    // 格式化日期为 年-月-日 传入的参数为类似new Date()
    function formatDate (d) {
        const time = new Date(d);
        let y = time.getFullYear(); // 年份
        let m = (time.getMonth() + 1).toString().padStart(2,'0'); // 月份
        let r = time.getDate().toString().padStart(2,'0'); // 日子
        return `${y}-${m}-${r}`
    }
    // 将接口返回的数组格式化成下拉框、多个单选框option的label和value格式
    function changeToOptions (data, name, id) {
        const a = [];
        data.forEach(item => {
            a.push({label: item[name], value: item[id]});
        });
        return a
    }
    // 深度拷贝
    function deepClone (arg) {
        if (arg instanceof RegExp) return new RegExp(arg)
        if (arg instanceof Date) return new Date(arg)
        if (typeof arg !== 'object' || arg === null) {
            return arg
        }
        var result = arg instanceof Array ? [] : {};
        for (const key in arg) {
            if (arg.hasOwnProperty(key)) {
                if (typeof arg[key] === 'object') {
                    result[key] = deepClone(arg[key]); //递归复制
                } else {
                    result[key] = arg[key];
                }
            }
        }
        return result
    }
    //数组去重
    function uniq(arr) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (!result.includes(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result
    }
    var format = {
        numberSplitWithComma,
        formatDate,
        changeToOptions,
        deepClone,
        uniq
    };

    function isMobile (n) {
        return /^1[0-9]{10}$/.test(n)
    }
    function isEmail (n) {
        return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(n)
    }
    function isPhone(n) {
        return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(n)
    }
    // constructor: 属性返回对创建此对象的函数的引用
    function isNumber(n) {
        return (typeof n === 'number') && n.constructor == Number
    }
    function isString(n) {
        return (typeof n === 'string') && n.constructor == String
    }
    function isObj(n) {
        return (typeof n === 'object') && n.constructor == Object
    }
    function isArr(n) {
        return (typeof n === 'object') && n.constructor == Array
    }
    function isDate(n) {
        return (typeof n === 'object') && n.constructor == Date
    }
    function isCardId(n) {
        return (/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(n))
    }
    function isUrl(n) {
        return /^((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/.test(n)
    }
    var validate = {
        isMobile,
        isEmail,
        isPhone,
        isNumber,
        isString,
        isObj,
        isArr,
        isDate,
        isCardId,
        isUrl
    };

    function coocaakeymap(buts, curlink, hover, getVal, setVal, keyDownEvent){

        this.linkbuttons = $(buts);
        if(this.linkbuttons.length == 0){
            this.linkbuttons = $("body");
        }
        if($(curlink).length != 0){
            this.curLink = $(curlink);
        }else {
            for(var i = 0; i <this.linkbuttons.length; i++ ){
                if($(this.linkbuttons[i]).is(":visible")){
                    this.curLink = $(this.linkbuttons[i]);
                    break;
                }
            }
        }
        this.keyDownEvent = keyDownEvent || function(){};
        this.hoverClass = hover ? hover : "hover";
        this.input = null;

        this.setHeightLight(this);

        this.setVal = setVal || function(val){

            $(this).val(val);
        };
        this.getVal = getVal ||function(){
            return $(this).val();
        };

        var _this = this;
        //设置只读属性
        //$(buts).attr('readonly',true);
        //设置鼠标事件
        //$(buts).unbind("click").bind("click", function(){_this.handleClick(this); });
        $(buts).unbind("keyinput").bind('keyinput', this.handleInputVal);

        $(window).unbind("keydown").bind('keydown', function(ev){_this.keyHandler(_this, ev);});
        this.cmd = [];
        this.iscmd = false;
        this.debugCmd = {
            "cmd3739373938384040": function(){
                var info = "访问地址:" + window.location.href;
                coocaa.alert(info,function(){
                    _this.handlerKeydown();
                    return true;
                });
            },
            "cmd3737393938384040":function(){
                var info = "版本号：" + coocaa.version;
                coocaa.alert(info,function(){
                    _this.handlerKeydown();
                    return true;
                });
            }
        };
    }

    var nx;
    var ny;
    var xdist;
    //移除焦点元素
    coocaakeymap.prototype.remove = function(wh){
        this.linkbuttons = this.linkbuttons.not(wh);

    };
    //添加焦点元素
    coocaakeymap.prototype.add = function(wh){
        this.linkbuttons = this.linkbuttons.add(wh);
    };
    coocaakeymap.prototype.handlerKeydown = function(){
        var _this = this;
        $(window).unbind("keydown").bind("keydown", function(ev){_this.keyHandler(_this, ev);});
    };
    coocaakeymap.prototype.triggerCmd = function(code){
        if(this.debugCmd == null || this.iscmd == false || this.debugCmd == null){
            return;
        }
        this.cmd.push(code);
        if(this.cmd.length > 10){
            this.cmd = [];
            return;
        }
        var cmd = "cmd" + this.cmd.join("");
        if(typeof(this.debugCmd[cmd]) =="function"){
            this.cmd = [];
            this.iscmd = false;
            this.debugCmd[cmd]();
        }
    };
    coocaakeymap.prototype.setFocus = function(obj){
        //传入null则聚焦到第一个可见元素
        if(obj.length == 0){
            return;
        }
        if(!obj.is(":visible")){
            obj = null;
        }
        this.curLink = obj;
        this.setHeightLight(this);
    };

    coocaakeymap.prototype.handleClick = function(obj){
        this.setFocus($(obj));
        this.curLink.trigger("itemClick");
    };
    coocaakeymap.prototype.keyHandler = function(_this, ev){
        //var ev = event;
        var curKey = ev.keyCode;
        debug("<br/>");
        debug("keyCode = " + ev.keyCode);
        _this.curLink.trigger("beforekeyinput", [curKey,ev, _this]);
        if(_this.input != null && _this.curLink.get(0) == _this.input.get(0)){
            //ev.stopPropagation();
            debug("开始执行keyinput事件");
            _this.input.trigger("keyinput", [curKey,_this]);

        }
        _this.curLink.trigger("afterkeyinput", [curKey,ev, _this]);

        if(_this.iscmd == true){
            _this.triggerCmd(curKey);
        }
        switch(curKey){
            case 8:// 遥控器删除
                _this.iscmd = true;
                _this.cmd = [];
                if(curKey == 8){
                    ev.preventDefault();
                }
                break;
            case 27: // esc返回

                break;
            case 37: // left
                //判断输入点的位置
                _this.moveLeft();
                ev.stopPropagation();
                break;
            case 38: // up
                _this.moveUp();
                ev.stopPropagation();
                break;
            case 39: // right
                _this.moveRight();
                ev.stopPropagation();
                break;
            case 40: // down
                _this.moveDown();
                ev.stopPropagation();
                break;
            case 13: // enter
                _this.curLink.trigger("itemClick");
                break;
        }
        _this.curLink.trigger("focusChanged");
        this.keyDownEvent(ev);
    };

    coocaakeymap.prototype.setHeightLight = function(_this){
        if(_this.curLink == null){
            //将第一个可见元素设置为焦点元素
            for(var i = 0; i <_this.linkbuttons.length; i++ ){
                if($(_this.linkbuttons[i]).is(":visible")){
                    _this.curLink = $(_this.linkbuttons[i]);
                    break;
                }
            }
        }
        _this.linkbuttons.attr("readonly", true);
        var hover = _this.hoverClass;
        _this.linkbuttons.removeClass(hover);
        _this.curLink.addClass(hover);
        _this.curLink.trigger('itemFocus');
        var curLink = _this.curLink;
        var type = curLink.attr('type');

        _this.input = null;
        if($(_this.curLink).hasClass("input")){
            _this.input = $(_this.curLink);
        }
        //}
        //将焦点赋给文档
        $(document).focus();
        this.curLink.trigger("itemSelected");
    };

    coocaakeymap.prototype.moveLeft = function(){
        var _this = this;
        //如果有leftTarget 标识,直接聚焦到标识所属元素
        if(_this.curLink.attr("leftTarget")){
            _this.curLink = $(_this.curLink.attr("leftTarget"));
            _this.setHeightLight(_this);
            return;
        }
        var curLink = _this.curLink;
        var xthis;
        var upCoincide;
        var downCoincide;

        var diffDistance = 99999;
        var mx = curLink.offset().left;
        var my = curLink.offset().top;
        var diffNoCoincide = 99999;

        if(_this.curLink == curLink){
            _this.linkbuttons.each(function () {
                xthis = $(this);
                if(xthis.is(":hidden")){
                    return true;
                }
                nx = xthis.offset().left;
                ny = xthis.offset().top;
                // debug("x:" + nx + " --- y:" + ny);
                // 如果2个box有重叠，则计算x最近的即可
                upCoincide = ny <= my && ny + xthis.height() > my;
                downCoincide = ny >= my && ny < my + curLink.height();
                if (nx < mx && (upCoincide || downCoincide)) {
                    xdist = mx - nx;
                    if (xdist < diffDistance) {
                        diffDistance = xdist;
                        curLink = xthis;
                    }
                }
                if (nx < mx) {
                    // 向左边移动的时候，如果在目标上边，计算右下角，否则计算左上角
                    if (ny >= my)
                        xdist = _this.lineDistance(nx + xthis.width(), ny, mx, my);
                    else
                        xdist = _this.lineDistance(nx + xthis.width(), ny + xthis.height(),
                            mx, my);

                    if (xdist < diffNoCoincide) {
                        diffNoCoincide = xdist;
                        curLink = xthis;
                    }
                }
            });
        }
        //
        _this.curLink = curLink;
        _this.setHeightLight(_this);

    };

    coocaakeymap.prototype.lineDistance = function(x1, y1, x2, y2) {
        var xs = 0;
        var ys = 0;

        xs = Math.abs(x1 - x2);
        xs = xs * xs;

        ys = Math.abs(y1 - y2);
        ys = ys * ys;

        return Math.sqrt(xs + ys);
    };

    coocaakeymap.prototype.moveRight = function(){
        var _this = this;
        // 如果有leftTarget 标识,直接聚焦到标识所属元素
        if(_this.curLink.attr("rightTarget")){
            _this.curLink = $(_this.curLink.attr("rightTarget"));
            _this.setHeightLight(_this);
            return;
        }

        var curLink = _this.curLink;
        var xthis;
        var upCoincide;
        var downCoincide;

        var diffDistance = 99999;
        var mx = curLink.offset().left;
        var my = curLink.offset().top;
        var tarLink = curLink;
        var diffNoCoincide = 99999;

        if(_this.curLink == curLink){
            _this.linkbuttons.each(function () {
                xthis = $(this);
                if(xthis.is(":hidden")){
                    return true;
                }
                nx = xthis.offset().left;
                ny = xthis.offset().top;
                upCoincide = ny <= my && ny + xthis.height() > my;
                downCoincide = ny >= my && ny < my + curLink.height();
                if (nx > mx && (upCoincide || downCoincide)) {
                    xdist = nx - mx;
                    if (xdist < diffDistance) {
                        //debug(xthis.html() + "xdist:" + xdist);
                        diffDistance = xdist;
                        curLink = xthis;
                    }
                }
                if (nx > mx) {
                    //向右边移动的时候，如果在目标上边，计算目标左下角，否则计算左上角
                    if (ny >= my)
                        xdist = _this.lineDistance(nx, ny, mx + tarLink.width(), my);
                    else
                        xdist = _this.lineDistance(nx, ny + xthis.height(), mx + tarLink.width(), my);

                    if (xdist < diffNoCoincide) {
                        diffNoCoincide = xdist;
                        curLink = xthis;
                    }
                }
            });
        }

        _this.curLink = curLink;
        _this.setHeightLight(_this);
    };

    coocaakeymap.prototype.moveUp = function(){
        var _this = this;
        //如果有leftTarget 标识,直接聚焦到标识所属元素
        if(_this.curLink.attr("upTarget")){
            _this.curLink = $(_this.curLink.attr("upTarget"));
            _this.setHeightLight(_this);
            return;
        }

        var curLink = _this.curLink;
        var xthis;
        var leftCoincide;
        var rightCoincide;

        var diffDistance = 99999;
        var mx = curLink.offset().left;
        var my = curLink.offset().top;
        var tarLink = curLink;
        var diffNoCoincide = 99999;
        var findF = false;
        _this.linkbuttons.each(function () {
            xthis = $(this);
            if(xthis.is(":hidden")){
                return true;
            }
            nx = xthis.offset().left;
            ny = xthis.offset().top;
            //先找重叠的，直接算Y坐标
            leftCoincide = nx <= mx && nx + xthis.width() > mx;
            rightCoincide = nx >= mx && mx + tarLink.width() > nx;
            if (ny < my && (leftCoincide || rightCoincide)) {
                xdist = my - ny;
                if (xdist < diffDistance) {
                    diffDistance = xdist;
                    curLink = xthis;
                }
                findF = true;
            }else if(findF == false){
                ///这里找距离最短的，不在乎是否有重叠
                if (ny < my) {
                    //向上移动的时候，如果在目标右边，计算左下角，否则计算右下角
                    if (nx >= mx)
                        xdist = _this.lineDistance(nx, ny + xthis.height(), mx, my);
                    else
                        xdist = _this.lineDistance(nx + xthis.width(), ny + xthis.height(), mx, my);
                    if (xdist < diffNoCoincide) {
                        diffNoCoincide = xdist;
                        curLink = xthis;
                    }
                }
            }
        });

        _this.curLink = curLink;
        _this.setHeightLight(_this);
    };

    coocaakeymap.prototype.moveDown = function(){
        var _this = this;
        //如果有leftTarget 标识,直接聚焦到标识所属元素
        if(_this.curLink.attr("downTarget")){
            _this.curLink = $(_this.curLink.attr("downTarget"));
            _this.setHeightLight(_this);
            return;
        }

        var curLink = _this.curLink;
        var xthis;
        var leftCoincide;
        var rightCoincide;

        var diffDistance = 99999;
        var mx = curLink.offset().left;
        var my = curLink.offset().top;
        var tarLink = curLink;
        var diffNoCoincide = 99999;
        var findF = false;
        _this.linkbuttons.each(function () {
            xthis = $(this);
            if(xthis.is(":hidden")){
                return true;
            }
            nx = xthis.offset().left;
            ny = xthis.offset().top;
            leftCoincide = nx <= mx && nx + xthis.width() > mx;
            rightCoincide = nx >= mx && mx + tarLink.width() > nx;
            if (ny > my && (leftCoincide || rightCoincide)) {
                xdist = ny - my;
                if (xdist < diffDistance) {
                    diffDistance = xdist;
                    curLink = xthis;
                }
                findF = true;
            }else if(findF == false){
                if (ny > my) {
                    //xdist = lineDistance(nx, ny, mx, my);
                    //向下移动的时候，如果在目标右边，计算左下角，否则计算右下角
                    if (nx >= mx)
                        xdist = _this.lineDistance(nx, ny, mx, my + tarLink.height());
                    else
                        xdist = _this.lineDistance(nx + xthis.width(), ny, mx, my + tarLink.height());

                    if (xdist < diffNoCoincide) {
                        diffNoCoincide = xdist;
                        curLink = xthis;
                    }
                }
            }
        });
        _this.curLink = curLink;
        _this.setHeightLight(_this);
    };

    coocaakeymap.prototype.handleInputVal = function(ev, code, map){
        if(typeof map.setVal != 'function' || typeof map.getVal != 'function'){
            return;
        }

        var _this = map;

        var char = "";
        switch(code){
            case 48: // key 0
            case 49: // 1
            case 50:
            case 51:
            case 52:
            case 53:
            case 54:
            case 55:
            case 56:
            case 57:
                //输入法输入
                if($(this).attr("readonly") == undefined){
                    return;
                }
                //ev.isPropagationStopped();
                char =  String.fromCharCode(code);
                var old = _this.getVal.call(this);

                if(typeof $(this).attr("maxlength") != "nudefined"){
                    var length = old.length;
                    var maxlength = parseInt($(this).attr("maxlength"));
                    if(maxlength <= length){
                        return;
                    }
                }

                _this.setVal.call(this, old + char);
                break;
            case 96:
            case 97:
            case 98:
            case 99:
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                //输入法输入
                if($(this).attr("readonly") == undefined){
                    return;
                }
                //ev.isPropagationStopped();
                var c = code - 48;
                char = String.fromCharCode(c);
                var old = _this.getVal.call(this);

                if(typeof $(this).attr("maxlength") != "nudefined"){
                    var length = old.length;
                    var maxlength = parseInt($(this).attr("maxlength"));
                    if(maxlength <= length){
                        return;
                    }
                }
                _this.setVal.call(this, old + char);

                break;
            case 8:
            case 0:
                //ev.isPropagationStopped();
                var old = _this.getVal.call(this);
                if(old.length > 0){
                    _this.setVal.call(this, old.substring(0, old.length - 1));
                }

                return;
        }

    };
    var coocaaKeyMap = {
        coocaakeymap
    };

    function main () {
        return {
            format,
            validate,
            coocaaKeyMap
        }
    }

    return main;

}());
