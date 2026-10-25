/* =====================================================================
   DATA — the 48 teams of the 2026 World Cup, in their drawn groups
   ===================================================================== */
const W='#f4f4f4';
const GROUPS={
  A:['MEX','RSA','KOR','CZE'], B:['CAN','BIH','QAT','SUI'], C:['BRA','MAR','HAI','SCO'], D:['USA','PAR','AUS','TUR'],
  E:['GER','CUW','CIV','ECU'], F:['NED','JPN','SWE','TUN'], G:['BEL','EGY','IRN','NZL'], H:['ESP','CPV','KSA','URU'],
  I:['FRA','SEN','IRQ','NOR'], J:['ARG','ALG','AUT','JOR'], K:['POR','COD','UZB','COL'], L:['ENG','CRO','GHA','PAN']};
// id, name, rating, flag file (flags/<code>.svg, from flag-icons), kit [shirt, shorts, socks, pattern, pattern colour], change shirt, squad (GK, DF, DF, MF, MF, MF, FW), star index
const RAW=[
 ['MEX','Mexico',79,'mx',['#0b6b3a',W,'#0b6b3a'],W,['Luis Malagón','César Montes','Johan Vásquez','Edson Álvarez','Luis Chávez','Alexis Vega','Santiago Giménez'],6],
 ['RSA','South Africa',72,'za',['#ffd200','#0b6b3a','#ffd200'],W,['Ronwen Williams','Mothobi Mvala','Aubrey Modiba','Teboho Mokoena','Themba Zwane','Oswin Appollis','Lyle Foster'],6],
 ['KOR','South Korea',78,'kr',['#d4213d','#151515','#d4213d'],W,['Jo Hyeon-woo|Jo Hyeon-woo','Kim Min-jae|Kim Min-jae','Seol Young-woo|Seol Young-woo','Hwang In-beom|Hwang In-beom','Lee Kang-in|Lee Kang-in','Hwang Hee-chan|Hwang Hee-chan','Son Heung-min|Son Heung-min'],6],
 ['CZE','Czechia',76,'cz',['#d7141a',W,'#d7141a'],W,['Matěj Kovář','Vladimír Coufal','Ladislav Krejčí','Tomáš Souček','Lukáš Provod','Pavel Šulc','Patrik Schick'],6],
 ['CAN','Canada',77,'ca',['#d52b1e','#d52b1e','#d52b1e'],W,['Dayne St. Clair','Alphonso Davies','Moïse Bombito','Stephen Eustáquio','Ismaël Koné','Tajon Buchanan','Jonathan David'],6],
 ['BIH','Bosnia and Herzegovina',75,'ba',['#1f3f99','#1f3f99','#1f3f99'],W,['Nikola Vasilj','Sead Kolašinac','Amar Dedić','Amir Hadžiahmetović','Benjamin Tahirović','Ermedin Demirović','Edin Džeko'],6],
 ['QAT','Qatar',70,'qa',['#8a1538','#8a1538','#8a1538'],W,['Meshaal Barsham','Pedro Miguel','Boualem Khoukhi','Karim Boudiaf','Abdulaziz Hatem','Akram Afif','Almoez Ali'],5],
 ['SUI','Switzerland',79,'ch',['#d52b1e','#d52b1e','#d52b1e'],W,['Gregor Kobel','Manuel Akanji','Ricardo Rodríguez','Granit Xhaka','Remo Freuler','Dan Ndoye','Breel Embolo'],3],
 ['BRA','Brazil',87,'br',['#ffdf00','#1f4fa8',W],'#1f4fa8',['Alisson','Marquinhos','Gabriel Magalhães','Casemiro','Bruno Guimarães','Raphinha','Vinícius Júnior|Vini Jr.'],6],
 ['MAR','Morocco',82,'ma',['#c1272d','#0b6b3a','#c1272d'],W,['Yassine Bounou','Achraf Hakimi','Nayef Aguerd','Sofyan Amrabat','Azzedine Ounahi','Brahim Díaz','Youssef En-Nesyri'],1],
 ['HAI','Haiti',65,'ht',['#00209f','#d21034','#00209f'],'#d21034',['Johny Placide','Ricardo Adé','Carlens Arcus','Leverton Pierre','Danley Jean Jacques','Derrick Etienne Jr.','Duckens Nazon'],6],
 ['SCO','Scotland',76,'gb-sct',['#1c2a5e',W,'#1c2a5e'],W,['Angus Gunn','Andy Robertson','Kieran Tierney','Billy Gilmour','John McGinn','Scott McTominay','Ché Adams'],5],
 ['USA','United States',80,'us',[W,'#1f2a5c',W],'#1f2a5c',['Matt Freese','Chris Richards','Antonee Robinson','Tyler Adams','Weston McKennie','Christian Pulisic','Folarin Balogun'],5],
 ['PAR','Paraguay',76,'py',['#d52b1e','#1f2a5c','#1f2a5c','v',W],'#1f2a5c',['Gatito Fernández|Gatito','Gustavo Gómez','Omar Alderete','Diego Gómez','Miguel Almirón','Julio Enciso','Antonio Sanabria'],4],
 ['AUS','Australia',75,'au',['#ffcd00','#00843d','#ffcd00'],'#00843d',['Mathew Ryan','Harry Souttar','Alessandro Circati','Jackson Irvine',"Aiden O'Neill",'Riley McGree','Mitchell Duke'],3],
 ['TUR','Türkiye',80,'tr',['#e30a17',W,'#e30a17'],W,['Uğurcan Çakır','Merih Demiral','Ferdi Kadıoğlu','Hakan Çalhanoğlu','Arda Güler','Kenan Yıldız','Kerem Aktürkoğlu'],4],
 ['GER','Germany',86,'de',[W,'#151515',W],'#151515',['Oliver Baumann','Antonio Rüdiger','Jonathan Tah','Joshua Kimmich','Florian Wirtz','Jamal Musiala','Kai Havertz'],5],
 ['CUW','Curaçao',66,'cw',['#002b7f','#002b7f','#002b7f'],'#f9e814',['Eloy Room','Juriën Gaari','Sherel Floranus','Leandro Bacuna','Juninho Bacuna','Tahith Chong','Gervane Kastaneer'],3],
 ['CIV','Ivory Coast',78,'ci',['#f77f00',W,'#009e60'],W,['Yahia Fofana','Evan Ndicka','Odilon Kossounou','Franck Kessié','Seko Fofana','Amad Diallo','Sébastien Haller'],5],
 ['ECU','Ecuador',79,'ec',['#ffdd00','#034ea2','#ed1c24'],'#034ea2',['Hernán Galíndez','Piero Hincapié','Willian Pacho','Moisés Caicedo','Kendry Páez','Pervis Estupiñán','Enner Valencia'],3],
 ['NED','Netherlands',85,'nl',['#ff7f00','#ff7f00','#ff7f00'],'#1f2a5c',['Bart Verbruggen','Virgil van Dijk','Denzel Dumfries','Frenkie de Jong','Tijjani Reijnders','Xavi Simons','Cody Gakpo'],1],
 ['JPN','Japan',80,'jp',['#1b3a8a','#1b3a8a','#1b3a8a'],W,['Zion Suzuki','Ko Itakura','Takehiro Tomiyasu','Wataru Endo','Takefusa Kubo','Kaoru Mitoma','Ayase Ueda'],5],
 ['SWE','Sweden',79,'se',['#fecc00','#006aa7','#fecc00'],'#006aa7',['Viktor Johansson','Victor Lindelöf','Isak Hien','Lucas Bergvall','Dejan Kulusevski','Alexander Isak','Viktor Gyökeres'],6],
 ['TUN','Tunisia',74,'tn',['#e70013','#e70013','#e70013'],W,['Aymen Dahmen','Montassar Talbi','Ali Abdi','Ellyes Skhiri','Hannibal Mejbri','Anis Ben Slimane','Seifeddine Jaziri'],4],
 ['BEL','Belgium',82,'be',['#c8102e','#c8102e','#c8102e'],'#151515',['Thibaut Courtois','Arthur Theate','Timothy Castagne','Youri Tielemans','Kevin De Bruyne','Jérémy Doku','Romelu Lukaku'],4],
 ['EGY','Egypt',77,'eg',['#ce1126',W,'#151515'],W,['Mohamed El Shenawy','Mohamed Abdelmonem','Mohamed Hany','Marwan Attia','Emam Ashour','Omar Marmoush','Mohamed Salah'],6],
 ['IRN','Iran',76,'ir',[W,W,W],'#da0000',['Alireza Beiranvand','Shojae Khalilzadeh','Milad Mohammadi','Saeid Ezatolahi','Alireza Jahanbakhsh','Mohammad Mohebi','Mehdi Taremi'],6],
 ['NZL','New Zealand',68,'nz',[W,'#151515',W],'#151515',['Max Crocombe','Michael Boxall','Tyler Bindon','Joe Bell','Marko Stamenić','Sarpreet Singh','Chris Wood'],6],
 ['ESP','Spain',90,'es',['#c60b1e','#1f2a5c','#1f2a5c'],'#f1bf00',['Unai Simón','Pau Cubarsí','Marc Cucurella','Rodri','Pedri','Lamine Yamal','Mikel Oyarzabal'],5],
 ['CPV','Cape Verde',69,'cv',['#003893','#003893','#003893'],W,['Vozinha','Roberto Lopes','Logan Costa','Kevin Pina','Jamiro Monteiro','Ryan Mendes','Dailon Livramento'],5],
 ['KSA','Saudi Arabia',72,'sa',[W,W,W],'#006c35',['Mohammed Al-Owais','Ali Al-Bulaihi','Saud Abdulhamid','Mohamed Kanno','Musab Al-Juwayr','Salem Al-Dawsari','Feras Al-Brikan'],5],
 ['URU','Uruguay',82,'uy',['#7ab8e8','#151515','#151515'],W,['Sergio Rochet','Ronald Araújo','José María Giménez','Manuel Ugarte','Federico Valverde','Giorgian de Arrascaeta','Darwin Núñez'],4],
 ['FRA','France',89,'fr',['#1d2f6f',W,'#d0102b'],W,['Mike Maignan','William Saliba','Jules Koundé','Aurélien Tchouaméni','Michael Olise','Ousmane Dembélé','Kylian Mbappé'],6],
 ['SEN','Senegal',80,'sn',[W,W,W],'#00853f',['Édouard Mendy','Kalidou Koulibaly','Moussa Niakhaté','Pape Matar Sarr','Idrissa Gueye','Sadio Mané','Nicolas Jackson'],5],
 ['IRQ','Iraq',70,'iq',['#007a3d','#007a3d','#007a3d'],W,['Jalal Hassan','Rebin Sulaka','Merchas Doski','Amir Al-Ammari','Zidane Iqbal','Ibrahim Bayesh','Aymen Hussein'],6],
 ['NOR','Norway',81,'no',['#ba0c2f',W,'#1f2a5c'],W,['Ørjan Nyland','Kristoffer Ajer','Leo Østigård','Sander Berge','Martin Ødegaard','Antonio Nusa','Erling Haaland'],6],
 ['ARG','Argentina',89,'ar',['#74acdf','#151515',W,'v',W],'#1b2a5a',['Emiliano Martínez','Cristian Romero','Nicolás Otamendi','Enzo Fernández','Alexis Mac Allister','Lionel Messi','Lautaro Martínez'],5],
 ['ALG','Algeria',77,'dz',[W,W,W],'#006233',['Luca Zidane','Ramy Bensebaini','Aïssa Mandi','Ismaël Bennacer','Houssem Aouar','Riyad Mahrez','Mohamed Amoura'],5],
 ['AUT','Austria',79,'at',['#ed2939',W,'#ed2939'],W,['Alexander Schlager','David Alaba','Kevin Danso','Konrad Laimer','Marcel Sabitzer','Christoph Baumgartner','Marko Arnautović'],4],
 ['JOR','Jordan',70,'jo',[W,W,W],'#ce1126',['Yazeed Abulaila','Yazan Al-Arab','Abdallah Nasib','Nizar Al-Rashdan','Noor Al-Rawabdeh','Mousa Al-Tamari','Yazan Al-Naimat'],5],
 ['POR','Portugal',86,'pt',['#c8102e','#0b5e2a','#c8102e'],W,['Diogo Costa','Rúben Dias','Nuno Mendes','Vitinha','Bruno Fernandes','Bernardo Silva','Cristiano Ronaldo'],6],
 ['COD','DR Congo',73,'cd',['#007fff','#007fff','#007fff'],'#ce1021',['Lionel Mpasi','Chancel Mbemba','Arthur Masuaku','Samuel Moutoussamy','Gaël Kakuta','Théo Bongonda','Yoane Wissa'],6],
 ['UZB','Uzbekistan',72,'uz',[W,W,W],'#0099b5',['Utkir Yusupov','Abdukodir Khusanov','Rustamjon Ashurmatov','Otabek Shukurov','Jaloliddin Masharipov','Abbosbek Fayzullaev','Eldor Shomurodov'],6],
 ['COL','Colombia',82,'co',['#fcd116','#003893',W],'#003893',['Camilo Vargas','Dávinson Sánchez','Daniel Muñoz','Richard Ríos','James Rodríguez','Luis Díaz','Jhon Córdoba'],5],
 ['ENG','England',87,'gb-eng',[W,'#1f2a5c',W],'#c8102e',['Jordan Pickford','John Stones','Marc Guéhi','Declan Rice','Jude Bellingham','Bukayo Saka','Harry Kane'],6],
 ['CRO','Croatia',82,'hr',[W,W,'#1f2a5c','c','#d40000'],'#1f2a5c',['Dominik Livaković','Joško Gvardiol','Josip Šutalo','Mateo Kovačić','Luka Modrić','Martin Baturina','Andrej Kramarić'],4],
 ['GHA','Ghana',74,'gh',[W,W,W],'#ce1126',['Lawrence Ati-Zigi','Mohammed Salisu','Alexander Djiku','Thomas Partey','Mohammed Kudus','Jordan Ayew','Antoine Semenyo'],4],
 ['PAN','Panama',73,'pa',['#d21034','#d21034','#d21034'],W,['Orlando Mosquera','Fidel Escobar','Michael Amir Murillo','Adalberto Carrasquilla','Aníbal Godoy','Édgar Bárcenas','José Fajardo'],3],
];
const POS=['GK','DF','DF','MF','MF','MF','FW'];
const ROLE=['gk','def','def','mid','mid','mid','fwd'];
const NUMS=[1,4,5,6,8,7,9];
const ROFF=[0,-1,-2,-1,0,-2,1];
const TM={};
RAW.forEach(([id,name,r,flag,kit,alt,pl,star])=>{
  const t={id,name,r,flag,kit,alt,star};
  t.players=pl.map((full,i)=>{const[nm,sh]=full.split('|');const parts=nm.split(' ');
    const short=sh||(parts.length>1?parts[0][0]+'. '+parts.slice(1).join(' '):nm);
    const isStar=i===star;
    return{name:nm,short,pos:POS[i],role:ROLE[i],i,star:isStar,num:isStar&&i>2?10:NUMS[i],r:Math.min(95,r+(isStar?5:ROFF[i])),key:id+'-'+i}});
  TM[id]=t;
});
const SUBS={MEX:'Raúl Jiménez',RSA:'Percy Tau',KOR:'Lee Jae-sung|Lee Jae-sung',CZE:'Adam Hložek',CAN:'Cyle Larin',BIH:'Rade Krunić',QAT:'Hassan Al-Haydos',SUI:'Ruben Vargas',BRA:'Rodrygo',MAR:'Abde Ezzalzouli',HAI:'Frantzdy Pierrot',SCO:'Lyndon Dykes',USA:'Gio Reyna',PAR:'Ramón Sosa',AUS:'Martin Boyle',TUR:'Barış Alper Yılmaz',GER:'Leroy Sané',CUW:'Kenji Gorré',CIV:'Simon Adingra',ECU:'Gonzalo Plata',NED:'Memphis Depay',JPN:'Takumi Minamino',SWE:'Anthony Elanga',TUN:'Youssef Msakni',BEL:'Leandro Trossard',EGY:'Mostafa Mohamed',IRN:'Sardar Azmoun',NZL:'Matt Garbett',ESP:'Nico Williams',CPV:'Bebé',KSA:'Saleh Al-Shehri',URU:'Rodrigo Bentancur',FRA:'Bradley Barcola',SEN:'Ismaïla Sarr',IRQ:'Mohanad Ali',NOR:'Alexander Sørloth',ARG:'Julián Álvarez',ALG:'Saïd Benrahma',AUT:'Michael Gregoritsch',JOR:'Ali Olwan',POR:'Rafael Leão',COD:'Cédric Bakambu',UZB:'Oston Urunov',COL:'Luis Sinisterra',ENG:'Phil Foden',CRO:'Ivan Perišić',GHA:'Iñaki Williams',PAN:'Ismael Díaz'};
const CAPITAL={MEX:'Mexico City',RSA:'Johannesburg',KOR:'Seoul',CZE:'Prague',CAN:'Toronto',BIH:'Sarajevo',QAT:'Doha',SUI:'Zurich',BRA:'Rio de Janeiro',MAR:'Casablanca',HAI:'Port-au-Prince',SCO:'Glasgow',USA:'Washington, D.C.',PAR:'Asunción',AUS:'Sydney',TUR:'Istanbul',GER:'Frankfurt',CUW:'Willemstad',CIV:'Abidjan',ECU:'Quito',NED:'Amsterdam',JPN:'Tokyo',SWE:'Stockholm',TUN:'Tunis',BEL:'Brussels',EGY:'Cairo',IRN:'Tehran',NZL:'Auckland',ESP:'Madrid',CPV:'Praia',KSA:'Riyadh',URU:'Montevideo',FRA:'Paris',SEN:'Dakar',IRQ:'Baghdad',NOR:'Oslo',ARG:'Buenos Aires',ALG:'Algiers',AUT:'Vienna',JOR:'Amman',POR:'Lisbon',COD:'Kinshasa',UZB:'Tashkent',COL:'Bogotá',ENG:'London',CRO:'Zagreb',GHA:'Accra',PAN:'Panama City'};
Object.values(TM).forEach(t=>{const[nm,sh]=SUBS[t.id].split('|'),parts=nm.split(' ');
  t.sub={name:nm,short:sh||(parts.length>1?parts[0][0]+'. '+parts.slice(1).join(' '):nm),pos:'FW',role:'fwd',i:7,star:false,num:14,r:t.r,key:t.id+'-7'};t.capital=CAPITAL[t.id]});
const GL=Object.keys(GROUPS);
const flagHTML=(id,cls='')=>`<span class="flag ${cls}" style="background-image:url(flags/${TM[id].flag}.svg)" aria-hidden="true"></span>`;

/* =====================================================================
   HELPERS
   ===================================================================== */
const $=s=>document.querySelector(s);
const rnd=(a=0,b=1)=>a+Math.random()*(b-a);
const clamp=(v,a,b)=>v<a?a:v>b?b:v;
const dist=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y);
const rgb=h=>{h=h.replace('#','');if(h.length===3)h=[...h].map(c=>c+c).join('');return[0,2,4].map(i=>parseInt(h.substr(i,2),16))};
const cdist=(a,b)=>{const A=rgb(a),B=rgb(b);return Math.hypot(A[0]-B[0],A[1]-B[1],A[2]-B[2])};
const lum=h=>{const[r,g,b]=rgb(h);return(.299*r+.587*g+.114*b)/255};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function hash(s){let h=2166136261;for(const c of s){h^=c.charCodeAt(0);h=Math.imul(h,16777619)}return h>>>0}
function poisson(l){const L=Math.exp(-l);let k=0,p=1;do{k++;p*=Math.random()}while(p>L);return k-1}
function simScore(a,b){const d=(TM[a].r-TM[b].r)/14;return[poisson(clamp(1.35+d*.55,.25,3.4)),poisson(clamp(1.35-d*.55,.25,3.4))]}
function show(id){document.querySelectorAll('.screen').forEach(s=>s.hidden=s.id!==id);window.scrollTo(0,0)}
function pl(key){const[t,i]=key.split('-');return +i===7?TM[t].sub:TM[t].players[+i]}
const tierText=r=>r>=86?'Favourite':r>=81?'Contender':r>=77?'Dark horse':'Underdog';

/* =====================================================================
   TOURNAMENT
   ===================================================================== */
const MD=[[[0,1],[2,3]],[[0,2],[1,3]],[[0,3],[1,2]]];
const RN={16:'Round of 32',8:'Round of 16',4:'Quarter-final',2:'Semi-final',1:'Final'};
// Round of 32 in bracket order, so neighbouring winners meet in the Round of 16
const R32=[['1E','3:ABCDF'],['1I','3:CDFGH'],['2A','2B'],['1F','2C'],['2K','2L'],['1H','2J'],['1D','3:BEFIJ'],['1G','3:AEHIJ'],
           ['1C','2F'],['2E','2I'],['1A','3:CEFHI'],['1L','3:EHIJK'],['1J','2H'],['2D','2G'],['1B','3:EFGIJ'],['1K','3:DEIJL']];
let S=null, pick='USA', pickMe=5;

/* =====================================================================
   CLOUD SAVES — Google sign-in through Supabase, 3 save slots per account.
   Guests can play, but only signed-in players can save. The anon key is the
   public one; row level security on wcr_saves keeps every save private.
   ===================================================================== */
const SUPABASE_URL='https://ohpicoraznmowcynwnam.supabase.co';
const SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ocGljb3Jhem5tb3djeW53bmFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2Mjg5NjUsImV4cCI6MjA4NzIwNDk2NX0.K-PZInpCaBKpF9b3lx4xMI9p4cB8FPJIbqmOYaDknb0';
const SAVE_SLOTS=3,PENDING_KEY='wcr.pendingRun';
const CLOUD={sb:null,user:null,state:'starting',slots:[],slot:null,timer:0,saving:false,dirty:false,savedAt:0,err:null,confirmDel:null};
const GOOGLE_SVG='<svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.6 5.4 2.7 13.3l7.9 6.2C12.5 13.6 17.8 9.5 24 9.5z"/><path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.8c4.3-4 6.9-9.9 6.9-17.2z"/><path fill="#FBBC05" d="M10.6 28.5c-.5-1.4-.8-2.9-.8-4.5s.3-3.1.8-4.5l-7.9-6.2C1 16.6 0 20.2 0 24s1 7.4 2.7 10.7l7.9-6.2z"/><path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.8c-2.1 1.4-4.8 2.3-8.5 2.3-6.2 0-11.5-4.1-13.4-9.8l-7.9 6.2C6.6 42.6 14.6 48 24 48z"/></svg>';
let pageToastT=0;
function pageToast(t){let el=$('#pageToast');if(!el){el=document.createElement('div');el.id='pageToast';el.className='page-toast';el.setAttribute('role','status');document.body.appendChild(el)}
  el.textContent=t;el.hidden=false;clearTimeout(pageToastT);pageToastT=setTimeout(()=>el.hidden=true,4200)}
const userName=()=>{const m=CLOUD.user&&CLOUD.user.user_metadata||{};return m.full_name||m.name||(CLOUD.user&&CLOUD.user.email)||'you'};
function stageLabel(s){
  if(s.stage==='group'){const g=s.groups.findIndex(x=>x.includes(s.user));return`Group ${GL[g]} · ${s.md} of 3 played`}
  if(s.stage==='ko')return s.rounds[s.rounds.length-1].name;
  if(s.stage==='champ')return'World champions';
  return`Out in the ${s.out==='Group stage'?'group stage':s.out}`}
function summaryLine(s){let w=0,d=0,l=0;s.log.forEach(m=>{const won=m.gf>m.ga||(m.pens&&m.pens[0]>m.pens[1]),lost=m.gf<m.ga||(m.pens&&m.pens[0]<m.pens[1]);won?w++:lost?l++:d++});
  const p=s.ps[s.user+'-'+s.me]||{g:0};return`${s.log.length} played · ${w}W ${d}D ${l}L · ${p.g} goal${p.g===1?'':'s'} for you`}
function ago(iso){const s=(Date.now()-new Date(iso).getTime())/1000;if(s<60)return'just now';if(s<3600)return`${Math.round(s/60)} min ago`;if(s<86400)return`${Math.round(s/3600)} h ago`;
  return new Date(iso).toLocaleDateString(undefined,{day:'numeric',month:'short'})}
// Saves come back from the database (and from sessionStorage after the Google redirect), so treat them
// as untrusted: rebuild a clean copy field by field, and reject anything that doesn't fit the game.
const isInt=(n,lo,hi)=>Number.isInteger(n)&&n>=lo&&n<=hi;
const isCode=c=>typeof c==='string'&&Object.prototype.hasOwnProperty.call(TM,c);
const isStr=(s,max)=>typeof s==='string'&&s.length<=max;
const ROUND_NAMES=Object.values(RN),OUT_NAMES=['Group stage',...ROUND_NAMES];
function cleanSave(s){
  try{
    if(!s||typeof s!=='object'||s.v!==2||!isCode(s.user)||!isInt(s.me,1,6)||!isInt(s.md,0,3))return null;
    if(!['group','ko','out','champ'].includes(s.stage))return null;
    if(!Array.isArray(s.groups)||s.groups.length!==12||!s.groups.every(g=>Array.isArray(g)&&g.length===4&&g.every(isCode)))return null;
    if(!s.groups.some(g=>g.includes(s.user)))return null;
    const pair=p=>Array.isArray(p)&&p.length===2&&p.every(n=>isInt(n,0,99))?[p[0],p[1]]:null;
    const table={};
    for(const id of Object.keys(TM)){const t=s.table&&s.table[id];if(!t||typeof t!=='object')return null;const o={};
      for(const k of['p','w','d','l','gf','ga','pts']){if(!isInt(t[k],0,999))return null;o[k]=t[k]}table[id]=o}
    if(!Array.isArray(s.rounds)||s.rounds.length>5)return null;
    const rounds=[];
    for(const r of s.rounds){if(!r||!ROUND_NAMES.includes(r.name)||!Array.isArray(r.ties)||r.ties.length<1||r.ties.length>16)return null;
      const ties=[];
      for(const t of r.ties){if(!t||!isCode(t.a)||!isCode(t.b))return null;const c={a:t.a,b:t.b};
        if(t.sa!=null||t.sb!=null){if(!isInt(t.sa,0,99)||!isInt(t.sb,0,99))return null;c.sa=t.sa;c.sb=t.sb}
        if(t.pens!=null){const p=pair(t.pens);if(!p)return null;c.pens=p}
        if(t.w!=null){if(t.w!==t.a&&t.w!==t.b)return null;c.w=t.w}
        ties.push(c)}
      rounds.push({name:r.name,ties})}
    if(!Array.isArray(s.log)||s.log.length>8)return null;
    const log=[];
    for(const m of s.log){if(!m||!isStr(m.label,80)||!isCode(m.opp)||!isInt(m.gf,0,99)||!isInt(m.ga,0,99))return null;
      const c={label:m.label,opp:m.opp,gf:m.gf,ga:m.ga,pens:null,st:null,ev:[]};
      if(m.pens!=null){const p=pair(m.pens);if(!p)return null;c.pens=p}
      if(m.st!=null){if(typeof m.st!=='object')return null;const st={};
        for(const k of['poss','shots','ot','passes','pacc','tackles','saves','corners']){const v=m.st[k];if(!Array.isArray(v)||v.length!==2||!v.every(n=>isInt(n,0,9999)))return null;st[k]=[v[0],v[1]]}c.st=st}
      if(m.ev!=null){if(!Array.isArray(m.ev)||m.ev.length>40)return null;
        for(const e of m.ev){if(!e||(e.t!==0&&e.t!==1)||!isInt(e.m,0,130)||!isStr(e.n,60))return null;c.ev.push({t:e.t,m:e.m,n:e.n,og:e.og===true})}}
      log.push(c)}
    if(!s.ps||typeof s.ps!=='object'||Array.isArray(s.ps))return null;
    const ps={};
    for(const[k,v]of Object.entries(s.ps)){if(!/^[A-Z]{3}-[0-7]$/.test(k)||!isCode(k.slice(0,3))||!v||typeof v!=='object')return null;const o={};
      for(const f of['g','a','cs','sv','apps','played']){const n=v[f]??0;if(!isInt(n,0,9999))return null;o[f]=n}ps[k]=o}
    if(s.out!=null&&!OUT_NAMES.includes(s.out))return null;
    if(s.champion!=null&&!isCode(s.champion))return null;
    const out={v:2,user:s.user,me:s.me,groups:s.groups.map(g=>g.slice()),table,md:s.md,stage:s.stage,rounds,log,ps,out:s.out??null,champion:s.champion??null};
    if(s.buff!=null){if(typeof s.buff!=='object')return null;out.buff={};if(s.buff.gym===true)out.buff.gym=true;if(s.buff.dinner===true)out.buff.dinner=true}
    if(s.gift!=null){if(!isStr(s.gift,60))return null;out.gift=s.gift}
    // the next fixture has to exist, or the tournament screen can't open
    if(out.stage==='group'&&out.md>2)return null;
    if(out.stage==='ko'){const r=out.rounds[out.rounds.length-1];if(!r||!r.ties.some(t=>(t.a===out.user||t.b===out.user)&&!t.w))return null}
    if(out.stage==='champ'&&!out.champion)return null;
    if(out.stage==='out'&&!out.champion){const r=out.rounds[out.rounds.length-1];if(!r||r.ties.length!==1||r.ties[0].w)return null}
    if(s.sig!=null){if(typeof s.sig!=='string'||s.sig.length>90000||!/^data:image\/png;base64,[A-Za-z0-9+/=]+$/.test(s.sig))return null;out.sig=s.sig}
    if(s.items!=null){if(!Array.isArray(s.items)||s.items.length>8||!s.items.every(x=>GIVEAWAYS.some(g=>g.id===x)))return null;out.items=[...new Set(s.items)]}
    if(s.watchedFinal===true)out.watchedFinal=true;
    return out;
  }catch(e){return null}
}
const firstFreeSlot=()=>{for(let i=1;i<=SAVE_SLOTS;i++)if(!CLOUD.slots.some(s=>s.slot===i))return i;return null};

function cloudInit(){
  if(location.protocol==='file:'||!window.supabase||!window.supabase.createClient){CLOUD.state='offline';renderAccount();return}
  try{CLOUD.sb=window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY,{auth:{flowType:'pkce',persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,storageKey:'wcr-auth'}})}
  catch(e){CLOUD.state='offline';renderAccount();return}
  CLOUD.sb.auth.onAuthStateChange((ev,session)=>{
    const u=session?session.user:null;if((u&&u.id)===(CLOUD.user&&CLOUD.user.id)&&CLOUD.state!=='starting')return;
    CLOUD.user=u;setTimeout(onUserChanged,0)});   // supabase-js advises not awaiting inside this callback
  setTimeout(()=>{if(CLOUD.state==='starting'){CLOUD.state='guest';renderAccount()}},4000);
}
async function onUserChanged(){
  if(!CLOUD.user){CLOUD.state='guest';CLOUD.slots=[];CLOUD.slot=null;renderAccount();return}
  CLOUD.state='loading';renderAccount();
  await fetchSlots();
  CLOUD.state=CLOUD.err?'error':'ready';
  let pending=null;try{pending=cleanSave(JSON.parse(sessionStorage.getItem(PENDING_KEY)));sessionStorage.removeItem(PENDING_KEY)}catch(e){}
  if(pending&&!CLOUD.err){
    S=pending;pick=S.user;pickMe=S.me;const free=firstFreeSlot();
    if(free){CLOUD.slot=free;await cloudSaveNow();pageToast(`Signed in. Your run is saved to slot ${free}.`)}
    else pageToast('Signed in, but all 3 save slots are full. Delete one from the title screen to save this run.');
    afterLoad();
  }
  renderAccount();
}
async function fetchSlots(){
  const{data,error}=await CLOUD.sb.from('wcr_saves').select('slot,team,player,stage,summary,updated_at').order('slot');
  if(error){CLOUD.err=error.message;CLOUD.slots=[];return}
  CLOUD.err=null;CLOUD.slots=data||[];
}
function signIn(){
  if(!CLOUD.sb){pageToast('Sign-in only works on the hosted game, not from a saved file.');return}
  if(S&&!CLOUD.slot){try{sessionStorage.setItem(PENDING_KEY,JSON.stringify(S))}catch(e){}}  // keep a guest run through the Google redirect
  CLOUD.sb.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.origin+location.pathname}});
}
async function signOut(){if(!CLOUD.sb)return;await CLOUD.sb.auth.signOut();CLOUD.user=null;CLOUD.slot=null;CLOUD.slots=[];CLOUD.state='guest';renderAccount();pageToast('Signed out. Your saves are safe in your account.')}

// Called after every change to the run. Saves to the current slot, a moment later, if signed in.
function save(){
  if(!S)return;
  if(CLOUD.user&&CLOUD.slot){CLOUD.dirty=true;clearTimeout(CLOUD.timer);CLOUD.timer=setTimeout(cloudSaveNow,500)}
  renderSaveChip();
}
async function cloudSaveNow(){
  if(!S||!CLOUD.user||!CLOUD.slot)return;
  if(CLOUD.saving){CLOUD.dirty=true;return}
  CLOUD.dirty=false;CLOUD.saving=true;renderSaveChip();
  const row={user_id:CLOUD.user.id,slot:CLOUD.slot,team:S.user,player:TM[S.user].players[S.me].name,stage:stageLabel(S),summary:summaryLine(S),data:S};
  const{error}=await CLOUD.sb.from('wcr_saves').upsert(row,{onConflict:'user_id,slot'});
  CLOUD.saving=false;
  if(error){CLOUD.err=error.message;renderSaveChip();clearTimeout(CLOUD.timer);CLOUD.timer=setTimeout(cloudSaveNow,8000);return}
  CLOUD.err=null;CLOUD.savedAt=Date.now();
  const meta={slot:row.slot,team:row.team,player:row.player,stage:row.stage,summary:row.summary,updated_at:new Date().toISOString()};
  const i=CLOUD.slots.findIndex(s=>s.slot===row.slot);if(i>=0)CLOUD.slots[i]=meta;else{CLOUD.slots.push(meta);CLOUD.slots.sort((a,b)=>a.slot-b.slot)}
  if(CLOUD.dirty)return cloudSaveNow();
  renderSaveChip();
}
async function loadSlot(slot){
  pageToast(`Loading slot ${slot}…`);
  const{data,error}=await CLOUD.sb.from('wcr_saves').select('data').eq('slot',slot).maybeSingle();
  const s=cleanSave(data&&data.data);
  if(error||!s){pageToast(error?`Couldn't load that save: ${error.message}`:'That save is damaged or from an older version, so it can\'t be opened.');return}
  S=s;CLOUD.slot=slot;pick=S.user;pickMe=S.me;afterLoad();
}
async function deleteSlot(slot){
  const{error}=await CLOUD.sb.from('wcr_saves').delete().eq('slot',slot);
  if(error){pageToast(`Couldn't delete: ${error.message}`);return}
  CLOUD.slots=CLOUD.slots.filter(s=>s.slot!==slot);if(CLOUD.slot===slot)CLOUD.slot=null;CLOUD.confirmDel=null;renderAccount();pageToast(`Slot ${slot} cleared.`);
}
function afterLoad(){if(S.stage==='out'||S.stage==='champ'){renderEnd();show('s-end')}else{renderHub();show('s-hub')}}

function renderAccount(){
  const a=$('#acct'),sp=$('#slotsPanel');if(!a)return;
  if(CLOUD.state==='offline'){a.innerHTML=`<p>Saving isn't available in this copy of the game. Play it at <b>worldcup.schwartzapps.com</b> and sign in with Google to save your runs.</p>`;sp.hidden=true}
  else if(CLOUD.state==='starting'){a.innerHTML='<p>Checking your sign-in…</p>';sp.hidden=true}
  else if(!CLOUD.user){a.innerHTML=`<p><b>Playing as a guest.</b> Sign in with Google to save up to 3 runs and pick them up on any device.</p><button type="button" class="gbtn" id="signInBtn">${GOOGLE_SVG}Sign in with Google</button>`;sp.hidden=true}
  else{
    a.innerHTML=`<span class="av" aria-hidden="true">${esc(userName()[0].toUpperCase())}</span><p>Signed in as <b>${esc(userName())}</b></p><button type="button" class="btn small" id="signOutBtn">Sign out</button>`;
    sp.hidden=false;
    if(CLOUD.state==='loading')sp.innerHTML='<h3>Your saved games</h3><p class="empty">Loading your saves…</p>';
    else if(CLOUD.err&&!CLOUD.slots.length)sp.innerHTML=`<h3>Your saved games</h3><p class="empty">Couldn't reach your saves (${esc(CLOUD.err)}). Check your connection and reload the page.</p>`;
    else{
      const cards=[];for(let i=1;i<=SAVE_SLOTS;i++){const s=CLOUD.slots.find(x=>x.slot===i);
        if(!s){cards.push(`<div class="slot empty"><small>Slot ${i}</small><p class="empty">Empty. Start a tournament below and it saves here.</p></div>`);continue}
        const t=TM[s.team];
        cards.push(`<div class="slot ${CLOUD.slot===i?'current':''}"><small>Slot ${i} · saved ${ago(s.updated_at)}</small>
          <div class="top">${t?flagHTML(s.team):''}<div><b>${esc(t?t.name:s.team)}</b><small>${esc(s.player)}</small></div></div>
          <span class="stage">${esc(s.stage)}</span><small>${esc(s.summary||'')}</small>
          <div class="acts">${CLOUD.confirmDel===i?`<span class="confirm">Delete this save for good?</span><button type="button" class="btn small" data-del-yes="${i}">Delete</button><button type="button" class="btn small" data-del-no="1">Keep it</button>`
            :`<button type="button" class="btn primary small" data-load="${i}">${s.stage==='World champions'||s.stage.startsWith('Out')?'View':'Continue'}</button><button type="button" class="btn small" data-del="${i}">Delete</button>`}</div></div>`)}
      sp.innerHTML=`<h3>Your saved games</h3><div class="slots">${cards.join('')}</div>`;
    }
  }
  renderSaveChip();
}
function renderSaveChip(){
  const h=$('#hubAcct');if(!h)return;
  let chip,btn='';
  if(CLOUD.state==='offline')chip=`<span class="savechip">Not saved · this copy can't save</span>`;
  else if(!CLOUD.user){chip=`<span class="savechip">Guest · this run isn't being saved</span>`;btn=`<button type="button" class="gbtn" data-signin="1">${GOOGLE_SVG}Sign in to save this run</button>`}
  else if(!CLOUD.slot)chip=`<span class="savechip err">Not saved · all 3 slots are full</span>`;
  else if(CLOUD.saving||CLOUD.dirty)chip=`<span class="savechip busy">Saving to slot ${CLOUD.slot}…</span>`;
  else if(CLOUD.err)chip=`<span class="savechip err">Couldn't save · retrying (${esc(CLOUD.err)})</span>`;
  else chip=`<span class="savechip ok">Saved to slot ${CLOUD.slot}${CLOUD.savedAt?` · ${ago(new Date(CLOUD.savedAt).toISOString())}`:''}</span>`;
  h.innerHTML=chip+btn;
}
document.addEventListener('click',e=>{
  const t=e.target.closest('button');if(!t)return;
  if(t.id==='signInBtn'||t.dataset.signin)signIn();
  else if(t.id==='signOutBtn')signOut();
  else if(t.dataset.load)loadSlot(+t.dataset.load);
  else if(t.dataset.del){CLOUD.confirmDel=+t.dataset.del;renderAccount()}
  else if(t.dataset.delYes)deleteSlot(+t.dataset.delYes);
  else if(t.dataset.delNo){CLOUD.confirmDel=null;renderAccount()}
});

