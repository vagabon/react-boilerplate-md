import { MuiMarkdown } from 'mui-markdown';
import { Highlight, themes } from 'prism-react-renderer';
import { useCallback, useEffect, useRef } from 'react';
import { useId } from '../../hook/useId';

export interface IMdMarkdownProps {
  content?: string;
  summaryCallback?: (summary: string) => void;
}

const MdMarkdown: React.FC<IMdMarkdownProps> = (props) => {
  const { id } = useId();
  const interval = useRef<ReturnType<typeof setTimeout> | null>(null);

  const generateSummary = useCallback((idMarkdown: string) => {
    const iddd = document.getElementById(idMarkdown);
    const div = iddd?.getElementsByTagName('div');
    let newSummary = '';
    if (div && div.length > 0) {
      interval.current && clearInterval(interval.current);
      const elements = div[0].getElementsByTagName('*');
      for (const element of elements) {
        if (element.tagName.includes('H') || element.tagName.includes('h')) {
          const number = parseInt(element.tagName.replace('H', '').replace('h', ''));
          let tabs = '';
          for (let i = 1; i < number; i++) {
            tabs += '\t';
          }
          newSummary += tabs + '* [' + element.innerHTML + '](#' + element.id + ')\n';
        }
      }
    }
    return newSummary;
  }, []);

  useEffect(() => {
    if (props.summaryCallback) {
      interval.current && clearInterval(interval.current);
      let count = 0;
      interval.current = setInterval(() => {
        const newSummary = generateSummary(id);
        props.summaryCallback?.(newSummary);
        count++;
        if (count > 10) {
          interval.current && clearInterval(interval.current);
        }
      }, 100);
    }
    const iddd = document.getElementById(id);
    const div = iddd?.getElementsByTagName('div');
    const elements = div?.[0]?.getElementsByTagName('*') ?? [];
    for (const element of elements) {
      if (element.tagName.includes('PRE')) {
        const content = (element as HTMLElement).innerText ?? '';
        const div = document.createElement('button');
        div.className = 'button-copy';
        div.innerText = 'copy';
        div.onclick = function () {
          navigator.clipboard.writeText(content);
        };
        element.prepend(div);
        console.log('pre find');
      }
    }
  }, [id, generateSummary, props]);

  return (
    <div id={id}>
      <MuiMarkdown Highlight={Highlight} themes={themes} hideLineNumbers>
        {props.content}
      </MuiMarkdown>
    </div>
  );
};

export default MdMarkdown;
