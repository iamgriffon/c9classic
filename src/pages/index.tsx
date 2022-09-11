import { Button, Flex, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";
import { useRouter } from "next/router";
import { Input } from "../components/Form/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Link from "next/link";
import { Title } from "../components/Head";
import { SignInFormData } from "./types";


const signInFormSchema = yup.object().shape({
  login: yup.string().required("* Required field"),
  password: yup.string().required("* Required field")
})

export default function Home() {

  const [loginError, setLoginError] = useState(false);

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  });

  const router = useRouter();

  const onSubmit = (data: SignInFormData) => {
    console.log(data);
    if(data) router.push("/characters")
  }

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Title title="C9 Classic | Login" />
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing="4">
          <Input label="Login" type="text" {...register("login")} error={errors.login} onBlur={e => setValue("login", e.target.value)} />
          <Input label="Password" type="password" {...register("password")} error={errors.password} onChange={e => setValue("password", e.target.value)} />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          LOG IN
        </Button>
        {loginError && <Text fontSize="sm" color="red.200" fontStyle="italic">Erro ao logar</Text>}
        <Text mt="4" as="div" mb="0" display="flex">
        Dont have an account?<Text px="2" fontWeight="bold" cursor="pointer" textDecoration="underline"><Link href="sign-up">SIGN UP</Link></Text>
      </Text>
      </Flex>
    </Flex>
  )
}