# Teste-ACTDIGITAL
Essa tarefa é interessante porque reúne vários aspectos importantes de um pipeline de CI/CD moderno e demonstra como integrar processos de automação, qualidade de código e segurança nas operações de deploy. 

-  Thiago Martins
title CI/CD Pipeline - GitHub Actions

start

:Commit na branch main;
:Inicia pipeline no GitHub Actions;

partition "Build & Test" {
    :Instalar dependências;
    :Executar testes unitários;
    if (Testes passaram?) then (Sim)
        :Construir a aplicação;
    else (Não)
        :Notificar desenvolvedor via e-mail;
        stop
    endif
}

partition "Release & Approval" {
    :Armazenar artefato como release no GitHub;
    :Aprovação necessária via Environment Restriction;
}

partition "Deploy" {
    if (Aprovação concedida?) then (Sim)
        :Deploy no ambiente de teste;
    else (Não)
        :Notificar desenvolvedor via e-mail;
        stop
    endif
}

:Notificar sucesso do deploy;
stop
