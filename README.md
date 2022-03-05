# VerteilteSysteme_Gruppe5
**KA-WWI20B3 - Verteilte Systeme - Gruppe 5
Buschbacher, Jonas
Helfer, Sira
Speer, Robin**
Dozentin: Lisa Trovato-Monastra 

##StädteInfos-API
Die API gibt verschiedene Infos über Städte, deren Land und deren Kontinent zurück.


##API Endpoint 1
URI: /city-info/cities/
Beispiel: /city-info/cities/?city_id=1
Parameter: city_id (int)
Response-Type: application/json
Response
{
	"city": "Paris",
	"population": "2 Millionen",
	"county": "Frankreich",
	"highest_building": "Eifelturm (324m)"
}


##API Endpoint 2
URI: /city-info/countries/
Beispiel: /city-info/cities/?country_id=1
Parameter: country_id (int)
Response-Type: application/json
Response
{
	"capital": "Paris",
	"population": "67 Millionen",
	"surface_area": "550.000 qkm",
	"longest_river": "Loire (1006km)"
}


##API Endpoint 3
URI: /city-info/contitents/
Beispiel: /city-info/contitents/?continent_id=1
Parameter: city_id (int)
Response-Type: application/json
Response
{
	"continent": "Europa",
	"population": "750 Millionen"
	"countries_amount": "47"
	
}