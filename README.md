# Dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Installing
    - install node_modules for that Dashboard works.  
        ~~~
        npm install
        ~~~

## Development server

-Run `ng build; node server` for a dev server. Navigate to `http://localhost:3000/`. The app will no reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Conection

-Update config.js in /server/config.js with your data of your BD
    ~~~
    const Sequelize = require('sequelize');
    const Op = Sequelize.Op;
    const sequelize = new Sequelize([BD], [contraseña], [usuario],{
        timezone : "-03:00",
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: {$between: Op.between},
        define: {
            defaultScope:{
                attributes:{
                    exclude: ['createdAt','updatedAt']
                }
            }
        }
    });
    module.exports = sequelize
    ~~~