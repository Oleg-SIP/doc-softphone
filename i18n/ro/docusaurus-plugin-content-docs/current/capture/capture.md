---
title: Captare
sidebar_label: Captură din alte aplicații
sidebar_position: 1
description: Captarea înregistrează o conversație ținută în altă aplicație — Zoom, Teams, Meet sau oricare alta — direct de pe calculator.
---

**Captarea** este modul în care AI Softphone înregistrează o conversație care are loc în alt program, cum ar fi o ședință în Zoom, Teams sau Meet. Înregistrează direct de pe calculator, păstrând cealaltă parte și pe dumneavoastră pe canale separate, iar la final vă așteaptă aceeași transcriere și prelucrare ca pentru un apel.

Programul caută o conversație, nu numele unei aplicații, așa că funcționează cu orice aplicație în care are loc o conversație.

[Prezentarea generală](../interface/settings-overview.md) a setărilor include acest lucru în grupul **Captură din alte aplicații** și îl împarte în trei pași:

1. **Activați captura** — [permiteți captarea sunetului](#turning-capture-on).
2. **Capturați o conversație** — [porniți și opriți](#capturing-a-conversation) o înregistrare.
3. **Dați-i un nume** — [redenumiți](#giving-it-a-name) înregistrarea.

## Activarea captării {#turning-capture-on}

Captarea este oprită până când o permiteți. Deschideți **Setări → Captare**.

<Shot name="10_settings_capture" alt="Setări → Captare" />

| Setare | Implicit | Ce face |
| --- | --- | --- |
| **Permite captarea sunetului** | oprit | Permite programului să înregistreze sunetul altor aplicații. Cât timp este oprită, nu se captează nimic. |
| **Amintește-mi să le spun celorlalți despre înregistrare** | pornit | Afișează un memento cât timp are loc o captare. Caseta de bifat este gri până când captarea este permisă. |

:::caution
Se înregistrează tot ce redă calculatorul, nu doar conversația. Acest telefon nu poate anunța o înregistrare în ședința altcuiva, așa că anunțul cade în sarcina dumneavoastră.
:::

Partea programului care face acest lucru este modulul **Captare**, *înregistrarea unei conversații care se desfășoară în altă aplicație*. Poate fi oprit în [Module](../application/modules.md).

## Pornirea unei captări {#starting-a-capture}

După ce captarea este permisă, partea de jos a [ferestrei principale](../interface/main-window.md#capture) îi arată starea — **Captare · gata** — cu un buton **Înregistrează** în dreapta. Apăsați **Înregistrează** pentru a porni manual.

### Pornire automată {#automatic-start}

**Pornire automată** hotărăște ce se întâmplă când programul aude o conversație în altă aplicație:

| Opțiune | Ce se întâmplă |
| --- | --- |
| **Niciodată** | O captare pornește doar când apăsați **Înregistrează**. |
| **Întreabă-mă** | Programul întreabă dacă să o înregistreze. Implicit. |
| **Întotdeauna** | Programul începe să înregistreze singur. |

La **Aplicații cu răspuns propriu**, unei aplicații i se poate da un răspuns propriu — de exemplu *Înregistrează întotdeauna această aplicație*, din întrebarea pe care o pune programul.

*Întrebarea nu costă nimic: secundele dinaintea răspunsului sunt deja păstrate.*

### Înainte de început {#before-the-start}

Glisorul **Înainte de început** stabilește câte secunde de sunet se păstrează dinaintea pornirii unei înregistrări, implicit **15 secunde**. Există pentru ca nimic să nu se piardă cât timp conversația este detectată: o înregistrare care pornește când apăsați **Înregistrează** sau când răspundeți la întrebare începe totuși cu cuvintele rostite înainte.

## Capturarea unei conversații {#capturing-a-conversation}

Cât timp înregistrează, fereastra principală arată un punct roșu, numele înregistrării (de exemplu **Ședință în Zoom**), timpul scurs și cele două canale ca forme de undă.

<Shot src="https://ai-softphone.com/screenshots/macos/en/light/capture.png" alt="Înregistrarea unei ședințe" />

- **Oprește înregistrarea** o încheie.
- Fereastra rămâne vizibilă cât timp înregistrează și vă amintește să le spuneți participanților că ședința este înregistrată.

### Ce arată imaginea {#what-the-picture-shows}

Încă două setări aleg cum este desenat nivelul sunetului:

| Setare | Implicit | Unde |
| --- | --- | --- |
| **Imagine în fereastra principală** | Undă | Cele două canale cât timp are loc o captare. |
| **Imagine în bara de la piciorul telefonului** | Două niveluri | Cele două bare subțiri de sub **Captare · gata**. |

### Verificarea {#testing-it}

La **Verifică**, fila are două bare: **Dumneavoastră** și **Cealaltă parte**. *Bara de sus se mișcă atunci când vorbiți, cea de jos când se redă ceva.* Înaintea unei ședințe importante, spuneți un cuvânt și redați un sunet oarecare ca să vedeți că programul aude ambele părți.

## Denumirea înregistrării {#giving-it-a-name}

Creionul de lângă numele înregistrării vă permite să o redenumiți în timp ce se desfășoară. O înregistrare pe care nu ați denumit-o apare în listă ca **Altă aplicație**.

## Unde ajunge înregistrarea {#where-the-recording-goes}

O conversație captată apare în [fereastra Înregistrări](../interface/recordings.md) ca oricare alta, cu pictograma ei proprie, o fereastră în loc de receptor, și cu titlul pe care i l-ați dat sau **Altă aplicație**.

<Shot name="01_recordings" alt="Ședințe captate în fila Înregistrări, marcate cu o pictogramă de fereastră" />

Este transcrisă, rezumată, încadrată într-o categorie și etichetată prin aceleași [reguli](../ai-processing/processing.md#rules) ca un apel. În transcrierea unei ședințe captate, vorbitorul apare ca **Altă aplicație** acolo unde un apel ar arăta numele celeilalte părți; funcția **Caută** a bibliotecii găsește și ce s-a spus în ea.
