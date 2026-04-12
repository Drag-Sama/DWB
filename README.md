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

### Adresse du serveur

https://localhost:3000

### Swagger

http://localhost:3000/api-docs/#/


## Database

### Housing
| Attributes | Type |
|---------|--------|
| id      | String |
| adresse | String |
| city    | String |
| name    | String |
| price   | Int    |
| size    | Int    |
| userId  | String |

### User

| Attributes | Type |
|---------|--------|
| id      | String |
| firstName| String |
| name    | String |
| birthday| Date |

### Rental

| Attributes | Type |
|----------|--------|
| id       | String |
| startDate| Date |
| endDate  | Date |
| renterId| String |
