Feature('login');

Scenario('Login com sucesso',  ({ I }) => {
    //Passo a passo
    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login',10);
    I.fillField('#user', 'testando@test.com');
    I.fillField('#password', secret('123456'));
    I.click('#btnLogin');
    //validação
    I.waitForText('Login realizado');
    //Screenshot caso teste bem sucedido
    I.saveScreenshot('c01-ct01.png',true);
}).tag('@sucesso');

Scenario('Tentando logar digitando apenas e-mail',  ({ I }) => {
    //Passo a passo
    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login',10);
    I.fillField('#user', 'testando@test.com');
    I.click('#btnLogin');
    //validação
    I.waitForText('Senha inválida.');
    //Screenshot caso teste bem sucedido
    I.saveScreenshot('c01-ct02.png',true);
});

Scenario('Tentando logar digitando apenas senha',  ({ I }) => {
    //Passo a passo
    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login',10);
    I.fillField('#password', secret('123456'));
    I.click('#btnLogin');
    //validação
    I.waitForText('E-mail inválido.');
    //Screenshot caso teste bem sucedido
    I.saveScreenshot('c01-ct03.png',true);
});

Scenario('Tentando logar sem digitar e-mail e senha', ({ I }) => {
    //Passo a passo
    I.amOnPage('https://automationpratice.com.br/');
    I.click('Login');
    I.waitForText('Login',10);
    I.click('#btnLogin');
    //validação
    I.waitForText('E-mail inválido.');
    //Screenshot caso teste bem sucedido
    I.saveScreenshot('c01-ct04.png',true);
});