import { Button, Flex, Stack } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Form/Input';
import { SignUpFormData } from './types';
import * as yup from 'yup'


const signUpFormSchema = yup.object().shape({
  login: yup.string().required('* Required field'),
  password: yup.string().required('* Required field').min(6, 'Password must have at least 6 characters'),
  email: yup.string().required('* Required field').email('Please enter a valid email address'),
  confirmPassword: yup.string().required('* Required field').oneOf([yup.ref('password'), null], 'Passwords must match')
})

export default function SignUp(){
  const [loginError, setLoginError] = useState(false);

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpFormSchema)
  });

  const router = useRouter();

  const onSubmit = (data: SignUpFormData) => console.log(data);

  return (
    <Flex w='100vw' h='100vh' alignItems='center' justifyContent='center'>
      <Flex as='form' width='100%' maxWidth={360} bg='gray.800' p='8' borderRadius={8} flexDir='column' onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing='4'>
          <Input label='Login' type='text' {...register('login')} error={errors.login} onBlur={e => setValue('login', e.target.value)} />
          <Input label='E-mail' type='text' {...register('email')} error={errors.email} onBlur={e => setValue('email', e.target.value)} />
          <Input label='Password' type='password' {...register('password')} error={errors.password} onChange={e => setValue('password', e.target.value)} />
          <Input label='Confirm Password' type='password' {...register('confirmPassword')} error={errors.confirmPassword} onChange={e => setValue('confirmPassword', e.target.value)} />
        </Stack>
        <Button type='submit' mt='6' colorScheme='pink' size='lg'>
          SIGN UP
        </Button>
        
      </Flex>
    </Flex>
  )
} 