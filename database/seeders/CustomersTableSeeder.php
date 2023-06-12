<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class CustomersTableSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('customers')->insert([
            [
                'cpf' => '123.456.789-01',
                'nome' => 'Cliente Teste',
                'data_nascimento' => '1980-01-01',
                'sexo' => 'masculino',
                'endereco' => 'Rua Exemplo, 123',
                'estado' => 'São Paulo',
                'cidade' => 'São Paulo',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'cpf' => '234.567.891-02',
                'nome' => 'Cliente Teste 2',
                'data_nascimento' => '1985-02-02',
                'sexo' => 'feminino',
                'endereco' => 'Rua Exemplo 2, 456',
                'estado' => 'Rio de Janeiro',
                'cidade' => 'Rio de Janeiro',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'cpf' => '345.678.912-03',
                'nome' => 'Cliente Teste 3',
                'data_nascimento' => '1990-03-03',
                'sexo' => 'masculino',
                'endereco' => 'Rua Exemplo 3, 789',
                'estado' => 'Minas Gerais',
                'cidade' => 'Belo Horizonte',
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}
