type route =
  | Home(array(string))
  | Create
  | Edit(string)
  | Profile
  | Settings;

type state = {route};

type action =
  | ChangeRoute(route);

let mapUrlToRoute = (url: ReasonReact.Router.url) =>
  switch (url.path) {
  | [] => Home([|"hello"|])
  | ["create"] => Create
  | ["edit"] => Edit("asd")
  | ["profile"] => Profile
  | ["settings"] => Settings
  | _ => Home([||])
  };

let default = ReasonReact.reducerComponent("App");
let make = _children => {
  ...default,
  reducer: (action, _state) =>
    switch (action) {
    | ChangeRoute(route) => ReasonReact.Update({route: route})
    },
  initialState: () => {route: Home([||])},
  subscriptions: self => [
    Sub(
      () =>
        ReasonReact.Router.watchUrl(url => {
          Js.log(url);
          self.send(ChangeRoute(url |> mapUrlToRoute));
        }),
      ReasonReact.Router.unwatchUrl,
    ),
  ],
  render: self =>
    <div>
      <Nav />
      (
        switch (self.state.route) {
        | Home(_) => <Home />
        | Profile => <Profile />
        | Settings => <Settings />
        | _ => <Home />
        }
      )
      <Footer />
    </div>,
};
