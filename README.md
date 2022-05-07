# VerteilteSysteme_Gruppe5

**KA-WWI20B3 - Verteilte Systeme - Gruppe 5**

**Buschbacher, Jonas (2124359)**

**Helfer, Sira (8434160)**

**Speer, Robin (8238288)**

**Dozentin: Lisa Trovato-Monastra**

## Run the app 🚀

- all containers (frontend, backend, mongo): `cd simple-backend && npm run d-up`


## StädteInfos-API - Anwendungsszenario & Gesamt-Architektur

Die API stellt dem Anwender Informationen über Städte, Länder und Kontinente bereit. Die API ist somit die Grundlage für einen modernen Reiseführer, bei dem Nutzer  Informationen über Reiseziele abspeichern sowie abrufen können. Ein konkretes Anwendungszenario für den Service wäre eine Social-Media-Plattform im Bereich "Urlaub und Reise", bei dem jeder Anwender die Möglichkeit hat, die wichtigsten Daten und Fakten zu einem besuchten Reiseziel zu erfassen und diese Informationen mit anderen Nutzern zu teilen. Als Frontend des Services wäre neben einer Website auch eine einfache App denkbar, welche Eingaben des Anwenders entgegen nimmt, diese als Anfragen an die REST-API sendet und die Antwort der API darstellt.

## Frage 1: Mögliche Probleme wenn der Service von mehreren Parteien verwendet wird

Aspekt 1: Keine Authentifizierung der Nutzer möglich bzw. vorgesehen

Derzeit ist keine Nutzer-Authentifizierung umgesetzt worden. Dadurch ist es derzeit jedem Nutzer, der den Link zum Service erhalten hat, die Daten anderer Nutzer abzurufen und einzusehen. Es ist außerdem für den Nutzer nicht ersichtlich, wer die Daten und Einträge in der Datenbank angelegt und abgeändert hat. Zur Lösung sollte ein Berechtigungskonzept erarbeitet und umgesetzt werden. Ein Berechtigungskonzept würde eine transparente und strukturierte Vergabe von Berechtigungen nach sich ziehen, wodurch der Aufwand gegenüber einer individuellen Berechtigungsvergabe deutlich reduziert werden könnte. Dadurch könnte auch bei größeren Nutzerzahlen eine detaillierte Dokumentation der Berechtigungen gewährleistet werden.

Aspekt 2: Mehrere Nutzer bearbeiten gleichzeitg einen Datensatz

Es ist sehr wahrscheinlich, dass zwei Nutzer versuchen werden, denselben Datensatz zeitgleich zu bearbeiten. Der Service kann in diesem Szenario nicht entscheiden, welche Daten bzw. welche Nutzereingabe in der Datenbank gespeichert werden soll. Zur Lösung des Problems könnte ein Transaktionskonzept erarbeitet und umgesetzt werden, bei dem Einträge, die gerade bearbeitet werden, für andere Nutzer gesperrt werden. Wird ein Datensatz durch einen Nutzer mithilfe eines schreibenden Zugriffs bearbeitet und abgeändert, dann haben andere Nutzer nur lesenden Zugriff auf den Datenbankeintrag. Durch ein Transaktionskonzept kann ein konsistenter Zustand der Daten gewährleistet werden, wodurch jeder Nutzer zu jedem Zeitpunkt auf jedem Knoten konstistente Daten abrufen kann (Erfüllung der ACID-Eigenschaften).

## Frage 2: Was ist außer der Programmierung für die Produktivsetzung des Services zu beachten?

Aspekt 1: Ausführliches Testing zur Qualitätssicherung

Um eine hohe Qualität des programmierten Services sicherstellen zu können, sollten Tests erstellt und durchgeführt werden. Automatisierte Test können dazu beitragen, Fehler schnell und zeitnah aufzuspüren, sodass diese die Entwicklungsumgebung nicht verlassen und den Produktiv-Status nicht negativ beeinflussen. Ein Service, der regelmäßig getestet und optimiert wird, kann im Vergleich zu einem Service, der nicht getestet wird, im Regelfall einen deutlich höheren Sicherheitsstandard erreichen. Beispielsweise kann durch regelmäßiges Testen der Diebstahl von Benutzerinformationen durch Cyberkriminelle verhindert und kritische Sicherheitslücken identifiziert werden. Außerdem kann eine höhere Produktqualität des Services erreicht werden, wodurch die Kundenzufriedenheit als kritischer Erfolgsfaktor positiv beeinflusst werden kann.

Aspekt 2: Einrichtung Monitoring des Services

Das Ziel des Service-Betreibers ist es, eine hohe Verfügbarkeit und Stabilität des Services zu erreichen. Um dieses Ziel erreichen zu können, ist die Einrichtung eines Monitorings für den Service notwendig. Hierbei wird die Erreichbarkeit des Services und der aktuelle Status der Laufzeit regelmäßig geprüft. Bei zu langen Antwortzeiten oder ausbleibenden Antwort werden Warnungen an den Service-Betreiber gesendet, sodass dieser den Ausfall des Services untersuchen und beheben kann.

## API Endpoint 1

URI: /cities/

Beispiel: /cities/?id=1

Parameter: id (int)

Response-Type: application/json

Response:

```
{
	"id": "1",

	"name": "Paris",
	
	"population": "2 Millionen",
	
	"county": "Frankreich"		
	
}
```



## API Endpoint 2

URI: /countries/

Beispiel: /countries/?id=1

Parameter: id (int)

Response-Type: application/json

Response

```
{

	"id": "1",
	
	"name": "Frankreich",
	
	"capital": "Paris"
	
		
}
```


## API Endpoint 3

URI: /contitents/

Beispiel: /contitents/?id=1

Parameter: id (int)

Response-Type: application/json

Response

```
{
	"id": "1",

	"name": "Europa",
	
	"countries_amount": "47"
	
}
```
