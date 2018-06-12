let component = ReasonReact.statelessComponent("Home");
let make = _children => {
  ...component,
  render: _ =>
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font"> (ReasonReact.string("conduit")) </h1>
          <p> (ReasonReact.string("A place to share your knowledge.")) </p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="">
                    (ReasonReact.string("Your Feed"))
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">
                    (ReasonReact.string("Global Feed"))
                  </a>
                </li>
              </ul>
            </div>
            <div className="article-preview">
              <div className="article-meta">
                <a href="profile.html">
                  <img src="http://i.imgur.com/Qr71crq.jpg" />
                </a>
                <div className="info">
                  <a href="" className="author">
                    (ReasonReact.string("Eric Simons"))
                  </a>
                  <span className="date">
                    (ReasonReact.string("January 20th"))
                  </span>
                </div>
                <button
                  className="btn btn-outline-primary btn-sm pull-xs-right">
                  <i className="ion-heart" />
                  (ReasonReact.string("29"))
                </button>
              </div>
              <Link href="profile" className="preview-link">
                <h1>
                  (ReasonReact.string("How to build webapps that scale"))
                </h1>
                <p>
                  (
                    ReasonReact.string("This is the description for the post.")
                  )
                </p>
                <span> (ReasonReact.string("Read more...")) </span>
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="sidebar">
              <p> (ReasonReact.string("Popular Tags")) </p>
              <div className="tag-list">
                <a href="" className="tag-pill tag-default">
                  (ReasonReact.string("programming"))
                </a>
                <a href="" className="tag-pill tag-default">
                  (ReasonReact.string("javascript"))
                </a>
                <a href="" className="tag-pill tag-default">
                  (ReasonReact.string("emberjs"))
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
};
