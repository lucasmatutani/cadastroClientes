import React, { Component } from 'react';
import SearchField from './SearchField';
import RadioButton from './RadioButton';
import CidadeSelect from './CidadeSelect';
import EstadoSelect from './EstadoSelect';
import CPFInput from './CPFInput';

class SearchCustomer extends Component {
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
            customers: [],
            editingCustomerId: null,
            editingCustomerData: {}  
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
        const endpoint = "/api/customers/search";
        
        axios.post(`${baseUrl}${endpoint}`, this.state)
            .then(response => {
                this.setState({ customers: response.data }, () => console.log(this.state.customers));
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            });
    }

    fetchCustomers = () => {
        const customers = [];
        this.setState({ customers });
    }

    componentDidMount() {
        this.fetchCustomers();
    }

    render() {
        return (
            <div className="d-flex justify-content-center">
                <form onSubmit={this.handleSubmit} className="col-md-8">
                    <h3 className="text-left mb-4">Consulta Cliente</h3>
                    <div className="row">
                        <CPFInput name="cpf" label="CPF" onChange={this.handleInputChange} />
                        <SearchField type="text" name="nome" label="Nome" onChange={this.handleInputChange} className="col-md-3" />
                        <SearchField type="date" name="data_nascimento" label="Data de nascimento" onChange={this.handleInputChange} className="col-md-3" />
                        <div className="col">
                            <label>Sexo</label>
                            <div className="row">
                                <RadioButton name="sexo" label="Masculino" value="masculino" onChange={this.handleInputChange} />
                                <RadioButton name="sexo" label="Feminino" value="feminino" onChange={this.handleInputChange} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <EstadoSelect onChange={this.handleInputChange} />
                        <CidadeSelect onChange={this.handleInputChange} />
                    </div>
                    <div className="form-row justify-content-end mb-5">
                        <button className="btn btn-primary mr-5">Pesquisar</button>
                        <button type="reset" className="btn btn-secondary">Limpar</button>
                    </div>
                    {this.state.customers.length > 0 && (
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th>CPF</th>
                                        <th>Nome</th>
                                        <th>Data Nascimento</th>
                                        <th>Sexo</th>
                                        <th>Endereço</th>
                                        <th>Estado</th>
                                        <th>Cidade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.customers.map((customer) => (
                                        <tr key={customer.id}>
                                            <td>
                                            {this.state.editingCustomerId === customer.id ? (
                                                <button
                                                    className="btn btn-primary mr-2"
                                                    onClick={this.handleSave}
                                                >
                                                    Save
                                                </button>
                                            ) : (
                                                <button
                                                    className="btn btn-primary mr-2"
                                                    onClick={() => this.handleEdit(customer)}
                                                >
                                                    Editar
                                                </button>
                                            )}
                                            </td>
                                            <td>
                                                <button
                                                className="btn btn-danger"
                                                onClick={() => this.handleDelete(customer.id)}
                                                >
                                                Deletar
                                                </button>
                                            </td>
                                            <td>
                                            {this.state.editingCustomerId === customer.id ? (
                                                <input type="text" value={this.state.editingCustomerData.cpf} onChange={e => this.setState({ editingCustomerData: { ...this.state.editingCustomerData, cpf: e.target.value } })} />
                                            ) : (
                                                <span>{customer.cpf}</span>
                                            )}
                                            </td>
                                            <td>
                                            {this.state.editingCustomerId === customer.id ? (
                                                <input type="text" value={this.state.editingCustomerData.nome} onChange={e => this.setState({ editingCustomerData: { ...this.state.editingCustomerData, nome: e.target.value } })} />
                                            ) : (
                                                <span>{customer.nome}</span>
                                            )}
                                            </td>
                                            <td>
                                            {this.state.editingCustomerId === customer.id ? (
                                                <input type="date" value={this.state.editingCustomerData.data_nascimento} onChange={e => this.setState({ editingCustomerData: { ...this.state.editingCustomerData, data_nascimento: e.target.value } })} />
                                            ) : (
                                                <span>{customer.data_nascimento}</span>
                                            )}
                                            </td>
                                            <td>
                                            {this.state.editingCustomerId === customer.id ? (
                                                <select value={this.state.editingCustomerData.sexo} onChange={e => this.setState({ editingCustomerData: { ...this.state.editingCustomerData, sexo: e.target.value } })}>
                                                    <option value="masculino">Masculino</option>
                                                    <option value="feminino">Feminino</option>
                                                </select>
                                            ) : (
                                                <span>{customer.sexo}</span>
                                            )}
                                            </td>
                                            <td>
                                            {this.state.editingCustomerId === customer.id ? (
                                                <input type="text" value={this.state.editingCustomerData.endereco} onChange={e => this.setState({ editingCustomerData: { ...this.state.editingCustomerData, endereco: e.target.value } })} />
                                            ) : (
                                                <span>{customer.endereco}</span>
                                            )}
                                            </td>
                                            <td>
                                            {this.state.editingCustomerId === customer.id ? (
                                                <input type="text" value={this.state.editingCustomerData.estado} onChange={e => this.setState({ editingCustomerData: { ...this.state.editingCustomerData, estado: e.target.value } })} />
                                            ) : (
                                                <span>{customer.estado}</span>
                                            )}
                                            </td>
                                            <td>
                                            {this.state.editingCustomerId === customer.id ? (
                                                <input type="text" value={this.state.editingCustomerData.cidade} onChange={e => this.setState({ editingCustomerData: { ...this.state.editingCustomerData, cidade: e.target.value }
                                            })} />
                                            ) : (
                                                <span>{customer.cidade}</span>
                                            )}
                                            </td>
                                            </tr>
                                            ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </form>
            </div>
        );
    }

    handleEdit = (customer) => {
        this.setState({ 
            editingCustomerId: customer.id, 
            editingCustomerData: {...customer}
        });
    }

    handleDelete = (id) => {
        const baseUrl = window.location.origin;
        const endpoint = `/api/customers/${id}`;
        
        axios.delete(`${baseUrl}${endpoint}`)
            .then(response => {
                this.fetchCustomers();
            })
            .catch(error => {
                console.log(error);
            });
    }

    handleSave = () => {
        const baseUrl = window.location.origin;
        const endpoint = `/api/customers/${this.state.editingCustomerId}`;
    
        axios.put(`${baseUrl}${endpoint}`, this.state.editingCustomerData)
            .then(response => {
                this.fetchCustomers();
                this.setState({ editingCustomerId: null }); 
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default SearchCustomer;

