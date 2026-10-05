---
title: Pogas
sidebar_position: 4
description: "\"BLF pogas: vienas pieskāriena pogas, kas zvana uz jūsu IP centrāles iekšējo numuru un rāda, vai tas ir brīvs, zvana vai aizņemts.\""
---

Pogas ir programmatūras tālruņa **BLF** (Busy Lamp Field) taustiņi — tā pati funkcija, kas ir galda tālrunim IP centrālē. Poga zvana uz iekšējo numuru ar vienu pieskārienu. Poga, kas uzrauga savu līniju, rāda arī lampiņu: tālrunis jautā centrālei par šo iekšējo numuru un rāda, vai tas ir brīvs, zvana vai aizņemts, kā to dara sekretāres pults vai galda tālruņa programmējamie taustiņi.

BLF vajadzīgs centrāles atbalsts: centrālei jāziņo tālrunim iekšējā numura stāvoklis. Lielākā daļa IP centrāļu to dara. Ja jūsējā to nedara, lampiņa paliek pelēka, un poga joprojām zvana.

Pogas atrodas zem kontu žetoniem [galvenajā logā](/interface/main-window), un tās izveido sadaļā **Iestatījumi → Pogas**.

<Shot name="08_settings_buttons" alt="Iestatījumi → Pogas: divas pogas" />

Katra rinda ir poga: lampiņa, tās uzraksts un labajā pusē tās numurs un konts, kam tā pieder — piemēram, *212 · 201 Birojs*. **▲** un **▼** pārvieto pogu uz augšu vai uz leju; galvenā loga pogas seko šai secībai. **Pievienot** izveido jaunu.

## Lampiņa {#the-lamp}

Poga, kas uzrauga savu līniju, rāda lampiņu:

| Lampiņa | Līnija ir |
| --- | --- |
| Zaļa | brīva |
| Dzintarkrāsas | zvana |
| Sarkana | sarunā |
| Pelēka | nezināma: centrāle neziņo |

## Pogas pievienošana {#adding-a-button}

<Shot name="08b_button_add" alt="Jaunas pogas veidlapa" />

Nospiediet **Pievienot**; zem saraksta atveras veidlapa.

| Lauks | Ko ievadīt |
| --- | --- |
| **Numurs** | Numurs, uz kuru zvanīt. |
| **Līnija** | Konts, no kura veic zvanu. Izvēlieties to vispirms: lai rādītu lampiņu, tālrunis jautā šīs līnijas centrālei par šo numuru, tāpēc tam jāzina, kurai. |
| **Uzraksts** | Teksts uz pogas, piemēram, personas vārds. Uz pogas ir vieta tikai īsam uzrakstam; garāks tiek nogriezts. |
| **Rādīt, vai šī līnija ir aizņemta** | Slēdzis. Ieslēgts — pogai ir lampiņa. Izslēgts — tā tikai zvana. |

**Saglabāt** paliek pelēks, līdz veidlapa ir aizpildīta. **Atcelt** atmet veidlapu.

Programmas daļu, kas rāda pogas, var izslēgt sadaļā [Moduļi](/application/modules).
