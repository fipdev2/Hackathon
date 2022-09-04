import * as React from 'react';
import { useState } from 'react';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { InputForm, InputSenha, Page, TextError, TouchableOpacity, TurtleTxt, ViewInput, Text, BtnView } from './style';
import { View, Image } from 'react-native'
import { AiFillEye, AiFillTwitterCircle, AiOutlineTwitter } from 'react-icons/ai'
import { AiFillEyeInvisible } from 'react-icons/ai'
import Button from '../../components/Button';
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook, BsTwitter } from 'react-icons/bs'

interface FormData {
    email: string,
    password: string,
}

function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = (data: FormData) => {
        console.log(data);
    }


    return (
        <Page>
            <TurtleTxt>
                bubble hub
            </TurtleTxt>

            <Controller
                control={control}
                rules={{
                    required: 'Campo obrigatório',
                    pattern: {
                        value: /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Formato de email inválido"
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <InputForm placeholder='E-mail'
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name='email' />
            {errors.email && <TextError>{errors.email.message}</TextError>}
            <Controller
                control={control}
                rules={{
                    required: 'Campo obrigatório'

                }}
                render={({ field: { onChange, onBlur, value } }) => (

                    <>
                        <ViewInput>
                            <InputSenha placeholder='Senha'
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={!showPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                {!showPassword ? <AiFillEye style={{ fontSize: 24, color: '#068888' }} /> : <AiFillEyeInvisible style={{ fontSize: 24, color: '#068888' }} />}
                            </TouchableOpacity>
                        </ViewInput>
                    </>

                )}
                name='password' />
            {errors.password && <TextError>{errors.password.message}</TextError>}
            <TouchableOpacity
                style={{
                    alignSelf: 'flex-end',
                    marginTop: 8,
                    marginBottom: 26
                }}>
                <Text>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <Button name='Entrar' onPress={handleSubmit(onSubmit)} />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginTop: 60,

                }}>
                <View
                    style={{
                        backgroundColor: '#D9D9D9',
                        borderRadius: 100,
                        width: 64,
                        height: 3,
                        marginRight: 16
                    }}
                />
                <Text style={{ color: 'black' }}>Ou continue com</Text>
                <View
                    style={{
                        backgroundColor: '#D9D9D9',
                        borderRadius: 100,
                        width: 64,
                        height: 3,
                        marginLeft: 16
                    }}
                />
            </View>
            <BtnView>
                <TouchableOpacity>
                    <FcGoogle style={{ height: 53, width: 50 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ borderRadius: 100, backgroundColor: '#1CA0F1', width: 48, height: 48, alignItems: 'center', justifyContent: 'center' }}>
                    <AiOutlineTwitter style={{ height: 43, width: 43, color: 'white' }} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <BsFacebook style={{ height: 50, width: 50, color: '#1778F2' }} />
                </TouchableOpacity>
            </BtnView>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: '45px' }}>
                <Text style={{ color: '#02556D', fontSize: 16 }}>Não é um membro?</Text>
                <TouchableOpacity>
                    <Text style={{ color: '#09C6AB', fontSize: 16, fontWeight: 'bold' }}>  Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
        </Page>

    );
}

export default Login;