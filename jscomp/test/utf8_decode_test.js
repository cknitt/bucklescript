'use strict';

var Mt = require("./mt.js");
var List = require("../../lib/js/list.js");
var Curry = require("../../lib/js/curry.js");
var Stream = require("../../lib/js/stream.js");
var Caml_bytes = require("../../lib/js/caml_bytes.js");

function classify(chr) {
  if ((chr & 128) === 0) {
    return {
            tag: /* Single */0,
            _0: chr
          };
  } else if ((chr & 64) === 0) {
    return {
            tag: /* Cont */1,
            _0: chr & 63
          };
  } else if ((chr & 32) === 0) {
    return {
            tag: /* Leading */2,
            _0: 1,
            _1: chr & 31
          };
  } else if ((chr & 16) === 0) {
    return {
            tag: /* Leading */2,
            _0: 2,
            _1: chr & 15
          };
  } else if ((chr & 8) === 0) {
    return {
            tag: /* Leading */2,
            _0: 3,
            _1: chr & 7
          };
  } else if ((chr & 4) === 0) {
    return {
            tag: /* Leading */2,
            _0: 4,
            _1: chr & 3
          };
  } else if ((chr & 2) === 0) {
    return {
            tag: /* Leading */2,
            _0: 5,
            _1: chr & 1
          };
  } else {
    return /* Invalid */0;
  }
}

function utf8_decode(strm) {
  return Stream.slazy(function (param) {
              var chr = Stream.peek(strm);
              if (chr === undefined) {
                return ;
              }
              Stream.junk(strm);
              var c = classify(chr);
              if (typeof c === "number") {
                throw {
                      RE_EXN_ID: Stream.$$Error,
                      _1: "Invalid byte",
                      Error: new Error()
                    };
              }
              switch (c.tag | 0) {
                case /* Single */0 :
                    return Stream.icons(c._0, utf8_decode(strm));
                case /* Cont */1 :
                    throw {
                          RE_EXN_ID: Stream.$$Error,
                          _1: "Unexpected continuation byte",
                          Error: new Error()
                        };
                case /* Leading */2 :
                    var follow = function (strm, _n, _c) {
                      while(true) {
                        var c = _c;
                        var n = _n;
                        if (n === 0) {
                          return c;
                        }
                        var cc = classify(Stream.next(strm));
                        if (typeof cc === "number") {
                          throw {
                                RE_EXN_ID: Stream.$$Error,
                                _1: "Continuation byte expected",
                                Error: new Error()
                              };
                        }
                        if (cc.tag === /* Cont */1) {
                          _c = (c << 6) | cc._0 & 63;
                          _n = n - 1 | 0;
                          continue ;
                        }
                        throw {
                              RE_EXN_ID: Stream.$$Error,
                              _1: "Continuation byte expected",
                              Error: new Error()
                            };
                      };
                    };
                    return Stream.icons(follow(strm, c._0, c._1), utf8_decode(strm));
                
              }
            });
}

function to_list(xs) {
  var v = {
    contents: /* [] */0
  };
  Stream.iter((function (x) {
          v.contents = /* :: */{
            _0: x,
            _1: v.contents
          };
          
        }), xs);
  return List.rev(v.contents);
}

function utf8_list(s) {
  return to_list(utf8_decode(Stream.of_string(s)));
}

function decode(bytes, offset) {
  var c = classify(Caml_bytes.get(bytes, offset));
  if (typeof c === "number") {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "decode",
          Error: new Error()
        };
  }
  switch (c.tag | 0) {
    case /* Single */0 :
        return /* tuple */[
                c._0,
                offset + 1 | 0
              ];
    case /* Cont */1 :
        throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "decode",
              Error: new Error()
            };
    case /* Leading */2 :
        var _n = c._0;
        var _c = c._1;
        var _offset = offset + 1 | 0;
        while(true) {
          var offset$1 = _offset;
          var c$1 = _c;
          var n = _n;
          if (n === 0) {
            return /* tuple */[
                    c$1,
                    offset$1
                  ];
          }
          var cc = classify(Caml_bytes.get(bytes, offset$1));
          if (typeof cc === "number") {
            throw {
                  RE_EXN_ID: "Invalid_argument",
                  _1: "decode",
                  Error: new Error()
                };
          }
          if (cc.tag === /* Cont */1) {
            _offset = offset$1 + 1 | 0;
            _c = (c$1 << 6) | cc._0 & 63;
            _n = n - 1 | 0;
            continue ;
          }
          throw {
                RE_EXN_ID: "Invalid_argument",
                _1: "decode",
                Error: new Error()
              };
        };
    
  }
}

