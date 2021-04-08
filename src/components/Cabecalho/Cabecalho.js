import React from 'react';
import {Image, Text, View} from 'react-native';
import estilo from './estilo';

const Cabecalho = ({nomeUsuario, urlImagem}) => {
    return (
        <View style={estilo.cabecalho}>
            <Image source={{uri: urlImagem}} style={estilo.fotoUsuario} />
            <Text>{nomeUsuario}</Text>
        </View>
    );
};

export default Cabecalho;
