---
title: Podešavanje SIP naloga
sidebar_position: 1
description: Povežite AI Softphone sa svojom IP centralom ili SIP operaterom u Podešavanja → Nalozi.
---

AI Softphone radi sa bilo kojom IP centralom ili SIP operaterom. Možete biti prijavljeni na onoliko naloga (linija) koliko ih imate, a svaki nalog ima sopstvena podešavanja.

Otvorite **Podešavanja → Nalozi**.

<Shot name="05_settings_accounts" alt="Podešavanja → Nalozi: dva naloga, oba registrovana" />

## Spisak naloga {#the-list-of-accounts}

Svaki nalog je red sa:

- **poljem za potvrdu** koje uključuje ili isključuje nalog;
- **tačkom** koja je zelena kada je nalog registrovan na centrali;
- nazivom, a ispod njega `username@server`;
- dugmetom **Prekini vezu** koje odjavljuje nalog sa centrale;
- dugmadima **▲** i **▼** koja pomeraju nalog gore ili dole po spisku. Značke naloga u [glavnom prozoru](../interface/main-window.md) prate isti redosled.

Dugme **Dodaj** gore desno dodaje nalog. Kliknite red da se ispod njega otvori njegov obrazac.

## Dodavanje naloga {#adding-an-account}

<Shot name="05d_account_add" alt="Obrazac novog naloga, prazan" />

Pritisnite **Dodaj**. Ispod spiska otvara se prazan obrazac sa kursorom u polju **Naziv (neobavezno)**. Popunite polja u nastavku, otvorite **Podešavanja servera** ako ih centrala zahteva i pritisnite **Sačuvaj**. Novi nalog počinje sa uobičajenim vrednostima: UDP na portu 5060, registracija se obnavlja svakih 300 sekundi.

## Obrazac naloga {#the-account-form}

<Shot name="05b_account_edit" alt="Obrazac naloga" />

| Polje | Šta upisati |
| --- | --- |
| **Naziv (neobavezno)** | Naziv prikazan na znački naloga u glavnom prozoru i uz njegove pozive. Ako je prazan, nalog se prikazuje kao `username@server`. |
| **Korisničko ime** | Korisničko ime ili interni broj koji vam je dala centrala ili operater. |
| **Lozinka** | Lozinka za njega. Kada se vratite u obrazac, polje ostaje prazno. Čuva se u skladištu ključeva računara, nikada u datoteci podešavanja. |
| **Adresa servera** | Adresa centrale ili operaterovog SIP servera, na primer `pbx.example.com`. |
| **Podešavanja servera** | Proširuje ređa podešavanja veze; pogledajte u nastavku. |
| **Javi se samostalno** | Pod **Javljanje**: javlja se na dolazne pozive na ovom nalogu a da ništa ne pritisnete. Podrazumevano isključeno. |

Pritisnite **Sačuvaj** da zadržite izmene. **Odustani** ih odbacuje, a **Obriši** uklanja nalog.

Kada je tačka pored naloga zelena, nalog je registrovan i to pokazuje i značka naloga u glavnom prozoru. Ako ostane siva ili crvena, otvorite [Dijagnostiku](../troubleshooting/diagnostics.md): kartica **SIP** prikazuje zahtev `REGISTER` i šta je server odgovorio.

## Podešavanja servera {#server-settings}

Većini centrala ovde ništa ne treba. Pritisnite **Podešavanja servera** da ih prikažete; isto dugme tada glasi **Sakrij podešavanja servera**.

<Shot name="05c_account_server_settings" alt="Podešavanja servera naloga, proširena" />

| Polje | Podrazumevano | Šta je |
| --- | --- | --- |
| **Korisnik za prijavu** | prazno | Ime prema kom centrala proverava lozinku, kada nije isto kao **Korisničko ime**. Na slici je interni broj `201`, a centrala ga proverava kao `kancelarija201`. |
| **Prenos** | UDP | Protokol veze sa serverom. Padajući meni. |
| **Port** | 5060 | Port servera. |
| **Izlazni posrednik** | prazno | Posrednik kroz koji mora da prođe svaki zahtev, ako ga operater daje. |
| **Registar** | prazno | Adresa na kojoj se registruje, ako to nije **Adresa servera**. |
| **Ponovna prijava, sekundi** | 300 | Koliko često telefon obnavlja registraciju. |
| **Tonovi tastature** | Tok zvuka | Kako se tonovi tastature šalju centrali. Padajući meni. Promenite ga samo ako centrala ne čuje tonove. |

Kodeci koje telefon nudi ne podešavaju se po nalogu; nalaze se u [Podešavanjima poziva](calls.md#audio-formats).
