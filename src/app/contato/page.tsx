'use client';
import Button from "@/components/Button";
import Form from "@/components/Form";
import { useState } from "react";

const Contato = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [cep, setCep] = useState('');

    const changeName = (event: any) => {
        setName(event.target.value);
    };
    const changeAddress = (event: any) => {
        setAddress(event.target.value);
    };
    const changePhone = (event: any) => {
        setPhone(event.target.value);
    };
    const changeCep = (event: any) => {
        setCep(event.target.value);
    };

    return (
        <section className="m-4">
            <header>
                <h1 className="text-center text-2xl">Formulário de Contato</h1>
            </header>

            <Form label="Nome" value={name} onChange={changeName} />
            <Form label="Endereço" value={address} onChange={changeAddress} />
            <Form label="Telefone" value={phone} onChange={changePhone} />
            <Form label="CEP" value={cep} onChange={changeCep} />

            <footer>
                <Button text="Enviar" onClick={null} />
            </footer>
            
        </section>
    )
}
export default Contato;