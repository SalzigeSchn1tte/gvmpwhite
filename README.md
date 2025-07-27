# Lokaler Client
## Browser installieren und Starten
```bash
cd gvmp/browser
npm install
npm run serve
```

## Client builden
```bash
cd gvmp/client
gulp build
```

# Anzeige Komponenten im Browser
Vue Browser starten und Console �ffnen:
```bash
npm run serve
F12 -> console
```

### Windows
```bash
components.Windows.show("FENSTERNAME", data )
```
##
#### Login
```bash
components.Windows.show("Login",JSON.stringify({name:"blaa"}))
```
##
#### Bank
```bash
components.Windows.show('Bank','{"name": "Thomas Mayer", "money": 1110, "balance": 1110, "history": [{"betrag": 123456}], "overviewTotal": [{"text": "Harz 4","betrag": 23030},{"text": "Entwicklersteuer","betrag": 23030}],"overviewIn": [{"betrag": 23030},{"betrag": 23030},{"betrag": 23030}],"overviewOut": [{"betrag": 23030},{"betrag": 23030},{"betrag": 23030}],"overviewInTransfer": [{"name": "Unbekannt","betrag": 23030},{"name": "Walter Hartz","betrag": 23030},{"name": "Walter Hartz","betrag": 23030}],"overviewOutTransfer": [{"name": "Simon Hooker","betrag": 23030},{"name": "Walter Hartz","betrag": 23030},{"name": "Walter Hartz","betrag": 23030}]}')
```
##
### HUD
HUD laden
```bash
components.Hud.visible = true
```
##
#### Computer
Computer laden
```bash
components.Computer.app = "ComputerMainScreen"
```

Apps einspielen und danach anklicken
```bash
components.DesktopApp.responseComputerApps('[{"id":1,"appName":"FraktionListApp","name":"Fraktionsverwaltung","icon":"../../assets/PoliceDesktop.svg"}]')
```
##
##### FraktionsApp
```bash
components.FraktionListApp.members = [{"list":[{"id":60453,"name":"Tyson Carter","rang":12,"title":"Pr�sident","payday":5000,"rights":{"storage":true,"manage":true,"bank":true}},{"id":22345,"name":"Max Mustermann","rang":11,"title":"Vize-Pr�sident","payday":4000,"rights":{"storage":true,"manage":true,"bank":true}},{"id":12345,"name":"Hans Juergen","rang":1,"title":"Prospect","payday":3000,"rights":{"storage":true,"manage":true,"bank":true}}],"manage":1}]
```
#
#### Smartphone
```bash
components.Smartphone.show("PhoneMainScreen")
```
##
##### SettingsApp
```bash
components.HomeApp.apps = [{"id": "SettingsApp", "name": "Einstellungen", "icon": "https://image.flaticon.com/icons/svg/744/744904.svg"}]



components.HomeApp.apps = [{"id": "FraktionListApp", "name": "Einstellungen", "icon": "https://image.flaticon.com/icons/svg/744/744904.svg"}]
```



##### Kontakte app
```
bash
components.HomeApp.apps = [{"id": "TelefonApp", "name": "Kontakte", "icon": "https://image.flaticon.com/icons/svg/744/744904.svg"}]
```


#### Funk App
```
bash
components.HomeApp.apps = [{"id": "FunkApp", "name": "Funk", "icon": "https://image.flaticon.com/icons/svg/744/744904.svg"}]
```