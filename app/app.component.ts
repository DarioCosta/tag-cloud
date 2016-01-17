import {Component} from 'angular2/core';
import {TagCloudComponent} from './tag-cloud/tag-cloud.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Tag Cloud</h1>
		<div>Ultimo tag selezionato = {{latestSelected}}</div>
		<div>
			<label for="showSize">Visualizza numero occorrenze</label>
        <input type="checkbox" name="showSize" [(ngModel)]="showSize">
        <span>{{showSize}}</span>
    	<tag-cloud (selectedTag)="onSelectedTag($event)" [text]="paragraph" [showSize]="showSize" [maxWords]="size" [ignore]="['alla']" [highlight]="['padre', 'mentre', 'infine']"></tag-cloud>
    `,
    directives:[TagCloudComponent]
})
export class AppComponent {
	public size = 50;
	public latestSelected: string = "";
	public showSize: boolean = false;
	onSelectedTag(name: string){
		this.latestSelected = name;
	}
	public paragraph: String = `
LA SENTENZA

Era una bellissima mattina primaverile, di domenica. Georg Bendemann, giovane commerciante, era seduto nella sua camera al primo piano di una delle case basse, dai muri sottili, che in lunga fila si susseguivano sulla riva del fiume, differendo l'una dall'altra quasi unicamente per l'altezza e la tinta. Aveva appena terminato di scrivere a un suo amico di gioventù che abitava all'estero: suggellò pian piano la lettera, attardandosi, e poi, appoggiati i gomiti alla scrivania, si mise a guardare il fiume, il ponte e le colline coperte di verde pallido che sorgevano sulla riva opposta.
Ripensava ai casi di quell'amico: insoddisfatto dell'esistenza in patria, qualche anno prima si era rifugiato - è la parola esatta - in Russia. Ora svolgeva un'attività in proprio a Pietroburgo, dapprincipio assai bene avviatasi, ma che da tempo sembrava stagnare: così almeno si lamentava l'amico, nelle sue sempre più rare visite. Sicché andava arrabattandosi senza risultato in terra straniera, e un esotico barbone celava malamente i tratti ben noti sin dall'infanzia, mentre il colorito giallognolo del viso pareva denunziare una malattia già in atto. Secondo quanto diceva, non era riuscito a stabilire laggiù rapporti con la colonia dei suoi compatrioti, e neppure, o quasi, relazioni sociali con famiglie del luogo. Perciò si disponeva ormai definitivamente a una vita di celibato.
In quali termini scrivere a un uomo simile, che evidentemente aveva sbagliato strada, che si poteva commiserare ma non certo aiutare? Consigliargli forse di tornare a casa, trasferire qui la propria esistenza, riannodare tutte le antiche amicizie - cosa a cui non si frapponevano ostacoli - e, per il resto, fidare nell'appoggio degli amici? Ma era come dirgli, in parole tanto più umilianti quanto più erano gentili, che i suoi tentativi erano falliti, che ormai era meglio vi rinunciasse, che doveva non solo tornare in patria, ma anche sopportare di esser guardato da tutti con tanto d'occhi come un rimpatriato; che solo i suoi amici avevano un po' di buonsenso, mentre a lui, ragazzo invecchiato, non restava che seguire il loro esempio: rimanere a casa e cercare di far fortuna. Ed era poi sicuro che, mortificandolo così, avrebbe raggiunto uno scopo? Forse non sarebbe neppure riuscito a farlo tornare - non diceva lui stesso che ormai le abitudini della patria gli tornavano incomprensibili? - ed egli nonostante tutto sarebbe rimasto là, nel suo paese straniero, amareggiato dai consigli e ancor più freddo verso gli amici. Che se invece ascoltasse davvero i suggerimenti e, rientrato qui, si riducesse più che mai a mal partito - non per colpa di nessuno, s'intende, ma per ragioni obiettive -, e allora non potesse più ritrovarsi negli amici ma neanche fare a meno di loro, e soffrisse umiliazioni, e insomma rimanesse davvero senza amici nè patria, non era allora molto meglio che se ne stesse all'estero, là dov'era? Date queste circostanze, come si poteva pensare che qui sarebbe riuscito a cavarsela?
Per tali motivi, se il contatto epistolare doveva essere mantenuto, era impossibile avviare con lui un vero e proprio rapporto, come si sarebbe fatto senza impaccio con qualsiasi conoscente, anche il più lontano. Da oltre tre anni l'amico non tornava in patria, adducendo a magra scusante la precarietà della situazione politica in Russia, che a suo dire non consentiva a un piccolo commerciante di assentarsi neppure per brevi periodi, e ciò quando centinaia di migliaia di russi andavano tranquillamente in giro per il mondo. Proprio per Georg, invece, quei tre anni avevano portato molti mutamenti. Della morte di sua madre, avvenuta circa due anni prima, e dopo la quale egli faceva vita in comune col vecchio padre, l'amico era bensì stato informato, ed aveva inviato una lettera di condoglianze molto asciutta, spiegabile solo con l'ipotesi che, da lontano, il dolore per un simile avvenimento diventi del tutto inconcepibile. Ma da allora Georg aveva preso in mano con maggior risolutezza, così come ogni altra cosa, anche la ditta. Forse, finché la madre era viva, il padre, che nel lavoro non ammetteva interferenze, non gli aveva permesso di esplicare in proprio la sua attività; forse il padre, dopo la morte della moglie, pur continuando a lavorare nella ditta, s'era fatto un po' in disparte; o forse infine - anzi con ogni probabilità - occasioni fortunate avevano giocato in maniera decisiva, fatto sta che in quei due anni la ditta aveva conosciuto uno sviluppo inatteso: si era dovuto raddoppiare il personale, le vendite si erano quintuplicate e si potevano prevedere con certezza ulteriori progressi.
L'amico tuttavia non ne sapeva nulla di questi mutamenti. In passato, e un'ultima volta forse nella lettera di condoglianze, aveva cercato di convincere Georg ad emigrare in Russia, diffondendosi in particolari circa le prospettive che gli si sarebbero offerte a Pietroburgo nel suo ramo d'attività. Ma erano cifre trascurabili in rapporto al recente incremento dell'attività di Georg; nè questi aveva avuto voglia d'informare l'amico dei suoi successi negli affari, e indubbiamente lo scrivergliene ora, a tanta distanza di tempo, sarebbe potuto apparire alquanto singolare.
Perciò Georg, nelle sue lettere all'amico, si era sempre limitato a trattare di eventi insignificanti, quali si affollano alla mente di chi, in una domenica tranquilla, si abbandona ai suoi pensieri. Il suo solo desiderio era di lasciare intatta l'immagine della città natale che certo l'amico si era foggiata in mente durante quel periodo e cui aveva fatto l'abitudine. Così fu che Georg per tre volte, a intervalli abbastanza lunghi, gli annunziò il fidanzamento di un uomo qualunque con una ragazza altrettanto qualunque: finché l'amico, contrariamente a ciò che Georg si proponeva, non cominciò a dimostrarsi incuriosito da quel fatto singolare.
Ma Georg preferiva scrivergli così piuttosto che confessargli d'essersi lui stesso fidanzato, un mese prima, con una certa signorina Frieda Brandenfeld, giovane di agiata famiglia. Sovente discorreva con la sua promessa di quell'amico e dello speciale rapporto di corrispondenza che intratteneva con lui. «Allora di sicuro non verrà alle nostre nozze,» diceva lei, «eppure io ho il diritto di conoscere tutti i tuoi amici.» «Non voglio importunarlo,» rispondeva Georg, «so bene che probabilmente verrebbe, o almeno lo credo, ma gli parrebbe di essere coartato e danneggiato; forse m'invidierebbe e, scontento ma incapace ormai di liberarsi dalla sua scontentezza, se ne ripartirebbe da solo. Da solo... lo sai che cosa significa?» «Già, ma se venisse a sapere per altra via del nostro matrimonio?» «Questo non posso certo evitarlo, ma è improbabile, data l'esistenza che conduce.» «Georg, se hai di questi amici, era meglio che non ti fidanzassi.» «Sì, la colpa è di tutti e due, ma adesso non vorrei che fosse diversamente.» E poiché lei, ansimando sotto i suoi baci, aggiunse: «Però è una cosa che mi addolora», egli giudicò che tanto valeva scrivere tutto al suo amico. «Cosi sono e così ha da prendermi,» si disse, «non posso ritagliare in me stesso un altro individuo più di me adatto alla sua amicizia.»
E infatti, nella lunga lettera scritta quella domenica mattina, partecipava all'amico il suo fidanzamento nei seguenti termini: «La più bella novità l'ho tenuta in serbo per la fine. Mi sono fidanzato con la signorina Frieda Brandenfeld, una fanciulla di agiata famiglia, stabilitasi qui parecchio tempo dopo la tua partenza: perciò difficilmente puoi averla conosciuta. Avrò ancora l'occasione di parlarti a lungo della mia sposa; per oggi ti basti che sono davvero felice e che questo è l'unico mutamento sopravvenuto nei nostri rapporti: che d'ora in poi avrai in me un amico felice, non più un amico qualunque. Inoltre, la mia fidanzata - che ti manda a salutare e presto ti scriverà di persona - ti sarà sinceramente amica, ciò che per uno scapolo non è cosa priva d'importanza. So che molti impegni ti trattengono dal farci visita; ma non sarebbero proprio le mie nozze la miglior occasione di dare un calcio a tutti gli ostacoli? Comunque sia, non farti riguardi e disponi come meglio credi.»
Con quella lettera in mano Georg rimase a lungo seduto davanti alla scrivania, il viso rivolto verso la finestra. Un conoscente passando nella strada lo aveva salutato, e lui aveva risposto appena, con un sorriso distratto.
Finalmente si ficcò la lettera in tasca, uscì dalla stanza e, attraversato un piccolo corridoio, entrò nella camera di suo padre: erano mesi che non vi poneva più piede. In realtà non ne aveva bisogno, poiché incontrava sempre il padre in ufficio, a mezzogiorno pranzavano insieme in trattoria e la sera ciascuno provvedeva per proprio conto; dopo cena poi, a meno che Georg, come spessissimo accadeva, si trovasse con gli amici o, negli ultimi tempi, si recasse dalla fidanzata, solevano trattenersi ancora un po' nella sala da pranzo, ciascuno leggendo il suo giornale. Georg fu stupito dell'oscurità che regnava nella stanza del padre anche in quel mattino di sole: così forte era l'ombra proiettata da un alto muro ergentesi sul lato opposto dello stretto cortile. Il padre era seduto accanto alla finestra, in un angolo tutto adorno di ricordi della povera mamma, e leggeva il giornale tenendolo alquanto spostato rispetto agli occhi, per controbilanciare qualche difetto di vista. Sul tavolo si trovavano i resti della colazione, evidentemente consumata solo in piccola parte.
«Oh, Georg!» disse il padre facendoglisi subito incontro, al che la sua pesante vestaglia si aprì e i lembi gli si sollevarono intorno... «Mio padre è pur sempre un colosso,» si disse Georg.
«Qui c'è un buio insopportabile,» disse poi.
«Eh sì, piuttosto buio,» rispose il padre.
«E tieni anche chiusa la finestra?»
«Preferisco così.»
«Fuori fa un bel calduccio,» disse Georg, come riprendendo il filo della frase precedente, e si sedette. Il padre tolse di mezzo il vassoio della colazione e lo mise su un comò.
«Volevo soltanto dirti,» continuò Georg, che seguiva tutto trasognato i movimenti del vecchio, «che mi sono deciso ad annunziare a Pietroburgo il mio fidanzamento.» Trasse un poco la lettera fuori della tasca, poi ve la lasciò ricadere.
«A Pietroburgo?» fece il padre.
«Sì, al mio amico,» disse Georg cercando i suoi occhi. In ufficio è tutto diverso, pensò, guarda qui come se ne sta seduto imponente, a braccia incrociate sul petto.
«Già, al tuo amico,» disse il padre, calcando sulle parole.
«Sai bene, papà, che in un primo tempo ho preferito tacergli la notizia. Per riguardo, non per altro motivo. È un uomo difficile, lo sai anche tu. Ne venga pure a conoscenza attraverso altri, mi dicevo (benché sia assai poco probabile, appartato come vive), non posso impedirglielo; ma saperlo proprio da me, no, questo no.»
«Georg,» disse il padre allargando la bocca sdentata, «ascoltami! Sei venuto da me in questa circostanza, a chiedere il mio consiglio, ciò che senza dubbio torna a tuo onore. Ma questo non è niente, anzi è peggio che niente, se ora non vuoi dirmi tutta la verità. Non voglio rivangare qui cose che non hanno a che fare: certe cose tutt'altro che belle, successe dopo la morte della povera mamma. Forse anche per quelle verrà il momento, e magari prima di quanto crediamo. In ufficio parecchie pratiche mi sfuggono, forse non perché mi sian tenute nascoste (che qualcuno me le tenga nascoste non voglio per ora nemmeno supporlo), non sono più abbastanza vigoroso, la mia memoria si annebbia, non riesco più a star dietro a ogni cosa. Questo avviene in primo luogo per una legge naturale, in secondo luogo perché la morte della nostra mammina fu per me un colpo molto più duro che per te... Ma dato che ci stiamo proprio occupando di questa faccenda, di questa lettera, te ne prego, non cercare di abbindolarmi. È una bazzecola, non val la pena di spenderci il fiato, perciò sii sincero. Hai realmente quell'amico a Pietroburgo?»
Georg si levò in piedi, confuso. «Non parliamone, dei miei amici. Mille amici non valgono mio padre. Sai cosa credo, invece? Che tu non ti riguardi abbastanza. La vecchiaia ha ben dei diritti! La tua presenza in ditta mi è indispensabile, lo sai benissimo, ma se per causa della ditta dovesse andarci di mezzo la tua salute, chiuderei tutto domani. No, così non va. Dobbiamo decidere un nuovo sistema di vita, per te, un cambiamento radicale. Te ne stai qui tappato al buio, mentre in salotto avresti tutta la luce che vuoi. Assaggi appena la colazione, invece di alimentarti come è necessario. Stai seduto accanto alla finestra chiusa, quando l'aria ti farebbe tanto bene. No, papà mio! Farò venire il medico e ci atterremo alle sue prescrizioni. Ci scambieremo le stanze: tu prenderai quella sul davanti, e io verrò qui. Non dovrai neppure accorgerti del cambiamento, provvederò io a tutto. Ma per questo c'è tempo; intanto sdraiati ancora un po' a letto, hai assoluto bisogno di riposare. Vieni, ti aiuto io a svestirti, ne sono capace, vedrai. Oppure vuoi andare subito nell'altra stanza e per il momento sdraiarti sul mio letto? Sarebbe molto giudizioso, sai.»
Georg stava a un passo dal padre: questi aveva lasciato ricadere sul petto la bianca testa arruffata.
«Georg,» chiamò il padre immobile, a voce bassa.
Georg, pronto, s'inginocchiò davanti al vecchio e vide in quello stanco viso le pupille dardeggiarlo enormi dagli angoli degli occhi.
«Tu non hai amici a Pietroburgo. Sei sempre stato un burlone e non hai avuto scrupolo a prendere in giro anche me. Come vuoi avere un amico proprio là! Non ci posso credere.»
«Ma sì, ricordati, papà,» disse Georg, e, fatto alzare il padre dalla poltrona, sfilò la vestaglia di dosso al corpo cadente. «Son quasi tre anni che il mio amico è venuto a trovarci. Rammento ancora che non ti andava molto a genio. Almeno due volte ho negato di fronte a te la sua presenza, sebbene si trovasse già in camera mia. Capivo benissimo che lo trovassi antipatico: è un ragazzo dal carattere tutto particolare. Ma in seguito hai conversato più volte con lui molto affabilmente, ed io ero così orgoglioso di vedere come lo ascoltavi, assentivi col capo, gli ponevi domande. Se ci pensi, non puoi non ricordartene. Ci raccontò certi episodi incredibili della rivoluzione russa. Per esempio che una volta, mentre era in viaggio d'affari a Kiev, durante un tumulto aveva veduto su un balcone un pope incidersi una gran croce nella carne viva della mano, e poi con la mano alzata implorare la folla. Tu stesso hai poi riferito quella storia, in varie occasioni.»
Frattanto Georg era riuscito a rimettere seduto il padre e a togliergli con buon garbo le mutande di maglia, che portava sopra quelle di tela, come pure i calzini. Notò che quella biancheria non era pulitissima, e si rimproverò di aver trascurato il vecchio. Senza dubbio sarebbe stato suo compito accertarsi che la biancheria del padre fosse cambiata. Con la fidanzata non aveva ancora discusso a fondo il problema della sistemazione futura del padre; in realtà erano tacitamente d'accordo che egli dovesse rimanere a vivere solo nella vecchia casa. Ma ora decise tutt'a un tratto, e con la massima fermezza, di farlo venire con sè nel nuovo alloggio. A ben guardare, anzi, c'era quasi da temere che quelle cure, che si riprometteva di dedicargli dopo sposato, potessero giungere troppo tardi.
Portò il vecchio sul letto reggendolo tra le braccia. In quei pochi passi ebbe un'orribile sensazione: notò che suo padre, appoggiandoglisi al petto, giocherellava con la sua catena dell'orologio. Stentò anzi a farlo coricare, tanto accanitamente si aggrappava a quella catena.
Ma appena fu coricato, tutto parve a posto. Egli stesso si coprì, tirandosi la coltre un bel pezzo al disopra delle spalle; poi guardò Georg senza rancore.
«Ora ti ricordi di lui, non è vero?» domandò Georg con un cenno incoraggiante del capo.
«Sono ben coperto, adesso?» chiese il padre, come se non riuscisse a vedere se aveva i piedi sotto le coltri o no.
«Dunque, sei contento di startene a letto,» disse Georg, rincalzandolo con cura.
«Sono ben coperto?» ripetè il padre, come se la risposta gli stesse eccezionalmente a cuore.
«Sta' tranquillo, sei ben coperto.»
«No!» gridò il padre senza neppur lasciargli finir la frase, gettò indietro la coperta con tale energia che per un momento la si vide fluttuare in aria tutta spiegata, e si drizzò in piedi sul letto, mentre con una mano sfiorava il soffitto.
«Sì, tu volevi coprirmi, lo so, mala pianta, ma non sono ancora coperto. E fosse questo l'ultimo mio sprazzo di vigore, per te basta, è fin troppo! Certo che lo conosco, il tuo amico. Sarebbe stato lui il figlio che desideravo. E perciò Io hai ingannato tutti questi anni. Per che altra ragione, se no? Credi che non abbia pianto per lui? Proprio per questo ti chiudi a chiave nel tuo ufficio, e che nessuno disturbi, il principale è occupato... soltanto per scrivere le tue menzognere lettere in Russia! Ma per fortuna un padre non ha bisogno che gl'insegnino a leggere nell'animo del proprio figlio. E adesso, quando hai creduto di averlo sopraffatto, sopraffatto al punto di potergliti sedere addosso col tuo deretano, senza che lui possa muoversi, allora il mio signor figlio decide di sposarsi!»
Georg guardava di sotto in su la terrificante immagine paterna. Il pensiero dell'amico di Pietroburgo, che ora, ad un tratto, suo padre conosceva così bene, lo attanagliava come non mai. Lo vedeva sperduto nella lontana Russia, lo vedeva sulla soglia del negozio vuoto, saccheggiato. Eccolo lì ancora ritto tra gli scaffali sconquassati, le merci lacere, i bracci dei lumi a gas spezzati e contorti. Perché mai se n'era andato tanto lontano!
«Guardami, dunque!» gridò il padre, e Georg corse verso il letto, quasi frastornato, per non lasciarsi sfuggire nulla, ma si fermò a mezzo.
«Perché quella ha alzato le gonne,» cominciò il padre con voce di falsetto, «perché le ha alzate a questo modo, quella lurida oca», e a corroborare il suo dire alzò la camicia, tanto da far vedere la cicatrice del tempo di guerra che aveva sulla coscia, «perché le ha alzate così e così e così, ti sei aggrappato a lei, e per potertela godere senza disturbo hai oltraggiato la memoria della mamma, hai tradito l'amico e cacciato in letto tuo padre, così che neanche lui potesse più muoversi. Ma guarda un po' se non si muove!» E ritto, senza appoggio alcuno, prese a dimenare le gambe, esultante di chiaroveggenza.
Georg se ne stava rincantucciato, lontano più che poteva dal padre. Già molto prima aveva deciso di porre la massima attenzione a tutto, per non essere comunque preso alla sprovvista per vie traverse, alle spalle, dall'alto. Ora ricordò quella decisione da tempo dimenticata, e nello stesso istante la dimenticò, come quando s'infila nella cruna di un ago un filo troppo corto.
«Ma il tuo amico non è stato tradito!» gridò il padre, e agitando l'indice avanti e indietro sottolineò energicamente le sue parole. «C'ero qui io a rappresentarlo!»
«Commediante!» non si trattenne dall'esclamare Georg, e, subito cosciente del guasto provocato, si morsicò, troppo tardi ahimè, con gli occhi sbarrati, la lingua, tanto da piegarsi in due dal male.
«Precisamente, ho recitato la commedia! Commedia: è la parola giusta! Quale altra consolazione restava al vecchio padre vedovo? Parla, e nel momento che mi rispondi sii ancora vivo per me come figlio: che altro mi restava, in questa mia stanza sul cortile, angariato dal personale infedele, vecchio fin nel midollo delle ossa? E mio figlio se ne andava trionfante pel mondo, concludeva affari che io avevo preparati, caprioleggiava dal piacere e passava davanti a suo padre con la faccia compunta dell'onest'uomo! Credi che non t'avrei voluto bene, io che t'ho dato la vita?»
Ora si chinerà in avanti, pensò Georg: potesse cascar giù e sfracellarsi! Quella parola gli saettò nella testa come una scudisciata.
Il padre si chinò, ma non cadde; e poiché Georg non si mosse, come lui s'era aspettato, si drizzò di nuovo.
«Restatene pur lì, non ho bisogno di te! Tu pensi che hai ancora la forza di avvicinarti, che non ti muovi solo perché lo vuoi. Non sbagliarti, bada! Sono sempre io di gran lunga il più forte. Da solo, forse, sarei stato costretto a cedere, ma ora la mamma mi ha dato la sua forza, col tuo amico mi sono inteso alla perfezione, e la tua clientela è tutta qui, nella mia tasca!»
«Ha le tasche perfino nella camicia!» si disse Georg, e pensò che gli sarebbe bastata quell'osservazione a screditarlo di fronte al mondo. Lo pensò solo per un attimo, poiché via via dimenticava quel che pensava.
«Prova ad attaccarti al braccio della tua bella e a venirmi dinanzi! Te la spazzo via io dal fianco, lascia fare a me !»
Georg fece qualche smorfia, come a dire che non ci credeva. Il padre si limitò a scuotere affermativamente il capo verso il suo angolo, a conferma che diceva il vero.
«Come me la son goduta stamane, quando sei venuto a chiedermi se dovevi scrivere al tuo amico che ti eri fidanzato! Ma lui sa tutto, sciocchino, sa tutto! Gliel'ho scritto io, perché tu ti sei scordato di portarmi via l'occorrente per scrivere. E per questo sono anni che non viene più, lo sa cento volte meglio di te, e le tue lettere non le legge, le ciancica con la mano sinistra mentre nella destra tiene le mie, e le legge!»
Agitò il braccio sopra la testa, ebbro d'entusiasmo.
«Mille volte meglio, lo sa!» gridò.
«Sì, diecimila!» disse Georg come a dileggiare il padre, ma ancora prima di uscirgli dalle labbra la parola acquistò un suono mortalmente serio.
«Da anni stavo aspettando che venissi a chiedermelo! Credi forse che dia importanza ad altre cose? Credi che legga i giornali? To'!» e gettò a Georg un foglio di giornale che chissà come era finito nel letto. Un vecchio giornale, dal titolo completamente ignoto a Georg.
«Quanto hai tardato a maturarti! C'è voluta la morte della mamma, lei non ha potuto vedere questo fausto giorno, il tuo amico sta agonizzando laggiù nella sua Russia, già tre anni fa era giallo da buttar via e quanto a me, lo vedi bene come sto. Ce li hai pure, gli occhi!»
«Dunque mi hai spiato!» gridò Georg.
«Forse volevi dirla prima, questa parola,» commentò il padre in tono di compatimento, «ma ormai non serve più.»
E alzando la voce: «Adesso sai che c'era qualcosa oltre a te, finora non lo sapevi! Sì certo, eri un bimbo innocente, ma più certamente ancora eri un essere diabolico!... E perciò sappilo: io qui ti condanno a morire annegato!»
Georg si sentì spinto fuor della stanza, ancora negli orecchi il tonfo prodotto dal padre nel saltar dal letto per inseguirlo. Sulla scala, di cui scese a volo i gradini come scivolando su un piano inclinato, rovesciò quasi a terra la domestica che stava salendo per le pulizie mattutine. «Gesù!» gridò la donna coprendosi il viso col grembiule, ma lui era già lontano. Come il vento uscì dal portone; al di là della strada una forza lo incalzava verso l'acqua. Già si aggrappava al parapetto, come un affamato al cibo: lo superò con un volteggio, da quel provetto ginnasta, orgoglio dei suoi genitori, ch'era stato da ragazzo. Ancora si tenne stretto con le mani che via via cedevano, guardò intensamente, di tra le sbarre del ponte, un autobus il cui rumore senza dubbio avrebbe coperto quello della sua caduta, gridò piano: «Miei cari genitori, io vi ho sempre voluto bene!» e si lasciò precipitare.
In quel momento passava sul ponte un traffico addirittura sterminato.
	`;
}