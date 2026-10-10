---
title: Contactos e histórico
sidebar_position: 4
description: A lista de contactos e o registo de chamadas, ao lado do telefone.
---

**Contactos** e **Histórico** abrem como dois separadores à direita do telefone, para que possa procurar um número enquanto fala.

## Contactos {#contacts}

<Shot name="03_contacts" alt="O separador Contactos" />

- **Procurar** filtra a lista à medida que escreve.
- **Adicionar** cria um contacto.
- Cada contacto aparece com um nome e, por baixo, o número e a conta através da qual se lhe liga, por exemplo *231 · 201 Escritório*.

Uma chamada a entrar de um número conhecido mostra o nome do contacto, tal como as listas de chamadas recentes e do registo de chamadas — é assim que funciona a identificação de quem liga.

### Editar um contacto {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Um contacto aberto para edição" />

Selecione um contacto para mostrar um lápis e um auscultador à direita da sua linha. O auscultador liga para o contacto; o lápis abre o formulário por baixo da linha:

| Campo | O que escrever |
| --- | --- |
| **Nome** | Como o contacto é mostrado. |
| **Número** | O número a marcar. |
| Lista pendente por baixo de **Número** | A conta através da qual se liga ao contacto. |

**Guardar** mantém as alterações, **Cancelar** descarta-as e **Eliminar** remove o contacto.

## Histórico {#history}

<Shot name="21_history" alt="O separador Histórico" />

O registo de chamadas, da mais recente para a mais antiga. No topo:

- a lista pendente, **Todas as chamadas** por omissão, restringe a lista a um tipo de chamada;
- **Procurar** filtra pelo que escrever.

Cada entrada tem um ícone para o tipo de chamada — um auscultador de saída, ou um auscultador vermelho com um relógio para uma chamada perdida —, o nome do interlocutor (ou o número), e por baixo a data, o que aconteceu à chamada, a sua duração, o número e a conta. As chamadas recentes aparecem como *Ontem, 22:33* ou com o dia da semana, as mais antigas com a data.

| O que aconteceu à chamada | Aparece como |
| --- | --- |
| Falaram | **a sair** ou a entrar, e a duração, por exemplo *48 s* |
| Uma chamada a entrar não foi atendida | **Perdida** |
| Uma chamada que fez não foi estabelecida | **Não se concretizou** |

Selecione uma entrada para mostrar quatro botões à sua direita:

| Botão | Faz |
| --- | --- |
| Pessoa com um mais | Adiciona o número aos [Contactos](#contacts). |
| ▶ | Reproduz a gravação da chamada, se foi gravada. |
| Caixote do lixo | Elimina a entrada. |
| Auscultador | Liga de volta para o número. |

### Durante quanto tempo se guarda o registo {#how-long-the-log-is-kept}

Um registo de chamadas é uma prova, por isso nada é removido dele a não ser que o diga: por omissão, todas as chamadas são guardadas. O período de retenção e o botão **Esvaziar o registo de chamadas** estão nas [Definições de chamadas](../sip-accounts/calls.md#history).

As chamadas perdidas e recusadas também podem ser lidas através da [API REST local](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
