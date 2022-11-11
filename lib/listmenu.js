const chalk = require('chalk')
const fs = require('fs')

global.allmenu = (prefix, hituet) => {
return`🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*OWNER MENU*
● ${prefix}bc 🅞
● ${prefix}join 🅞
● ${prefix}shutdown 🅞
● ${prefix}autodltt 🅞
● ${prefix}autosticker 🅞
● ${prefix}setppbot 🅞
● ${prefix}addprem 🅞
● ${prefix}delprem 🅞
● ${prefix}addowner 🅞
● ${prefix}delowner 🅞
● ${prefix}addlist 🅞
● ${prefix}dellist 🅞
● ${prefix}updatelist 🅞
● ${prefix}listnya 🅞
● ${prefix}addvn 🅞
● ${prefix}delvn 🅞
● ${prefix}listvn 🅞
● ${prefix}ban add 🅞
● ${prefix}ban del 🅞

*OTHER MENU*
● ${prefix}gura 🅕
● ${prefix}animesticker 🅕
● ${prefix}bucinstick 🅕
● ${prefix}doge 🅕
● ${prefix}patrik 🅕
● ${prefix}owner 🅕
● ${prefix}jadibot 🅟
● ${prefix}listjadibot 🅟
● ${prefix}donasi 🅕
● ${prefix}listpremium 🅕
● ${prefix}buypremium 🅕
● ${prefix}jadiowner 🅕
● ${prefix}sewabot 🅕
● ${prefix}cekme 🅕
● ${prefix}obfus 🅕
● ${prefix}styletext 🅕
● ${prefix}tts 🅕
● ${prefix}tourl 🅕
● ${prefix}tovn 🅕
● ${prefix}toaudio 🅕
● ${prefix}tomp3 🅕
● ${prefix}toimg 🅕
● ${prefix}toonce 🅕
● ${prefix}sticker 🅕
● ${prefix}smeme 🅕
● ${prefix}snobg 🅕
● ${prefix}menfes 🅕
● ${prefix}leave 🅕
● ${prefix}ebinary 🅕
● ${prefix}dbinary 🅕
● ${prefix}cariresep 🅕
● ${prefix}bacaresep 🅕
● ${prefix}ssweb 🅕
● ${prefix}wasted 🅕
● ${prefix}comrade 🅕
● ${prefix}horny 🅕
● ${prefix}blur 🅕
● ${prefix}pixelate 🅕
● ${prefix}simpcard 🅕
● ${prefix}lolice 🅕
● ${prefix}gay 🅕
● ${prefix}jail 🅕
● ${prefix}quoted 🅕
● ${prefix}caridoi 🅟
● ${prefix}cariteman 🅟

*DOWNLOADER MENU*
● ${prefix}tiktokvideo 🅕
● ${prefix}tiktokaudio 🅕
● ${prefix}ytsearch 🅕
● ${prefix}play 🅕
● ${prefix}mp3 🅕
● ${prefix}mp4 🅕
● ${prefix}happymod 🅕
● ${prefix}git 🅕

*BUG MENU*
● ${prefix}send 🅞
● ${prefix}spambugvip 🅞
● ${prefix}santetpc 🅞
● ${prefix}santetgc 🅞
● ${prefix}santetpcparah 🅞
● ${prefix}santetgcparah 🅞
● ${prefix}sendbug 🅞
● ${prefix}senddoc 🅞
● ${prefix}sendloc 🅞
● ${prefix}kaystick 🅞
● ${prefix}kayteks 🅞
● ${prefix}kayitem 🅞
● ${prefix}kaylog 🅞
● ${prefix}kaykontak 🅞
● ${prefix}kayloc 🅞
● ${prefix}kaydoc 🅞
● ${prefix}kayvn 🅞
● ${prefix}vote 🅞
● ${prefix}stickgas 🅞
● ${prefix}itemgas 🅞
● ${prefix}cataloggas 🅞
● ${prefix}docgas 🅞
● ${prefix}kongas 🅞
● ${prefix}vngas 🅞
● ${prefix}teksgas 🅞
● ${prefix}locgas 🅞
● ${prefix}crash 🅞
● ${prefix}jagoan 🅞
● ${prefix}jagoanneon 🅞

*GROUP MENU*
● ${prefix}antilink 🅖
● ${prefix}antiwame 🅖
● ${prefix}add 🅖
● ${prefix}kick 🅖
● ${prefix}promote 🅖
● ${prefix}demote 🅖
● ${prefix}hidetag 🅖
● ${prefix}tagall 🅖
● ${prefix}opentime 🅖
● ${prefix}closetime 🅖

*FUN MENU*
● ${prefix}memek 🅖
● ${prefix}bego 🅖
● ${prefix}goblok 🅖
● ${prefix}janda 🅖
● ${prefix}perawan 🅖
● ${prefix}babi 🅖
● ${prefix}tolol 🅖
● ${prefix}pinter 🅖
● ${prefix}pintar 🅖
● ${prefix}asu 🅖
● ${prefix}bodoh 🅖
● ${prefix}gay 🅖
● ${prefix}lesby 🅖
● ${prefix}bajingan 🅖
● ${prefix}jancok 🅖
● ${prefix}anjing 🅖
● ${prefix}ngentod 🅖
● ${prefix}ngentot 🅖
● ${prefix}monyet 🅖
● ${prefix}mastah 🅖
● ${prefix}newbie 🅖
● ${prefix}bangsat 🅖
● ${prefix}bangke 🅖
● ${prefix}sange 🅖
● ${prefix}sangean 🅖
● ${prefix}dakjal 🅖
● ${prefix}horny 🅖
● ${prefix}wibu 🅖
● ${prefix}puki 🅖
● ${prefix}peak 🅖
● ${prefix}pantex 🅖
● ${prefix}pantek 🅖
● ${prefix}setan 🅖
● ${prefix}iblis 🅖
● ${prefix}cacat 🅖
● ${prefix}yatim 🅖
● ${prefix}piatu 🅖
● ${prefix}goblokcek 🅖
● ${prefix}jelekcek 🅖
● ${prefix}gaycek 🅖
● ${prefix}rate 🅖
● ${prefix}lesbicek 🅖
● ${prefix}gantengcek 🅖
● ${prefix}cantikcek 🅖
● ${prefix}begocek 🅖
● ${prefix}suhucek 🅖
● ${prefix}pintercek 🅖
● ${prefix}jagocek 🅖
● ${prefix}nolepcek 🅖
● ${prefix}babicek 🅖
● ${prefix}bebancek 🅖
● ${prefix}baikcek 🅖
● ${prefix}jahatcek 🅖
● ${prefix}anjingcek 🅖
● ${prefix}haramcek 🅖
● ${prefix}pakboycek 🅖
● ${prefix}pakgirlcek 🅖
● ${prefix}sangecek 🅖
● ${prefix}bapercek 🅖
● ${prefix}fakboycek 🅖
● ${prefix}alimcek 🅖
● ${prefix}suhucek 🅖
● ${prefix}fakgirlcek 🅖
● ${prefix}kerencek 🅖
● ${prefix}wibucek 🅖
● ${prefix}pasarkascek 🅖
● ${prefix}kulcek 🅖                
● ${prefix}cekgoblok 🅖
● ${prefix}cekjelek 🅖
● ${prefix}cekgay 🅖                
● ${prefix}ceklesbi 🅖
● ${prefix}cekganteng 🅖
● ${prefix}cekcantik 🅖
● ${prefix}cekbego 🅖
● ${prefix}ceksuhu 🅖
● ${prefix}cekpinter 🅖
● ${prefix}cekjago 🅖
● ${prefix}ceknolep 🅖
● ${prefix}cekbabi 🅖
● ${prefix}cekbeban 🅖
● ${prefix}cekbaik 🅖
● ${prefix}cekjahat 🅖
● ${prefix}cekanjing 🅖
● ${prefix}cekharam 🅖
● ${prefix}cekpakboy 🅖
● ${prefix}cekpakgirl 🅖
● ${prefix}ceksange 🅖
● ${prefix}cekbaper 🅖
● ${prefix}cekfakboy 🅖
● ${prefix}cekalim 🅖
● ${prefix}ceksuhu 🅖
● ${prefix}cekfakgirl 🅖
● ${prefix}cekkeren 🅖
● ${prefix}cekwibu 🅖
● ${prefix}cekpasarkas 🅖
● ${prefix}cekkul 🅖
● ${prefix}cekbapak 🅖

*RANDOM MENU*
● ${prefix}aesthetic 🅟
● ${prefix}ahegao 🅟
● ${prefix}akira 🅟
● ${prefix}akiyama 🅟
● ${prefix}ana 🅟
● ${prefix}anjing 🅟
● ${prefix}art 🅟
● ${prefix}ass 🅟
● ${prefix}asuna 🅟
● ${prefix}ayuzawa 🅟
● ${prefix}bdsm 🅟
● ${prefix}boneka 🅟
● ${prefix}boruto 🅟
● ${prefix}bts 🅟
● ${prefix}cecan 🅟
● ${prefix}chiho 🅟
● ${prefix}chitoge 🅟
● ${prefix}cogan 🅟
● ${prefix}cosplay 🅟
● ${prefix}cosplayloli 🅟
● ${prefix}cosplaysagiri 🅟
● ${prefix}cuckold 🅟
● ${prefix}cum 🅟
● ${prefix}cyber 🅟
● ${prefix}darkjokes 🅟
● ${prefix}deidara 🅟
● ${prefix}doraemon 🅟
● ${prefix}eba 🅟
● ${prefix}elaina 🅟
● ${prefix}emilia 🅟
● ${prefix}ero 🅟
● ${prefix}erza 🅟
● ${prefix}exo 🅟
● ${prefix}femdom 🅟
● ${prefix}foot 🅟
● ${prefix}freefire 🅟
● ${prefix}gamewallpaper 🅟
● ${prefix}gangbang 🅟
● ${prefix}gifs 🅟
● ${prefix}glasses 🅟
● ${prefix}gremory 🅟
● ${prefix}hekel 🅟
● ${prefix}hentai 🅟
● ${prefix}hestia 🅟
● ${prefix}hijaber 🅟
● ${prefix}hinata 🅟
● ${prefix}husbu 🅟
● ${prefix}inori 🅟
● ${prefix}islamic 🅟
● ${prefix}isuzu 🅟
● ${prefix}itachi 🅟
● ${prefix}itori 🅟
● ${prefix}jahy 🅟
● ${prefix}jeni 🅟
● ${prefix}jiso 🅟
● ${prefix}justina 🅟
● ${prefix}kaga 🅟
● ${prefix}kagura 🅟
● ${prefix}kakasih 🅟
● ${prefix}kaori 🅟
● ${prefix}kartun 🅟
● ${prefix}katakata 🅟
● ${prefix}keneki 🅟
● ${prefix}kotori 🅟
● ${prefix}kpop 🅟
● ${prefix}kucing 🅟
● ${prefix}kurumi 🅟
● ${prefix}lisa 🅟
● ${prefix}loli 🅟
● ${prefix}madara 🅟
● ${prefix}masturbation 🅟
● ${prefix}megumin 🅟
● ${prefix}mikasa 🅟
● ${prefix}mikey 🅟
● ${prefix}miku 🅟
● ${prefix}milf 🅟
● ${prefix}minato 🅟
● ${prefix}mobil 🅟
● ${prefix}motor 🅟
● ${prefix}mountain 🅟
● ${prefix}naruto 🅟
● ${prefix}neko 🅟
● ${prefix}neko2 🅟
● ${prefix}nekonime 🅟
● ${prefix}nezuko 🅟
● ${prefix}onepiece 🅟
● ${prefix}orgy 🅟
● ${prefix}panties 🅟
● ${prefix}pentol 🅟
● ${prefix}pokemon 🅟
● ${prefix}profil 🅟
● ${prefix}programming 🅟
● ${prefix}pubg 🅟
● ${prefix}pussy 🅟
● ${prefix}randblackpink 🅟
● ${prefix}randomnime 🅟
● ${prefix}randomnime2 🅟
● ${prefix}rize 🅟
● ${prefix}rose 🅟
● ${prefix}ryujin 🅟
● ${prefix}sagiri 🅟
● ${prefix}sakura 🅟
● ${prefix}sasuke 🅟
● ${prefix}satanic 🅟
● ${prefix}shina 🅟
● ${prefix}shinka 🅟
● ${prefix}shinomiya 🅟
● ${prefix}shizuka 🅟
● ${prefix}shota 🅟
● ${prefix}tatasurya 🅟
● ${prefix}technology 🅟
● ${prefix}tejina 🅟
● ${prefix}tentacles 🅟
● ${prefix}thighs 🅟
● ${prefix}toukachan 🅟
● ${prefix}tsunade 🅟
● ${prefix}waifu 🅟
● ${prefix}wallhp 🅟
● ${prefix}wallml 🅟
● ${prefix}wallnime 🅟
● ${prefix}yotsuba 🅟
● ${prefix}yuki 🅟
● ${prefix}yulibocil 🅟
● ${prefix}yumeko 🅟
● ${prefix}fox 🅟  
● ${prefix}dog 🅟  
● ${prefix}cat 🅟
● ${prefix}panda 🅟  
● ${prefix}birb 🅟 
● ${prefix}koala 🅟

*TEXT PRO*
● ${prefix}candy 🅟 
● ${prefix}christmas 🅟 
● ${prefix}3dchristmas 🅟 
● ${prefix}sparklechristmas 🅟
● ${prefix}deepsea 🅟 
● ${prefix}scifi 🅟 
● ${prefix}rainbow 🅟 
● ${prefix}waterpipe 🅟 
● ${prefix}spooky 🅟 
● ${prefix}pencil 🅟 
● ${prefix}circuit 🅟 
● ${prefix}discovery 🅟 
● ${prefix}metalic 🅟 
● ${prefix}fiction 🅟 
● ${prefix}demon 🅟 
● ${prefix}transformer 🅟 
● ${prefix}berry 🅟 
● ${prefix}thunder 🅟 
● ${prefix}magma 🅟 
● ${prefix}3dstone 🅟 
● ${prefix}neonlight 🅟 
● ${prefix}glitch 🅟 
● ${prefix}harrypotter 🅟 
● ${prefix}brokenglass 🅟 
● ${prefix}papercut 🅟 
● ${prefix}watercolor 🅟 
● ${prefix}multicolor 🅟 
● ${prefix}neondevil 🅟 
● ${prefix}underwater 🅟 
● ${prefix}graffitibike 🅟
● ${prefix}snow 🅟 
● ${prefix}cloud 🅟 
● ${prefix}honey 🅟 
● ${prefix}ice 🅟 
● ${prefix}fruitjuice 🅟 
● ${prefix}biscuit 🅟 
● ${prefix}wood 🅟 
● ${prefix}chocolate 🅟 
● ${prefix}strawberry 🅟 
● ${prefix}matrix 🅟 
● ${prefix}blood 🅟 
● ${prefix}dropwater 🅟 
● ${prefix}toxic 🅟 
● ${prefix}lava 🅟 
● ${prefix}rock 🅟 
● ${prefix}bloodglas 🅟 
● ${prefix}hallowen 🅟 
● ${prefix}darkgold 🅟 
● ${prefix}joker 🅟 
● ${prefix}wicker 🅟
● ${prefix}firework 🅟 
● ${prefix}skeleton 🅟 
● ${prefix}blackpink 🅟 
● ${prefix}sand 🅟 
● ${prefix}glue 🅟 
● ${prefix}1917 🅟 
● ${prefix}leaves 🅟

*PHOTO OXY*
● ${prefix}shadow 🅟 
● ${prefix}write 🅟 
● ${prefix}romantic 🅟 
● ${prefix}burnpaper 🅟
● ${prefix}smoke 🅟 
● ${prefix}narutobanner 🅟 
● ${prefix}love 🅟 
● ${prefix}undergrass 🅟
● ${prefix}doublelove 🅟 
● ${prefix}coffecup 🅟
● ${prefix}underwaterocean 🅟
● ${prefix}smokyneon 🅟
● ${prefix}starstext 🅟
● ${prefix}rainboweffect 🅟
● ${prefix}balloontext 🅟
● ${prefix}metalliceffect 🅟
● ${prefix}embroiderytext 🅟
● ${prefix}flamingtext 🅟
● ${prefix}stonetext 🅟
● ${prefix}writeart 🅟
● ${prefix}summertext 🅟
● ${prefix}wolfmetaltext 🅟
● ${prefix}nature3dtext 🅟
● ${prefix}rosestext 🅟
● ${prefix}naturetypography 🅟
● ${prefix}quotesunder 🅟
● ${prefix}shinetext 🅟

*EPHOTO 360*
● ${prefix}glitchtext 🅟
● ${prefix}writetext 🅟
● ${prefix}advancedglow 🅟
● ${prefix}typographytext 🅟
● ${prefix}pixelglitch 🅟
● ${prefix}neonglitch 🅟
● ${prefix}flagtext 🅟
● ${prefix}flag3dtext 🅟
● ${prefix}deletingtext 🅟
● ${prefix}blackpinkstyle 🅟
● ${prefix}glowingtext 🅟
● ${prefix}underwatertext 🅟
● ${prefix}logomaker 🅟
● ${prefix}cartoonstyle 🅟
● ${prefix}papercutstyle 🅟
● ${prefix}watercolortext 🅟
● ${prefix}effectclouds 🅟
● ${prefix}blackpinklogo 🅟
● ${prefix}gradienttext 🅟
● ${prefix}summerbeach 🅟
● ${prefix}luxurygold 🅟
● ${prefix}multicoloredneon 🅟
● ${prefix}sandsummer 🅟
● ${prefix}galaxywallpaper 🅟
● ${prefix}1917style 🅟
● ${prefix}makingneon 🅟
● ${prefix}royaltext 🅟
● ${prefix}freecreate 🅟
● ${prefix}galaxystyle 🅟
● ${prefix}lighteffects 🅟

*RANDOM CERPEN*
● ${prefix}cerpen_sejarah 🅟
● ${prefix}cerpen_sedih 🅟
● ${prefix}cerpen_sastra 🅟
● ${prefix}cerpen_romantis 🅟
● ${prefix}cerpen_rohani 🅟
● ${prefix}cerpen_rindu 🅟
● ${prefix}cerpen_remaja 🅟
● ${prefix}cerpen_ramadhan 🅟
● ${prefix}cerpen_petualangan 🅟
● ${prefix}cerpen_persahabatan 🅟
● ${prefix}cerpen_perpisahan 🅟
● ${prefix}cerpen_perjuangan 🅟
● ${prefix}cerpen_penyesalan 🅟
● ${prefix}cerpen_pengorbanan 🅟
● ${prefix}cerpen_pengalaman 🅟
● ${prefix}cerpen_pendidikan 🅟
● ${prefix}cerpen_penantian 🅟
● ${prefix}cerpen_patahhati 🅟
● ${prefix}cerpen_olahraga 🅟
● ${prefix}cerpen_nasionalisme 🅟
● ${prefix}cerpen_nasihat 🅟
● ${prefix}cerpen_motivasi 🅟
● ${prefix}cerpen_misteri 🅟
● ${prefix}cerpen_mengharukan 🅟
● ${prefix}cerpen_malaysia 🅟
● ${prefix}cerpen_liburan 🅟
● ${prefix}cerpen_kristen 🅟
● ${prefix}cerpen_korea 🅟
● ${prefix}cerpen_kisahnyata 🅟
● ${prefix}cerpen_keluarga 🅟
● ${prefix}cerpen_kehidupan 🅟
● ${prefix}cerpen_jepang 🅟
● ${prefix}cerpen_inspiratif 🅟
● ${prefix}cerpen_gokil 🅟
● ${prefix}cerpen_galau 🅟
● ${prefix}cerpen_cintasejati 🅟
● ${prefix}cerpen_cintasegitiga 🅟
● ${prefix}cerpen_cintasedih 🅟
● ${prefix}cerpen_cintaromantis 🅟
● ${prefix}cerpen_cintapertama 🅟
● ${prefix}cerpen_cintaislami 🅟
● ${prefix}cerpen_cinta 🅟
● ${prefix}cerpen_budaya 🅟
● ${prefix}cerpen_bahasasunda 🅟
● ${prefix}cerpen_bahasajawa 🅟
● ${prefix}cerpen_bahasainggris 🅟
● ${prefix}cerpen_bahasadaerah 🅟
● ${prefix}cerpen_anak 🅟

*RANDOM VIDEO*
● ${prefix}asupan 🅟
● ${prefix}bocil 🅟
● ${prefix}rikagusriani 🅟
● ${prefix}hentavid 🅟
● ${prefix}jjmeryani 🅟

*STALKER MENU*
● ${prefix}igstalk 🅟
● ${prefix}ffstalk 🅟
● ${prefix}mlstalk 🅟
● ${prefix}npmstalk 🅟
● ${prefix}ghstalk 🅟
`}

