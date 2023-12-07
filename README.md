# RULES :

> Le module “core”, à priori il restera inchangé, mais il faudra peut-être adapter les tests au système de testing fourni par Nest

> Le module “server” pour l’API. Ca à priori c’est le point fort de Nest, donc à réécrire avec, et implémenter les tests qu’on avait faits avec Fastify

> Les modules “CLI” et “File system”. Pour ça, il y a un module Node qui s’appelle “Nest Commander”, qui permet d’écrire une CLI à la Nest (https://nest-commander.jaymcdoniel.dev/en/introduction/intro/)

### Points bonus :

> Plus de tests (Tester la ligne de commande et le file system)

> Typescript (en réfléchissant bien aux structures qu’on manipule, aux entrées et sorties de fonctions...)

> Un README qui détaille votre parcours de migration, les étapes, les + et les -, les docs / réponses SO utilisées...


## Résultat : 

Le module "core" passe de mjs à ts.
Le module "server" est maintenant mis en place par les fichiers app.* et main.ts, le test avec app.e2e-spec.ts

Les modules "CLI" et "File system" fonctionne toujours avec commander. J'ai également la version avec nest-commander dans le dossier Nestcommand qui sont désormais en ts.

### Exécution des commandes
Avec commander : 
node src/packages/cli.mjs --filepath src/playground/test.mjs  --fileout src/playground/resultat.md 

Avec nest-commander : 
node dist/packages/Nestcommand/main.js --filepath src/playground/test.mjs --fileout src/playground/testnest.md