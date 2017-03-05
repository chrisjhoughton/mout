define(function () {

    var bind = Function.prototype.bind;

    /**
     * Do fn.apply on a constructor.
     */
    function ctorApply(ctor, args) {
        var bound = bind.bind(ctor, undefined).apply(undefined, args);
        return new bound();
    }

    return ctorApply;

});
