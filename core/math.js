(function(){
    var Math = UG.Math ={
        transformPoint: function (x, y, m) {
            return { x: m.a * x + m.c * y + m.e, y: m.b * x + m.d * y + m.f};
        }
    };

})();