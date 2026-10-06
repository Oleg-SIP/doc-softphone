---
title: Webhookuri
sidebar_position: 1
description: Faceți ca telefonul să trimită CRM-ului sau altui sistem o cerere când un apel începe, se schimbă sau se încheie — cu cererile exacte ale unui apel primit și ale unui apel efectuat.
---

Un webhook este o cerere pe care telefonul o trimite la o adresă aleasă de dumneavoastră de fiecare dată când se întâmplă ceva cu un apel. Așa poate un CRM să deschidă fișa clientului înainte de al doilea țârâit, să consemneze un apel când se încheie sau să aprindă un indicator pe un panou de perete. Un webhook nu are nevoie de reguli de firewall pentru traficul de intrare: telefonul este cel care se conectează la dumneavoastră. Deoarece cererile sunt trimise de pe stația de lucru, adresa trebuie să fie accesibilă doar de pe acel calculator — o adresă internă `http://crm.local/calls` funcționează la fel de bine ca o adresă HTTPS publică.

După instalare, webhookurile sunt **oprite** până când le porniți. Funcționează împreună cu [API-ul REST local](/integration/rest-api): un eveniment spune că s-a schimbat ceva, iar API-ul oferă detaliile actuale.

## Pornirea lor {#turning-them-on}

Deschideți **Setări → Integrare**. **Webhookuri** este prima secțiune a filei.

<Shot name="24_webhooks" alt="Setări → Integrare → Webhookuri, cu adresa https://crm.local/calls" />

1. Bifați **Anunțarea altui sistem despre apeluri**. *Pentru fiecare eveniment bifat mai jos se trimite o cerere.*
2. Introduceți **Adresă** care trebuie să primească evenimentele, de exemplu `https://crm.local/calls`.
3. Alegeți **Metodă**: **POST** (implicit) sau **GET**.
4. La **Evenimente**, bifați ce să se trimită: **Un apel nou**, **Un apel care se încheie**, **Un apel care își schimbă starea**.
5. Opțional, la **Autorizare**, setați un antet pe care destinatarul îl poate verifica: **Numele antetului** (se sugerează `Authorization`) și **Valoarea antetului**. Valoarea este păstrată în depozitul de chei al calculatorului, niciodată într-un fișier de setări; după salvare, câmpul afișează *Salvat — scrieți ca să îl înlocuiți*.
6. Apăsați **Trimite un eveniment de probă** ca să vedeți dacă ajunge. Trimite un eveniment pentru un apel care nu a avut loc niciodată, cu aceleași antete ca unul real. Înregistrați cererea brută și construiți destinatarul după ce trimite efectiv versiunea dumneavoastră.

Partea programului care trimite cererile este modulul **Integrare**; poate fi oprit în [Module](/application/modules).

## Evenimentele {#the-events}

| Bifat ca | Eveniment | Se trimite când |
| --- | --- | --- |
| **Un apel nou** | `call-started` | Un apel primit începe să sune sau se efectuează un apel. |
| **Un apel care își schimbă starea** | `call-state-changed` | Se schimbă `state` al apelului: se răspunde la el, este pus în așteptare sau reluat de oricare parte, ori intră într-o conferință sau iese din ea. Oprirea microfonului nu îl declanșează. |
| **Un apel care se încheie** | `call-ended` | Apelul s-a încheiat. |

Fiecare eveniment poate fi bifat separat. O fișă de client care apare pe ecran are nevoie doar de primul; un jurnal de apeluri doar de ultimul. `call-started` este trimis primul și ar trebui tratat repede.

## Cum arată cererea {#what-the-request-looks-like}

Cu adresa `https://crm.local/calls` și metoda **POST**, telefonul trimite următoarele. Corpul este JSON, iar antetul este cel setat la **Autorizare**:

```http
POST /calls HTTP/1.1
Host: crm.local
Authorization: Bearer my-secret-token
Content-Type: application/json
User-Agent: ai-softphone/1.0.1-macos-dmg
```

`User-Agent` conține versiunea programului și modul în care a fost instalat.

