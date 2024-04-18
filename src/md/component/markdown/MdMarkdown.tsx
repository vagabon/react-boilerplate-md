import { MuiMarkdown, getOverrides } from 'mui-markdown';
import { Highlight, themes } from 'prism-react-renderer';
import { memo, useCallback, useEffect, useRef } from 'react';
import { useIcon } from '../../../icon';
import { useId } from '../../hook/useId';

export interface IMdMarkdownProps {
  content?: string;
  summaryCallback?: (summary: string) => void;
  callbackCopy?: (message: string, type: 'success' | 'error') => void;
}

const MdMarkdown: React.FC<IMdMarkdownProps> = memo(({ content, summaryCallback, callbackCopy }) => {
  const { id } = useId();
  const interval = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { getIcon } = useIcon();

  const generateSummary = useCallback((idMarkdown: string) => {
    const iddd = document.getElementById(idMarkdown);
    const div = iddd?.getElementsByTagName('div');
    let newSummary = '';
    if (div && div.length > 0) {
      interval.current && clearInterval(interval.current);
      const elements = div[0].getElementsByTagName('*');
      for (const element of elements) {
        if (element.tagName.startsWith('H') || element.tagName.startsWith('h')) {
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
    if (summaryCallback) {
      interval.current && clearInterval(interval.current);
      let count = 0;
      interval.current = setInterval(() => {
        const newSummary = generateSummary(id);
        summaryCallback?.(newSummary);
        count++;
        if (count > 10) {
          interval.current && clearInterval(interval.current);
        }
      }, 100);
    }
    const iddd = document.getElementById(id);
    const div = iddd?.getElementsByTagName('div');
    const elements = div?.[0]?.getElementsByTagName('*') ?? [];
    const copyHtml = document.getElementById('copy-button')?.innerHTML ?? '';
    for (const element of elements) {
      const buttonCoppyExist = element.getElementsByClassName('button-copy');
      if (
        (element.tagName.startsWith('CODE') || element.tagName.startsWith('code')) &&
        buttonCoppyExist.length === 0 &&
        copyHtml !== ''
      ) {
        const content = (element as HTMLElement).innerText ?? '';
        const div = document.createElement('button');
        div.className = 'button-copy';
        div.innerHTML = copyHtml;
        div.onclick = () => {
          navigator.clipboard.writeText(content);
          callbackCopy?.('TEXT_COPY', 'success');
        };
        element.prepend(div);
      }
    }
  }, [id, generateSummary, summaryCallback, callbackCopy, content]);

  return (
    <div id={id}>
      <MuiMarkdown
        overrides={{
          ...getOverrides({ Highlight, themes, hideLineNumbers: true }),
          a: {
            props: {
              target: summaryCallback && '_blank',
            },
          },
        }}>
        {content}
      </MuiMarkdown>
      <div id='copy-button' style={{ display: 'none' }}>
        {getIcon('copy', 'secondary', true)}
      </div>
    </div>
  );
});

export default MdMarkdown;
