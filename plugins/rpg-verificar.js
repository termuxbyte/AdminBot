//CÓDIGO CREADO POR GataNina-Li : https://github.com/GataNina-Li

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

if (user.registered === true) throw `${iig}𝙔𝘼 𝙀𝙎𝙏𝘼𝙎 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊(𝘼)!!\n𝙎𝙄 𝙌𝙐𝙄𝙀𝙍𝙀 𝘼𝙉𝙐𝙇𝘼𝙍 𝙎𝙐 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 𝙐𝙎𝙀 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n*${usedPrefix}unreg numero de serie*\n\n𝙎𝙄 𝙉𝙊 𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝘼 𝙎𝙐 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙎𝙀𝙍𝙄𝙀 𝙐𝙎𝙀 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n*${usedPrefix}myns*`

//if (typeof nombre === 'number') throw '*PARÁMETRO FALTANTE*'
if (command == 'verificar' || command == 'verify' || command == 'register' || command == 'reg' || command == 'registrar') {
await conn.sendButton(m.chat, iig + '😇 *CÓMO DESEA REGISTRARSE?*', '*REGISTRO RAPIDO*\n- Insignia de verificación\n- Desbloquear comandos que requieran registro\n\n*REGISTRO COMPLETO*\n- Insignia de verificación\n- Desbloquear comandos que requieran registro\n- Recompensas por usar este tipo de registro\n- Premium Temporal Gratis\n\n' + wm, null, [[`📑 REGISTRO RÁPIDO`, usedPrefix + 'Reg1'], [`🗂️ REGISTRO COMPLETO`, usedPrefix + 'nombre']], m) 
}
	
