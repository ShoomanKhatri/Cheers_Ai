import React, { useState } from 'react';
import { IoIosAdd, IoIosClose } from 'react-icons/io';
import styles from './Faq.module.css';
import { question } from '../../utilis/Faq';

const Faq = () => {
  const [showAnswers, setShowAnswers] = useState(Array(question.length).fill(false));

  const toggleAnswer = (index) => {
    setShowAnswers((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  };

  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.faqHeading}>Frequently Asked Questions</h1>
      {question.map((q, index) => (
        <div className={styles.container} key={index}>
          <div onClick={() => toggleAnswer(index)} className={styles.faqQuestionContainer}>
            <p className={styles.faqQuestion}>{q.question}</p>
            {showAnswers[index] ? (
              <IoIosClose className={styles.icon} />
            ) : (
              <IoIosAdd className={styles.icon} />
            )}
          </div>

          {showAnswers[index] && <p className={styles.faqAns}>{q.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Faq;
