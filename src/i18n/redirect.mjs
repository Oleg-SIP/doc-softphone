import { languages } from './languages.mjs';

/* The first visit to the English home page is sent on to the visitor's
   own language, the way ai-softphone.com opens in it. Only the first:
   once a language has been read here it is remembered, and choosing
   English in the selector afterwards keeps English.

   The tag is shortened one part at a time — `sr-Latn-RS` finds Serbian
   in Latin letters, `pt-BR` Portuguese — and Norwegian, asked for as
   `no` or `nn`, is offered as `nb`. */
export function languageRedirect(base) {
  const root = base.endsWith('/') ? base : `${base}/`;
  const dirs = Object.fromEntries(
    languages.map(({ code, dir }) => [code.toLowerCase(), dir === 'root' ? '' : dir]),
  );
  return `(function(){
var K='docs-lang',D=${JSON.stringify(dirs)},R=${JSON.stringify(root)};
var s=null;try{s=localStorage}catch(e){}
var here=document.documentElement.lang.toLowerCase();
var home=location.pathname===R||location.pathname===R+'index.html';
if(home&&s&&!s.getItem(K)){
  var want=(navigator.languages||[navigator.language||'']);
  for(var i=0;i<want.length;i++){
    var p=String(want[i]).toLowerCase().replace(/_/g,'-').split('-');
    while(p.length){
      var t=p.join('-');if(t==='no'||t==='nn')t='nb';
      if(t in D){if(t!=='en'){s.setItem(K,t);location.replace(R+D[t]+'/');return;}i=want.length;break;}
      p.pop();
    }
  }
}
try{s&&s.setItem(K,here)}catch(e){}
})();`;
}
