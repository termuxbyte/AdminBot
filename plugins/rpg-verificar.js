//CΓDIGO CREADO POR GataNina-Li : https://github.com/GataNina-Li

import { createHash } from 'crypto'
let nombre = 0, bio = 0, edad = 0, genero = 0, identidad = 0, pasatiempo = 0, registro, _registro, fecha, hora
let pas1 = 0, pas2 = 0, pas3 = 0, pas4 = 0, pas5 = 0 

let handler = async function (m, { conn, text, command, usedPrefix }) {
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})

let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? m.sender : m.sender

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
let nombreWA = await usedPrefix + conn.getName(m.sender) //'@' + m.sender.split("@s.whatsapp.net")[0] 
let user = global.db.data.users[m.sender]
let verificar = new RegExp(usedPrefix)
let biografia = await conn.fetchStatus(m.sender).catch(_ => 'undefined')
bio = biografia.status?.toString() || 'No encontrada'

if (user.registered === true) throw `${iig}ππΌ ππππΌπ ππππππππΌπΏπ(πΌ)!!\nππ ππππππ πΌππππΌπ ππ ππππππππ πππ ππππ πΎπππΌππΏπ\n*${usedPrefix}unreg numero de serie*\n\nππ ππ πππΎππππΏπΌ ππ ππππππ πΏπ πππππ πππ ππππ πΎπππΌππΏπ\n*${usedPrefix}myns*`

//if (typeof nombre === 'number') throw '*PARΓMETRO FALTANTE*'
if (command == 'verificar' || command == 'verify' || command == 'register' || command == 'reg' || command == 'registrar') {
await conn.sendButton(m.chat, iig + 'π *CΓMO DESEA REGISTRARSE?*', '*REGISTRO RAPIDO*\n- Insignia de verificaciΓ³n\n- Desbloquear comandos que requieran registro\n\n*REGISTRO COMPLETO*\n- Insignia de verificaciΓ³n\n- Desbloquear comandos que requieran registro\n- Recompensas por usar este tipo de registro\n- Premium Temporal Gratis\n\n' + wm, null, [[`π REGISTRO RΓPIDO`, usedPrefix + 'Reg1'], [`ποΈ REGISTRO COMPLETO`, usedPrefix + 'nombre']], m) 
}
	