global.ownermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*OWNER MENU*
● ${prefix}bc 🅞
● ${prefix}join 🅞
● ${prefix}shutdown 🅞
● ${prefix}autodltt 🅞
● ${prefix}autosticker 🅞
● ${prefix}setppbot 🅞
● ${prefix}addprem 🅞
● ${prefix}delprem 🅞
● ${prefix}addowner 🅞
● ${prefix}delowner 🅞
● ${prefix}addlist 🅞
● ${prefix}dellist 🅞
● ${prefix}updatelist 🅞
● ${prefix}listnya 🅞
● ${prefix}addvn 🅞
● ${prefix}delvn 🅞
● ${prefix}listvn 🅞
● ${prefix}ban add 🅞
● ${prefix}ban del 🅞
`}

global.othermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*OTHER MENU*
● ${prefix}gura 🅕
● ${prefix}animesticker 🅕
● ${prefix}bucinstick 🅕
● ${prefix}doge 🅕
● ${prefix}patrik 🅕
● ${prefix}owner 🅕
● ${prefix}jadibot 🅟
● ${prefix}listjadibot 🅟
● ${prefix}donasi 🅕
● ${prefix}listpremium 🅕
● ${prefix}buypremium 🅕
● ${prefix}jadiowner 🅕
● ${prefix}sewabot 🅕
● ${prefix}cekme 🅕
● ${prefix}obfus 🅕
● ${prefix}styletext 🅕
● ${prefix}tts 🅕
● ${prefix}tourl 🅕
● ${prefix}tovn 🅕
● ${prefix}toaudio 🅕
● ${prefix}tomp3 🅕
● ${prefix}toimg 🅕
● ${prefix}toonce 🅕
● ${prefix}sticker 🅕
● ${prefix}smeme 🅕
● ${prefix}snobg 🅕
● ${prefix}menfes 🅕
● ${prefix}leave 🅕
● ${prefix}ebinary 🅕
● ${prefix}dbinary 🅕
● ${prefix}cariresep 🅕
● ${prefix}bacaresep 🅕
● ${prefix}ssweb 🅕
● ${prefix}wasted 🅕
● ${prefix}comrade 🅕
● ${prefix}horny 🅕
● ${prefix}blur 🅕
● ${prefix}pixelate 🅕
● ${prefix}simpcard 🅕
● ${prefix}lolice 🅕
● ${prefix}gay 🅕
● ${prefix}jail 🅕
● ${prefix}quoted 🅕
● ${prefix}caridoi 🅟
● ${prefix}cariteman 🅟
`}

