---
title: Okno našepkávača
sidebar_position: 3
description: "Okno živého našepkávača: slová hovoru vo chvíli, keď zaznejú, a nápovedy, čo povedať ďalej, jeho tlačidlá a stĺpce, skúška na nahrávke a koľko to stojí."
---

**Našepkávač** počúva rozhovor počas jeho priebehu. Vo vlastnom okne zapisuje, čo hovorí každá strana, vo chvíli, keď to zaznie, a — keď sa zvolený pomocník pýta modelu — nápovedu, čo povedať ďalej. Oplatí sa mať ho otvorený počas predajného hovoru, pracovného pohovoru alebo ťažkého rozhovoru a s iným pomocníkom to isté okno ukazuje priebežný preklad druhej strany alebo len titulky.

<Shot name="46_prompter_running" alt="Našepkávač pri skúške predajného hovoru: vľavo prepis, vpravo nápovedy, najnovšia zopakovaná veľkým písmom nad nimi" />

Na obrázku pomocník **Námietky v hovore** počúva predajný hovor. Ľavý stĺpec je to, čo zaznelo, každý riadok so svojím časom a stranou; pravý je to, čo model navrhol ku každej replike zákazníka; najnovšia nápoveda je veľkým písmom zopakovaná nad oboma.

**Našepkávač** sa objaví v zozname v spodnej časti telefónu medzi **História** a **Nastavenia**, len čo sú splnené tri veci: našepkávač je povolený, existuje rozpoznávač, ktorý vie počúvať počas rozhovoru, a — pre pomocníkov, ktorí niečo navrhujú — jazykový model. To všetko sa nastavuje v [Nastavenia → Našepkávač](/ai-processing/prompter), kde je aj veľkosť textu a samotní pomocníci.

## Okno {#the-window}
<Shot name="44_prompter_window" alt="Okno našepkávača so zvoleným pomocníkom Námietky v hovore pred spustením" />

Hore je rozbaľovací zoznam **Pomocník** a napravo od neho tlačidlá:

| Tlačidlo | Čo robí |
| --- | --- |
| **Spustiť** / **Zastaviť** (trojuholník / štvorec) | *Začať počúvať tento hovor* — alebo prestať: *Povedané zostane na obrazovke*. Spustenie stlačené pred prijatím hovoru naň čaká a tlačidlo ho potom zruší. |
| **Nápoveda** (iskry) | *Ukončiť tu repliku a poradiť, čo povedať*, bez čakania na pauzu. Pri pomocníkovi, ktorý sa nepýta žiadneho modelu, je tlačidlo **Ukončiť repliku**: iba uzavrie repliku, aby ďalšia začala načisto. Je sivé, kým našepkávač nebeží. |
| **Vymazať** (kôš) | Po otázke zabudne, čo je na obrazovke. *Zmiznú oba stĺpce a s nimi hovor, z ktorého by bola postavená ďalšia nápoveda.* Zastavenie a opätovné spustenie nič nevymaže: zastavený a znova spustený rozhovor je zvyčajne ten istý rozhovor. |
| **Vyexportovať…** (disketa) | Zapíše oba stĺpce s časmi do súboru: ako text (`.txt`) alebo tabuľku (`.csv`), pod názvom, ktorý súboru dáte. |
| **Skúška…** (knižnica) | [Vyskúša pomocníka na nahrávke](#rehearsing-on-a-recording) namiesto hovoru. |

Rozbaľovací zoznam ukazuje [pomocníkov](/ai-processing/prompter#assistants) v poradí nastavenom v **Nastavenia → Našepkávač**. Počas behu našepkávača sa nedá zmeniť, no zostáva na očiach, takže vidíte, ktorý pomocník pracuje. Kým počúva, na karte hovoru stojí **Počúvame**.

Pod tlačidlami je pás s najnovším riadkom a pod ním dva stĺpce:

- **Prepis** — každý riadok so svojím časom a stranou;
- **Nápovedy** — každá nápoveda s časom repliky, na ktorú odpovedá. Pri pomocníkovi, ktorý sa nepýta žiadneho modelu, tento stĺpec nie je a prepis zaberá celú šírku.

V úzkom okne sú oba stĺpce pod sebou. Stĺpec sleduje, čo prichádza, kým sa v ňom neposuniete späť, a znova sleduje, keď sa vrátite na koniec. Kliknite na ľubovoľný riadok, aby zostal v páse; kliknite na najnovší alebo na špendlík v páse, aby ste znova sledovali. Pravé tlačidlo myši skopíruje riadok, nápovedu, celý prepis alebo všetky nápovedy. Potiahnite oddeľovač pod pásom, aby bol vyšší; veľkosti textu sa nastavujú v [Nastavenia → Našepkávač](/ai-processing/prompter#settings--prompter).

## Skúška na nahrávke {#rehearsing-on-a-recording}
Pomocníka možno vyskúšať bez toho, aby niekto bol pri telefóne. **Skúška…** zobrazí rozhovory z [knižnice](/interface/recordings), najnovšie ako prvé, a **Súbor v tomto počítači…** pre súbor `.mp3` alebo `.wav`.

<Shot name="45_prompter_rehearse" alt="Skúška…: rozhovory z knižnice a súbor v tomto počítači" />

Zvolená nahrávka sa objaví v prehrávači pod tlačidlami: prehrávanie a pauza, oba kanály vykreslené ako priebeh, do ktorého možno kliknúť, a čas. Stlačte **Spustiť**: nahrávka sa prehrá do našepkávača rovnakou cestou ako hovor, vlastným tempom — rýchlejšie prehrávanie sa zámerne neponúka, lebo našepkávač kŕmený jedenapolnásobnou rýchlosťou by robil pauzy, odpovedal a účtoval za rozhovor, ktorý nikto neviedol. Krížik vpravo je **Ukončiť skúšku**, späť k počúvaniu hovorov.

Nahrávka s jedným kanálom, napríklad importovaný súbor, sa počuje ako jedna miestnosť: *našepkávač počuje všetko ako protistranu*.

## Koľko to stojí a kam idú slová {#what-it-costs-and-where-the-words-go}
- Rozpoznávač sa účtuje za minútu živého zvuku a **Rozpoznávať aj moju stranu** to zdvojnásobí. Model sa účtuje za každú nápovedu. Oboje sa započítava do [mesačných stropov](/ai-processing/prompter#spending) našepkávača, nie do limitov Spracovania.
- Hlas druhej strany opúšťa počítač počas toho, ako hovorí, a smeruje k rozpoznávaču, ktorý ste zvolili. Rozpoznávač na vašom vlastnom počítači — **Vosk**, **WhisperLive** alebo **NVIDIA Riva** — ho nechá doma.
- To, čo ukazuje našepkávač, nie je nahrávka. Ak si to chcete ponechať, stlačte **Vyexportovať…**; ak chcete mať samotný rozhovor, [nahrajte hovor](/recordings) navyše.

## Keď sa nespustí {#when-it-does-not-start}
Okno povie v riadku pod tlačidlami, čo chýba.

| Okno hovorí | Čo urobiť |
| --- | --- |
| *Našepkávanie je vypnuté. Nastavenia → Našepkávač.* | Zaškrtnite **Povoliť používanie našepkávača**. |
| *Žiadny rozpoznávač tu nevie počúvať, kým niekto hovorí. Nastavenia → Prepis.* | Pridajte rozpoznávač s **Adresa pre našepkávača** a stlačte **Vyskúšať**. |
| *Nie je čo spustiť. Nastavenia → Našepkávač, a pridajte pomocníka.* | Všetci pomocníci boli zmazaní alebo vypnutí: pridajte jedného alebo stlačte **Obnoviť predvolené**. |
| *Druhá strana musí byť najprv upovedomená. Začnite tento rozhovor nahrávať, alebo zmeňte to, čo o súhlase hovorí Nastavenia → Nahrávanie.* | Spustite nahrávanie, ktoré prehrá oznámenie, alebo zmeňte nastavenie súhlasu. |
| *Rozpoznávač nezačal počúvať. Skontrolujte jeho živú adresu a model v Nastavenia → Prepis.* | Adresa pre našepkávača, model alebo kľúč je nesprávny. **Vyskúšať** na karte rozpoznávača povie, čo presne. |
| *Mesačný rozpočet na rozpoznávače je vyčerpaný.* | Zvýšte **Rozpoznávače, za mesiac** alebo počkajte na nový mesiac. |
| *Mesačný rozpočet na modely je vyčerpaný. Slová pokračujú; našepkávanie sa zastavilo.* | Zvýšte **Modely, za mesiac**. |