## Un apel primit, eveniment cu eveniment {#an-incoming-call-event-by-event}

Un apel de la interiorul `1020` către contul `1002` sună, se răspunde la el, iar persoana care a răspuns închide patru secunde mai târziu. Cu toate cele trei evenimente bifate, destinatarul primește trei cereri, una după alta. Toate poartă același `id` și același `seance_id`.

### 1. Sună: `call-started` {#1-it-rings-call-started}

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021263333",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791021263333",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ringing-in",
  "uri": "sip:1020@pbx.example.com"
}
```

Acesta este momentul să căutați apelantul după `number` și să afișați fișa clientului. `state` este `ringing-in`, iar `duration_s` este `0`.

### 2. Se răspunde: `call-state-changed` {#2-it-is-answered-call-state-changed}

Aproximativ trei secunde mai târziu:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021266126",
  "dialed": "",
  "direction": "in",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791021266131",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` este acum `active`, iar `callstate_ts` s-a mutat la momentul schimbării, în timp ce `callstart_ts` rămâne unde era.

### 3. Se încheie: `call-ended` {#3-it-ends-call-ended}

După patru secunde de convorbire:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791021263333",
  "callstate_ts": "1791021270400",
  "dialed": "",
  "direction": "in",
  "duration_s": "4",
  "event": "call-ended",
  "event_ts": "1791021270406",
  "id": "5b1c0a6e-0c7e-4c53-9f57-2c4f1f0d6a11",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "local-hangup",
  "seance_id": "e3f0b9f4-1a2c-4d8b-9c35-6a7b8c9d0e1f",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` este `ended`, `duration_s` este durata convorbirii, iar `reason` spune cine a încheiat-o: aici `local-hangup`, pentru că a închis persoana de la acest telefon.

## Un apel efectuat, eveniment cu eveniment {#an-outgoing-call-event-by-event}

Același interior este sunat de pe contul `1002`: persoana formează `1020`, telefonul sună, cealaltă parte răspunde, vorbește șapte secunde și închide. Destinatarul primește patru cereri, cu una mai mult decât pentru un apel primit, pentru că un apel efectuat are o stare proprie cât timp sună la celălalt capăt.

### 1. Se formează: `call-started` {#1-it-is-dialled-call-started}

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-started",
  "event_ts": "1791023883072",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "dialing",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

`direction` este `out`, `state` este `dialing`, iar `dialed` conține numărul așa cum a fost format. Telefonul nu știe încă numele celeilalte părți, așa că `name` este gol.

### 2. Sună la celălalt capăt: `call-state-changed` {#2-it-rings-at-the-other-end-call-state-changed}

O jumătate de secundă mai târziu:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023883591",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023883591",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ringing-out",
  "uri": "sip:1020@pbx.example.com:5060"
}
```

`state` este `ringing-out`.

### 3. Cealaltă parte răspunde: `call-state-changed` {#3-the-other-side-answers-call-state-changed}

