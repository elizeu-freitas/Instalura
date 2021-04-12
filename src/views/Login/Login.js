import React, {Fragment, useState} from 'react';
import {Text, TextInput, Button, View, Platform} from 'react-native';
import estilo from './estilo';

import efetuarLogin from '../../api/login';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({navigation}) => {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');
    const temtarLogar = async () => {
        try {
            setMensagemErro('');
            const token = await efetuarLogin(usuario, senha);
            await AsyncStorage.setItem("instalura_token", token);
            navigation.replace('Feed', {nomeUsuario: usuario});
        } catch (error) {
            setMensagemErro(error.message);
        }
    };
    return (
        <Fragment>
            <View style={estilo.Container}>
                <TextInput
                    onChangeText={setUsuario}
                    placeholder="Usuário"
                    style={estilo.Inputs}
                />
                <TextInput
                    onChangeText={texto => setSenha(texto)}
                    placeholder="Senha"
                    secureTextEntry
                    style={estilo.Inputs}
                />
                <Text>{mensagemErro}</Text>
            </View>
            <View style={estilo.BotaoView}>
                <Button title="ENTRAR" onPress={temtarLogar} />
            </View>
        </Fragment>
    );
};

Login.navigationOptions = () => {
    const opcoes = {
        title: 'LOGIN',
    }
    if (Platform.OS === 'android') {
        //opcoes.headerShown = false;
    }

    return opcoes;
}

export default Login;