if (command == 'reg1') {
registro = text.replace(/\s+/g, usedPrefix) 
_registro = text.split(" ",2) 

if (!text) return conn.sendButton(m.chat, mg + `*PARΓMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\`\n\n*EJEMPLO:* \`\`\`${usedPrefix + command} ${gt} 20\`\`\``, '```CONSEJO:```\n\n- Escriba "Nombre" + "espacio" + "edad"\n- Su nombre no debe de contener nΓΊmeros\n- La edad no debe de contener Letras\n\n*SabΓ­as que puede personalizar mΓ‘s su registro?*\n_Usando el BotΓ³n de abajo_', null, [[`ποΈ USAR REGISTRO COMPLETO`, usedPrefix + 'nombre']], m)
if (_registro['length'] >= 3 || isNaN(_registro[1])) return conn.sendButton(m.chat, fg + 'π *ESTΓ INTENTANDO SEPRAR SU NOMBRE O UNIR TODO?* ', 'π§ *COINCIDE COMO EN ESTOS EJEMPLOS:*\n' + `\`\`\`${usedPrefix + command} Super${gt}20\`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super 15 ${gt} \`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super ${gt} 24 De ${author}\`\`\`\n\n` + '*Si cumple que tenga (Nombre/Frase y Edad) Autocompletaremos su Registro*\n_Use el BotΓ³n de abajo_', null, [[`π AUTOCOMPLETAR MI REGISTRO`, usedPrefix + 'reg1' + ' ' + text.replace(/\s+/g, '').replace(/[0-9]+/gi, "") + ' ' + text.replace(/\s+/g, '').replace(/[a-z]+/gi, "")], ['π VOLVER A REGISTRAR', command + usedPrefix]], m)
if (!_registro[0]) return conn.sendButton(m.chat, fg + `*FALTA SU NOMBRE, PARΓMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, wm, null, [[`ποΈ USAR REGISTRO COMPLETO`, usedPrefix + 'nombre']], m)
if (_registro[0].length >= 30) throw fg + '*SU NOMBRE ES MUY LARGO, USE OTRO NOMBRE POR FAVOR*' 
if (_registro[0].length <= 2) throw fg + '*SU NOMBRE ES MUY CORTO, USE OTRO NOMBRE POR FAVOR*'
_registro[0] = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "")
nombre = _registro[0]
	
if (!_registro[1]) return conn.sendButton(m.chat, fg + `*FALTA SU EDAD, PARΓMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, wm, null, [[`ποΈ USAR REGISTRO COMPLETO`, usedPrefix + 'nombre']], m)
//if (isNaN(_registro[1])) throw '*LA EDAD DEBE DE SER SOLO NΓMEROS*'
if (_registro[1] > 50) throw fg + `*SU EDAD ES MUY MAYOR, USE OTRA EDAD POR FAVOR*\n\n*PARΓMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``
if (_registro[1] < 10) throw fg + `*SU EDAD ES MUY MENOR, USE OTRA EDAD POR FAVOR*\n\n*PARΓMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``
edad = parseInt(_registro[1]) //_registro[1]	
global.db.data.users[m.sender]['registroR'] = true
	
await conn.sendButton(m.chat, eg + '*GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*β€ NOMBRE:* ' + nombre + '\n' + '*β€ EDAD:* ' + edad + ' aΓ±os', wm, null, [[`π FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)	
}
		
if (command == 'nombre' || command == 'name') {
if (verificar.test(text) == false || text.length <= 1) return conn.sendButton(m.chat, '*PERSONALICE SU NOMBRE PARA REGISTRAR, EJEMPLO:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*TambiΓ©n puede vincular su nombre de WhatsApp*\n_Usando el BotΓ³n de abajo_', null, [[`π REGISTRAR CON WHATSAPP`, `${usedPrefix + 'nombre2'}`]], m)
if (text.length >= 25) return conn.sendButton(m.chat, '*USE UN NOMBRE MΓS CORTO, EJEMPLO:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*Acaso quiere usar su nombre registrado en su WhatsApp ?*\n_En ese caso use el BotΓ³n de abajo_', null, [[`π REGISTRAR CON WHATSAPP`, usedPrefix + 'nombre2']], m)
if (text.length <= 2) return conn.sendButton(m.chat, '*NOMBRE FALTANTE O MUY CORTO, EJEMPLO:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*Acaso quiere usar su nombre registrado en su WhatsApp ?*\n_En ese caso use el BotΓ³n de abajo_', null, [[`π REGISTRAR CON WHATSAPP`, usedPrefix + 'nombre2']], m) 

nombre = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "").trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre, wm, null, [[`π’ REGISTRAR MI EDAD`, usedPrefix + 'edad']], m)
}
	
if (command == 'nombre2' || command == 'name2') {
if (nombreWA.slice(1).length < 2) return conn.sendButton(m.chat, '*SU NOMBRE DE WHATSAPP ES MUY CORTO PARA REGISTRAR USANDO* ' + '```' + usedPrefix + command + '```', '*Modifique su nombre de WhatsApp e intente de nuevo o puede personalizar su nombre*\n_SΓ­ quiere personalizar use el BotΓ³n de abajo_', null, [[`π PERSONALIZAR REGISTRO`, usedPrefix + 'nombre']], m) 
if (nombreWA.slice(1).length > 25) return conn.sendButton(m.chat, '*SU NOMBRE DE WHATSAPP ES MUY LARGO PARA REGISTRAR USANDO* ' + '```' + usedPrefix + command + '```', '*Modifique su nombre de WhatsApp e intente de nuevo o puede personalizar su nombre*\n_SΓ­ quiere personalizar use el BotΓ³n de abajo_', null, [[`π PERSONALIZAR REGISTRO`, usedPrefix + 'nombre']], m)
nombre = nombreWA.replace(/\s+/g, '').replace(/[0-9]+/gi, "").slice(1).trim()	
	
if (verificar.test(text) == false) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre, wm, null, [[`π’ REGISTRAR MI EDAD`, usedPrefix + 'edad']], m)
}

	
if (command == 'edad' || command == 'age') {
const sections = [
{ title: "π SELECCIONA TU EDAD!!",
rows: [ {title: "β»οΈ Edad Random", rowId: usedPrefix + command + ' ' + usedPrefix +  text + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','31'])}]
}, {
title: "π JOVEN",
rows: [
{title: "1οΈβ£0οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '10'},
{title: "1οΈβ£1οΈβ£βAΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '11'},
{title: "1οΈβ£2οΈβ£βAΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '12'},
{title: "1οΈβ£3οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '13'},
{title: "1οΈβ£4οΈβ£βAΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '14'},
{title: "1οΈβ£5οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '15'},
{title: "1οΈβ£6οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '16'},
{title: "1οΈβ£7οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '17'}]
}, {
title: "π³ ADULTO",
rows: [
{title: "1οΈβ£8οΈβ£βAΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '18'},
{title: "1οΈβ£9οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '19'},
{title: "2οΈβ£0οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '20'},
{title: "2οΈβ£1οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '21'},
{title: "2οΈβ£2οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '22'},
{title: "2οΈβ£3οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '23'},
{title: "2οΈβ£4οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '24'},
{title: "2οΈβ£5οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '25'},
{title: "2οΈβ£6οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '26'},
{title: "2οΈβ£7οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '27'},
{title: "2οΈβ£8οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '28'},
{title: "2οΈβ£9οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '29'},
{title: "3οΈβ£0οΈβ£ AΓ±os", rowId: usedPrefix + command + ' ' + usedPrefix + text + '30'}]
}, {
title: "π€ NO ESTΓ TΓ EDAD ?",
rows: [
{title: "π’ Personalizar mΓ­ edad", rowId: usedPrefix + 'edad2'}]},]

const listMessage = {
text: `*SELECCIONE SU EDAD POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n\n*β°βΈΊ βΉ βΈΊ  βΉ βΈΊ βΉ βΈΊ βΉ βΈΊ βΉ*`,
footer: wm,
title: "*β­βΈΊ βΉ βΈΊ  βΉ βΈΊ βΉ βΈΊ βΉ βΈΊ βΉ*\n",
buttonText: "π«΅ SELECCIONAR EDAD π«΅β",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, m)
if (isNaN(text)) throw '*INGRESE SOLO NΓMEROS*'
if (text.slice(1).trim() > 50) throw '*DEMASIADO MAYOR PARA SER REGISTRADO*'
if (text.slice(1).trim() < 10) throw '*DEMASIADO MENOR PARA SER REGISTRADO*' //.replace(/[^0-9.]+/gi,' ')
	
//user.age = text.slice(1) 
edad = text.slice(1).trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre + '\n' + '*EDAD:* ' + edad + ' aΓ±os', wm, null, [[`π REGISTRAR MI GΓNERO `, usedPrefix + `genero`]], m)
}
	
if (command == 'edad2' || command == 'age2') {
if (verificar.test(text.slice(1)) == false && !text) return conn.sendButton(m.chat, '*PERSONALICE SU EDAD PARA REGISTRAR, EJEMPLO:*\n' + usedPrefix + command + ' ' + usedPrefix + '35', '*SabΓ­as que puede seleccionar su edad de una lista ?*\n_En ese caso use el BotΓ³n de abajo_', null, [[`π’ REGISTRAR MI EDAD`, usedPrefix + 'edad']], m)
if (isNaN(text)) throw '*INGRESE SOLO NΓMEROS*'
if (text > 50) throw '*DEMASIADO MAYOR PARA SER REGISTRADO*'
if (text < 10) throw '*DEMASIADO MENOR PARA SER REGISTRADO*'

//user.age = text.slice(1) 
edad = text.replace(/\s+/g, '').replace(/[a-z]+/gi, "").trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre + '\n' + '*EDAD:* ' + edad + ' aΓ±os', wm, null, [[`REGISTRAR MI GΓNERO `, usedPrefix + `genero`]], m)
}

	
if (command == 'genero' || command == 'gΓ©nero' || command == 'gender') {
const sections = [
{ title: "π SELECCIONA TU GΓNERO!!",
title: comienzo + " πΉ MASCULINO " + fin,
rows: [ 
{title: "πΉ Hombre", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Hombre' }]
}, {
title: comienzo + " πΊ FEMENINO " + fin,
rows: [
{title: "πΊ Mujer", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Mujer' }]
}, {
title: comienzo + " π€ OCULTAR " + fin,
rows: [
{title: "π€ Ocultado", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Ocultado' }]},]

const listMessage = {
text: `*SELECCIONE SU GΓNERO POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n*EDAD:* _${edad}_\n\n*β°βΈΊ βΉ βΈΊ  βΉ βΈΊ βΉ βΈΊ βΉ βΈΊ βΉ*`,
footer: wm,
title: "*β­βΈΊ βΉ βΈΊ  βΉ βΈΊ βΉ βΈΊ βΉ βΈΊ βΉ*\n",
buttonText: "π§¬ SELECCIONAR GΓNERO π§¬β",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, m)
genero = text.slice(1).trim()	
	
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre + '\n' + '*EDAD:* ' + edad + ' aΓ±os' + '\n' + '*GENERO:* ' + genero, wm, null, [[`π± REGISTRAR MI IDENTIDAD`, usedPrefix + 'identidad']], m)	 
}
	
if (command == 'identidad' || command == 'identity') {
const sections = [
{ title: "π± SELECCIONE SU IDENTIDAD DE GΓNERO!!",
rows: [
{title: "β’ AgΓ©nero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'AgΓ©nero' },	
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'AgΓ©nero'},		
{title: "β’ AndrΓ³gino", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'AndrΓ³gino' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'AndrΓ³gino'},	
{title: "β’ AndrΓ³gina", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'AndrΓ³gina' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'AndrΓ³gina'},	
{title: "β’ Asexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Asexual' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Asexual'},		
{title: "β’ BigΓ©nero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'BigΓ©nero' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'BigΓ©nero'},	
{title: "β’ Bisexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Bisexual' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Bisexual'},	
{title: "β’ Cisgenero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Cisgenero' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Cisgenero'},	
{title: "β’ CrossDresser", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'CrossDresser' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'CrossDresser'},	
{title: "β’ DemigΓ©nero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'DemigΓ©nero' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'DemigΓ©nero'},	
{title: "β’ Gay", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Gay' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Gay'},	
{title: "β’ GΓ©nero fluido", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'GΓ©nero fluido' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'GΓ©nero fluido'},	
{title: "β’ GΓ©nero neutro", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'GΓ©nero neutro' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'GΓ©nero neutro'},	
{title: "β’ Genderqueer", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Genderqueer' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Genderqueer'},	
{title: "β’ Heterosexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Heterosexual' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Heterosexual'},	
{title: "β’ Heteroflexible", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Heteroflexible' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Heteroflexible'},	
{title: "β’ Homoflexible", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Homoflexible' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Homoflexible'},	
{title: "β’ Homosexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Homosexual' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Homosexual'},	
{title: "β’ Intersexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Intersexual' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Intersexual'},	
{title: "β’ Lesbiana", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Lesbiana' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Lesbiana'},	
{title: "β’ Pansexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Pansexual' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Pansexual'},	
{title: "β’ PangΓ©nero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'PangΓ©nero' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'PangΓ©nero'},	
{title: "β’ Questioning", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Questioning' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Questioning'},	
{title: "β’ Queer", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Queer' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Queer'},	
{title: "β’ Sapiosexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Sapiosexual' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'Sapiosexual'},	
{title: "β’ TransgΓ©nero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'TransgΓ©nero' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'TransgΓ©nero'},	
{title: "β’ TrigΓ©nero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'TrigΓ©nero' },	
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'TrigΓ©nero'},	
{title: "β’ Variante/GΓ©nero expansivo", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'GΓ©nero expansivo' },
{title: "β¬οΈ Quiero Saber mas β¬οΈ", rowId: usedPrefix + 'google' + ' ' + 'GΓ©nero expansivo'}]
}, {
title: comienzo + " π€ OCULTAR " + fin,
rows: [
{title: "Ocultado", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Ocultado' }]},]

const listMessage = {
text: `*SELECCIONE SU IDENTIDAD DE GΓNERO POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n*EDAD:* _${edad}_\n*GΓNERO:* _${genero}_\n\n*β°βΈΊ βΉ βΈΊ  βΉ βΈΊ βΉ βΈΊ βΉ βΈΊ βΉ*`,
footer: wm,
title: "*β­βΈΊ βΉ βΈΊ  βΉ βΈΊ βΉ βΈΊ βΉ βΈΊ βΉ*\n",
buttonText: "π± IDENTIDAD DE GΓNERO π±",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, m)
	
identidad = text.slice(1).trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre + '\n' + '*EDAD:* ' + edad + ' aΓ±os' + '\n' + '*IDENTIDAD DE GΓNERO:* ' + identidad, wm, null, [[`βοΈ REGISTRAR MIS PASATIEMPOS`, usedPrefix + 'pasatiempo']], m)
}
	
const sections = [
{ title: "βοΈ SELECCIONE HASTA 5 PASATIEMPOS!!",
rows: [
{title: "π Acroyoga", rowId: usedPrefix + command + ' ' + text + 'π Acroyoga' },		
{title: "π­ ActuaciΓ³n", rowId: usedPrefix + command + ' ' + text + 'π­ ActuaciΓ³n' },	
{title: "π₯ Aikido", rowId: usedPrefix + command + ' ' + text + 'π₯ Aikido' },	
{title: "π― Airrsoft", rowId: usedPrefix + command + ' ' + text + 'π― Airrsoft' },
{title: "βοΈ Ajedrez", rowId: usedPrefix + command + ' ' + text + 'βοΈ Ajedrez' },
{title: "ποΈ Alpinismo", rowId: usedPrefix + command + ' ' + text + 'ποΈ Alpinismo' },
{title: "π₯οΈ AnimaciΓ³n", rowId: usedPrefix + command + ' ' + text + 'π₯οΈ AnimaciΓ³n' },
{title: "π Animador/a de Equipos", rowId: usedPrefix + command + ' ' + text + 'π Animador/a de Equipos' },
{title: "βοΈ Anime dibujos", rowId: usedPrefix + command + ' ' + text + 'βοΈ Anime dibujos' },	
{title: "π Apicultura", rowId: usedPrefix + command + ' ' + text + 'π Apicultura' },
{title: "π» Aprender a programar", rowId: usedPrefix + command + ' ' + text + 'π» Aprender a programar' },
{title: "π Aprender un idioma", rowId: usedPrefix + command + ' ' + text + 'π Aprender un idioma' },
{title: "π Arreglos florales", rowId: usedPrefix + command + ' ' + text + 'π Arreglos florales' },
{title: "π¨ Arte", rowId: usedPrefix + command + ' ' + text + 'π¨ Arte' },
{title: "π₯ Artes marciales", rowId: usedPrefix + command + ' ' + text + 'π₯ Artes marciales' },
{title: "π₯ Artes marciales mixtas", rowId: usedPrefix + command + ' ' + text + 'π₯ Artes marciales mixtas' },
{title: "π­ AstrofotografΓ­a", rowId: usedPrefix + command + ' ' + text + 'π­ AstrofotografΓ­a' },
{title: "π? AstrologΓ­a", rowId: usedPrefix + command + ' ' + text + 'π? AstrologΓ­a' },
{title: "π Atletismo", rowId: usedPrefix + command + ' ' + text + 'π Atletismo' },
{title: "π©° Ballet", rowId: usedPrefix + command + ' ' + text + 'π©° Ballet' },
{title: "π Belleza", rowId: usedPrefix + command + ' ' + text + 'π Belleza' },
{title: "ποΈ Barranquismo", rowId: usedPrefix + command + ' ' + text + 'ποΈ Barranquismo' },
{title: "π» Blog", rowId: usedPrefix + command + ' ' + text + 'π» Blog' },
{title: "βοΈ Bocetos", rowId: usedPrefix + command + ' ' + text + 'βοΈ Bocetos' },
{title: "βοΈ Bordado", rowId: usedPrefix + command + ' ' + text + 'βοΈ Bordado' },
{title: "π³ Bowling", rowId: usedPrefix + command + ' ' + text + 'π³ Bowling' },
{title: "π₯ Boxeo", rowId: usedPrefix + command + ' ' + text + 'π₯ Boxeo' },
{title: "πΈ BΓ‘dminton", rowId: usedPrefix + command + ' ' + text + 'πΈ BΓ‘dminton' },
{title: "π Baloncesto", rowId: usedPrefix + command + ' ' + text + 'π Baloncesto' },
{title: "βΎ BΓ©isbol", rowId: usedPrefix + command + ' ' + text + 'βΎ BΓ©isbol' },
{title: "ποΈ CaligrafΓ­a", rowId: usedPrefix + command + ' ' + text + 'ποΈ CaligrafΓ­a' },
{title: "π Caminata", rowId: usedPrefix + command + ' ' + text + 'π Caminata' },
{title: "π Camping", rowId: usedPrefix + command + ' ' + text + 'π Camping' },
{title: "πΆ Canoa", rowId: usedPrefix + command + ' ' + text + 'πΆ Canoa' },
{title: "π€ Canto", rowId: usedPrefix + command + ' ' + text + 'π€ Canto' }, 
{title: "π€ Canto a capela", rowId: usedPrefix + command + ' ' + text + 'π€ Canto a capela' },
{title: "βοΈ Caricaturas", rowId: usedPrefix + command + ' ' + text + 'βοΈ Caricaturas' },
{title: "πͺ CarpinterΓ­a", rowId: usedPrefix + command + ' ' + text + 'πͺ CarpinterΓ­a' },
{title: "ποΈ Carreras de autos", rowId: usedPrefix + command + ' ' + text + 'ποΈ Carreras de autos' },
{title: "π Carreras de caballos", rowId: usedPrefix + command + ' ' + text + 'π Carreras de caballos' },
{title: "π΅ Carreras de motocicletas", rowId: usedPrefix + command + ' ' + text + 'π΅ Carreras de motocicletas' },
{title: "βοΈ Carreras de moto de nieve", rowId: usedPrefix + command + ' ' + text + 'βοΈ Carreras de moto de nieve' },
{title: "π§ Carreras de obstΓ‘culos", rowId: usedPrefix + command + ' ' + text + 'π§ Carreras de obstΓ‘culos' },
{title: "π¦? Carreras de perros", rowId: usedPrefix + command + ' ' + text + 'π¦? Carreras de perros' },
{title: "π· Carreras de trineos", rowId: usedPrefix + command + ' ' + text + 'π· Carreras de trineos' },
{title: "βΏ Carreras en silla de ruedas", rowId: usedPrefix + command + ' ' + text + 'βΏ Carreras en silla de ruedas' },
{title: "πΊοΈ CartografΓ­a", rowId: usedPrefix + command + ' ' + text + 'πΊοΈ CartografΓ­a' },
{title: "πΉ Caza", rowId: usedPrefix + command + ' ' + text + 'πΉ Caza' },
{title: "π² Ciclismo", rowId: usedPrefix + command + ' ' + text + 'π² Ciclismo' },
{title: "π¬ CinematografΓ­a", rowId: usedPrefix + command + ' ' + text + 'π¬ CinematografΓ­a' },
{title: "π? Clarividencia", rowId: usedPrefix + command + ' ' + text + 'π? Clarividencia' },
{title: "π³ Cocinar", rowId: usedPrefix + command + ' ' + text + 'π³ Cocinar' },
{title: "π₯ Cocina saludable", rowId: usedPrefix + command + ' ' + text + 'π₯ Cocina saludable' },
{title: "π§€ Coleccionar objetos", rowId: usedPrefix + command + ' ' + text + 'π§€ Coleccionar objetos' },
{title: "ποΈ Coleccionar antigΓΌedades", rowId: usedPrefix + command + ' ' + text + 'ποΈ Coleccionar antigΓΌedades' },
{title: "π₯ Coleccionar cΓ³mics", rowId: usedPrefix + command + ' ' + text + 'π₯ Coleccionar cΓ³mics' },
{title: "π Coleccionar libros", rowId: usedPrefix + command + ' ' + text + 'π Coleccionar libros' },
{title: "π­ Comedia", rowId: usedPrefix + command + ' ' + text + 'π­ Comedia' },
{title: "π» ConspiraciΓ³n", rowId: usedPrefix + command + ' ' + text + 'π» ConspiraciΓ³n' },	
{title: "π Comer", rowId: usedPrefix + command + ' ' + text + 'π Comer' },
{title: "π΅ ComposiciΓ³n de canciones", rowId: usedPrefix + command + ' ' + text + 'π΅ ComposiciΓ³n de canciones' },
{title: "πΆ ComposiciΓ³n de mΓΊsica", rowId: usedPrefix + command + ' ' + text + 'πΆ ComposiciΓ³n de mΓΊsica' },
{title: "π Conducir", rowId: usedPrefix + command + ' ' + text + 'π Conducir' },
{title: "π© Cosplay", rowId: usedPrefix + command + ' ' + text + 'π© Cosplay' }, 
{title: "π Cultivo de flores", rowId: usedPrefix + command + ' ' + text + 'π Cultivo de flores' },
{title: "πΌ Danza", rowId: usedPrefix + command + ' ' + text + 'πΌ Danza' },
{title: "π₯ Defensa personal", rowId: usedPrefix + command + ' ' + text + 'π₯ Defensa personal' },
{title: "π Deportes extremos", rowId: usedPrefix + command + ' ' + text + 'π Deportes extremos' },
{title: "βοΈ Dibujar", rowId: usedPrefix + command + ' ' + text + 'βοΈ Dibujar' },
{title: "βοΈ Dibujar en 3D", rowId: usedPrefix + command + ' ' + text + 'βοΈ Dibujar en 3D' },
{title: "π€ Dormir", rowId: usedPrefix + command + ' ' + text + 'π€ Dormir' },
{title: "π Estar en YouTube", rowId: usedPrefix + command + ' ' + text + 'π Estar en YouTube' },
{title: "π Estar en TikTok", rowId: usedPrefix + command + ' ' + text + 'π Estar en TikTok' },
{title: "π Estar en Facebook", rowId: usedPrefix + command + ' ' + text + 'π Estar en Facebook' },	
{title: "π Estar en Facebook Messenger", rowId: usedPrefix + command + ' ' + text + 'π Estar en Facebook Messenger' },
{title: "π Estar en Whatsapp", rowId: usedPrefix + command + ' ' + text + 'π Estar en Whatsapp' },	
{title: "π Estar en Instagram", rowId: usedPrefix + command + ' ' + text + 'π Estar en Instagram' },
{title: "π Estar en Twitter", rowId: usedPrefix + command + ' ' + text + 'π Estar en Twitter' },
{title: "π Estar en Pinterest", rowId: usedPrefix + command + ' ' + text + 'π Estar en Pinterest' },
{title: "π Estar en Telegram", rowId: usedPrefix + command + ' ' + text + 'π Estar en Telegram' },
{title: "π Estar en WeChat", rowId: usedPrefix + command + ' ' + text + 'π Estar en WeChat' },
{title: "π Estar en Snapchat", rowId: usedPrefix + command + ' ' + text + 'π Estar en Snapchat' },
{title: "π Estar en Reddit", rowId: usedPrefix + command + ' ' + text + 'π Estar en Reddit' },	
{title: "π Escritura creativa", rowId: usedPrefix + command + ' ' + text + 'π Escritura creativa' },
{title: "π§ Escuchar mΓΊsica", rowId: usedPrefix + command + ' ' + text + 'π§ Escuchar mΓΊsica' },
{title: "π Estudiar", rowId: usedPrefix + command + ' ' + text + 'π Estudiar' },
{title: "π» Fantasmas y/o apariciones", rowId: usedPrefix + command + ' ' + text + 'π» Fantasmas y/o apariciones' },
{title: "π Fitness", rowId: usedPrefix + command + ' ' + text + 'π Fitness' },
{title: "πΈ FotografΓ­a", rowId: usedPrefix + command + ' ' + text + 'πΈ FotografΓ­a' },
{title: "πΈ FotogΓ©nico/a", rowId: usedPrefix + command + ' ' + text + 'πΈ FotogΓ©nico/a' },	
{title: "πΈ FotografΓ­a de moda", rowId: usedPrefix + command + ' ' + text + 'πΈ FotografΓ­a de moda' },
{title: "πΈ FotografΓ­a de juegos", rowId: usedPrefix + command + ' ' + text + 'πΈ FotografΓ­a de juegos' },
{title: "πΈ FotografΓ­a de animales", rowId: usedPrefix + command + ' ' + text + 'πΈ FotografΓ­a de animales' },
{title: "πΈ FotografΓ­a de paisajes", rowId: usedPrefix + command + ' ' + text + 'πΈ FotografΓ­a de paisajes' },
{title: "πΈ FotografΓ­a blanco y negro", rowId: usedPrefix + command + ' ' + text + 'πΈ FotografΓ­a blanco y negro' },
{title: "β½ FΓΊtbol", rowId: usedPrefix + command + ' ' + text + 'β½ FΓΊtbol' },
{title: "π FΓΊtbol americano", rowId: usedPrefix + command + ' ' + text + 'π FΓΊtbol americano' },
{title: "π? Gamer", rowId: usedPrefix + command + ' ' + text + 'π? Gamer' },	
{title: "π Gimnasia acuΓ‘tica", rowId: usedPrefix + command + ' ' + text + 'π Gimnasia acuΓ‘tica' },
{title: "π Hockey", rowId: usedPrefix + command + ' ' + text + 'π Hockey' },
{title: "βοΈ IlustraciΓ³n", rowId: usedPrefix + command + ' ' + text + 'βοΈ IlustraciΓ³n' },
{title: "π€ Ir a concietos", rowId: usedPrefix + command + ' ' + text + 'π€ Ir a concietos' },
{title: "π Ir al gimnasio", rowId: usedPrefix + command + ' ' + text + 'π Ir a gimnasio' },
{title: "ποΈ Ir de compra", rowId: usedPrefix + command + ' ' + text + 'ποΈ Ir de compra' },
{title: "π? Juegos VR/AR", rowId: usedPrefix + command + ' ' + text + 'π? Juegos VR/AR' },
{title: "π? Juegos de rol", rowId: usedPrefix + command + ' ' + text + 'π? Juegos de rol' },
{title: "π? Juegos de acciΓ³n", rowId: usedPrefix + command + ' ' + text + 'π? Juegos de acciΓ³n' },
{title: "π? Juegos de pelea", rowId: usedPrefix + command + ' ' + text + 'π? Juegos de pelea' },
{title: "π? Juegos de arcade", rowId: usedPrefix + command + ' ' + text + 'π? Juegos de arcade' },
{title: "π? Juegos de aventura", rowId: usedPrefix + command + ' ' + text + 'π? Juegos de aventura' },
{title: "π? Juegos de estrategia", rowId: usedPrefix + command + ' ' + text + 'π? Juegos de estrategia' },
{title: "π? Juegos de simulaciΓ³n", rowId: usedPrefix + command + ' ' + text + 'π? Juegos de simulaciΓ³n' },
{title: "π? Juegos de deportes", rowId: usedPrefix + command + ' ' + text + 'π? Juegos de deportes' },
{title: "π? Juegos de carreras", rowId: usedPrefix + command + ' ' + text + 'π? Juegos de carreras' },
{title: "π? Juegos de battle royale", rowId: usedPrefix + command + ' ' + text + 'π? Juegos de battle royale' },
{title: "π? Juegos clΓ‘sicos", rowId: usedPrefix + command + ' ' + text + 'π? Juegos clΓ‘sicos' },
{title: "π Juegos de cartas", rowId: usedPrefix + command + ' ' + text + 'π Juegos de cartas' },
{title: "π² Juegos de mesa", rowId: usedPrefix + command + ' ' + text + 'π² Juegos de mesa' },
{title: "π Leer", rowId: usedPrefix + command + ' ' + text + 'π Leer' },
{title: "π Lucha libre", rowId: usedPrefix + command + ' ' + text + 'π Lucha libre' },
{title: "π Maquillaje artΓ­stico", rowId: usedPrefix + command + ' ' + text + 'π Maquillaje artΓ­stico' },
{title: "π Memes", rowId: usedPrefix + command + ' ' + text + 'π Memes' },
{title: "π­ MeditaciΓ³n", rowId: usedPrefix + command + ' ' + text + 'π­ MeditaciΓ³n' },
{title: "π₯οΈ Modelado 3D", rowId: usedPrefix + command + ' ' + text + 'π₯οΈ Modelado 3D' },
{title: "β¨ ObservaciΓ³n de estrellas", rowId: usedPrefix + command + ' ' + text + 'β¨ ObservaciΓ³n de estrellas' },
{title: "π ObservaciΓ³n de la luna", rowId: usedPrefix + command + ' ' + text + 'π ObservaciΓ³n de la luna' },
{title: "β ObservaciΓ³n de las nubes", rowId: usedPrefix + command + ' ' + text + 'β ObservaciΓ³n de las nubes' },
{title: "π Origami", rowId: usedPrefix + command + ' ' + text + 'π Origami' },
{title: "π£ Pesca", rowId: usedPrefix + command + ' ' + text + 'π£ Pesca' },
{title: "π¨ Pintura", rowId: usedPrefix + command + ' ' + text + 'π¨ Pintura' },
{title: "ποΈ Podcasts", rowId: usedPrefix + command + ' ' + text + 'ποΈ Podcasts' },
{title: "π PoesΓ­a", rowId: usedPrefix + command + ' ' + text + 'π PoesΓ­a' },
{title: "πΎ Tenis", rowId: usedPrefix + command + ' ' + text + 'πΎ Tenis' },
{title: "π Tenis de mesa", rowId: usedPrefix + command + ' ' + text + 'π Tenis de mesa' },
{title: "π΅ Toco un instrumento", rowId: usedPrefix + command + ' ' + text + 'π΅ Toco un instrumento' },	
{title: "πΉ Tocar el piano", rowId: usedPrefix + command + ' ' + text + 'πΉ Tocar el piano' },
{title: "πΈ Tocar la guitarra", rowId: usedPrefix + command + ' ' + text + 'πΈ Tocar la guitarra' },
{title: "π» Tocar el violΓ­n", rowId: usedPrefix + command + ' ' + text + 'π» Tocar el violΓ­n' },
{title: "π· Tocar el saxofΓ³n", rowId: usedPrefix + command + ' ' + text + 'π· Tocar el saxofΓ³n' },
{title: "πΊ Tocar la trompeta", rowId: usedPrefix + command + ' ' + text + 'πΊ Tocar la trompeta' },
{title: "πͺ Tocar el tamboril", rowId: usedPrefix + command + ' ' + text + 'πͺ Tocar el tamboril' },
{title: "π₯ Tocar el tambor", rowId: usedPrefix + command + ' ' + text + 'π₯ Tocar el tambor' },
{title: "πΊ Ver la televisiΓ³n", rowId: usedPrefix + command + ' ' + text + 'πΊ Ver la televisiΓ³n' },
{title: "π Viajar", rowId: usedPrefix + command + ' ' + text + 'π Viajar' },
{title: "π Viajar de mochilero/a", rowId: usedPrefix + command + ' ' + text + 'π Viajar de mochilero/a' },
{title: "π« Visitar amigos", rowId: usedPrefix + command + ' ' + text + 'π« Visitar amigos' },
{title: "πΉ Vlog", rowId: usedPrefix + command + ' ' + text + 'πΉ Vlog' },
{title: "π Voleibol", rowId: usedPrefix + command + ' ' + text + 'π Voleibol' },
{title: "π Yoga", rowId: usedPrefix + command + ' ' + text + 'π Yoga' },
{title: "πΌ Γpera", rowId: usedPrefix + command + ' ' + text + 'πΌ Γpera' }]},]

const listMessage = {
text: `*SELECCIONE SUS PASATIEMPOS POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n*EDAD:* _${edad}_\n*GΓNERO:* _${genero}_\n*IDENTIDAD DE GΓNERO:* _${identidad}_\n\n*β°βΈΊ βΉ βΈΊ  βΉ βΈΊ βΉ βΈΊ βΉ βΈΊ βΉ*`,
footer: wm,
title: "*β­βΈΊ βΉ βΈΊ  βΉ βΈΊ βΉ βΈΊ βΉ βΈΊ βΉ*\n",
buttonText: "βοΈ IDENTIDAD DE GΓNERO βοΈ",
sections
}

if (command == 'pasatiempo' || command == 'hobby') {
if (typeof pas1 === 'string') throw '*NO PUEDE CAMBIAR DE PASATIEMPO*'
if (!text) return conn.sendMessage(m.chat, listMessage, m)
pas1 = text.trim()
pasatiempo = pas1
global.db.data.users[m.sender]['registroC'] = true
conn.sendButton(m.chat, '*GENIAL!! SE HA AGREGADO UN PASATIEMPO:*\n' + pasatiempo , 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mΓ­nimo un pasatiempo\n\n' + wm, null, [[`βοΈ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas2'], [`π FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}	
	
if (command == 'pas2') {
if (typeof pas2 === 'string') throw '*NO PUEDE CAMBIAR DE PASATIEMPO*'
if (!text) return conn.sendMessage(m.chat, listMessage, m)

if (user.pasatiempo2 == text) throw '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*' 
global.db.data.users[m.sender]['registroC'] = true
pas2 = text.trim()	
pasatiempo = pas1 + ', ' + pas2
conn.sendButton(m.chat, '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO:*\n' + pasatiempo , 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mΓ­nimo un pasatiempo\n\n' + wm, null, [[`βοΈ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas3'], [`π FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'pas3') {
if (typeof pas3 === 'string') throw '*NO PUEDE CAMBIAR DE PASATIEMPO*'
if (!text) return conn.sendMessage(m.chat, listMessage, m)

if (pas2 == text || pas1 == text) throw '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*'
global.db.data.users[m.sender]['registroC'] = true
pas3 = text.trim()
pasatiempo = pas1 + ', ' + pas2 + ', ' + pas3
conn.sendButton(m.chat, '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO:*\n' + pasatiempo , 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mΓ­nimo un pasatiempo\n\n' + wm, null, [[`βοΈ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas4'], [`π FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'pas4') {
if (typeof pas4 === 'string') throw '*NO PUEDE CAMBIAR DE PASATIEMPO*'
if (!text) return conn.sendMessage(m.chat, listMessage, m)

if (pas3 == text || pas2 == text || pas1 == text) throw '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*'
global.db.data.users[m.sender]['registroC'] = true
pas4 = text.trim()	
pasatiempo = pas1 + ', ' + pas2 + ', ' + pas3 + ', ' + pas4
conn.sendButton(m.chat, '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO:*\n' + pasatiempo , 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mΓ­nimo un pasatiempo\n\n' + wm, null, [[`βοΈ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas5'], [`π FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'pas5') {
if (typeof pas5 === 'string') throw '*NO PUEDE CAMBIAR DE PASATIEMPO*'
if (!text) return conn.sendMessage(m.chat, listMessage, m)
if (pas4 == text || pas3 == text || pas2 == text || pas1 == text) throw '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*'
global.db.data.users[m.sender]['registroC'] = true	
pas5 = text.trim()
pasatiempo = pas1 + ', ' + pas2 + ', ' + pas3 + ', ' + pas4 + ', ' + pas5
conn.sendButton(m.chat, '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO:*\n' + pasatiempo , 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mΓ­nimo un pasatiempo\n\n' + wm, null, [[`π FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
	
if (command == 'finalizar' || command == 'end') {
if (global.db.data.users[m.sender]['registroC'] == true) {

var tiempo = user.premLimit === 1 ? tiempo = 0 : tiempo = 1080000 //10800 000 //3 horas
var now = new Date() * 1
if (now < user.premiumTime) user.premiumTime += tiempo
else user.premiumTime = now + tiempo
user.premium = true

fecha = `${week}, ${date} *||* `
hora = `${time}`
user.tiempo = fecha + hora
user.name = nombre 
user.descripcion = bio
user.age = edad
user.genero = genero
user.identidad = identidad
user.pasatiempo = pasatiempo
}else{
user.name = nombre 
user.age = edad	
}
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
	
let caption = `
π \`\`\`VERIFICACIΓN EXITOSA\`\`\` π
*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*

πΌ *REGISTRADO POR*
β±β± ${wm}

π *TIPO DE REGISTRO* 
β±β± ${user.registroC === true ? 'Registro Completo' : 'Registro RΓ‘pido'}

β *FECHA/HORA*
β±β± ${user.tiempo} 

β *INSIGNIA DE VERIFICACIΓN*
β±β±   *${user.registered === true ? 'Ν§Ν§Ν§Ν¦κΆΝ£Ν€βα²α΄³α΄?' : ''}*

π€ *NOMBRE* 
β±β± ${user.name}${user.registered === true ? 'Ν§Ν§Ν§Ν¦κΆΝ£Ν€βα²α΄³α΄?' : ''}

π *DESCRIPCIΓN*
${user.descripcion}

π’ *EDAD* 
β±β± ${user.age} AΓ±os *||* ${user.age >= 18 ? '(Persona Adulta)' : '(Persona Joven)'}
${user.registroC === true ? `\nβοΈ *GENERO*
β±β± ${user.genero == 'Ocultado' ? `${user.genero} π£οΈ` : user.genero == 'Mujer' ? `${user.genero} πΊ` : user.genero == 'Hombre' ? `${user.genero} πΉ` : ''}

π± *IDENTIDAD DE GΓNERO*
β±β± ${user.identidad}

βοΈ *PASATIEMPO(S)*
β±β± ${user.pasatiempo}` : ''}
${user.premLimit === 1 ? '' : `\nποΈ *PREMIUM* 
β±β± ${user.premLimit === 1 ? '' : `${user.premiumTime > 0 ? 'β' : 'β'} +3 HORAS`}`} 

π *CΓDIGO DE REGISTRO*
β±β± ${sn}`.trim()

await m.reply('π ```VERIFICANDO DATOS...```')
await conn.sendButton(m.chat, caption, user.registroC === true ? 'Si elimina su registro se eliminarΓ‘ los datos e insignia y dejara de tener acceso a los comandos con registro\n\nTendrΓ‘ Premium solo la premira vez que se registre si llega a volver a registrarse no tendrΓ‘ premium a excepciΓ³n si compra usando #pase premium\n\nPuede volver a eliminar su registro y registrarse desde 0 sin problema.\n\nSu cΓ³digo de serie le permitirΓ‘ borrar su registro ejemplo:\n' + `${usedPrefix}unreg ${sn}` : 'Si elimina su registro se eliminarΓ‘ los datos e insignia y dejara de tener acceso a los comandos con registro\n\nPuede volver a eliminar su registro y registrarse desde 0 sin problema.\n\nSu cΓ³digo de serie le permitirΓ‘ borrar su registro ejemplo:\n' + `${usedPrefix}unreg ${sn}`, [['πΌππ€π§π ππ¨π©π€π? πππ§πππππππ€(π)!! β', '/profile']], m)
await m.reply(`${sn}`)
	
}}
handler.command = ['verify', 'verificar', 'register', 'registrar', 'reg', 'reg1', 'nombre', 'name', 'nombre2', 'name2', 'edad', 'age', 'edad2', 'age2', 'genero', 'gΓ©nero', 'gender', 'identidad', 'pasatiempo', 'hobby', 'identity', 'finalizar', 'pas2', 'pas3', 'pas4', 'pas5']  ///^(verify|verificar|reg(ister)?)$/i
export default handler
/*
import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `${iig}ππΌ ππππΌπ ππππππππΌπΏπ(πΌ)!!\nππ ππππππ πΌππππΌπ ππ ππππππππ πππ ππππ πΎπππΌππΏπ\n*${usedPrefix}unreg numero de serie*\n\nππ ππ πππΎππππΏπΌ ππ ππππππ πΏπ πππππ πππ ππππ πΎπππΌππΏπ\n*${usedPrefix}myns*`
let name = conn.getName(m.sender)
let age = `${pickRandom(['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}`
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
//global.db.data.users[m.sender].money += 1000
//global.db.data.users[m.sender].limit += 15
//global.db.data.users[m.sender].exp += 1500
//global.db.data.users[m.sender].joincount += 5
let caption = `β­βββ[ *πππππππΎπΌπ | ππππππ* ]βββββ¬£
β *NOMBRE* 
β ${name} ${user.registered === true ? 'Ν§Ν§Ν§Ν¦κΆΝ£Ν€βα²α΄³α΄?' : ''}
ββββββββββββββββββ
β *EDAD* 
β *${age} aΓ±os*
β°βββββββββββββββββββ¬£`
//let author = global.author
await conn.sendButton(m.chat, caption, `ππ ππππππ πΏπ πππππ ππ πππππππΌ ππ πΎπΌππ πππ ππππππΌ π½ππππΌπ ππ ππππππππ\nπππππππ\n${usedPrefix}unreg numero de serie\n${wm}`, [['πΌππ€π§π ππ¨π©π€π? πππ§πππππππ€(π)!! β', '/profile']], m)
await m.reply(`${sn}`) 

}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|registrar|verificado|verificada|verificarme)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
*/
