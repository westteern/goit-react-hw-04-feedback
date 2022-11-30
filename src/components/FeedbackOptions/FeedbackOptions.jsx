import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onFeedbackBtn }) => {
 return (
  <div>
   {options.map(option => (
    <button
     type="button"
     onClick={() => {
      onFeedbackBtn(option);
     }}
     key={option}
    >
     {option}
    </button>
   ))}
  </div>
 );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onFeedbackBtn: PropTypes.func.isRequired,
};

export default FeedbackOptions;