function eq_list(cmp, _xs, _ys) {
  while(true) {
    var ys = _ys;
    var xs = _xs;
    if (!xs) {
      if (ys) {
        return false;
      } else {
        return true;
      }
    }
    if (!ys) {
      return false;
    }
    if (!Curry._2(cmp, xs._0, ys._0)) {
      return false;
    }
    _ys = ys._1;
    _xs = xs._1;
    continue ;
  };
}

var suites = {
  contents: /* [] */0
};

var test_id = {
  contents: 0
};

function eq(loc, param) {
  var y = param[1];
  var x = param[0];
  test_id.contents = test_id.contents + 1 | 0;
  console.log(/* tuple */[
        x,
        y
      ]);
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

List.iter((function (param) {
        return eq("File \"utf8_decode_test.ml\", line 107, characters 7-14", /* tuple */[
                    true,
                    eq_list((function (prim, prim$1) {
                            return prim === prim$1;
                          }), to_list(utf8_decode(Stream.of_string(param[0]))), param[1])
                  ]);
      }), /* :: */{
      _0: /* tuple */[
        "\xe4\xbd\xa0\xe5\xa5\xbdBuckleScript,\xe6\x9c\x80\xe5\xa5\xbd\xe7\x9a\x84JS\xe8\xaf\xad\xe8\xa8\x80",
        /* :: */{
          _0: 20320,
          _1: /* :: */{
            _0: 22909,
            _1: /* :: */{
              _0: 66,
              _1: /* :: */{
                _0: 117,
                _1: /* :: */{
                  _0: 99,
                  _1: /* :: */{
                    _0: 107,
                    _1: /* :: */{
                      _0: 108,
                      _1: /* :: */{
                        _0: 101,
                        _1: /* :: */{
                          _0: 83,
                          _1: /* :: */{
                            _0: 99,
                            _1: /* :: */{
                              _0: 114,
                              _1: /* :: */{
                                _0: 105,
                                _1: /* :: */{
                                  _0: 112,
                                  _1: /* :: */{
                                    _0: 116,
                                    _1: /* :: */{
                                      _0: 44,
                                      _1: /* :: */{
                                        _0: 26368,
                                        _1: /* :: */{
                                          _0: 22909,
                                          _1: /* :: */{
                                            _0: 30340,
                                            _1: /* :: */{
                                              _0: 74,
                                              _1: /* :: */{
                                                _0: 83,
                                                _1: /* :: */{
                                                  _0: 35821,
                                                  _1: /* :: */{
                                                    _0: 35328,
                                                    _1: /* [] */0
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      ],
      _1: /* :: */{
        _0: /* tuple */[
          "hello \xe4\xbd\xa0\xe5\xa5\xbd\xef\xbc\x8c\xe4\xb8\xad\xe5\x8d\x8e\xe6\xb0\x91\xe6\x97\x8f hei",
          /* :: */{
            _0: 104,
            _1: /* :: */{
              _0: 101,
              _1: /* :: */{
                _0: 108,
                _1: /* :: */{
                  _0: 108,
                  _1: /* :: */{
                    _0: 111,
                    _1: /* :: */{
                      _0: 32,
                      _1: /* :: */{
                        _0: 20320,
                        _1: /* :: */{
                          _0: 22909,
                          _1: /* :: */{
                            _0: 65292,
                            _1: /* :: */{
                              _0: 20013,
                              _1: /* :: */{
                                _0: 21326,
                                _1: /* :: */{
                                  _0: 27665,
                                  _1: /* :: */{
                                    _0: 26063,
                                    _1: /* :: */{
                                      _0: 32,
                                      _1: /* :: */{
                                        _0: 104,
                                        _1: /* :: */{
                                          _0: 101,
                                          _1: /* :: */{
                                            _0: 105,
                                            _1: /* [] */0
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        ],
        _1: /* [] */0
      }
    });

Mt.from_pair_suites("Utf8_decode_test", suites.contents);

exports.classify = classify;
exports.utf8_decode = utf8_decode;
exports.to_list = to_list;
exports.utf8_list = utf8_list;
exports.decode = decode;
exports.eq_list = eq_list;
exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/*  Not a pure module */
