import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

export default function Categoria(){
    return(
        <PageDefault>
            <h1>
                Cadastro de Categoria
            </h1>
            <form>
              <label htmlFor="nome">Nome da categoria</label>
              <input type="text" id="nome"></input>
              <button type="submit">Cadastrar</button>
            </form>
            <Link to="/">Ir para home</Link>
        </PageDefault>
    );
}