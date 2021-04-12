import {Platform} from 'react-native';

const efetuarLogin = async (usuario, senha) => {
    let url = '10.0.2.2';
    if (Platform.OS == 'ios') {
        url = 'localhost';
    }
    const cabecachoHTTP = {
        method: 'POST',
        body: JSON.stringify({
            userName: usuario,
            password: senha,
        }),
        headers: {
            'content-type': 'application/json',
        },
    };
    const resposta = await fetch(
        `http://${url}:3030/users/login`,
        cabecachoHTTP,
    );

    if (resposta.ok) {
        return resposta.headers.get('x-access-token');
    } else {
        throw new Error('Não foi possível logar');
    }
};

export default efetuarLogin;
