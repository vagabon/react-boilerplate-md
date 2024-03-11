import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useAppTranslate } from '../../../translate';
import { useId } from '../../hook/useId';

export interface IMdAccordionProps {
  title: string;
  description: string;
  expanded?: boolean;
  disabled?: boolean;
}

const MdAccordion: React.FC<IMdAccordionProps> = ({ title, description, expanded, disabled }) => {
  const { id } = useId();
  const { Trans } = useAppTranslate();
  return (
    <Accordion defaultExpanded={expanded} disabled={disabled}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={id + '-content'} id={id + '-header'}>
        <Trans i18nKey={title} />
      </AccordionSummary>
      <AccordionDetails>
        <Trans i18nKey={description} />
      </AccordionDetails>
    </Accordion>
  );
};

export default MdAccordion;
