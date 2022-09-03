import * as React from 'react';
import { Page, TurtleTxt } from './style'

function Login() {

    return (
        <Page>
            <TurtleTxt>
                bubble hub
            </TurtleTxt>
            {/* <Controller
                control={control}
                name='email'
                defaultValue=''
                render={({ field: { onBlur, onChange, value } }) => (
                    <InputForm
                        onBlur={onBlur}
                        onChangeText={(value: any) => onChange(value)}
                        value={value}
                        placeholder='Nome'
                        maxLength={35}
                    />
                )}
                rules={{
                    required: "Nome é obrigatório",
                    pattern: {
                        value: /^[a-zA-Z0-9]+$/i,
                        message: 'Somente letras e números permitidos'
                    },
                }}
            />
            {errors.nome && <TextError>{errors.nome.message}</TextError>} */}
        </Page>

    );
}

export default Login;