global.downloadmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*DOWNLOADER MENU*
● ${prefix}tiktokvideo 🅕
● ${prefix}tiktokaudio 🅕
● ${prefix}ytsearch 🅕
● ${prefix}play 🅕
● ${prefix}ytmp3 🅕
● ${prefix}ytmp4 🅕
● ${prefix}happymod 🅕
● ${prefix}git 🅕
`}

global.bugmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*BUG MENU*
● ${prefix}send 🅞
● ${prefix}spambugvip 🅞
● ${prefix}santetpc 🅞
● ${prefix}santetgc 🅞
● ${prefix}santetpcparah 🅞
● ${prefix}santetgcparah 🅞
● ${prefix}sendbug 🅞
● ${prefix}senddoc 🅞
● ${prefix}sendloc 🅞
● ${prefix}kaystick 🅞
● ${prefix}kayteks 🅞
● ${prefix}kayitem 🅞
● ${prefix}kaylog 🅞
● ${prefix}kaykontak 🅞
● ${prefix}kayloc 🅞
● ${prefix}kaydoc 🅞
● ${prefix}kayvn 🅞
● ${prefix}vote 🅞
● ${prefix}stickgas 🅞
● ${prefix}itemgas 🅞
● ${prefix}cataloggas 🅞
● ${prefix}docgas 🅞
● ${prefix}kongas 🅞
● ${prefix}vngas 🅞
● ${prefix}teksgas 🅞
● ${prefix}locgas 🅞
● ${prefix}crash 🅞
● ${prefix}jagoan 🅞
● ${prefix}jagoanneon 🅞
`}

