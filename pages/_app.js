import '../public/static/bootstrap.css';
import '../public/static/site.css';

export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

// _app.js is convention with next.js
// next.js also expects a public folder. convention is to have a static folder within public folder as well
// higher order component that gets included in every incoming request processed through any file. That is why css gets imported here
// have to stop and start watcher to see boostrap after adding for first time
// next.js service lanches a server on our behalf when run npm start or npm run dev
// next js server can render all html so users don't have to wait for js and useeffects to run. html figured out on the server
// no wait for users to see all rendered html
