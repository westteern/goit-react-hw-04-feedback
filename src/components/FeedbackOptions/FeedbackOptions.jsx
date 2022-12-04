import PropTypes from 'prop-types';
import { BtnWraper, Btn} from './FeedbackOptions.styled';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
 return (
   <BtnWraper>
     {options.map(option => (
       <Btn
         type="button"
         onClick={() => {
           onLeaveFeedback(option);
         }}
         key={option}
       >
         {option}
       </Btn>
     ))}
   </BtnWraper>
 );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
