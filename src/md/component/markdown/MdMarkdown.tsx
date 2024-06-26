import { MuiMarkdown, getOverrides } from 'mui-markdown';
import { Highlight, themes } from 'prism-react-renderer';
import { memo, useCallback, useEffect, useRef } from 'react';
import { useIcon } from '../../../icon/hook/useIcon';
import { emptyCopyButton } from '../../../utils/markdown/MarkdownUtils';
import { useId } from '../../hook/useId';
import { MD_CODE, MD_LANGUAGES } from './MdMardownLanguages';

export interface IMdMarkdownProps {
  className?: string;
  content?: string;
  summaryCallback?: (summary: string) => void;
  callbackCopy?: (message: string, type: 'success' | 'error') => void;
}

export const MdMarkdown: React.FC<IMdMarkdownProps> = memo(
  ({ className = '', content, summaryCallback, callbackCopy }) => {
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
      const div = document.getElementById(id)?.getElementsByTagName('div');
      const elements = div?.[0]?.getElementsByTagName('*') ?? [];
      const copyHtml = document.getElementById('copy-button')?.innerHTML ?? '';
      for (const element of elements) {
        const buttonCoppyExist = element.getElementsByClassName('button-copy');
        const buttonCoppyParentExist = element.parentElement?.getElementsByClassName('button-copy');
        if (emptyCopyButton(element.tagName, copyHtml, buttonCoppyExist, buttonCoppyParentExist)) {
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

    const replaceCode = useCallback((content?: string) => {
      let contentWithCode = String(content);
      MD_LANGUAGES.forEach((language) => {
        contentWithCode = contentWithCode.replaceAll(MD_CODE + language, '\n' + MD_CODE + 'js ');
      });

      return contentWithCode;
    }, []);

    return (
      <div id={id} className={className}>
        <MuiMarkdown
          overrides={{
            ...getOverrides({ Highlight, themes, hideLineNumbers: true }),
            a: {
              props: {
                target: summaryCallback && '_blank', // TODO : add props ?
              },
            },
          }}>
          {replaceCode(content)}
        </MuiMarkdown>
        <div id='copy-button' className='hidden'>
          {getIcon('copy', 'secondary')}
        </div>
      </div>
    );
  },
);