function newTournament(user,me){
  const groups=GL.map(g=>GROUPS[g].slice());
  groups.forEach(g=>{const i=g.indexOf(user);if(i>0)[g[0],g[i]]=[g[i],g[0]]});
  const table={};Object.keys(TM).forEach(id=>table[id]={p:0,w:0,d:0,l:0,gf:0,ga:0,pts:0});
  S={v:2,user,me,groups,table,md:0,stage:'group',rounds:[],log:[],ps:{},out:null,champion:null};
  save();
}
const userGroup=()=>S.groups.findIndex(g=>g.includes(S.user));
const meKey=()=>S.user+'-'+S.me;
function record(a,b,x,y){const A=S.table[a],B=S.table[b];A.p++;B.p++;A.gf+=x;A.ga+=y;B.gf+=y;B.ga+=x;
  if(x>y){A.w++;B.l++;A.pts+=3}else if(x<y){B.w++;A.l++;B.pts+=3}else{A.d++;B.d++;A.pts++;B.pts++}}
const cmpTable=(a,b)=>{const A=S.table[a],B=S.table[b];return B.pts-A.pts||(B.gf-B.ga)-(A.gf-A.ga)||B.gf-A.gf||TM[b].r-TM[a].r};
function standings(g){return S.groups[g].slice().sort(cmpTable)}
function thirdsRanked(){return S.groups.map((g,i)=>({id:standings(i)[2],g:GL[i]})).sort((a,b)=>cmpTable(a.id,b.id))}
function stageIndex(){return S.stage==='group'?S.md:3+Math.max(0,S.rounds.length-1)}
function ps(key){return S.ps[key]||(S.ps[key]={g:0,a:0,cs:0,sv:0,apps:0,played:0})}

function nextFixture(){
  if(S.stage==='group'){const gi=userGroup();const j=MD[S.md][0][1];
    return{opp:S.groups[gi][j],label:`Group ${GL[gi]} · Matchday ${S.md+1}`,ko:false}}
  const r=S.rounds[S.rounds.length-1];const t=r.ties.find(t=>t.a===S.user||t.b===S.user);
  return{opp:t.a===S.user?t.b:t.a,label:r.name+(r.ties.length===1?' · New York New Jersey':''),ko:true};
}
function pickWeighted(team,excl){const ps_=TM[team].players;const w=ps_.map((p,i)=>i===excl?0:[0,.5,.5,1.1,1.1,1.1,2.4][i]*(p.star?1.5:1));
  let s=w.reduce((a,b)=>a+b),r=Math.random()*s;for(let i=0;i<w.length;i++){r-=w[i];if(r<=0)return i}return 6}
function genEvents(a,b,ga,gb){const ev=[];
  [[a,ga,0],[b,gb,1]].forEach(([t,n,side])=>{for(let k=0;k<n;k++){const s=pickWeighted(t);const as=Math.random()<.7?pickWeighted(t,s):null;
    ev.push({team:side,min:1+((Math.random()*90)|0),pk:t+'-'+s,name:TM[t].players[s].short,ak:as!=null?t+'-'+as:null,og:false})}});
  return ev.sort((x,y)=>x.min-y.min)}
function creditMatch(a,b,ga,gb,meta){
  const ev=meta?meta.events:genEvents(a,b,ga,gb);
  ev.forEach(e=>{if(!e.og&&e.pk)ps(e.pk).g++;if(e.ak)ps(e.ak).a++});
  const sv=meta?meta.saves:[poisson(clamp(2.4+(TM[b].r-TM[a].r)*.05,.6,5)),poisson(clamp(2.4+(TM[a].r-TM[b].r)*.05,.6,5))];
  ps(a+'-0').sv+=sv[0];ps(b+'-0').sv+=sv[1];
  if(gb===0)ps(a+'-0').cs++;if(ga===0)ps(b+'-0').cs++;
  for(let i=0;i<7;i++){ps(a+'-'+i).apps++;ps(b+'-'+i).apps++}
  return ev;
}
function simMatch(a,b){const[x,y]=simScore(a,b);creditMatch(a,b,x,y,null);return[x,y]}
function simTie(t){const[x,y]=simMatch(t.a,t.b);t.sa=x;t.sb=y;
  if(x!==y){t.w=x>y?t.a:t.b;return}
  const aw=Math.random()<.5+(TM[t.a].r-TM[t.b].r)/80;const p1=3+((Math.random()*3)|0),p2=p1-1-((Math.random()*2)|0);
  t.pens=aw?[p1,p2]:[p2,p1];t.w=aw?t.a:t.b}
function buildR32(){
  const st=S.groups.map((_,i)=>standings(i));
  const at=code=>st[GL.indexOf(code[1])][+code[0]-1];
  const thirds=thirdsRanked().slice(0,8);
  const slots=R32.map((m,i)=>m[1].startsWith('3:')?{i,ok:m[1].slice(2)}:null).filter(Boolean);
  const assign=new Array(R32.length).fill(null),used=new Set();
  const dfs=k=>{if(k===slots.length)return true;
    for(const t of thirds){if(used.has(t.id)||!slots[k].ok.includes(t.g))continue;used.add(t.id);assign[slots[k].i]=t.id;if(dfs(k+1))return true;used.delete(t.id);assign[slots[k].i]=null}
    return false};
  if(!dfs(0)){const left=thirds.filter(t=>!assign.includes(t.id));slots.forEach(s=>{if(!assign[s.i])assign[s.i]=left.shift().id})}
  S.rounds.push({name:RN[16],ties:R32.map(([a,b],i)=>({a:at(a),b:b.startsWith('3:')?assign[i]:at(b)}))});
}
function nextRound(){const prev=S.rounds[S.rounds.length-1].ties;const ties=[];
  for(let i=0;i<prev.length;i+=2)ties.push({a:prev[i].w,b:prev[i+1].w});
  S.rounds.push({name:RN[ties.length],ties})}
function simulateRest(){
  let r=S.rounds[S.rounds.length-1];
  r.ties.forEach(t=>{if(!t.w)simTie(t)});
  while(r.ties.length>1){nextRound();r=S.rounds[S.rounds.length-1];if(r.ties.length>1)r.ties.forEach(simTie)}
  if(r.ties[0].w)S.champion=r.ties[0].w;   // otherwise the final waits until it's watched or skipped
}
const finalPending=()=>!!(S&&S.stage==='out'&&!S.champion);
function decideFinal(){if(!finalPending())return;const t=S.rounds[S.rounds.length-1].ties[0];simTie(t);S.champion=t.w;save()}
function finishUserMatch(gf,ga,pens,meta){
  const fx=nextFixture();
  const ev=creditMatch(S.user,fx.opp,gf,ga,meta);
  ps(meKey()).played++;
  S.log.push({label:fx.label,opp:fx.opp,gf,ga,pens,st:meta?meta.st:null,ev:ev.map(e=>({t:e.team,m:e.min,n:e.name,og:e.og}))});
  if(S.stage==='group'){
    const gi=userGroup();
    S.groups.forEach((g,k)=>MD[S.md].forEach(([i,j])=>{
      if(k===gi&&i===0)record(g[0],g[j],gf,ga);
      else{const[x,y]=simMatch(g[i],g[j]);record(g[i],g[j],x,y)}
    }));
    S.md++;
    if(S.md===3){
      buildR32();
      const inR32=S.rounds[0].ties.some(t=>t.a===S.user||t.b===S.user);
      if(!inR32){S.stage='out';S.out='Group stage';simulateRest()}else S.stage='ko';
    }
  }else{
    const r=S.rounds[S.rounds.length-1];let mine;
    r.ties.forEach(t=>{
      if(t.a===S.user||t.b===S.user){mine=t;const ua=t.a===S.user;t.sa=ua?gf:ga;t.sb=ua?ga:gf;
        if(pens)t.pens=ua?pens:[pens[1],pens[0]];
        const won=gf>ga||(gf===ga&&pens&&pens[0]>pens[1]);t.w=won?S.user:(ua?t.b:t.a)}
      else simTie(t)});
    if(mine.w!==S.user){S.stage='out';S.out=r.name;simulateRest()}
    else if(r.ties.length===1){S.stage='champ';S.champion=S.user}
    else nextRound();
  }
  save();
}
function bootTable(){return Object.entries(S.ps).filter(([k,v])=>v.g>0).sort((x,y)=>y[1].g-x[1].g||y[1].a-x[1].a||x[1].apps-y[1].apps)}
function gloveTable(){return Object.entries(S.ps).filter(([k,v])=>k.endsWith('-0')&&v.apps>0).sort((x,y)=>y[1].cs-x[1].cs||y[1].sv-x[1].sv||x[1].apps-y[1].apps)}

/* =====================================================================
   TITLE SCREEN
   ===================================================================== */
function renderTitle(){
  $('#groupPick').innerHTML=GL.map(g=>`<div class="gcard"><h4>Group ${g}</h4>${GROUPS[g].map(id=>
    `<button type="button" class="tbtn" data-id="${id}" aria-pressed="${id===pick}">${flagHTML(id)}<span class="nm">${TM[id].name}</span><span class="ovr">${TM[id].r}</span></button>`).join('')}</div>`).join('');
  renderRoster();renderAccount();
}
function renderRoster(){
  const t=TM[pick];
  $('#roster').innerHTML=t.players.map(p=>`<button type="button" class="pcard" data-i="${p.i}" aria-pressed="${p.i===pickMe}" ${p.i===0?'disabled':''}>
    ${p.star?'<span class="star">Star</span>':''}<span class="no">${p.num}</span><b>${esc(p.name)}</b><small>${p.pos==='GK'?'Goalkeeper · not playable':({DF:'Defender',MF:'Midfielder',FW:'Forward'})[p.pos]+' · OVR '+p.r}</small></button>`).join('');
  const me=t.players[pickMe];
  $('#pickInfo').innerHTML=`${flagHTML(pick,'lg')}<div style="min-width:0"><b>${t.name}</b><small>You play as ${esc(me.name)} · #${me.num} · ${tierText(t.r)}</small></div>`;
}
$('#groupPick').addEventListener('click',e=>{const b=e.target.closest('.tbtn');if(!b)return;pick=b.dataset.id;pickMe=TM[pick].star;
  document.querySelectorAll('.tbtn').forEach(x=>x.setAttribute('aria-pressed',x.dataset.id===pick));renderRoster()});
$('#roster').addEventListener('click',e=>{const b=e.target.closest('.pcard');if(!b||b.disabled)return;pickMe=+b.dataset.i;renderRoster()});
function beginRun(){newTournament(pick,pickMe);renderHub();show('s-hub')}
$('#startBtn').onclick=()=>{
  const note=$('#startNote');note.hidden=true;
  if(CLOUD.user){const free=firstFreeSlot();
    if(!free){note.hidden=false;note.innerHTML=`All ${SAVE_SLOTS} save slots are full. Delete one above to save this run, or <button type="button" class="btn" id="startUnsaved">Play without saving</button>`;
      $('#startUnsaved').onclick=()=>{note.hidden=true;CLOUD.slot=null;beginRun()};return}
    CLOUD.slot=free}
  else CLOUD.slot=null;
  beginRun()};
async function leaveRun(){if(CLOUD.dirty){clearTimeout(CLOUD.timer);await cloudSaveNow()}S=null;CLOUD.slot=null;CLOUD.confirmDel=null;$('#startNote').hidden=true;renderTitle();show('s-title')}
$('#abandonBtn').onclick=leaveRun;

/* =====================================================================
   HUB
   ===================================================================== */
function renderHub(){
  const u=TM[S.user],gi=userGroup(),me=u.players[S.me];
  renderSaveChip();
  $('#meBox').innerHTML=`${flagHTML(S.user,'lg')}<div><p class="eyebrow">${esc(me.name)} · #${me.num}</p><h2>${u.name}</h2></div>`;
  const steps=['MD1','MD2','MD3','R32','R16','QF','SF','Final'];const cur=stageIndex();
  $('#path').innerHTML=steps.map((s,i)=>`<li class="${i<cur?'done':i===cur?'now':''}">${s}</li>`).join('');
  const fx=nextFixture(),o=TM[fx.opp];
  $('#nextCard').innerHTML=`<p class="eyebrow" style="color:rgba(238,244,234,.82)">Next up · ${fx.label}</p>
    <div class="vs"><div class="side">${flagHTML(S.user,'lg')}<b>${u.name}</b><small>OVR ${u.r}</small></div><span class="v">vs</span>
    <div class="side">${flagHTML(fx.opp,'lg')}<b>${o.name}</b><small>OVR ${o.r} · ${tierText(o.r)}</small></div></div>
    <p style="color:rgba(238,244,234,.85)">Watch out for ${esc(o.players[o.star].name)}. In goal: ${esc(o.players[0].name)}.</p>
    <div class="actions"><button type="button" class="btn primary" id="playBtn">Play the match</button><button type="button" class="btn" id="simBtn">Simulate it</button></div>`;
  $('#playBtn').onclick=()=>startMatch(fx.opp,fx.ko,fx.label);
  $('#simBtn').onclick=()=>{const[a,b]=simScore(S.user,fx.opp);let pens=null;
    if(fx.ko&&a===b){const w=Math.random()<.5+(u.r-o.r)/80;const p1=3+((Math.random()*3)|0),p2=p1-1-((Math.random()*2)|0);pens=w?[p1,p2]:[p2,p1]}
    finishUserMatch(a,b,pens,null);afterMatch()};
  const st=standings(gi);
  $('#groupPanel').innerHTML=`<h3>Group ${GL[gi]}</h3><div class="tbl-wrap"><table><thead><tr><th>#</th><th>Team</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th></tr></thead><tbody>${
    st.map((id,i)=>{const t=S.table[id],gd=t.gf-t.ga;return`<tr class="${id===S.user?'you':''}"><td class="${i<2?'q':i===2?'q3':''}">${i+1}</td><td><span class="tm">${flagHTML(id,'sm')}${TM[id].name}</span></td><td>${t.p}</td><td>${t.w}</td><td>${t.d}</td><td>${t.l}</td><td>${gd>0?'+':''}${gd}</td><td><b>${t.pts}</b></td></tr>`}).join('')
  }</tbody></table></div><p class="note"><i></i>Top two go through. <i class="g"></i>Third place needs to be among the best eight thirds.</p>`;
  const mp=ps(meKey()),bt=bootTable(),rank=bt.findIndex(([k])=>k===meKey());
  $('#myPanel').innerHTML=`<h3>${esc(me.short)}</h3><p class="note">${({DF:'Defender',MF:'Midfielder',FW:'Forward'})[me.pos]} · #${me.num} · OVR ${me.r}</p>
    <div class="mycard"><div><b>${mp.played}</b><small>Played</small></div><div><b>${mp.g}</b><small>Goals</small></div><div><b>${mp.a}</b><small>Assists</small></div><div><b>${rank>=0?rank+1:'–'}</b><small>Boot rank</small></div></div>`;
  $('#bootPanel').innerHTML=`<div class="award-h"><span class="medal"></span><h3>Golden Boot</h3></div>${lbHTML(bt.slice(0,6),v=>`${v.g}<small>${v.a} ast</small>`,'No goals yet. The race starts on matchday 1.')}`;
  $('#glovePanel').innerHTML=`<div class="award-h"><span class="medal"></span><h3>Golden Glove</h3></div>${lbHTML(gloveTable().slice(0,6),v=>`${v.cs} CS<small>${v.sv} saves</small>`,'Keepers start earning clean sheets on matchday 1.')}`;
  $('#resultsPanel').innerHTML=`<h3>Your results</h3>`+(S.log.length?`<div class="results">${S.log.map(resRow).join('')}</div>`:`<p class="empty">No games played yet. First up: ${o.name}.</p>`);
  $('#bracketPanel').hidden=!S.rounds.length;
  if(S.rounds.length)$('#bracketPanel').innerHTML=`<h3>Knockout bracket</h3>${bracketHTML()}`;
  const th=thirdsRanked();
  $('#groupsPanel').innerHTML=`<h3>All groups</h3><div class="groups">${S.groups.map((g,k)=>`<div class="mini"><h4>Group ${GL[k]}</h4>${
    standings(k).map((id,i)=>`<div class="row ${i<2&&S.table[id].p?'q':''} ${id===S.user?'you':''}">${flagHTML(id,'sm')}<span>${TM[id].name}</span><span>${S.table[id].pts}</span></div>`).join('')}</div>`).join('')}
    <div class="mini"><h4>Best third places</h4>${th.map((t,i)=>`<div class="row ${i<8&&S.table[t.id].p?'q':''} ${t.id===S.user?'you':''}">${flagHTML(t.id,'sm')}<span>${i+1}. ${TM[t.id].name} (${t.g})</span><span>${S.table[t.id].pts}</span></div>`).join('')}</div></div>`;
}
function lbHTML(rows,fmt,empty){if(!rows.length)return`<p class="empty">${empty}</p>`;
  return`<div class="lb">${rows.map(([k,v],i)=>{const p=pl(k),t=k.split('-')[0];return`<div class="row ${k===meKey()?'you':''}"><span class="rk">${i+1}</span>${flagHTML(t,'sm')}<span>${esc(p.short)}</span><span class="val">${fmt(v)}</span></div>`}).join('')}</div>`}
function resRow(m){const k=m.gf>m.ga||(m.pens&&m.pens[0]>m.pens[1])?'W':m.gf<m.ga||(m.pens&&m.pens[0]<m.pens[1])?'L':'D';
  const sc=(m.ev||[]).filter(e=>e.t===0).map(e=>`${esc(e.n)}${e.og?' (og)':''} ${e.m}'`).join(', ');
  const st=m.st?`${m.st.poss[0]}% possession · ${m.st.shots[0]} shots, ${m.st.ot[0]} on target`:'Simulated';
  return`<div class="res"><span class="pill ${k}">${k}</span><div style="min-width:0"><div class="lbl">${esc(m.label)}</div><div class="sc">${flagHTML(S.user,'sm')}${esc(S.user)} ${+m.gf}–${+m.ga} ${esc(m.opp)}${flagHTML(m.opp,'sm')}${m.pens?`<span class="lbl">(${m.pens[0]}–${m.pens[1]} pens)</span>`:''}</div><div class="ev">${sc?'Goals: '+sc+' · ':''}${st}</div></div></div>`}
function bracketHTML(){
  const cols=[16,8,4,2,1].map(n=>{const r=S.rounds.find(r=>r.ties.length===n);
    const ties=r?r.ties:[...Array(n)].map(()=>({}));
    return`<div class="round"><h4>${RN[n]}</h4>${ties.map(t=>{
      const mine=t.a===S.user||t.b===S.user;
      const row=(id,s,p)=>id?`<div class="r ${t.w===id?'w':''} ${id===S.user?'you':''}">${flagHTML(id,'sm')}<span>${TM[id].name}</span><span>${s??''}${p!=null?` (${p})`:''}</span></div>`:`<div class="r tbd"><span class="flag sm" style="background:var(--line)"></span><span>To be decided</span><span></span></div>`;
      return`<div class="tie ${mine?'mine':''}">${row(t.a,t.sa,t.pens?.[0])}${row(t.b,t.sb,t.pens?.[1])}</div>`}).join('')}</div>`}).join('');
  return`<div class="bracket-scroll"><div class="bracket">${cols}</div></div>`;
}
function afterMatch(){
  leavePlay();
  if(S.stage==='champ'){startCelebration(S.user);return}
  if(S.stage==='out'){renderEnd();show('s-end')}else{renderHub();show('s-hub')}
}

/* =====================================================================
   END SCREEN
   ===================================================================== */
function renderEnd(){
  const u=TM[S.user],champ=S.stage==='champ',c=TM[S.champion],pend=finalPending(),fin=S.rounds.length?S.rounds[S.rounds.length-1].ties[0]:null;
  const bt=bootTable(),gt=gloveTable();
  const boot=bt[0]?`${pl(bt[0][0]).name} (${TM[bt[0][0].split('-')[0]].name}, ${bt[0][1].g} goals)`:'nobody';
  const glove=gt[0]?`${pl(gt[0][0]).name} (${TM[gt[0][0].split('-')[0]].name}, ${gt[0][1].cs} clean sheets)`:'nobody';
  const mp=ps(meKey());
  $('#endBox').innerHTML=(champ?
   `<p class="eyebrow">${u.name} · World Cup 2026 winners</p><h1 class="gold">Champions</h1>
    <p class="lede">${u.name} won the World Cup. ${S.log.reduce((a,m)=>a+m.gf,0)} goals in ${S.log.length} matches, and ${esc(u.players[S.me].name)} chipped in ${mp.g} goals and ${mp.a} assists.</p>`:
   `<p class="eyebrow">${u.name} · Out in the ${S.out==='Group stage'?'group stage':S.out}</p><h1>Knocked out</h1>
    <p class="lede">${S.out==='Group stage'?`${u.name} didn't make it out of Group ${GL[userGroup()]}.`:`${u.name} went out in the ${S.out}.`} ${pend?`The final, ${TM[fin.a].name} vs ${TM[fin.b].name}, hasn't been played yet.`:`${c.name} went on to lift the trophy${S.watchedFinal?', and you watched it from the pitch':''}.`}</p>`)+
   `<p class="lede" style="font-size:17px;color:var(--mute)">Golden Boot: ${esc(boot)}. Golden Glove: ${esc(glove)}.</p>
    <div class="end-actions">${pend?'<button type="button" class="btn primary" id="watchBtn">Watch the final as a VIP guest</button>':''}${champ?'<button type="button" class="btn primary" id="replayBtn">Watch the trophy lift again</button>':''}<button type="button" class="btn ${champ||pend?'':'primary'}" id="againBtn">Play again as ${u.name}</button><button type="button" class="btn" id="newBtn">${pend?'Back to team select':'Pick another nation'}</button></div>
    ${S.sig||(S.items&&S.items.length)?`<section class="panel"><h3>Your keepsakes</h3>${S.items&&S.items.length?`<p>From the hospitality village: ${S.items.map(id=>esc(GIVEAWAYS.find(g=>g.id===id).name)).join(', ')}.</p>`:''}${S.sig?`<div class="paper small"><img class="sig-img" src="${S.sig}" alt="Your signature"></div>`:''}</section>`:''}
    <div class="grid3"><section class="panel"><h3>${esc(u.players[S.me].short)}</h3><div class="mycard"><div><b>${mp.played}</b><small>Played</small></div><div><b>${mp.g}</b><small>Goals</small></div><div><b>${mp.a}</b><small>Assists</small></div><div><b>${(bt.findIndex(([k])=>k===meKey())+1)||'–'}</b><small>Boot rank</small></div></div></section>
    <section class="panel"><div class="award-h"><span class="medal"></span><h3>Golden Boot</h3></div>${lbHTML(bt.slice(0,6),v=>`${v.g}<small>${v.a} ast</small>`,'No goals.')}</section>
    <section class="panel"><div class="award-h"><span class="medal"></span><h3>Golden Glove</h3></div>${lbHTML(gt.slice(0,6),v=>`${v.cs} CS<small>${v.sv} saves</small>`,'No keepers yet.')}</section></div>
    <section class="panel"><h3>Your run</h3><div class="results">${S.log.map(resRow).join('')}</div></section>
    <section class="panel"><h3>Knockout bracket</h3>${bracketHTML()}</section>`;
  if(champ)$('#replayBtn').onclick=()=>startCelebration(S.user);
  $('#againBtn').onclick=()=>{newTournament(S.user,S.me);renderHub();show('s-hub')};
  $('#newBtn').onclick=()=>{pick=S.user;pickMe=S.me;decideFinal();leaveRun()};
  if(pend)$('#watchBtn').onclick=()=>startExplore('drive:stadium');
}

/* =====================================================================
   AUDIO — synthesised crowd, whistle and ball strikes
   ===================================================================== */
const AU={on:true,ctx:null,crowd:null,base:.1};
function aInit(){
  if(AU.ctx)return;try{
    const C=window.AudioContext||window.webkitAudioContext;if(!C)return;const ctx=new C();AU.ctx=ctx;
    const len=ctx.sampleRate*3,buf=ctx.createBuffer(1,len,ctx.sampleRate),d=buf.getChannelData(0);let last=0;
    for(let i=0;i<len;i++){const w=Math.random()*2-1;last=(last+.02*w)/1.02;d[i]=last*3.2}
    const src=ctx.createBufferSource();src.buffer=buf;src.loop=true;
    const f=ctx.createBiquadFilter();f.type='bandpass';f.frequency.value=650;f.Q.value=.5;
    const g=ctx.createGain();g.gain.value=0;src.connect(f).connect(g).connect(ctx.destination);src.start();AU.crowd=g;
  }catch(e){}
}
function crowd(level,ramp=.6){if(!AU.crowd)return;const t=AU.ctx.currentTime;AU.crowd.gain.cancelScheduledValues(t);AU.crowd.gain.setTargetAtTime(AU.on?level:0,t,ramp/3)}
function roar(){crowd(.55,.25);clearTimeout(AU.rt);AU.rt=setTimeout(()=>crowd(AU.base,2),2800)}
function tone(freq,dur,vol,type='sine',slide){if(!AU.ctx||!AU.on)return;const c=AU.ctx,t=c.currentTime,o=c.createOscillator(),g=c.createGain();
  o.type=type;o.frequency.setValueAtTime(freq,t);if(slide)o.frequency.exponentialRampToValueAtTime(slide,t+dur);
  g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(g).connect(c.destination);o.start(t);o.stop(t+dur)}
function whistle(n=1){if(!AU.ctx||!AU.on)return;for(let i=0;i<n;i++)setTimeout(()=>{const c=AU.ctx,t=c.currentTime,long=n>1&&i===n-1,o=c.createOscillator(),l=c.createOscillator(),lg=c.createGain(),g=c.createGain();
  o.frequency.value=2900;l.frequency.value=32;lg.gain.value=160;l.connect(lg).connect(o.frequency);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(.08,t+.02);
  g.gain.setValueAtTime(.08,t+(long?.7:.28));g.gain.exponentialRampToValueAtTime(.0001,t+(long?.8:.36));o.connect(g).connect(c.destination);o.start(t);l.start(t);o.stop(t+.9);l.stop(t+.9)},i*420)}
const thump=p=>tone(120,.13,.18*(.4+p),'sine',45);
$('#soundBtn').onclick=()=>{AU.on=!AU.on;$('#soundBtn').textContent=AU.on?'Sound on':'Sound off';aInit();crowd(AU.on?AU.base:0,.2)};

/* =====================================================================
   3D WORLD
   ===================================================================== */
const HL=40,HW=26,GWH=3.66,GH=2.44,PEN_D=15,PEN_HW=17,SIX_D=5,SIX_HW=8.5,SPOT=11,CR=8;
const GRAV=9.8;
let R=null;
function canvasTex(w,h,draw,srgb=true){const c=document.createElement('canvas');c.width=w;c.height=h;draw(c.getContext('2d'),w,h);
  const t=new THREE.CanvasTexture(c);if(srgb)t.encoding=THREE.sRGBEncoding;t.anisotropy=Math.min(8,R.renderer.capabilities.getMaxAnisotropy());return t}
function init3D(){
  if(R)return true;
  if(!window.THREE)return false;
  let renderer;
  try{renderer=new THREE.WebGLRenderer({canvas:$('#gl'),antialias:true,powerPreference:'high-performance'})}catch(e){return false}
  renderer.setPixelRatio(Math.min(2,devicePixelRatio||1));
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.outputEncoding=THREE.sRGBEncoding;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.92;
  const scene=new THREE.Scene();scene.background=new THREE.Color(0x070b16);scene.fog=new THREE.Fog(0x070b16,160,360);
  const camera=new THREE.PerspectiveCamera(34,16/9,.3,900);
  R={renderer,scene,camera,mode:null,raf:0,last:0,time:0,w:960,h:540,camPos:new THREE.Vector3(0,22,40),camLook:new THREE.Vector3(),tmpV:new THREE.Vector3(),tmpL:new THREE.Vector3(),meshes:[],extras:[],boards:[]};
  const pm=new THREE.PMREMGenerator(renderer),es=new THREE.Scene();
  const sg=new THREE.SphereGeometry(40,32,16),cols=[],pa=sg.attributes.position;
  for(let i=0;i<pa.count;i++){const y=pa.getY(i)/40;const c=new THREE.Color().setHSL(.6,.35,Math.max(.03,.1+y*.32));cols.push(c.r,c.g,c.b)}
  sg.setAttribute('color',new THREE.Float32BufferAttribute(cols,3));
  es.add(new THREE.Mesh(sg,new THREE.MeshBasicMaterial({side:THREE.BackSide,vertexColors:true})));
  for(let i=0;i<6;i++){const a=i/6*Math.PI*2,pn=new THREE.Mesh(new THREE.PlaneGeometry(14,5),new THREE.MeshBasicMaterial({color:0xffffff,side:THREE.DoubleSide}));pn.position.set(Math.cos(a)*30,16,Math.sin(a)*30);pn.lookAt(0,0,0);es.add(pn)}
  scene.environment=pm.fromScene(es,.02).texture;
  scene.add(new THREE.HemisphereLight(0xc4d8ff,0x1a2a14,.45));
  const sun=new THREE.DirectionalLight(0xfff2de,1.25);sun.position.set(-22,70,38);sun.castShadow=true;
  sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-56,right:56,top:42,bottom:-42,near:10,far:200});
  sun.shadow.camera.updateProjectionMatrix();sun.shadow.bias=-.0004;sun.shadow.normalBias=.03;scene.add(sun);
  const fill=new THREE.DirectionalLight(0xa8c0ff,.5);fill.position.set(30,45,-40);scene.add(fill);
  buildStadium();buildBall();buildMarkers();
  if(window.ResizeObserver)new ResizeObserver(()=>resize3D()).observe($('#stage'));else addEventListener('resize',resize3D);
  resize3D();
  return true;
}
function resize3D(){if(!R)return;const st=$('#stage'),w=st.clientWidth||960,h=st.clientHeight||540;
  R.renderer.setSize(w,h,false);R.camera.aspect=w/h;R.camera.fov=w/h<1?52:34;R.camera.updateProjectionMatrix();R.w=w;R.h=h}

function drawPitch(x,w,h,PW,PH){
  const s=w/PW,X=m=>(m+PW/2)*s,Y=m=>(m+PH/2)*s;
  x.fillStyle='#1f5f2a';x.fillRect(0,0,w,h);
  const n=16,sw=2*HL/n;
  for(let i=-2;i<n+2;i++){x.fillStyle=i%2?'#24692e':'#1d5a27';x.fillRect(X(-HL+i*sw),0,sw*s+1,h)}
  for(let i=0;i<9000;i++){x.fillStyle=Math.random()<.5?'rgba(0,0,0,.06)':'rgba(255,255,255,.035)';x.fillRect(Math.random()*w,Math.random()*h,1+Math.random()*2,1+Math.random()*2)}
  const g=x.createRadialGradient(w/2,h/2,h*.2,w/2,h/2,w*.62);g.addColorStop(0,'rgba(255,255,255,.04)');g.addColorStop(1,'rgba(0,0,0,.18)');x.fillStyle=g;x.fillRect(0,0,w,h);
  x.strokeStyle='rgba(255,255,255,.93)';x.fillStyle='rgba(255,255,255,.93)';x.lineWidth=.13*s;
  x.strokeRect(X(-HL),Y(-HW),2*HL*s,2*HW*s);
  x.beginPath();x.moveTo(X(0),Y(-HW));x.lineTo(X(0),Y(HW));x.stroke();
  x.beginPath();x.arc(X(0),Y(0),CR*s,0,7);x.stroke();
  x.beginPath();x.arc(X(0),Y(0),.25*s,0,7);x.fill();
  for(const sd of[-1,1]){const gx=sd*HL;
    x.strokeRect(Math.min(X(gx),X(gx-sd*PEN_D)),Y(-PEN_HW),PEN_D*s,2*PEN_HW*s);
    x.strokeRect(Math.min(X(gx),X(gx-sd*SIX_D)),Y(-SIX_HW),SIX_D*s,2*SIX_HW*s);
    x.beginPath();x.arc(X(gx-sd*SPOT),Y(0),.22*s,0,7);x.fill();
    const a=Math.acos((PEN_D-SPOT)/CR);x.beginPath();
    if(sd>0)x.arc(X(gx-SPOT),Y(0),CR*s,Math.PI-a,Math.PI+a);else x.arc(X(gx+SPOT),Y(0),CR*s,-a,a);x.stroke();
    for(const sy of[-1,1]){const st=sd>0?(sy>0?Math.PI:Math.PI/2):(sy>0?-Math.PI/2:0);x.beginPath();x.arc(X(gx),Y(sy*HW),1*s,st,st+Math.PI/2);x.stroke()}
  }
}
function crowdDraw(x,w,h,colors){
  x.fillStyle='#10151f';x.fillRect(0,0,w,h);
  const skins=['#f1c7a5','#e0ac85','#c68c63','#a26a45','#6e4429'];
  for(let row=0;row<h;row+=18){x.fillStyle='#1a2130';x.fillRect(0,row+15,w,3);
    for(let c=0;c<w;c+=7+Math.random()*3){if(Math.random()<.07)continue;
      const col=Math.random()<.62?colors[(Math.random()*colors.length)|0]:['#d9d9d9','#3b4a6b','#7a2b2b','#2f5d3a','#c9a227','#222'][(Math.random()*6)|0];
      x.fillStyle=col;x.fillRect(c,row+6+Math.random()*2,6,9);x.fillStyle=skins[(Math.random()*5)|0];x.beginPath();x.arc(c+3,row+4.5+Math.random()*2,2.6,0,7);x.fill()}}
}
function ledDraw(x,w,h,msgs){
  const g=x.createLinearGradient(0,0,0,h);g.addColorStop(0,'#0c1a2c');g.addColorStop(1,'#060c16');x.fillStyle=g;x.fillRect(0,0,w,h);
  x.textBaseline='middle';x.font='800 40px "Big Shoulders Display",Impact,sans-serif';let px=20,i=0;
  while(px<w){const m=msgs[i%msgs.length];x.fillStyle=m[1];x.fillText(m[0],px,h/2+2);px+=x.measureText(m[0]).width+60;i++}
}
function quad(a,b,c,d,uv,mat){const g=new THREE.BufferGeometry();
  g.setAttribute('position',new THREE.Float32BufferAttribute([...a,...b,...c,...d],3));
  g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex([0,1,2,0,2,3]);g.computeVertexNormals();
  const m=new THREE.Mesh(g,mat);R.scene.add(m);return m}
