import React, {Fragment, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import estilo from './estilo';
import {pegarImagemLike, curtirFoto} from '../../api/curtidas';

const Foto = ({urlFoto, descricao, qtdLikes}) => {
    const [curtiu, setCurtiu] = useState(false);
    const [likes, setLikes] = useState(qtdLikes);

    const clickouCurtiu = () => {
        const [novoEstCurtiu, qtd] = curtirFoto(curtiu, likes);
        setLikes(qtd);
        setCurtiu(novoEstCurtiu);
    };

    return (
        <Fragment>
            <Image source={{uri: urlFoto}} style={estilo.imagem} />
            <Text>{descricao}</Text>
            <View style={estilo.viewLike}>
                <TouchableOpacity onPress={clickouCurtiu}>
                    <Image
                        style={estilo.like}
                        source={pegarImagemLike(curtiu)}
                    />
                </TouchableOpacity>
                <Text>{likes}</Text>
            </View>
        </Fragment>
    );
};

export default Foto;
