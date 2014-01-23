module.exports = (function() {
    var self = this;

    self.mixWith = function(target, source) {
        for(var x in source) {
            target[x] = source[x];
        }
        return target;
    }

    return self;
})();