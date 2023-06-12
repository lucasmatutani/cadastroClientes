import React, { Component } from 'react';
import InputField from './InputField';
import RadioButton from './RadioButton';
import CidadeSelect from './CidadeSelect';
import EstadoSelect from './EstadoSelect';
import axios from 'axios';
import CPFInput from './CPFInput';

class RegisterCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cpf: '',
            nome: '',
            data_nascimento: '',
            sexo: '',
            endereco: '',
            estado: '',
            cidade: '',
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const baseUrl = window.location.origin;
        const endpoint = "/api/customers";

        axios.post(`${baseUrl}${endpoint}`, this.state)
        .then(response => {
            console.log(response);
            alert("Cadastro efetuado com sucesso!");
            location.reload(true);
        })
        .catch(error => {
            alert("Confira os campos e tente novamente")
            console.log(error);
        });
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <form onSubmit={this.handleSubmit} className="col-md-8">
                    <h3 className="text-left mb-4">Cadastro Cliente</h3>
                    <div className="row mb-3">
                        <CPFInput name="cpf" label="CPF" onChange={this.handleInputChange} required />
                        <InputField type="text" name="nome" label="Nome" onChange={this.handleInputChange} className="col-md-3" />
                        <InputField type="date" name="data_nascimento" label="Data de Nascimento" onChange={this.handleInputChange} className="col-md-3" />
                        <div className="col-md-3">
                            <label>Sexo</label>
                            <div className="row">
                                <RadioButton name="sexo" label="Masculino" value="masculino" onChange={this.handleInputChange} />
                                <RadioButton name="sexo" label="Feminino" value="feminino" onChange={this.handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <InputField type="text" name="endereco" label="Endereço" onChange={this.handleInputChange} className="col-md-4" />
                        <EstadoSelect onChange={this.handleInputChange} estado={this.state.estado} />
                        <CidadeSelect onChange={this.handleInputChange} cidade={this.state.cidade} />
                    </div>
                    <div className="form-row justify-content-end">
                        <button type="submit" className="btn btn-primary mr-2">Salvar</button>
                        <button type="reset" className="btn btn-secondary">Limpar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterCustomer;