global.groupmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*GROUP MENU*
● ${prefix}antilink 🅖
● ${prefix}antiwame 🅖
● ${prefix}add 🅖
● ${prefix}kick 🅖
● ${prefix}promote 🅖
● ${prefix}demote 🅖
● ${prefix}hidetag 🅖
● ${prefix}tagall 🅖
● ${prefix}opentime 🅖
● ${prefix}closetime 🅖
`}

global.funmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*FUN MENU*
● ${prefix}memek 🅖
● ${prefix}bego 🅖
● ${prefix}goblok 🅖
● ${prefix}janda 🅖
● ${prefix}perawan 🅖
● ${prefix}babi 🅖
● ${prefix}tolol 🅖
● ${prefix}pinter 🅖
● ${prefix}pintar 🅖
● ${prefix}asu 🅖
● ${prefix}bodoh 🅖
● ${prefix}gay 🅖
● ${prefix}lesby 🅖
● ${prefix}bajingan 🅖
● ${prefix}jancok 🅖
● ${prefix}anjing 🅖
● ${prefix}ngentod 🅖
● ${prefix}ngentot 🅖
● ${prefix}monyet 🅖
● ${prefix}mastah 🅖
● ${prefix}newbie 🅖
● ${prefix}bangsat 🅖
● ${prefix}bangke 🅖
● ${prefix}sange 🅖
● ${prefix}sangean 🅖
● ${prefix}dakjal 🅖
● ${prefix}horny 🅖
● ${prefix}wibu 🅖
● ${prefix}puki 🅖
● ${prefix}peak 🅖
● ${prefix}pantex 🅖
● ${prefix}pantek 🅖
● ${prefix}setan 🅖
● ${prefix}iblis 🅖
● ${prefix}cacat 🅖
● ${prefix}yatim 🅖
● ${prefix}piatu 🅖
● ${prefix}goblokcek 🅖
● ${prefix}jelekcek 🅖
● ${prefix}gaycek 🅖
● ${prefix}rate 🅖
● ${prefix}lesbicek 🅖
● ${prefix}gantengcek 🅖
● ${prefix}cantikcek 🅖
● ${prefix}begocek 🅖
● ${prefix}suhucek 🅖
● ${prefix}pintercek 🅖
● ${prefix}jagocek 🅖
● ${prefix}nolepcek 🅖
● ${prefix}babicek 🅖
● ${prefix}bebancek 🅖
● ${prefix}baikcek 🅖
● ${prefix}jahatcek 🅖
● ${prefix}anjingcek 🅖
● ${prefix}haramcek 🅖
● ${prefix}pakboycek 🅖
● ${prefix}pakgirlcek 🅖
● ${prefix}sangecek 🅖
● ${prefix}bapercek 🅖
● ${prefix}fakboycek 🅖
● ${prefix}alimcek 🅖
● ${prefix}suhucek 🅖
● ${prefix}fakgirlcek 🅖
● ${prefix}kerencek 🅖
● ${prefix}wibucek 🅖
● ${prefix}pasarkascek 🅖
● ${prefix}kulcek 🅖                
● ${prefix}cekgoblok 🅖
● ${prefix}cekjelek 🅖
● ${prefix}cekgay 🅖                
● ${prefix}ceklesbi 🅖
● ${prefix}cekganteng 🅖
● ${prefix}cekcantik 🅖
● ${prefix}cekbego 🅖
● ${prefix}ceksuhu 🅖
● ${prefix}cekpinter 🅖
● ${prefix}cekjago 🅖
● ${prefix}ceknolep 🅖
● ${prefix}cekbabi 🅖
● ${prefix}cekbeban 🅖
● ${prefix}cekbaik 🅖
● ${prefix}cekjahat 🅖
● ${prefix}cekanjing 🅖
● ${prefix}cekharam 🅖
● ${prefix}cekpakboy 🅖
● ${prefix}cekpakgirl 🅖
● ${prefix}ceksange 🅖
● ${prefix}cekbaper 🅖
● ${prefix}cekfakboy 🅖
● ${prefix}cekalim 🅖
● ${prefix}ceksuhu 🅖
● ${prefix}cekfakgirl 🅖
● ${prefix}cekkeren 🅖
● ${prefix}cekwibu 🅖
● ${prefix}cekpasarkas 🅖
● ${prefix}cekkul 🅖
● ${prefix}cekbapak 🅖
`}

