import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Main from "./pages/Home";
import Book from "./pages/Cadastro";

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main,
      Book,
    }, {
      initialRouteName: "Main",
      backBehavior: "history"
    }
  )
);

export default Routes;