function buildStadium(){
  const sc=R.scene;
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(240,190),new THREE.MeshStandardMaterial({color:0x10301c,roughness:1}));
  ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;sc.add(ground);
  const MG=5,PW=2*HL+2*MG,PH=2*HW+2*MG;
  const pt=canvasTex(2048,Math.round(2048*PH/PW),(x,w,h)=>drawPitch(x,w,h,PW,PH));
  const pitch=new THREE.Mesh(new THREE.PlaneGeometry(PW,PH),new THREE.MeshStandardMaterial({map:pt,roughness:.93}));
  pitch.rotation.x=-Math.PI/2;pitch.position.y=.01;pitch.receiveShadow=true;sc.add(pitch);
  R.crowdTex=canvasTex(1024,512,(x,w,h)=>crowdDraw(x,w,h,['#c00','#fff','#036']));
  R.crowdTex.wrapS=R.crowdTex.wrapT=THREE.RepeatWrapping;
  const crowdMat=new THREE.MeshStandardMaterial({map:R.crowdTex,emissive:0xffffff,emissiveMap:R.crowdTex,emissiveIntensity:.32,roughness:1,side:THREE.DoubleSide});
  const ix=HL+9,iz=HW+8,iy=1.6,ox=HL+42,oz=HW+40,oy=30;
  const IC=[[-ix,-iz],[ix,-iz],[ix,iz],[-ix,iz]],OC=[[-ox,-oz],[ox,-oz],[ox,oz],[-ox,oz]];
  const wallMat=new THREE.MeshStandardMaterial({color:0x0e1626,roughness:.9,side:THREE.DoubleSide});
  const roofMat=new THREE.MeshStandardMaterial({color:0x1b2232,roughness:.8,metalness:.3,side:THREE.DoubleSide});
  const rin=c=>[c[0]*.74,oy+5.5,c[1]*.74];
  for(let k=0;k<4;k++){const n=(k+1)%4;
    const Li=Math.hypot(IC[n][0]-IC[k][0],IC[n][1]-IC[k][1]),Lo=Math.hypot(OC[n][0]-OC[k][0],OC[n][1]-OC[k][1]);
    const sl=Math.hypot(oy-iy,ox-ix),u0=(Lo-Li)/2/14;
    quad([IC[k][0],iy,IC[k][1]],[IC[n][0],iy,IC[n][1]],[OC[n][0],oy,OC[n][1]],[OC[k][0],oy,OC[k][1]],[u0,0,u0+Li/14,0,Lo/14,sl/7,0,sl/7],crowdMat);
    quad([IC[k][0],0,IC[k][1]],[IC[n][0],0,IC[n][1]],[IC[n][0],iy,IC[n][1]],[IC[k][0],iy,IC[k][1]],[0,0,1,0,1,1,0,1],wallMat);
    quad([OC[k][0]*1.03,oy+3,OC[k][1]*1.03],[OC[n][0]*1.03,oy+3,OC[n][1]*1.03],rin(OC[n]),rin(OC[k]),[0,0,1,0,1,1,0,1],roofMat);
    const a=rin(OC[k]),b=rin(OC[n]),len=Math.hypot(b[0]-a[0],b[2]-a[2]);
    const strip=new THREE.Mesh(new THREE.BoxGeometry(len,.4,.4),new THREE.MeshBasicMaterial({color:0xfff6e0}));
    strip.position.set((a[0]+b[0])/2,a[1]-.3,(a[2]+b[2])/2);strip.rotation.y=-Math.atan2(b[2]-a[2],b[0]-a[0]);sc.add(strip);
  }
  R.glowTex=canvasTex(128,128,(x,w,h)=>{const g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,'rgba(255,255,240,1)');g.addColorStop(.25,'rgba(255,245,220,.55)');g.addColorStop(1,'rgba(255,240,210,0)');x.fillStyle=g;x.fillRect(0,0,w,h)});
  for(const sx of[-1,1])for(const sz of[-1,1]){
    const px=sx*(HL+30),pz=sz*(HW+30);
    const panel=new THREE.Mesh(new THREE.BoxGeometry(10,5,1),new THREE.MeshBasicMaterial({color:0xfffbea}));
    panel.position.set(px,oy+16,pz);panel.lookAt(0,0,0);sc.add(panel);
    const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:R.glowTex,blending:THREE.AdditiveBlending,depthWrite:false,transparent:true}));
    sp.scale.set(38,38,1);sp.position.copy(panel.position);sc.add(sp);
    const mast=new THREE.Mesh(new THREE.CylinderGeometry(.5,.8,oy+16,8),roofMat);mast.position.set(px*1.04,(oy+16)/2,pz*1.04);sc.add(mast);
  }
  R.ledCanvas=document.createElement('canvas');R.ledCanvas.width=2048;R.ledCanvas.height=64;
  ledDraw(R.ledCanvas.getContext('2d'),2048,64,[['WORLD CUP RUN','#f0c23b'],['NORTH AMERICA 2026','#ffffff']]);
  [[-30,HW+3.2,30,0],[30,HW+3.2,30,0],[0,-HW-3.2,2*HL+10,0],[HL+4.5,0,2*HW+6,Math.PI/2],[-HL-4.5,0,2*HW+6,Math.PI/2]].forEach(([bx,bz,len,rot])=>{
    const t=new THREE.CanvasTexture(R.ledCanvas);t.encoding=THREE.sRGBEncoding;t.wrapS=THREE.RepeatWrapping;t.repeat.x=len/26;
    const m=new THREE.Mesh(new THREE.BoxGeometry(len,1,.15),new THREE.MeshStandardMaterial({map:t,emissive:0xffffff,emissiveMap:t,emissiveIntensity:.95,roughness:.6}));
    m.position.set(bx,.5,bz);m.rotation.y=rot;m.castShadow=true;sc.add(m);R.boards.push(m)});
  buildGoal(1);buildGoal(-1);buildDugouts();
  for(const sx of[-1,1])for(const sz of[-1,1]){const p=new THREE.Mesh(new THREE.CylinderGeometry(.03,.03,1.6,6),new THREE.MeshStandardMaterial({color:0xffffff}));p.position.set(sx*HL,.8,sz*HW);sc.add(p);
    const f=new THREE.Mesh(new THREE.PlaneGeometry(.5,.35),new THREE.MeshStandardMaterial({color:0xf0c23b,side:THREE.DoubleSide}));f.position.set(sx*HL+.25,1.42,sz*HW);sc.add(f)}
}
function buildDugouts(){
  const sc=R.scene,glass=new THREE.MeshStandardMaterial({color:0x9fc3e8,transparent:true,opacity:.28,roughness:.1,metalness:.2,side:THREE.DoubleSide}),
    frame=new THREE.MeshStandardMaterial({color:0x1b2232,roughness:.6}),seat=new THREE.MeshStandardMaterial({color:0xb3262e,roughness:.6});
  const box=(w,h,d,m,x,y,z)=>{const b=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);b.position.set(x,y,z);b.castShadow=b.receiveShadow=true;sc.add(b);return b};
  for(const bx of[-8,8]){
    box(8,2.3,.15,frame,bx,1.15,HW+4.5);
    box(8,.08,2.6,glass,bx,2.3,HW+3.3);
    for(const s of[-1,1])box(.08,2.3,2.6,glass,bx+s*4,1.15,HW+3.3);
    for(let k=0;k<5;k++)box(.55,.45,.5,seat,bx-3+k*1.5,.225,HW+3.65);
  }
  box(5,3.4,4,frame,0,1.7,HW+6.6);
  const mouth=new THREE.Mesh(new THREE.PlaneGeometry(3.4,2.7),new THREE.MeshBasicMaterial({color:0x020304}));mouth.position.set(0,1.35,HW+4.58);mouth.rotation.y=Math.PI;sc.add(mouth);
  const t=canvasTex(512,96,(x,w,h)=>{x.fillStyle='#0b1310';x.fillRect(0,0,w,h);x.fillStyle='#f0c23b';x.font='800 64px "Big Shoulders Display",Impact,sans-serif';x.textAlign='center';x.textBaseline='middle';x.fillText('PLAYERS',w/2,h/2+2)});
  const sg=new THREE.Mesh(new THREE.PlaneGeometry(3,.56),new THREE.MeshBasicMaterial({map:t}));sg.position.set(0,3.05,HW+4.57);sg.rotation.y=Math.PI;sc.add(sg);
}
function buildGoal(sd){
  const g=new THREE.Group(),white=new THREE.MeshStandardMaterial({color:0xffffff,roughness:.4}),r=.07,dp=2.2;
  const post=h=>{const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,12),white);m.castShadow=true;return m};
  for(const s of[-1,1]){const p=post(GH);p.position.set(0,GH/2,s*GWH);g.add(p);const bp=post(GH);bp.position.set(sd*dp,GH/2,s*GWH);bp.scale.set(.6,1,.6);g.add(bp);
    const tp=post(dp);tp.rotation.z=Math.PI/2;tp.position.set(sd*dp/2,GH,s*GWH);tp.scale.set(.6,1,.6);g.add(tp)}
  const bar=post(2*GWH+r*2);bar.rotation.x=Math.PI/2;bar.position.set(0,GH,0);g.add(bar);
  const netC=document.createElement('canvas');netC.width=netC.height=128;const nx=netC.getContext('2d');
  nx.strokeStyle='rgba(255,255,255,.9)';nx.lineWidth=5;for(let i=0;i<=128;i+=32){nx.beginPath();nx.moveTo(i,0);nx.lineTo(i,128);nx.stroke();nx.beginPath();nx.moveTo(0,i);nx.lineTo(128,i);nx.stroke()}
  const nm=(w,h)=>{const t=new THREE.CanvasTexture(netC);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(w/.32,h/.32);return new THREE.MeshStandardMaterial({map:t,transparent:true,depthWrite:false,side:THREE.DoubleSide,roughness:1})};
  const back=new THREE.Mesh(new THREE.PlaneGeometry(2*GWH,GH),nm(2*GWH,GH));back.rotation.y=Math.PI/2;back.position.set(sd*dp,GH/2,0);g.add(back);
  const top=new THREE.Mesh(new THREE.PlaneGeometry(dp,2*GWH),nm(dp,2*GWH));top.rotation.x=Math.PI/2;top.position.set(sd*dp/2,GH,0);g.add(top);
  for(const s of[-1,1]){const sdm=new THREE.Mesh(new THREE.PlaneGeometry(dp,GH),nm(dp,GH));sdm.position.set(sd*dp/2,GH/2,s*GWH);g.add(sdm)}
  g.position.set(sd*HL,0,0);R.scene.add(g);
}
function buildBall(){
  const tex=canvasTex(512,256,(x,w,h)=>{x.fillStyle='#fafafa';x.fillRect(0,0,w,h);x.fillStyle='#1a1a1a';
    const pts=[[0,90],[0,-90],[0,26.6],[72,26.6],[144,26.6],[216,26.6],[288,26.6],[36,-26.6],[108,-26.6],[180,-26.6],[252,-26.6],[324,-26.6]];
    for(const[lo,la]of pts){const cx=(lo/360)*w,cy=(.5-la/180)*h,rr=22,sx=1/Math.max(.25,Math.cos(la*Math.PI/180));
      for(const off of[-w,0,w]){x.beginPath();for(let k=0;k<5;k++){const a=k/5*Math.PI*2-Math.PI/2;x.lineTo(cx+off+Math.cos(a)*rr*sx,cy+Math.sin(a)*rr)}x.fill()}}
    x.fillRect(0,0,w,10);x.fillRect(0,h-10,w,10)});
  R.ball=new THREE.Mesh(new THREE.SphereGeometry(.3,28,18),new THREE.MeshStandardMaterial({map:tex,roughness:.38}));
  R.ball.castShadow=true;R.scene.add(R.ball);
}
function buildMarkers(){
  const mat=new THREE.MeshBasicMaterial({color:0xf0c23b,transparent:true,opacity:.95,depthWrite:false});
  const ring=new THREE.Mesh(new THREE.RingGeometry(.95,1.18,40),mat);ring.rotation.x=-Math.PI/2;
  const arrow=new THREE.Mesh(new THREE.CircleGeometry(.45,3),mat);arrow.rotation.x=-Math.PI/2;arrow.rotation.z=-Math.PI/2;arrow.position.set(0,0,1.6);
  const ag=new THREE.Group();ag.add(arrow);
  R.meRing=new THREE.Group();R.meRing.add(ring,ag);R.meArrow=ag;R.scene.add(R.meRing);
  R.passRing=new THREE.Mesh(new THREE.RingGeometry(.85,1,32),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.75,depthWrite:false}));
  R.passRing.rotation.x=-Math.PI/2;R.scene.add(R.passRing);
  const ret=new THREE.Group(),rm=new THREE.MeshBasicMaterial({color:0xf0c23b,depthTest:false,transparent:true});
  ret.add(new THREE.Mesh(new THREE.RingGeometry(.26,.34,32),rm),new THREE.Mesh(new THREE.PlaneGeometry(.9,.06),rm),new THREE.Mesh(new THREE.PlaneGeometry(.06,.9),rm));
  ret.rotation.y=-Math.PI/2;ret.children.forEach(c=>c.renderOrder=10);R.reticle=ret;ret.visible=false;R.scene.add(ret);
  // ball flight helpers: a fading trail behind it, dotted predicted path ahead, and a ring where it will land
  R.trail=new THREE.InstancedMesh(new THREE.SphereGeometry(.16,10,8),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.45,depthWrite:false}),18);
  R.path=new THREE.InstancedMesh(new THREE.SphereGeometry(.1,8,6),new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.9,depthWrite:false}),40);
  R.pathShadow=new THREE.InstancedMesh(new THREE.CircleGeometry(.09,10),new THREE.MeshBasicMaterial({color:0x000000,transparent:true,opacity:.28,depthWrite:false}),40);
  R.land=new THREE.Group();
  const lm=new THREE.MeshBasicMaterial({color:0xffffff,transparent:true,opacity:.9,depthWrite:false,side:THREE.DoubleSide});
  // landing marker: four rotating arc segments around a dot, so it reads differently from your own solid ring
  R.landSpin=new THREE.Group();
  for(let k=0;k<4;k++){const seg=new THREE.Mesh(new THREE.RingGeometry(1.3,1.55,16,1,k*Math.PI/2+.25,Math.PI/2-.5),lm);seg.rotation.x=-Math.PI/2;R.landSpin.add(seg)}
  const ld=new THREE.Mesh(new THREE.CircleGeometry(.22,16),lm);ld.rotation.x=-Math.PI/2;R.land.add(R.landSpin,ld);R.landMat=lm;
  [R.trail,R.path,R.pathShadow].forEach(m=>{m.frustumCulled=false;m.count=0;R.scene.add(m)});R.scene.add(R.land);R.land.visible=false;
  R.hist=[];R.histT=0;
}
function predictBall(){
  const b=M.ball,dt=1/60,pts=[];let x=b.x,y=b.y,z=b.z,vx=b.vx,vy=b.vy,vz=b.vz,land=null;const air=z>.25||vz>.5;
  for(let i=0;i<150;i++){
    vz-=GRAV*dt;x+=vx*dt;y+=vy*dt;z+=vz*dt;
    if(z<=0){z=0;if(air&&!land)land={x,y};if(vz<-1.5){vz=-vz*.45;vx*=.7;vy*=.7}else vz=0}
    const g=z<.05&&vz===0,f=Math.exp(-(g?.9:.05)*dt);vx*=f;vy*=f;
    if(i%3===2)pts.push([x,z,y]);
    if(Math.abs(x)>HL+1.5||Math.abs(y)>HW+1)break;
    if(g&&Math.hypot(vx,vy)<1.2)break;
  }
  return{pts,land:land||{x,y}};
}
function updateBallViz(dt){
  const b=M.ball,dm=R.tmpObj||(R.tmpObj=new THREE.Object3D()),sp=Math.hypot(b.vx,b.vy);
  // trail: remember the last half second of positions
  R.histT+=dt;if(R.histT>.03){R.histT=0;R.hist.unshift([b.x,b.z+.3,b.y]);if(R.hist.length>18)R.hist.pop()}
  const showTrail=!b.owner&&sp>3&&M.phase==='play';
  if(!showTrail&&R.hist.length>0&&b.owner)R.hist.length=0;
  R.trail.count=showTrail?R.hist.length:0;
  for(let i=0;i<R.trail.count;i++){const h=R.hist[i],s=1-i/R.hist.length;dm.position.set(h[0],h[1],h[2]);dm.rotation.set(0,0,0);dm.scale.setScalar(.25+s*.75);dm.updateMatrix();R.trail.setMatrixAt(i,dm.matrix)}
  R.trail.instanceMatrix.needsUpdate=true;
  // prediction: where it is going and where it comes down
  const show=!b.owner&&(sp>2||b.z>.3)&&(M.phase==='play'||M.phase==='restart');
  if(!show){R.path.count=R.pathShadow.count=0;R.land.visible=false;return}
  const{pts,land}=predictBall();
  const col=b.target===M.me?0xf0c23b:b.lastTeam===0?0xffffff:0xff6a4a;
  R.path.material.color.setHex(col);R.landMat.color.setHex(col);
  R.path.count=R.pathShadow.count=Math.min(40,pts.length);
  for(let i=0;i<R.path.count;i++){const p=pts[i];dm.position.set(p[0],p[1]+.3,p[2]);dm.rotation.set(0,0,0);dm.scale.setScalar(1-i/60);dm.updateMatrix();R.path.setMatrixAt(i,dm.matrix);
    dm.position.set(p[0],.04,p[2]);dm.rotation.set(-Math.PI/2,0,0);dm.updateMatrix();R.pathShadow.setMatrixAt(i,dm.matrix)}
  R.path.instanceMatrix.needsUpdate=R.pathShadow.instanceMatrix.needsUpdate=true;
  R.land.visible=true;R.land.position.set(land.x,.05,land.y);const pulse=1+Math.sin(R.time*8)*.1;R.landSpin.scale.set(pulse,1,pulse);R.landSpin.rotation.y=R.time*2.5;
}
function hideBallViz(){if(!R.trail)return;R.trail.count=R.path.count=R.pathShadow.count=0;R.land.visible=false;R.hist.length=0;$('#ballArrow').hidden=true}
function updateBallArrow(){
  const b=M.ball,el=$('#ballArrow');
  const v=R.tmpL.set(b.x,b.z+.3,b.y).project(R.camera);let sx=v.x,sy=v.y;const behind=v.z>1;if(behind){sx=-sx;sy=-sy}
  if(!behind&&Math.abs(sx)<.96&&Math.abs(sy)<.92){el.hidden=true;return}
  const m=Math.max(Math.abs(sx)/.9,Math.abs(sy)/.8)||1,ex=sx/m,ey=sy/m;
  el.hidden=false;el.style.transform=`translate(${((ex+1)/2*R.w).toFixed(1)}px,${((1-ey)/2*R.h).toFixed(1)}px) translate(-50%,-50%)`;
  $('#ballArrowTip').style.transform=`rotate(${Math.atan2(-sy,sx)}rad)`;
  $('#ballArrowDist').textContent=Math.round(Math.hypot(b.x-M.me.x,b.y-M.me.y))+'m';
}
function setStadiumFor(a,b,text){
  const cols=[...TM[a].kit.slice(0,2),...TM[b].kit.slice(0,2),'#f0c23b'];
  const c=R.crowdTex.image;crowdDraw(c.getContext('2d'),c.width,c.height,cols);R.crowdTex.needsUpdate=true;
  ledDraw(R.ledCanvas.getContext('2d'),2048,64,[[text,'#f0c23b'],['NORTH AMERICA 2026','#ffffff'],[TM[a].name.toUpperCase(),lum(TM[a].kit[0])<.25?'#ffffff':TM[a].kit[0]],[TM[b].name.toUpperCase(),'#9fd3ff']]);
  R.boards.forEach(m=>{m.material.map.needsUpdate=true});
}

/* ---------- players ---------- */
const SKINS=['#f3cfb0','#e7b48f','#cf9670','#a9714b','#87553a','#5f3a26'];
const HAIRS=['#16100a','#2b1a0e','#4a2e17','#7a5532','#c9a36a','#0d0d0d'];
function kitTexture(shirt,pattern,pcol,num){
  return canvasTex(256,128,(x,w,h)=>{x.fillStyle=shirt;x.fillRect(0,0,w,h);
    if(pattern==='v'){x.fillStyle=pcol;for(let i=0;i<w;i+=40)x.fillRect(i+12,0,16,h)}
    if(pattern==='c'){x.fillStyle=pcol;for(let i=0;i<w;i+=20)for(let j=0;j<h;j+=20)if(((i+j)/20)%2===0)x.fillRect(i,j,20,20)}
    x.fillStyle='rgba(0,0,0,.18)';x.fillRect(0,0,w,7);
    const nc=lum(shirt)>.6&&pattern!=='c'?'#141414':'#ffffff';
    x.font='900 62px "Big Shoulders Display",Impact,sans-serif';x.textAlign='center';x.textBaseline='middle';
    x.lineWidth=6;x.strokeStyle=nc==='#ffffff'?'rgba(0,0,0,.6)':'rgba(255,255,255,.7)';x.strokeText(num,128,66);x.fillStyle=nc;x.fillText(num,128,66);
    x.font='800 26px "Big Shoulders Display",Impact,sans-serif';x.lineWidth=4;x.strokeText(num,234,52);x.fillText(num,234,52);});
}
function makePlayerMesh(kit,num,seed,gk,opt={}){
  const rs=n=>((hash(seed+n)%1000)/1000);
  const skin=SKINS[(rs('s')*SKINS.length)|0],hair=HAIRS[(rs('h')*HAIRS.length)|0];
  const root=new THREE.Group(),body=new THREE.Group();root.add(body);
  const mat=c=>new THREE.MeshStandardMaterial({color:c,roughness:.72});
  const shirtM=new THREE.MeshStandardMaterial({map:kitTexture(kit[0],kit[3],kit[4],num),roughness:.78});
  const sleeveM=mat(kit[0]),skinM=mat(skin),shortsM=mat(kit[1]),sockM=mat(kit[2]),bootM=mat(rs('b')<.5?'#111111':['#f0f0f0','#ff4f1f','#36c7ff','#c6f24a'][(rs('c')*4)|0]);
  const add=(geo,m,x,y,z,par)=>{const me=new THREE.Mesh(geo,m);me.position.set(x,y,z);me.castShadow=true;(par||body).add(me);return me};
  add(new THREE.CylinderGeometry(.25,.2,.62,18),shirtM,0,1.17,0);
  add(new THREE.CylinderGeometry(.182,.215,.27,14),shortsM,0,.8,0);
  const hips=[],shs=[];
  for(const s of[-1,1]){
    const hip=new THREE.Group();hip.position.set(s*.105,.8,0);body.add(hip);hips.push(hip);
    add(new THREE.CylinderGeometry(.082,.068,.38,10),opt.trousers?mat(opt.trousers):skinM,0,-.19,0,hip);
    add(new THREE.CylinderGeometry(.07,.056,.36,10),sockM,0,-.56,0,hip);
    add(new THREE.BoxGeometry(.11,.08,.26),bootM,0,-.76,.05,hip);
    const sh=new THREE.Group();sh.position.set(s*.31,1.42,0);sh.rotation.z=s*.1;body.add(sh);shs.push(sh);
    add(new THREE.CylinderGeometry(.078,.068,.22,10),sleeveM,0,-.1,0,sh);
    add(new THREE.CylinderGeometry(.058,.05,.34,10),skinM,0,-.38,0,sh);
    add(new THREE.SphereGeometry(gk?.088:.06,10,8),gk?mat('#f4f4f4'):skinM,0,-.58,0,sh);
  }
  add(new THREE.CylinderGeometry(.07,.08,.12,10),skinM,0,1.52,0);
  add(new THREE.SphereGeometry(.135,18,14),skinM,0,1.665,0);
  const hm=add(new THREE.SphereGeometry(.142,18,10,0,Math.PI*2,0,Math.PI*.55),mat(hair),0,1.675,-.012);hm.rotation.x=-.15;
  root.scale.setScalar(opt.scale||1.32);
  (opt.scene||R.scene).add(root);
  return{root,body,hips,shs,phase:rs('p')*6};
}
function lerpAngle(a,b,t){let d=b-a;while(d>Math.PI)d-=Math.PI*2;while(d<-Math.PI)d+=Math.PI*2;return a+d*t}
function animPlayer(p,dt,opts={}){
  const m=p.mesh;if(!m)return;
  m.root.position.set(p.x,opts.y||0,p.y);
  m.root.rotation.y=lerpAngle(m.root.rotation.y,Math.atan2(p.fx,p.fy),1-Math.exp(-dt*14));
  const sp=Math.hypot(p.vx,p.vy);
  m.phase+=dt*(3+sp*1.25);
  const a=Math.min(1,sp/6.5)*.9,sw=Math.sin(m.phase)*a;
  let hl=sw,hr=-sw,al=-sw*.8,ar=sw*.8,bx=0,bz=0,by=Math.abs(Math.cos(m.phase))*.05*a;
  if(p.kickT>0){const k=1-p.kickT/.28;hr=k<.4?.9*(k/.4):.9-2.3*((k-.4)/.6);hl=-.15;al=.4;ar=-.6}
  if(p.slide>0){bx=-1.15;by=-.45;hl=-1.3;hr=-1;al=-.6;ar=-.6}
  if(p.dive){const loc=-Math.sin(m.root.rotation.y)*p.dive.side;bz=-(Math.sign(loc)||1)*1.25;by=.45;al=ar=-2.9}
  if(p.celebrate){al=ar=-2.8+Math.sin(R.time*9)*.25;by=Math.abs(Math.sin(R.time*7))*.25}
  if(opts.arms!=null){al=ar=opts.arms}
  if(opts.sit){hl=hr=-1.45;bx=0;by=-.45;al=ar=.3}
  if(opts.wave){ar=-2.7+Math.sin(R.time*7+m.phase)*.35;if(opts.wave===2)al=-2.6+Math.cos(R.time*6+m.phase)*.35}
  const k=1-Math.exp(-dt*18);
  m.hips[0].rotation.x+=(hl-m.hips[0].rotation.x)*k;m.hips[1].rotation.x+=(hr-m.hips[1].rotation.x)*k;
  m.shs[0].rotation.x+=(al-m.shs[0].rotation.x)*k;m.shs[1].rotation.x+=(ar-m.shs[1].rotation.x)*k;
  m.body.rotation.x+=(bx-m.body.rotation.x)*k;m.body.rotation.z+=(bz-m.body.rotation.z)*k;m.body.position.y+=(by-m.body.position.y)*k;
}
function disposeTree(o){o.traverse(c=>{if(c.geometry)c.geometry.dispose();if(c.material){if(c.material.map)c.material.map.dispose();c.material.dispose()}})}
function clearPlayers(){R.meshes.forEach(m=>{R.scene.remove(m.root);disposeTree(m.root)});R.meshes=[]}
function clearExtras(){R.extras.forEach(o=>{R.scene.remove(o);disposeTree(o)});R.extras=[]}

/* ---------- main render loop ---------- */
function frame(t){
  R.raf=requestAnimationFrame(frame);
  const dt=Math.min(.05,(t-R.last)/1000||0);R.last=t;R.time+=dt;
  if(R.mode==='match')matchFrame(dt);else if(R.mode==='pens')pensFrame(dt);else if(R.mode==='celebrate')celebFrame(dt);else if(R.mode==='explore')exploreFrame(dt);
  R.boards.forEach(b=>{b.material.map.offset.x+=dt*.04});
  R.renderer.render(R.mode==='explore'&&EX&&!EX.inMain?EX.scene:R.scene,R.camera);
}
function startLoop(){if(!R.raf){R.last=performance.now();R.raf=requestAnimationFrame(frame)}}
function stopLoop(){if(R&&R.raf){cancelAnimationFrame(R.raf);R.raf=0}}
function enterPlay(mode){
  show('s-play');
  if(!init3D()){if(!$('.nogl'))$('#stage').insertAdjacentHTML('beforeend','<div class="nogl"><p>This browser could not start 3D graphics, so matches can\'t be played here. Go back and use "Simulate it" instead.</p></div>');return false}
  resize3D();R.mode=mode;
  $('#overlay').hidden=true;$('#banner').hidden=true;$('#pensHud').hidden=mode!=='pens';$('#celeb').hidden=mode!=='celebrate';
  $('#hud').hidden=mode!=='match';$('#pauseBtn').hidden=mode!=='match';
  $('#exHud').hidden=mode!=='explore';$('#skipBtn').hidden=mode!=='explore';$('#camBtn').hidden=mode!=='match';$('#subBtn').hidden=mode!=='match';$('#ffBtn').hidden=true;$('#cut').hidden=true;
  $('#bPass').innerHTML=mode==='explore'?'Use':'Pass<small>or call</small>';
  $('#touch').hidden=!(touchMode&&mode!=='celebrate');$('#stage').classList.toggle('touch-on',touchMode);
  hideBallViz();R.reticle.visible=false;R.meRing.visible=mode==='match';R.passRing.visible=false;R.ball.visible=mode!=='celebrate';
  aInit();if(AU.ctx&&AU.ctx.state==='suspended')AU.ctx.resume();crowd(AU.base,1);
  startLoop();return true;
}
function leavePlay(){if(R){stopLoop();R.mode=null}crowd(0,.5);keys.shoot=0}

/* =====================================================================
   MATCH ENGINE (metres; team 0 attacks +x)
   ===================================================================== */
const HOME=[[-37,0],[-24,-9],[-24,9],[-9,-14],[-11,0],[-9,14],[5,0]];
const KICKPOS=[[-37,0],[-20,-9],[-20,9],[-9,-16],[-10,0],[-9,16],[-10,2]];
const MPS=45/60;  // match minutes per real second: each half lasts one minute
let M=null;
const keys={u:0,d:0,l:0,r:0,shoot:0,sprint:0};
const joy={x:0,y:0,id:null,ox:0,oy:0};

function teamKits(a,b){
  const A=TM[a].kit.slice();let B=TM[b].kit.slice();
  if(cdist(A[0],B[0])<150){const alt=TM[b].alt;B=[alt,alt===W?W:alt,alt];
    if(cdist(A[0],alt)<150){const c=lum(A[0])>.5?'#1a1a1a':W;B=[c,c,c]}}
  return[A,B];
}
function startMatch(opp,ko,label){
  if(!enterPlay('match'))return;
  const a=TM[S.user],b=TM[opp],kits=teamKits(a.id,b.id),boost=1+stageIndex()*.01;
  clearPlayers();clearExtras();
  M=newMatchState([a.id,b.id],kits,ko,label);
  buildSquads(kits,boost);
  M.me=M.players.find(p=>p.team===0&&p.i===S.me);
  M.gks=[M.players.find(p=>p.team===0&&p.i===0),M.players.find(p=>p.team===1&&p.i===0)];
  M.buff=S.buff||{};S.buff={};M.speed=1;M.subbed=false;M.subPending=0;M.walkOff=null;
  buildBenches(kits);
  $('#subBtn').hidden=false;$('#ffBtn').hidden=true;$('#ffBtn').textContent='Fast-forward';
  setStadiumFor(a.id,b.id,label.toUpperCase());
  $('#bug').innerHTML=`<div class="t">${flagHTML(a.id)}${a.id}</div><div class="sc"><span id="gA">0</span>–<span id="gB">0</span></div><div class="t">${b.id}${flagHTML(b.id)}</div><div class="clk"><span id="clk">00:00</span><small id="half">1H</small></div>`;
  $('#mecard').innerHTML=`<b>${esc(M.me.short)}</b><small>#${M.me.num} · ${POS[M.me.i]} · You</small><div class="bar"><i id="stam"></i></div>`;
  $('#meTagName').textContent=M.me.short;
  kickoff(0);snapCam();whistle(1);
}
function newMatchState(ids,kits,ko,label){
  return{ids,kits,ko,label,score:[0,0],clock:0,half:1,phase:'kickoff',phaseT:1,players:[],t:0,charge:0,restart:null,events:[],
     st:{poss:[0,0],shots:[0,0],ot:[0,0],passes:[0,0],passOk:[0,0],tackles:[0,0],saves:[0,0],corners:[0,0]},
     ball:{x:0,y:0,z:0,vx:0,vy:0,vz:0,owner:null,kicker:null,lockT:0,lastTeam:0,lastTouch:null,gkTried:false,target:null,shot:null,passFrom:null,passTeam:null},
     paused:false,press:{shoot:false,pass:false},lastConcede:1,ch:[null,null],marker:null};
}
function buildSquads(kits,boost){
  for(let t=0;t<2;t++){const dir=t?-1:1,team=TM[M.ids[t]];
    team.players.forEach((d,i)=>{const p={team:t,dir,role:d.role,i,name:d.name,short:d.short,num:d.num,r:d.r,key:d.key,
      hx:t?-HOME[i][0]:HOME[i][0],hy:HOME[i][1],x:0,y:0,vx:0,vy:0,tvx:0,tvy:0,fx:dir,fy:0,
      spd:(5.3+(d.r-70)*.085)*(t?boost:1),stun:0,slide:0,slideCd:0,immune:0,tackleT:.2,tackleCd:0,think:0,hold:0,kickT:0,dive:null,stamina:1,call:0,saves:0};
      const gkKit=t?['#ff6fb5','#151515','#ff6fb5']:['#c6f24a','#151515','#c6f24a'];
      p.mesh=makePlayerMesh(d.role==='gk'?gkKit:kits[t],d.num,d.key,d.role==='gk');R.meshes.push(p.mesh);M.players.push(p)})}
}
function buildBenches(kits){
  M.bench=[];
  for(let t=0;t<2;t++){const bx=t?8:-8;
    for(let k=0;k<3;k++){const f={x:bx-3+k*1.5,y:HW+3.5,vx:0,vy:0,fx:0,fy:-1,kickT:0,slide:0,dive:null,sit:true};f.mesh=makePlayerMesh(kits[t],12+k+(t?3:0),M.ids[t]+'-bench'+k,false);R.meshes.push(f.mesh);M.bench.push(f)}
    const c={x:bx,y:HW+1.7,vx:0,vy:0,fx:0,fy:-1,kickT:0,slide:0,dive:null,coach:true,team:t};c.mesh=makePlayerMesh(['#1f2533','#1f2533','#111111'],'',M.ids[t]+'-coach',false,{trousers:'#1f2533'});R.meshes.push(c.mesh);M.bench.push(c)}
}
function kickoff(team){
  for(const p of M.players){const[x,y]=KICKPOS[p.i];p.x=p.team?-x:x;p.y=y;p.vx=p.vy=p.tvx=p.tvy=0;p.fx=p.dir;p.fy=0;p.stun=p.slide=0;p.dive=null;p.hold=0;p.kickT=0;p.celebrate=false}
  const f=M.players.find(p=>p.team===team&&p.i===6);f.x=-f.dir*.6;f.y=0;f.immune=1.6;
  const m=M.players.find(p=>p.team===team&&p.i===4);m.x=-m.dir*3;m.y=5;
  Object.assign(M.ball,{x:0,y:0,z:0,vx:0,vy:0,vz:0,owner:f,kicker:null,lockT:0,lastTeam:team,lastTouch:f,gkTried:false,target:null,shot:null,passFrom:null,passTeam:null});
  M.restart=null;M.phase='kickoff';M.phaseT=1.2;M.scorer=null;M.charge=0;M.fpYaw=0;
}
function kick(p,tx,ty,v,vz=0){const b=M.ball,dx=tx-b.x,dy=ty-b.y,d=Math.hypot(dx,dy)||1;
  b.owner=null;b.vx=dx/d*v;b.vy=dy/d*v;b.vz=vz;b.z=Math.max(b.z,.05);b.kicker=p;b.lockT=.25;b.lastTeam=p.team;b.lastTouch=p;b.gkTried=false;b.target=null;b.shot=null;b.passTeam=null;
  p.immune=0;p.kickT=.28;thump(Math.min(1,v/28))}
function loftTo(p,tx,ty){const b=M.ball,d=Math.hypot(tx-b.x,ty-b.y),t=1+d/26;kick(p,tx,ty,d/t,.5*GRAV*t)}
function passTo(p,q,human){const b=M.ball,lead=human?.55:.4,tx=q.x+q.vx*lead,ty=q.y+q.vy*lead,d=Math.hypot(tx-b.x,ty-b.y);
  if(d>14&&laneOpen(p,{x:tx,y:ty})<1.1)loftTo(p,tx,ty);else kick(p,tx,ty,clamp(d*.9+5,8,28));
  b.target=q;b.passFrom=p;b.passTeam=p.team;M.st.passes[p.team]++}
function shootBy(p,power,human){
  const b=M.ball,gx=p.dir*(HL+.6),skill=clamp((p.r-62)/30,0,1);let ay,az;
  if(human){ay=clamp(p.fy*3.0,-3.2,3.2);az=.25+Math.pow(power,1.5)*2.75}
  else{power=rnd(.35,.85);ay=(Math.random()<.5?-1:1)*rnd(.6,3);az=.3+power*1.7}
  const d=Math.hypot(gx-b.x,ay-b.y),err=(.25+d*.035)*(1.3-skill)*(human?.8:1);
  ay+=rnd(-1,1)*err;az=Math.max(.1,az+rnd(-.4,.4)*err);
  const v=16+power*13+(p.r-80)*.1,t=d/v;
  kick(p,gx,ay,v,Math.max(0,(az+.5*GRAV*t*t)/t));
  b.shot={team:p.team,by:p};M.st.shots[p.team]++;
}
function header(p){const b=M.ball,gx=p.dir*HL,z0=b.z;
  if(Math.hypot(gx-p.x,p.y)<20){const ay=rnd(-3,3),d=Math.hypot(gx-b.x,ay-b.y),v=14,t=d/v;
    kick(p,gx+p.dir,ay,v,(rnd(.3,1.8)-z0+.5*GRAV*t*t)/t);b.shot={team:p.team,by:p};M.st.shots[p.team]++}
  else kick(p,p.x+p.dir*16,p.y+rnd(-8,8),13,4);
  b.z=Math.max(z0,1)}
function laneOpen(p,q){let m=1e9;const dx=q.x-p.x,dy=q.y-p.y,L2=dx*dx+dy*dy||1;
  for(const o of M.players){if(o.team===p.team)continue;const t=clamp(((o.x-p.x)*dx+(o.y-p.y)*dy)/L2,0,1);
    const d=Math.hypot(p.x+dx*t-o.x,p.y+dy*t-o.y);if(d<m)m=d}return m}
function bestPass(p,human){let best=null,bs=-1e9;
  for(const q of M.players){if(q.team!==p.team||q===p||(q.role==='gk'&&p.role!=='def'))continue;
    const dx=q.x-p.x,dy=q.y-p.y,d=Math.hypot(dx,dy);if(d<4||d>45)continue;
    const open=laneOpen(p,q);let s=Math.min(open,6)*4+dx*p.dir*.6-d*.22;
    if(human)s+=((dx*p.fx+dy*p.fy)/d)*30;
    else if(q===M.me)s+=10+(M.me.call>0?40:0);
    if(open<1.2)s-=40;if(q.role==='gk')s-=15;
    if(s>bs){bs=s;best=q}}
  return best}
function take(p){const b=M.ball;
  if(b.passTeam!=null){if(p.team===b.passTeam){M.st.passOk[p.team]++;if(b.passFrom&&b.passFrom!==p){p.assistFrom=b.passFrom;p.assistT=M.t}}b.passTeam=null}
  b.owner=p;b.target=null;b.lastTeam=p.team;b.lastTouch=p;b.gkTried=false;b.shot=null;b.z=0;b.vz=0;p.immune=Math.max(p.immune,.35);p.hold=0;
  if(p===M.me)M.charge=0}
function startSlide(p,tx,ty){if(tx!=null){const dx=tx-p.x,dy=ty-p.y,d=Math.hypot(dx,dy)||1;p.fx=dx/d;p.fy=dy/d}
  p.slide=.45;p.slideCd=1.3;p.vx=p.fx*9.5;p.vy=p.fy*9.5}
function seek(p,tx,ty,spd){const dx=tx-p.x,dy=ty-p.y,d=Math.hypot(dx,dy);
  if(d<.25){p.tvx=p.tvy=0;return}const s=d<3?spd*d/3:spd;p.tvx=dx/d*s;p.tvy=dy/d*s}
