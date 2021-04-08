import React, {Fragment, useState, useEffect} from 'react';
import {
    Dimensions,
    StyleSheet,
    FlatList,
    View,
    Text,
    ScrollView,
} from 'react-native';
import {Cabecalho} from './src/components/Cabecalho';
import {Foto} from './src/components/Foto';
import {Comentario} from './src/components/Comentario';
import lerFotos from './src/api/feed';

const largura = Dimensions.get('screen').width;

const App = () => {
    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        lerFotos(setFotos);
    }, []);

    return (
        <View>
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
                        />
                        <Comentario comentarios={item.comentarios} />
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

export default App;
