window.jQuery=window.jQuery||{},function(){jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd&&(define=jQuery.fn.select2.amd.define,require=jQuery.fn.select2.amd.require),define("select2/i18n/lv",[],function(){function e(e,t,n,r){return e===11?t:e%10===1?n:r}return{inputTooLong:function(t){var n=t.input.length-t.maximum,r="Lūdzu ievadiet par  "+n;return r+=" simbol"+e(n,"iem","u","iem"),r+" mazāk"},inputTooShort:function(t){var n=t.minimum-t.input.length,r="Lūdzu ievadiet vēl "+n;return r+=" simbol"+e(overChars,"us","u","us"),r},loadingMore:function(){return"Datu ielāde…"},maximumSelection:function(t){var n="Jūs varat izvēlēties ne vairāk kā "+t.maximum;return n+=" element"+e(t.maximum,"us","u","us"),n},noResults:function(){return"Sakritību nav"},searching:function(){return"Meklēšana…"}}}),require("jquery.select2"),jQuery.fn.select2.amd={define:define,require:require}}();