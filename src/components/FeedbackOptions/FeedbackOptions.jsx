import PropTypes from 'prop-types';
import { BtnWraper } from './FeedbackOptions.styled';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
 return (
   <BtnWraper>
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
   </BtnWraper>
 );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
