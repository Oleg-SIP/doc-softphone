---
title: Moduler
sidebar_position: 1
description: Delarna som programmet består av och hur var och en stängs av.
---

**Inställningar → Moduler** visar programmets delar. *Allt den här telefonen gör är en av dessa.* Att stänga av en slår igenom direkt och låter det den redan sparat ligga kvar.

<Shot name="19_settings_modules" alt="Inställningar → Moduler" />

Varje modul har en kryssruta, ett namn, en rad om vad den gör och till höger dess tillstånd — **Går** för en modul som är på. Kryssrutorna för de två moduler som resten är beroende av, **Program** och **Lokal databas**, är grå: de kan inte stängas av.

<Shot name="19b_settings_modules_scrolled" alt="Inställningar → Moduler: resten av listan" />

| Modul | Vad den är |
| --- | --- |
| **Program** | Huvudfönstret, inställningarna, ikonerna och så vidare. |
| **Lokal databas** | Databasen som används som lokal lagring. |
| **Webbläsargränssnitt** | Vissa funktioner i en lokal webbläsare: sidorna i [REST-API:et](/integration/rest-api). |
| **Knappar** | [Knapparna](/sip-accounts/buttons) bredvid nummerfältet och lamporna på dem. |
| **Fångst** | [Inspelning av ett samtal](/capture/) som pågår i ett annat program. |
| **Diagnostik** | SIP-spåret, mediestatistiken och räknarna: [Diagnostik](/troubleshooting/diagnostics). |
| **Ordlistor** | Kategorier, etiketter och signaler — koderna som allt annat pekar på: [Ordlistor](/ai-processing/dictionaries). |
| **Katalog** | Adressboken: [Kontakter](/interface/contacts-history). |
| **Integration** | Det lokala API:et och webhookar: [Integration](/integration/rest-api). |
| **Medielagring** | Biblioteket med samtal och hur länge de sparas: [Inspelningar](/interface/recordings). |
| **Bearbetning** | Prompter och reglerna som utlöser dem: [Bearbetning](/ai-processing/processing). |
| **Inspelning** | Inspelning av samtal, och att tala om det för den andra parten: [Inspelningar](/recordings). |
| **Telefoni** | SIP, konton, samtal, nummerfältet och samtalshistoriken. |
| **Transkription** | Igenkännare, kön som driver dem och utskrifterna de gör: [Transkription](/ai-processing/transcription). |

Stäng av en modul så är den borta: inga inställningar för den, ingen menypost, ingenting av den körs. Stäng av en modul du inte har användning för — till exempel **Integration** på en dator där ingenting annat pratar med telefonen — eller behåll en telefon som bara är en telefon, när det är allt en arbetsplats behöver. Paketet är detsamma i båda fallen: det finns ingenting att köpa och ingenting att låsa upp.
