var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"",
"C",
"Cr",
"Cre",
"Crea",
"Creat",
"Create",
"Created",
"Created B",
"Created By",
"Created By R",
"Created By Ric",
"Created By Ricm",
"Created By Ricma",
"Created By Ricmalo",
"Created By Ricmalo",
"Created By Ricma",
"Created By Ricm",
"Created By Ric",
"Created By R",
"Created By",
"Created B",
"Created",
"Create",
"Creat",
"Crea",
"Cre",
"Cr",
"C",
""
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}