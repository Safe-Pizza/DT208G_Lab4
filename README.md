# Laboration 4, DT208G Angular II
Detta är en laboration i _Webbutveckingsprogrammet_ på Mittuniveristetet.

## Länk till webbplats
[Min webbplats](https://hali-lab4.netlify.app/table)

## Syfte
Syftet med denna laboration är att träna på HTTP-anrop med Angular och HttpClient, skapa services, presentera data från HTTP-anrop  samt att sortera och filtrera data.

## Uppgift
Skapa en webbplats som bygger på Angular. Webbapplikationen ska hämta kurs-data från en webbtjänst som sedan presenteras i tabellformat i applikationen. Det ska finnas funktion för att sortera kurskod, kursnamn och progression i bokstavsordning samt filtrera tabellen utifrån sökfras.

## Lösning
Nedan kan du läsa om vilka funktioner som är implementerade och hur detta repo kan installeras och testas lokalt på din dator.

### Funktioner
* **Sortera data:** Kurskod, kursnamn och progression sorteras vid klick på rubrik i bokstavsordning. Både fallande och stigande.
* **Filtrera data:** Utifrån sökfras filtreras kurskod och kursnamn.

### Installation
Vill du själv testa detta Angular-projekt kan du följa stegen nedan:
OBS! Du måste ha node.js, npm och Angular-CLI för att installera och hantera Angular-projekt.

1. Klona repot
    ```sh
    git clone https://github.com/safe-pizza/DT208G_Lab4.git
    ```

2. Gå in i projektmappen
    ```sh
    cd DT208G_Lab4
    ```

3. Installera
    ```sh
    npm install
    ```

4. Starta en utvecklingsserver
    ```sh
    ng serve
    ```

Nu finns projektet tillgängligt för dig att köra lokalt på din dator via localhost.

## Kontakt
 Vill du komma i kontakt med mig?
