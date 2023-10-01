import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
} from "react-admin";
import { UsersCreate, UsersEdit } from "./Users";
import { dataProvider } from "./dataProvider";

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={ListGuesser}
      edit={UsersEdit}
      show={ShowGuesser}
      create={UsersCreate}
    />
  </Admin>
);
