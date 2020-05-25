'use strict';

var Mt = require("./mt.js");
var Caml_obj = require("../../lib/js/caml_obj.js");
var Caml_js_exceptions = require("../../lib/js/caml_js_exceptions.js");

var function_equal_test;

try {
  function_equal_test = Caml_obj.caml_equal((function (x) {
          return x + 1 | 0;
        }), (function (x) {
          return x + 2 | 0;
        }));
}
catch (raw_exn){
  var exn = Caml_js_exceptions.internalToOCamlException(raw_exn);
  function_equal_test = exn.RE_EXN_ID === "Invalid_argument" && exn._1 === "equal: functional value" ? true : false;
}

var suites = {
  contents: /* :: */{
    _0: /* tuple */[
      "File \"caml_compare_test.ml\", line 9, characters 4-11",
      (function (param) {
          return {
                  tag: /* Eq */0,
                  _0: true,
                  _1: Caml_obj.caml_lessthan(undefined, 1)
                };
        })
    ],
    _1: /* :: */{
      _0: /* tuple */[
        "option2",
        (function (param) {
            return {
                    tag: /* Eq */0,
                    _0: true,
                    _1: Caml_obj.caml_lessthan(1, 2)
                  };
          })
      ],
      _1: /* :: */{
        _0: /* tuple */[
          "File \"caml_compare_test.ml\", line 11, characters 4-11",
          (function (param) {
              return {
                      tag: /* Eq */0,
                      _0: true,
                      _1: Caml_obj.caml_greaterthan(/* :: */{
                            _0: 1,
                            _1: /* [] */0
                          }, /* [] */0)
                    };
            })
        ],
        _1: /* :: */{
          _0: /* tuple */[
            "listeq",
            (function (param) {
                return {
                        tag: /* Eq */0,
                        _0: true,
                        _1: Caml_obj.caml_equal(/* :: */{
                              _0: 1,
                              _1: /* :: */{
                                _0: 2,
                                _1: /* :: */{
                                  _0: 3,
                                  _1: /* [] */0
                                }
                              }
                            }, /* :: */{
                              _0: 1,
                              _1: /* :: */{
                                _0: 2,
                                _1: /* :: */{
                                  _0: 3,
                                  _1: /* [] */0
                                }
                              }
                            })
                      };
              })
          ],
          _1: /* :: */{
            _0: /* tuple */[
              "listneq",
              (function (param) {
                  return {
                          tag: /* Eq */0,
                          _0: true,
                          _1: Caml_obj.caml_greaterthan(/* :: */{
                                _0: 1,
                                _1: /* :: */{
                                  _0: 2,
                                  _1: /* :: */{
                                    _0: 3,
                                    _1: /* [] */0
                                  }
                                }
                              }, /* :: */{
                                _0: 1,
                                _1: /* :: */{
                                  _0: 2,
                                  _1: /* :: */{
                                    _0: 2,
                                    _1: /* [] */0
                                  }
                                }
                              })
                        };
                })
            ],
            _1: /* :: */{
              _0: /* tuple */[
                "custom_u",
                (function (param) {
                    return {
                            tag: /* Eq */0,
                            _0: true,
                            _1: Caml_obj.caml_greaterthan(/* tuple */[
                                  {
                                    tag: /* A */0,
                                    _0: 3
                                  },
                                  {
                                    tag: /* B */1,
                                    _0: 2,
                                    _1: false
                                  },
                                  {
                                    tag: /* C */2,
                                    _0: 1
                                  }
                                ], /* tuple */[
                                  {
                                    tag: /* A */0,
                                    _0: 3
                                  },
                                  {
                                    tag: /* B */1,
                                    _0: 2,
                                    _1: false
                                  },
                                  {
                                    tag: /* C */2,
                                    _0: 0
                                  }
                                ])
                          };
                  })
              ],
              _1: /* :: */{
                _0: /* tuple */[
                  "custom_u2",
                  (function (param) {
                      return {
                              tag: /* Eq */0,
                              _0: true,
                              _1: Caml_obj.caml_equal(/* tuple */[
                                    {
                                      tag: /* A */0,
                                      _0: 3
                                    },
                                    {
                                      tag: /* B */1,
                                      _0: 2,
                                      _1: false
                                    },
                                    {
                                      tag: /* C */2,
                                      _0: 1
                                    }
                                  ], /* tuple */[
                                    {
                                      tag: /* A */0,
                                      _0: 3
                                    },
                                    {
                                      tag: /* B */1,
                                      _0: 2,
                                      _1: false
                                    },
                                    {
                                      tag: /* C */2,
                                      _0: 1
                                    }
                                  ])
                            };
                    })
                ],
                _1: /* :: */{
                  _0: /* tuple */[
                    "function",
                    (function (param) {
                        return {
                                tag: /* Eq */0,
                                _0: true,
                                _1: function_equal_test
                              };
                      })
                  ],
                  _1: /* :: */{
                    _0: /* tuple */[
                      "File \"caml_compare_test.ml\", line 17, characters 4-11",
                      (function (param) {
                          return {
                                  tag: /* Eq */0,
                                  _0: true,
                                  _1: Caml_obj.caml_lessthan(undefined, 1)
                                };
                        })
                    ],
                    _1: /* :: */{
                      _0: /* tuple */[
                        "File \"caml_compare_test.ml\", line 28, characters 4-11",
                        (function (param) {
                            return {
                                    tag: /* Eq */0,
                                    _0: true,
                                    _1: Caml_obj.caml_lessthan(undefined, [
                                          1,
                                          30
                                        ])
                                  };
                          })
                      ],
                      _1: /* :: */{
                        _0: /* tuple */[
                          "File \"caml_compare_test.ml\", line 31, characters 4-11",
                          (function (param) {
                              return {
                                      tag: /* Eq */0,
                                      _0: true,
                                      _1: Caml_obj.caml_greaterthan([
                                            1,
                                            30
                                          ], undefined)
                                    };
                            })
                        ],
                        _1: /* :: */{
                          _0: /* tuple */[
                            "File \"caml_compare_test.ml\", line 34, characters 4-11",
                            (function (param) {
                                return {
                                        tag: /* Eq */0,
                                        _0: true,
                                        _1: Caml_obj.caml_lessthan(/* :: */{
                                              _0: 2,
                                              _1: /* :: */{
                                                _0: 6,
                                                _1: /* :: */{
                                                  _0: 1,
                                                  _1: /* :: */{
                                                    _0: 1,
                                                    _1: /* :: */{
                                                      _0: 2,
                                                      _1: /* :: */{
                                                        _0: 1,
                                                        _1: /* :: */{
                                                          _0: 4,
                                                          _1: /* :: */{
                                                            _0: 2,
                                                            _1: /* :: */{
                                                              _0: 1,
                                                              _1: /* [] */0
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }, /* :: */{
                                              _0: 2,
                                              _1: /* :: */{
                                                _0: 6,
                                                _1: /* :: */{
                                                  _0: 1,
                                                  _1: /* :: */{
                                                    _0: 1,
                                                    _1: /* :: */{
                                                      _0: 2,
                                                      _1: /* :: */{
                                                        _0: 1,
                                                        _1: /* :: */{
                                                          _0: 4,
                                                          _1: /* :: */{
                                                            _0: 2,
                                                            _1: /* :: */{
                                                              _0: 1,
                                                              _1: /* :: */{
                                                                _0: 409,
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
                                            })
                                      };
                              })
                          ],
                          _1: /* :: */{
                            _0: /* tuple */[
                              "File \"caml_compare_test.ml\", line 37, characters 4-11",
                              (function (param) {
                                  return {
                                          tag: /* Eq */0,
                                          _0: true,
                                          _1: Caml_obj.caml_lessthan(/* :: */{
                                                _0: 1,
                                                _1: /* [] */0
                                              }, /* :: */{
                                                _0: 1,
                                                _1: /* :: */{
                                                  _0: 409,
                                                  _1: /* [] */0
                                                }
                                              })
                                        };
                                })
                            ],
                            _1: /* :: */{
                              _0: /* tuple */[
                                "File \"caml_compare_test.ml\", line 40, characters 4-11",
                                (function (param) {
                                    return {
                                            tag: /* Eq */0,
                                            _0: true,
                                            _1: Caml_obj.caml_lessthan(/* [] */0, /* :: */{
                                                  _0: 409,
                                                  _1: /* [] */0
                                                })
                                          };
                                  })
                              ],
                              _1: /* :: */{
                                _0: /* tuple */[
                                  "File \"caml_compare_test.ml\", line 43, characters 4-11",
                                  (function (param) {
                                      return {
                                              tag: /* Eq */0,
                                              _0: true,
                                              _1: Caml_obj.caml_greaterthan(/* :: */{
                                                    _0: 2,
                                                    _1: /* :: */{
                                                      _0: 6,
                                                      _1: /* :: */{
                                                        _0: 1,
                                                        _1: /* :: */{
                                                          _0: 1,
                                                          _1: /* :: */{
                                                            _0: 2,
                                                            _1: /* :: */{
                                                              _0: 1,
                                                              _1: /* :: */{
                                                                _0: 4,
                                                                _1: /* :: */{
                                                                  _0: 2,
                                                                  _1: /* :: */{
                                                                    _0: 1,
                                                                    _1: /* :: */{
                                                                      _0: 409,
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
                                                  }, /* :: */{
                                                    _0: 2,
                                                    _1: /* :: */{
                                                      _0: 6,
                                                      _1: /* :: */{
                                                        _0: 1,
                                                        _1: /* :: */{
                                                          _0: 1,
                                                          _1: /* :: */{
                                                            _0: 2,
                                                            _1: /* :: */{
                                                              _0: 1,
                                                              _1: /* :: */{
                                                                _0: 4,
                                                                _1: /* :: */{
                                                                  _0: 2,
                                                                  _1: /* :: */{
                                                                    _0: 1,
                                                                    _1: /* [] */0
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  })
                                            };
                                    })
                                ],
                                _1: /* :: */{
                                  _0: /* tuple */[
                                    "File \"caml_compare_test.ml\", line 47, characters 4-11",
                                    (function (param) {
                                        return {
                                                tag: /* Eq */0,
                                                _0: false,
                                                _1: false
                                              };
                                      })
                                  ],
                                  _1: /* :: */{
                                    _0: /* tuple */[
                                      "File \"caml_compare_test.ml\", line 50, characters 4-11",
                                      (function (param) {
                                          return {
                                                  tag: /* Eq */0,
                                                  _0: false,
                                                  _1: false
                                                };
                                        })
                                    ],
                                    _1: /* :: */{
                                      _0: /* tuple */[
                                        "File \"caml_compare_test.ml\", line 53, characters 4-11",
                                        (function (param) {
                                            return {
                                                    tag: /* Eq */0,
                                                    _0: false,
                                                    _1: Caml_obj.caml_equal(/* :: */{
                                                          _0: 2,
                                                          _1: /* :: */{
                                                            _0: 6,
                                                            _1: /* :: */{
                                                              _0: 1,
                                                              _1: /* :: */{
                                                                _0: 1,
                                                                _1: /* :: */{
                                                                  _0: 2,
                                                                  _1: /* :: */{
                                                                    _0: 1,
                                                                    _1: /* :: */{
                                                                      _0: 4,
                                                                      _1: /* :: */{
                                                                        _0: 2,
                                                                        _1: /* :: */{
                                                                          _0: 1,
                                                                          _1: /* [] */0
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }, /* :: */{
                                                          _0: 2,
                                                          _1: /* :: */{
                                                            _0: 6,
                                                            _1: /* :: */{
                                                              _0: 1,
                                                              _1: /* :: */{
                                                                _0: 1,
                                                                _1: /* :: */{
                                                                  _0: 2,
                                                                  _1: /* :: */{
                                                                    _0: 1,
                                                                    _1: /* :: */{
                                                                      _0: 4,
                                                                      _1: /* :: */{
                                                                        _0: 2,
                                                                        _1: /* :: */{
                                                                          _0: 1,
                                                                          _1: /* :: */{
                                                                            _0: 409,
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
                                                        })
                                                  };
                                          })
                                      ],
                                      _1: /* :: */{
                                        _0: /* tuple */[
                                          "File \"caml_compare_test.ml\", line 56, characters 4-11",
                                          (function (param) {
                                              return {
                                                      tag: /* Eq */0,
                                                      _0: false,
                                                      _1: Caml_obj.caml_equal(/* :: */{
                                                            _0: 2,
                                                            _1: /* :: */{
                                                              _0: 6,
                                                              _1: /* :: */{
                                                                _0: 1,
                                                                _1: /* :: */{
                                                                  _0: 1,
                                                                  _1: /* :: */{
                                                                    _0: 2,
                                                                    _1: /* :: */{
                                                                      _0: 1,
                                                                      _1: /* :: */{
                                                                        _0: 4,
                                                                        _1: /* :: */{
                                                                          _0: 2,
                                                                          _1: /* :: */{
                                                                            _0: 1,
                                                                            _1: /* :: */{
                                                                              _0: 409,
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
                                                          }, /* :: */{
                                                            _0: 2,
                                                            _1: /* :: */{
                                                              _0: 6,
                                                              _1: /* :: */{
                                                                _0: 1,
                                                                _1: /* :: */{
                                                                  _0: 1,
                                                                  _1: /* :: */{
                                                                    _0: 2,
                                                                    _1: /* :: */{
                                                                      _0: 1,
                                                                      _1: /* :: */{
                                                                        _0: 4,
                                                                        _1: /* :: */{
                                                                          _0: 2,
                                                                          _1: /* :: */{
                                                                            _0: 1,
                                                                            _1: /* [] */0
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          })
                                                    };
                                            })
                                        ],
                                        _1: /* :: */{
                                          _0: /* tuple */[
                                            "cmp_id",
                                            (function (param) {
                                                return {
                                                        tag: /* Eq */0,
                                                        _0: Caml_obj.caml_compare({
                                                              x: 1,
                                                              y: 2
                                                            }, {
                                                              x: 1,
                                                              y: 2
                                                            }),
                                                        _1: 0
                                                      };
                                              })
                                          ],
                                          _1: /* :: */{
                                            _0: /* tuple */[
                                              "cmp_val",
                                              (function (param) {
                                                  return {
                                                          tag: /* Eq */0,
                                                          _0: Caml_obj.caml_compare({
                                                                x: 1
                                                              }, {
                                                                x: 2
                                                              }),
                                                          _1: -1
                                                        };
                                                })
                                            ],
                                            _1: /* :: */{
                                              _0: /* tuple */[
                                                "cmp_val2",
                                                (function (param) {
                                                    return {
                                                            tag: /* Eq */0,
                                                            _0: Caml_obj.caml_compare({
                                                                  x: 2
                                                                }, {
                                                                  x: 1
                                                                }),
                                                            _1: 1
                                                          };
                                                  })
                                              ],
                                              _1: /* :: */{
                                                _0: /* tuple */[
                                                  "cmp_empty",
                                                  (function (param) {
                                                      return {
                                                              tag: /* Eq */0,
                                                              _0: Caml_obj.caml_compare(({}), ({})),
                                                              _1: 0
                                                            };
                                                    })
                                                ],
                                                _1: /* :: */{
                                                  _0: /* tuple */[
                                                    "cmp_empty2",
                                                    (function (param) {
                                                        return {
                                                                tag: /* Eq */0,
                                                                _0: Caml_obj.caml_compare(({}), ({x:1})),
                                                                _1: -1
                                                              };
                                                      })
                                                  ],
                                                  _1: /* :: */{
                                                    _0: /* tuple */[
                                                      "cmp_swap",
                                                      (function (param) {
                                                          return {
                                                                  tag: /* Eq */0,
                                                                  _0: Caml_obj.caml_compare({
                                                                        x: 1,
                                                                        y: 2
                                                                      }, {
                                                                        y: 2,
                                                                        x: 1
                                                                      }),
                                                                  _1: 0
                                                                };
                                                        })
                                                    ],
                                                    _1: /* :: */{
                                                      _0: /* tuple */[
                                                        "cmp_size",
                                                        (function (param) {
                                                            return {
                                                                    tag: /* Eq */0,
                                                                    _0: Caml_obj.caml_compare(({x:1}), ({x:1, y:2})),
                                                                    _1: -1
                                                                  };
                                                          })
                                                      ],
                                                      _1: /* :: */{
                                                        _0: /* tuple */[
                                                          "cmp_size2",
                                                          (function (param) {
                                                              return {
                                                                      tag: /* Eq */0,
                                                                      _0: Caml_obj.caml_compare(({x:1, y:2}), ({x:1})),
                                                                      _1: 1
                                                                    };
                                                            })
                                                        ],
                                                        _1: /* :: */{
                                                          _0: /* tuple */[
                                                            "cmp_order",
                                                            (function (param) {
                                                                return {
                                                                        tag: /* Eq */0,
                                                                        _0: Caml_obj.caml_compare({
                                                                              x: 0,
                                                                              y: 1
                                                                            }, {
                                                                              x: 1,
                                                                              y: 0
                                                                            }),
                                                                        _1: -1
                                                                      };
                                                              })
                                                          ],
                                                          _1: /* :: */{
                                                            _0: /* tuple */[
                                                              "cmp_order2",
                                                              (function (param) {
                                                                  return {
                                                                          tag: /* Eq */0,
                                                                          _0: Caml_obj.caml_compare({
                                                                                x: 1,
                                                                                y: 0
                                                                              }, {
                                                                                x: 0,
                                                                                y: 1
                                                                              }),
                                                                          _1: 1
                                                                        };
                                                                })
                                                            ],
                                                            _1: /* :: */{
                                                              _0: /* tuple */[
                                                                "cmp_in_list",
                                                                (function (param) {
                                                                    return {
                                                                            tag: /* Eq */0,
                                                                            _0: Caml_obj.caml_compare(/* :: */{
                                                                                  _0: {
                                                                                    x: 1
                                                                                  },
                                                                                  _1: /* [] */0
                                                                                }, /* :: */{
                                                                                  _0: {
                                                                                    x: 2
                                                                                  },
                                                                                  _1: /* [] */0
                                                                                }),
                                                                            _1: -1
                                                                          };
                                                                  })
                                                              ],
                                                              _1: /* :: */{
                                                                _0: /* tuple */[
                                                                  "cmp_in_list2",
                                                                  (function (param) {
                                                                      return {
                                                                              tag: /* Eq */0,
                                                                              _0: Caml_obj.caml_compare(/* :: */{
                                                                                    _0: {
                                                                                      x: 2
                                                                                    },
                                                                                    _1: /* [] */0
                                                                                  }, /* :: */{
                                                                                    _0: {
                                                                                      x: 1
                                                                                    },
                                                                                    _1: /* [] */0
                                                                                  }),
                                                                              _1: 1
                                                                            };
                                                                    })
                                                                ],
                                                                _1: /* :: */{
                                                                  _0: /* tuple */[
                                                                    "cmp_with_list",
                                                                    (function (param) {
                                                                        return {
                                                                                tag: /* Eq */0,
                                                                                _0: Caml_obj.caml_compare({
                                                                                      x: /* :: */{
                                                                                        _0: 0,
                                                                                        _1: /* [] */0
                                                                                      }
                                                                                    }, {
                                                                                      x: /* :: */{
                                                                                        _0: 1,
                                                                                        _1: /* [] */0
                                                                                      }
                                                                                    }),
                                                                                _1: -1
                                                                              };
                                                                      })
                                                                  ],
                                                                  _1: /* :: */{
                                                                    _0: /* tuple */[
                                                                      "cmp_with_list2",
                                                                      (function (param) {
                                                                          return {
                                                                                  tag: /* Eq */0,
                                                                                  _0: Caml_obj.caml_compare({
                                                                                        x: /* :: */{
                                                                                          _0: 1,
                                                                                          _1: /* [] */0
                                                                                        }
                                                                                      }, {
                                                                                        x: /* :: */{
                                                                                          _0: 0,
                                                                                          _1: /* [] */0
                                                                                        }
                                                                                      }),
                                                                                  _1: 1
                                                                                };
                                                                        })
                                                                    ],
                                                                    _1: /* :: */{
                                                                      _0: /* tuple */[
                                                                        "eq_id",
                                                                        (function (param) {
                                                                            return {
                                                                                    tag: /* Ok */4,
                                                                                    _0: Caml_obj.caml_equal({
                                                                                          x: 1,
                                                                                          y: 2
                                                                                        }, {
                                                                                          x: 1,
                                                                                          y: 2
                                                                                        })
                                                                                  };
                                                                          })
                                                                      ],
                                                                      _1: /* :: */{
                                                                        _0: /* tuple */[
                                                                          "eq_val",
                                                                          (function (param) {
                                                                              return {
                                                                                      tag: /* Eq */0,
                                                                                      _0: Caml_obj.caml_equal({
                                                                                            x: 1
                                                                                          }, {
                                                                                            x: 2
                                                                                          }),
                                                                                      _1: false
                                                                                    };
                                                                            })
                                                                        ],
                                                                        _1: /* :: */{
                                                                          _0: /* tuple */[
                                                                            "eq_val2",
                                                                            (function (param) {
                                                                                return {
                                                                                        tag: /* Eq */0,
                                                                                        _0: Caml_obj.caml_equal({
                                                                                              x: 2
                                                                                            }, {
                                                                                              x: 1
                                                                                            }),
                                                                                        _1: false
                                                                                      };
                                                                              })
                                                                          ],
                                                                          _1: /* :: */{
                                                                            _0: /* tuple */[
                                                                              "eq_empty",
                                                                              (function (param) {
                                                                                  return {
                                                                                          tag: /* Eq */0,
                                                                                          _0: Caml_obj.caml_equal(({}), ({})),
                                                                                          _1: true
                                                                                        };
                                                                                })
                                                                            ],
                                                                            _1: /* :: */{
                                                                              _0: /* tuple */[
                                                                                "eq_empty2",
                                                                                (function (param) {
                                                                                    return {
                                                                                            tag: /* Eq */0,
                                                                                            _0: Caml_obj.caml_equal(({}), ({x:1})),
                                                                                            _1: false
                                                                                          };
                                                                                  })
                                                                              ],
                                                                              _1: /* :: */{
                                                                                _0: /* tuple */[
                                                                                  "eq_swap",
                                                                                  (function (param) {
                                                                                      return {
                                                                                              tag: /* Ok */4,
                                                                                              _0: Caml_obj.caml_equal({
                                                                                                    x: 1,
                                                                                                    y: 2
                                                                                                  }, {
                                                                                                    y: 2,
                                                                                                    x: 1
                                                                                                  })
                                                                                            };
                                                                                    })
                                                                                ],
                                                                                _1: /* :: */{
                                                                                  _0: /* tuple */[
                                                                                    "eq_size",
                                                                                    (function (param) {
                                                                                        return {
                                                                                                tag: /* Eq */0,
                                                                                                _0: Caml_obj.caml_equal(({x:1}), ({x:1, y:2})),
                                                                                                _1: false
                                                                                              };
                                                                                      })
                                                                                  ],
                                                                                  _1: /* :: */{
                                                                                    _0: /* tuple */[
                                                                                      "eq_size2",
                                                                                      (function (param) {
                                                                                          return {
                                                                                                  tag: /* Eq */0,
                                                                                                  _0: Caml_obj.caml_equal(({x:1, y:2}), ({x:1})),
                                                                                                  _1: false
                                                                                                };
                                                                                        })
                                                                                    ],
                                                                                    _1: /* :: */{
                                                                                      _0: /* tuple */[
                                                                                        "eq_in_list",
                                                                                        (function (param) {
                                                                                            return {
                                                                                                    tag: /* Eq */0,
                                                                                                    _0: Caml_obj.caml_equal(/* :: */{
                                                                                                          _0: {
                                                                                                            x: 1
                                                                                                          },
                                                                                                          _1: /* [] */0
                                                                                                        }, /* :: */{
                                                                                                          _0: {
                                                                                                            x: 2
                                                                                                          },
                                                                                                          _1: /* [] */0
                                                                                                        }),
                                                                                                    _1: false
                                                                                                  };
                                                                                          })
                                                                                      ],
                                                                                      _1: /* :: */{
                                                                                        _0: /* tuple */[
                                                                                          "eq_in_list2",
                                                                                          (function (param) {
                                                                                              return {
                                                                                                      tag: /* Eq */0,
                                                                                                      _0: Caml_obj.caml_equal(/* :: */{
                                                                                                            _0: {
                                                                                                              x: 2
                                                                                                            },
                                                                                                            _1: /* [] */0
                                                                                                          }, /* :: */{
                                                                                                            _0: {
                                                                                                              x: 2
                                                                                                            },
                                                                                                            _1: /* [] */0
                                                                                                          }),
                                                                                                      _1: true
                                                                                                    };
                                                                                            })
                                                                                        ],
                                                                                        _1: /* :: */{
                                                                                          _0: /* tuple */[
                                                                                            "eq_with_list",
                                                                                            (function (param) {
                                                                                                return {
                                                                                                        tag: /* Eq */0,
                                                                                                        _0: Caml_obj.caml_equal({
                                                                                                              x: /* :: */{
                                                                                                                _0: 0,
                                                                                                                _1: /* [] */0
                                                                                                              }
                                                                                                            }, {
                                                                                                              x: /* :: */{
                                                                                                                _0: 0,
                                                                                                                _1: /* [] */0
                                                                                                              }
                                                                                                            }),
                                                                                                        _1: true
                                                                                                      };
                                                                                              })
                                                                                          ],
                                                                                          _1: /* :: */{
                                                                                            _0: /* tuple */[
                                                                                              "eq_with_list2",
                                                                                              (function (param) {
                                                                                                  return {
                                                                                                          tag: /* Eq */0,
                                                                                                          _0: Caml_obj.caml_equal({
                                                                                                                x: /* :: */{
                                                                                                                  _0: 0,
                                                                                                                  _1: /* [] */0
                                                                                                                }
                                                                                                              }, {
                                                                                                                x: /* :: */{
                                                                                                                  _0: 1,
                                                                                                                  _1: /* [] */0
                                                                                                                }
                                                                                                              }),
                                                                                                          _1: false
                                                                                                        };
                                                                                                })
                                                                                            ],
                                                                                            _1: /* :: */{
                                                                                              _0: /* tuple */[
                                                                                                "File \"caml_compare_test.ml\", line 87, characters 4-11",
                                                                                                (function (param) {
                                                                                                    return {
                                                                                                            tag: /* Eq */0,
                                                                                                            _0: Caml_obj.caml_compare(null, /* :: */{
                                                                                                                  _0: 3,
                                                                                                                  _1: /* [] */0
                                                                                                                }),
                                                                                                            _1: -1
                                                                                                          };
                                                                                                  })
                                                                                              ],
                                                                                              _1: /* :: */{
                                                                                                _0: /* tuple */[
                                                                                                  "File \"caml_compare_test.ml\", line 90, characters 4-11",
                                                                                                  (function (param) {
                                                                                                      return {
                                                                                                              tag: /* Eq */0,
                                                                                                              _0: Caml_obj.caml_compare(/* :: */{
                                                                                                                    _0: 3,
                                                                                                                    _1: /* [] */0
                                                                                                                  }, null),
                                                                                                              _1: 1
                                                                                                            };
                                                                                                    })
                                                                                                ],
                                                                                                _1: /* :: */{
                                                                                                  _0: /* tuple */[
                                                                                                    "File \"caml_compare_test.ml\", line 93, characters 4-11",
                                                                                                    (function (param) {
                                                                                                        return {
                                                                                                                tag: /* Eq */0,
                                                                                                                _0: Caml_obj.caml_compare(null, 0),
                                                                                                                _1: -1
                                                                                                              };
                                                                                                      })
                                                                                                  ],
                                                                                                  _1: /* :: */{
                                                                                                    _0: /* tuple */[
                                                                                                      "File \"caml_compare_test.ml\", line 96, characters 4-11",
                                                                                                      (function (param) {
                                                                                                          return {
                                                                                                                  tag: /* Eq */0,
                                                                                                                  _0: Caml_obj.caml_compare(0, null),
                                                                                                                  _1: 1
                                                                                                                };
                                                                                                        })
                                                                                                    ],
                                                                                                    _1: /* :: */{
                                                                                                      _0: /* tuple */[
                                                                                                        "File \"caml_compare_test.ml\", line 99, characters 4-11",
                                                                                                        (function (param) {
                                                                                                            return {
                                                                                                                    tag: /* Eq */0,
                                                                                                                    _0: Caml_obj.caml_compare(undefined, 0),
                                                                                                                    _1: -1
                                                                                                                  };
                                                                                                          })
                                                                                                      ],
                                                                                                      _1: /* :: */{
                                                                                                        _0: /* tuple */[
                                                                                                          "File \"caml_compare_test.ml\", line 102, characters 4-11",
                                                                                                          (function (param) {
                                                                                                              return {
                                                                                                                      tag: /* Eq */0,
                                                                                                                      _0: Caml_obj.caml_compare(0, undefined),
                                                                                                                      _1: 1
                                                                                                                    };
                                                                                                            })
                                                                                                        ],
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
              }
            }
          }
        }
      }
    }
  }
};

var test_id = {
  contents: 0
};

function eq(loc, x, y) {
  return Mt.eq_suites(test_id, suites, loc, x, y);
}

eq("File \"caml_compare_test.ml\", line 112, characters 6-13", true, Caml_obj.caml_greaterthan(1, undefined));

eq("File \"caml_compare_test.ml\", line 113, characters 6-13", true, Caml_obj.caml_lessthan(/* [] */0, /* :: */{
          _0: 1,
          _1: /* [] */0
        }));

eq("File \"caml_compare_test.ml\", line 114, characters 6-13", false, Caml_obj.caml_greaterthan(undefined, 1));

eq("File \"caml_compare_test.ml\", line 115, characters 6-13", false, Caml_obj.caml_greaterthan(undefined, [
          1,
          30
        ]));

eq("File \"caml_compare_test.ml\", line 116, characters 6-13", false, Caml_obj.caml_lessthan([
          1,
          30
        ], undefined));

Mt.from_pair_suites("Caml_compare_test", suites.contents);

exports.function_equal_test = function_equal_test;
exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
/* function_equal_test Not a pure module */
