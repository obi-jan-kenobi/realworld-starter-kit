// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");

var $$default = ReasonReact.statelessComponent("Profile");

function make() {
  return /* record */[
          /* debugName */$$default[/* debugName */0],
          /* reactClassInternal */$$default[/* reactClassInternal */1],
          /* handedOffState */$$default[/* handedOffState */2],
          /* willReceiveProps */$$default[/* willReceiveProps */3],
          /* didMount */$$default[/* didMount */4],
          /* didUpdate */$$default[/* didUpdate */5],
          /* willUnmount */$$default[/* willUnmount */6],
          /* willUpdate */$$default[/* willUpdate */7],
          /* shouldUpdate */$$default[/* shouldUpdate */8],
          /* render */(function () {
              return React.createElement("div", {
                          className: "profile-page"
                        }, React.createElement("div", {
                              className: "user-info"
                            }, React.createElement("div", {
                                  className: "container"
                                }, React.createElement("div", {
                                      className: "row"
                                    }, React.createElement("div", {
                                          className: "col-xs-12 col-md-10 offset-md-1"
                                        }, React.createElement("img", {
                                              className: "user-img",
                                              src: "http://i.imgur.com/Qr71crq.jpg"
                                            }), React.createElement("h4", undefined, "Eric Simons"), React.createElement("p", undefined, "Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games"), React.createElement("button", {
                                              className: "btn btn-sm btn-outline-secondary action-btn"
                                            }, React.createElement("i", {
                                                  className: "ion-plus-round"
                                                }), " Follow Eric Simons"))))), React.createElement("div", {
                              className: "container"
                            }, React.createElement("div", {
                                  className: "row"
                                }, React.createElement("div", {
                                      className: "col-xs-12 col-md-10 offset-md-1"
                                    }, React.createElement("div", {
                                          className: "articles-toggle"
                                        }, React.createElement("ul", {
                                              className: "nav nav-pills outline-active"
                                            }, React.createElement("li", {
                                                  className: "nav-item"
                                                }, React.createElement("a", {
                                                      className: "nav-link active",
                                                      href: ""
                                                    }, "My Articles")), React.createElement("li", {
                                                  className: "nav-item"
                                                }, React.createElement("a", {
                                                      className: "nav-link",
                                                      href: ""
                                                    }, "Favorited Articles")))), React.createElement("div", {
                                          className: "article-preview"
                                        }, React.createElement("div", {
                                              className: "article-meta"
                                            }, React.createElement("a", {
                                                  href: ""
                                                }, React.createElement("img", {
                                                      src: "http://i.imgur.com/Qr71crq.jpg"
                                                    })), React.createElement("div", {
                                                  className: "info"
                                                }, React.createElement("a", {
                                                      className: "author",
                                                      href: ""
                                                    }, "Eric Simons"), React.createElement("span", {
                                                      className: "date"
                                                    }, "January 20th")), React.createElement("button", {
                                                  className: "btn btn-outline-primary btn-sm pull-xs-right"
                                                }, React.createElement("i", {
                                                      className: "ion-heart"
                                                    }), "29")), React.createElement("a", {
                                              className: "preview-link",
                                              href: ""
                                            }, React.createElement("h1", undefined, "How to build webapps that scale"), React.createElement("p", undefined, "This is the description for the post."), React.createElement("span", undefined, "Read more...")))))));
            }),
          /* initialState */$$default[/* initialState */10],
          /* retainedProps */$$default[/* retainedProps */11],
          /* reducer */$$default[/* reducer */12],
          /* subscriptions */$$default[/* subscriptions */13],
          /* jsElementWrapped */$$default[/* jsElementWrapped */14]
        ];
}

exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
exports.make = make;
/* default Not a pure module */
