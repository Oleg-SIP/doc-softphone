---
title: Okno našeptávače
sidebar_position: 3
description: "Okno živého našeptávače: slova hovoru ve chvíli, kdy zazní, a nápovědy, co říct dál, jeho tlačítka a sloupce, zkouška na nahrávce a kolik to stojí."
---

**Našeptávač** poslouchá rozhovor v jeho průběhu. Ve vlastním okně zapisuje, co říká každá strana, ve chvíli, kdy to zazní, a — když se zvolený pomocník ptá modelu — nápovědu, co říct dál. Vyplatí se ho mít otevřený při obchodním hovoru, pracovním pohovoru nebo těžkém rozhovoru a s jiným pomocníkem totéž okno ukazuje průběžný překlad druhé strany nebo jen titulky.

<Shot name="46_prompter_running" alt="Našeptávač při zkoušce obchodního hovoru: vlevo přepis, vpravo nápovědy, nejnovější zopakovaná velkým písmem nad nimi" />

Na obrázku pomocník **Námitky v hovoru** poslouchá obchodní hovor. Levý sloupec je to, co zaznělo, každý řádek se svým časem a stranou; pravý je to, co model navrhl ke každé replice zákazníka; nejnovější nápověda je velkým písmem zopakovaná nad oběma.

**Našeptávač** se objeví v seznamu ve spodní části telefonu mezi **Historie** a **Nastavení**, jakmile jsou splněny tři věci: našeptávač je povolený, existuje rozpoznávač, který umí poslouchat během rozhovoru, a — pro pomocníky, kteří něco navrhují — jazykový model. To vše se nastavuje v [Nastavení → Našeptávač](/ai-processing/prompter), kde je i velikost textu a samotní pomocníci.

## Okno {#the-window}
<Shot name="44_prompter_window" alt="Okno našeptávače se zvoleným pomocníkem Námitky v hovoru před spuštěním" />

Nahoře je rozbalovací seznam **Pomocník** a napravo od něj tlačítka:

