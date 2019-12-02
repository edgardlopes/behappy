import React from 'react'

import Label from '../Label'
import Input from '../Input'

export default class NovoUsuario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: {
                nome: ''
            },
            validacao: {
                nomeInvalido: false
            }
        }
    }

    render() {
        return (
            <div className="center">
                <form className="pure-form pure-form-stacked">
                    <Label 
                        htmlFor="nome" 
                        texto="Quem é você?"
                        valorInvalido={this.state.nomeInvalido}    
                    />
                    <Input 
                        id="nome"
                        placeholder="Digite seu nome"
                        maxLength="40"
                        readOnly={false}
                        valorInvalido={this.state.nomeInvalido}
                        defaultValue="Edgard"
                    />
                </form>
            </div>
        )
    }

    atualizarNome(e) {
        const usuario = { ...this.state.usuario };
        usuario.nome = e.target.value;
        this.setState({ usuario });
    }
}