Patru secunde după aceea:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023887072",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "0",
  "event": "call-state-changed",
  "event_ts": "1791023887076",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "none",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "active",
  "uri": "sip:1020@pbx.example.com"
}
```

`state` este `active`. `name` este acum completat, iar `uri` este adresa celeilalte părți așa cum a raportat-o răspunsul. `duration_s` este tot `0`: se numără din acest moment.

### 4. Se încheie: `call-ended` {#4-it-ends-call-ended}

Șapte secunde mai târziu, cealaltă parte închide:

```json
{
  "account": "1002@pbx.example.com",
  "account_id": "0d7a4c52-6f2e-4a51-8f46-7d9a3e1b2c90",
  "answered_by": "no",
  "callstart_ts": "1791023883072",
  "callstate_ts": "1791023894781",
  "dialed": "1020",
  "direction": "out",
  "duration_s": "7",
  "event": "call-ended",
  "event_ts": "1791023894789",
  "id": "9a3e5c71-2d48-4b6f-8e10-3c5f7a1b9d24",
  "name": "Jack Russel",
  "number": "1020",
  "reason": "remote-hangup",
  "seance_id": "c47d2e90-6b13-4f85-a2d7-18e9b0f35a6c",
  "state": "ended",
  "uri": "sip:1020@pbx.example.com"
}
```

`duration_s` este `7`, iar `reason` este `remote-hangup`, pentru că apelul a fost încheiat de cealaltă parte. Când închideți chiar dumneavoastră, valoarea este `local-hangup`, ca la apelul primit de mai sus.

### Stările, una lângă alta {#the-states-side-by-side}

| | Apel primit | Apel efectuat |
| --- | --- | --- |
| `call-started` | `ringing-in` | `dialing` |
| `call-state-changed` | `active` | `ringing-out`, apoi `active` |
| `call-ended` | `ended` | `ended` |

## Câmpurile {#the-fields}

**Fiecare valoare este un șir de caractere**, inclusiv numerele și marcajele de timp: `"duration_s": "42"`. Un moment necunoscut este un șir gol. Numele urmează o singură convenție: `_id` este un identificator, `_ts` este timp Unix în milisecunde (UTC), `_s` este o durată în secunde — la fel ca în API-ul REST, unde valorile sunt numere JSON.

| Câmp | Semnificație |
| --- | --- |
| `event` | `call-started`, `call-state-changed` sau `call-ended`. |
| `id` | Apelul: același UUID ca în `GET /calls` și `/calls/{id}/…` și același în fiecare eveniment al apelului. |
| `seance_id` | Conversația căreia îi aparține apelul; vedeți [mai jos](#one-conversation-across-transfers). |
| `direction` | `in` sau `out`. |
| `state` | Aceleași valori ca în `GET /calls`: `dialing`, `ringing-out`, `ringing-in`, `active`, `hold` (pus în așteptare de acest telefon), `onhold` (pus în așteptare de cealaltă parte), `conference` sau `ended`. |
| `number` | Numărul celeilalte părți. Potriviți înregistrările din CRM după acest câmp. |
| `name` | Numele celeilalte părți, din Contacte; poate fi gol și poate fi completat mai târziu în timpul apelului, ca în apelul efectuat de mai sus. |
| `uri` | Adresa SIP a celeilalte părți. |
| `dialed` | Cifrele formate, pentru un apel efectuat; gol pentru un apel primit. |
| `account`, `account_id` | Linia pe care se află apelul: `username@server` și identificatorul din `GET /accounts`. |
| `event_ts` | Când s-a produs evenimentul. |
| `callstart_ts` | Când a aflat telefonul prima dată de apel. |
| `callstate_ts` | Când a intrat apelul în `state` actual. |
| `duration_s` | Durata convorbirii în secunde, de la răspuns la închidere. Se setează la `call-ended` pentru un apel la care s-a răspuns; în rest `0`. |
| `reason` | Cum s-a încheiat apelul: `local-hangup`, `remote-hangup`, `busy`, `no-answer`, `cancelled`…; până atunci `none`. |
| `answered_by` | `no` dacă a răspuns o persoană; altfel, ce anume a răspuns. |

## O singură conversație peste transferuri {#one-conversation-across-transfers}

`seance_id` grupează apelurile care alcătuiesc o singură conversație. Un apel efectuat sau primit de la zero începe una nouă. Un apel creat printr-un transfer, un apel care înlocuiește altul, o consultare despre un apel și fiecare apel unit într-o conferință păstrează `seance_id` al apelului din care provin.

Între telefoane, acesta circulă în antetul SIP `X-Seance-Id`: când un apel este transferat unui coleg care folosește și el AI Softphone, iar centrala transmite antetul mai departe, ambele stații de lucru raportează același `seance_id`.

## GET în loc de POST {#get-instead-of-post}

**GET** este pentru destinatarii care nu pot primi un corp de cerere, cum ar fi un CRM mai vechi sau o punte prin script. Aceleași câmpuri sunt trimise atunci ca parametri de interogare.

Cu **GET**, adresa poate fi un șablon: fiecare `[field]` este înlocuit cu valoarea acelui câmp, codificată procentual. De exemplu:

```text
https://crm.local/pop?phone=[number]&call=[id]
```

Substituenții folosesc numele câmpurilor de mai sus. Șabloanele salvate cu numele anterioare (`[accountId]`, `[at]`, `[duration]`, `[answeredBy]`, `[seanceId]`) funcționează în continuare.

## Cum sunt livrate evenimentele {#how-the-events-are-delivered}

| Comportament | Ce înseamnă pentru dumneavoastră |
| --- | --- |
| Evenimentele sunt puse într-o coadă, nu trimise din apelul însuși | Un destinatar lent nu întârzie niciodată sunetul de apel, apelurile sau transferurile. |
| O coadă plină aruncă evenimente | Dacă destinatarul nu mai răspunde, evenimentele se pierd, dar telefonul continuă să funcționeze. Urmăriți `webhooks_dropped_total`. |
| Livrările refuzate și cele care nu ajung sunt numărate | Dacă `webhooks_failed_total` crește în timp ce `webhooks_delivered_total` stă pe loc, problema este la destinatar. |
| Evenimentele sosesc în ordine | Apelul a început, apoi schimbările de stare, apoi apelul s-a încheiat. Pentru a ordona evenimentele stocate, folosiți `callstate_ts`, nu momentul sosirii lor. |
| Cel puțin o dată | Același eveniment poate veni de două ori. `id`, `event` și `callstate_ts` împreună identifică un eveniment: faceți ca handlerul să sară peste unul pe care l-a văzut deja. |

## Primirea evenimentelor {#receiving-the-events}

Singura regulă pentru un destinatar: **răspundeți imediat cu `200` și faceți treaba după aceea.** Un destinatar lent nu încetinește telefonul, dar umple coada, iar o coadă plină aruncă evenimente.

De exemplu, în Node.js cu Express:

```javascript
const express = require("express");
const app = express();
app.use(express.json());

