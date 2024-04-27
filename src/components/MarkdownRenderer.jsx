import ReactMarkdown from 'react-markdown';
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import language from 'react-syntax-highlighter/dist/esm/languages/hljs/1c';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function MarkdownRenderer({ children }) {
    const components = {
        code: ({ value }) => {
            <SyntaxHighlighter language="python" style={materialDark}>
              {value}
            </SyntaxHighlighter>
        },
      };
    // console.log(language);
    return <ReactMarkdown components={components} children={children} />;
}