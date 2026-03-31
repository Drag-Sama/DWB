DWB Projet L3 Info
API de gestion de logement

# Housing:

id      String  
adresse String
city    String
name    String
price   Int
size    Int
userId  String


### Get

Get all
'''
/housing/
'''

Get housings by value on property (param are in body)
'''
/housing/get
'''

Sort housings by property
'''
/housing/sort/:property
'''

### Post
(param are in body)
'''
/housing/
'''

### Delete
'''
/housing/:id
'''

### Put
(param are in body)
'''
/housing/:id
'''