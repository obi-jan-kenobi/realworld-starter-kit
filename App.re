let default = ReasonReact.statelessComponent("App");
let make = (_children) => {
  ...default,
  render: _ => <Nav />
    <Main />
    <Footer />
}