function signalCoach(){
  if(!M||!R||R.mode!=='match'||M.subPending>0||M.phase==='end')return;
  M.subPending=3;$('#subBtn').hidden=true;
  toast(M.subbed?'Coach: OK, warm up. You\'re going back on':`Coach: OK, ${TM[M.ids[0]].sub.short} is coming on`);
}
function doReturn(){
  const p=M.meObj,o=M.meOrig,subName=p.short;
  R.scene.remove(p.mesh.root);disposeTree(p.mesh.root);R.meshes=R.meshes.filter(m=>m!==p.mesh);
  if(M.walkOff){R.scene.remove(M.walkOff.mesh.root);disposeTree(M.walkOff.mesh.root);R.meshes=R.meshes.filter(m=>m!==M.walkOff.mesh);M.walkOff=null}
  if(M.ball.owner===p)M.ball.owner=null;
  Object.assign(p,o,{x:-2,y:HW-.4,vx:0,vy:0,stun:0,slide:0,immune:.5,stamina:1,call:0,assistFrom:null});
  p.mesh=makePlayerMesh(M.kits[0],o.num,o.key,false);R.meshes.push(p.mesh);
  M.me=p;M.subbed=false;M.speed=1;M.fpYaw=0;
  whistle(1);const bn=$('#banner');bn.hidden=false;
  bn.innerHTML=`<h2 style="font-size:clamp(44px,8vw,96px)">Back on</h2><p>On: ${esc(p.short)} · Off: ${esc(subName)}</p>`;
  setTimeout(()=>{if(M&&M.phase!=='goal')bn.hidden=true},2400);
  $('#ffBtn').hidden=true;$('#subBtn').textContent='Ask to come off';$('#subBtn').hidden=false;$('#camBtn').textContent='Camera: '+CAM_NAMES[camMode];
  $('#mecard').innerHTML=`<b>${esc(p.short)}</b><small>#${p.num} · ${POS[p.i]} · You</small><div class="bar"><i id="stam"></i></div>`;
  snapCam();
}
function doSub(){
  const old=M.me,s=TM[M.ids[0]].sub,outName=old.short;
  M.meObj=old;M.meOrig={name:old.name,short:old.short,key:old.key,num:old.num,r:old.r,spd:old.spd};
  const w={x:old.x,y:old.y,vx:0,vy:0,fx:old.fx,fy:old.fy,kickT:0,slide:0,dive:null,sit:false};
  w.mesh=makePlayerMesh(M.kits[0],old.num,old.key,false);R.meshes.push(w.mesh);M.walkOff=w;
  R.scene.remove(old.mesh.root);disposeTree(old.mesh.root);R.meshes=R.meshes.filter(m=>m!==old.mesh);
  if(M.ball.owner===old)M.ball.owner=null;
  Object.assign(old,{name:s.name,short:s.short,key:s.key,num:s.num,r:s.r,spd:5.3+(s.r-70)*.085,x:-2,y:HW-.4,vx:0,vy:0,stun:0,slide:0,immune:.5,assistFrom:null});
  old.mesh=makePlayerMesh(M.kits[0],s.num,s.key,false);R.meshes.push(old.mesh);
  M.me={x:-5,y:HW+3.5,vx:0,vy:0,fx:0,fy:-1,call:0,stamina:1,r:old.r,dummy:true};M.subbed=true;M.charge=0;
  whistle(1);const bn=$('#banner');bn.hidden=false;
  bn.innerHTML=`<h2 style="font-size:clamp(44px,8vw,96px)">Substitution</h2><p>Off: ${esc(outName)} · On: ${esc(s.short)} #${s.num}</p>`;
  setTimeout(()=>{if(M&&M.phase!=='goal')bn.hidden=true},2600);
  $('#ffBtn').hidden=false;$('#mecard').innerHTML=`<b>${esc(outName)}</b><small>On the bench · ${esc(s.short)} came on</small>`;
  M.benchView=true;$('#camBtn').textContent='Camera: bench';$('#subBtn').textContent='Ask to go back on';$('#subBtn').hidden=false;
}
function steal(q,o){o.stun=.55;take(q);q.immune=.7;M.ball.kicker=o;M.ball.lockT=.3;M.restart=null;M.st.tackles[q.team]++;if(q===M.me)toast('Won it back');else if(o===M.me)toast('Tackled')}
let toastT=0;
function toast(t){const el=$('#toast');el.textContent=t;clearTimeout(toastT);toastT=setTimeout(()=>el.textContent='',1100)}

function step(dt){
  const b=M.ball;M.t+=dt;
  if(M.phase==='goal'){M.phaseT-=dt;ballStep(dt,true);
    for(const p of M.players){if(p===M.scorer){seek(p,p.dir*(HL-2),Math.sign(p.y||1)*(HW-2),5.5);p.celebrate=true}else p.tvx=p.tvy=0}
    movePlayers(dt);
    if(M.phaseT<=0){$('#banner').hidden=true;if(M.clock>=90)endMatch();else kickoff(M.lastConcede)}
    return}
  if(M.phase==='kickoff'||M.phase==='restart'){M.phaseT-=dt;
    for(const p of M.players)if(p!==b.owner){if(M.phase==='restart')ai(p,dt);else p.tvx=p.tvy=0}
    if(b.owner)b.owner.tvx=b.owner.tvy=0;
    movePlayers(dt);ballStep(dt,false);M.press.shoot=M.press.pass=false;if(M.phaseT<=0)M.phase='play';return}
  if(M.phase!=='play')return;
  M.clock+=dt*MPS;
  if(M.half===1&&M.clock>=45){M.clock=45;halfTime();return}
  if(M.clock>=90){M.clock=90;endMatch();return}
  for(const p of M.players){p.stun=Math.max(0,p.stun-dt);p.immune-=dt;p.slideCd-=dt;p.tackleCd-=dt;p.kickT=Math.max(0,p.kickT-dt);
    if(p.dive){p.dive.t-=dt;if(p.dive.t<=0)p.dive=null}
    if(p.slide>0){p.slide-=dt;if(p.slide<=0){p.slide=0;p.stun=.35}}}
  b.lockT-=dt;
  if(M.subPending>0){M.subPending-=dt;if(M.subPending<=0)(M.subbed?doReturn:doSub)()}
  if(b.owner)M.st.poss[b.owner.team]+=dt;
  M.ch=[chaser(0),chaser(1)];M.marker=markerOfMe();
  if(!M.subbed)human(dt);
  for(const p of M.players)if(p!==M.me||M.subbed)ai(p,dt);
  movePlayers(dt);ballStep(dt,false);
  gkSaves();aerial();pickups();tackles(dt);checkOut();
  M.press.shoot=M.press.pass=false;
}
function human(dt){
  const c=M.me,b=M.ball;
  let ix=keys.r-keys.l+joy.x,iy=keys.d-keys.u+joy.y;
  const fp=camMode==='fp';
  if(fp){// first person: left/right turn you, up/down run forward/back along your view
    const turn=clamp(ix,-1,1),fw=clamp(-iy,-1,1);
    if(c.slide<=0&&c.stun<=0)M.fpYaw=(M.fpYaw||0)+turn*2.6*dt;
    const back=fw<0?.6:1;ix=Math.cos(M.fpYaw)*fw*back;iy=Math.sin(M.fpYaw)*fw*back}
  else if(camMode==='player'){const fw=-iy;iy=ix;ix=fw}// controls follow the camera: up runs toward the goal you attack
  let m=Math.hypot(ix,iy);if(m>1){ix/=m;iy/=m;m=1}
  const own=b.owner===c,sprint=keys.sprint&&m>.2&&c.stamina>.03;
  c.stamina=clamp(c.stamina+(sprint?-.3:.13*(M.buff.dinner?1.4:1))*dt,0,1);
  const spd=(6.3+(c.r-80)*.05)*(sprint?1.32:1)*(own?.93:1)*(M.buff.gym?1.04:1);
  if(c.stun<=0&&c.slide<=0){c.tvx=ix*spd;c.tvy=iy*spd;if(m<.1&&!b.owner&&b.target===c)seek(c,b.x,b.y,spd)}
  if(fp){if(c.slide<=0){c.fx=Math.cos(M.fpYaw);c.fy=Math.sin(M.fpYaw)}}
  else if(m>.15&&c.slide<=0){c.fx=ix/m;c.fy=iy/m}
  c.call=Math.max(0,c.call-dt);
  if(own&&M.restart){if(M.press.shoot||M.press.pass)takeRestart(c,true);M.charge=0;return}
  if(M.press.shoot){
    if(own)M.charge=.001;
    else if(b.owner&&b.owner.team===1&&c.slideCd<=0&&c.stun<=0)startSlide(c);
  }
  if(M.charge>0){if(!own)M.charge=0;else{M.charge=Math.min(1,M.charge+dt/.85);if(!keys.shoot){shootBy(c,M.charge,true);M.charge=0}}}
  if(M.press.pass){
    if(own){const q=bestPass(c,true);if(q)passTo(c,q,true);else loftTo(c,c.x+c.fx*18,c.y+c.fy*18)}
    else if(b.owner&&b.owner.team===1&&dist(c,b.owner)<2.4&&c.tackleCd<=0){c.tackleCd=.7;c.kickT=.28;const o=b.owner;
      if(o.immune<=0&&o.role!=='gk'&&Math.random()<.5*Math.pow(c.r/o.r,2))steal(c,o)}
    else c.call=1.8;
  }
}
function chaser(team){
  const b=M.ball,pt=b.owner?b.owner:{x:b.x+b.vx*.3,y:b.y+b.vy*.3};
  let best=null,bd=1e9;for(const p of M.players){if(p.team!==team||p.role==='gk'||p===M.me)continue;const d=dist(p,pt);if(d<bd){bd=d;best=p}}
  if(team===0){if(!b.owner&&dist(M.me,pt)<bd)return null;if(b.owner&&b.owner.team===1&&b.owner.x>10&&bd>8)return null}
  return best}
function markerOfMe(){if(M.subbed)return null;let best=null,bd=1e9;for(const p of M.players){if(p.team!==1||p.role!=='def'||p===M.ch[1])continue;const d=dist(p,M.me);if(d<bd){bd=d;best=p}}return bd<18?best:null}
function ai(p,dt){
  const b=M.ball;
  if(p.stun>0||p.slide>0){p.tvx=p.tvy=0;return}
  if(p.role==='gk')return aiGK(p,dt);
  if(b.owner===p)return aiCarrier(p,dt);
  const own=b.owner,ours=own?own.team===p.team:b.lastTeam===p.team;
  if(!own&&b.target===p)return seek(p,b.x+b.vx*.2,b.y+b.vy*.2,p.spd);
  if(M.phase==='play'&&!(own&&own.team===p.team)&&M.ch[p.team]===p){
    if(own){seek(p,own.x+own.vx*.25,own.y+own.vy*.25,p.spd);
      if(p.team===1&&p.slideCd<=0&&dist(p,own)<3&&Math.random()<dt*.6)startSlide(p,own.x,own.y)}
    else seek(p,b.x+b.vx*.3,b.y+b.vy*.3,p.spd);
    return}
  if(p===M.marker&&own&&own.team===0){const m=M.me,gx=-p.dir*HL,dx=gx-m.x,dy=-m.y,d=Math.hypot(dx,dy)||1;return seek(p,m.x+dx/d*2.2,m.y+dy/d*2.2,p.spd*.95)}
  let tx=p.hx+b.x*.55+(ours?p.dir*6:-p.dir*3),ty=p.hy+b.y*(p.role==='mid'?.45:.32);
  if(p.role==='fwd'&&ours)tx+=p.dir*8;
  if(p.role==='def'){const lim=p.dir*8;tx=p.dir>0?Math.min(tx,lim):Math.max(tx,lim)}
  seek(p,clamp(tx,-HL+2,HL-2),clamp(ty,-HW+1.5,HW-1.5),p.spd*.88);
}
function aiCarrier(p,dt){
  const s=p.dir,gx=s*HL;
  if(M.restart){p.tvx=p.tvy=0;if(p.immune<1.2)takeRestart(p,false);return}
  const dG=Math.hypot(gx-p.x,p.y);
  let opp=null,dO=1e9;for(const q of M.players){if(q.team===p.team)continue;const d=dist(p,q);if(d<dO){dO=d;opp=q}}
  if(p.team===0&&M.me.call>0&&laneOpen(p,M.me)>1){passTo(p,M.me);M.me.call=0;return}
  p.think-=dt;
  if(p.think<=0&&p.immune<1){
    p.think=rnd(.25,.45);
    if(dG<27&&Math.abs(p.y)<17&&(dO>2.2||Math.random()<.55)){shootBy(p,0,false);return}
    if(dO<4&&Math.random()<.6){const q=bestPass(p,false);if(q){passTo(p,q);return}}
    if(Math.random()<(p.team===0?.16:.07)){const q=bestPass(p,false);if(q&&(q.x-p.x)*s>4){passTo(p,q);return}}
  }
  let tx=gx-s*12,ty=p.y*.6;
  if(opp&&dO<8&&(opp.x-p.x)*s>-1){const side=p.y>=opp.y?1:-1;ty=p.y+side*8;if(Math.abs(ty)>HW-3)ty=p.y-side*8}
  seek(p,tx,ty,p.spd*.95);
}
function aiGK(p,dt){
  const b=M.ball,gx=-p.dir*(HL-.7);
  if(b.owner===p){p.tvx=p.tvy=0;p.hold+=dt;if(M.restart&&p.immune>1.2)return;
    if(p.hold>1.1){p.hold=0;M.restart=null;const q=bestPass(p,false);if(q&&laneOpen(p,q)>2.5&&Math.random()<.6)passTo(p,q);else loftTo(p,p.dir*rnd(0,12),rnd(-16,16))}return}
  p.hold=0;
  let tx=gx+p.dir*(Math.abs(b.x-gx)<30?1.2:.5),ty=clamp(b.y*.3,-2.4,2.4);
  const inc=!b.owner&&b.shot&&b.shot.team!==p.team&&(p.dir>0?b.vx<-3:b.vx>3);
  if(inc){const t=(p.x-b.x)/b.vx;if(t>0&&t<1.5){ty=clamp(b.y+b.vy*t,-GWH-.6,GWH+.6);tx=p.x;
    if(t<.5&&!p.dive&&Math.abs(ty-p.y)>.9)p.dive={t:.6,side:Math.sign(ty-p.y)}}}
  const inBox=Math.abs(b.x-gx)<PEN_D-3&&Math.abs(b.y)<PEN_HW-4;
  if(!b.owner&&!inc&&inBox&&Math.hypot(b.vx,b.vy)<12&&b.z<1.8&&b.lastTeam!==p.team){tx=b.x;ty=b.y}
  else if(b.owner&&b.owner.team!==p.team&&inBox&&dist(b.owner,p)<9){tx=b.owner.x;ty=b.owner.y}
  seek(p,tx,ty,p.spd*1.1+(p.dive?5:0));
}
function takeRestart(p,human){
  const t=M.restart;M.restart=null;
  if(t==='corner')loftTo(p,p.dir*(HL-rnd(6,10)),rnd(-5,5));
  else if(t==='gk'){const q=bestPass(p,false);if(q&&Math.random()<.5)passTo(p,q);else loftTo(p,p.dir*rnd(-5,10),rnd(-18,18))}
  else{const q=bestPass(p,human);if(q)passTo(p,q,human);else loftTo(p,p.x+p.dir*12,p.y*.6)}
}
function movePlayers(dt){
  const P=M.players;
  for(const p of P){
    if(p.slide>0){const f=Math.exp(-2.2*dt);p.vx*=f;p.vy*=f}
    else if(p.stun>0){p.vx*=.86;p.vy*=.86}
    else{const a=Math.min(1,dt*(p.dive?14:8));p.vx+=(p.tvx-p.vx)*a;p.vy+=(p.tvy-p.vy)*a}
    p.x+=p.vx*dt;p.y+=p.vy*dt;
    if(p!==M.me&&p.slide<=0){const s=Math.hypot(p.vx,p.vy);if(s>.6){p.fx=p.vx/s;p.fy=p.vy/s}else if(p.role==='gk'){p.fx=p.dir;p.fy=0}}
    if(p.role==='gk'){const gx=-p.dir*HL;p.x=p.dir>0?clamp(p.x,gx+.3,gx+PEN_D):clamp(p.x,gx-PEN_D,gx-.3);p.y=clamp(p.y,-PEN_HW,PEN_HW)}
    else{p.x=clamp(p.x,-HL-1,HL+1);p.y=clamp(p.y,-HW-1,HW+1)}
  }
  for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const a=P[i],c=P[j];const dx=c.x-a.x,dy=c.y-a.y,d=Math.hypot(dx,dy);
    if(d>0&&d<.9){const o=(.9-d)/2,nx=dx/d,ny=dy/d;a.x-=nx*o;a.y-=ny*o;c.x+=nx*o;c.y+=ny*o}}
}
function ballStep(dt,inGoal){
  const b=M.ball;
  if(b.owner){const o=b.owner;b.x=o.x+o.fx*.75;b.y=o.y+o.fy*.75;b.z=0;b.vx=o.vx;b.vy=o.vy;b.vz=0;return}
  const px=b.x;
  b.vz-=GRAV*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;b.z+=b.vz*dt;
  if(b.z<=0){b.z=0;if(b.vz<-1.5){b.vz=-b.vz*.45;b.vx*=.7;b.vy*=.7}else b.vz=0}
  const ground=b.z<.05&&b.vz===0,f=Math.exp(-(ground?.9:.05)*dt);b.vx*=f;b.vy*=f;
  if(ground&&Math.hypot(b.vx,b.vy)<.12)b.vx=b.vy=0;
  if(inGoal){if(Math.abs(b.x)>HL){if(Math.abs(b.x)>HL+2){b.x=Math.sign(b.x)*(HL+2);b.vx*=-.2}
      if(Math.abs(b.y)>GWH-.2){b.y=Math.sign(b.y)*(GWH-.2);b.vy*=-.3}if(b.z>GH-.2){b.z=GH-.2;b.vz=-Math.abs(b.vz)*.3}}return}
  for(const sd of[1,-1]){const lx=sd*HL;
    if((px-lx)*(b.x-lx)<=0&&px!==b.x){const ay=Math.abs(b.y);
      if(b.z<GH+.25&&ay>GWH-.12&&ay<GWH+.25){b.x=lx-sd*.3;b.vx=-b.vx*.5;b.vy+=Math.sign(b.y)*3;b.shot=null;toast('Off the post!');tone(880,.25,.08,'triangle')}
      else if(ay<GWH&&b.z>GH-.15&&b.z<GH+.3){b.x=lx-sd*.3;b.vx=-b.vx*.45;b.vz=-Math.abs(b.vz)*.4-1;b.shot=null;toast('Off the bar!');tone(880,.25,.08,'triangle')}}}
}
function gkSaves(){
  const b=M.ball;if(b.owner||b.gkTried)return;
  for(let t=0;t<2;t++){const g=M.gks[t];if(b.lastTeam===t||g.stun>0)continue;
    const toward=g.dir>0?b.vx<-1:b.vx>1;if(!toward||Math.abs(b.x-g.x)>.7)continue;
    const lat=Math.abs(b.y-g.y),reach=g.dive?1.75:1.15;
    if(lat>reach||b.z>2.55)continue;
    b.gkTried=true;
    const sp=Math.hypot(b.vx,b.vy);
    const p=clamp(.94-(sp-12)/26-lat/reach*.3-(b.z>1.9?.12:0)+(g.r-80)*.012+(t===0?.05:0),.08,.97);
    if(Math.random()<p){
      if(b.shot){M.st.ot[b.shot.team]++;M.st.saves[t]++;g.saves++}
      if(!g.dive&&lat>.6)g.dive={t:.5,side:Math.sign(b.y-g.y)};
      if(sp>17&&Math.random()<.55){b.vx=-b.vx*.25;b.vy=(Math.sign(b.y-g.y)||1)*rnd(5,9);b.vz=Math.max(b.vz,2);b.kicker=g;b.lockT=.4;b.lastTeam=t;b.lastTouch=g;b.shot=null;toast('Parried!')}
      else{take(g);toast('Saved!')}
    }
    return}
}
function aerial(){
  const b=M.ball;if(b.owner||b.z<.9||b.z>2.7)return;
  for(const g of M.gks){const own=-g.dir*HL;if(Math.abs(b.x-own)>SIX_D+2||Math.abs(b.y)>SIX_HW+1||b.lastTeam===g.team)continue;
    if(Math.hypot(g.x-b.x,g.y-b.y)<1.5){if(Math.random()<.85){take(g);toast('Claimed')}else{b.vx*=-.4;b.vy=rnd(-8,8);b.lastTeam=g.team;b.lastTouch=g;b.shot=null;b.kicker=g;b.lockT=.4}return}}
  if(b.z>2.3)return;
  for(const p of M.players){if(p.role==='gk'||(b.lockT>0&&p===b.kicker)||p.stun>0)continue;
    if(Math.hypot(p.x-b.x,p.y-b.y)<.8){header(p);b.lockT=.3;return}}
}
function pickups(){
  const b=M.ball;if(b.owner||b.z>.95)return;const sp=Math.hypot(b.vx,b.vy);
  let best=null,bd=1e9;
  for(const p of M.players){if(p.stun>0||(b.lockT>0&&p===b.kicker))continue;const d=Math.hypot(p.x-b.x,p.y-b.y),reach=p.slide>0?1.25:.85;if(d<reach&&d<bd){bd=d;best=p}}
  if(!best)return;
  if(best.role==='gk'&&best.team!==b.lastTeam&&!b.gkTried&&b.shot&&sp>4)return;
  if(sp>17&&best.team!==b.lastTeam&&best.role!=='gk'){b.kicker=best;b.lockT=.25;
    if(Math.random()<.33){b.vx*=-.3;b.vy=b.vy*.3+rnd(-5,5);b.vz=rnd(0,3);b.lastTeam=best.team;b.lastTouch=best;b.shot=null;toast('Blocked')}return}
  take(best);
}
function tackles(dt){
  const b=M.ball,o=b.owner;if(!o||o.role==='gk'||o.immune>0)return;
  for(const q of M.players){if(q.team===o.team||q.role==='gk'||q.stun>0||(q===M.me&&q.slide<=0))continue;const d=dist(q,o);
    if(q.slide>0){if(d<1.3){if(Math.random()<.8)steal(q,o);else{q.slide=0;q.stun=.6}return}continue}
    if(d<1.35){q.tackleT-=dt;if(q.tackleT<=0){q.tackleT=.45;let ch=.28*Math.pow(q.r/o.r,3);if(o===M.me)ch*=.7;if(Math.random()<ch){steal(q,o);return}}}
    else q.tackleT=Math.min(q.tackleT,.2)}
}
function checkOut(){
  const b=M.ball;if(b.owner)return;
  if(Math.abs(b.x)>HL+.25){const end=Math.sign(b.x);
    if(Math.abs(b.y)<GWH&&b.z<GH){goal(end>0?0:1);return}
    const def=end>0?1:0;
    if(b.lastTeam===def)restart('corner',1-def,end*(HL-.5),Math.sign(b.y||1)*(HW-.5));else restart('gk',def,0,0);return}
  if(Math.abs(b.y)>HW+.3)restart('throw',1-b.lastTeam,clamp(b.x,-HL+1,HL-1),Math.sign(b.y)*(HW-.1));
}
function restart(type,team,x,y){
  const b=M.ball;let taker;
  if(type==='gk'){taker=M.gks[team];x=-taker.dir*(HL-5.5);y=0}
  else{let bd=1e9;for(const p of M.players){if(p.team!==team||p.role==='gk')continue;const d=Math.hypot(p.x-x,p.y-y);if(d<bd){bd=d;taker=p}}}
  taker.x=x;taker.y=y;taker.vx=taker.vy=0;
  const ang=Math.atan2(-y*.6,taker.dir*(type==='corner'?HL:HL*.4)-x+(type==='corner'?-taker.dir*8:0));taker.fx=Math.cos(ang);taker.fy=Math.sin(ang);
  Object.assign(b,{owner:taker,x,y,z:0,vx:0,vy:0,vz:0,target:null,shot:null,passTeam:null,lastTeam:team,lastTouch:taker});
  taker.immune=2.2;taker.think=.9;taker.hold=0;
  for(const p of M.players){if(p.team===team)continue;const d=Math.hypot(p.x-x,p.y-y);if(d<6&&d>0){p.x=x+(p.x-x)/d*6;p.y=y+(p.y-y)/d*6}}
  if(type==='gk'){const gx=-taker.dir*HL;for(const p of M.players){if(p.team===team)continue;if(Math.abs(p.x-gx)<PEN_D&&Math.abs(p.y)<PEN_HW)p.x=gx+taker.dir*(PEN_D+1)}}
  M.restart=type;M.phase='restart';M.phaseT=.5;
  if(type==='corner')M.st.corners[team]++;
  toast(type==='corner'?'Corner':type==='gk'?'Goal kick':'Throw-in');
}
function goal(team){
  const b=M.ball,sc=b.lastTouch,og=!!(sc&&sc.team!==team);
  let assist=null;if(sc&&!og&&sc.assistFrom&&M.t-sc.assistT<7&&sc.assistFrom.team===team&&sc.assistFrom!==sc)assist=sc.assistFrom;
  M.score[team]++;if(b.shot&&b.shot.team===team)M.st.ot[team]++;
  const min=Math.max(1,Math.ceil(M.clock));
  M.events.push({team,min,name:sc?sc.short:'',pk:sc&&!og?sc.key:null,ak:assist?assist.key:null,og});
  M.phase='goal';M.phaseT=3.4;M.lastConcede=1-team;b.owner=null;M.scorer=og?null:sc;M.charge=0;
  const bn=$('#banner');bn.hidden=false;
  bn.innerHTML=`<h2>Goal!</h2><p>${flagHTML(M.ids[team])}${esc(sc?sc.short:'')}${og?' (own goal)':''} ${min}'${assist?` · assist ${esc(assist.short)}`:''}</p>`;
  if(team===0)roar();else{crowd(.3,.2);setTimeout(()=>crowd(AU.base,1.5),1500)}
  if(sc===M.me&&!og)setTimeout(()=>toast('Your goal!'),600);
}
function summStats(){const s=M.st,tp=s.poss[0]+s.poss[1],pa=tp?Math.round(s.poss[0]/tp*100):50;
  return{poss:[pa,100-pa],shots:s.shots.slice(),ot:s.ot.slice(),passes:s.passes.slice(),pacc:s.passes.map((n,i)=>n?Math.round(s.passOk[i]/n*100):0),tackles:s.tackles.slice(),saves:s.saves.slice(),corners:s.corners.slice()}}
function statsHTML(st){
  const rows=[['Possession',st.poss,'%'],['Shots',st.shots],['Shots on target',st.ot],['Passes',st.passes],['Pass accuracy',st.pacc,'%'],['Tackles won',st.tackles],['Saves',st.saves],['Corners',st.corners]];
  const c0=M.kits[0][0],c1=M.kits[1][0];
  return`<div class="stats">${rows.map(([n,v,u=''])=>{const t=(v[0]+v[1])||1;return`<div class="srow"><span>${v[0]}${u}</span><div class="mid"><label>${n}</label><div class="sbar"><i style="width:${v[0]/t*100}%;background:${c0}"></i><i style="flex:1;background:${c1}"></i></div></div><span>${v[1]}${u}</span></div>`}).join('')}</div>`}
