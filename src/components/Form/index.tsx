import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { Button } from '../Button';
import { ControlledInput } from '../ControlledInput';

import { Container } from './styles';

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const schema = yup.object({
  name: yup.string().required('Informe seu nome'),
  email: yup.string().email('Email inválido').required('Informe seu email'),
  password: yup
    .string()
    .min(6, 'A senha deve conter no mínimo 6 dígitos')
    .required('Informe sua senha'),
  password_confirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'A confirmação da senha não é válida')
    .required('Informe sua senha para confirmação'),
});

export function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

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
        error={errors.name}
      />
      <ControlledInput
        name="email"
        control={control}
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />
      <ControlledInput
        name="password"
        control={control}
        icon="lock"
        placeholder="Senha"
        secureTextEntry
        error={errors.password}
      />
      <ControlledInput
        name="password_confirm"
        control={control}
        icon="lock"
        placeholder="Confirme a senha"
        secureTextEntry
        error={errors.password_confirm}
      />

      <Button title="Cadastrar" onPress={handleSubmit(handleUserRegister)} />
    </Container>
  );
}
