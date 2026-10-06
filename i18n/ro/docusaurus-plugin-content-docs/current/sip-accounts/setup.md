---
title: Configurarea unui cont SIP
sidebar_position: 1
description: Conectați AI Softphone la centrala IP sau la furnizorul SIP în Setări → Conturi.
---

AI Softphone funcționează cu orice centrală IP sau furnizor SIP. Puteți fi conectat la câte conturi (linii) aveți, iar fiecare cont are propriile setări.

Deschideți **Setări → Conturi**.

<Shot name="05_settings_accounts" alt="Setări → Conturi: două conturi, ambele înregistrate" />

## Lista conturilor {#the-list-of-accounts}

Fiecare cont este un rând cu:

- o **casetă de bifat** care pornește sau oprește contul;
- un **punct** care este verde când contul este înregistrat la centrală;
- numele și, sub el, `username@server`;
- un buton **Deconectează** care deconectează contul de la centrală;
- butoanele **▲** și **▼**, care mută contul mai sus sau mai jos în listă. Insignele conturilor din [fereastra principală](../interface/main-window.md) urmează aceeași ordine.

Butonul **Adaugă** din dreapta sus adaugă un cont. Faceți clic pe un rând ca să-i deschideți formularul dedesubt.

## Adăugarea unui cont {#adding-an-account}

<Shot name="05d_account_add" alt="Formularul unui cont nou, gol" />

Apăsați **Adaugă**. Sub listă se deschide un formular gol, cu cursorul în **Nume (opțional)**. Completați câmpurile de mai jos, deschideți **Setările serverului** dacă centrala le cere și apăsați **Salvează**. Un cont nou pornește cu valorile obișnuite: UDP pe portul 5060, înregistrare reînnoită la fiecare 300 de secunde.

## Formularul contului {#the-account-form}

<Shot name="05b_account_edit" alt="Formularul unui cont" />

| Câmp | Ce introduceți |
| --- | --- |
| **Nume (opțional)** | Numele afișat pe insigna contului în fereastra principală și pe apelurile lui. Dacă rămâne gol, contul este afișat ca `username@server`. |
| **Nume de utilizator** | Numele de utilizator sau numărul de interior primit de la centrală sau de la furnizor. |
| **Parolă** | Parola pentru acesta. Câmpul rămâne gol când reveniți la formular. Parola este păstrată în depozitul de chei al calculatorului, niciodată într-un fișier de setări. |
| **Adresa serverului** | Adresa centralei sau a serverului SIP al furnizorului, de exemplu `pbx.example.com`. |
| **Setările serverului** | Extinde setările mai puțin obișnuite ale conexiunii; vedeți mai jos. |
| **Răspunde automat** | În secțiunea **Răspuns**: răspunde la apelurile primite pe acest cont fără să apăsați nimic. Implicit este oprit. |

Apăsați **Salvează** ca să păstrați modificările. **Anulează** renunță la ele, iar **Șterge** elimină contul.

Când punctul de lângă cont este verde, contul este înregistrat, iar insigna contului din fereastra principală arată și ea acest lucru. Dacă rămâne gri sau roșu, deschideți [Diagnostic](../troubleshooting/diagnostics.md): fila **SIP** arată cererea `REGISTER` și ce a răspuns serverul.

## Setările serverului {#server-settings}

Majoritatea centralelor nu au nevoie de nimic aici. Apăsați **Setările serverului** ca să le afișați; același buton devine acum **Ascunde setările serverului**.

<Shot name="05c_account_server_settings" alt="Setările serverului unui cont, extinse" />

| Câmp | Implicit | Ce este |
| --- | --- | --- |
| **Utilizator de autentificare** | gol | Numele pentru care centrala verifică parola, atunci când nu este același cu **Nume de utilizator**. În imagine, interiorul este `201`, iar centrala îl autentifică drept `birou201`. |
| **Transport** | UDP | Protocolul conexiunii cu serverul. O listă derulantă. |
| **Port** | 5060 | Portul serverului. |
| **Proxy de ieșire** | gol | Un proxy prin care trebuie să treacă fiecare cerere, dacă furnizorul vă oferă unul. |
| **Registrar** | gol | Adresa la care se face înregistrarea, dacă nu este **Adresa serverului**. |
| **Reînregistrare, secunde** | 300 | Cât de des își reînnoiește telefonul înregistrarea. |
| **Tonuri de tastatură** | Flux audio | Cum sunt trimise centralei tonurile tastaturii. O listă derulantă. Schimbați-o doar dacă centrala nu aude tonurile. |

Codecurile oferite de telefon nu se configurează pe cont; ele se află în [Setările apelurilor](calls.md#audio-formats).