function ovTeams(){return`<div class="ov-teams">${flagHTML(M.ids[0])}${M.ids[0]} <span style="color:var(--gold)">${M.score[0]}–${M.score[1]}</span> ${M.ids[1]}${flagHTML(M.ids[1])}</div>`}
function scorersLine(){return M.events.length?`<p class="eyebrow">${M.events.map(e=>`${M.ids[e.team]} · ${esc(e.name)}${e.og?' (og)':''} ${e.min}'`).join('  ·  ')}</p>`:''}
function halfTime(){
  if(M.watch){M.phase='ht';whistle(2);watchHalfTime();return}
  M.phase='ht';whistle(2);const ov=$('#overlay');ov.hidden=false;
  ov.innerHTML=`<p class="eyebrow">Half time · ${esc(M.label)}</p>${ovTeams()}${scorersLine()}${statsHTML(summStats())}<div class="ov-actions"><button type="button" class="btn primary" id="ovGo">Start the second half</button></div>`;
  $('#ovGo').onclick=()=>{ov.hidden=true;M.half=2;kickoff(1);whistle(1)};$('#ovGo').focus();
}
function endMatch(){
  if(M.watch){M.phase='end';whistle(3);watchFullTime();return}
  M.phase='end';whistle(3);const[a,b]=M.score,ov=$('#overlay');ov.hidden=false;
  const st=summStats();M.meta={events:M.events.slice(),saves:[M.gks[0].saves,M.gks[1].saves],st};
  if(M.ko&&a===b){
    ov.innerHTML=`<p class="eyebrow">Full time · ${esc(M.label)}</p>${ovTeams()}${scorersLine()}${statsHTML(st)}<p>Level after ninety minutes. It goes to penalties.</p><div class="ov-actions"><button type="button" class="btn primary" id="ovGo">Take the shootout</button></div>`;
    $('#ovGo').onclick=()=>startPens();
  }else{
    finishUserMatch(a,b,null,M.meta);
    const v=a>b?(M.ko?`${TM[M.ids[0]].name} go through.`:'Three points.'):a<b?(M.ko?`${TM[M.ids[0]].name} are out.`:'No points from this one.'):'A point each.';
    ov.innerHTML=`<p class="eyebrow">Full time · ${esc(M.label)}</p>${ovTeams()}${scorersLine()}${statsHTML(st)}<p>${v}</p>${postButtons()}`;
    wirePost();
    if(a>b)roar();
  }
  $('#ovGo').focus();
}
function postButtons(){
  if(finalPending())return`<p>Your World Cup is over, but the final is still to come. Watch it from a VIP suite in New York New Jersey?</p><div class="ov-actions"><button type="button" class="btn primary" id="ovWatch">Watch the final as a VIP guest</button><button type="button" class="btn" id="ovSelect">Back to team select</button><button type="button" class="btn" id="ovGo">Walk off and fly home</button></div>`;
  return`<div class="ov-actions"><button type="button" class="btn primary" id="ovGo">${S.stage==='champ'?'Lift the trophy':'Walk off through the tunnel'}</button><button type="button" class="btn" id="ovSkip">Skip ahead</button></div>`}
function wirePost(){
  if(finalPending()){$('#ovWatch').onclick=watchFinal;$('#ovSelect').onclick=toSelect;$('#ovGo').onclick=()=>{decideFinal();postMatch()};return}
  $('#ovGo').onclick=postMatch;$('#ovSkip').onclick=afterMatch}
function watchFinal(){leavePlay();startExplore('drive:stadium')}
function toSelect(){decideFinal();leavePlay();leaveRun()}
function postMatch(){leavePlay();if(S.stage==='champ'){startCelebration(S.user);return}startExplore('tunnel')}
function setPause(on){
  if(!M||!R||R.mode!=='match'||M.phase==='end'||M.phase==='ht')return;M.paused=on;const ov=$('#overlay');
  if(on){ov.hidden=false;ov.innerHTML=`<p class="eyebrow">${esc(M.label)}</p><h3>Paused</h3>${ovTeams()}${statsHTML(summStats())}<div class="ov-actions"><button type="button" class="btn primary" id="ovGo">Resume</button></div>`;$('#ovGo').onclick=()=>setPause(false);$('#ovGo').focus()}
  else ov.hidden=true;
}

/* ---------- match rendering ---------- */
let accum=0,lastCarrier='';
function matchFrame(dt){
  if(!M.paused&&M.phase!=='end'&&M.phase!=='ht'){accum+=dt*(M.speed||1);let n=0;while(accum>=1/60&&n<24){step(1/60);accum-=1/60;n++}}else accum=0;
  const b=M.ball,me=M.me;
  for(const p of M.players)animPlayer(p,dt);
  for(const f of M.bench)animPlayer(f,dt,{sit:f.sit,wave:f.coach&&f.team===0&&M.subPending>0?2:0});
  if(M.walkOff){const w=M.walkOff,tx=-5,ty=HW+3.5,d=Math.hypot(tx-w.x,ty-w.y);
    if(d>.2){w.vx=(tx-w.x)/d*2.4;w.vy=(ty-w.y)/d*2.4;w.x+=w.vx*dt;w.y+=w.vy*dt;w.fx=w.vx/2.4;w.fy=w.vy/2.4}else{w.vx=w.vy=0;w.fx=0;w.fy=-1;w.sit=true}
    w.mesh.root.visible=!(M.subbed&&M.benchView&&w.sit);animPlayer(w,dt,{sit:w.sit})}
  syncBall(dt);
  const fp=camMode==='fp'&&!M.subbed;if(me.mesh)me.mesh.root.visible=!fp;R.meRing.visible=!fp&&!M.subbed;
  R.meRing.position.set(me.x,.03,me.y);R.meArrow.rotation.y=Math.atan2(me.fx,me.fy);
  const q=b.owner===me&&M.phase==='play'?bestPass(me,true):null;
  R.passRing.visible=!!q;if(q)R.passRing.position.set(q.x,.03,q.y);
  updateBallViz(dt);
  camMatch(dt);hudMatch();updateBallArrow();
}
function syncBall(dt){const b=M.ball;
  R.ball.position.set(b.x,b.z+.3,b.y);
  const sp=Math.hypot(b.vx,b.vy);if(sp>.05){R.tmpV.set(b.vy,0,-b.vx).normalize();R.ball.rotateOnWorldAxis(R.tmpV,sp*dt/.3)}}
let camMode='fp';
const CAM_NAMES={fp:'first person',player:'behind player',broadcast:'TV'};
// First person: eyes at head height, looking where you face. Behind player: rigidly locked behind you, facing the goal you attack.
function camGoal(){const b=M.ball,port=R.camera.aspect<1;
  const mode=M.subbed?(M.benchView?'bench':'broadcast'):camMode;
  if(mode==='bench'){R.tmpV.set(-5,1.55,HW+3.3);R.tmpL.set(b.x,.6,b.y);return}
  if(mode==='fp'){
    const f=M.me,yaw=M.fpYaw||0,cx=Math.cos(yaw),cy=Math.sin(yaw),eye=f.slide>0?1.1:2;
    R.tmpV.set(f.x-cx*.9,eye,f.y-cy*.9);R.tmpL.set(f.x+cx*7,0,f.y+cy*7);return}
  if(mode==='player'){
    const f=M.me,back=port?12:9.5,h=port?6.5:4.6;
    R.tmpV.set(f.x-back,h,f.y);R.tmpL.set(f.x+11,.6,f.y);return}
  const f=M.phase==='goal'&&M.scorer?M.scorer:b,lim=port?HL-4:HL-13;
  const close=M.phase==='goal'?.5:1,tx=clamp(f.x*.92,-lim,lim),tz=clamp(f.y*.5,-12,12);
  R.tmpV.set(tx,(port?34:17)*close+2,tz+(port?30:27)*close);R.tmpL.set(tx,0,tz-(port?4:3))}
function snapCam(){camGoal();R.camPos.copy(R.tmpV);R.camLook.copy(R.tmpL);R.camera.position.copy(R.camPos);R.camera.lookAt(R.camLook)}
function camMatch(dt){
  const port=R.camera.aspect<1,fov=M.subbed&&M.benchView?(port?70:55):camMode==='fp'&&!M.subbed?(port?90:78):(port?52:34);
  if(R.camera.fov!==fov){R.camera.fov=fov;R.camera.updateProjectionMatrix()}
  camGoal();const k=camMode!=='broadcast'&&!M.subbed?1:1-Math.exp(-dt*(M.phase==='goal'?2:3.2));R.camPos.lerp(R.tmpV,k);R.camLook.lerp(R.tmpL,k);R.camera.position.copy(R.camPos);R.camera.lookAt(R.camLook)}
function project(x,y,z){const v=R.tmpV.set(x,y,z).project(R.camera);return[(v.x+1)/2*R.w,(1-v.y)/2*R.h,v.z<1]}
function hudMatch(){
  $('#gA').textContent=M.score[0];$('#gB').textContent=M.score[1];
  const mm=Math.floor(M.clock),ss=Math.floor((M.clock%1)*60);
  $('#clk').textContent=`${String(mm).padStart(2,'0')}:${String(ss).padStart(2,'0')}`;$('#half').textContent=M.half===1?'1H':'2H';
  const me=M.me,tag=$('#meTag'),fp=camMode==='fp';
  if(fp){tag.style.transform=`translate(${(R.w/2).toFixed(1)}px,${(R.h-70).toFixed(1)}px) translate(-50%,-100%)`;tag.style.visibility='visible'}
  else{const[sx,sy,vis]=project(me.x,2.75,me.y);tag.style.transform=`translate(${sx.toFixed(1)}px,${sy.toFixed(1)}px) translate(-50%,-100%)`;tag.style.visibility=vis?'visible':'hidden'}
  $('#meTagName').hidden=fp;if(M.subbed)tag.style.visibility='hidden';
  $('#pw').hidden=!(M.charge>0);if(M.charge>0)$('#pwFill').style.width=(M.charge*100)+'%';
  $('#meCall').hidden=!(me.call>0);
  const st=$('#stam');if(st)st.style.width=(me.stamina*100)+'%';
  const o=M.ball.owner,c=o?`${o.key}`:'';
  if(c!==lastCarrier){lastCarrier=c;$('#carrier').innerHTML=o?`${flagHTML(M.ids[o.team],'sm')}${esc(o.short)}${o===me?' (you)':''}`:''}
  drawRadar();
}
function drawRadar(){
  const cv=$('#radar'),x=cv.getContext('2d'),w=cv.width,h=cv.height,sx=w/(2*HL+4),sy=h/(2*HW+4),X=v=>(v+HL+2)*sx,Y=v=>(v+HW+2)*sy;
  x.clearRect(0,0,w,h);x.fillStyle='rgba(16,52,28,.88)';x.fillRect(0,0,w,h);
  x.strokeStyle='rgba(255,255,255,.4)';x.lineWidth=2;x.strokeRect(X(-HL),Y(-HW),2*HL*sx,2*HW*sy);
  x.beginPath();x.moveTo(X(0),Y(-HW));x.lineTo(X(0),Y(HW));x.stroke();x.beginPath();x.arc(X(0),Y(0),CR*sx,0,7);x.stroke();
  for(const sd of[-1,1])x.strokeRect(sd>0?X(HL-PEN_D):X(-HL),Y(-PEN_HW),PEN_D*sx,2*PEN_HW*sy);
  for(const p of M.players){x.fillStyle=p.role==='gk'?(p.team?'#ff6fb5':'#c6f24a'):M.kits[p.team][0];x.beginPath();x.arc(X(p.x),Y(p.y),p===M.me?7:5.5,0,7);x.fill();
    x.lineWidth=p===M.me?3:1.5;x.strokeStyle=p===M.me?'#f0c23b':'rgba(0,0,0,.7)';x.stroke()}
  x.fillStyle='#fff';x.beginPath();x.arc(X(M.ball.x),Y(M.ball.y),4,0,7);x.fill();
}

/* =====================================================================
   PENALTY SHOOTOUT (3D)
   ===================================================================== */
let PS=null;
function startPens(){
  $('#overlay').hidden=true;R.mode='pens';$('#subBtn').hidden=$('#ffBtn').hidden=true;hideBallViz();resize3D();M.players.forEach(p=>p.mesh.root.visible=true);$('#hud').hidden=true;$('#pensHud').hidden=false;$('#pauseBtn').hidden=true;
  R.meRing.visible=false;R.passRing.visible=false;
  PS={k:[[],[]],turn:0,phase:'aim',t:0,aim:{y:0,z:1},order:[orderFor(0),orderFor(1)]};
  M.players.forEach(p=>{p.vx=p.vy=0;p.slide=p.stun=0;p.dive=null;p.kickT=0;p.celebrate=false});
  nextKick();
}
function orderFor(t){const team=TM[M.ids[t]],o=[];if(t===0)o.push(S.me);if(!o.includes(team.star))o.push(team.star);for(const i of[6,5,4,3,2,1,0])if(!o.includes(i))o.push(i);return o}
function lineUp(){let k0=0,k1=0;for(const p of M.players){if(p.role==='gk')continue;const k=p.team?k1++:k0++;p.x=p.team?1.2:-1.2;p.y=-7+k*2.4;p.fx=1;p.fy=0;p.vx=p.vy=0}}
function nextKick(){
  const st=PS.turn,kt=1-st,n=PS.k[st].length;
  lineUp();
  const kick=M.players.find(p=>p.team===st&&p.i===PS.order[st][n%7]);
  PS.kicker=kick;PS.keeper=M.gks[kt];
  const other=M.gks[st];other.x=-2;other.y=st?8:-8;other.fx=1;other.fy=0;other.dive=null;
  kick.x=HL-SPOT-2.2;kick.y=-1.2;kick.fx=1;kick.fy=.3;
  const g=PS.keeper;g.x=HL-.5;g.y=0;g.fx=-1;g.fy=0;g.dive=null;g.vx=g.vy=0;
  Object.assign(M.ball,{x:HL-SPOT,y:0,z:0,vx:0,vy:0,vz:0,owner:null});
  PS.aim={y:0,z:1};PS.kp={from:{y:0,z:.9},to:{y:0,z:.9},start:null};PS.t=0;PS.result=null;
  PS.phase=st===0&&!PS.auto?'aim':'runup';
  R.reticle.visible=st===0&&!PS.auto;
  renderPensHud(`${kick.short} steps up`,st===0?(touchMode?'Aim with the stick, tap Shoot to strike.':'Aim with WASD or the arrows, press Space to strike.'):(touchMode?'You are in goal. Hold a direction and tap Shoot to dive.':'You are in goal. Hold a direction and press Space to dive. Up dives high.'));
}
function renderPensHud(msg,sub){
  const n=Math.max(5,PS.k[0].length,PS.k[1].length);
  const dots=i=>[...Array(n)].map((_,j)=>{const v=PS.k[i][j];return`<span class="dot ${v===true?'g':v===false?'m':''}"></span>`}).join('');
  const g=i=>PS.k[i].filter(Boolean).length;
  $('#pdots').innerHTML=`${flagHTML(M.ids[0],'sm')}<span>${M.ids[0]} ${g(0)}</span><span class="dots">${dots(0)}</span>${flagHTML(M.ids[1],'sm')}<span>${M.ids[1]} ${g(1)}</span><span class="dots">${dots(1)}</span>`;
  if(msg!=null)$('#pmsg').textContent=msg;if(sub!=null)$('#psub').textContent=sub;
}
function pensFrame(dt){
  const P=PS;P.t+=dt;
  const ix=keys.r-keys.l+joy.x,iy=keys.d-keys.u+joy.y;
  const kick=P.kicker,g=P.keeper,b=M.ball;
  kick.vx=kick.vy=0;
  if(P.phase==='aim'){
    P.aim.y=clamp(P.aim.y+ix*4.2*dt,-4.6,4.6);P.aim.z=clamp(P.aim.z-iy*3.2*dt,.15,3.1);
    R.reticle.position.set(HL-.05,P.aim.z,P.aim.y);R.reticle.visible=true;
    if(M.press.shoot||P.t>9){P.phase='runup';P.t=0;R.reticle.visible=false}
  }else if(P.phase==='runup'){
    const k=Math.min(1,P.t/.8),sx=HL-SPOT-2.2,ex=HL-SPOT-.55;
    kick.x=sx+(ex-sx)*k;kick.y=-1.2+.9*k;kick.vx=5.5;kick.fx=.95;kick.fy=.3;
    if(P.turn===1&&!P.auto)userDive(ix,iy);
    if(k>=1)strike();
  }else if(P.phase==='flight'){
    if(P.turn===1&&!P.auto)userDive(ix,iy);
    const k=Math.min(1,P.t/P.T);
    b.x=HL-SPOT+(P.target.x-(HL-SPOT))*k;b.y=P.target.y*k;b.z=P.target.z*k+Math.sin(Math.PI*k)*.35;
    if(k>=1)resolvePen();
  }else if(P.phase==='result'){
    b.vz-=GRAV*dt;b.x+=b.vx*dt;b.y+=b.vy*dt;b.z+=b.vz*dt;if(b.z<0){b.z=0;b.vz=-b.vz*.4;b.vx*=.7;b.vy*=.7}
    if(P.result==='goal'){if(b.x>HL+1.9){b.x=HL+1.9;b.vx=0}b.y=clamp(b.y,-GWH+.3,GWH-.3);if(b.z>GH-.3){b.z=GH-.3;b.vz=0}}
    if(P.t>2)advancePen();
  }
  const kp=P.kp,prog=kp.start!=null?clamp((R.time-kp.start)/.42,0,1):0;
  g.y=kp.from.y+(kp.to.y-kp.from.y)*prog;g.x=HL-.5;
  const lift=prog*Math.max(0,kp.to.z-.9)*.6;
  g.dive=prog>0&&Math.abs(kp.to.y)>.5?{t:1,side:Math.sign(kp.to.y)}:null;
  for(const p of M.players)animPlayer(p,dt,p===g?{y:lift,arms:prog>0&&kp.to.z>1.5?-2.9:undefined}:{});
  R.ball.position.set(b.x,b.z+.3,b.y);if(P.phase==='flight'||P.phase==='result')R.ball.rotation.x+=dt*14;
  if(P.auto)return;
  const port=R.camera.aspect<1;
  R.camera.position.set(HL-SPOT-(port?11:8),port?3.2:2.6,0);R.camera.lookAt(HL,1.15,0);
  M.press.shoot=M.press.pass=false;
}
function userDive(ix,iy){const P=PS;if(P.kp.start!=null||!M.press.shoot)return;
  const y=Math.abs(ix)>.3?Math.sign(ix)*clamp(Math.abs(ix)*3.2,2.2,3.2):0,z=iy<-.3?1.9:iy>.3?.35:.9;
  P.kp.to={y,z};P.kp.start=R.time}
function strike(){
  const P=PS;P.kicker.kickT=.28;thump(1);
  let tgt;
  if(P.turn===0&&!P.auto){const a=P.aim,edge=Math.max(Math.abs(a.y)/GWH,a.z/GH),err=.15+Math.pow(Math.min(1.3,edge),3)*.45;
    tgt={x:HL+.2,y:a.y+rnd(-1,1)*err,z:Math.max(.12,a.z+rnd(-1,1)*err*.7)};
    const right=Math.random()<.3+(P.keeper.r-75)/170;
    if(right)P.kp.to={y:clamp(tgt.y+rnd(-.5,.5),-3.3,3.3),z:clamp(tgt.z+rnd(-.3,.3),.3,2)};
    else if(Math.random()<.2)P.kp.to={y:0,z:.9};
    else P.kp.to={y:(tgt.y>0?-1:1)*rnd(1.8,3),z:rnd(.4,1.6)};
    P.kp.start=R.time+.06;
  }else{
    const miss=Math.random()<.07,side=Math.random()<.5?-1:1,center=Math.random()<.18;
    tgt={x:HL+.2,y:center?rnd(-.6,.6):side*rnd(1.5,3.4),z:rnd(.2,2.1)};
    if(miss){if(Math.random()<.5)tgt.z=rnd(2.6,3.2);else tgt.y=side*rnd(3.8,4.5)}
    if(P.auto){const right=Math.random()<.3+(P.keeper.r-75)/170;P.kp.to=right?{y:clamp(tgt.y+rnd(-.5,.5),-3.3,3.3),z:clamp(tgt.z+rnd(-.3,.3),.3,2)}:Math.random()<.2?{y:0,z:.9}:{y:(tgt.y>0?-1:1)*rnd(1.8,3),z:rnd(.4,1.6)};P.kp.start=R.time+.06}
  }
  P.target=tgt;P.T=.55;P.phase='flight';P.t=0;
}
function resolvePen(){
  const P=PS,t=P.target,b=M.ball;
  const inFrame=Math.abs(t.y)<GWH-.12&&t.z<GH-.1;
  const kp=P.kp,prog=kp.start!=null?clamp((R.time-kp.start)/.42,0,1):0;
  const ky=kp.from.y+(kp.to.y-kp.from.y)*prog,kz=kp.from.z+(kp.to.z-kp.from.z)*prog;
  let saved=prog<.25?Math.abs(t.y-ky)<.75&&t.z<2:Math.hypot(t.y-ky,(t.z-kz)*.8)<1.1;
  saved=saved&&inFrame;
  const goal=inFrame&&!saved;
  P.result=goal?'goal':saved?'saved':'miss';
  P.k[P.turn].push(goal);
  if(goal){b.vx=8;b.vy=t.y*.2;b.vz=0}else if(saved){b.vx=-7;b.vy=rnd(-4,4);b.vz=3}else{b.vx=10;b.vy=t.y*.5;b.vz=1}
  if(P.auto){const who=P.kicker.short;exMsg(goal?`${who} scores!`:saved?`Saved! ${who} is denied.`:`${who} misses!`);if(goal)roar();P.phase='result';P.t=0;return}
  const mine=P.turn===0;
  const msg=goal?(mine?'Scored!':'They score'):saved?(mine?'Saved':'You saved it!'):(mine?'Missed':'They miss!');
  if((mine&&goal)||(!mine&&!goal))roar();else{crowd(.28,.2);setTimeout(()=>crowd(AU.base,1.5),1200)}
  renderPensHud(msg,'');
  P.phase='result';P.t=0;
}
function penWinner(){const a=PS.k[0],b=PS.k[1],sa=a.filter(Boolean).length,sb=b.filter(Boolean).length,ta=a.length,tb=b.length;
  if(ta<=5&&tb<=5){if(sa+(5-ta)<sb)return 1;if(sb+(5-tb)<sa)return 0;if(ta===5&&tb===5&&sa!==sb)return sa>sb?0:1;return null}
  if(ta===tb&&sa!==sb)return sa>sb?0:1;return null}
function advancePen(){
  const w=penWinner();
  if(PS.auto){if(w!=null){PS.phase='done';watchPensDone(PS.k[0].filter(Boolean).length,PS.k[1].filter(Boolean).length)}else{PS.turn=1-PS.turn;nextKick()}return}
  if(w!=null){PS.phase='done';const sa=PS.k[0].filter(Boolean).length,sb=PS.k[1].filter(Boolean).length,[a,b]=M.score;
    finishUserMatch(a,b,[sa,sb],M.meta);
    renderPensHud(w===0?`${TM[M.ids[0]].name} win ${sa}–${sb}`:`${TM[M.ids[1]].name} win ${sb}–${sa}`,'');
    const ov=$('#overlay');ov.hidden=false;
    ov.innerHTML=`<p class="eyebrow">${esc(M.label)} · Penalties</p><h3>${sa}–${sb}</h3><p>${w===0?`${TM[M.ids[0]].name} go through on penalties.`:`${TM[M.ids[0]].name} are out on penalties.`}</p>${postButtons()}`;
    wirePost();$('#ovGo').focus();if(w===0)roar();return}
  PS.turn=1-PS.turn;nextKick();
}

/* =====================================================================
   TROPHY CELEBRATION (3D)
   ===================================================================== */
let CB=null;
function makeTrophy(){
  const g=new THREE.Group();
  const gold=new THREE.MeshStandardMaterial({color:0xf0c04a,metalness:1,roughness:.2,envMapIntensity:1.7});
  const deep=new THREE.MeshStandardMaterial({color:0xc4932a,metalness:1,roughness:.35,envMapIntensity:1.4});
  const green=new THREE.MeshStandardMaterial({color:0x0c6b45,metalness:.2,roughness:.22,envMapIntensity:1.2});
  const prof=[[0,0],[.21,0],[.215,.02],[.2,.035],[.2,.2],[.17,.23],[.13,.27],[.1,.33],[.09,.4],[.1,.47],[.13,.53],[.16,.58],[.17,.62],[.15,.66],[0,.66]];
  g.add(new THREE.Mesh(new THREE.LatheGeometry(prof.map(([r,y])=>new THREE.Vector2(r,y)),56),gold));
  for(const y of[.065,.155]){const ring=new THREE.Mesh(new THREE.CylinderGeometry(.207,.207,.045,56),green);ring.position.y=y;g.add(ring)}
  for(let k=0;k<3;k++){const pts=[];for(let i=0;i<=24;i++){const t=i/24,a=k/3*Math.PI*2+t*Math.PI*1.4,r=.12+Math.sin(t*Math.PI)*.08+t*.04;pts.push(new THREE.Vector3(Math.cos(a)*r,.22+t*.52,Math.sin(a)*r))}
    g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts),48,.032,10),gold))}
  const globe=new THREE.Mesh(new THREE.SphereGeometry(.16,40,28),gold);globe.position.y=.8;g.add(globe);
  for(let k=0;k<4;k++){const tor=new THREE.Mesh(new THREE.TorusGeometry(.161,.006,6,48),deep);tor.position.y=.8;tor.rotation.y=k*Math.PI/4;g.add(tor)}
  const eq=new THREE.Mesh(new THREE.TorusGeometry(.161,.006,6,48),deep);eq.position.y=.8;eq.rotation.x=Math.PI/2;g.add(eq);
  g.traverse(o=>{if(o.isMesh)o.castShadow=true});
  g.scale.setScalar(.95);return g;
}
function startCelebration(teamId,opts={}){
  if(!enterPlay('celebrate')){renderEnd();show('s-end');return}
  clearPlayers();clearExtras();
  const team=TM[teamId],kit=team.kit;
  setStadiumFor(teamId,teamId,'WORLD CHAMPIONS');
  const grp=new THREE.Group();R.scene.add(grp);R.extras.push(grp);
  const pod=new THREE.Mesh(new THREE.CylinderGeometry(4.2,4.6,.55,64),new THREE.MeshStandardMaterial({color:0x101724,roughness:.5,metalness:.4}));pod.position.y=.275;pod.receiveShadow=true;pod.castShadow=true;grp.add(pod);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(4.25,.07,8,80),new THREE.MeshStandardMaterial({color:0xf0c04a,metalness:1,roughness:.25}));rim.rotation.x=Math.PI/2;rim.position.y=.55;grp.add(rim);
  const cap=team.star,order=[cap,...[0,1,2,3,4,5,6].filter(i=>i!==cap)];
  CB={t:0,team,players:[],trophy:makeTrophy(),bursts:[],nextBurst:.4,spectator:!!opts.spectator};
  order.forEach((idx,k)=>{const d=team.players[idx];const p={x:0,y:0,vx:0,vy:0,fx:0,fy:1,kickT:0,slide:0,dive:null,celebrate:false,i:idx,role:d.role};
    if(k===0){p.x=0;p.y=.9}else{const a=(k-1)/5*Math.PI*.95+Math.PI*.025;p.x=Math.cos(a)*-2.6;p.y=-Math.sin(a)*1.5+.2}
    p.mesh=makePlayerMesh(d.role==='gk'?['#c6f24a','#151515','#c6f24a']:kit,d.num,d.key,d.role==='gk');R.meshes.push(p.mesh);CB.players.push(p)});
  grp.add(CB.trophy);
  const N=900,conf=new THREE.InstancedMesh(new THREE.PlaneGeometry(.14,.08),new THREE.MeshBasicMaterial({side:THREE.DoubleSide}),N);
  const palette=[kit[0],kit[1],'#f0c23b','#ffffff',kit[2]].map(c=>new THREE.Color(c));
  CB.conf=conf;CB.cd=[];CB.dm=new THREE.Object3D();
  for(let i=0;i<N;i++){const d={x:rnd(-14,14),y:rnd(2,22),z:rnd(-10,10),vy:rnd(1.2,2.6),r:rnd(0,6),vr:rnd(-5,5),ph:rnd(0,6)};CB.cd.push(d);conf.setColorAt(i,palette[i%palette.length]);CB.dm.position.set(d.x,d.y,d.z);CB.dm.updateMatrix();conf.setMatrixAt(i,CB.dm.matrix)}
  if(conf.instanceColor)conf.instanceColor.needsUpdate=true;grp.add(conf);
  R.ball.visible=false;
  const cel=$('#celeb'),bt=bootTable()[0];
  if(CB.spectator){
    cel.innerHTML=`<div><p class="eyebrow">You're on the pitch · New York New Jersey Stadium · 19 July 2026</p><h2>${esc(team.name)}</h2><p class="eyebrow">World Champions</p></div>
      <div class="btm"><p>${opts.presented?`You handed the trophy to ${esc(team.players[cap].name)}, and now they lift it high`:`${esc(team.players[cap].name)} lifts the trophy right in front of you`}${bt?` · Golden Boot: ${esc(pl(bt[0]).name)} (${bt[1].g})`:''}</p><div class="ov-actions"><button type="button" class="btn primary" id="celebHome">Fly home</button><button type="button" class="btn" id="celebSelect">Back to team select</button><button type="button" class="btn" id="celebGo">See the final standings</button></div></div>`;
    const endC=()=>{leavePlay();clearBursts();clearExtras();clearPlayers();CB=null;R.ball.visible=true;$('#celeb').hidden=true};
    $('#celebHome').onclick=()=>{endC();startExplore('airport')};
    $('#celebSelect').onclick=()=>{endC();leaveRun()};
    $('#celebGo').onclick=()=>{endC();renderEnd();show('s-end')};
    roar();clearTimeout(AU.rt);crowd(.45,1);return;
  }
  cel.innerHTML=`<div><p class="eyebrow">New York New Jersey Stadium · 19 July 2026</p><h2>${esc(team.name)}</h2><p class="eyebrow">World Champions</p></div>
    <div class="btm"><p>${esc(team.players[cap].name)} lifts the trophy${bt?` · Golden Boot: ${esc(pl(bt[0]).name)} (${bt[1].g})`:''}</p><div class="ov-actions"><button type="button" class="btn primary" id="celebHome">Fly home as champions</button><button type="button" class="btn" id="celebGo">See the final standings</button></div></div>`;
  const endCeleb=()=>{leavePlay();clearBursts();clearExtras();clearPlayers();CB=null;R.ball.visible=true;$('#celeb').hidden=true};
  $('#celebGo').onclick=()=>{endCeleb();renderEnd();show('s-end')};
  $('#celebHome').onclick=()=>{endCeleb();startExplore('airport')};
  roar();clearTimeout(AU.rt);crowd(.4,1);whistle(3);
}
function celebFrame(dt){
  const C=CB;if(!C)return;C.t+=dt;
  const pump=.5+.5*Math.sin(C.t*3.2);
  C.players.forEach((p,k)=>{
    if(k===0){animPlayer(p,dt,{y:.55,arms:-2.8-.3*pump});p.mesh.shs[0].rotation.z=-.22;p.mesh.shs[1].rotation.z=.22;
      C.trophy.position.set(p.x,.55+2.55+.2*pump,p.y+.12);C.trophy.rotation.y+=dt*.4}
    else{const j=Math.abs(Math.sin(C.t*5.5+k*1.3));animPlayer(p,dt,{y:.55+j*.35,arms:-2.6+Math.sin(C.t*6+k)*.4});p.mesh.root.rotation.y=Math.atan2(-p.x,6-p.y)}
  });
  const dm=C.dm;
  C.cd.forEach((d,i)=>{d.y-=d.vy*dt;d.r+=d.vr*dt;d.x+=Math.sin(C.t*1.3+d.ph)*dt*.6;if(d.y<.1){d.y=rnd(16,24);d.x=rnd(-14,14);d.z=rnd(-10,10)}
    dm.position.set(d.x,d.y,d.z);dm.rotation.set(d.r,d.r*.7,d.r*.3);dm.updateMatrix();C.conf.setMatrixAt(i,dm.matrix)});
  C.conf.instanceMatrix.needsUpdate=true;
  C.nextBurst-=dt;
  if(C.nextBurst<=0){C.nextBurst=rnd(.35,.8);const n=140,pos=new Float32Array(n*3),vel=[];
    const cx=rnd(-45,45),cy=rnd(32,48),cz=Math.random()<.5?rnd(-55,-30):rnd(30,50);
    for(let i=0;i<n;i++){const u=rnd(-1,1),th=rnd(0,Math.PI*2),r=Math.sqrt(1-u*u),s=rnd(9,13);vel.push(r*Math.cos(th)*s,u*s,r*Math.sin(th)*s);pos[i*3]=cx;pos[i*3+1]=cy;pos[i*3+2]=cz}
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pos,3));
    const colr=[C.team.kit[0],'#f0c23b','#ffffff',C.team.kit[1]][(Math.random()*4)|0];
    const pts=new THREE.Points(geo,new THREE.PointsMaterial({color:colr,size:1.3,map:R.glowTex,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending}));
    R.scene.add(pts);C.bursts.push({pts,vel,life:2});tone(70,.5,.12,'sine',35)}
  C.bursts=C.bursts.filter(bu=>{bu.life-=dt;const a=bu.pts.geometry.attributes.position;
    for(let i=0;i<a.count;i++){bu.vel[i*3+1]-=6*dt;a.array[i*3]+=bu.vel[i*3]*dt;a.array[i*3+1]+=bu.vel[i*3+1]*dt;a.array[i*3+2]+=bu.vel[i*3+2]*dt;bu.vel[i*3]*=.985;bu.vel[i*3+2]*=.985}
    a.needsUpdate=true;bu.pts.material.opacity=Math.max(0,bu.life/2);
    if(bu.life<=0){R.scene.remove(bu.pts);bu.pts.geometry.dispose();bu.pts.material.dispose();return false}return true});
  if(C.spectator){if(R.camera.fov!==58){R.camera.fov=58;R.camera.updateProjectionMatrix()}
    R.camera.position.set(Math.sin(C.t*.22)*2.2,1.7,8.6);R.camera.lookAt(0,2.4,0);R.crowdTex.offset.y=Math.sin(C.t*14)*.004;return}
  const k=Math.min(1,C.t/4),ease=1-Math.pow(1-k,3),ang=Math.sin(C.t*.25)*.9,rad=22-13*ease,hgt=9-5.3*ease;
  R.camera.position.set(Math.sin(ang)*rad,hgt,Math.cos(ang)*rad);R.camera.lookAt(0,2.3+.4*ease,0);
  R.crowdTex.offset.y=Math.sin(C.t*14)*.004;
}
function clearBursts(){if(CB)CB.bursts.forEach(bu=>{R.scene.remove(bu.pts);bu.pts.geometry.dispose();bu.pts.material.dispose()})}

/* =====================================================================
   OFF THE PITCH — tunnel, dressing room, driving, team hotel, airport, home
   Walk: W forward, A/D turn, S back. X (or Use) starts an activity.
   ===================================================================== */
const HOSTS=['New York New Jersey','Los Angeles','Dallas','Miami','Atlanta','Seattle','San Francisco Bay Area','Boston','Philadelphia','Kansas City','Houston','Toronto','Vancouver','Mexico City','Guadalajara','Monterrey'];
let EX=null,exMsgT=0;
const KEY=()=>touchMode?'Use':'X';
function curCity(){const l=S.log[S.log.length-1];return S.watchedFinal||(l&&l.label.includes('New York'))?'New York New Jersey':HOSTS[hash(S.user+':'+S.log.length)%HOSTS.length]}
const accent=t=>lum(t.kit[0])>.82?'#f0c23b':t.kit[0];
const onAcc=c=>lum(c)>.6?'#111111':'#ffffff';
function exMat(c,o={}){return new THREE.MeshStandardMaterial({color:c,roughness:o.r??.8,metalness:o.m??0,emissive:o.e??0x000000,emissiveIntensity:o.ei??1,transparent:o.op!=null,opacity:o.op??1,side:o.ds?THREE.DoubleSide:THREE.FrontSide})}
function B(w,h,d,c,x,y,z,o={}){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),exMat(c,o));m.position.set(x,y+h/2,z);if(o.ry)m.rotation.y=o.ry;EX.scene.add(m);
  if(o.solid)EX.walls.push({x0:x-w/2,x1:x+w/2,z0:z-d/2,z1:z+d/2});return m}
function sign(text,x,y,z,w,h,ry=0,o={}){
  const cw=1024,ch=Math.max(64,Math.round(cw*h/w)),c=document.createElement('canvas');c.width=cw;c.height=ch;const g=c.getContext('2d');
  g.fillStyle=o.bg||'#0b1310';g.fillRect(0,0,cw,ch);
  const lines=String(text).split('\n'),fs=Math.min(ch*(o.size||.62)/lines.length,cw*1.75/Math.max(...lines.map(l=>l.length)));
  g.fillStyle=o.fg||'#f0c23b';g.font=`800 ${fs}px "Big Shoulders Display",Impact,sans-serif`;g.textAlign=o.align||'center';g.textBaseline='middle';
  lines.forEach((l,i)=>{const hl=o.hl&&l.includes(o.hl);if(hl)g.fillStyle=o.hlc||'#ffffff';g.fillText(l,o.align==='left'?cw*.05:cw/2,ch/2+(i-(lines.length-1)/2)*fs*1.08);if(hl)g.fillStyle=o.fg||'#f0c23b'});
  const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;
  const m=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:t,side:THREE.DoubleSide}));m.position.set(x,y,z);m.rotation.y=ry;EX.scene.add(m);return m}
function item(x,z,label,act,r=2,cond){const it={x,z,r,label,act,cond};EX.items.push(it);return it}
function person(kit,num,seed,x,z,face,o={}){const p={x,y:z,vx:0,vy:0,fx:Math.cos(face),fy:Math.sin(face),kickT:0,slide:0,dive:null,o};
  p.mesh=makePlayerMesh(kit,num,seed,false,{scene:EX.scene,scale:1,trousers:o.trousers});EX.people.push(p);return p}
function carMesh(col){const g=new THREE.Group(),dark=exMat('#14181f',{m:.3,r:.2}),tyre=exMat('#111111'),wheels=[];
  const body=new THREE.Mesh(new THREE.BoxGeometry(4.3,.75,1.85),exMat(col,{m:.55,r:.3}));body.position.y=.6;g.add(body);
  const cab=new THREE.Mesh(new THREE.BoxGeometry(2.2,.6,1.65),dark);cab.position.set(-.2,1.25,0);g.add(cab);
  for(const sx of[-1.4,1.4])for(const sz of[-.95,.95]){const w=new THREE.Mesh(new THREE.CylinderGeometry(.34,.34,.25,14),tyre);w.rotation.x=Math.PI/2;w.position.set(sx,.34,sz);g.add(w);wheels.push(w)}
  for(const sz of[-.6,.6]){const hl=new THREE.Mesh(new THREE.BoxGeometry(.05,.18,.4),exMat('#ffffff',{e:0xfff3c0,ei:1.5}));hl.position.set(2.16,.7,sz);g.add(hl);
    const tl=new THREE.Mesh(new THREE.BoxGeometry(.05,.15,.4),exMat('#ff2020',{e:0xff1010,ei:1}));tl.position.set(-2.16,.7,sz);g.add(tl)}
  return{g,wheels}}
function car(x,z,col,alongZ){const{g}=carMesh(col);g.position.set(x,0,z);if(alongZ)g.rotation.y=Math.PI/2;EX.scene.add(g);
  EX.walls.push(alongZ?{x0:x-1,x1:x+1,z0:z-2.25,z1:z+2.25}:{x0:x-2.25,x1:x+2.25,z0:z-1,z1:z+1});return g}
function pointLight(x,y,z,i=.9,d=12,c=0xfff0dc){const l=new THREE.PointLight(c,i,d);l.position.set(x,y,z);EX.scene.add(l)}
function exMsg(t){const el=$('#exMsg');el.textContent=t;el.hidden=false;clearTimeout(exMsgT);exMsgT=setTimeout(()=>el.hidden=true,4500)}
function flash(){const f=$('#flash');f.hidden=false;f.style.transition='none';f.style.opacity='1';void f.offsetWidth;f.style.transition='opacity .35s';f.style.opacity='0';setTimeout(()=>f.hidden=true,380)}
function cutscene(k,t,ms,done){const c=$('#cut'),bar=$('#cutBar');c.hidden=false;$('#cutK').textContent=k;$('#cutT').textContent=t;
  bar.style.transition='none';bar.style.width='0';void bar.offsetWidth;bar.style.transition=`width ${ms}ms linear`;bar.style.width='100%';
  if(EX)EX.paused=true;setTimeout(()=>{c.hidden=true;if(EX)EX.paused=false;done()},ms)}
function toHub(){leavePlay();renderHub();show('s-hub')}
function toEnd(){leavePlay();renderEnd();show('s-end')}
function choice(title,text,opts){
  EX.paused=true;const ov=$('#overlay');ov.hidden=false;
  ov.innerHTML=`<p class="eyebrow">${esc(title)}</p><p style="font-size:20px;max-width:46ch">${esc(text)}</p><div class="ov-actions" style="flex-direction:column;align-items:stretch;width:min(460px,100%)">${opts.map((o,i)=>`<button type="button" class="btn${i?'':' primary'}" data-i="${i}">${esc(o.label)}</button>`).join('')}</div>`;
  ov.querySelectorAll('button').forEach(b=>b.onclick=()=>{const o=opts[+b.dataset.i];
    if(o.reply){ov.innerHTML=`<p class="eyebrow">${esc(title)}</p><p style="font-size:20px;max-width:46ch">${esc(o.reply)}</p><div class="ov-actions"><button type="button" class="btn primary" id="ovGo">OK</button></div>`;$('#ovGo').onclick=()=>closeChoice(o);$('#ovGo').focus()}
    else closeChoice(o)});
  ov.querySelector('button').focus()}
function closeChoice(o){$('#overlay').hidden=true;EX.paused=false;if(EX.activity)endActivity();if(o.fn)o.fn()}

/* ---------- activities: what pressing X actually does ---------- */
function startActivity(a){EX.activity=Object.assign({t:0,n:0,prog:0,fin:false},a);$('#actHud').hidden=false;$('#actT').textContent=a.title;$('#exPrompt').hidden=true;$('#actBar').style.width='0';if(a.start)a.start(EX.activity)}
function endActivity(){const A=EX.activity;EX.activity=null;$('#actHud').hidden=true;keys.d=0;if(A&&A.end)A.end(A)}
function activityFrame(dt){
  const A=EX.activity;A.t+=dt;
  if(!EX.paused){
    if(A.taps){if(EX.act){A.n=Math.min(A.taps,A.n+1);if(A.onTap)A.onTap(A);tone(320+A.n*45,.08,.06,'triangle')}A.prog=A.n/A.taps}
    else if(A.hold){if(keys.u||joy.y<-.3||keys.shoot){A.n+=dt;if(A.onHold)A.onHold(A,dt)}A.prog=A.n/A.hold}
    else if(A.dur)A.prog=Math.min(1,A.t/A.dur);
  }
  EX.act=false;
  if(A.update)A.update(A,dt);
  const k=1-Math.exp(-dt*4);EX.camPos.lerp(R.tmpV.set(...A.cam),k);EX.camLook.lerp(R.tmpL.set(...A.look),k);
  R.camera.position.copy(EX.camPos);R.camera.lookAt(EX.camLook);
  $('#actBar').style.width=Math.min(100,A.prog*100)+'%';$('#actH').textContent=typeof A.hint==='function'?A.hint(A):(A.hint||'');
  if(A.prog>=1&&!A.fin){A.fin=true;setTimeout(()=>{if(EX&&EX.activity===A){endActivity();if(A.done)A.done(A)}},A.linger??450)}
  else if(keys.d&&A.cancel!==false&&!A.fin&&!EX.paused)endActivity();
}
function startExplore(kind){
  if(!enterPlay('explore'))return;
  dropExploreScene();
  const sc=new THREE.Scene();sc.environment=R.scene.environment;
  EX={kind,scene:sc,walls:[],circles:[],items:[],upd:[],people:[],p:{x:0,z:0,yaw:0,bob:0},act:false,t:0,paused:false,crowd:0,activity:null,camPos:new THREE.Vector3(),camLook:new THREE.Vector3()};
  const[k,arg]=kind.split(':');
  ({tunnel:buildTunnel,hotel:buildHotel,airport:buildAirport,arrival:buildArrival,home:buildHome,village:buildVillage,vip:buildVIP,drive:()=>buildDrive(arg)})[k]();
  $('#exPlace').textContent=EX.place;$('#exGoal').textContent=EX.goal;$('#exMsg').hidden=true;$('#actHud').hidden=true;
  crowd(EX.crowd,1);
}
function dropExploreScene(){if(EX&&EX.stairs)setStands(true);if(EX&&EX.scene){if(EX.inMain)R.scene.remove(EX.scene);disposeTree(EX.scene);EX.scene=null}}
function exploreFrame(dt){
  EX.t+=dt;
  if(EX.drive){driveFrame(dt);EX.act=false;return}
  EX.upd.forEach(f=>f(dt));
  for(const p of EX.people)animPlayer(p,dt,p.o);
  const port=R.camera.aspect<1,fov=port?85:70;if(R.camera.fov!==fov){R.camera.fov=fov;R.camera.updateProjectionMatrix()}
  if(EX.activity){activityFrame(dt);return}
  const P=EX.p;let fw=0;
  if(!EX.paused){
    const turn=clamp(keys.r-keys.l+joy.x,-1,1);fw=clamp(keys.u-keys.d-joy.y,-1,1);
    P.yaw+=turn*2.3*dt;
    const sp=EX.swim?1.9:(keys.sprint?6.5:3.6)*(fw<0?.6:1);
    let nx=P.x+Math.cos(P.yaw)*fw*sp*dt,nz=P.z+Math.sin(P.yaw)*fw*sp*dt;
    if(EX.swim){const q=EX.swim;nx=clamp(nx,q.x0,q.x1);nz=clamp(nz,q.z0,q.z1)}
    else for(const w of EX.walls){const cx=clamp(nx,w.x0,w.x1),cz=clamp(nz,w.z0,w.z1),dx=nx-cx,dz=nz-cz,d=Math.hypot(dx,dz);
      if(d<.35){if(d>1e-4){nx=cx+dx/d*.35;nz=cz+dz/d*.35}else{nx=P.x;nz=P.z}}}
    if(EX.valid&&!EX.valid(nx,nz)){if(EX.valid(nx,P.z))nz=P.z;else if(EX.valid(P.x,nz))nx=P.x;else{nx=P.x;nz=P.z}}
    P.x=nx;P.z=nz;P.bob+=dt*Math.abs(fw)*(EX.swim?3:9);
  }
  const pr=$('#exPrompt');
  if(EX.swim){swimTick();pr.hidden=EX.paused;pr.innerHTML=`<kbd>${KEY()}</kbd>Climb out of the pool (${EX.swim.len} lengths swum)`;if(EX.act&&!EX.paused)climbOut()}
  else{
    let best=null,bd=1e9;for(const it of EX.items){if(it.cond&&!it.cond())continue;const d=Math.hypot(it.x-P.x,it.z-P.z);if(d<it.r&&d<bd){bd=d;best=it}}
    pr.hidden=!best||EX.paused;if(best)pr.innerHTML=`<kbd>${KEY()}</kbd>${esc(best.label)}`;
    if(EX.act&&best&&!EX.paused)best.act();
  }
  EX.act=false;
  const eye=EX.swim?.62+Math.sin(EX.t*2.2)*.05:(EX.floorAt?EX.floorAt(P.x,P.z):EX.floorY||0)+1.65+Math.sin(P.bob)*.03;
  R.camera.position.set(P.x,eye,P.z);EX.camLook.set(P.x+Math.cos(P.yaw)*5,eye-(EX.swim?0:.3),P.z+Math.sin(P.yaw)*5);R.camera.lookAt(EX.camLook);EX.camPos.copy(R.camera.position);
}

/* ---------- 1. tunnel, dressing room, mixed zone, car park ---------- */
function coachLines(){const l=S.log[S.log.length-1],out=S.stage==='out';
  if(out)return['Heads up. Look at me.','Nobody in this room has anything to be ashamed of.','You gave this country a summer to remember.','Go home, hug your families. I\'m proud of you.'];
  if(l.gf>l.ga||(l.pens&&l.pens[0]>l.pens[1]))return['Good. Really good.','Enjoy it tonight, but only tonight.','Ice baths when we get back to the hotel.','Next game is the most important one.'];
  if(l.gf===l.ga)return['A point. Not what we wanted.','We were sloppy in the final third.','Rest, recover, and we fix it in training.','We are still in this.'];
  return['That hurt. It should hurt.','We switched off and they punished us.','Learn from it tonight, then let it go.','We go again. Together.']}
