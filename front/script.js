const API_base = 'http://localhost:3000';

async function carregarclienteseenderecos(){
    try{
        const resClientes =  await axios.get(`${API_base}/cliente`);
        const clientes = resClientes.data;
        const container = document.getElementById('dados');

        for (const item of clientes){
            const resEnderecos = await axios.get(`${API_base}/cliente/${item.id}/endereco`);
            const enderecos = resEnderecos.data;

            const divCliente = document.createElement('div');
            divCliente.style.marginBottom = '20px';

            const nomeCliente = document.createElement('h2');
            nomeCliente.textContent = `Cliente: ${item.nome} (ID: ${item.id})`;
            divCliente.appendChild(nomeCliente);

            const listaEnderecos = document.createElement('ul');
            enderecos.forEach(element => {
                const linha = document.createElement('li');
                linha.textContent = `Endereço: ${element.logradouro}, ${element.numero} - ${element.CEP}/${element.municipio} (ID: ${element.id})`;
                listaEnderecos.appendChild(linha);
            });
            divCliente.appendChild(listaEnderecos);
            container.appendChild(divCliente);
        } 
    }catch(error) {
        console.error('Erro ao carregar clientes e endereços:', error);
        container.textContent = 'Erro ao carregar dados. Tente novamente mais tarde.';
    }
};

window.addEventListener('DOMContentLoaded', carregarclienteseenderecos);

