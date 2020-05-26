# PetQuiz
ASP.NET Web App with React

Labb 4 Webbutveckling
Deadline för laborationen är 2020-06-06.
Ni ska bygga en webapp med ASP.NET MVC Core. 
Syftet med laborationen är att i ett begränsat projekt kontrollera att ni behärskar så många som möjligt av de tekniker vi har gått igenom. 
Uppgiften ska utföras två och två. Använd gärna git för versionshantering.
Den här labben har potential att växa och kräva tid, om man inte har disciplin. 
Håll er till betygskriterierna, tills ni är klara med det som krävs för det betyg ni önskar uppnå - sedan är det fritt fram att lägga till CSS-animationer på inloggningssidan m.m.

Uppgiften
Ni ska skapa en quiz-app där man kan tävla mot andra användare i att svara på frågor. 
Användare ska kunna registrera sig, logga in och svara på ett lagom antal frågor. 
Man ska kunna se tidigare tävlandes poäng (high score). Frågorna ska lagras i en databas. 
Frågorna ska hämtas till React med hjälp av HTTP-anrop och WebAPI. 
Dvs appen använder det API ni skriver i er controller. 
Appen ska så långt det är möjligt vara en SPA-app, men det är ok att göra undantag för autentisering. 
Backenden skall följa REST API standarden. 
Jag kommer alltså att kontrollera så att ni har designat API’t efter de koncepten som läggs fram i API design guiden. 
När en användare svarat på alla frågor ska poängen sparas i databasen med HTTP-Anrop. 
(VG) En administratör ska kunna lägga till nya frågor.

Quiz
När användaren går in på "Quiz" på webbappen ska man kunna välja att starta quizzen. 
En fråga visas i taget. Användaren väljer ett av alternativen. 
Appen visar om det var rätt eller fel och sparar användarens poäng. 
Nästa fråga visas när användaren väljer att gå vidare. 
När sista frågan har besvarats ska resultatet visas och användaren ska kunna starta en ny quiz. 
Poängen ska sparas till databasen med hjälp av AJAX och en WebAPI-funktion.
(Den som vill ha en extra utmaning kan göra så att användaren har en begränsad tid på sig att svara på varje fråga,
 innan det automatiskt registreras ett fel. Och dramatisk musik!)

High score
När användaren väljer att se high score så ska de bästa resultaten visas, 
sorterade i fallande ordning efter poäng i första hand och i andra hand efter datum. 
Resultaten ska hämtas med AJAX och WebAPI.

Admin - VG
Om användaren är administratör ska man kunna lägga till frågor. 
På VG-nivå ska man kunna se, lägga till, redigera och ta bort frågor. 

Autentisering
Användaren ska kunna registrera sig på ett lämpligt sätt. 
Använd Identity om ni vill, använd en annan lösning om ni vill, 
dock behöver det bli integrerat med ASP.NET (funkar att använda authorize attribut t ex).

Övrigt
Det är helt okej att använda extra tillägg till .NET Core, tillägg till React/bootstrap, templates samt tillägg till CSS/JavaScript.

Bedömningskriterier
Följande kriterier gäller för G eller VG på laborationen:
G appen ska vara ett WebApi projekt, SPA med React
G menyalternativ för quiz, high score, registrering + inloggning
G quiz-läge (se rubriken Quiz)
G high score
G registrera och logga in användare för att kunna se React-appen
G backend-appen följer till 50% API design guidance (REST Api standarden)
VG appen sparar olika användares poäng
VG lägga till, redigera och ta bort frågor; om man är inloggad som admin
VG appen har en annan stildesign än det som kommer med ramverken
VG appen är responsiv (testas med samtliga devices som finns i device emulatorn i chrome)
VG backend-appen följer till 80% API design guidance (REST Api standarden)
VG Lämna in innan deadline
VG Påvisa en god förmåga att kunna hitta en balans mellan att:
Undvika överflödig kod så som i redundant kod, dubbletter och stycken som kan ersättas med loopar eller uttryck med mera
Kommentera eller namnge komplicerade uttryck och stycken
Undvika komplicerade uttryck och stycken i fördel för fler rader kod med bättre läsvänlighet
VG Väl namngivna identifiers så att syftet av användandet blir uppenbart
VG Till den mån det är möjligt alltid använda passande datatyper till värden
VG Uniform indentering och kodstil. Se "Coding convention"

Lämnas in på Ithsdistans som en github länk alternativt en förklaring om vem man jobbade med i grupp.

Det går bra att göra denna laborationen själv om man frågar läraren och får godkännande.
