// PJAX
let pjaxScriptURL = 'https://cdn.jsdelivr.net/npm/pjax/pjax.min.js';
function pjaxLoadScript() {
  let script = document.createElement('script');
  script.async = true;
  script.src = pjaxScriptURL;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
  script.onload = pjaxInit;
}
function pjaxInit() {
  let pjax = new Pjax({
    elements: "a",
    selectors: [".main"],
    cacheBust: false
  })
}
pjaxLoadScript();
