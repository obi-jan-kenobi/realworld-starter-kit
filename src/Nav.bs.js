// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var component = ReasonReact.statelessComponent("Nav");

function make() {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return React.createElement("nav", {
                          className: "navbar navbar-light"
                        }, React.createElement("div", {
                              className: "container"
                            }, React.createElement("a", {
                                  className: "navbar-brand",
                                  href: "index.html"
                                }, "conduit"), React.createElement("ul", {
                                  className: "nav navbar-nav pull-xs-right"
                                }, React.createElement("li", {
                                      className: "nav-item"
                                    }, React.createElement("a", {
                                          className: "nav-link active",
                                          href: ""
                                        }, "Home")), React.createElement("li", {
                                      className: "nav-item"
                                    }, React.createElement("a", {
                                          className: "nav-link",
                                          href: ""
                                        }, "New Post", React.createElement("i", {
                                              className: "ion-compose"
                                            }))), React.createElement("li", {
                                      className: "nav-item"
                                    }, React.createElement("a", {
                                          className: "nav-link",
                                          href: ""
                                        }, React.createElement("i", {
                                              className: "ion-gear-a"
                                            }), "Settings")), React.createElement("li", {
                                      className: "nav-item"
                                    }, React.createElement("a", {
                                          className: "nav-link",
                                          href: ""
                                        }, "Sign up")))));
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

exports.component = component;
exports.make = make;
/* component Not a pure module */
