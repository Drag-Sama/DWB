# DWB Projet L3 Info
API de gestion de logement

## Démarrage

### Installer package

```
npm i
```

### Générer prisma

```
npm prisma generate
```

### Démarrer serveur

```
node index.js
```

### Swagger

http://localhost:3000/api-docs/#/


## Database

### Housing
id      String  
adresse String
city    String
name    String
price   Int
size    Int
userId  String

### User
id        String  
firstname String
name      String
birthday  Date

### Rental
id        String  
startDate Date
endDate   Date
housingId String  
renterId  String  
