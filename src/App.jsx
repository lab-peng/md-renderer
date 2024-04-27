import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { darcula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MarkdownRenderer from './components/MarkdownRenderer';


const App = () => {
  const codeString = `
\`\`\`python
import threading
import time
from queue import Queue

def f(n):
    time.sleep(n)

class Worker(threading.Thread):
    def __init__(self, queue):
        super(Worker, self).__init__()
        self.q = queue
        self.daemon = True
        self.start()

    def run(self):
        while 1:
            f, args, kwargs = self.q.get()
            try:
                f(*args, **kwargs)
            except Exception as e:
                print(e)
            self.q.task_done()

class ThreadPool(object):
    def __init__(self, thread_num=10):
        self.q = Queue(thread_num)
        for i in range(thread_num):
            Worker(self.q)
\`\`\`
  `;
  
  return (
    <div className="grid place-items-center">
      {/* <MarkdownRenderer 
      children={codeString} 
      /> */}
      <SyntaxHighlighter language="python" style={materialDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default App