const SECRET = process.env.SOFTPHONE_SECRET;   // the Header value from Settings

app.all("/calls", (req, res) => {
  if (req.get("Authorization") !== SECRET) return res.sendStatus(401);

  // POST sends a JSON body, GET sends query parameters
  const call = Object.keys(req.body || {}).length ? req.body : req.query;
  res.sendStatus(200);                          // answer first

  setImmediate(() => {                          // then do the work
    if (call.event === "call-started" && call.direction === "in") {
      openCustomerCard(call.number, call.name); // your code
    }
    if (call.event === "call-ended") {
      logCall(call.id, Number(call.duration_s), call.reason); // your code
    }
  });
});

app.listen(8080);
```

Pentru a consemna rezultatul unui apel — la care s-a răspuns, pierdut, respins — luați intrarea cu același `seance_id` și `number` din `GET /history?limit=20` al [API-ului REST](/integration/rest-api#call-history-get-history). Când serviciul dumneavoastră repornește după o pauză, citiți `GET /history?limit=200` și stocați ce ați pierdut: webhookurile pentru timp real, istoricul pentru a umple golurile.

Ca să vedeți cererile înainte ca CRM-ul să fie gata, îndreptați **Adresă** către un inspector online de cereri și apăsați **Trimite un eveniment de probă**.

## Când nu sosește nimic {#when-nothing-arrives}

| Simptom | Ce să verificați |
| --- | --- |
| Niciun webhook | Apăsați **Trimite un eveniment de probă**. Dacă ajunge, evenimentele de care aveți nevoie nu sunt bifate; dacă nu, adresa este greșită sau nu este accesibilă de pe stația de lucru. |
| `webhooks_failed_total` crește continuu | Destinatarul refuză cererile sau nu poate fi contactat. Verificați-i jurnalul și dacă răspunde la o cerere simplă de pe stația de lucru. |
| `webhooks_dropped_total` este peste zero | Destinatarul a fost prea lent prea mult timp, iar coada s-a umplut. Răspundeți mai întâi cu `200`, apoi prelucrați. |
| Același eveniment de două ori | Este de așteptat la livrarea de tip cel puțin o dată. Tratați evenimentele cu același `id`, `event` și `callstate_ts` ca pe unul singur. |