global.stalkermenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*STALKER MENU*
● ${prefix}igstalk 🅟
● ${prefix}ffstalk 🅟
● ${prefix}mlstalk 🅟
● ${prefix}npmstalk 🅟
● ${prefix}ghstalk 🅟
`}

global.randfotomenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*RANDOM FOTO*
● ${prefix}aesthetic 🅟
● ${prefix}ahegao 🅟
● ${prefix}akira 🅟
● ${prefix}akiyama 🅟
● ${prefix}ana 🅟
● ${prefix}anjing 🅟
● ${prefix}art 🅟
● ${prefix}ass 🅟
● ${prefix}asuna 🅟
● ${prefix}ayuzawa 🅟
● ${prefix}bdsm 🅟
● ${prefix}boneka 🅟
● ${prefix}boruto 🅟
● ${prefix}bts 🅟
● ${prefix}cecan 🅟
● ${prefix}chiho 🅟
● ${prefix}chitoge 🅟
● ${prefix}cogan 🅟
● ${prefix}cosplay 🅟
● ${prefix}cosplayloli 🅟
● ${prefix}cosplaysagiri 🅟
● ${prefix}cuckold 🅟
● ${prefix}cum 🅟
● ${prefix}cyber 🅟
● ${prefix}darkjokes 🅟
● ${prefix}deidara 🅟
● ${prefix}doraemon 🅟
● ${prefix}eba 🅟
● ${prefix}elaina 🅟
● ${prefix}emilia 🅟
● ${prefix}ero 🅟
● ${prefix}erza 🅟
● ${prefix}exo 🅟
● ${prefix}femdom 🅟
● ${prefix}foot 🅟
● ${prefix}freefire 🅟
● ${prefix}gamewallpaper 🅟
● ${prefix}gangbang 🅟
● ${prefix}gifs 🅟
● ${prefix}glasses 🅟
● ${prefix}gremory 🅟
● ${prefix}hekel 🅟
● ${prefix}hentai 🅟
● ${prefix}hestia 🅟
● ${prefix}hijaber 🅟
● ${prefix}hinata 🅟
● ${prefix}husbu 🅟
● ${prefix}inori 🅟
● ${prefix}islamic 🅟
● ${prefix}isuzu 🅟
● ${prefix}itachi 🅟
● ${prefix}itori 🅟
● ${prefix}jahy 🅟
● ${prefix}jeni 🅟
● ${prefix}jiso 🅟
● ${prefix}justina 🅟
● ${prefix}kaga 🅟
● ${prefix}kagura 🅟
● ${prefix}kakasih 🅟
● ${prefix}kaori 🅟
● ${prefix}kartun 🅟
● ${prefix}katakata 🅟
● ${prefix}keneki 🅟
● ${prefix}kotori 🅟
● ${prefix}kpop 🅟
● ${prefix}kucing 🅟
● ${prefix}kurumi 🅟
● ${prefix}lisa 🅟
● ${prefix}loli 🅟
● ${prefix}madara 🅟
● ${prefix}masturbation 🅟
● ${prefix}megumin 🅟
● ${prefix}mikasa 🅟
● ${prefix}mikey 🅟
● ${prefix}miku 🅟
● ${prefix}milf 🅟
● ${prefix}minato 🅟
● ${prefix}mobil 🅟
● ${prefix}motor 🅟
● ${prefix}mountain 🅟
● ${prefix}naruto 🅟
● ${prefix}neko 🅟
● ${prefix}neko2 🅟
● ${prefix}nekonime 🅟
● ${prefix}nezuko 🅟
● ${prefix}onepiece 🅟
● ${prefix}orgy 🅟
● ${prefix}panties 🅟
● ${prefix}pentol 🅟
● ${prefix}pokemon 🅟
● ${prefix}profil 🅟
● ${prefix}programming 🅟
● ${prefix}pubg 🅟
● ${prefix}pussy 🅟
● ${prefix}randblackpink 🅟
● ${prefix}randomnime 🅟
● ${prefix}randomnime2 🅟
● ${prefix}rize 🅟
● ${prefix}rose 🅟
● ${prefix}ryujin 🅟
● ${prefix}sagiri 🅟
● ${prefix}sakura 🅟
● ${prefix}sasuke 🅟
● ${prefix}satanic 🅟
● ${prefix}shina 🅟
● ${prefix}shinka 🅟
● ${prefix}shinomiya 🅟
● ${prefix}shizuka 🅟
● ${prefix}shota 🅟
● ${prefix}tatasurya 🅟
● ${prefix}technology 🅟
● ${prefix}tejina 🅟
● ${prefix}tentacles 🅟
● ${prefix}thighs 🅟
● ${prefix}toukachan 🅟
● ${prefix}tsunade 🅟
● ${prefix}waifu 🅟
● ${prefix}wallhp 🅟
● ${prefix}wallml 🅟
● ${prefix}wallnime 🅟
● ${prefix}yotsuba 🅟
● ${prefix}yuki 🅟
● ${prefix}yulibocil 🅟
● ${prefix}yumeko 🅟
● ${prefix}fox 🅟  
● ${prefix}dog 🅟  
● ${prefix}cat 🅟
● ${prefix}panda 🅟  
● ${prefix}birb 🅟 
● ${prefix}koala 🅟
`}

