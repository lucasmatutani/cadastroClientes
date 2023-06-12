<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class CustomerController extends Controller
{
    public function index()
    {
        return Customer::all();
    }

    public function search(Request $request)
    {
        $query = Customer::query();

        if($request->filled('cpf')) {
            $query->where('cpf', $request->cpf);
        }
        if($request->filled('nome')) {
            $query->where('nome', 'like', '%'.$request->nome.'%');
        }
        if($request->filled('data_nascimento')) {
            $query->whereDate('data_nascimento', $request->data_nascimento);
        }
        if($request->filled('sexo')) {
            $query->where('sexo', $request->sexo);
        }
        if($request->filled('endereco')) {
            $query->where('endereco', 'like', '%'.$request->endereco.'%');
        }
        if($request->filled('estado')) {
            $query->where('estado', $request->estado);
        }
        if($request->filled('cidade')) {
            $query->where('cidade', $request->cidade);
        }

        $customers = $query->get();

        return response()->json($customers);
    }


    public function store(Request $request)
    {
        return Customer::create($request->all());
    }

    public function show(Customer $customer)
    {
        return $customer;
    }

    public function update(Request $request, Customer $customer)
    {
        $customer->update($request->all());
        return $customer;
    }

    public function destroy(Customer $customer)
    {
        $customer->delete();
        return response()->json(null, 204);
    }
}
