const pegarImagemLike = curtiu => {
    if (curtiu) {
        return require('../../res/s2-checked.png');
    } else {
        return require('../../res/s2.png');
    }
};

const curtirFoto = (curtiu, likes) => {
    let qtd = likes;
    if (curtiu) {
        qtd--;
    } else {
        qtd++;
    }
    return [!curtiu, qtd];
};

export {pegarImagemLike, curtirFoto};
