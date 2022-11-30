import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
 return (
  <div>
   {options.map(option => (
    <button
     type="button"
     onClick={() => {
      onLeaveFeedback(option);
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
  onLeaveFeedbackBtn: PropTypes.func.isRequired,
};

export default FeedbackOptions;
