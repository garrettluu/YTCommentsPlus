function Plite(n){function t(n,e,i){n&&n.then?n.then(function(n){t(n,e,i)})["catch"](function(n){t(n,i,i)}):e(n)}function e(n){o=function(t,e){try{n(t,e)}catch(i){e(i)}},f(),f=void 0}function i(n){e(function(t,e){e(n)})}function c(n){e(function(t){t(n)})}function u(n,t){var e=f;f=function(){e(),o(n,t)}}var o,r=function(){},f=r,l={then:function(n){var t=o||u;return Plite(function(e,i){t(function(t){e(n(t))},i)})},"catch":function(n){var t=o||u;return Plite(function(e,i){t(e,function(t){i(n(t))})})},resolve:function(n){!o&&t(n,c,i)},reject:function(n){!o&&t(n,i,i)}};return n&&n(l.resolve,l.reject),l}Plite.resolve=function(n){return Plite(function(t){t(n)})},Plite.reject=function(n){return Plite(function(t,e){e(n)})},Plite.race=function(n){return n=n||[],Plite(function(t,e){var i=n.length;if(!i)return t();for(var c=0;i>c;++c){var u=n[c];u&&u.then&&u.then(t)["catch"](e)}})},Plite.all=function(n){return n=n||[],Plite(function(t,e){function i(){--o<=0&&t(n)}function c(t,c){t&&t.then?t.then(function(t){n[c]=t,i()})["catch"](e):i()}var u=n.length,o=u;if(!u)return t();for(var r=0;u>r;++r)c(n[r],r)})},"undefined"!=typeof module&&module.exports&&(module.exports=Plite);
//# sourceMappingURL=plite.min.js.map