global.randvideomenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*RANDOM VIDEO*
● ${prefix}asupan 🅟
● ${prefix}bocil 🅟
● ${prefix}rikagusriani 🅟
● ${prefix}hentavid 🅟
● ${prefix}jjmeryani 🅟
`}

global.textpromenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*TEXT PRO*
● ${prefix}candy 🅟 
● ${prefix}christmas 🅟 
● ${prefix}3dchristmas 🅟 
● ${prefix}sparklechristmas 🅟
● ${prefix}deepsea 🅟 
● ${prefix}scifi 🅟 
● ${prefix}rainbow 🅟 
● ${prefix}waterpipe 🅟 
● ${prefix}spooky 🅟 
● ${prefix}pencil 🅟 
● ${prefix}circuit 🅟 
● ${prefix}discovery 🅟 
● ${prefix}metalic 🅟 
● ${prefix}fiction 🅟 
● ${prefix}demon 🅟 
● ${prefix}transformer 🅟 
● ${prefix}berry 🅟 
● ${prefix}thunder 🅟 
● ${prefix}magma 🅟 
● ${prefix}3dstone 🅟 
● ${prefix}neonlight 🅟 
● ${prefix}glitch 🅟 
● ${prefix}harrypotter 🅟 
● ${prefix}brokenglass 🅟 
● ${prefix}papercut 🅟 
● ${prefix}watercolor 🅟 
● ${prefix}multicolor 🅟 
● ${prefix}neondevil 🅟 
● ${prefix}underwater 🅟 
● ${prefix}graffitibike 🅟
● ${prefix}snow 🅟 
● ${prefix}cloud 🅟 
● ${prefix}honey 🅟 
● ${prefix}ice 🅟 
● ${prefix}fruitjuice 🅟 
● ${prefix}biscuit 🅟 
● ${prefix}wood 🅟 
● ${prefix}chocolate 🅟 
● ${prefix}strawberry 🅟 
● ${prefix}matrix 🅟 
● ${prefix}blood 🅟 
● ${prefix}dropwater 🅟 
● ${prefix}toxic 🅟 
● ${prefix}lava 🅟 
● ${prefix}rock 🅟 
● ${prefix}bloodglas 🅟 
● ${prefix}hallowen 🅟 
● ${prefix}darkgold 🅟 
● ${prefix}joker 🅟 
● ${prefix}wicker 🅟
● ${prefix}firework 🅟 
● ${prefix}skeleton 🅟 
● ${prefix}blackpink 🅟 
● ${prefix}sand 🅟 
● ${prefix}glue 🅟 
● ${prefix}1917 🅟 
● ${prefix}leaves 🅟
`}

