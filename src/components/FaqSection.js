const faqs = [
  {
    question: "How do I start?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis vero quae, laborum temporibus unde.",
  },
  {
    question: "Lorem ipsum dolor?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis vero quae, laborum temporibus unde.",
  },
  {
    question: "Sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis vero quae, laborum temporibus unde.",
  },
  {
    question: "Excepturi quis vero?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quis vero quae, laborum temporibus unde.",
  },
];

const FaqSection = () => {
  return (
    <div className="faqs">
      <h2>
        Any Questions <span>FAQ</span>
      </h2>

      {faqs.map((faq) => {
        return (
          <div className="faq">
            <div className="question">
              <h4>{faq.question}</h4>
            </div>
            <div className="answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqSection;
