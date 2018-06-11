let default = ReasonReact.statelessComponent("Footer");
let make = _children => {
  ...default,
  render: _ =>
    <footer>
      <div className="container">
        <a href="/" className="logo-font">
          (ReasonReact.string("conduit"))
        </a>
        <span className="attribution">
          (
            ReasonReact.string(
              "An interactive learning project from <a href=\"https://thinkster.io\">Thinkster</a>. Code &amp; design licensed under MIT.",
            )
          )
        </span>
      </div>
    </footer>,
};
