
import { useState } from "react";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
type FAQProps ={
    question : string;
    answer : string;
}

const Faqs : React.FC<FAQProps> = ({question , answer}) => {
    const [showAnswer, isShowAnswer] = useState(false);
    return (
      <article className="faq" onClick={() => isShowAnswer(!showAnswer)} >
        <div>
          <h4>{question}</h4>
          <button className="faq__icon" onClick={() => isShowAnswer(!showAnswer)} >
            {
              showAnswer ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon /> 
            }
          </button>
        </div>
        {showAnswer ? <p>{answer}</p> : ""}
      </article>
    );  
}

export default Faqs