function buildTunnel(){
  const u=TM[S.user],l=S.log[S.log.length-1],dest=S.stage==='out'?'airport':'hotel',acc=accent(u),sc=EX.scene;
  EX.place=`${curCity()} · Players' tunnel`;
  EX.goal=`Shower and change in the dressing room, talk to the press, then get in your car and drive to the ${dest==='hotel'?'team hotel':'airport'}.`;
  EX.skip=()=>{EX.leaving=true;startExplore('drive:'+dest)};EX.crowd=.06;
  sc.background=new THREE.Color(0x07090d);sc.fog=new THREE.Fog(0x07090d,28,80);
  sc.add(new THREE.HemisphereLight(0xcfd8ff,0x1a1a1a,.5));
  B(4.6,.1,34,'#23272e',0,-.1,-14);B(4.6,.2,34,'#0d1117',0,3.4,-14);
  B(.3,3.4,32,'#1c2836',2.45,0,-14,{solid:true});
  B(.3,3.4,9.2,'#1c2836',-2.45,0,-2.4,{solid:true});B(.3,3.4,20.8,'#1c2836',-2.45,0,-19.6,{solid:true});B(.3,1.2,2.4,'#1c2836',-2.45,2.2,-8);
  B(.04,.22,32,acc,2.29,1.1,-14,{e:acc,ei:.35});B(.04,.22,9.2,acc,-2.29,1.1,-2.4,{e:acc,ei:.35});B(.04,.22,20.8,acc,-2.29,1.1,-19.6,{e:acc,ei:.35});
  for(let z=-1;z>-30;z-=3.5)B(2,.05,.3,'#ffffff',0,3.33,z,{e:0xffffff});
  for(let z=-2;z>-30;z-=8)pointLight(0,3,z,.9,11);
  B(4.6,3.4,.2,'#ffffff',0,0,2.3,{e:0xe8ffe8,ei:1.2,solid:true});
  sign(`FULL TIME  ·  ${u.name.toUpperCase()} ${l.gf}–${l.ga} ${TM[l.opp].name.toUpperCase()}${l.pens?`  (${l.pens[0]}–${l.pens[1]} PENS)`:''}`,0,2.85,-4,4,.42,0,{fg:'#ffffff'});
  sign('TO THE CAR PARK',0,2.85,-24,3,.42,0);
  sign(`${u.name.toUpperCase()} DRESSING ROOM`,-2.28,2.95,-8,2.2,.3,Math.PI/2);
  // dressing room
  B(8.4,.1,9,'#3a4250',-6.8,-.1,-8.5);B(8.4,.2,9,'#151a22',-6.8,3.4,-8.5);
  B(.3,3.4,9,'#e2ddd2',-11,0,-8.5,{solid:true});B(8.4,3.4,.3,'#e2ddd2',-6.8,0,-13,{solid:true});B(8.4,3.4,.3,'#e2ddd2',-6.8,0,-4,{solid:true});
  pointLight(-6.8,3,-8.5,.9,12);
  let myShirt=null,myZ=-8;
  u.players.forEach((pp,i)=>{const z=-5-i*1.2;B(.6,2.3,1.08,'#2a3342',-10.55,0,z);
    const sh=B(.05,.85,.7,u.kit[0],-10.22,.95,z);if(i===S.me){myShirt=sh;myZ=z}
    sign(String(pp.num),-10.18,1.38,z,.32,.28,Math.PI/2,{bg:u.kit[0],fg:onAcc(u.kit[0])});
    sign(pp.short.toUpperCase(),-10.18,2.05,z,.95,.16,Math.PI/2,{bg:'#111111',fg:'#ffffff',size:.75})});
  B(1,.45,7,'#7a5432',-8.1,0,-8.5,{solid:true});
  B(.1,2.5,1.7,'#5f7f96',-4.5,0,-5,{r:.2});B(1.8,2.5,.1,'#7fa4bf',-3.6,0,-5.9,{op:.35,r:.1});B(1,.02,1,'#3d566a',-3.5,0,-4.8);B(.22,.08,.22,'#cccccc',-3.5,2.35,-4.6,{m:.8,r:.2});
  person(['#1f2533','#1f2533','#111111'],'','coach',-4.2,-11.8,Math.PI,{trousers:'#1f2533'});
  item(-3.6,-5.2,'Take a shower',()=>startActivity({title:'Shower',cam:[-3.55,1.6,-5.5],look:[-3.5,2.45,-4.4],dur:4,
    hint:'Hot water. Recovery starts now.',start:A=>{const n=220,pos=new Float32Array(n*3);for(let i=0;i<n;i++){pos[i*3]=-3.5+rnd(-.25,.25);pos[i*3+1]=rnd(0,2.3);pos[i*3+2]=-4.6+rnd(-.25,.25)}
      const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(pos,3));A.drops=new THREE.Points(g,new THREE.PointsMaterial({color:0x4aa6ff,size:.06,transparent:true,opacity:.9}));sc.add(A.drops);tone(200,3.6,.02,'sawtooth',180)},
    update:A=>{const a=A.drops.geometry.attributes.position;for(let i=0;i<a.count;i++){a.array[i*3+1]-=.12;if(a.array[i*3+1]<0)a.array[i*3+1]=2.3}a.needsUpdate=true},
    end:A=>{sc.remove(A.drops);A.drops.geometry.dispose()},done:()=>{EX.showered=true;exMsg('Clean and warm. Your tracksuit is in your locker.')}}),1.7);
  item(-9.3,myZ,'Change into your tracksuit',()=>startActivity({title:'Getting changed',cam:[-8.8,1.6,myZ],look:[-10.3,1.2,myZ],dur:2.6,hint:'Kit off, tracksuit on, boots in the bag.',
    done:()=>{myShirt.material.color.set('#1f2533');EX.changed=true;exMsg('Tracksuit on. Your match shirt goes in the bag as a keepsake.')}}),1.6,()=>!EX.changed);
  item(-5.2,-10.8,'Sit down and listen to the coach',()=>{const lines=coachLines();startActivity({title:'Team talk',cam:[-7.6,1.25,-9.6],look:[-4.2,1.5,-11.8],dur:lines.length*2.2,
    hint:A=>`Coach: "${lines[Math.min(lines.length-1,Math.floor(A.t/2.2))]}"`,done:()=>exMsg('The room claps. Bags on shoulders, everyone heads for the cars.')})},2.2);
  // mixed zone
  sign('MIXED ZONE\nWORLD CUP 2026',2.28,1.75,-15,3,1.5,-Math.PI/2,{bg:'#12304f',fg:'#ffffff'});
  person(['#59606b','#2a2f3a','#111111'],'','rep1',1.75,-14.2,Math.PI,{trousers:'#2a2f3a'});
  person(['#7a2e35','#222831','#111111'],'','rep2',1.75,-15.8,Math.PI,{trousers:'#222831'});
  item(.8,-15,'Talk to the reporters',pressConference,2);
  sign(u.name.toUpperCase(),2.28,1.6,-22,2.2,1,-Math.PI/2,{bg:u.kit[0],fg:onAcc(u.kit[0])});
  // car park
  B(36,.1,32,'#3b3f45',0,-.1,-46);B(36,.2,32,'#25282d',0,3.8,-46);
  B(15.5,3.8,.3,'#4a4e55',-10.35,0,-30,{solid:true});B(15.5,3.8,.3,'#4a4e55',10.35,0,-30,{solid:true});
  B(36,3.8,.3,'#4a4e55',0,0,-62,{solid:true});B(.3,3.8,32,'#4a4e55',-18,0,-46,{solid:true});B(.3,3.8,32,'#4a4e55',18,0,-46,{solid:true});
  for(const x of[-12,-6,6,12])for(const z of[-40,-52])B(.6,3.8,.6,'#70757c',x,0,z,{solid:true});
  for(const x of[-9,9])for(const z of[-36,-46,-56]){pointLight(x,3.4,z,.7,14);B(2,.05,.3,'#ffffff',x,3.72,z,{e:0xffffff})}
  for(let x=-16;x<=16;x+=3){B(.08,.01,4.6,'#e6e6e6',x,0,-33.5);B(.08,.01,4.6,'#e6e6e6',x,0,-58.5)}
  const cols=['#2b4d7a','#8a8f96','#1f1f22','#b9bec4','#6b1f24','#e4e4e4','#244a35','#4a4f57'];
  [-16.5,-13.5,-10.5,-7.5,4.5,7.5,10.5,13.5].forEach((x,i)=>{car(x,-34,cols[i],true);if(i%2===0)car(x+1.5,-58.3,cols[(i+3)%8],true)});
  car(9,-46,acc,false);
  const ring=new THREE.Mesh(new THREE.RingGeometry(2.8,3.1,48),new THREE.MeshBasicMaterial({color:0xf0c23b,side:THREE.DoubleSide}));ring.rotation.x=-Math.PI/2;ring.position.set(9,.03,-46);sc.add(ring);
  const tag=sign('YOUR CAR',9,2.7,-46,2.4,.5,0,{bg:'#f0c23b',fg:'#0b1310'});EX.upd.push(()=>{tag.position.y=2.7+Math.sin(EX.t*3)*.08});
  sign('EXIT',0,2.6,-61.8,2,.5,0,{bg:'#1f6b3a',fg:'#ffffff'});
  item(9,-46,`Get in your car and drive to the ${dest==='hotel'?'team hotel':'airport'}`,()=>{EX.leaving=true;startExplore('drive:'+dest)},3.4);
  EX.p={x:0,z:.8,yaw:-Math.PI/2,bob:0};
}
function pressConference(){
  const l=S.log[S.log.length-1],out=S.stage==='out',won=l.gf>l.ga||(l.pens&&l.pens[0]>l.pens[1]),me=TM[S.user].players[S.me];
  startActivity({title:'Mixed zone',cam:[.7,1.65,-15],look:[1.75,1.45,-15],cancel:false,update:()=>{if(Math.random()<.025)flash()}});
  const q=out?'Your tournament is over. What do you say to the fans back home?':won?'Big result tonight. How are you feeling?':l.gf===l.ga?'A draw tonight. Are you happy with a point?':'A tough defeat. What went wrong?';
  choice('Mixed zone',`"${me.short}, over here! ${q}"`,[
    {label:'Credit the team',reply:out?'"Thank you for every message. We gave everything for this shirt."':'"It\'s about the whole squad. Everyone ran for each other."'},
    {label:'Talk up the next game',reply:out?'"We\'ll be back. This group has a future."':'"We\'re not finished. Watch us in the next one."'},
    {label:'Crack a joke',reply:'"Mostly I\'m thinking about dinner." The reporters laugh. That clip will be everywhere by morning.'},
    {label:'Walk past without talking',reply:'You keep your headphones on and walk straight past the cameras.'}]);
}

/* ---------- 2. driving ---------- */
function windowTex(){const c=document.createElement('canvas');c.width=128;c.height=256;const g=c.getContext('2d');g.fillStyle='#141a28';g.fillRect(0,0,128,256);
  for(let y=6;y<250;y+=14)for(let x=6;x<122;x+=14)if(Math.random()<.5){g.fillStyle=Math.random()<.8?'#ffd98a':'#9fd3ff';g.fillRect(x,y,7,8)}
  const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;t.wrapS=t.wrapT=THREE.RepeatWrapping;return t}
function buildDrive(dest){
  const u=TM[S.user],acc=accent(u),sc=EX.scene,city=dest==='home'?u.capital:dest==='stadium'?'New York New Jersey':curCity();
  const where=dest==='hotel'?'the team hotel':dest==='airport'?'the airport':dest==='stadium'?'New York New Jersey Stadium':'your house';
  EX.drive=true;EX.dest=dest;EX.cockpit=false;
  EX.place=dest==='home'?`${u.capital} · Driving home`:`${city} · Driving to ${where}`;
  EX.goal=`Follow the gold arrow to ${where}. ${touchMode?'Stick up to drive, down to brake, left and right to steer.':'W to drive, S to brake or reverse, A and D to steer, C to change camera.'}`;
  EX.skip=arriveDrive;EX.crowd=0;
  sc.background=new THREE.Color(0x0a1022);sc.fog=new THREE.Fog(0x0a1022,70,280);
  sc.add(new THREE.HemisphereLight(0x9fb4ff,0x1a2214,.55));const moon=new THREE.DirectionalLight(0xc8d4ff,.45);moon.position.set(-40,80,30);sc.add(moon);
  B(1400,.1,1400,'#16261a',0,-.15,-320,{r:1});
  const s=dest==='airport'?-1:1;
  const pts=[[0,0],[0,-130],[90*s,-220],[90*s,-370],[-30*s,-490],[-30*s,-620]];
  EX.route=pts;EX.wp=1;
  const road=exMat('#2c2f35',{r:.95}),dash=exMat('#e8e2c8',{e:0x555544,ei:.4}),pole=exMat('#3a3f48'),lamp=exMat('#fff4d0',{e:0xffe8b0,ei:1.4});
  const winT=windowTex(),bmats=['#2b3142','#353b4d','#2a2f3a','#3d3a44'].map(c=>new THREE.MeshStandardMaterial({color:c,roughness:.8,emissive:0xffffff,emissiveMap:winT,emissiveIntensity:.55,map:winT}));
  for(let i=0;i<pts.length-1;i++){
    const[x1,z1]=pts[i],[x2,z2]=pts[i+1],dx=x2-x1,dz=z2-z1,L=Math.hypot(dx,dz),ang=Math.atan2(dz,dx),nx=-dz/L,nz=dx/L;
    const rm=new THREE.Mesh(new THREE.BoxGeometry(L,.06,11),road);rm.position.set((x1+x2)/2,0,(z1+z2)/2);rm.rotation.y=-ang;sc.add(rm);
    const j=new THREE.Mesh(new THREE.CylinderGeometry(5.5,5.5,.06,24),road);j.position.set(x1,0,z1);sc.add(j);
    for(let d=4;d<L-4;d+=9){const m=new THREE.Mesh(new THREE.BoxGeometry(4,.07,.25),dash);m.position.set(x1+dx/L*d,.01,z1+dz/L*d);m.rotation.y=-ang;sc.add(m)}
    for(let d=10;d<L;d+=34)for(const sd of[-1,1]){const px=x1+dx/L*d+nx*7*sd,pz=z1+dz/L*d+nz*7*sd;
      const pm=new THREE.Mesh(new THREE.CylinderGeometry(.12,.15,6,8),pole);pm.position.set(px,3,pz);sc.add(pm);
      const lm=new THREE.Mesh(new THREE.BoxGeometry(.9,.2,.5),lamp);lm.position.set(px-nx*.6*sd,6,pz-nz*.6*sd);sc.add(lm);EX.circles.push({x:px,z:pz,r:.35})}
    for(let d=12;d<L-6;d+=24)for(const sd of[-1,1]){const off=19+rnd(0,10),w=rnd(9,15),dd=rnd(9,15),h=rnd(10,46),bx=x1+dx/L*d+nx*off*sd,bz=z1+dz/L*d+nz*off*sd;
      const bg=new THREE.BoxGeometry(w,h,dd),m=new THREE.Mesh(bg,bmats[(Math.random()*4)|0]);
      m.material.map.repeat&&0;m.position.set(bx,h/2,bz);m.rotation.y=-ang;sc.add(m);EX.circles.push({x:bx,z:bz,r:Math.max(w,dd)*.55})}
  }
  const[ex,ez]=pts[pts.length-1],[px2,pz2]=pts[pts.length-2],dl=Math.hypot(ex-px2,ez-pz2),fx=(ex-px2)/dl,fz=(ez-pz2)/dl;
  const dx_=ex+fx*26,dz_=ez+fz*26;EX.destPt={x:ex+fx*8,z:ez+fz*8};
  const land=new THREE.Group();land.position.set(dx_,0,dz_);land.rotation.y=-Math.atan2(fz,fx)+Math.PI/2;sc.add(land);
  const add=(geo,c,x,y,z,o={})=>{const m=new THREE.Mesh(geo,exMat(c,o));m.position.set(x,y,z);land.add(m);return m};
  if(dest==='hotel'){add(new THREE.BoxGeometry(26,42,18),'#3a4256',0,21,0);const w=new THREE.Mesh(new THREE.BoxGeometry(26.1,42,18.1),bmats[0]);w.position.y=21;land.add(w);
    add(new THREE.BoxGeometry(10,4,.4),acc,0,2,-9.3,{e:acc,ei:.4})}
  else if(dest==='airport'){add(new THREE.BoxGeometry(70,12,24),'#8fa3b8',0,6,0,{m:.4,r:.3});add(new THREE.BoxGeometry(70.2,4,24.2),'#5fa8e0',0,8,0,{e:0x2a6fa8,ei:.4,op:.8});
    add(new THREE.CylinderGeometry(2,2.6,30,12),'#c9d1da',40,15,6);add(new THREE.CylinderGeometry(4.5,3.5,4,12),'#5fa8e0',40,32,6,{e:0x2a6fa8,ei:.5})}
  else if(dest==='stadium'){add(new THREE.CylinderGeometry(55,62,30,56,1,true),'#2a3142',0,15,40,{ds:true});
    const ring=add(new THREE.TorusGeometry(56,.9,8,72),'#ffffff',0,30,40,{e:0xffffff,ei:1.6});ring.rotation.x=Math.PI/2;
    for(let k=0;k<4;k++){const a=k/4*Math.PI*2+Math.PI/4;add(new THREE.BoxGeometry(8,4,1),'#fffbea',Math.cos(a)*62,42,40+Math.sin(a)*62,{e:0xfffbea,ei:1.4})}
    add(new THREE.BoxGeometry(14,5,.6),'#8a1020',0,2.5,-14,{e:0x8a1020,ei:.3})}
  else{add(new THREE.BoxGeometry(12,6,10),'#d8c8a8',0,3,0);const roof=add(new THREE.ConeGeometry(9,5,4),'#7a3b2e',0,8.5,0);roof.rotation.y=Math.PI/4;
    add(new THREE.BoxGeometry(1.6,2.6,.2),'#5a3b24',0,1.3,-5.1);add(new THREE.BoxGeometry(1.8,1.4,.2),'#ffd98a',-3.5,3.5,-5.1,{e:0xffc870,ei:.9});add(new THREE.BoxGeometry(1.8,1.4,.2),'#ffd98a',3.5,3.5,-5.1,{e:0xffc870,ei:.9});
    add(new THREE.BoxGeometry(18,.05,8),'#2f6b3a',0,.03,-10);add(new THREE.BoxGeometry(.1,5,.1),'#dddddd',-7,2.5,-7);
    const fl=add(new THREE.BoxGeometry(.05,1.2,1.8),u.kit[0],-7,4.3,-6.1,{ds:true});EX.upd.push(()=>{fl.rotation.y=Math.sin(EX.t*3)*.3})}
  const signTxt=dest==='hotel'?`${u.name.toUpperCase()} TEAM HOTEL`:dest==='airport'?'AIRPORT · DEPARTURES':dest==='stadium'?'NEW YORK NEW JERSEY STADIUM':'HOME';
  const st=sign(signTxt,0,0,0,dest==='home'?5:14,dest==='home'?1:2,0,{bg:dest==='airport'?'#123a6b':'#0b1310',fg:dest==='airport'?'#ffffff':'#f0c23b'});
  sc.remove(st);st.position.set(0,dest==='home'?6.3:dest==='airport'?14:dest==='stadium'?8:4.6,dest==='home'?-5.2:dest==='airport'?-12.2:dest==='stadium'?-14.4:-9.6);st.rotation.y=Math.PI;land.add(st);
  const goalRing=new THREE.Mesh(new THREE.RingGeometry(5,5.8,48),new THREE.MeshBasicMaterial({color:0xf0c23b,side:THREE.DoubleSide}));goalRing.rotation.x=-Math.PI/2;goalRing.position.set(EX.destPt.x,.08,EX.destPt.z);sc.add(goalRing);
  EX.upd.push(()=>{goalRing.scale.setScalar(1+Math.sin(EX.t*4)*.06)});
  if(dest==='hotel'||dest==='airport'){const st2=new THREE.Mesh(new THREE.CylinderGeometry(55,60,26,48,1,true),exMat('#2a3142',{ds:true}));st2.position.set(0,13,75);sc.add(st2);
    const lights=new THREE.Mesh(new THREE.TorusGeometry(56,.8,8,64),exMat('#ffffff',{e:0xffffff,ei:1.5}));lights.rotation.x=Math.PI/2;lights.position.set(0,26,75);sc.add(lights)}
  else{const t=new THREE.Mesh(new THREE.BoxGeometry(60,12,20),exMat('#8fa3b8',{m:.4}));t.position.set(0,6,40);sc.add(t)}
  // traffic in the other lane
  EX.traffic=[];const tcols=['#8a8f96','#2b4d7a','#b9bec4','#6b1f24','#1f1f22','#e4e4e4'];
  for(let i=0;i<6;i++){const{g,wheels}=carMesh(tcols[i]);sc.add(g);EX.traffic.push({g,wheels,seg:pts.length-2-(i%(pts.length-1)),t:rnd(0,1),v:rnd(11,15)})}
  // your car
  const{g,wheels}=carMesh(acc);sc.add(g);EX.car={x:2.5,z:-4,h:-Math.PI/2,v:0,g,wheels,bump:0};
  const sh=new THREE.Shape();sh.moveTo(2.2,0);sh.lineTo(-1,1.6);sh.lineTo(-.3,0);sh.lineTo(-1,-1.6);sh.lineTo(2.2,0);
  const arrow=new THREE.Group(),chev=new THREE.Mesh(new THREE.ShapeGeometry(sh),new THREE.MeshBasicMaterial({color:0xf0c23b,transparent:true,opacity:.9,side:THREE.DoubleSide,depthWrite:false}));chev.rotation.x=-Math.PI/2;arrow.add(chev);sc.add(arrow);EX.arrow=arrow;
  R.camera.position.set(2.5,4,4);EX.camPos.set(2.5,4,4);EX.camLook.set(2.5,1,-10);
}
function driveFrame(dt){
  const C=EX.car,P=EX.route;
  EX.upd.forEach(f=>f(dt));
  if(!EX.paused&&!EX.leaving){
    const thr=clamp(keys.u-keys.d-joy.y,-1,1),steer=clamp(keys.r-keys.l+joy.x,-1,1);
    if(thr>0)C.v+=thr*(C.v<0?16:8.5)*dt;else if(thr<0)C.v+=thr*(C.v>0?16:5)*dt;else C.v*=Math.exp(-.5*dt);
    C.v=clamp(C.v*Math.exp(-.12*dt),-8,31);
    C.h+=steer*clamp(C.v/9,-1,1)*1.45*dt;
    let nx=C.x+Math.cos(C.h)*C.v*dt,nz=C.z+Math.sin(C.h)*C.v*dt;
    C.bump=Math.max(0,C.bump-dt);
    const hit=(cx,cz,r)=>{const dx=nx-cx,dz=nz-cz,d=Math.hypot(dx,dz);if(d<r&&d>1e-4){nx=cx+dx/d*r;nz=cz+dz/d*r;C.v*=.45;if(!C.bump){C.bump=.6;thump(1);tone(90,.2,.12,'square',50)}}};
    for(const c of EX.circles)hit(c.x,c.z,c.r+1.7);
    for(const t of EX.traffic)hit(t.g.position.x,t.g.position.z,3.2);
    C.x=nx;C.z=nz;
  }
  C.g.position.set(C.x,0,C.z);C.g.rotation.y=-C.h;C.wheels.forEach(w=>w.rotation.y+=C.v*dt/.34);
  for(const t of EX.traffic){t.t-=t.v*dt/Math.hypot(P[t.seg+1][0]-P[t.seg][0],P[t.seg+1][1]-P[t.seg][1]);
    if(t.t<0){t.seg--;t.t=1;if(t.seg<0){t.seg=P.length-2}}
    const[a1,b1]=P[t.seg],[a2,b2]=P[t.seg+1],L=Math.hypot(a2-a1,b2-b1),nx=-(b2-b1)/L,nz=(a2-a1)/L;
    t.g.position.set(a1+(a2-a1)*t.t-nx*2.6,0,b1+(b2-b1)*t.t-nz*2.6);t.g.rotation.y=-Math.atan2(b1-b2,a1-a2);t.wheels.forEach(w=>w.rotation.y+=t.v*dt/.34)}
  if(EX.wp<P.length-1&&Math.hypot(P[EX.wp][0]-C.x,P[EX.wp][1]-C.z)<28)EX.wp++;
  const tgt=EX.wp>=P.length-1?EX.destPt:{x:P[EX.wp][0],z:P[EX.wp][1]};
  const ta=Math.atan2(tgt.z-C.z,tgt.x-C.x),ad=7+Math.sin(EX.t*5)*.4;EX.arrow.position.set(C.x+Math.cos(ta)*ad,.14,C.z+Math.sin(ta)*ad);EX.arrow.rotation.y=-ta;
  const left=Math.hypot(EX.destPt.x-C.x,EX.destPt.z-C.z);
  if(left<6&&!EX.leaving)arriveDrive();
  const fx=Math.cos(C.h),fz=Math.sin(C.h),k=1-Math.exp(-dt*5);
  if(EX.cockpit){EX.camPos.set(C.x+fx*.3,1.45,C.z+fz*.3);EX.camLook.set(C.x+fx*20,1.1,C.z+fz*20)}
  else{EX.camPos.lerp(R.tmpV.set(C.x-fx*8.5,3.6,C.z-fz*8.5),k);EX.camLook.lerp(R.tmpL.set(C.x+fx*6,1.1,C.z+fz*6),k)}
  const port=R.camera.aspect<1,fov=port?80:62;if(R.camera.fov!==fov){R.camera.fov=fov;R.camera.updateProjectionMatrix()}
  R.camera.position.copy(EX.camPos);R.camera.lookAt(EX.camLook);
  const pr=$('#exPrompt');pr.hidden=false;pr.innerHTML=`<b style="font-family:var(--display);font-size:22px">${Math.round(Math.abs(C.v)*3.6)} km/h</b> · ${Math.round(left)} m to go`;
}
function arriveDrive(){if(EX.leaving&&EX.arrived)return;EX.leaving=true;EX.arrived=true;const d=EX.dest,u=TM[S.user];
  cutscene(d==='home'?u.capital:d==='stadium'?'New York New Jersey':curCity(),d==='hotel'?'You pull up at the team hotel':d==='airport'?'You park at the airport':d==='stadium'?'You park at the stadium. The hospitality village is buzzing':'You pull into the driveway',1600,()=>startExplore(d==='hotel'?'hotel':d==='airport'?'airport':d==='stadium'?'village':'home'))}

/* ---------- 3. team hotel ---------- */
function fanMail(){const u=TM[S.user],m=[`"My whole street watches every game. Bring it home!" — a fan in ${u.capital}`,`A drawing from a school class in ${u.capital}, with your number on the back.`,`"Fresh boots in your locker for matchday." — the kit man`,`"Good luck from everyone at the hotel. We're cheering for ${u.name}!" — the staff`];return m[(Math.random()*m.length)|0]}
function skyline(city){const c=document.createElement('canvas');c.width=1024;c.height=280;const g=c.getContext('2d');
  const gr=g.createLinearGradient(0,0,0,280);gr.addColorStop(0,'#0a1230');gr.addColorStop(1,'#2a2a55');g.fillStyle=gr;g.fillRect(0,0,1024,280);
  for(let x=0;x<1024;){const w=30+Math.random()*60,h=60+Math.random()*190;g.fillStyle='#0b0f1d';g.fillRect(x,280-h,w,h);
    for(let wy=280-h+8;wy<272;wy+=12)for(let wx=x+5;wx<x+w-6;wx+=10)if(Math.random()<.45){g.fillStyle=Math.random()<.8?'#ffd98a':'#9fd3ff';g.fillRect(wx,wy,5,6)}x+=w+4}
  g.fillStyle='rgba(255,255,255,.85)';g.font='600 22px "Barlow Semi Condensed",sans-serif';g.fillText(city,16,30);
  const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;return t}
function showHighlights(){EX.paused=true;const gi=userGroup(),st=standings(gi),bt=bootTable().slice(0,5),ov=$('#overlay');ov.hidden=false;
  ov.innerHTML=`<p class="eyebrow">Tonight's highlights show</p><h3 style="font-size:clamp(32px,5vw,52px)">Group ${GL[gi]}</h3>
    <div class="stats">${st.map((id,i)=>`<div class="srow" style="grid-template-columns:24px 1fr 52px"><span>${i+1}</span><span style="text-align:left;display:flex;gap:8px;align-items:center">${flagHTML(id,'sm')}${TM[id].name}</span><span>${S.table[id].pts} pts</span></div>`).join('')}</div>
    <p class="eyebrow">Golden Boot: ${bt.map(([k,v])=>`${esc(pl(k).short)} ${v.g}`).join(' · ')||'no goals yet'}</p>
    <div class="ov-actions"><button type="button" class="btn primary" id="ovGo">Turn off the TV</button></div>`;
  $('#ovGo').onclick=()=>{ov.hidden=true;EX.paused=false;if(EX.activity)endActivity()};$('#ovGo').focus()}
function teleport(x,z,yaw,label){cutscene('Lift',label,800,()=>{EX.p.x=x;EX.p.z=z;EX.p.yaw=yaw})}
function setBuff(k){S.buff=Object.assign(S.buff||{},{[k]:true});save()}
function eatAt(tx,tz){
  const sc=EX.scene,plate=new THREE.Mesh(new THREE.CylinderGeometry(.3,.25,.03,24),exMat('#f4f4f4'));plate.position.set(tx,.77,tz);sc.add(plate);
  const foods=[],fc=['#e2b04a','#c8572f','#f2e6c8','#5a9a3a','#c8572f','#e2b04a'];
  for(let i=0;i<6;i++){const f=new THREE.Mesh(new THREE.SphereGeometry(.065,12,8),exMat(fc[i]));const a=i/6*Math.PI*2;f.position.set(tx+Math.cos(a)*.14,.82,tz+Math.sin(a)*.14);sc.add(f);foods.push(f)}
  startActivity({title:'Team dinner',cam:[tx,1.3,tz+.8],look:[tx,.78,tz],taps:6,hint:A=>`Press ${KEY()} to take a bite (${A.n}/6)`,
    onTap:()=>{const f=foods.shift();if(f){sc.remove(f);f.geometry.dispose()}},done:()=>{EX.ate=true;setBuff('dinner');exMsg('Plate cleared. You feel recovered for the next match.')}})
}
function buildHotel(){
  const u=TM[S.user],fx=nextFixture(),o=TM[fx.opp],city=curCity(),acc=accent(u),sc=EX.scene,wall='#cdbfa6';
  EX.place=`${u.name} team hotel · ${city}`;EX.goal=`Rest day. Next up: ${fx.label} vs ${o.name}. Eat, train, swim, then sleep in your room or take the team bus.`;
  EX.skip=toHub;
  sc.background=new THREE.Color(0x0d1018);
  sc.add(new THREE.HemisphereLight(0xfff4e0,0x3a2f25,.42));
  B(32,.1,24,'#8f7a5e',0,-.1,0,{r:.9});B(32,.2,24,'#d9cdb8',0,4.6,0);
  B(11,.02,6.5,'#6b2430',0,0,.5,{r:1});B(3.2,.8,1,'#2f3542',-3.6,0,.5,{solid:true});B(3.2,.8,1,'#2f3542',3.6,0,.5,{solid:true});B(1.6,.45,1.6,'#5a4636',0,0,.5,{solid:true});
  for(const[x,z]of[[-5,-10.6],[5,-10.6],[-14.6,10.6]]){B(.7,.6,.7,'#5a3b24',x,0,z,{solid:true});B(1,1.3,1,'#2f6b3a',x,.6,z)}
  B(32,4.6,.3,wall,0,0,-12,{solid:true});B(.3,4.6,24,wall,-16,0,0,{solid:true});B(.3,4.6,24,wall,16,0,0,{solid:true});
  B(32,4.6,.15,'#9fc3e8',0,0,12,{op:.25,solid:true,r:.1});
  for(const[x,z]of[[-7,-4],[7,-4],[0,4]]){B(.6,.6,.6,'#fff3c8',x,3.7,z,{e:0xffe2a0,ei:1});pointLight(x,3.6,z,.45,16,0xffe8c0)}
  B(8,1.1,1.2,'#6b4a2f',0,0,-9,{solid:true,r:.5});
  sign(`${u.name.toUpperCase()} · TEAM HOTEL`,0,3,-11.83,9,1,0,{bg:'#1b1f2a'});
  person(['#2a2f45','#2a2f45','#111111'],'','recep',0,-10.2,Math.PI/2,{trousers:'#2a2f45'});
  item(0,-7.6,'Collect your mail from reception',()=>{startActivity({title:'Reception',cam:[0,1.65,-7.4],look:[0,1.4,-10.2],cancel:false});
    choice('A letter for you',fanMail(),[{label:'Keep it in your bag'},{label:'Write a reply',reply:'You write a short note back and sign it with your number.'}])},2.2);
  // restaurant
  sign('RESTAURANT',-15.83,3,-2,4,.8,Math.PI/2);
  const tables=[];for(let i=0;i<2;i++)for(let j=0;j<3;j++){const tx=-13+i*3.2,tz=-6+j*4;B(1.3,.75,1.3,'#8a6a4a',tx,0,tz,{solid:true});tables.push([tx,tz])}
  item(-11.4,-3.4,'Sit down and eat the team dinner',()=>eatAt(-13,-2),2.6,()=>!EX.ate);
  // gym
  sign('GYM',15.83,3,-7,3,.8,-Math.PI/2);
  B(1,1.2,2.2,'#333333',10,0,-9.5,{solid:true});B(.9,.05,1.8,'#111111',10,1.2,-9.5);B(1,1.2,2.2,'#333333',12.5,0,-9.5,{solid:true});
  B(2.4,.5,.8,'#555555',13.5,0,-5.5,{solid:true});const bar=B(2.2,.06,.06,'#bbbbbb',13.5,1.1,-5.5,{m:.8});for(const sx of[-1,1])B(.08,.45,.45,'#222222',13.5+sx*1.05,.88,-5.5);
  item(10,-7.6,'Run on the treadmill',()=>startActivity({title:'Treadmill',cam:[10,2.2,-9.2],look:[10,1.9,-12],hold:4,
    hint:A=>`Hold ${touchMode?'the stick up':'W'} to run: ${Math.round(Math.min(1,A.n/4)*400)} m of 400 m`,update:A=>{if(keys.u||joy.y<-.3)EX.camPos.y+=Math.sin(A.t*18)*.01},
    done:()=>{setBuff('gym');exMsg('400 metres done. Your legs feel sharp for the next match.')}}),2);
  item(13.5,-4,'Do a set on the bench press',()=>startActivity({title:'Bench press',cam:[13.5,1.1,-3.6],look:[13.5,1.2,-5.5],taps:8,hint:A=>`Press ${KEY()} to lift (${A.n}/8 reps)`,
    onTap:A=>{A.up=.35},update:(A,dt)=>{A.up=Math.max(0,(A.up||0)-dt*.9);bar.position.y=1.1+.03+A.up},end:()=>{bar.position.y=1.13},done:()=>{setBuff('gym');exMsg('Eight clean reps. You feel strong.')}}),1.8);
  // pool
  sign('POOL',15.83,3,6,3,.8,-Math.PI/2);
  const water=B(6.6,.06,5.6,'#2f9fd0',11.5,.4,6,{e:0x1a6f9a,ei:.55,r:.05,op:.82});EX.upd.push(()=>{water.position.y=.43+Math.sin(EX.t*2)*.015});
  for(const[w,d,x,z]of[[7.2,.3,11.5,3.05],[7.2,.3,11.5,8.95],[.3,6.2,7.95,6],[.3,6.2,15.05,6]])B(w,.5,d,'#e8eef2',x,0,z,{r:.4});B(6.6,.02,5.6,'#1f6f9a',11.5,0,6);EX.walls.push({x0:8,x1:15,z0:3,z1:9});
  item(7,6,'Dive into the pool',()=>{EX.swim={x0:8.4,x1:14.6,z0:3.4,z1:8.6,len:0,side:'w'};EX.p.x=8.6;EX.p.z=6;EX.p.yaw=0;EX.scene.fog=new THREE.Fog(0x2a8fc0,2,22);splash()},1.9);
  // lifts
  B(2.4,2.6,.1,'#b8b2a6',-11,0,-11.8,{m:.6,r:.3});sign('LIFTS',-11,3,-11.8,2,.45,0);
  item(-11,-10.4,'Take the lift up to your room',()=>teleport(58,2.5,-Math.PI/2,'Floor 12'),2);
  // team bus outside
  B(12,3.2,2.8,acc,0,0,16.5,{m:.3,r:.4});sign(u.name.toUpperCase(),0,2.1,15.08,7,.8,Math.PI,{bg:acc,fg:onAcc(acc)});
  item(0,10.4,`Take the team bus to the stadium (${fx.label} vs ${o.name})`,()=>{EX.leaving=true;cutscene(city,'Team bus to the stadium',2200,()=>{const f=nextFixture();startMatch(f.opp,f.ko,f.label)})},2.6);
  // your room
  const rx=60;
  B(10,.1,10,'#6e5640',rx,-.1,0);B(10,.2,10,'#d9cdb8',rx,3,0);
  B(10,3,.2,wall,rx,0,-5,{solid:true});B(.2,3,10,wall,rx-5,0,0,{solid:true});B(.2,3,10,wall,rx+5,0,0,{solid:true});
  EX.walls.push({x0:rx-5,x1:rx+5,z0:4.9,z1:5.2});
  const win=new THREE.Mesh(new THREE.PlaneGeometry(9,2.4),new THREE.MeshBasicMaterial({map:skyline(city)}));win.position.set(rx,1.6,5);win.rotation.y=Math.PI;sc.add(win);
  pointLight(rx,2.6,0,.5,12,0xffe2b8);
  B(2.4,.55,2.6,'#f4f1ea',rx+2.5,0,-3.3,{solid:true});B(2.6,1.2,.15,'#5a4636',rx+2.5,0,-4.65);B(.9,.15,.5,'#ffffff',rx+2,.55,-4.1);B(.9,.15,.5,'#ffffff',rx+3,.55,-4.1);
  B(2.5,.08,1.6,acc,rx+2.5,.55,-2.6);
  item(rx+2.5,-1.4,'Get into bed and sleep until matchday',()=>startActivity({title:'Lights out',cam:[rx+2.5,1,-3.4],look:[rx+2.5,3,-3.7],dur:2.6,cancel:false,hint:'Tomorrow is matchday.',
    update:A=>{sc.background.setRGB(.05*(1-A.prog),.06*(1-A.prog),.09*(1-A.prog))},done:()=>{EX.leaving=true;cutscene(city,'Matchday morning',1500,toHub)}}),2);
  B(.08,1.1,1.9,'#111111',rx-4.88,1,-1,{e:0x2a4a7a,ei:.7});sign('HIGHLIGHTS',rx-4.83,1.55,-1,1.7,.3,Math.PI/2,{bg:'#0a1630',fg:'#ffffff'});
  item(rx-3.4,-1,'Sit down and watch the highlights show',()=>{startActivity({title:'Highlights show',cam:[rx-1.5,1.2,-1],look:[rx-4.9,1.3,-1],cancel:false});setTimeout(showHighlights,700)},2);
  B(.7,.75,1.6,'#6b4a2f',rx+4.5,0,1.8,{solid:true});B(.22,.08,.16,'#111111',rx+4.5,.75,1.8);
  item(rx+3.4,1.8,`Call home to ${u.capital}`,()=>{startActivity({title:'Calling home',cam:[rx+3.4,1.5,1.8],look:[rx+4.5,.8,1.8],cancel:false});
    choice(`Calling ${u.capital}`,`Your family picks up on the first ring. "We saw everything! How are you feeling?"`,[
      {label:'"Tired, but happy."',reply:'"Then go to sleep! We love you. Everyone here is wearing your shirt."'},
      {label:'"Nervous about the next game."',reply:'"You always say that, and you always play well. We believe in you."'},
      {label:'"Put the dog on the phone."',reply:'Barking, then laughing. It is exactly what you needed.'}])},1.8);
  item(rx,3.7,`Look out over ${city}`,()=>startActivity({title:city,cam:[rx,1.6,4.2],look:[rx,1.5,6],dur:5,hint:'The city lights stretch out below. Somewhere down there, fans are still singing.',
    update:A=>{A.look[0]=rx+Math.sin(A.t*.6)*3}}),1.8);
  B(1.6,2.4,.1,'#b8b2a6',rx-3,0,-4.88,{m:.6,r:.3});
  item(rx-3,-3.8,'Take the lift down to the lobby',()=>teleport(-11,-9.6,Math.PI/2,'Lobby'),1.8);
  EX.p={x:0,z:9.4,yaw:-Math.PI/2,bob:0};
}
function splash(){tone(400,.4,.1,'sawtooth',90);flash()}
function swimTick(){const q=EX.swim,P=EX.p;
  if(P.x>14.1&&q.side!=='e'){q.side='e';q.len++;tone(520,.1,.05)}else if(P.x<8.9&&q.side!=='w'){q.side='w';q.len++;tone(520,.1,.05)}}
