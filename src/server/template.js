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

const template = ({ title, body, css, canonicalUrl, isDev = false }) => `
<!doctype html>
<html amp>
<head>
  <meta charset="utf-8">
  <title>${title}</title>

  <script async src="https://cdn.ampproject.org/v0.js"></script>

  <link rel="canonical" href="${canonicalUrl}">
  <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">

  ${isDev ? hotReloadingScript : ''}

  <style amp-custom>${css}</style>
  <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  <style amp-custom="">
    #sidebar {
      width: 100%;
      background-color: #f2f2f2;
      font-family: Tahoma;
      font-size: 1.125em;
    }
    .i-amphtml-accordion-header {
      border: none;
      background-color: transparent;
      border-bottom: 1px solid #d7d7d7;
      padding: 0.5em 1em;
      color: #383e42;
    }
  </style>
  <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
  <script async custom-element="amp-accordion" src="https://cdn.ampproject.org/v0/amp-accordion-0.1.js"></script>
</head>
<body>${body}</body>
</html>`;

export default template;