if (command == 'reg1') {
registro = text.replace(/\s+/g, usedPrefix) 
_registro = text.split(" ",2) 

if (!text) return conn.sendButton(m.chat, mg + `*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\`\n\n*EJEMPLO:* \`\`\`${usedPrefix + command} ${gt} 20\`\`\``, '```CONSEJO:```\n\n- Escriba "Nombre" + "espacio" + "edad"\n- Su nombre no debe de contener números\n- La edad no debe de contener Letras\n\n*Sabías que puede personalizar más su registro?*\n_Usando el Botón de abajo_', null, [[`🗂️ USAR REGISTRO COMPLETO`, usedPrefix + 'nombre']], m)
if (_registro['length'] >= 3 || isNaN(_registro[1])) return conn.sendButton(m.chat, fg + '🙃 *ESTÁ INTENTANDO SEPRAR SU NOMBRE O UNIR TODO?* ', '🧐 *COINCIDE COMO EN ESTOS EJEMPLOS:*\n' + `\`\`\`${usedPrefix + command} Super${gt}20\`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super 15 ${gt} \`\`\`` + '\n' + `\`\`\`${usedPrefix + command} Super ${gt} 24 De ${author}\`\`\`\n\n` + '*Si cumple que tenga (Nombre/Frase y Edad) Autocompletaremos su Registro*\n_Use el Botón de abajo_', null, [[`🌟 AUTOCOMPLETAR MI REGISTRO`, usedPrefix + 'reg1' + ' ' + text.replace(/\s+/g, '').replace(/[0-9]+/gi, "") + ' ' + text.replace(/\s+/g, '').replace(/[a-z]+/gi, "")], ['📑 VOLVER A REGISTRAR', command + usedPrefix]], m)
if (!_registro[0]) return conn.sendButton(m.chat, fg + `*FALTA SU NOMBRE, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, wm, null, [[`🗂️ USAR REGISTRO COMPLETO`, usedPrefix + 'nombre']], m)
if (_registro[0].length >= 30) throw fg + '*SU NOMBRE ES MUY LARGO, USE OTRO NOMBRE POR FAVOR*' 
if (_registro[0].length <= 2) throw fg + '*SU NOMBRE ES MUY CORTO, USE OTRO NOMBRE POR FAVOR*'
_registro[0] = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "")
nombre = _registro[0]
	
if (!_registro[1]) return conn.sendButton(m.chat, fg + `*FALTA SU EDAD, PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``, wm, null, [[`🗂️ USAR REGISTRO COMPLETO`, usedPrefix + 'nombre']], m)
//if (isNaN(_registro[1])) throw '*LA EDAD DEBE DE SER SOLO NÚMEROS*'
if (_registro[1] > 50) throw fg + `*SU EDAD ES MUY MAYOR, USE OTRA EDAD POR FAVOR*\n\n*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``
if (_registro[1] < 10) throw fg + `*SU EDAD ES MUY MENOR, USE OTRA EDAD POR FAVOR*\n\n*PARÁMETROS DEL REGISTRO:*\n\`\`\`${usedPrefix + command} nombre edad\`\`\``
edad = parseInt(_registro[1]) //_registro[1]	
global.db.data.users[m.sender]['registroR'] = true
	
await conn.sendButton(m.chat, eg + '*GENIAL!! SE HA COMPLETADO LO SIGUIENTE*\n*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*\n\n*✤ NOMBRE:* ' + nombre + '\n' + '*✤ EDAD:* ' + edad + ' años', wm, null, [[`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)	
}
		
if (command == 'nombre' || command == 'name') {
if (verificar.test(text) == false || text.length <= 1) return conn.sendButton(m.chat, '*PERSONALICE SU NOMBRE PARA REGISTRAR, EJEMPLO:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*También puede vincular su nombre de WhatsApp*\n_Usando el Botón de abajo_', null, [[`🛐 REGISTRAR CON WHATSAPP`, `${usedPrefix + 'nombre2'}`]], m)
if (text.length >= 25) return conn.sendButton(m.chat, '*USE UN NOMBRE MÁS CORTO, EJEMPLO:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*Acaso quiere usar su nombre registrado en su WhatsApp ?*\n_En ese caso use el Botón de abajo_', null, [[`🛐 REGISTRAR CON WHATSAPP`, usedPrefix + 'nombre2']], m)
if (text.length <= 2) return conn.sendButton(m.chat, '*NOMBRE FALTANTE O MUY CORTO, EJEMPLO:*\n' + '```' + usedPrefix + command + ' ' + gt + '```', '*Acaso quiere usar su nombre registrado en su WhatsApp ?*\n_En ese caso use el Botón de abajo_', null, [[`🛐 REGISTRAR CON WHATSAPP`, usedPrefix + 'nombre2']], m) 

nombre = text.replace(/\s+/g, '').replace(/[0-9]+/gi, "").trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre, wm, null, [[`🔢 REGISTRAR MI EDAD`, usedPrefix + 'edad']], m)
}
	
if (command == 'nombre2' || command == 'name2') {
if (nombreWA.slice(1).length < 2) return conn.sendButton(m.chat, '*SU NOMBRE DE WHATSAPP ES MUY CORTO PARA REGISTRAR USANDO* ' + '```' + usedPrefix + command + '```', '*Modifique su nombre de WhatsApp e intente de nuevo o puede personalizar su nombre*\n_Sí quiere personalizar use el Botón de abajo_', null, [[`🛐 PERSONALIZAR REGISTRO`, usedPrefix + 'nombre']], m) 
if (nombreWA.slice(1).length > 25) return conn.sendButton(m.chat, '*SU NOMBRE DE WHATSAPP ES MUY LARGO PARA REGISTRAR USANDO* ' + '```' + usedPrefix + command + '```', '*Modifique su nombre de WhatsApp e intente de nuevo o puede personalizar su nombre*\n_Sí quiere personalizar use el Botón de abajo_', null, [[`🛐 PERSONALIZAR REGISTRO`, usedPrefix + 'nombre']], m)
nombre = nombreWA.replace(/\s+/g, '').replace(/[0-9]+/gi, "").slice(1).trim()	
	
if (verificar.test(text) == false) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre, wm, null, [[`🔢 REGISTRAR MI EDAD`, usedPrefix + 'edad']], m)
}

	
if (command == 'edad' || command == 'age') {
const sections = [
{ title: "🌟 SELECCIONA TU EDAD!!",
rows: [ {title: "♻️ Edad Random", rowId: usedPrefix + command + ' ' + usedPrefix +  text + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','31'])}]
}, {
title: "🍃 JOVEN",
rows: [
{title: "1️⃣0️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '10'},
{title: "1️⃣1️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '11'},
{title: "1️⃣2️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '12'},
{title: "1️⃣3️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '13'},
{title: "1️⃣4️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '14'},
{title: "1️⃣5️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '15'},
{title: "1️⃣6️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '16'},
{title: "1️⃣7️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '17'}]
}, {
title: "🌳 ADULTO",
rows: [
{title: "1️⃣8️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '18'},
{title: "1️⃣9️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '19'},
{title: "2️⃣0️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '20'},
{title: "2️⃣1️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '21'},
{title: "2️⃣2️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '22'},
{title: "2️⃣3️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '23'},
{title: "2️⃣4️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '24'},
{title: "2️⃣5️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '25'},
{title: "2️⃣6️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '26'},
{title: "2️⃣7️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '27'},
{title: "2️⃣8️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '28'},
{title: "2️⃣9️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '29'},
{title: "3️⃣0️⃣ Años", rowId: usedPrefix + command + ' ' + usedPrefix + text + '30'}]
}, {
title: "🤔 NO ESTÁ TÚ EDAD ?",
rows: [
{title: "🔢 Personalizar mí edad", rowId: usedPrefix + 'edad2'}]},]

const listMessage = {
text: `*SELECCIONE SU EDAD POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*\n",
buttonText: "🫵 SELECCIONAR EDAD 🫵 ",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, m)
if (isNaN(text)) throw '*INGRESE SOLO NÚMEROS*'
if (text.slice(1).trim() > 50) throw '*DEMASIADO MAYOR PARA SER REGISTRADO*'
if (text.slice(1).trim() < 10) throw '*DEMASIADO MENOR PARA SER REGISTRADO*' //.replace(/[^0-9.]+/gi,' ')
	
//user.age = text.slice(1) 
edad = text.slice(1).trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre + '\n' + '*EDAD:* ' + edad + ' años', wm, null, [[`🍃 REGISTRAR MI GÉNERO `, usedPrefix + `genero`]], m)
}
	
if (command == 'edad2' || command == 'age2') {
if (verificar.test(text.slice(1)) == false && !text) return conn.sendButton(m.chat, '*PERSONALICE SU EDAD PARA REGISTRAR, EJEMPLO:*\n' + usedPrefix + command + ' ' + usedPrefix + '35', '*Sabías que puede seleccionar su edad de una lista ?*\n_En ese caso use el Botón de abajo_', null, [[`🔢 REGISTRAR MI EDAD`, usedPrefix + 'edad']], m)
if (isNaN(text)) throw '*INGRESE SOLO NÚMEROS*'
if (text > 50) throw '*DEMASIADO MAYOR PARA SER REGISTRADO*'
if (text < 10) throw '*DEMASIADO MENOR PARA SER REGISTRADO*'

//user.age = text.slice(1) 
edad = text.replace(/\s+/g, '').replace(/[a-z]+/gi, "").trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre + '\n' + '*EDAD:* ' + edad + ' años', wm, null, [[`REGISTRAR MI GÉNERO `, usedPrefix + `genero`]], m)
}

	
if (command == 'genero' || command == 'género' || command == 'gender') {
const sections = [
{ title: "🌟 SELECCIONA TU GÉNERO!!",
title: comienzo + " 🚹 MASCULINO " + fin,
rows: [ 
{title: "🚹 Hombre", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Hombre' }]
}, {
title: comienzo + " 🚺 FEMENINO " + fin,
rows: [
{title: "🚺 Mujer", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Mujer' }]
}, {
title: comienzo + " 👤 OCULTAR " + fin,
rows: [
{title: "👤 Ocultado", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Ocultado' }]},]

const listMessage = {
text: `*SELECCIONE SU GÉNERO POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n*EDAD:* _${edad}_\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*\n",
buttonText: "🧬 SELECCIONAR GÉNERO 🧬 ",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, m)
genero = text.slice(1).trim()	
	
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre + '\n' + '*EDAD:* ' + edad + ' años' + '\n' + '*GENERO:* ' + genero, wm, null, [[`🌱 REGISTRAR MI IDENTIDAD`, usedPrefix + 'identidad']], m)	 
}
	
if (command == 'identidad' || command == 'identity') {
const sections = [
{ title: "🌱 SELECCIONE SU IDENTIDAD DE GÉNERO!!",
rows: [
{title: "• Agénero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Agénero' },	
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Agénero'},		
{title: "• Andrógino", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Andrógino' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Andrógino'},	
{title: "• Andrógina", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Andrógina' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Andrógina'},	
{title: "• Asexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Asexual' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Asexual'},		
{title: "• Bigénero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Bigénero' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Bigénero'},	
{title: "• Bisexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Bisexual' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Bisexual'},	
{title: "• Cisgenero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Cisgenero' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Cisgenero'},	
{title: "• CrossDresser", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'CrossDresser' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'CrossDresser'},	
{title: "• Demigénero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Demigénero' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Demigénero'},	
{title: "• Gay", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Gay' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Gay'},	
{title: "• Género fluido", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Género fluido' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Género fluido'},	
{title: "• Género neutro", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Género neutro' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Género neutro'},	
{title: "• Genderqueer", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Genderqueer' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Genderqueer'},	
{title: "• Heterosexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Heterosexual' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Heterosexual'},	
{title: "• Heteroflexible", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Heteroflexible' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Heteroflexible'},	
{title: "• Homoflexible", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Homoflexible' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Homoflexible'},	
{title: "• Homosexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Homosexual' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Homosexual'},	
{title: "• Intersexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Intersexual' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Intersexual'},	
{title: "• Lesbiana", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Lesbiana' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Lesbiana'},	
{title: "• Pansexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Pansexual' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Pansexual'},	
{title: "• Pangénero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Pangénero' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Pangénero'},	
{title: "• Questioning", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Questioning' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Questioning'},	
{title: "• Queer", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Queer' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Queer'},	
{title: "• Sapiosexual", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Sapiosexual' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Sapiosexual'},	
{title: "• Transgénero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Transgénero' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Transgénero'},	
{title: "• Trigénero", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Trigénero' },	
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Trigénero'},	
{title: "• Variante/Género expansivo", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Género expansivo' },
{title: "⬆️ Quiero Saber mas ⬆️", rowId: usedPrefix + 'google' + ' ' + 'Género expansivo'}]
}, {
title: comienzo + " 👤 OCULTAR " + fin,
rows: [
{title: "Ocultado", rowId: usedPrefix + command + ' ' + usedPrefix + text + 'Ocultado' }]},]

const listMessage = {
text: `*SELECCIONE SU IDENTIDAD DE GÉNERO POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n*EDAD:* _${edad}_\n*GÉNERO:* _${genero}_\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*\n",
buttonText: "🌱 IDENTIDAD DE GÉNERO 🌱",
sections
}

if (!text) return conn.sendMessage(m.chat, listMessage, m)
	
identidad = text.slice(1).trim()
if (verificar.test(text) == true) return conn.sendButton(m.chat, '*GENIAL!! SE HA REGISTRADO LO SIGUIENTE:*\n*NOMBRE:* ' + nombre + '\n' + '*EDAD:* ' + edad + ' años' + '\n' + '*IDENTIDAD DE GÉNERO:* ' + identidad, wm, null, [[`❇️ REGISTRAR MIS PASATIEMPOS`, usedPrefix + 'pasatiempo']], m)
}
	
const sections = [
{ title: "❇️ SELECCIONE HASTA 5 PASATIEMPOS!!",
rows: [
{title: "👟 Acroyoga", rowId: usedPrefix + command + ' ' + text + '👟 Acroyoga' },		
{title: "🎭 Actuación", rowId: usedPrefix + command + ' ' + text + '🎭 Actuación' },	
{title: "🥋 Aikido", rowId: usedPrefix + command + ' ' + text + '🥋 Aikido' },	
{title: "🎯 Airrsoft", rowId: usedPrefix + command + ' ' + text + '🎯 Airrsoft' },
{title: "♟️ Ajedrez", rowId: usedPrefix + command + ' ' + text + '♟️ Ajedrez' },
{title: "🏔️ Alpinismo", rowId: usedPrefix + command + ' ' + text + '🏔️ Alpinismo' },
{title: "🖥️ Animación", rowId: usedPrefix + command + ' ' + text + '🖥️ Animación' },
{title: "🎉 Animador/a de Equipos", rowId: usedPrefix + command + ' ' + text + '🎉 Animador/a de Equipos' },
{title: "✏️ Anime dibujos", rowId: usedPrefix + command + ' ' + text + '✏️ Anime dibujos' },	
{title: "🐝 Apicultura", rowId: usedPrefix + command + ' ' + text + '🐝 Apicultura' },
{title: "💻 Aprender a programar", rowId: usedPrefix + command + ' ' + text + '💻 Aprender a programar' },
{title: "🌐 Aprender un idioma", rowId: usedPrefix + command + ' ' + text + '🌐 Aprender un idioma' },
{title: "💐 Arreglos florales", rowId: usedPrefix + command + ' ' + text + '💐 Arreglos florales' },
{title: "🎨 Arte", rowId: usedPrefix + command + ' ' + text + '🎨 Arte' },
{title: "🥋 Artes marciales", rowId: usedPrefix + command + ' ' + text + '🥋 Artes marciales' },
{title: "🥋 Artes marciales mixtas", rowId: usedPrefix + command + ' ' + text + '🥋 Artes marciales mixtas' },
{title: "🔭 Astrofotografía", rowId: usedPrefix + command + ' ' + text + '🔭 Astrofotografía' },
{title: "🔮 Astrología", rowId: usedPrefix + command + ' ' + text + '🔮 Astrología' },
{title: "👟 Atletismo", rowId: usedPrefix + command + ' ' + text + '👟 Atletismo' },
{title: "🩰 Ballet", rowId: usedPrefix + command + ' ' + text + '🩰 Ballet' },
{title: "💄 Belleza", rowId: usedPrefix + command + ' ' + text + '💄 Belleza' },
{title: "🏔️ Barranquismo", rowId: usedPrefix + command + ' ' + text + '🏔️ Barranquismo' },
{title: "💻 Blog", rowId: usedPrefix + command + ' ' + text + '💻 Blog' },
{title: "✏️ Bocetos", rowId: usedPrefix + command + ' ' + text + '✏️ Bocetos' },
{title: "✂️ Bordado", rowId: usedPrefix + command + ' ' + text + '✂️ Bordado' },
{title: "🎳 Bowling", rowId: usedPrefix + command + ' ' + text + '🎳 Bowling' },
{title: "🥊 Boxeo", rowId: usedPrefix + command + ' ' + text + '🥊 Boxeo' },
{title: "🏸 Bádminton", rowId: usedPrefix + command + ' ' + text + '🏸 Bádminton' },
{title: "🏀 Baloncesto", rowId: usedPrefix + command + ' ' + text + '🏀 Baloncesto' },
{title: "⚾ Béisbol", rowId: usedPrefix + command + ' ' + text + '⚾ Béisbol' },
{title: "🖋️ Caligrafía", rowId: usedPrefix + command + ' ' + text + '🖋️ Caligrafía' },
{title: "👟 Caminata", rowId: usedPrefix + command + ' ' + text + '👟 Caminata' },
{title: "🏕 Camping", rowId: usedPrefix + command + ' ' + text + '🏕 Camping' },
{title: "🛶 Canoa", rowId: usedPrefix + command + ' ' + text + '🛶 Canoa' },
{title: "🎤 Canto", rowId: usedPrefix + command + ' ' + text + '🎤 Canto' }, 
{title: "🎤 Canto a capela", rowId: usedPrefix + command + ' ' + text + '🎤 Canto a capela' },
{title: "✏️ Caricaturas", rowId: usedPrefix + command + ' ' + text + '✏️ Caricaturas' },
{title: "🪚 Carpintería", rowId: usedPrefix + command + ' ' + text + '🪚 Carpintería' },
{title: "🏎️ Carreras de autos", rowId: usedPrefix + command + ' ' + text + '🏎️ Carreras de autos' },
{title: "🐎 Carreras de caballos", rowId: usedPrefix + command + ' ' + text + '🐎 Carreras de caballos' },
{title: "🛵 Carreras de motocicletas", rowId: usedPrefix + command + ' ' + text + '🛵 Carreras de motocicletas' },
{title: "❄️ Carreras de moto de nieve", rowId: usedPrefix + command + ' ' + text + '❄️ Carreras de moto de nieve' },
{title: "🚧 Carreras de obstáculos", rowId: usedPrefix + command + ' ' + text + '🚧 Carreras de obstáculos' },
{title: "🦮 Carreras de perros", rowId: usedPrefix + command + ' ' + text + '🦮 Carreras de perros' },
{title: "🛷 Carreras de trineos", rowId: usedPrefix + command + ' ' + text + '🛷 Carreras de trineos' },
{title: "♿ Carreras en silla de ruedas", rowId: usedPrefix + command + ' ' + text + '♿ Carreras en silla de ruedas' },
{title: "🗺️ Cartografía", rowId: usedPrefix + command + ' ' + text + '🗺️ Cartografía' },
{title: "🏹 Caza", rowId: usedPrefix + command + ' ' + text + '🏹 Caza' },
{title: "🚲 Ciclismo", rowId: usedPrefix + command + ' ' + text + '🚲 Ciclismo' },
{title: "🎬 Cinematografía", rowId: usedPrefix + command + ' ' + text + '🎬 Cinematografía' },
{title: "🔮 Clarividencia", rowId: usedPrefix + command + ' ' + text + '🔮 Clarividencia' },
{title: "🍳 Cocinar", rowId: usedPrefix + command + ' ' + text + '🍳 Cocinar' },
{title: "🥗 Cocina saludable", rowId: usedPrefix + command + ' ' + text + '🥗 Cocina saludable' },
{title: "🧤 Coleccionar objetos", rowId: usedPrefix + command + ' ' + text + '🧤 Coleccionar objetos' },
{title: "🗝️ Coleccionar antigüedades", rowId: usedPrefix + command + ' ' + text + '🗝️ Coleccionar antigüedades' },
{title: "💥 Coleccionar cómics", rowId: usedPrefix + command + ' ' + text + '💥 Coleccionar cómics' },
{title: "📚 Coleccionar libros", rowId: usedPrefix + command + ' ' + text + '📚 Coleccionar libros' },
{title: "🎭 Comedia", rowId: usedPrefix + command + ' ' + text + '🎭 Comedia' },
{title: "👻 Conspiración", rowId: usedPrefix + command + ' ' + text + '👻 Conspiración' },	
{title: "🍕 Comer", rowId: usedPrefix + command + ' ' + text + '🍕 Comer' },
{title: "🎵 Composición de canciones", rowId: usedPrefix + command + ' ' + text + '🎵 Composición de canciones' },
{title: "🎶 Composición de música", rowId: usedPrefix + command + ' ' + text + '🎶 Composición de música' },
{title: "🚗 Conducir", rowId: usedPrefix + command + ' ' + text + '🚗 Conducir' },
{title: "🎩 Cosplay", rowId: usedPrefix + command + ' ' + text + '🎩 Cosplay' }, 
{title: "💐 Cultivo de flores", rowId: usedPrefix + command + ' ' + text + '💐 Cultivo de flores' },
{title: "🎼 Danza", rowId: usedPrefix + command + ' ' + text + '🎼 Danza' },
{title: "🥋 Defensa personal", rowId: usedPrefix + command + ' ' + text + '🥋 Defensa personal' },
{title: "👟 Deportes extremos", rowId: usedPrefix + command + ' ' + text + '👟 Deportes extremos' },
{title: "✏️ Dibujar", rowId: usedPrefix + command + ' ' + text + '✏️ Dibujar' },
{title: "✏️ Dibujar en 3D", rowId: usedPrefix + command + ' ' + text + '✏️ Dibujar en 3D' },
{title: "💤 Dormir", rowId: usedPrefix + command + ' ' + text + '💤 Dormir' },
{title: "👋 Estar en YouTube", rowId: usedPrefix + command + ' ' + text + '👋 Estar en YouTube' },
{title: "👋 Estar en TikTok", rowId: usedPrefix + command + ' ' + text + '👋 Estar en TikTok' },
{title: "👋 Estar en Facebook", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Facebook' },	
{title: "👋 Estar en Facebook Messenger", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Facebook Messenger' },
{title: "👋 Estar en Whatsapp", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Whatsapp' },	
{title: "👋 Estar en Instagram", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Instagram' },
{title: "👋 Estar en Twitter", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Twitter' },
{title: "👋 Estar en Pinterest", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Pinterest' },
{title: "👋 Estar en Telegram", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Telegram' },
{title: "👋 Estar en WeChat", rowId: usedPrefix + command + ' ' + text + '👋 Estar en WeChat' },
{title: "👋 Estar en Snapchat", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Snapchat' },
{title: "👋 Estar en Reddit", rowId: usedPrefix + command + ' ' + text + '👋 Estar en Reddit' },	
{title: "📝 Escritura creativa", rowId: usedPrefix + command + ' ' + text + '📝 Escritura creativa' },
{title: "🎧 Escuchar música", rowId: usedPrefix + command + ' ' + text + '🎧 Escuchar música' },
{title: "📘 Estudiar", rowId: usedPrefix + command + ' ' + text + '📘 Estudiar' },
{title: "👻 Fantasmas y/o apariciones", rowId: usedPrefix + command + ' ' + text + '👻 Fantasmas y/o apariciones' },
{title: "👟 Fitness", rowId: usedPrefix + command + ' ' + text + '👟 Fitness' },
{title: "📸 Fotografía", rowId: usedPrefix + command + ' ' + text + '📸 Fotografía' },
{title: "📸 Fotogénico/a", rowId: usedPrefix + command + ' ' + text + '📸 Fotogénico/a' },	
{title: "📸 Fotografía de moda", rowId: usedPrefix + command + ' ' + text + '📸 Fotografía de moda' },
{title: "📸 Fotografía de juegos", rowId: usedPrefix + command + ' ' + text + '📸 Fotografía de juegos' },
{title: "📸 Fotografía de animales", rowId: usedPrefix + command + ' ' + text + '📸 Fotografía de animales' },
{title: "📸 Fotografía de paisajes", rowId: usedPrefix + command + ' ' + text + '📸 Fotografía de paisajes' },
{title: "📸 Fotografía blanco y negro", rowId: usedPrefix + command + ' ' + text + '📸 Fotografía blanco y negro' },
{title: "⚽ Fútbol", rowId: usedPrefix + command + ' ' + text + '⚽ Fútbol' },
{title: "🏈 Fútbol americano", rowId: usedPrefix + command + ' ' + text + '🏈 Fútbol americano' },
{title: "🎮 Gamer", rowId: usedPrefix + command + ' ' + text + '🎮 Gamer' },	
{title: "🏊 Gimnasia acuática", rowId: usedPrefix + command + ' ' + text + '🏊 Gimnasia acuática' },
{title: "🏒 Hockey", rowId: usedPrefix + command + ' ' + text + '🏒 Hockey' },
{title: "✏️ Ilustración", rowId: usedPrefix + command + ' ' + text + '✏️ Ilustración' },
{title: "🎤 Ir a concietos", rowId: usedPrefix + command + ' ' + text + '🎤 Ir a concietos' },
{title: "👟 Ir al gimnasio", rowId: usedPrefix + command + ' ' + text + '👟 Ir a gimnasio' },
{title: "🛍️ Ir de compra", rowId: usedPrefix + command + ' ' + text + '🛍️ Ir de compra' },
{title: "🎮 Juegos VR/AR", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos VR/AR' },
{title: "🎮 Juegos de rol", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de rol' },
{title: "🎮 Juegos de acción", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de acción' },
{title: "🎮 Juegos de pelea", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de pelea' },
{title: "🎮 Juegos de arcade", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de arcade' },
{title: "🎮 Juegos de aventura", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de aventura' },
{title: "🎮 Juegos de estrategia", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de estrategia' },
{title: "🎮 Juegos de simulación", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de simulación' },
{title: "🎮 Juegos de deportes", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de deportes' },
{title: "🎮 Juegos de carreras", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de carreras' },
{title: "🎮 Juegos de battle royale", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos de battle royale' },
{title: "🎮 Juegos clásicos", rowId: usedPrefix + command + ' ' + text + '🎮 Juegos clásicos' },
{title: "🃏 Juegos de cartas", rowId: usedPrefix + command + ' ' + text + '🃏 Juegos de cartas' },
{title: "🎲 Juegos de mesa", rowId: usedPrefix + command + ' ' + text + '🎲 Juegos de mesa' },
{title: "📖 Leer", rowId: usedPrefix + command + ' ' + text + '📖 Leer' },
{title: "👟 Lucha libre", rowId: usedPrefix + command + ' ' + text + '👟 Lucha libre' },
{title: "💄 Maquillaje artístico", rowId: usedPrefix + command + ' ' + text + '💄 Maquillaje artístico' },
{title: "😆 Memes", rowId: usedPrefix + command + ' ' + text + '😆 Memes' },
{title: "💭 Meditación", rowId: usedPrefix + command + ' ' + text + '💭 Meditación' },
{title: "🖥️ Modelado 3D", rowId: usedPrefix + command + ' ' + text + '🖥️ Modelado 3D' },
{title: "✨ Observación de estrellas", rowId: usedPrefix + command + ' ' + text + '✨ Observación de estrellas' },
{title: "🌕 Observación de la luna", rowId: usedPrefix + command + ' ' + text + '🌕 Observación de la luna' },
{title: "☁ Observación de las nubes", rowId: usedPrefix + command + ' ' + text + '☁ Observación de las nubes' },
{title: "📄 Origami", rowId: usedPrefix + command + ' ' + text + '📄 Origami' },
{title: "🎣 Pesca", rowId: usedPrefix + command + ' ' + text + '🎣 Pesca' },
{title: "🎨 Pintura", rowId: usedPrefix + command + ' ' + text + '🎨 Pintura' },
{title: "🎙️ Podcasts", rowId: usedPrefix + command + ' ' + text + '🎙️ Podcasts' },
{title: "📝 Poesía", rowId: usedPrefix + command + ' ' + text + '📝 Poesía' },
{title: "🎾 Tenis", rowId: usedPrefix + command + ' ' + text + '🎾 Tenis' },
{title: "🏓 Tenis de mesa", rowId: usedPrefix + command + ' ' + text + '🏓 Tenis de mesa' },
{title: "🎵 Toco un instrumento", rowId: usedPrefix + command + ' ' + text + '🎵 Toco un instrumento' },	
{title: "🎹 Tocar el piano", rowId: usedPrefix + command + ' ' + text + '🎹 Tocar el piano' },
{title: "🎸 Tocar la guitarra", rowId: usedPrefix + command + ' ' + text + '🎸 Tocar la guitarra' },
{title: "🎻 Tocar el violín", rowId: usedPrefix + command + ' ' + text + '🎻 Tocar el violín' },
{title: "🎷 Tocar el saxofón", rowId: usedPrefix + command + ' ' + text + '🎷 Tocar el saxofón' },
{title: "🎺 Tocar la trompeta", rowId: usedPrefix + command + ' ' + text + '🎺 Tocar la trompeta' },
{title: "🪘 Tocar el tamboril", rowId: usedPrefix + command + ' ' + text + '🪘 Tocar el tamboril' },
{title: "🥁 Tocar el tambor", rowId: usedPrefix + command + ' ' + text + '🥁 Tocar el tambor' },
{title: "📺 Ver la televisión", rowId: usedPrefix + command + ' ' + text + '📺 Ver la televisión' },
{title: "🌎 Viajar", rowId: usedPrefix + command + ' ' + text + '🌎 Viajar' },
{title: "🎒 Viajar de mochilero/a", rowId: usedPrefix + command + ' ' + text + '🎒 Viajar de mochilero/a' },
{title: "🫂 Visitar amigos", rowId: usedPrefix + command + ' ' + text + '🫂 Visitar amigos' },
{title: "📹 Vlog", rowId: usedPrefix + command + ' ' + text + '📹 Vlog' },
{title: "🏐 Voleibol", rowId: usedPrefix + command + ' ' + text + '🏐 Voleibol' },
{title: "👟 Yoga", rowId: usedPrefix + command + ' ' + text + '👟 Yoga' },
{title: "🎼 Ópera", rowId: usedPrefix + command + ' ' + text + '🎼 Ópera' }]},]

const listMessage = {
text: `*SELECCIONE SUS PASATIEMPOS POR FAVOR*\n\n*NOMBRE:* _${nombre}_\n*EDAD:* _${edad}_\n*GÉNERO:* _${genero}_\n*IDENTIDAD DE GÉNERO:* _${identidad}_\n\n*╰⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*`,
footer: wm,
title: "*╭⸺ ⊹ ⸺  ⊹ ⸺ ⊹ ⸺ ⊹ ⸺ ⊹*\n",
buttonText: "❇️ IDENTIDAD DE GÉNERO ❇️",
sections
}

if (command == 'pasatiempo' || command == 'hobby') {
if (typeof pas1 === 'string') throw '*NO PUEDE CAMBIAR DE PASATIEMPO*'
if (!text) return conn.sendMessage(m.chat, listMessage, m)
pas1 = text.trim()
pasatiempo = pas1
global.db.data.users[m.sender]['registroC'] = true
conn.sendButton(m.chat, '*GENIAL!! SE HA AGREGADO UN PASATIEMPO:*\n' + pasatiempo , 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`❇️ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas2'], [`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}	
	
if (command == 'pas2') {
if (typeof pas2 === 'string') throw '*NO PUEDE CAMBIAR DE PASATIEMPO*'
if (!text) return conn.sendMessage(m.chat, listMessage, m)

if (user.pasatiempo2 == text) throw '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*' 
global.db.data.users[m.sender]['registroC'] = true
pas2 = text.trim()	
pasatiempo = pas1 + ', ' + pas2
conn.sendButton(m.chat, '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO:*\n' + pasatiempo , 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`❇️ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas3'], [`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'pas3') {
if (typeof pas3 === 'string') throw '*NO PUEDE CAMBIAR DE PASATIEMPO*'
if (!text) return conn.sendMessage(m.chat, listMessage, m)

if (pas2 == text || pas1 == text) throw '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*'
global.db.data.users[m.sender]['registroC'] = true
pas3 = text.trim()
pasatiempo = pas1 + ', ' + pas2 + ', ' + pas3
conn.sendButton(m.chat, '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO:*\n' + pasatiempo , 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`❇️ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas4'], [`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'pas4') {
if (typeof pas4 === 'string') throw '*NO PUEDE CAMBIAR DE PASATIEMPO*'
if (!text) return conn.sendMessage(m.chat, listMessage, m)

if (pas3 == text || pas2 == text || pas1 == text) throw '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*'
global.db.data.users[m.sender]['registroC'] = true
pas4 = text.trim()	
pasatiempo = pas1 + ', ' + pas2 + ', ' + pas3 + ', ' + pas4
conn.sendButton(m.chat, '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO:*\n' + pasatiempo , 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`❇️ AGREGAR OTRO PASATIEMPO`, usedPrefix + 'pas5'], [`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
}
	
if (command == 'pas5') {
if (typeof pas5 === 'string') throw '*NO PUEDE CAMBIAR DE PASATIEMPO*'
if (!text) return conn.sendMessage(m.chat, listMessage, m)
if (pas4 == text || pas3 == text || pas2 == text || pas1 == text) throw '*ESTE PASATIEMPO YA HA SIDO AGREGADO, SELECCIONE OTRO POR FAVOR*'
global.db.data.users[m.sender]['registroC'] = true	
pas5 = text.trim()
pasatiempo = pas1 + ', ' + pas2 + ', ' + pas3 + ', ' + pas4 + ', ' + pas5
conn.sendButton(m.chat, '*GENIAL!! SE HA AGREGADO OTRO PASATIEMPO:*\n' + pasatiempo , 'Puede agregar hasta 5 pasatiempos!!! o puede avanzar con el registro teniendo mínimo un pasatiempo\n\n' + wm, null, [[`🐈 FINALIZAR REGISTRO`, usedPrefix + 'finalizar']], m)
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
🍃 \`\`\`VERIFICACIÓN EXITOSA\`\`\` 🍃
*- - - - - - - - - - - - - - - - - - - - - - - - - - - -*

😼 *REGISTRADO POR*
❱❱ ${wm}

📑 *TIPO DE REGISTRO* 
❱❱ ${user.registroC === true ? 'Registro Completo' : 'Registro Rápido'}

⌛ *FECHA/HORA*
❱❱ ${user.tiempo} 

✅ *INSIGNIA DE VERIFICACIÓN*
❱❱   *${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ' : ''}*

👤 *NOMBRE* 
❱❱ ${user.name}${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ' : ''}

👀 *DESCRIPCIÓN*
${user.descripcion}

🔢 *EDAD* 
❱❱ ${user.age} Años *||* ${user.age >= 18 ? '(Persona Adulta)' : '(Persona Joven)'}
${user.registroC === true ? `\n☘️ *GENERO*
❱❱ ${user.genero == 'Ocultado' ? `${user.genero} 🗣️` : user.genero == 'Mujer' ? `${user.genero} 🚺` : user.genero == 'Hombre' ? `${user.genero} 🚹` : ''}

🌱 *IDENTIDAD DE GÉNERO*
❱❱ ${user.identidad}

❇️ *PASATIEMPO(S)*
❱❱ ${user.pasatiempo}` : ''}
${user.premLimit === 1 ? '' : `\n🎟️ *PREMIUM* 
❱❱ ${user.premLimit === 1 ? '' : `${user.premiumTime > 0 ? '✅' : '❌'} +3 HORAS`}`} 

🛅 *CÓDIGO DE REGISTRO*
❱❱ ${sn}`.trim()

await m.reply('🍄 ```VERIFICANDO DATOS...```')
await conn.sendButton(m.chat, caption, user.registroC === true ? 'Si elimina su registro se eliminará los datos e insignia y dejara de tener acceso a los comandos con registro\n\nTendrá Premium solo la premira vez que se registre si llega a volver a registrarse no tendrá premium a excepción si compra usando #pase premium\n\nPuede volver a eliminar su registro y registrarse desde 0 sin problema.\n\nSu código de serie le permitirá borrar su registro ejemplo:\n' + `${usedPrefix}unreg ${sn}` : 'Si elimina su registro se eliminará los datos e insignia y dejara de tener acceso a los comandos con registro\n\nPuede volver a eliminar su registro y registrarse desde 0 sin problema.\n\nSu código de serie le permitirá borrar su registro ejemplo:\n' + `${usedPrefix}unreg ${sn}`, [['𝘼𝙝𝙤𝙧𝙖 𝙚𝙨𝙩𝙤𝙮 𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙙𝙤(𝙖)!! ✅', '/profile']], m)
await m.reply(`${sn}`)
	
}}
handler.command = ['verify', 'verificar', 'register', 'registrar', 'reg', 'reg1', 'nombre', 'name', 'nombre2', 'name2', 'edad', 'age', 'edad2', 'age2', 'genero', 'género', 'gender', 'identidad', 'pasatiempo', 'hobby', 'identity', 'finalizar', 'pas2', 'pas3', 'pas4', 'pas5']  ///^(verify|verificar|reg(ister)?)$/i
export default handler
/*
import { createHash } from 'crypto'
let handler = async function (m, { conn, text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `${iig}𝙔𝘼 𝙀𝙎𝙏𝘼𝙎 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝘼𝘿𝙊(𝘼)!!\n𝙎𝙄 𝙌𝙐𝙄𝙀𝙍𝙀 𝘼𝙉𝙐𝙇𝘼𝙍 𝙎𝙐 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊 𝙐𝙎𝙀 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n*${usedPrefix}unreg numero de serie*\n\n𝙎𝙄 𝙉𝙊 𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝘼 𝙎𝙐 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙎𝙀𝙍𝙄𝙀 𝙐𝙎𝙀 𝙀𝙎𝙏𝙀 𝘾𝙊𝙈𝘼𝙉𝘿𝙊\n*${usedPrefix}myns*`
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
let caption = `╭━━━[ *𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼𝙍 | 𝙑𝙀𝙍𝙄𝙁𝙔* ]━━━━⬣
┃ *NOMBRE* 
┃ ${name} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓ᚲᴳᴮ' : ''}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ *EDAD* 
┃ *${age} años*
╰━━━━━━━━━━━━━━━━━━⬣`
//let author = global.author
await conn.sendButton(m.chat, caption, `𝙏𝙐 𝙉𝙐𝙈𝙀𝙍𝙊 𝘿𝙀 𝙎𝙀𝙍𝙄𝙀 𝙏𝙀 𝙎𝙀𝙍𝙑𝙄𝙍𝘼 𝙀𝙉 𝘾𝘼𝙎𝙊 𝙌𝙐𝙀 𝙌𝙐𝙄𝙀𝙍𝘼 𝘽𝙊𝙍𝙍𝘼𝙍 𝙎𝙐 𝙍𝙀𝙂𝙄𝙎𝙏𝙍𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n${usedPrefix}unreg numero de serie\n${wm}`, [['𝘼𝙝𝙤𝙧𝙖 𝙚𝙨𝙩𝙤𝙮 𝙑𝙚𝙧𝙞𝙛𝙞𝙘𝙖𝙙𝙤(𝙖)!! ✅', '/profile']], m)
await m.reply(`${sn}`) 

}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|registrar|verificado|verificada|verificarme)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
*/
