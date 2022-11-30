// import PropTypes from 'prop-types';

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

export default FeedbackOptions;
