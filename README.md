[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=18184743&assignment_repo_type=AssignmentRepo)
# DEV2 - Warm up exercises

Elke week start je met de oefening in deze repository.

## Session 1 - DOM
1A - Wanneer je op de eerste knop klikt, vervang je de inhoud van de div met id "content-1” door een nieuw p-element met daarin de tekst: “Hallo, dit is de oefening van je naam”.

1B - Wanneer je op de tweede knop klikt, verandert de achtergrondkleur van de sectie met id "section-1”.

1C - Wanneer je op de derde knop klikt, voeg je aan de div met id "content-1” een H1-element toe, na het p-element, met daarin de tekst: “Ik ben er klaar voor.

## Session 2 - Array functions & string literals
2A - wanneer je op de knop *‘button-2a’* klikt moeten alle scores getoond worden in het html-element *‘content-2’.* Voeg hiervoor een lijst (`<ul>`) met verschillende lijst-elementen (`<li>`) toe. Gebruik *string literals* om in deze lijst-elementen telkens de juiste score te plaatsen.

2B- wanneer je de op de knop *‘button-2b’* klikt sorteer je de array ‘scores’. Je vervangt de huidige lijst in *‘content-2’* door de een nieuwe gesorteerde lijst.

2C - wanneer je op de knop *‘button-2c’* klikt maak je de som van alle scores, bewaar deze in een variabele score. Voeg deze score toe aan je pagina door een h1-element toe te voegen na het de lijst, met daarin: “Som scores: SOM” 

## Session 3 - JSON
3A - wanneer je op de knop *‘button-3a’* klikt zet je de string ‘student’ om naar een JSON object en log je dit in de console.

3B - wanneer  je op de knop *‘button-3b’* klikt, voeg je de naam en leeftijd van de student toe als h2-element aan de div *‘content-3’.*
Op basis van de boolean ‘isGraduated’ voeg je aan ‘content-3’ ofwel de css-klasse ‘graduated’ ofwel de css-klasse ‘not-graduated’ toe.

## Session 4 - API's 
4A - Wanneer je op knop *‘button-4a’* klikt fetch je weer-data via volgend URL:
http://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric

Zodra je het response object terugkrijgt haal je de JSON data op en log je deze naar de console.

4B - Wanneer  je op de knop *‘button-4b’* klikt, voeg je de main, min en max temperatuur toe als h2-elementen aan de div *‘content-4’.*

## Session 5 - Classes
Maak een klasse Student aan in een aparte file `Student.js`. Deze klasse heeft de properties 'lastName', 'firstName', 'email' en 'averageScore'.

De klasse heeft een getter 'name', 'email' en 'averageScore'. 
De getter 'name' return de volledige naam. 

5A - Wanneer  je op de knop *‘button-5a’* klikt, wordt er een instantie van de klasse aangemaakt, deze wordt gelogd in de console.

5B - Wanneer  je op de knop *‘button-5b’* klikt, voeg je de name, email en averageScore toe als h2-elementen aan de div *‘content-5’.*