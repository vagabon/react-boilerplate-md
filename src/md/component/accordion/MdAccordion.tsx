import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionProps, AccordionSummary } from '@mui/material';
import { memo } from 'react';
import { Translate } from '../../../translate/component/Translate';
import { useId } from '../../hook/useId';

export interface IMdAccordionProps extends Omit<AccordionProps, 'children'> {
  className?: string;
  title: string;
  description?: string;
  expanded?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const MdAccordion: React.FC<IMdAccordionProps> = memo(({ title, description, expanded, ...rest }) => {
  const { id } = useId();

  return (
    <Accordion {...rest} defaultExpanded={expanded}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={id + '-content'} id={id + '-header'}>
        <Translate i18nKey={title} />
      </AccordionSummary>
      {description && (
        <AccordionDetails>
          <Translate i18nKey={description} />
        </AccordionDetails>
      )}
      {rest.children}
    </Accordion>
  );
});
