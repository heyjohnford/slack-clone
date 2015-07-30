import Path from 'path';
import Hapi from 'hapi';
import Routes from '../lib/routes';
import Plugins from '../lib/plugins';
import socketIO from 'socket.io';
// import chatIO from '../lib/chat';

let server = new Hapi.Server();
let PORT = process.env.PORT || 8000;

function handleRegisterErrors(err) {
  if (err) {
    throw err;
  }
}

server.connection({
  host: 'localhost',
  port: PORT
});

server.views({
  engines: {
    html: require('handlebars')
  },
  path: Path.join(process.cwd(), 'src', 'views'),
  isCached: true
});

// Serve the routes
server.route(Routes);

// Register the plugins
server.register(Plugins, handleRegisterErrors);

// io
let io = socketIO(server.listener);
io.on('connection', function (socket) {
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('message', (message) => {
    console.log(message);
  });
});

server.start(() => {
  console.log('Running Slack Clone -- ' + server.info.uri);
});
