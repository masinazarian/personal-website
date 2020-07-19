# masinazarian

> Masi Nazarian's website source

## Build Setup

``` bash
# install dependencies
# Masi - update: 
# removed ,"sqlite": "^2.8.0" from dependencies line 21 of package.json
# installed sqlite separetely in global context; update: global did not work; installed locally
# $ sudo npm install --unsafe-perm -g sqlite3 # Masi's workaround
$ sudo npm install --unsafe-perm sqlite3 # Masi's workaround
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm start
```
