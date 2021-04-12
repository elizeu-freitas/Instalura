import React, {Fragment, useState, useEffect} from 'react';
import {
    Dimensions,
    StyleSheet,
    FlatList,
    View,
    Text,
    ScrollView,
    StatusBar,
} from 'react-native';
import {Cabecalho} from '../../components/Cabecalho';
import {Foto} from '../../components/Foto';
import {Comentario} from '../../components/Comentario';
import lerFotos from '../../api/feed';
import adicionarComentario from '../../api/comentarios';
import {pegarImagemLike, curtirFoto} from '../../api/curtidas';

const largura = Dimensions.get('screen').width;

const Feed = () => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        lerFotos(setFotos);
    }, []);

    return (
        <View>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <FlatList
                data={fotos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <Fragment>
                        <Cabecalho
                            nomeUsuario={item.userName}
                            urlImagem={item.userURL}></Cabecalho>
                        <Foto
                            urlFoto={item.url}
                            descricao={item.description}
                            qtdLikes={item.likes}
                            curtirFoto={curtirFoto}
                            pegarImagemLike={pegarImagemLike}
                        />
                        <Comentario
                            comentarios={item.comentarios}
                            adicionarComentario={adicionarComentario}
                        />
                    </Fragment>
                )}
            />
        </View>
    );
};

const estilo = StyleSheet.create({
    imagem: {
        width: largura,
        height: largura,
    },
});

Feed.navigationOptions = ({navigation}) => {
    const opcoes = {
        title: navigation.getParam('nomeUsuario'),
    }
    if (Platform.OS === 'android') {
        //opcoes.headerShown = false;
    }

    return opcoes;
}

export default Feed;
