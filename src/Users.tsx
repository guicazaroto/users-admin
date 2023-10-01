import {
  Edit,
  SimpleForm,
  TextInput,
  Create
} from "react-admin";


export const UsersEdit = () => (
  <Edit>
      <SimpleForm>
          <TextInput source="name" />
          <TextInput source="email" />
          <TextInput source="password" />
      </SimpleForm>
  </Edit>
);

export const UsersCreate = () => (
    <Create>
      <SimpleForm>
          <TextInput source="name" />
          <TextInput source="email" />
          <TextInput source="password" />
      </SimpleForm>
    </Create>
);