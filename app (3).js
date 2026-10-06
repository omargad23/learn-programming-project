/* ===== ADD MORE: push [question, CORRECT, wrong1, wrong2, wrong3] into any level's array. Answers are shuffled automatically. ===== */
const L = ["Easy", "Medium", "Expert"];
const TRACKS = {
 web:{name:"HTML & CSS",k:"#ff6b35",logo:"</>",img:"assets/web.png",link:"https://youtu.be/G3e-cpL7ofc",
  project:"Build a personal portfolio page: header, nav, 3 project cards (CSS Grid), and a contact form. Make it responsive.",
  q:[[
   ["Which tag makes the biggest heading?","<h1>","<h6>","<head>","<big>"],
   ["CSS property for text color?","color","font-color","text-style","fg"],
   ["Which tag creates a link?","<a>","<link>","<href>","<url>"],
   ["How do you select class 'box' in CSS?",".box","#box","box","*box"],
   ["Which tag holds the visible page content?","<body>","<head>","<meta>","<title>"]],[
   ["Default display of a <div>?","block","inline","flex","grid"],
   ["Which creates a flex container?","display:flex","flex:1","position:flex","float:flex"],
   ["Which includes padding and border in width?","box-sizing:border-box","box-sizing:content-box","width:auto","overflow:hidden"],
   ["Semantic tag for navigation links?","<nav>","<menu>","<links>","<ul>"],
   ["Which unit is relative to viewport width?","vw","em","rem","px"]],[
   ["Highest specificity?","#a","div.a",".a","div"],
   ["Three equal grid columns?","grid-template-columns:repeat(3,1fr)","grid-columns:3","columns:3 grid","grid-cols:3"],
   ["The img alt attribute is mainly for?","Accessibility and fallback text","Styling","Lazy loading","Animation"],
   ["position:sticky sticks relative to?","Nearest scrolling ancestor","Viewport only","Body always","Parent's parent"],
   ["Pseudo-class for keyboard-only focus ring?",":focus-visible",":focus",":active",":hover"]]]},
 js:{name:"JavaScript",k:"#f7df1e",logo:"JS",img:"assets/js.png",link:"https://youtu.be/EerdehJQ",
  project:"Build a to-do app: add, complete and delete tasks, and save them with localStorage.",
  q:[[
   ["Declare a constant?","const","var","let","static"],
   ["Print to the console?","console.log()","print()","echo","log.print()"],
   ["typeof 'hi' is?","string","text","char","str"],
   ["Strict equality operator?","===","=","==","=>"],
   ["Array length property?","length","size","count","len"]],[
   ["'5' + 3 gives?","'53'","8","NaN","Error"],
   ["Add item to END of array?","push()","pop()","shift()","unshift()"],
   ["Arrow function syntax?","(x) => x * 2","x -> x * 2","function => x","=>(x)"],
   ["JSON.parse does what?","String to object","Object to string","Clones DOM","Validates HTML"],
   ["map() returns?","A new array","undefined","The same array","A number"]],[
   ["A closure is?","A function that remembers its outer scope","A loop","A class","A syntax error"],
   ["Promise.all rejects when?","Any one promise rejects","All reject","Never","After timeout"],
   ["typeof null is?","'object'","'null'","'undefined'","'number'"],
   ["Promise callbacks (microtasks) run ___ setTimeout callbacks","before","after","at the same time as","never with"],
   ["'this' inside an arrow function is?","Taken from the outer scope","The caller","Always window","Always undefined"]]]},
 py:{name:"Python",k:"#4b8bbe",logo:"Py",img:"assets/py.png",link:"https://youtu.be/Rq5gJVxz55Q",
  project:"Build a number-guessing game, then upgrade it with a high-score file and difficulty levels.",
  q:[[
   ["Print in Python?","print()","echo","console.log","printf"],
   ["Comment symbol?","#","//","<!--","--"],
   ["[1,2] is a?","list","tuple","set","array"],
   ["len('abc') returns?","3","2","4","Error"],
   ["Python marks blocks with?","Indentation","{ }","begin/end",";"]],[
   ["7 // 2 equals?","3","3.5","4","2"],
   ["Create a dict?","{'a': 1}","[]","(1)","<a>"],
   ["Keyword to define a function?","def","func","function","fn"],
   ["'ab' * 2 gives?","'abab'","'ab2'","Error","'a b'"],
   ["Which is immutable?","tuple","list","dict","set"]],[
   ["[x*x for x in range(3)] gives?","[0, 1, 4]","[1, 4, 9]","[0, 1, 2]","[0, 2, 4]"],
   ["A decorator does what?","Wraps a function with another","Adds a comment","Imports a module","Starts a loop"],
   ["Problem with def f(a=[])?","The list is shared between calls","Syntax error","It is slow","None"],
   ["The GIL lets?","One thread run bytecode at a time","Graphics run faster","Imports be cached","Lists be locked"],
   ["'is' vs '=='?","'is' checks identity","'is' checks value","They are identical","'is' is faster equality"]]]},
 sql:{name:"SQL",k:"#00c2a8",logo:"SQL",img:"assets/sql.png",link:"https://youtu.be/SSKVgrwhzus",
  project:"Design a library database (books, members, loans) and write 10 queries including joins and aggregates.",
  q:[[
   ["Get rows from a table?","SELECT","GET","FETCH","OPEN"],
   ["Filter rows?","WHERE","IF","FILTER","FIND"],
   ["Remove rows?","DELETE","DROP ROW","REMOVE","CUT"],
   ["Sort results?","ORDER BY","SORT BY","GROUP BY","ARRANGE"],
   ["Count rows function?","COUNT()","SUM()","TOTAL()","NUM()"]],[
   ["Combine matching rows of two tables?","JOIN","MERGE","LINK","STACK"],
   ["GROUP BY is usually used with?","Aggregate functions","Only WHERE","Triggers","Nothing"],
   ["A PRIMARY KEY is?","A unique, non-null row identifier","Any column","A backup","A join"],
   ["Filter AFTER grouping?","HAVING","WHERE","LIMIT","ORDER"],
   ["Add a new row?","INSERT INTO","ADD ROW","PUT","APPEND"]],[
   ["LEFT JOIN returns?","All left rows plus matches","Only matches","All right rows","Cross product"],
   ["An index mainly?","Speeds up lookups","Encrypts data","Backs up data","Removes duplicates"],
   ["Best defense against SQL injection?","Parameterized queries","Hiding table names","Longer passwords","Lowercasing input"],
   ["The 'I' in ACID?","Isolation","Indexing","Insertion","Identity"],
   ["NULL = NULL evaluates to?","NULL (unknown)","TRUE","FALSE","Error"]]]},
 sec:{name:"Cyber Security",k:"#ff2d55",logo:"{!}",img:"assets/sec.png",link:"https://youtu.be/KMOS1aPgpgo?list=PLQecpJ5wKrfsF7mZVJxvy53I7FimkGxzZ",
  project:"Set up a LEGAL practice lab (DVWA or OWASP Juice Shop in a VM) and write a report on 3 vulnerabilities you found and how to fix them.",
  q:[[
   ["Phishing is?","Fake messages that trick you","A firewall","A VPN","An antivirus"],
   ["A strong password is?","Long and unique","Your birthday","123456","Your pet's name"],
   ["Two-factor authentication adds?","A second proof of identity","Faster login","Ads","Backups"],
   ["HTTPS protects?","Traffic in transit","Your hard disk","Nothing","Only images"],
   ["Ethical hacking requires?","Written permission","Anonymity","A VPN","Nothing"]],[
   ["XSS injects?","Malicious scripts into web pages","SQL into a database","Viruses into BIOS","Packets into Wi-Fi"],
   ["Main defense against XSS?","Output encoding/escaping","Bigger fonts","Hiding the page","Disabling images"],
   ["CSRF tricks?","A browser into sending unwanted authenticated requests","A server into crashing","DNS into failing","Wi-Fi into dropping"],
   ["Passwords should be stored as?","Salted hashes (bcrypt/argon2)","Plain text","Base64","Reversible encryption"],
   ["Nmap is used for?","Network and port scanning","Photo editing","Compiling code","Video calls"]],[
   ["IDOR means?","Changing an ID to reach other users' data (missing auth check)","A DDoS type","A password hash","A firewall rule"],
   ["SSRF lets an attacker?","Make the server request internal URLs","Steal Wi-Fi keys","Reset a router","Crash the browser"],
   ["Which header helps mitigate XSS?","Content-Security-Policy","Accept","Host","Date"],
   ["Salting a hash prevents?","Precomputed rainbow-table attacks","All brute force","Phishing","XSS"],
   ["Least privilege means?","Give only the access that is needed","Everyone is admin","No passwords","Share accounts"]]]}
};

