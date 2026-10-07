---
title: Tveršana
sidebar_label: Tveršana no citām lietotnēm
sidebar_position: 1
description: "\"Tveršana ieraksta sarunu, kas notiek citā lietotnē — Zoom, Teams, Meet vai jebkurā citā —, tieši no datora.\""
---

**Tveršana** ir veids, kā AI Softphone ieraksta sarunu, kas notiek citā programmā, piemēram, sapulci Zoom, Teams vai Meet. Tā ieraksta tieši no datora, turot otru pusi un jūs atsevišķos kanālos, un beigās gaida tas pats atšifrējums un apkopojums kā zvanam.

Programma meklē sarunu, nevis lietotnes nosaukumu, tāpēc tā darbojas ar visu, kas sarunu rada.

Iestatījumu [Pārskats](../interface/settings-overview.md) to uzskaita sadaļā **Tveršana no citām lietotnēm** un sadala trīs soļos:

1. **Ieslēgt tveršanu** — [atļaut skaņas tveršanu](#turning-capture-on).
2. **Notvert sarunu** — [sākt un beigt](#capturing-a-conversation) ierakstu.
3. **Piešķirt tai nosaukumu** — [pārdēvēt](#giving-it-a-name) ierakstu.

## Tveršanas ieslēgšana {#turning-capture-on}

Tveršana ir izslēgta, līdz jūs to atļaujat. Atveriet **Iestatījumi → Tveršana**.

<Shot name="10_settings_capture" alt="Iestatījumi → Tveršana" />

| Iestatījums | Noklusējums | Ko tas dara |
| --- | --- | --- |
| **Atļaut skaņas tveršanu** | izslēgts | Ļauj programmai ierakstīt citu lietotņu skaņu. Kamēr tas izslēgts, nekas netiek tverts. |
| **Atgādināt man pateikt citiem par ierakstīšanu** | ieslēgts | Rāda atgādinājumu tveršanas laikā. Izvēles rūtiņa ir pelēka, līdz tveršana ir atļauta. |

:::caution
Tiek ierakstīts viss, ko dators atskaņo, ne tikai saruna. Šis tālrunis nevar paziņot par ierakstīšanu kāda cita sapulcē, tāpēc to pateikt ir jūsu ziņā.
:::

Programmas daļa, kas to dara, ir modulis **Tveršana**, *Citā lietotnē notiekošas sarunas ierakstīšana*. To var izslēgt sadaļā [Moduļi](../application/modules.md).

## Tveršanas sākšana {#starting-a-capture}

Kad tveršana ir atļauta, [galvenā loga](../interface/main-window.md#capture) apakšā redzams tās stāvoklis — **Tveršana · gatavs** — ar pogu **Ierakstīt** labajā pusē. Nospiediet **Ierakstīt**, lai sāktu manuāli.

### Automātiska sākšana {#automatic-start}

**Automātiska sākšana** izlemj, kas notiek, kad programma dzird sarunu citā lietotnē:

| Izvēle | Kas notiek |
| --- | --- |
| **Nekad** | Tveršana sākas tikai tad, kad nospiežat **Ierakstīt**. |
| **Vaicāt man** | Programma jautā, vai to ierakstīt. Noklusējums. |
| **Vienmēr** | Programma sāk ierakstīt pati. |

Sadaļā **Lietotnes ar savu atbildi** lietotnei var piešķirt savu atbildi — piemēram, *Vienmēr ierakstīt šo lietotni* no programmas uzdotā jautājuma.

*Vaicāšana neko neizmaksā: sekundes pirms jūsu atbildes jau ir saglabātas.*

### Pirms sākuma {#before-the-start}

Slīdnis **Pirms sākuma** nosaka, cik sekunžu skaņas pirms ieraksta sākuma tiek saglabāts, pēc noklusējuma **15 sekundes**. Tas ir paredzēts, lai nekas nepazustu, kamēr saruna tiek pamanīta: ieraksts, kas sākas, kad nospiežat **Ierakstīt** vai atbildat uz jautājumu, joprojām sākas ar vārdiem, kas skanēja pirms tam.

## Sarunas tveršana {#capturing-a-conversation}

Ierakstīšanas laikā galvenajā logā redzams sarkans punkts, ieraksta nosaukums (piemēram, **Sapulce lietotnē Zoom**), pagājušais laiks un abi kanāli kā viļņu formas.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Sapulces ierakstīšana" />

- **Apturēt ierakstīšanu** to beidz.
- Logs paliek redzams ierakstīšanas laikā un atgādina pateikt dalībniekiem, ka sapulce tiek ierakstīta.

### Ko rāda attēls {#what-the-picture-shows}

Vēl divi iestatījumi izvēlas, kā tiek zīmēts skaņas līmenis:

| Iestatījums | Noklusējums | Kur |
| --- | --- | --- |
| **Attēls galvenajā logā** | Vilnis | Abi kanāli tveršanas laikā. |
| **Attēls joslā telefona pakājē** | Divi līmeņi | Divas tievās joslas zem **Tveršana · gatavs**. |

### Pārbaude {#testing-it}

Sadaļā **Pārbaudīt** cilnē ir divas joslas: **Jūs** un **Otra puse**. *Augšējā josla kustas, kad jūs runājat, apakšējā — kad kaut kas skan.* Pirms svarīgas sapulces pasakiet vārdu un atskaņojiet jebkuru skaņu, lai redzētu, ka programma dzird abas puses.

## Nosaukuma piešķiršana {#giving-it-a-name}

Zīmulis blakus ieraksta nosaukumam ļauj to pārdēvēt ierakstīšanas laikā. Ieraksts, kam nepiešķīrāt nosaukumu, sarakstā redzams kā **Cita lietotne**.

## Kur nonāk ieraksts {#where-the-recording-goes}

Notverta saruna parādās [ierakstu logā](../interface/recordings.md) tāpat kā jebkura cita, ar savu ikonu — logu klausules vietā — un ar jūsu piešķirto virsrakstu vai **Cita lietotne**.

<Shot name="01_recordings" alt="Notvertas sapulces cilnē Ieraksti, apzīmētas ar loga ikonu" />

Tā tiek atšifrēta, apkopota, iedalīta kategorijā un apzīmēta ar birkām pēc tām pašām [kārtulām](../ai-processing/processing.md#rules) kā zvans. Notvertas sapulces atšifrējumā runātājs redzams kā **Cita lietotne** tur, kur zvanā būtu otras puses vārds; bibliotēkas **Meklēt** atrod arī tajā teikto.
