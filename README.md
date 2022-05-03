# VerteilteSysteme_Gruppe5

**KA-WWI20B3 - Verteilte Systeme - Gruppe 5**

**Buschbacher, Jonas (2124359)**

**Helfer, Sira**

**Speer, Robin**


Dozentin: Lisa Trovato-Monastra 


## StädteInfos-API

Die API gibt verschiedene Infos über Städte, deren Land und deren Kontinent zurück.



## API Endpoint 1

URI: /city-info/cities/

Beispiel: /city-info/cities/?city_id=1

Parameter: city_id (int)

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

URI: /city-info/countries/

Beispiel: /city-info/cities/?country_id=1

Parameter: country_id (int)

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

URI: /city-info/contitents/

Beispiel: /city-info/contitents/?continent_id=1

Parameter: city_id (int)

Response-Type: application/json

Response

```
{
	"id": "1",

	"name": "Europa",
	
	"countries_amount": "47"
	
}
```
