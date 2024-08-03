var {criarContato, removerContato, listarContato} = require ('./functions.js');

test('Verificar se a lista de contatos esta vazia', function() {
    listarContato();
    expect(listarContato()).toBe('Lista está vazia');

});


test('Criar Contato', function() {
    var contato = criarContato('Elisa', 'jFJXx@example.com', '11999999999');
   expect(contato.nome).toBe('Elisa');
   expect(contato.email).toBe('jFJXx@example.com');
   expect(contato.telefone).toBe('11999999999');

});

test ('Deve verificar se o nome esta vazio', function() {
    var contato = criarContato('', 'jFJXx@example.com', '11999999999');
    expect(contato).toBe('Nome é obrigatório');
});

test ('Deve verificar se o email esta vazio', function() {
    var contato = criarContato('Elisa', '', '11999999999');
    expect(contato).toBe('E-mail é obrigatório');
});

test ('Deve verificar se o telefone esta vazio', function() {
    var contato = criarContato('Elisa', 'jFJXx@example.com', '');
    expect(contato).toBe('Telefone é obrigatório');    
});

test ('Remover Contato', function() {
    var contato = criarContato('Elisa', 'jFJXx@example.com', '11999999999');
    removerContato(contato.id);
    var listagem = listarContato();
    expect(listagem).not.toContain(contato);
});

test ('Verificar se o contato não foi encontrado', function() {
    removerContato();
    var listagem = listarContato();
    expect(listagem).not.toContain('Contato não encontrado');
});














