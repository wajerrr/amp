import { getPaywallConfig } from './utils/paywall';

export const hotReloadingScript = `<script src="/socket.io/socket.io.js"></script>
<script>
  var socket = io();
  socket.on('reload-server-change', function(msg){
    console.log('server change, relaoding')
    setTimeout(function(){ window.location.reload(); }, 400);
  });
  socket.on('reload-client-change', function(msg){
    console.log('client change relaoding')
   window.location.reload();
  });
</script>`;
const iconBase64 =
  ' iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABlBMVEXjEgv////4KLUSAAAAAWJLR0QB/wIt3gAAAAd0SU1FB+IFEAgALURtxQsAAAAMSURBVAjXY2AgDQAAADAAAceqhY4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDUtMTZUMDg6MDA6NDUtMDc6MDDueH9GAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA1LTE2VDA4OjAwOjQ1LTA3OjAwnyXH+gAAAABJRU5ErkJggg==';

const template = ({ body, css, metadata, isDev = false, articleId = '' }) => `
<!doctype html>
<html lang="en" amp>
<head>
  <meta charset="utf-8">
  <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,${iconBase64}" /> 
  ${metadata}
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <script async custom-element="amp-social-share" src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js"></script>
  ${isDev ? hotReloadingScript : ''}
  <style amp-custom>${css}</style>
  <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
  <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
  <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
  <script async custom-element="amp-consent" src="https://cdn.ampproject.org/v0/amp-consent-0.1.js"></script>
  <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script>
  <script async custom-element="amp-access" src="https://cdn.ampproject.org/v0/amp-access-0.1.js"></script>
  <script
      id="amp-access"
      type="application/json">${JSON.stringify(
        getPaywallConfig(articleId)
      )}</script>
</head>
<body>${body}</body>
</html>`;

export default template;
