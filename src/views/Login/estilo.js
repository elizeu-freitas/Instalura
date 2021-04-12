import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    Container: {
        flexGrow: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Inputs: {
        width: largura * 0.8,
        textAlign: 'center',
        marginTop: 40,
        fontSize: 30,
    },
    BotaoView: {
        alignItems: 'center',
        marginBottom: 50,
    },
});

export default estilo;
