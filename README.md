# VerteilteSysteme_Gruppe5

**KA-WWI20B3 - Verteilte Systeme - Gruppe 5**

**Buschbacher, Jonas**

**Helfer, Sira**

**Speer, Robin**


Dozentin: Lisa Trovato-Monastra 


## StädteInfos-API

Die API gibt verschiedene Infos über Städte, deren Land und deren Kontinent zurück. Die API bildest die Grundlage für einen Reiseführer.  



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
