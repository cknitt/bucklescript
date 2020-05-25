'use strict';

var Mt = require("./mt.js");
var Int64 = require("../../lib/js/int64.js");
var Caml_int64 = require("../../lib/js/caml_int64.js");
var Caml_format = require("../../lib/js/caml_format.js");

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  test_id.contents = test_id.contents + 1 | 0;
  suites.contents = /* :: */{
    _0: /* tuple */[
      loc + (" id " + String(test_id.contents)),
      (function (param) {
          return {
                  tag: /* Eq */0,
                  _0: x,
                  _1: y
                };
        })
    ],
    _1: suites.contents
  };
  
}

function id(x) {
  return Caml_format.caml_int64_of_string(Caml_int64.to_string(x));
}

var i = Caml_int64.mk(-1414812757, 2074848171);

var s = Caml_int64.to_string(i);

var i$prime = Caml_format.caml_int64_of_string(s);

eq("File \"gpr_1503_test.ml\", line 18, characters 5-12", i, i$prime);

eq("File \"gpr_1503_test.ml\", line 21, characters 7-14", Int64.max_int, Caml_format.caml_int64_of_string(Caml_int64.to_string(Int64.max_int)));

eq("File \"gpr_1503_test.ml\", line 22, characters 7-14", Int64.min_int, Caml_format.caml_int64_of_string(Caml_int64.to_string(Int64.min_int)));

Mt.from_pair_suites("Gpr_1503_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.id = id;
/* s Not a pure module */
