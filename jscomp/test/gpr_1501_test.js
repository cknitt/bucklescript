'use strict';

var Mt = require("./mt.js");
var Printexc = require("../../lib/js/printexc.js");
var Caml_exceptions = require("../../lib/js/caml_exceptions.js");

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

var A = Caml_exceptions.create("Gpr_1501_test.A");

var B = Caml_exceptions.create("Gpr_1501_test.B");

eq("File \"gpr_1501_test.ml\", line 15, characters 7-14", "Not_found", Printexc.to_string({
          RE_EXN_ID: "Not_found"
        }));

eq("File \"gpr_1501_test.ml\", line 16, characters 7-14", /Gpr_1501_test.A\/[0-9]+/.test(Printexc.to_string({
              RE_EXN_ID: A
            })), true);

eq("File \"gpr_1501_test.ml\", line 19, characters 7-14", /Gpr_1501_test.B\/[0-9]+\(1\)/.test(Printexc.to_string({
              RE_EXN_ID: B,
              _1: 1
            })), true);

Mt.from_pair_suites("Gpr_1501_test", suites.contents);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.A = A;
exports.B = B;
/*  Not a pure module */
