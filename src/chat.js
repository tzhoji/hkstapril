import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    (function(d, m) {
      var kommunicateSettings = {
        appId: '3262933bc84e6339c63dabe7badae79b3',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return <div id="kommunicate-chat-widget-iframe-container"></div>;
};

const App = () => {
  return (
    <div>
      <Chatbot />
    </div>
  );
};

export default App;



  