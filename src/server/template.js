import { Helmet } from 'react-helmet';

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

const template = ({ body, css, metadata, isDev = false }) => {
  const helmet = Helmet.renderStatic();
  return `
    <!doctype html>
    <html lang="en" amp>
    <head>
      <meta charset="utf-8">
      <link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,${iconBase64}" /> 
      ${metadata}
      ${isDev ? hotReloadingScript : ''}
      <style amp-custom>${css}</style>
      <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
      ${helmet.script.toString()}
    </head>
    <body>${body}</body>
    </html>
  `;
};

export default template;
