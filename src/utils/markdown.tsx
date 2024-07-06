import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownProps {
  onChange?: (markdown: string) => void;
}

const Markdown: React.FC<MarkdownProps> = ({ onChange }) => {
  const [markdown, setMarkdown] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const updatedMarkdown = event.target.value;
    setMarkdown(updatedMarkdown);
    if (onChange) {
      onChange(updatedMarkdown);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <textarea
        value={markdown}
        onChange={handleInputChange}
        placeholder="Enter your course overview here..."
        style={{ width: '80%', height: '200px', marginBottom: '20px' }}
      />
      <div style={{ width: '80%', border: '1px solid #ddd', padding: '20px' }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Markdown;
