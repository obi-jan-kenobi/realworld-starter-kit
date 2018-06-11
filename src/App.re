let default = ReasonReact.statelessComponent("App");
let make = _children => {
  ...default,
  render: _ => <div> <Nav /> <Main /> <Footer /> </div>,
};
