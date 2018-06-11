let component = ReasonReact.statelessComponent("Nav");
let make = (_children) => {
  ...component,
  render: _ =>
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="index.html">{ReasonReact.string("conduit")}</a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a className="nav-link active" href="">{ReasonReact.string("Home")}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">{ReasonReact.string("New Post")}
              <i className="ion-compose"></i>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">
              <i className="ion-gear-a"></i>{ReasonReact.string("Settings")}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">{ReasonReact.string("Sign up")}</a>
          </li>
        </ul>
      </div>
    </nav>
};