global.photooxymenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*PHOTO OXY*
● ${prefix}shadow 🅟 
● ${prefix}write 🅟 
● ${prefix}romantic 🅟 
● ${prefix}burnpaper 🅟
● ${prefix}smoke 🅟 
● ${prefix}narutobanner 🅟 
● ${prefix}love 🅟 
● ${prefix}undergrass 🅟
● ${prefix}doublelove 🅟 
● ${prefix}coffecup 🅟
● ${prefix}underwaterocean 🅟
● ${prefix}smokyneon 🅟
● ${prefix}starstext 🅟
● ${prefix}rainboweffect 🅟
● ${prefix}balloontext 🅟
● ${prefix}metalliceffect 🅟
● ${prefix}embroiderytext 🅟
● ${prefix}flamingtext 🅟
● ${prefix}stonetext 🅟
● ${prefix}writeart 🅟
● ${prefix}summertext 🅟
● ${prefix}wolfmetaltext 🅟
● ${prefix}nature3dtext 🅟
● ${prefix}rosestext 🅟
● ${prefix}naturetypography 🅟
● ${prefix}quotesunder 🅟
● ${prefix}shinetext 🅟
`}

global.ephoto360menu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*EPHOTO 360*
● ${prefix}glitchtext 🅟
● ${prefix}writetext 🅟
● ${prefix}advancedglow 🅟
● ${prefix}typographytext 🅟
● ${prefix}pixelglitch 🅟
● ${prefix}neonglitch 🅟
● ${prefix}flagtext 🅟
● ${prefix}flag3dtext 🅟
● ${prefix}deletingtext 🅟
● ${prefix}blackpinkstyle 🅟
● ${prefix}glowingtext 🅟
● ${prefix}underwatertext 🅟
● ${prefix}logomaker 🅟
● ${prefix}cartoonstyle 🅟
● ${prefix}papercutstyle 🅟
● ${prefix}watercolortext 🅟
● ${prefix}effectclouds 🅟
● ${prefix}blackpinklogo 🅟
● ${prefix}gradienttext 🅟
● ${prefix}summerbeach 🅟
● ${prefix}luxurygold 🅟
● ${prefix}multicoloredneon 🅟
● ${prefix}sandsummer 🅟
● ${prefix}galaxywallpaper 🅟
● ${prefix}1917style 🅟
● ${prefix}makingneon 🅟
● ${prefix}royaltext 🅟
● ${prefix}freecreate 🅟
● ${prefix}galaxystyle 🅟
● ${prefix}lighteffects 🅟
`}

