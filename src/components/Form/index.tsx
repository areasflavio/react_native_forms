import { useForm } from 'react-hook-form';

import { Button } from '../Button';
import { ControlledInput } from '../ControlledInput';

import { Container } from './styles';

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

export function Form() {
  const { control, handleSubmit } = useForm<FormData>();

  const handleUserRegister = (data: FormData) => {
    console.log(data);
  };

  return (
    <Container>
      <ControlledInput
        name="name"
        control={control}
        icon="user"
        placeholder="Nome"
      />
      <ControlledInput
        name="email"
        control={control}
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <ControlledInput
        name="password"
        control={control}
        icon="lock"
        placeholder="Senha"
        secureTextEntry
      />
      <ControlledInput
        name="password_confirm"
        control={control}
        icon="lock"
        placeholder="Confirme a senha"
        secureTextEntry
      />

      <Button title="Cadastrar" onPress={handleSubmit(handleUserRegister)} />
    </Container>
  );
}
