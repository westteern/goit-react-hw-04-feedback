import PropTypes from 'prop-types';
import { Section } from './SectionTitle.styled';

const SectionTitle = ({ title, children }) => {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
