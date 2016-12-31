DotFont = function(sizeX, sizeY) {
    return new DotFont.prototype.init(sizeX, sizeY);
};
DotFont.prototype = {
    init: function(sizeX, sizeY) {
        this._sizeX = (typeof sizeX === "number") ? sizeX : 0;
        this._sizeY = (typeof sizeX === "number") ? sizeY : 0;
        this._dotsList = [];
        this._count = 0;
        this._cr = [0];
    },
    append: function(dotPattern) {
        if (typeof dotPattern === "string") {
            var _dots = dotPattern.split(",");
            _dots[0] = (Array(this._sizeX+1).join("0") + _dots[0]).slice(-this._sizeX);
            this._dotsList.push(_dots);
            this._count += 1;
        }
        return this;
    },
    cr: function() {
        this._cr.push(this._count);
        return this;
    },
    print: function() {
        for (var i=0; i<this._cr.length-1; i++) {
            for (var k=0; k<this._sizeY; k++) {
                var _line = "";
                for (var j=this._cr[i]; j<this._cr[i+1]; j++) {
                    var _font = this._dotsList[j][k].replace(/0/g, " ");
                    _line += " " + _font + " ";
                }
                console.log(_line);
            }
            console.log();
        }
    }
};
DotFont.prototype.init.prototype = DotFont.prototype;


// ==== test Code ====

var test = DotFont(5, 5)
.append("10001,10001,11111,10001,10001")
.append("01110,10001,11111,10001,10001")
.append("11110,10001,11110,10000,10000")
.append("11110,10001,11110,10000,10000")
.append("10001,10001,01110,00100,00100")
.cr()
.append("10001,11001,10101,10011,10001")
.append("11111,10000,11111,10000,11111")
.append("10101,10101,10101,01010,01010")
.cr()
.append("10001,10001,01110,00100,00100")
.append("11111,10000,11111,10000,11111")
.append("01110,10001,11111,10001,10001")
.append("11110,10001,11110,10001,10001")
.cr()
.print();