const $ = s => document.querySelector(s), app = $("#app");
let S = {}; try { S = JSON.parse(localStorage.getItem("cq") || "{}"); } catch (e) {}
const save = () => { try { localStorage.setItem("cq", JSON.stringify(S)); } catch (e) {} };
const best = (t, l) => (S[t + l] || 0);
const total = () => Object.values(S).reduce((a, b) => a + b, 0);
const shuffle = a => a.map(v => [Math.random(), v]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
const logo = (id, t) => `<img class="logo pic" src="${t.img}" alt="${t.name} logo" onerror="this.outerHTML='<div class=\\'logo\\'>${t.logo.replace(/</g, "&lt;")}</div>'">`;

/* ----- background: code rain + mouse movement ----- */
const cv = $("#rain"), cx = cv.getContext("2d"); let color = "#00e5ff", drops = [];
const SNIP = "<div> {} () => ; const SELECT def import ==  && || 0 1 #include </> $ sudo nmap XSS ' OR 1=1 -- function return print".split(" ");
function size() { cv.width = innerWidth + 120; cv.height = innerHeight + 120; drops = Array(Math.ceil(cv.width / 90)).fill(0).map(() => Math.random() * -50); }
addEventListener("resize", size); size();
setInterval(() => {
  cx.fillStyle = "rgba(0,0,0,.14)"; cx.fillRect(0, 0, cv.width, cv.height);
  cx.fillStyle = color; cx.font = "15px JetBrains Mono, monospace";
  drops.forEach((y, i) => {
    cx.fillText(SNIP[Math.random() * SNIP.length | 0], i * 90, y * 18);
    drops[i] = y * 18 > cv.height && Math.random() > .96 ? 0 : y + 1;
  });
}, 90);
addEventListener("mousemove", e => {
  const dx = e.clientX / innerWidth - .5, dy = e.clientY / innerHeight - .5;
  cv.style.transform = `translate(${-dx * 60}px,${-dy * 60}px)`;
  $("#glow").style.transform = `translate(${e.clientX - 260}px,${e.clientY - 260}px)`;
});
function theme(c) { color = c; document.documentElement.style.setProperty("--c", c); }

/* ----- views ----- */
function home() {
  theme("#00e5ff"); $("#total").textContent = "Total score: " + total();
  app.innerHTML = `<h1>Learn it. Build it. Break it (legally).</h1>
  <p class="sub">Pick a language. Hover a logo to jump to the lesson, or click it to open projects and exams.</p>
  <div class="grid">${Object.entries(TRACKS).map(([id, t]) => `
   <div class="tile" style="--k:${t.k}" data-id="${id}">${logo(id, t)}<b>${t.name}</b>
   <a class="learn" href="${t.link}" target="_blank" rel="noopener">Learn ${t.name}</a></div>`).join("")}</div>`;
  app.querySelectorAll(".tile").forEach(el => el.onclick = e => { if (!e.target.closest(".learn")) track(el.dataset.id); });
}
function track(id) {
  const t = TRACKS[id]; theme(t.k); $("#total").textContent = "Total score: " + total();
  app.innerHTML = `<h1>${t.name}</h1>
  <div class="panel"><h2>Learn</h2><p class="muted" style="margin-bottom:14px">Watch the full course, then try the exams.</p>
   <a class="btn" href="${t.link}" target="_blank" rel="noopener">Watch the lesson</a></div>
  <div class="panel"><h2>Project</h2><p>${t.project}</p></div>
  <div class="panel"><h2>Exams</h2><p class="muted">Score 70% or more to unlock the next level. ${t.q[0].length} questions per level.</p>
   <div class="levels">${t.q.map((_, i) => { const lock = i > 0 && best(id, i - 1) < Math.ceil(t.q[i - 1].length * .7);
     return `<div class="lv ${lock ? "locked" : ""}"><h2>${L[i]}</h2><p class="muted" style="margin-bottom:12px">Best: ${best(id, i)}/${t.q[i].length}</p>
     ${lock ? "Locked" : `<button class="btn" data-l="${i}">Start</button>`}</div>`; }).join("")}</div></div>
  <button class="btn ghost" id="back">Back</button>`;
  $("#back").onclick = home;
  app.querySelectorAll("[data-l]").forEach(b => b.onclick = () => quiz(id, +b.dataset.l));
}
function quiz(id, lv) {
  const t = TRACKS[id], qs = shuffle(t.q[lv]); let n = 0, score = 0;
  (function show() {
    if (n >= qs.length) return done();
    const [q, ...o] = qs[n], ans = o[0];
    app.innerHTML = `<div class="panel"><div class="bar"><i style="width:${n / qs.length * 100}%"></i></div>
     <p class="muted">${L[lv]} · question ${n + 1} of ${qs.length} · score ${score}</p><h2 style="margin:10px 0 16px"></h2><div id="o"></div></div>`;
    app.querySelector("h2").textContent = q;
    shuffle(o).forEach(x => { const b = document.createElement("button"); b.className = "opt"; b.textContent = x;
      b.onclick = () => { app.querySelectorAll(".opt").forEach(z => { z.disabled = true; if (z.textContent === ans) z.classList.add("ok"); });
        if (x === ans) score++; else b.classList.add("no"); n++; setTimeout(show, 900); };
      $("#o").appendChild(b); });
  })();
  function done() {
    if (score > best(id, lv)) { S[id + lv] = score; save(); }
    const pass = score >= Math.ceil(qs.length * .7);
    app.innerHTML = `<div class="panel"><h1>${score}/${qs.length}</h1><p class="sub">${pass ? "Level passed. Next level unlocked." : "Not yet. Review the lesson and try again."}</p>
     <button class="btn" id="r">Retry</button> <button class="btn ghost" id="b">Back to ${t.name}</button></div>`;
    $("#r").onclick = () => quiz(id, lv); $("#b").onclick = () => track(id);
  }
}
$("#home").onclick = e => { e.preventDefault(); home(); };
home();
