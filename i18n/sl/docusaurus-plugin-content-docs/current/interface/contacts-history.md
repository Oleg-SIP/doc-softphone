---
title: Stiki in zgodovina
sidebar_position: 3
description: Imenik in dnevnik klicev, poleg telefona.
---

**Stiki** in **Zgodovina** se odpreta kot dva zavihka desno od telefona, tako da lahko številko poiščete, medtem ko govorite.

## Stiki {#contacts}

<Shot name="03_contacts" alt="Zavihek Stiki" />

- **Išči** filtrira seznam med tipkanjem.
- **Dodaj** ustvari stik.
- Vsak stik je naveden z imenom, pod njim pa s številko in računom, prek katerega se stik kliče, na primer *231 · 201 Pisarna*.

Dohodni klic z znane številke pokaže ime stika, prav tako seznama nedavnih klicev in dnevnik klicev — tako deluje prepoznavanje klicatelja.

### Urejanje stika {#editing-a-contact}

<Shot name="03b_contact_edit" alt="Stik, odprt za urejanje" />

Izberite stik in desno v njegovi vrstici se pokažeta svinčnik in slušalka. Slušalka pokliče stik; svinčnik odpre obrazec pod vrstico:

| Polje | Kaj vpisati |
| --- | --- |
| **Ime** | Kako je stik prikazan. |
| **Številka** | Številka, ki se pokliče. |
| Spustni seznam pod **Številka** | Račun, prek katerega se stik kliče. |

**Shrani** obdrži spremembe, **Prekliči** jih zavrže, **Izbriši** pa odstrani stik.

## Zgodovina {#history}

<Shot name="21_history" alt="Zavihek Zgodovina" />

Dnevnik klicev, od najnovejših. Na vrhu:

- spustni seznam, privzeto **Vsi klici**, zoži seznam na eno vrsto klica;
- **Išči** filtrira po tem, kar vpišete.

Vsak vnos ima ikono vrste klica — odhodno slušalko ali rdečo slušalko z uro za zgrešen klic —, ime druge strani (ali številko), pod njim pa datum, izid klica, trajanje, številko in račun. Nedavni klici so prikazani kot *Včeraj, 22:33* ali z dnevom v tednu, starejši z datumom.

| Izid klica | Prikazano kot |
| --- | --- |
| Pogovarjali ste se | **odhodni** ali dohodni in trajanje, na primer *48 s* |
| Dohodni klic ni bil sprejet | **Zgrešen** |
| Klic, ki ste ga opravili, ni bil vzpostavljen | **Ni šlo skozi** |

Izberite vnos in desno se pokažejo štirje gumbi:

| Gumb | Kaj naredi |
| --- | --- |
| Oseba s plusom | Doda številko med [Stike](#contacts). |
| ▶ | Predvaja posnetek klica, če je bil posnet. |
| Koš | Izbriše vnos. |
| Slušalka | Pokliče številko nazaj. |

### Kako dolgo se dnevnik hrani {#how-long-the-log-is-kept}

Dnevnik klicev je dokaz, zato se iz njega nič ne odstrani, dokler tega ne rečete: privzeto se hrani vsak klic. Doba hrambe in gumb **Izprazni zgodovino klicev** sta v [Nastavitvah klicev](../sip-accounts/calls.md#history).

Zgrešene in zavrnjene klice je mogoče prebrati tudi prek [krajevnega REST API-ja](../integration/rest-api.md) (`/history?missed=true`, `/history?declined=true`).
