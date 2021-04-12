import React, {Fragment, useState} from 'react';
import {
    FlatList,
    Text,
    TextInput,
    Image,
    View,
    TouchableOpacity,
} from 'react-native';
import estilo from './estilo';

const Comentario = ({comentarios, adicionarComentario}) => {
    const [estComentarios, setEstComentarios] = useState(comentarios);

    const onComentarioEnviado = () => {
        campoInput.clear();
        const novoComentario = adicionarComentario(
            conteudoInputComentario,
            'Elizeu',
        );
        setEstComentarios([...estComentarios, novoComentario]);
    };

    let campoInput;
    let conteudoInputComentario = '';

    return (
        <Fragment>
            <FlatList
                data={estComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <View style={estilo.inline}>
                        <Text>{item.userName} </Text>
                        <Text>{item.text}</Text>
                    </View>
                )}
            />
            <View style={estilo.inline}>
                <TextInput
                    ref={textInput => (campoInput = textInput)}
                    placeholder="Deixe seu comentário"
                    style={estilo.inputText}
                    onChangeText={text => (conteudoInputComentario = text)}
                />
                <TouchableOpacity onPress={onComentarioEnviado}>
                    <Image
                        source={require('../../../res/send.png')}
                        style={estilo.sendImage}
                    />
                </TouchableOpacity>
            </View>
        </Fragment>
    );
};

export default Comentario;
