
import { SetStateAction, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function Markdown() {
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setMarkdown(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <textarea
        value={markdown}
        onChange={handleInputChange}
        placeholder="Type your markdown here..."
        style={{ width: '80%', height: '200px', marginBottom: '20px' }}
      />
      <div style={{ width: '80%', border: '1px solid #ddd', padding: '20px' }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Markdown;
