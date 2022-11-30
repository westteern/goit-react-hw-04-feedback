import PropTypes from 'prop-types';

const SectionTitle = ({ title, children }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default SectionTitle;