import { Helmet } from '@modern-js/runtime/head';
import './index.css';

import GetApi from '@api/index';
import { useEffect, useState } from 'react';

const Index = () => {
  console.log('Index');
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('GetApi', GetApi);
    GetApi().then(({ message }) => setMessage(message));
  }, []);

  return (
    <div className="container-box">
      <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://lf3-static.bytednsdoc.com/obj/eden-cn/uhbfnupenuhf/favicon.ico"
        />
      </Helmet>
      <main>
        <div className="title">
          Welcome to
          <img
            className="logo"
            src="https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/modern-js-logo.svg"
            alt="Modern.js Logo"
          />
          <p className="name">Modern.js</p>
        </div>
        <p className="description">
          Get started by editing{' '}
          <code className="code">src/routes/page.tsx</code>
        </p>
        {message && <p className="message">{message}</p>}
      </main>
    </div>
  );
};

export default Index;
