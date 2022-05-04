# VerteilteSysteme_Gruppe5

**KA-WWI20B3 - Verteilte Systeme - Gruppe 5**

**Buschbacher, Jonas (2124359)**

**Helfer, Sira**

**Speer, Robin**


Dozentin: Lisa Trovato-Monastra 


## StädteInfos-API - Anwendungsszenario & Gesamt-Architektur

Die API gibt verschiedene Infos über Städte, deren Land und deren Kontinent zurück. Die API bildet die Grundlage für einen Reiseführer und stellt somit das backend dar. Frontend-Seitig wäre neben der vorhandenen website weiterhin eine einfache App denkbar, welche Eingaben entgegene nimmt, diese als Anfragen an die REST-API sendet und die Antwort der API darstellt.

## Frage 1: Mögliche Probleme wenn der Service von mehreren Parteien verwendet wird
Aspekt 1: Keine Authentifizierung möglich bzw. vorgesehen
Derzeit ist keine Nutzer-Authentifizierung umgesetzt worden. Dadruch ist es jedem Nutzer der den Link zum Service hat möglich, die Daten anderer Nutzer abzurufen und einzusehen. Es ist außerdem nicht für den Nutzer nicht ersichtlich, wer die Daten angelegt bzw. abgeändert hat. Zur Lösung sollte ein Berechtigungskonzept erarbeitet und umgesetzt werden.

Aspekt 2: Mehrere Nutzer bearbeiten gleichezeitg einen Datensatz
Es ist wahrscheinlich, dass bei der Nutzung des Services die Situation auftreten wird, bei der zwei Nutzer versuchen gleichzeitig den selben Datensatz zu bearbeiten. Der Service kann nicht entscheiden, welche der Daten bzw. Nutzer die Eingabe macht, welche auch in der Datenbank gespeichert werden soll. Es könnte ein Transaktions-Konzept umgesetzt werden, bei dem Einträge die in Bearbeitung sind, gesperrt werden.

## Frage 2: Was ist außer der Programmierung für die Produktivsetzung des Services zu beachten?
Askept 1: Ausfürliches Testing zur Qualitätssicherung
Um eine hohe Qualität des programmierten Servcies sicherstellen zu können, sollten Test erstellt und durchgeführt werden. Automatisierte Test können dazu beitragen, Fehler schnell und zeitnah zu finden, so dass die Entwicklungsumgebung nicht verlassen und den Produktiv-Status gar nicht erst erreichen.

Askept 2: Einrichtung Monitoring des Services
Das Ziel des Betreibers des Services ist es, eine hohe Verfügbarkeit des Services zu erreichen. Um diese Ziel erreichen zu können, ist es notwendig ein Monitoring für den Service einzurichten. Hierbei wird die Erreichbarkeit des Services und der aktuelle Statud der Laufzeit regelmäßig geprüft. Bei zu langen Antwortzeiten oder ausbleibenden Antwort werden Warnungen an den Betreiber des Serives gesendet, so dass dieser den Ausfall des Services untersuchen und beheben kann.

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
