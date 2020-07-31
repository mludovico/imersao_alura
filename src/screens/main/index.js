import React from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';
import './index.css';
import PageDefault from '../../components/PageDefault';

export default function Main(props) {
    return (
        <div className="mainDiv">
            <PageDefault>
                <BannerMain
                    videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
                    url={dadosIniciais.categorias[0].videos[0].url}
                    videoDescription={"Descrição animal"}
                />
                <Carousel
                    ignoreFirstVideo
                    category={dadosIniciais.categorias[0]}
                    key={1}
                />
                <Carousel
                    ignoreFirstVideo
                    category={dadosIniciais.categorias[1]}
                    key={2}
                />
                <Carousel
                    ignoreFirstVideo
                    category={dadosIniciais.categorias[2]}
                    key={3}
                />
                <Carousel
                    ignoreFirstVideo
                    category={dadosIniciais.categorias[3]}
                    key={4}
                />
                <Carousel
                    ignoreFirstVideo
                    category={dadosIniciais.categorias[4]}
                    key={5}
                />
            </PageDefault>
        </div>
    );
}