function climbOut(){const n=EX.swim.len;EX.swim=null;EX.scene.fog=null;EX.p.x=7;EX.p.z=6;EX.p.yaw=Math.PI;
  exMsg(n>=4?`${n} lengths. Your muscles feel loose and fresh.`:n?`${n} lengths. A gentle swim.`:'You float for a while and climb out.')}

/* ---------- 4. airport ---------- */
function flightCode(){const u=TM[S.user];return u.id.slice(0,2)+' '+(100+hash(u.id)%800)}
function flyHome(){const u=TM[S.user];EX.leaving=true;cutscene(`Flight ${flightCode()}`,`Flying home to ${u.capital}`,3200,()=>startExplore('arrival'))}
function buildAirport(){
  const u=TM[S.user],cap=u.capital,champ=S.stage==='champ',city=champ?'New York New Jersey':curCity(),code=flightCode(),acc=accent(u),sc=EX.scene;
  EX.place=`${city} airport · Departures`;EX.goal=champ?`Check in, then board your flight home to ${cap}. The trophy is coming with you.`:`Check in at the desks on the left, then board your flight home to ${cap} at gate B12.`;
  EX.skip=flyHome;EX.checked=false;
  sc.background=new THREE.Color(0x0c1424);
  sc.add(new THREE.HemisphereLight(0xffffff,0x707070,.45));
  B(48,.1,28,'#8c939c',0,-.1,0,{r:.85});B(48,.3,28,'#c9ced4',0,9,0);
  for(let x=-18;x<=18;x+=9)for(const z of[-6,6]){B(5,.08,1.2,'#ffffff',x,8.9,z,{e:0xffffff});pointLight(x,7.5,z,.28,20,0xffffff)}
  B(48,9,.3,'#b4bac2',0,0,14,{solid:true});B(.3,9,28,'#b4bac2',-24,0,0,{solid:true});B(.3,9,28,'#b4bac2',24,0,0,{solid:true});
  B(48,9,.15,'#8fb8de',0,0,-14,{op:.22,solid:true,r:.05});
  B(140,.1,60,'#2b2f35',0,-.2,-46);
  const pg=new THREE.Group(),white=exMat('#f2f4f6',{m:.3,r:.4});
  const fus=new THREE.Mesh(new THREE.CylinderGeometry(2,2,30,28),white);fus.rotation.z=Math.PI/2;pg.add(fus);
  const nose=new THREE.Mesh(new THREE.SphereGeometry(2,24,16),white);nose.position.x=15;nose.scale.x=1.6;pg.add(nose);
  const wing=new THREE.Mesh(new THREE.BoxGeometry(4,.3,28),white);wing.position.set(1,-.6,0);pg.add(wing);
  const fin=new THREE.Mesh(new THREE.BoxGeometry(3.2,4.5,.3),exMat(acc));fin.position.set(-13.5,3,0);pg.add(fin);
  const stripe=new THREE.Mesh(new THREE.BoxGeometry(28,.4,4.06),exMat(acc));stripe.position.y=-.3;pg.add(stripe);
  pg.position.set(6,3.2,-32);sc.add(pg);
  for(const z of[-6,-1,4]){B(1.2,1.1,3,'#3c4a5c',-18,0,z,{solid:true});person(['#1d3a66','#1d3a66','#111111'],'','agent'+z,-19.3,z,0,{trousers:'#1d3a66'})}
  sign('CHECK-IN',-23.8,5,-1,7,1.3,Math.PI/2,{bg:'#123a6b',fg:'#ffffff'});
  item(-16.2,-1,`Check in for flight ${code} to ${cap}`,()=>startActivity({title:'Check-in',cam:[-16.4,1.65,-1],look:[-19.3,1.4,-1],dur:2.2,hint:'Passport, bag on the belt, smile for the agent.',
    done:()=>{EX.checked=true;startActivity({title:'Boarding pass',cam:[-16.4,1.65,-1],look:[-19.3,1.4,-1],cancel:false});
      choice('Boarding pass',`${code} · ${city} to ${cap} · Gate B12 · Seat 2A · Boarding 00:15`,[{label:'Put it in your pocket'}])}}),4,()=>!EX.checked);
  const others=Object.values(TM).filter(t=>t.id!==u.id).sort((a,b)=>hash(a.id+S.user)-hash(b.id+S.user)).slice(0,6);
  const pad=(t,n)=>(t+' '.repeat(n)).slice(0,n);
  const rows=['DEPARTURES',...others.map((t,i)=>`${String(18+i).padStart(2,'0')}:${['05','20','35','50'][i%4]}  ${pad(t.capital.toUpperCase(),16)} ${['ON TIME','DELAYED','ON TIME','GATE OPEN'][i%4]}`),`00:15  ${pad(cap.toUpperCase(),16)} B12 BOARDING`];
  B(.6,2.6,.6,'#555555',0,0,-6,{solid:true});
  sign(rows.join('\n'),0,5.2,-6,11,5,0,{bg:'#0b0f18',fg:'#ffd75e',size:.84,align:'left',hl:cap.toUpperCase(),hlc:'#7dffa8'});
  item(0,-3.6,'Check the departures board',()=>startActivity({title:'Departures',cam:[0,1.7,-2.4],look:[0,5,-6],dur:3,hint:`Your flight to ${cap} is boarding at gate B12.`}),2.4);
  B(.6,2,4,'#6a5a8a',18,0,-2,{solid:true});B(.6,2,4,'#6a5a8a',21,0,-2,{solid:true});
  for(let k=0;k<6;k++)B(.4,.35,.4,['#f0c23b','#d0102b','#2b6fd0','#ffffff','#2f9a4a','#8a4ad0'][k],18.45,.4+(k%3)*.55,-3.4+(k>>1)*.9);
  sign('DUTY FREE',23.8,5,-2,6,1.2,-Math.PI/2,{bg:'#4a1d5c',fg:'#ffffff'});
  item(15.8,-2,'Buy a souvenir for your family',()=>{startActivity({title:'Duty free',cam:[16.6,1.6,-2],look:[18.4,1,-2],cancel:false});
    choice('Duty free','What do you want to take home?',[
      {label:`A ${city} snow globe`,reply:'Wrapped and in your bag.',fn:()=>{S.gift=`${city} snow globe`;save()}},
      {label:'A World Cup 2026 scarf',reply:'Wrapped and in your bag.',fn:()=>{S.gift='World Cup 2026 scarf';save()}},
      {label:'A giant bar of chocolate',reply:'It will not survive the flight, but you buy it anyway.',fn:()=>{S.gift='giant bar of chocolate';save()}},
      {label:'Nothing for now'}])},3,()=>!S.gift);
  for(const[x,z]of[[10,8],[13,8],[10,11],[13,11]])B(1.1,.75,1.1,'#d0a060',x,0,z,{solid:true});
  sign('FOOD COURT',23.8,5,9,6,1.2,-Math.PI/2,{bg:'#7a3a12',fg:'#ffffff'});
  item(11.5,6.4,'Sit down with a coffee',()=>{const cup=new THREE.Mesh(new THREE.CylinderGeometry(.06,.05,.12,16),exMat('#ffffff'));cup.position.set(10,.81,8);sc.add(cup);
    startActivity({title:'Coffee',cam:[10,1.25,7.2],look:[10,.8,8],taps:4,hint:A=>`Press ${KEY()} to sip (${A.n}/4)`,onTap:A=>{cup.scale.y=1-A.n/5},done:()=>exMsg('Flights are long. That helped.')})},2.4);
  for(const x of[6,10.5])for(const z of[-10,-8.2])B(3.6,.45,.6,'#2c3e57',x,0,z,{solid:true});
  B(2.4,1.1,1,'#3c4a5c',17,0,-12,{solid:true});
  sign(`GATE B12 · ${cap.toUpperCase()}`,17,3.6,-13.8,6.5,.9,0,{bg:'#123a6b',fg:'#ffffff'});
  item(17,-10.4,`Board flight ${code} to ${cap}`,()=>{if(!EX.checked){exMsg('You need a boarding pass first. Check in at the desks on the left.');return}flyHome()},2.6);
  if(champ){for(let k=0;k<10;k++)person(u.kit,10+k,'af'+k,-6+k*1.3,9.5+(k%2)*.8,-Math.PI/2,{wave:k%3===0?2:1})}
  EX.p={x:0,z:11.8,yaw:-Math.PI/2,bob:0};
}

/* ---------- 5. arriving home ---------- */
function buildArrival(){
  const u=TM[S.user],cap=u.capital,champ=S.stage==='champ',acc=accent(u),sc=EX.scene,fg=onAcc(acc);
  EX.place=`${cap} · Arrivals`;EX.goal=champ?'The whole country turned out. Greet the fans and your family, then drive home.':'Fans came to welcome the team home. Greet them and your family, then drive home.';
  EX.skip=()=>{EX.leaving=true;startExplore('drive:home')};EX.crowd=.32;
  sc.background=new THREE.Color(0x0c1220);
  sc.add(new THREE.HemisphereLight(0xffffff,0x6a6a6a,.45));
  B(28,.1,24,'#8f969f',0,-.1,0,{r:.85});B(28,.3,24,'#c9ced4',0,7,0);
  B(28,7,.3,'#b7bdc5',0,0,-12,{solid:true});B(28,7,.3,'#b7bdc5',0,0,12,{solid:true});B(.3,7,24,'#b7bdc5',-14,0,0,{solid:true});B(.3,7,24,'#b7bdc5',14,0,0,{solid:true});
  for(const x of[-7,0,7])for(const z of[-6,4]){B(4,.08,1,'#ffffff',x,6.9,z,{e:0xffffff});pointLight(x,6,z,.28,18,0xffffff)}
  sign(champ?`WORLD CHAMPIONS\nWELCOME HOME, ${u.name.toUpperCase()}`:`WELCOME HOME, ${u.name.toUpperCase()}`,0,4.7,11.82,15,champ?3:1.6,Math.PI,{bg:acc,fg});
  sign(`WELCOME TO ${cap.toUpperCase()}`,-13.82,4.4,-4,7,1,Math.PI/2,{bg:'#123a6b',fg:'#ffffff'});
  for(let z=-8;z<=8;z+=4)for(const sx of[-1,1])B(.05,2.6,1.2,(z/4)%2?u.kit[1]:u.kit[0],sx*13.8,3.2,z,{e:(z/4)%2?u.kit[1]:u.kit[0],ei:.15});
  B(10,1,.1,'#bbbbbb',-8,0,1,{solid:true,m:.6,r:.3});B(10,1,.1,'#bbbbbb',8,0,1,{solid:true,m:.6,r:.3});
  const fans=[];for(let k=0;k<18;k++){const side=k%2?1:-1,col=(k>>1)%6,row=(k>>1)>5?1:0;
    fans.push(person(u.kit,7+k,'fan'+k,side*(4.4+col*1.45),2.1+row*1.4+(k%3)*.2,-Math.PI/2,{wave:k%4===0?2:1}))}
  const fam=[person(['#6a8caf','#334455','#f4f4f4'],'','fam1',2.2,4.6,-Math.PI/2,{trousers:'#334455',wave:1}),person(['#c46a7a','#2a2a35','#f4f4f4'],'','fam2',3.2,4.8,-Math.PI/2,{trousers:'#2a2a35'})];
  item(-6,-.3,'Sign an autograph for the fans',()=>{startActivity({title:'Autographs',cam:[-6,1.6,-.6],look:[-6,1.3,2.5],cancel:false});
    signAutograph(`a fan in ${cap}`,()=>{roar();exMsg('The fans go wild. Someone is already framing it.')})},3.6);
  item(6,-.3,'Take selfies with the fans',()=>startActivity({title:'Selfies',cam:[6,1.6,-.6],look:[6,1.4,2.5],taps:4,hint:A=>`Press ${KEY()} to smile for the photo (${A.n}/4)`,
    onTap:()=>flash(),done:()=>exMsg(`Every phone in ${cap} seems to be pointed at you.`)}),3.6);
  item(2.6,1,'Hug your family',()=>startActivity({title:'Family',cam:[2.6,1.6,.2],look:[2.7,1.5,2.5],dur:3.2,
    hint:S.gift?`You give them the ${S.gift}.`:'It is good to be home.',
    update:(A,dt)=>{fam.forEach((f,i)=>{const tx=2.2+i*1,tz=1.9,d=Math.hypot(tx-f.x,tz-f.y);if(d>.1){f.x+=(tx-f.x)*dt*1.5;f.y+=(tz-f.y)*dt*1.5;f.vx=1}else f.vx=0})},
    done:()=>exMsg(S.gift?`They love the ${S.gift}.`:'Your family wraps you up. It is good to be home.')}),2.4);
  if(champ){B(.9,1,.9,'#1b2232',0,0,6.5,{solid:true,m:.4});const tr=makeTrophy();tr.position.set(0,1,6.5);sc.add(tr);EX.upd.push(dt=>{if(!EX.activity)tr.rotation.y+=dt*.6});
    item(0,4.9,'Lift the trophy for the fans',()=>startActivity({title:'World Champions',cam:[0,1.5,4],look:[0,2.4,6.5],dur:3.5,hint:'The hall erupts. You will remember this sound forever.',
      start:()=>roar(),update:A=>{tr.position.y=1+Math.min(1,A.t)*1.4+Math.sin(A.t*4)*.08;tr.rotation.y+=.02},end:()=>{tr.position.y=1}}),2)}
  B(4,2.6,.1,'#8fb8de',0,0,11.8,{op:.5});sign('EXIT · CAR PARK',0,2.9,11.78,2.6,.4,Math.PI,{bg:'#1f6b3a',fg:'#ffffff'});
  item(0,10.2,'Walk out to the car park and drive home',()=>{EX.leaving=true;startExplore('drive:home')},2.4);
  EX.p={x:0,z:-9.5,yaw:Math.PI/2,bob:0};
  setTimeout(roar,400);
}

/* ---------- 6. home ---------- */
function buildHome(){
  const u=TM[S.user],champ=S.stage==='champ',l=S.log[S.log.length-1],acc=accent(u),sc=EX.scene,me=u.players[S.me];
  EX.place=`${u.capital} · Home`;EX.goal='You made it home. Relax with your family, then get some sleep.';EX.skip=toEnd;
  sc.background=new THREE.Color(0x0b0e16);
  sc.add(new THREE.HemisphereLight(0xffeedd,0x3a2f25,.45));
  B(14,.1,12,'#7a5a3e',0,-.1,0,{r:.85});B(14,.2,12,'#e6dccb',0,3,0);
  B(14,3,.2,'#d8ccb4',0,0,-6,{solid:true});B(14,3,.2,'#d8ccb4',0,0,6,{solid:true});B(.2,3,12,'#d8ccb4',-7,0,0,{solid:true});B(.2,3,12,'#d8ccb4',7,0,0,{solid:true});
  pointLight(-2,2.6,0,.6,14,0xffe2b8);pointLight(4,2.6,-2,.4,10,0xffe2b8);
  B(4,.8,1.2,'#3a4a5c',0,0,1.6,{solid:true});B(4,.6,.3,'#3a4a5c',0,.8,2.1);
  B(.1,1.4,2.4,'#111111',0,1,-5.85,{ry:Math.PI/2,e:0x203a6a,ei:.6});
  sign(`${u.name.toUpperCase()} ${l.gf}–${l.ga} ${TM[l.opp].name.toUpperCase()}`,0,1.25,-5.72,2.2,.5,0,{bg:'#0a1630',fg:'#ffffff'});
  sign(`${me.num}\n${me.short.toUpperCase()}`,-6.88,1.7,-2,1.2,1.4,Math.PI/2,{bg:u.kit[0],fg:onAcc(u.kit[0]),size:.8});
  B(.12,1.6,1.4,'#5a3b24',-6.95,.9,-2);
  if(champ){B(1.6,.9,.6,'#5a3b24',4.5,0,-5.4,{solid:true});const tr=makeTrophy();tr.position.set(4.5,.9,-5.4);sc.add(tr)}
  if(S.gift)B(.4,.3,.3,'#d0102b',1.6,.8,1.6);
  person(['#6a8caf','#334455','#f4f4f4'],'','fam1',-1.2,3.6,-Math.PI/2,{trousers:'#334455'});
  person(['#c46a7a','#2a2a35','#f4f4f4'],'','fam2',1.2,3.8,-Math.PI/2,{trousers:'#2a2a35'});
  item(0,3,'Sit on the sofa and watch the highlights with your family',()=>startActivity({title:'Family night',cam:[0,1.25,2.2],look:[0,1.2,-5.8],dur:5,
    hint:A=>['Your goals, played again in slow motion.','Everyone cheers at the replays.','Someone falls asleep on your shoulder.'][Math.min(2,Math.floor(A.t/1.7))]}),2.4);
  B(1.4,2.4,.1,'#5a3b24',5.4,0,5.9);sign('BEDROOM',5.4,2.65,5.85,1.4,.3,Math.PI,{bg:'#2a2016',fg:'#f0c23b'});
  item(5.4,4.8,'Go to bed',()=>startActivity({title:'Home at last',cam:[5.4,1.6,4.6],look:[5.4,1.5,6],dur:2,cancel:false,
    done:()=>{EX.leaving=true;cutscene(u.capital,champ?'Sleeping as a world champion':'The end of your World Cup',2000,toEnd)}}),1.8);
  EX.p={x:-4,z:4.5,yaw:-Math.PI/4,bob:0};
}

/* =====================================================================
   WATCH THE FINAL — for players knocked out before the final.
   Drive to New York New Jersey, wander the hospitality village, take the VIP
   lane and lift up to a suite, and watch the real final live from the glass.
   ===================================================================== */
const GIVEAWAYS=[{id:'scarf',name:'World Cup 2026 scarf',col:'#c8102e'},{id:'hat',name:'bucket hat',col:'#f0c23b'},{id:'ball',name:'mini match ball',col:'#ffffff'},{id:'poster',name:'final-day poster',col:'#2b6fd0'}];
// Real people, so their lines stay short, friendly and about the match.
const CELEBS=[
  {n:'Ryan Reynolds',k:'Film star',look:['#2b3a55','#1c2333','#111111'],line:'Owning a football club taught me to love this game. A World Cup final is something else.'},
  {n:'Will Ferrell',k:'Film star',look:['#6b1f24','#222222','#111111'],line:'I am here strictly as a fan. A very, very loud fan.'},
  {n:'Eva Longoria',k:'Film star',look:['#1d1d1d','#1d1d1d','#111111'],line:'Look at this stadium. I have goosebumps already.'},
  {n:'Shakira',k:'Halftime show',look:['#d4af37','#3a2a1a','#111111'],line:'I head down for the halftime show soon. Make some noise for us!',perf:true},
  {n:'Burna Boy',k:'Halftime show',look:['#0b6b3a','#111111','#111111'],line:'Big night! Make sure you watch the halftime show.',perf:true},
  {n:'David Beckham',k:'England legend',look:['#1f2a5c','#1f2a5c','#111111'],line:'I still get nervous at finals, even when I\'m only watching.',legend:true},
  {n:'Thierry Henry',k:'France legend',look:['#2a2f3a','#2a2f3a','#111111'],line:'Watch the movement off the ball. That is where finals are won.',legend:true},
  {n:'Alex Morgan',k:'USA legend',look:['#f4f4f4','#1f2a5c','#111111'],line:'I miss nights like this. Enjoy every second of it.',legend:true}];
const SUITE={x0:-9,x1:9,z0:34.6,z1:42.3,y:9.5};   // the suite sits above the lower stand on the near touchline

/* ---------- signing autographs: draw it once, reuse it everywhere ---------- */
function sigPNG(cv){const o=document.createElement('canvas');o.width=360;o.height=140;o.getContext('2d').drawImage(cv,0,0,360,140);return o.toDataURL('image/png')}
function signAutograph(who,done){
  EX.paused=true;const ov=$('#overlay');ov.hidden=false;
  const close=()=>{ov.hidden=true;EX.paused=false;if(EX.activity)endActivity();if(done)done()};
  const signed=()=>{ov.innerHTML=`<p class="eyebrow">Autograph for ${esc(who)}</p><div class="paper"><img class="sig-img signing" src="${S.sig}" alt="Your signature"></div><p>They can't stop smiling.</p><div class="ov-actions"><button type="button" class="btn primary" id="sigOk">Hand it back</button></div>`;
    $('#sigOk').onclick=close;$('#sigOk').focus();tone(520,.12,.05)};
  const draw=()=>{
    ov.innerHTML=`<p class="eyebrow">Autograph for ${esc(who)}</p><div class="paper"><canvas id="sigPad" width="720" height="280" aria-label="Signature pad: draw your signature"></canvas><span class="paper-hint" id="sigHint">Sign here with your mouse, trackpad or finger</span></div><div class="ov-actions"><button type="button" class="btn" id="sigClear">Clear</button><button type="button" class="btn primary" id="sigDone" disabled>Sign it</button></div>`;
    const cv=$('#sigPad'),g=cv.getContext('2d');g.lineCap=g.lineJoin='round';g.strokeStyle='#1b2a6b';g.lineWidth=5;
    let down=false,last=null,ink=0;
    const at=e=>{const r=cv.getBoundingClientRect();return{x:(e.clientX-r.left)*cv.width/r.width,y:(e.clientY-r.top)*cv.height/r.height}};
    cv.addEventListener('pointerdown',e=>{down=true;last=at(e);try{cv.setPointerCapture(e.pointerId)}catch(_){}e.preventDefault();$('#sigHint').hidden=true});
    cv.addEventListener('pointermove',e=>{if(!down)return;const p=at(e);g.beginPath();g.moveTo(last.x,last.y);g.lineTo(p.x,p.y);g.stroke();ink+=Math.hypot(p.x-last.x,p.y-last.y);last=p;if(ink>60)$('#sigDone').disabled=false});
    ['pointerup','pointercancel'].forEach(ev=>cv.addEventListener(ev,()=>down=false));
    $('#sigClear').onclick=()=>{g.clearRect(0,0,cv.width,cv.height);ink=0;$('#sigDone').disabled=true;$('#sigHint').hidden=false};
    $('#sigDone').onclick=()=>{S.sig=sigPNG(cv);save();signed()}};
  if(S.sig){ov.innerHTML=`<p class="eyebrow">Autograph for ${esc(who)}</p><div class="paper"><img class="sig-img" src="${S.sig}" alt="Your saved signature"></div><p>Sign with your usual signature, or draw a new one.</p><div class="ov-actions"><button type="button" class="btn primary" id="sigUse">Sign with my signature</button><button type="button" class="btn" id="sigNew">Draw a new signature</button></div>`;
    $('#sigUse').onclick=signed;$('#sigNew').onclick=draw;$('#sigUse').focus()}
  else draw();
}

/* ---------- small helpers for these scenes ---------- */
function nameTag(text,sub,x,y,z){const c=document.createElement('canvas');c.width=512;c.height=128;const g=c.getContext('2d');
  g.fillStyle='rgba(6,10,8,.85)';g.fillRect(0,0,512,128);g.textAlign='center';g.fillStyle='#f0c23b';g.font='800 54px "Big Shoulders Display",Impact,sans-serif';g.fillText(text.toUpperCase(),256,60);
  g.fillStyle='#eef4ea';g.font='600 30px "Barlow Semi Condensed",sans-serif';g.fillText(sub,256,104);
  const t=new THREE.CanvasTexture(c);t.encoding=THREE.sRGBEncoding;const sp=new THREE.Sprite(new THREE.SpriteMaterial({map:t,transparent:true}));sp.scale.set(1.5,.375,1);sp.position.set(x,y,z);EX.scene.add(sp);return sp}
function foodStack(x,y,z,layers){const out=[];let yy=y;for(const[w,h,d,c]of layers){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),exMat(c));m.position.set(x,yy+h/2,z);EX.scene.add(m);out.push(m);yy+=h}return out}
function eatPieces(title,cam,look,pieces,msg,buffKey){
  const n=pieces.length,plate=new THREE.Mesh(new THREE.CylinderGeometry(.3,.26,.02,24),exMat('#f4f4f4'));plate.position.set(look[0],pieces[0].position.y-pieces[0].geometry.parameters.height/2-.01,look[2]);EX.scene.add(plate);
  startActivity({title,cam,look,taps:n,hint:A=>`Press ${KEY()} to take a bite (${A.n}/${n})`,
    onTap:()=>{const f=pieces.pop();if(f){EX.scene.remove(f);f.geometry.dispose()}},
    end:()=>{pieces.forEach(f=>EX.scene.remove(f));EX.scene.remove(plate)},done:()=>{if(buffKey)setBuff(buffKey);exMsg(msg)}})
}
const FOODS={
  pastrami:[[.24,.03,.13,'#a87a4a'],[.22,.035,.12,'#b5524a'],[.22,.035,.12,'#c0605a'],[.22,.035,.12,'#b5524a'],[.22,.035,.12,'#c0605a'],[.24,.03,.13,'#a87a4a']],
  hotdog:[[.26,.05,.09,'#e0b070'],[.28,.035,.045,'#8a3a22'],[.22,.012,.025,'#e8c020']],
  pizza:[[.26,.015,.22,'#e8c27a'],[.24,.01,.2,'#d23a2a'],[.23,.01,.19,'#f3e3b0'],[.08,.01,.08,'#9a2a1a']],
  pretzel:[[.2,.04,.2,'#8a4a1a'],[.16,.035,.16,'#9a5a2a'],[.1,.03,.1,'#8a4a1a']],
  burger:[[.2,.04,.2,'#d89a4a'],[.21,.04,.21,'#5a2e1a'],[.22,.01,.22,'#f0c030'],[.22,.012,.22,'#5aa03a'],[.2,.06,.2,'#d89a4a']],
  buffet:[[.2,.03,.14,'#f3e3b0'],[.16,.04,.1,'#c0605a'],[.12,.04,.12,'#5aa03a'],[.1,.04,.1,'#e8c020'],[.08,.05,.08,'#7a3a8a']]};

/* ---------- 1. the hospitality village ---------- */
function buildVillage(){
  const u=TM[S.user],sc=EX.scene,fin=S.rounds[S.rounds.length-1].ties[0];
  EX.place='New York New Jersey · Hospitality village';
  EX.goal=`Kickoff soon: ${TM[fin.a].name} vs ${TM[fin.b].name}. Grab some food and freebies, sign for the fans, then head for the VIP entrance.`;
  EX.skip=()=>{EX.leaving=true;startExplore('vip')};EX.crowd=.22;
  sc.background=new THREE.Color(0x0a1022);sc.fog=new THREE.Fog(0x0a1022,60,160);
  sc.add(new THREE.HemisphereLight(0xcfd8ff,0x2a2a2a,.55));
  B(80,.1,70,'#24282d',0,-.1,-15,{r:1});
  for(const[x0,x1,z0,z1]of[[-34,-33.5,-44,14],[33.5,34,-44,14],[-34,34,13.5,14],[-34,-2.5,-44,-43.5],[2.5,34,-44,-43.5]])EX.walls.push({x0,x1,z0,z1});
  // the stadium looms behind the VIP gate
  const bowl=new THREE.Mesh(new THREE.CylinderGeometry(55,60,34,56,1,true),exMat('#2a3142',{ds:true}));bowl.position.set(0,17,-100);sc.add(bowl);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(56,1,8,72),exMat('#ffffff',{e:0xffffff,ei:1.6}));ring.rotation.x=Math.PI/2;ring.position.set(0,34,-100);sc.add(ring);
  sign('NEW YORK NEW JERSEY STADIUM',0,22,-38,30,3,0,{bg:'#0b1310',fg:'#f0c23b'});
  // VIP gate
  B(.6,5,.6,'#d4af37',-2.6,0,-42.5,{m:.8,r:.3,solid:true});B(.6,5,.6,'#d4af37',2.6,0,-42.5,{m:.8,r:.3,solid:true});
  sign('VIP ENTRANCE · SUITES',0,5.4,-42.5,6.6,1,0,{bg:'#8a1020',fg:'#ffffff'});B(4,.02,12,'#8a1020',0,0,-36,{r:1});
  item(0,-40.5,'Show your VIP pass and head inside',()=>{EX.leaving=true;cutscene('VIP entrance','You flash your pass. A steward waves you through',1600,()=>startExplore('vip'))},2.6);
  // string lights
  const bulbs=['#ffd27a','#ff7a7a','#7adfff','#b5ff7a'];let bi=0;
  for(const z of[-32,-20,-8,4])for(let x=-30;x<=30;x+=2.5){const col=bulbs[bi++%4],b=new THREE.Mesh(new THREE.SphereGeometry(.09,8,6),exMat(col,{e:col,ei:1.2}));b.position.set(x,5.2+Math.sin(x*.4)*.4,z);sc.add(b)}
  for(const[x,z]of[[-14,-28],[14,-28],[-14,-10],[14,-10],[0,2],[0,-22]])pointLight(x,6,z,.9,22,0xffe2b8);
  // food stalls down both sides
  const stall=(x,z,name,col,food,title,msg)=>{const s=x<0?1:-1;
    B(4.5,2.6,4,'#2a2f3a',x,0,z,{solid:true});B(4.8,.3,5,col,x+s*.4,2.6,z,{e:col,ei:.15});B(.6,1,4,'#6b4a2f',x+s*2.55,0,z,{solid:true});
    sign(name,x+s*2.3,3.4,z,4.2,.8,s>0?Math.PI/2:-Math.PI/2,{bg:col,fg:onAcc(col)});
    person(['#f4f4f4','#2a2f3a','#111111'],'','vendor'+z+x,x+s*1.6,z,s>0?0:Math.PI,{trousers:'#2a2f3a'});
    item(x+s*3.6,z,title,()=>{const cx=x+s*2.55,top=1;eatPieces(name,[x+s*3.4,1.55,z],[cx,top,z],foodStack(cx,top+.01,z,FOODS[food]),msg)},2.4)};
  stall(-16,-26,"KATZ'S DELI",'#c8102e','pastrami','Order a pastrami on rye at Katz\'s','Piled impossibly high, still warm. Worth the trip.');
  stall(-16,-13,'NEW YORK HOT DOGS','#e8a020','hotdog','Get a New York hot dog','Mustard, onions, gone in three bites.');
  stall(-16,0,'PIZZA BY THE SLICE','#2f8a3a','pizza','Grab a slice of pizza','Fold it in half like a local. Perfect.');
  stall(16,-26,'SOFT PRETZELS','#8a4a1a','pretzel','Buy a soft pretzel','Salty, warm and doughy.');
  stall(16,-13,'BBQ & BURGERS','#5a2e1a','burger','Order a smash burger','Juicy, messy, excellent.');
  // giveaway tables
  GIVEAWAYS.forEach((gv,i)=>{const x=i<2?-6:6,z=i%2?-4:-16;
    B(3,.9,1.2,'#1b2232',x,0,z,{solid:true});B(.4,.35,.4,gv.col,x,.9,z);sign(`FREE ${gv.name.toUpperCase()}`,x,2.2,z,3,.5,0,{bg:'#f0c23b',fg:'#0b1310'});
    person(['#2b6fd0','#1f2533','#111111'],'','vol'+i,x,z-1.1,Math.PI/2,{trousers:'#1f2533'});
    item(x,z+1.3,`Grab a free ${gv.name}`,()=>startActivity({title:'Giveaway',cam:[x,1.6,z+1.4],look:[x,1,z],dur:1.4,hint:'A volunteer hands it over with a smile.',
      done:()=>{S.items=[...new Set([...(S.items||[]),gv.id])];save();exMsg(`The ${gv.name} is in your bag.`)}}),2,()=>!(S.items||[]).includes(gv.id))});
  // fans wandering, some of whom recognise you
  const teams=Object.keys(TM);EX.fans=[];
  for(let k=0;k<16;k++){const t=teams[(hash('vf'+k+S.user)%teams.length)];const f=person(TM[t].kit,'','vfan'+k,rnd(-10,10),rnd(-34,8),rnd(0,6),{});f.team=t;f.tx=f.x;f.tz=f.y;EX.fans.push(f)}
  EX.nextFan=6;EX.asking=null;
  const fanItem=item(0,0,'',()=>{const f=EX.asking;startActivity({title:'Autograph',cam:[EX.p.x,1.6,EX.p.z],look:[f.x,1.5,f.y],cancel:false});
    signAutograph(`a fan from ${TM[f.team].name}`,()=>{f.o={wave:2};f.cheer=3;EX.asking=null;f.coming=false;EX.nextFan=22;crowd(.35,.1);setTimeout(()=>crowd(.22,1),900)})},2.6,()=>!!EX.asking);
  EX.upd.push(dt=>{
    for(const f of EX.fans){
      if(f.cheer>0){f.cheer-=dt;if(f.cheer<=0){f.o={};f.tx=rnd(-10,10);f.tz=rnd(-34,8)}}
      if(f===EX.asking){f.vx=f.vy=0;const dx=EX.p.x-f.x,dz=EX.p.z-f.y,d=Math.hypot(dx,dz)||1;f.fx=dx/d;f.fy=dz/d;continue}
      if(f.coming){f.tx=EX.p.x;f.tz=EX.p.z}
      const dx=f.tx-f.x,dz=f.tz-f.y,d=Math.hypot(dx,dz);
      if(f.coming&&d<1.6){EX.asking=f;exMsg(`A fan from ${TM[f.team].name} spots you: "No way! Can I get your autograph?"`);continue}
      if(d<.4){f.vx=f.vy=0;if(Math.random()<dt*.4){f.tx=rnd(-10,10);f.tz=rnd(-34,8)}continue}
      const sp=f.coming?2:1.1;f.vx=dx/d*sp;f.vy=dz/d*sp;f.x+=f.vx*dt;f.y+=f.vy*dt;f.fx=dx/d;f.fy=dz/d}
    if(!EX.asking&&!EX.activity&&!EX.paused&&!EX.fans.some(f=>f.coming)){EX.nextFan-=dt;
      if(EX.nextFan<=0){let best=null,bd=1e9;for(const f of EX.fans){if(f.cheer>0)continue;const d=Math.hypot(f.x-EX.p.x,f.y-EX.p.z);if(d<bd&&d>3){bd=d;best=f}}if(best)best.coming=true}}
    if(EX.asking){fanItem.x=EX.asking.x;fanItem.z=EX.asking.y;fanItem.label=`Sign an autograph for the fan from ${TM[EX.asking.team].name}`}
  });
  EX.p={x:0,z:10,yaw:-Math.PI/2,bob:0};
}

/* ---------- 2. VIP entrance, the lift, and the suites corridor ---------- */
function buildVIP(){
  const u=TM[S.user],me=u.players[S.me],sc=EX.scene;
  EX.place='New York New Jersey Stadium · VIP entrance';EX.goal='Show your pass at the desk, take the lift up to the suites, then follow the arrows to your suite.';
  EX.skip=()=>{EX.leaving=true;startSuite()};EX.crowd=.12;EX.pass=false;
  sc.background=new THREE.Color(0x0b0e16);sc.add(new THREE.HemisphereLight(0xfff2e0,0x2a2520,.5));
  // entrance hall
  B(20,.1,36,'#1c1f26',0,-.1,-12,{r:.6,m:.2});B(20,.2,36,'#14171d',0,4.2,-12);
  B(.3,4.2,36,'#2b2f3a',-10,0,-12,{solid:true});B(.3,4.2,36,'#2b2f3a',10,0,-12,{solid:true});B(20,4.2,.3,'#2b2f3a',0,0,-30,{solid:true});EX.walls.push({x0:-10,x1:10,z0:5.8,z1:6.2});
  for(const z of[-24,-12,0])pointLight(0,3.6,z,.7,18,0xffe8c8);
  sign('VIP · SUITES',0,3.3,-29.8,5,.8,0,{bg:'#0b1310',fg:'#f0c23b'});
  B(3,.02,30,'#8a1020',0,0,-12,{r:1});
  // the regular queue behind ropes, and the fast lane you walk down
  for(let z=2;z>=-16;z-=3){B(.12,1,.12,'#d4af37',-3,0,z,{m:.8,solid:true});B(.12,1,.12,'#d4af37',3,0,z,{m:.8,solid:true})}
  B(.04,.06,18,'#8a1020',-3,.9,-7);B(.04,.06,18,'#8a1020',3,.9,-7);
  const kits=Object.values(TM);for(let k=0;k<8;k++){const t=kits[(hash('q'+k)%kits.length)];person(t.kit,'','queue'+k,-6+(k%2)*1.3,1-k*2.1,-Math.PI/2,{})}
  B(4,1.1,1.2,'#2a2f3a',0,0,-21,{solid:true});person(['#1f2533','#1f2533','#111111'],'','steward',0,-22.2,Math.PI/2,{trousers:'#1f2533'});
  item(0,-19.5,'Show your VIP pass at the desk',()=>startActivity({title:'VIP check-in',cam:[0,1.65,-19.4],look:[0,1.4,-22.2],dur:2,hint:'Beep. Green light.',
    done:()=>{EX.pass=true;exMsg(`Pass scanned: VIP · Suite 26 · ${me.name}. The lifts are straight ahead.`)}}),2.4,()=>!EX.pass);
  B(2.6,2.8,.12,'#b8b2a6',0,0,-29.8,{m:.7,r:.3});
  item(0,-28.4,'Take the lift up to the suites',()=>{if(!EX.pass){exMsg('The steward needs to scan your pass at the desk first.');return}
    cutscene('Lift','Level 5 · Suites',1100,()=>{EX.p.x=100;EX.p.z=1;EX.p.yaw=-Math.PI/2;EX.place='New York New Jersey Stadium · Suites level';$('#exPlace').textContent=EX.place;
      $('#exGoal').textContent='Follow the gold arrows to Suite 26.'})},2.2);
  // suites corridor (reached by the lift)
  B(9,.1,64,'#3a2a2a',100,-.1,-30,{r:1});B(9,.2,64,'#1a1d24',100,3.4,-30);
  B(.3,3.4,64,'#d8cfbf',95.5,0,-30,{solid:true});B(.3,3.4,64,'#d8cfbf',104.5,0,-30,{solid:true});B(9,3.4,.3,'#d8cfbf',100,0,-62,{solid:true});EX.walls.push({x0:95,x1:105,z0:2,z1:2.4});
  for(let z=-4;z>-62;z-=10)pointLight(100,3,z,.6,14,0xffe8c8);
  for(let n=20,z=-6;z>-60;z-=8,n++)for(const sd of[-1,1]){const num=n*2+(sd>0?1:0)-20,x=100+sd*4.3,mine=num===26;
    B(.1,2.4,1.4,mine?'#f0c23b':'#5a3b24',x,0,z,{e:mine?0x5a4410:0,ei:mine?1:0});
    sign(`SUITE ${num}`,x-sd*.08,2.75,z,1.4,.3,sd>0?-Math.PI/2:Math.PI/2,{bg:mine?'#f0c23b':'#0b1310',fg:mine?'#0b1310':'#f0c23b'});
    if(mine){EX.myDoor={x:x-sd*1.3,z};sign(me.name.toUpperCase(),x-sd*.08,2.45,z,1.4,.22,sd>0?-Math.PI/2:Math.PI/2,{bg:'#0b1310',fg:'#ffffff',size:.7})}}
  const sh=new THREE.Shape();sh.moveTo(0,.7);sh.lineTo(.55,-.2);sh.lineTo(0,.1);sh.lineTo(-.55,-.2);sh.lineTo(0,.7);
  const arrows=[];for(let z=-1;z>EX.myDoor.z+1;z-=3){const a=new THREE.Mesh(new THREE.ShapeGeometry(sh),new THREE.MeshBasicMaterial({color:0xf0c23b,side:THREE.DoubleSide}));a.rotation.x=-Math.PI/2;a.position.set(100,.03,z);sc.add(a);arrows.push(a)}
  const turn=new THREE.Mesh(new THREE.ShapeGeometry(sh),new THREE.MeshBasicMaterial({color:0xf0c23b,side:THREE.DoubleSide}));turn.rotation.x=-Math.PI/2;turn.rotation.z=EX.myDoor.x>100?-Math.PI/2:Math.PI/2;turn.position.set(100,.03,EX.myDoor.z);sc.add(turn);arrows.push(turn);
  EX.upd.push(()=>arrows.forEach((a,i)=>a.scale.setScalar(1+.15*Math.max(0,Math.sin(EX.t*5-i*.6)))));
  item(EX.myDoor.x,EX.myDoor.z,'Open the door to Suite 26',()=>{EX.leaving=true;cutscene('Suite 26','The door swings open onto the noise of the stadium',1500,startSuite)},2);
  EX.p={x:0,z:4,yaw:-Math.PI/2,bob:0};
}