| Tlačítko | Co dělá |
| --- | --- |
| **Spustit** / **Zastavit** (trojúhelník / čtverec) | *Začít poslouchat tento hovor* — nebo přestat: *Řečené zůstane na obrazovce*. Spuštění stisknuté před přijetím hovoru na něj počká a tlačítko ho pak zruší. |
| **Nápověda** (jiskry) | *Ukončit zde repliku a poradit, co říct*, bez čekání na pauzu. U pomocníka, který se neptá žádného modelu, je tlačítko **Ukončit repliku**: jen uzavře repliku, aby další začala načisto. Je šedé, dokud našeptávač neběží. |
| **Vymazat** (koš) | Po dotazu zapomene, co je na obrazovce. *Zmizí oba sloupce a s nimi hovor, ze kterého by byla postavena další nápověda.* Zastavení a nové spuštění nic nevymaže: zastavený a znovu spuštěný rozhovor je obvykle tentýž rozhovor. |
| **Vyexportovat…** (disketa) | Zapíše oba sloupce s časy do souboru: jako text (`.txt`) nebo tabulku (`.csv`), pod názvem, který souboru dáte. |
| **Zkouška…** (knihovna) | [Vyzkouší pomocníka na nahrávce](#rehearsing-on-a-recording) místo na hovoru. |

Rozbalovací seznam ukazuje [pomocníky](/ai-processing/prompter#assistants) v pořadí nastaveném v **Nastavení → Našeptávač**. Během běhu našeptávače ho nelze změnit, ale zůstává na očích, takže vidíte, který pomocník pracuje. Dokud poslouchá, stojí na kartě hovoru **Posloucháme**.

Pod tlačítky je pruh s nejnovějším řádkem a pod ním dva sloupce:

- **Přepis** — každý řádek se svým časem a stranou;
- **Nápovědy** — každá nápověda s časem repliky, na kterou odpovídá. U pomocníka, který se neptá žádného modelu, tento sloupec není a přepis zabírá celou šířku.

V úzkém okně stojí oba sloupce pod sebou. Sloupec sleduje, co přichází, dokud se v něm neposunete zpět, a znovu sleduje, když se vrátíte na konec. Klepněte na libovolný řádek, aby zůstal v pruhu; klepněte na nejnovější nebo na špendlík v pruhu, abyste znovu sledovali. Pravé tlačítko myši zkopíruje řádek, nápovědu, celý přepis nebo všechny nápovědy. Přetáhněte oddělovač pod pruhem, aby byl vyšší; velikosti textu se nastavují v [Nastavení → Našeptávač](/ai-processing/prompter#settings--prompter).

## Zkouška na nahrávce {#rehearsing-on-a-recording}
Pomocníka lze vyzkoušet, aniž by byl kdokoli na telefonu. **Zkouška…** zobrazí rozhovory z [knihovny](/interface/recordings), nejnovější nahoře, a **Soubor v tomto počítači…** pro soubor `.mp3` nebo `.wav`.

<Shot name="45_prompter_rehearse" alt="Zkouška…: rozhovory z knihovny a soubor v tomto počítači" />

Zvolená nahrávka se objeví v přehrávači pod tlačítky: přehrávání a pauza, oba kanály vykreslené jako průběh, do kterého lze klepnout, a čas. Stiskněte **Spustit**: nahrávka se přehraje do našeptávače stejnou cestou jako hovor, vlastním tempem — rychlejší přehrávání se záměrně nenabízí, protože našeptávač krmený jedenapůlnásobnou rychlostí by dělal pauzy, odpovídal a účtoval za rozhovor, který nikdo nevedl. Křížek vpravo je **Ukončit zkoušku**, zpět k poslouchání hovorů.

Nahrávka s jedním kanálem, například importovaný soubor, se slyší jako jedna místnost: *našeptávač slyší všechno jako protistranu*.

## Kolik to stojí a kam jdou slova {#what-it-costs-and-where-the-words-go}
- Rozpoznávač se účtuje za minutu živého zvuku a **Rozpoznávat i mou stranu** to zdvojnásobí. Model se účtuje za každou nápovědu. Obojí se započítává do [měsíčních stropů](/ai-processing/prompter#spending) našeptávače, ne do limitů Zpracování.
- Hlas druhé strany opouští počítač během mluvení a míří k rozpoznávači, který jste zvolili. Rozpoznávač na vašem vlastním počítači — **Vosk**, **WhisperLive** nebo **NVIDIA Riva** — ho nechá doma.
- To, co ukazuje našeptávač, není nahrávka. Chcete-li si to ponechat, stiskněte **Vyexportovat…**; chcete-li mít samotný rozhovor, [nahrajte hovor](/recordings) navíc.

## Když se nespustí {#when-it-does-not-start}
Okno řekne v řádku pod tlačítky, co chybí.

| Okno říká | Co udělat |
| --- | --- |
| *Našeptávání je vypnuté. Nastavení → Našeptávač.* | Zaškrtněte **Povolit používání našeptávače**. |
| *Žádný rozpoznávač tu neumí poslouchat, zatímco někdo mluví. Nastavení → Přepis.* | Přidejte rozpoznávač s **Adresa pro našeptávače** a stiskněte **Vyzkoušet**. |
| *Není co spustit. Nastavení → Našeptávač, a přidejte pomocníka.* | Všichni pomocníci byli smazáni nebo vypnuti: přidejte jednoho nebo stiskněte **Obnovit výchozí**. |
| *Druhá strana musí být nejdřív uvědomena. Začněte tento rozhovor nahrávat, nebo změňte to, co o souhlasu říká Nastavení → Nahrávání.* | Spusťte nahrávání, které přehraje oznámení, nebo změňte nastavení souhlasu. |
| *Rozpoznávač nezačal poslouchat. Zkontrolujte jeho živou adresu a model v Nastavení → Přepis.* | Adresa pro našeptávače, model nebo klíč je špatně. **Vyzkoušet** na kartě rozpoznávače řekne, co přesně. |
| *Měsíční rozpočet na rozpoznávače je vyčerpán.* | Zvyšte **Rozpoznávače, za měsíc** nebo počkejte na nový měsíc. |
| *Měsíční rozpočet na modely je vyčerpán. Slova pokračují; našeptávání se zastavilo.* | Zvyšte **Modely, za měsíc**. |