global.cerpenmenu = (prefix) => {
return `🅞 = Khusus Owner
🅖 = Khusus Group
🅕 = Free User
🅟 = Premium

*RANDOM CERPEN*
● ${prefix}cerpen_sejarah 🅟
● ${prefix}cerpen_sedih 🅟
● ${prefix}cerpen_sastra 🅟
● ${prefix}cerpen_romantis 🅟
● ${prefix}cerpen_rohani 🅟
● ${prefix}cerpen_rindu 🅟
● ${prefix}cerpen_remaja 🅟
● ${prefix}cerpen_ramadhan 🅟
● ${prefix}cerpen_petualangan 🅟
● ${prefix}cerpen_persahabatan 🅟
● ${prefix}cerpen_perpisahan 🅟
● ${prefix}cerpen_perjuangan 🅟
● ${prefix}cerpen_penyesalan 🅟
● ${prefix}cerpen_pengorbanan 🅟
● ${prefix}cerpen_pengalaman 🅟
● ${prefix}cerpen_pendidikan 🅟
● ${prefix}cerpen_penantian 🅟
● ${prefix}cerpen_patahhati 🅟
● ${prefix}cerpen_olahraga 🅟
● ${prefix}cerpen_nasionalisme 🅟
● ${prefix}cerpen_nasihat 🅟
● ${prefix}cerpen_motivasi 🅟
● ${prefix}cerpen_misteri 🅟
● ${prefix}cerpen_mengharukan 🅟
● ${prefix}cerpen_malaysia 🅟
● ${prefix}cerpen_liburan 🅟
● ${prefix}cerpen_kristen 🅟
● ${prefix}cerpen_korea 🅟
● ${prefix}cerpen_kisahnyata 🅟
● ${prefix}cerpen_keluarga 🅟
● ${prefix}cerpen_kehidupan 🅟
● ${prefix}cerpen_jepang 🅟
● ${prefix}cerpen_inspiratif 🅟
● ${prefix}cerpen_gokil 🅟
● ${prefix}cerpen_galau 🅟
● ${prefix}cerpen_cintasejati 🅟
● ${prefix}cerpen_cintasegitiga 🅟
● ${prefix}cerpen_cintasedih 🅟
● ${prefix}cerpen_cintaromantis 🅟
● ${prefix}cerpen_cintapertama 🅟
● ${prefix}cerpen_cintaislami 🅟
● ${prefix}cerpen_cinta 🅟
● ${prefix}cerpen_budaya 🅟
● ${prefix}cerpen_bahasasunda 🅟
● ${prefix}cerpen_bahasajawa 🅟
● ${prefix}cerpen_bahasainggris 🅟
● ${prefix}cerpen_bahasadaerah 🅟
● ${prefix}cerpen_anak 🅟
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})