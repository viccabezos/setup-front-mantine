import { Button, Paper, PasswordInput, Stack, TextInput } from "@mantine/core";
import React from "react";

function LoginForm() {
  return (
    <Paper>
      <TextInput required label="email" placeholder="email@email.com" />
      <PasswordInput required label="password" placeholder="*********" />
      <Button type="submit"> Login</Button>
    </Paper>
  );
}

export default LoginForm;