/* ---------- 3. the suite and the live final ---------- */
function startSuite(){
  if(!enterPlay('explore'))return;
  dropExploreScene();
  const grp=new THREE.Group();R.scene.add(grp);
  EX={kind:'suite',scene:grp,inMain:true,floorY:SUITE.y,walls:[],circles:[],items:[],upd:[],people:[],p:{x:6,z:41,yaw:-Math.PI/2,bob:0},act:false,t:0,paused:false,crowd:.2,activity:null,camPos:new THREE.Vector3(),camLook:new THREE.Vector3()};
  startWatchedFinal();buildSuite();
  $('#exPlace').textContent=EX.place;$('#exGoal').textContent=EX.goal;$('#exMsg').hidden=true;$('#actHud').hidden=true;
  crowd(EX.crowd,1);
}
function startWatchedFinal(){
  const fin=S.rounds[S.rounds.length-1].ties[0],kits=teamKits(fin.a,fin.b);
  clearPlayers();clearExtras();
  M=newMatchState([fin.a,fin.b],kits,true,'World Cup Final');M.watch=true;
  buildSquads(kits,1);
  M.gks=[M.players.find(p=>p.team===0&&p.i===0),M.players.find(p=>p.team===1&&p.i===0)];
  M.buff={};M.speed=1;M.subbed=true;M.subPending=0;M.walkOff=null;M.benchView=false;
  M.me={x:0,y:HW+40,vx:0,vy:0,fx:0,fy:-1,call:0,stamina:1,r:80,dummy:true};   // you're in the stands, not on the pitch
  buildBenches(kits);
  setStadiumFor(fin.a,fin.b,'WORLD CUP FINAL');
  kickoff(0);whistle(1);
}
const scoreLine=()=>`${M.ids[0]} ${M.score[0]}–${M.score[1]} ${M.ids[1]} · ${M.phase==='ht'?'Half time':M.phase==='end'?'Full time':Math.max(1,Math.ceil(M.clock))+"'"}${penLine()}`;
function matchTalk(){const[a,b]=M.score;if(a===b)return a?'"Level again! Somebody is going to be a hero tonight."':'"Still goalless. One moment will decide this."';
  const lead=TM[M.ids[a>b?0:1]].name;return`"${lead} are in front, but a final is never over until the whistle."`}
function buildSuite(){
  const fin=S.rounds[S.rounds.length-1].ties[0],F=SUITE.y,{x0,x1,z0,z1}=SUITE,zc=(z0+z1)/2,sc=EX.scene;
  EX.place='New York New Jersey Stadium · Suite 26';
  EX.goal=`World Cup Final: ${TM[fin.a].name} vs ${TM[fin.b].name}. Sit by the glass, eat, and meet the other guests.`;
  EX.skipMain=suiteSkip;EX.skip=suiteSkip;
  // the room
  B(x1-x0,.25,z1-z0,'#3a2f28',0,F-.25,zc,{r:.9});B(x1-x0,.2,z1-z0,'#1a1d24',0,F+3.2,zc);
  B(x1-x0,3.2,.2,'#2b2f3a',0,F,z1,{solid:true});B(.2,3.2,z1-z0,'#2b2f3a',x0,F,zc,{solid:true});B(.2,3.2,z1-z0,'#2b2f3a',x1,F,zc,{solid:true});
  B(x1-x0,.55,.25,'#1b2232',0,F,z0+.1,{solid:true});B(x1-x0,2.65,.06,'#9fc3e8',0,F+.55,z0,{op:.12,r:.05});
  B(x1-x0,.25,8,'#20242c',0,F-.5,z0+4);   // underside seen from the pitch
  pointLight(-3,F+2.8,zc,.7,14,0xffe8c8);pointLight(4,F+2.8,zc,.7,14,0xffe8c8);
  for(let x=-7;x<=7;x+=2.3)B(.7,.5,.7,'#5a1f2a',x,F,z0+1.1,{solid:true});
  item(0,z0+2.1,'Sit by the glass and watch the match',()=>startActivity({title:'Watching the final',cam:[EX.p.x,F+1.9,z0+.75],look:[0,0,0],
    update:A=>{A.look=[M.ball.x,.6,M.ball.y]},hint:()=>`${scoreLine()} · Press S to get up`}),3);
  // TV with the live score
  const tvC=document.createElement('canvas');tvC.width=512;tvC.height=256;const tvT=new THREE.CanvasTexture(tvC);tvT.encoding=THREE.sRGBEncoding;
  const tv=new THREE.Mesh(new THREE.PlaneGeometry(2.6,1.3),new THREE.MeshBasicMaterial({map:tvT}));tv.position.set(x0+.12,F+1.9,zc);tv.rotation.y=Math.PI/2;sc.add(tv);
  const drawTV=()=>{const g=tvC.getContext('2d');g.fillStyle='#06101e';g.fillRect(0,0,512,256);g.fillStyle='#f0c23b';g.font='800 30px "Big Shoulders Display",Impact,sans-serif';g.textAlign='center';g.fillText('WORLD CUP FINAL · LIVE',256,44);
    g.fillStyle='#ffffff';g.font='900 86px "Big Shoulders Display",Impact,sans-serif';g.fillText(`${M.ids[0]} ${M.score[0]}–${M.score[1]} ${M.ids[1]}`,256,140);
    g.font='700 34px "Barlow Semi Condensed",sans-serif';g.fillStyle='#9fd3ff';const e=M.events[M.events.length-1];g.fillText(M.phase==='ht'?'Half time':M.phase==='end'?'Full time'+penLine():`${Math.max(1,Math.ceil(M.clock))}'${e?`   ·   ${e.name} ${e.min}'`:''}`,256,200);tvT.needsUpdate=true};
  // buffet
  B(6,.9,.9,'#5a3b24',2,F,z1-.6,{solid:true});
  for(let k=0;k<6;k++)B(.5,.12,.4,['#c0605a','#f3e3b0','#5aa03a','#e8c020','#7a3a8a','#d89a4a'][k],-.4+k*.95,F+.9,z1-.6);
  sign('BUFFET',2,F+2.4,z1-.12,2.4,.45,Math.PI,{bg:'#0b1310',fg:'#f0c23b'});
  item(2,z1-1.6,'Fill a plate at the buffet',()=>eatPieces('Suite buffet',[2,F+1.5,z1-1.7],[2,F+.92,z1-.6],foodStack(2,F+.93,z1-.6,FOODS.buffet),'Lobster rolls, sliders and a tiny dessert. Very fancy.'),2.2);
  // guests: real celebrities, plus a current star whose team is already out
  const out=Object.values(TM).filter(t=>t.id!==fin.a&&t.id!==fin.b&&t.id!==S.user).sort((a,b)=>b.r-a.r)[0],star=out.players[out.star];
  const guests=[...CELEBS,{n:star.name,k:`${out.name} star`,look:['#1f2533','#1f2533','#111111'],line:'We wanted to be down there tonight. Next time, it\'s us.',legend:true}];
  const spots=[[-7,36.6],[-4.6,40.6],[-2,37.2],[1.2,41.2],[3.6,36.9],[3.4,39.6],[-7.2,40.9],[7.6,37.3],[-.4,39.6]];
  EX.guests=guests.map((c,i)=>{const[x,z]=spots[i],face=Math.atan2(41-z,6-x);
    const p=person(c.look,'','celeb-'+c.n,x,z,face,{y:F,trousers:c.look[1]});p.tag=nameTag(c.n,c.k,x,F+2.15,z);p.c=c;
    p.it=item(x,z,`Talk to ${c.n}`,()=>talkCeleb(p),1.8,()=>p.mesh.root.visible);return p});
  buildStairs();
  EX.tvTimer=0;drawTV();
  EX.upd.push(dt=>{watchUpdate(dt);EX.tvTimer-=dt;if(EX.tvTimer<=0){EX.tvTimer=.4;drawTV();if(!EX.activity)$('#exGoal').textContent=`World Cup Final · ${scoreLine()}`}});
  setTimeout(()=>exMsg(`Welcome to Suite 26. ${guests.slice(0,3).map(g=>g.n).join(', ')} and more are already here.`),600);
}
function talkCeleb(p){
  const c=p.c;startActivity({title:c.n,cam:[EX.p.x,SUITE.y+1.65,EX.p.z],look:[p.x,SUITE.y+1.5,p.y],cancel:false});
  const opts=[{label:'Ask for a selfie',reply:`"Of course!" ${c.n} leans in. Click. That one's going straight to the family group chat.`,fn:flash},
    {label:'Talk about the match',reply:matchTalk()}];
  if(c.legend)opts.push({label:'Ask them to sign your VIP pass',reply:`${c.n} signs your pass and hands it back with a grin.`});
  opts.push({label:'Say goodbye'});
  const line=c.perf&&M.half===2?'What a crowd out there! Did you catch our show?':c.line;
  choice(`${c.n} · ${c.k}`,`"${line}"`,opts);
}
function watchUpdate(dt){
  if(!M||!M.watch)return;
  if(EX.pens&&PS&&PS.auto){pensFrame(dt);for(const f of M.bench)animPlayer(f,dt,{sit:f.sit});return}
  if(M.phase!=='end'&&M.phase!=='ht'){EX.acc=(EX.acc||0)+dt;let n=0;while(EX.acc>=1/60&&n<6){step(1/60);EX.acc-=1/60;n++}}
  for(const p of M.players)animPlayer(p,dt,p.onStage?{y:.35}:{});for(const f of M.bench)animPlayer(f,dt,{sit:f.sit});
  if(!EX.route)syncBall(dt);
  if(EX.show)showUpdate(dt);
}
function finalizeWatchedFinal(pens){
  if(S.champion)return;const t=S.rounds[S.rounds.length-1].ties[0],[a,b]=M.score;
  t.sa=a;t.sb=b;
  if(a!==b)t.w=a>b?t.a:t.b;
  else if(pens){t.pens=pens;t.w=pens[0]>pens[1]?t.a:t.b}
  else{const aw=Math.random()<.5+(TM[t.a].r-TM[t.b].r)/80,p1=3+((Math.random()*3)|0),p2=p1-1-((Math.random()*2)|0);t.pens=aw?[p1,p2]:[p2,p1];t.w=aw?t.a:t.b}
  creditMatch(t.a,t.b,a,b,{events:M.events.slice(),saves:[M.gks[0].saves,M.gks[1].saves],st:summStats()});
  S.champion=t.w;S.watchedFinal=true;save();
}
function goCelebration(presented){setStands(true);dropExploreScene();EX.inMain=false;startCelebration(S.champion,{spectator:true,presented:!!presented})}

/* ---------- 5. full time, penalties, and down to the pitch to present the trophy ---------- */
const PRESIDENT={n:'Gianni Infantino',k:'FIFA President'};
const penLine=()=>M&&M.pens?` (${M.pens[0]}–${M.pens[1]} pens)`:EX&&EX.pens&&PS&&PS.auto?` · pens ${PS.k[0].filter(Boolean).length}–${PS.k[1].filter(Boolean).length}`:'';
function suiteSkip(){
  if(EX.leaving)return;
  if(EX.show){endShow();return}
  if(EX.route){finishPresentation();return}
  if(M.phase!=='end'){ffToEnd();return}
  if(!S.champion){clearTimeout(EX.pensT);quickPens();return}
  fullTimePopup();
}
function ffToEnd(){
  EX.ff=true;
  cutscene('Full time','The rest of the final flies by',1400,()=>{
    let n=0;while(M.phase!=='end'&&n<400000){if(M.phase==='ht'){if(EX.show)endShow(true);else{M.half=2;kickoff(1)}}step(1/60);n++}
    EX.ff=false;if(!S.champion)quickPens()});
}
function watchFullTime(){
  const[a,b]=M.score;roar();
  if(a===b){exMsg(`Full time, ${a}–${b}. The World Cup final goes to penalties!`);if(!EX.ff)EX.pensT=setTimeout(startWatchPens,2800);return}
  finalizeWatchedFinal();exMsg(`Full time! ${TM[S.champion].name} are world champions!`);
  EX.pensT=setTimeout(fullTimePopup,2800);
}
// the shootout plays out live: both kickers and both keepers are computer-controlled
function startWatchPens(){
  if(!EX||EX.kind!=='suite'||S.champion||EX.pens)return;
  const ord=t=>{const team=TM[M.ids[t]],o=[team.star];for(const i of[6,5,4,3,2,1,0])if(!o.includes(i))o.push(i);return o};
  PS={auto:true,k:[[],[]],turn:0,phase:'runup',t:0,aim:{y:0,z:1},order:[ord(0),ord(1)]};
  M.players.forEach(p=>{p.vx=p.vy=0;p.slide=p.stun=0;p.dive=null;p.kickT=0;p.celebrate=false});
  R.ball.visible=true;EX.pens=true;whistle(1);
  exMsg('Penalties! Sit by the glass for the best view.');
  nextKick();
}
function quickPens(){
  EX.pens=false;PS={auto:true,k:PS&&PS.auto&&PS.k?PS.k:[[],[]]};
  let t=PS.k[0].length>PS.k[1].length?1:0;
  while(penWinner()==null){PS.k[t].push(Math.random()<.76);t=1-t}
  watchPensDone(PS.k[0].filter(Boolean).length,PS.k[1].filter(Boolean).length);
}
function watchPensDone(sa,sb){
  EX.pens=false;M.pens=[sa,sb];
  finalizeWatchedFinal([sa,sb]);roar();
  exMsg(`${TM[S.champion].name} win ${Math.max(sa,sb)}–${Math.min(sa,sb)} on penalties. They are world champions!`);
  EX.pensT=setTimeout(fullTimePopup,2800);
}
function fullTimePopup(){
  if(!EX||EX.kind!=='suite'||EX.route||EX.leaving||!S.champion)return;
  clearTimeout(EX.pensT);if(EX.activity)endActivity();
  const t=S.rounds[S.rounds.length-1].ties[0],champ=TM[S.champion];
  EX.paused=true;const ov=$('#overlay');ov.hidden=false;
  ov.innerHTML=`<p class="eyebrow">Full time · World Cup Final</p><h3>${esc(champ.name)} are world champions!</h3><p>${esc(TM[t.a].name)} ${t.sa}–${t.sb} ${esc(TM[t.b].name)}${t.pens?` (${t.pens[0]}–${t.pens[1]} on penalties)`:''}</p><p>A tournament official rushes into the suite: "You're presenting the trophy tonight with the FIFA President. Follow the arrow down to the pitch!"</p><div class="ov-actions"><button type="button" class="btn primary" id="ovGo">Follow the arrow</button></div>`;
  $('#ovGo').onclick=()=>{ov.hidden=true;EX.paused=false;startRoute()};$('#ovGo').focus();
}

// the gold arrow floats over wherever you need to go next
function makeArrow(){
  const g=new THREE.Group(),mat=new THREE.MeshStandardMaterial({color:0xf0c23b,emissive:0xf0c23b,emissiveIntensity:.8,roughness:.4});
  const head=new THREE.Mesh(new THREE.ConeGeometry(.38,.6,16),mat);head.rotation.x=Math.PI;head.position.y=.3;g.add(head);
  const shaft=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,.6,10),mat);shaft.position.y=.9;g.add(shaft);
  EX.scene.add(g);return g}
function routeUpdate(dt){
  const r=EX.route,a=EX.arrow;if(!r||!a)return;const w=r[0];
  if(!w){a.visible=false;return}
  const x=w.p?w.p.x:w.x,z=w.p?w.p.y:w.z;
  if(w.auto&&Math.hypot(EX.p.x-x,EX.p.z-z)<1.6){r.shift();return}
  a.visible=true;a.position.set(x,(w.y??(EX.floorAt?EX.floorAt(x,z):EX.floorY||0))+(w.h||2.3)+Math.sin(EX.t*4)*.15,z);a.rotation.y+=dt*2;
  if(EX.carry&&!EX.activity){const P=EX.p,e=(EX.floorAt?EX.floorAt(P.x,P.z):0)+1.65,c=Math.cos(P.yaw),s=Math.sin(P.yaw);
    EX.trophy.position.set(P.x+c*.85-s*.22,e-.5,P.z+s*.85+c*.22);EX.trophy.rotation.y=-P.yaw}
  else if(EX.trophy&&!EX.carry&&!EX.activity)EX.trophy.rotation.y+=dt*.5;
}
function setStands(v){if(R&&R.scene)R.scene.traverse(o=>{if(o.isMesh&&o.material&&o.material.map&&o.material.map===R.crowdTex)o.visible=v})}

// a stairwell beside the suite, running down inside the lower stand
const STW={x0:9.4,x1:18,z0:39.4,z1:41.4,top:SUITE.y,bot:SUITE.y-5.1,s0:11,s1:16.5};
const stairY=x=>{const s=STW;return x<=s.s0?s.top:x>=s.s1?s.bot:s.top-(x-s.s0)/(s.s1-s.s0)*(s.top-s.bot)};
function buildStairs(){
  const s=STW,zc=(s.z0+s.z1)/2,w=s.z1-s.z0,len=s.x1-s.x0,xc=(s.x0+s.x1)/2,base=s.bot-.4,hh=s.top+3.4-base;
  B(len,hh,.15,'#7d7a73',xc,base,s.z0-.08);B(len,hh,.15,'#7d7a73',xc,base,s.z1+.08);
  B(.15,hh,w+.3,'#7d7a73',s.x0-.08,base,zc);B(.15,hh,w+.3,'#7d7a73',s.x1+.08,base,zc);
  B(len+.3,.15,w+.3,'#2a2e36',xc,s.top+3.4,zc);
  B(s.s0-s.x0,.4,w,'#5a5f6a',(s.x0+s.s0)/2,s.top-.4,zc);B(s.x1-s.s1,.4,w,'#5a5f6a',(s.s1+s.x1)/2,s.bot-.4,zc);
  const n=17,run=(s.s1-s.s0)/n;
  for(let i=0;i<n;i++){const x=s.s0+run*(i+.5),y=stairY(x);B(run+.01,y-base,w,i%2?'#40444d':'#383c44',x,base,zc);B(.06,.03,w,'#f0c23b',x+run/2-.04,y,zc)}
  for(const x of[10.2,13.7,17.2])pointLight(x,stairY(x)+2.7,zc,.55,8);
  B(.08,2.3,1.3,'#7a5a3a',s.x1-.06,s.bot,zc);sign('TO THE PITCH',s.x1-.12,s.bot+2.6,zc,1.6,.32,-Math.PI/2,{bg:'#0b1310',fg:'#f0c23b'});
}

function startRoute(){
  const F=SUITE.y;
  EX.arrow=makeArrow();EX.upd.push(routeUpdate);
  EX.goal='Follow the gold arrow: out of the suite, down the stairs and onto the pitch.';$('#exGoal').textContent=EX.goal;
  B(.08,2.3,1.3,'#7a5a3a',SUITE.x1-.14,F,40.4);sign('STAIRS TO PITCH',SUITE.x1-.2,F+2.65,40.4,1.8,.32,-Math.PI/2,{bg:'#0b1310',fg:'#f0c23b'});
  EX.route=[{x:SUITE.x1-.6,z:40.4}];
  item(SUITE.x1-.6,40.4,'Open the door to the stairs',enterStairs,1.8,()=>!EX.stairs);
  buildCeremony();
  exMsg('Follow the gold arrow.');
}
function enterStairs(){
  if(EX.stairs)return;EX.stairs=true;
  cutscene('Suite 26','You slip out of the side door',900,()=>{
    EX.walls=[];EX.circles=[];EX.items=[];setStands(false);
    EX.floorAt=(x,z)=>stairY(x);EX.valid=(x,z)=>x>STW.x0+.3&&x<STW.x1-.35&&z>STW.z0+.3&&z<STW.z1-.3;
    EX.p.x=STW.x0+.7;EX.p.z=40.4;EX.p.yaw=0;
    EX.route=[{x:STW.x1-.6,z:40.4}];
    item(STW.x1-.6,40.4,'Open the door to the stand',enterStand,1.8,()=>!EX.inStand);
    EX.place='New York New Jersey Stadium · Stairs to the pitch';$('#exPlace').textContent=EX.place;
    crowd(.08,.6)});
}

// the aisle runs down the lower stand at x=20, then a few steps drop to pitch level
const standSurf=z=>1.6+(z-HW-8)*28.4/32;
function standFloor(x,z){if(z>=HW+8)return standSurf(z);if(z>=HW+6.5)return(z-HW-6.5)/1.5*1.6;return x>3.5&&x<9.5&&z>18&&z<22?.35:0}
function standValid(x,z){
  const inAisle=x>19.6&&x<20.8;
  if(z>HW+8.05)return inAisle&&z<HW+12.5;
  if(z>HW+6.4)return inAisle;
  if(z>HW+2.6&&z<HW+4.9)return(x>12.5&&x<14.6)||(x>-3.5&&x<3.5)||(x>-14.6&&x<-12.5);   // gaps between the boards and dugouts
  return Math.abs(x)<HL+3&&z>-HW-2.5;
}
function enterStand(){
  if(EX.inStand)return;EX.inStand=true;
  cutscene('Pitch level','The door opens onto the stand, and the noise hits you',1000,()=>{
    setStands(true);buildAisle();ceremonyItems();
    EX.floorAt=standFloor;EX.valid=standValid;
    EX.p.x=20.2;EX.p.z=HW+12.1;EX.p.yaw=-Math.PI/2;
    EX.route=[{x:20.2,z:HW+7.2,auto:true},{x:13.6,z:HW+5.4,auto:true},{x:13.6,z:HW+1.6,auto:true},{p:EX.pres,y:.35,h:2.9}];
    EX.place='New York New Jersey Stadium · Pitchside';$('#exPlace').textContent=EX.place;
    EX.goal=`Walk down the aisle to the pitch and meet ${PRESIDENT.n}, the ${PRESIDENT.k}, on the trophy stage.`;$('#exGoal').textContent=EX.goal;
    crowd(.75,.5);roar()});
}
function buildAisle(){
  const champ=TM[S.champion],t=S.rounds[S.rounds.length-1].ties[0],other=TM[t.w===t.a?t.b:t.a];
  B(2.4,2.6,1.4,'#0d0f14',20.2,standSurf(HW+12.6)-.2,HW+13.3);B(2.8,.35,1.6,'#2a2e36',20.2,standSurf(HW+12.6)+2.4,HW+13.3);
  for(let i=0;i<9;i++){const z=HW+12.4-.49*(i+.5),y=standSurf(z);B(1.5,.65,.5,i%2?'#6b707b':'#5f646e',20.2,y-.6,z);B(1.5,.03,.06,'#f0c23b',20.2,y+.05,z-.22)}
  for(let i=0;i<3;i++)B(1.5,1.2-i*.4,.5,'#6b707b',20.2,0,HW+7.75-i*.5);
  for(const x of[19.35,21.05])for(let z=HW+8.4;z<HW+12.4;z+=1)B(.05,.9,.05,'#c9a94a',x,standSurf(z),z);
  for(let i=0;i<10;i++){const x=i%2?21.9:18.5,z=HW+8.6+(i>>1)*.8,kit=(i%3?champ:other).kit;
    person(kit,'','aisle-fan'+i,x,z,-Math.PI/2,{y:standSurf(z)})}
}
function buildCeremony(){
  const w=S.champion===M.ids[0]?0:1,team=TM[S.champion];
  B(6,.35,4,'#101724',6.5,0,20);B(6.1,.06,.08,'#f0c04a',6.5,.32,22.02);
  sign('WORLD CUP FINAL · NEW YORK NEW JERSEY 2026',6.5,2.2,17.9,6,.8,0,{bg:'#0b1310',fg:'#f0c23b'});
  B(.55,1.05,.55,'#f4f4f4',8.6,.35,19.3);
  EX.trophy=makeTrophy();EX.trophy.position.set(8.6,1.4,19.3);EX.scene.add(EX.trophy);
  EX.pres=person(['#1b1f2a','#f4f4f4','#111111'],'','fifa-president',5.8,19.2,Math.PI/2,{y:.35,trousers:'#1b1f2a'});
  EX.presTag=nameTag(PRESIDENT.n,PRESIDENT.k,5.8,.35+2.25,19.2);
  // the champions line up in front of the stage; their captain waits on it
  const cap=M.players.find(p=>p.team===w&&p.i===team.star);let k=0,j=0;
  for(const p of M.players){p.vx=p.vy=0;p.dive=null;p.slide=p.stun=0;p.kickT=0;p.celebrate=false;
    if(p===cap){p.x=4.3;p.y=20.6;p.fx=1;p.fy=0;p.onStage=true;continue}
    if(p.team===w){p.x=2.4+k*1.4;p.y=23.6;p.fx=0;p.fy=-1;k++}
    else{p.x=-14+j*1.4;p.y=21;p.fx=1;p.fy=0;j++}}
  EX.cap=cap;R.ball.visible=false;
}
function ceremonyItems(){
  const team=TM[S.champion],cap=EX.cap;
  item(EX.pres.x,EX.pres.y,`Meet ${PRESIDENT.n}, ${PRESIDENT.k}`,meetPresident,1.9,()=>EX.inStand&&!EX.met);
  item(8.6,19.9,'Pick up the World Cup trophy',()=>{EX.carry=true;tone(660,.15,.06);EX.route=[{p:cap,y:.35,h:2.9}];
    exMsg(`Now hand it to ${team.players[team.star].name}, the ${team.name} captain.`)},1.6,()=>EX.met&&!EX.carry);
  item(cap.x+.9,cap.y,`Present the trophy to ${team.players[team.star].name}`,presentTrophy,1.7,()=>EX.carry);
}
function meetPresident(){
  const p=EX.pres,met=()=>{EX.met=true;EX.route=[{x:8.6,z:19.3,y:1.4,h:1.2}];exMsg('Pick up the trophy from the plinth.')};
  startActivity({title:PRESIDENT.n,cam:[EX.p.x,standFloor(EX.p.x,EX.p.z)+1.65,EX.p.z],look:[p.x,.35+1.55,p.y],cancel:false});
  choice(`${PRESIDENT.n} · ${PRESIDENT.k}`,'"What a final! Thank you for being here. Shall we present the trophy together?"',
    [{label:'Shake hands',reply:`"An honour to have you here tonight," says ${PRESIDENT.n}, shaking your hand.`,fn:met},{label:"Let's do it",fn:met}]);
}
function presentTrophy(){
  const cap=EX.cap,team=TM[S.champion],name=team.players[team.star].name,from=EX.trophy.position.clone(),to=new THREE.Vector3(cap.x+.38,.35+1.05,cap.y);
  EX.route=[];EX.carry=false;
  startActivity({title:'Trophy presentation',cam:[EX.p.x,.35+1.65,EX.p.z],look:[cap.x,.35+1.5,cap.y],dur:2.4,cancel:false,
    hint:`You hand the World Cup to ${name}...`,update:A=>{const k=Math.min(1,A.t/2);EX.trophy.position.lerpVectors(from,to,k*k*(3-2*k))},
    done:()=>{roar();finishPresentation()}});
}
function finishPresentation(){
  if(EX.leaving)return;EX.leaving=true;const team=TM[S.champion];
  cutscene('World champions',`${team.players[team.star].name} lifts the World Cup`,1500,()=>goCelebration(true));
}

/* ---------- 4. the halftime show ---------- */
function watchHalfTime(){
  const sc=EX.scene,show={t:0,beat:0,parts:[],beams:[],dancers:[]};EX.show=show;
  const add=m=>{sc.add(m);show.parts.push(m);return m};
  add(new THREE.Mesh(new THREE.BoxGeometry(16,1.2,9),exMat('#14161c'))).position.set(0,.6,0);
  const led=add(new THREE.Mesh(new THREE.BoxGeometry(16,6,.4),exMat('#000000',{e:0xffffff,ei:1})));led.position.set(0,4.2,-4.3);show.led=led;
  for(let k=0;k<6;k++){const beam=add(new THREE.Mesh(new THREE.ConeGeometry(2.2,28,20,1,true),new THREE.MeshBasicMaterial({color:[0xff4fd8,0x4fd8ff,0xffd24f][k%3],transparent:true,opacity:.18,blending:THREE.AdditiveBlending,depthWrite:false,side:THREE.DoubleSide})));
    beam.position.set(-7+k*2.8,14,-3);show.beams.push(beam)}
  const performers=EX.guests.filter(g=>g.c.perf);
  performers.forEach(g=>{g.mesh.root.visible=false;g.tag.visible=false});
  M.players.forEach(p=>p.mesh.root.visible=false);R.ball.visible=false;
  performers.forEach((g,i)=>{const p={x:-1.6+i*3.2,y:0,vx:0,vy:0,fx:0,fy:1,kickT:0,slide:0,dive:null,o:{y:1.2,wave:2}};p.mesh=makePlayerMesh(g.c.look,'','stage-'+g.c.n,false,{scene:sc,scale:1.6,trousers:g.c.look[1]});show.parts.push(p.mesh.root);show.dancers.push(p);
    const tag=nameTag(g.c.n,'Halftime show',p.x,5,0);show.parts.push(tag)});
  for(let k=0;k<6;k++){const p={x:-6+k*2.4,y:2.5,vx:0,vy:0,fx:0,fy:1,kickT:0,slide:0,dive:null,o:{y:1.2,wave:k%2?1:2}};p.mesh=makePlayerMesh(['#ffffff','#111111','#111111'],'','dancer'+k,false,{scene:sc,scale:1.25});show.parts.push(p.mesh.root);show.dancers.push(p)}
  EX.skip=endShow;crowd(.55,.4);
  exMsg(`Halftime show! ${performers.map(g=>g.c.n).join(' and ')} take the stage. Press Skip to go straight to the second half.`);
}
function showUpdate(dt){
  const s=EX.show;s.t+=dt;s.beat-=dt;
  s.dancers.forEach((d,i)=>{d.vx=Math.sin(s.t*4+i)*2;animPlayer(d,dt,d.o);d.mesh.root.position.y=1.2+Math.abs(Math.sin(s.t*5+i))*.25});
  s.beams.forEach((b,i)=>{b.rotation.z=Math.sin(s.t*1.4+i)*.5;b.rotation.x=Math.cos(s.t*1.1+i)*.3});
  s.led.material.emissive.setHSL((s.t*.15)%1,.8,.5);
  if(s.beat<=0){s.beat=.46;tone(70,.16,.22,'sine',40);if(Math.random()<.6)tone(880+Math.random()*440,.06,.03,'square')}
  if(s.t>40)endShow();
}
function endShow(silent){
  const s=EX.show;if(!s)return;EX.show=null;
  s.parts.forEach(m=>{EX.scene.remove(m);disposeTree(m)});
  EX.guests.filter(g=>g.c.perf).forEach(g=>{g.mesh.root.visible=true;g.tag.visible=true});
  M.players.forEach(p=>p.mesh.root.visible=true);R.ball.visible=true;
  EX.skip=EX.skipMain;crowd(.2,1);
  M.half=2;kickoff(1);if(!silent){whistle(1);exMsg('The performers are back in the suite, buzzing. Second half under way.')}
}

/* =====================================================================
   INPUT
   ===================================================================== */
const KEYMAP={arrowup:'u',w:'u',arrowdown:'d',s:'d',arrowleft:'l',a:'l',arrowright:'r',d:'r'};
let touchMode=matchMedia('(pointer: coarse)').matches;
const inPlay=()=>!!(R&&R.mode&&!$('#s-play').hidden);
function pressShoot(){if(!inPlay())return;if(R.mode==='explore'){if(EX)EX.act=true;return}if(!M)return;if(R.mode==='match'&&(M.paused||M.phase==='end'||M.phase==='ht'))return;keys.shoot=1;M.press.shoot=true}
addEventListener('keydown',e=>{
  if(!inPlay())return;const k=e.key.toLowerCase();
  if(KEYMAP[k]){keys[KEYMAP[k]]=1;e.preventDefault();return}
  if(k==='shift'||k==='l'){keys.sprint=1;return}
  if(e.repeat)return;
  if(k===' '||k==='spacebar'||k==='j'){if(e.target.tagName==='BUTTON')return;pressShoot();e.preventDefault()}
  else if(k==='x'||k==='k'||k==='e'){if(R.mode==='explore'){if(EX)EX.act=true}else if(M)M.press.pass=true;e.preventDefault()}
  else if(k==='b'&&R.mode==='match')signalCoach();
  else if((k==='p'||k==='escape')&&R.mode==='match')setPause(!M.paused);
  else if(k==='c'&&R.mode==='match')toggleCam();
  else if(k==='c'&&R.mode==='explore'&&EX&&EX.drive)EX.cockpit=!EX.cockpit;
});
function toggleCam(){
  if(M&&M.subbed&&R&&R.mode==='match'){M.benchView=!M.benchView;$('#camBtn').textContent='Camera: '+(M.benchView?'bench':'TV');return}camMode=camMode==='fp'?'player':camMode==='player'?'broadcast':'fp';$('#camBtn').textContent='Camera: '+CAM_NAMES[camMode];
  if(M&&camMode==='fp')M.fpYaw=Math.atan2(M.me.fy,M.me.fx);
  try{localStorage.setItem('worldcuprun.cam',camMode)}catch(e){}if(M&&R&&R.mode==='match')snapCam()}
$('#camBtn').onclick=()=>{if(inPlay()&&R.mode==='match')toggleCam()};
try{const c=localStorage.getItem('worldcuprun.cam');if(CAM_NAMES[c])camMode=c}catch(e){}
$('#camBtn').textContent='Camera: '+CAM_NAMES[camMode];
addEventListener('keyup',e=>{const k=e.key.toLowerCase();if(KEYMAP[k])keys[KEYMAP[k]]=0;if(k===' '||k==='spacebar'||k==='j')keys.shoot=0;if(k==='shift'||k==='l')keys.sprint=0});
addEventListener('blur',()=>{keys.u=keys.d=keys.l=keys.r=keys.shoot=keys.sprint=0});
document.addEventListener('visibilitychange',()=>{if(document.hidden&&inPlay()&&R.mode==='match'&&!M.paused)setPause(true)});
$('#pauseBtn').onclick=()=>{if(inPlay()&&R.mode==='match')setPause(!M.paused)};
$('#fsBtn').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await $('#stage').requestFullscreen()}catch(e){toast('Full screen is not available here')}};
const joyEl=$('#joy'),knob=$('#knob');
function moveJoy(e){let dx=e.clientX-joy.ox,dy=e.clientY-joy.oy;const Rr=46,d=Math.hypot(dx,dy);if(d>Rr){dx*=Rr/d;dy*=Rr/d}
  joy.x=dx/Rr;joy.y=dy/Rr;knob.style.transform=`translate(${dx}px,${dy}px)`}
joyEl.addEventListener('pointerdown',e=>{joy.id=e.pointerId;joyEl.setPointerCapture(e.pointerId);const r=joyEl.getBoundingClientRect();joy.ox=r.left+r.width/2;joy.oy=r.top+r.height/2;moveJoy(e);e.preventDefault()});
joyEl.addEventListener('pointermove',e=>{if(e.pointerId===joy.id)moveJoy(e)});
['pointerup','pointercancel','lostpointercapture'].forEach(ev=>joyEl.addEventListener(ev,e=>{if(e.pointerId===joy.id){joy.id=null;joy.x=joy.y=0;knob.style.transform=''}}));
const hold=(el,on,off)=>{el.addEventListener('pointerdown',e=>{e.preventDefault();try{el.setPointerCapture(e.pointerId)}catch(_){}on()});['pointerup','pointercancel','lostpointercapture'].forEach(ev=>el.addEventListener(ev,()=>off&&off()))};
hold($('#bShoot'),pressShoot,()=>keys.shoot=0);
hold($('#bPass'),()=>{if(!inPlay())return;if(R.mode==='explore'){if(EX)EX.act=true}else if(M)M.press.pass=true});
$('#subBtn').onclick=signalCoach;
$('#ffBtn').onclick=()=>{if(!M)return;M.speed=M.speed>1?1:4;$('#ffBtn').textContent=M.speed>1?'Normal speed':'Fast-forward'};
$('#skipBtn').onclick=()=>{if(R&&R.mode==='explore'&&EX&&EX.skip&&!EX.leaving)EX.skip()};
hold($('#bSprint'),()=>keys.sprint=1,()=>keys.sprint=0);
addEventListener('touchstart',()=>{if(!touchMode){touchMode=true;if(inPlay()&&R.mode!=='celebrate'){$('#touch').hidden=false;$('#stage').classList.add('touch-on')}}},{passive:true});

/* =====================================================================
   BOOT
   ===================================================================== */
(function boot(){renderTitle();cloudInit()})();
