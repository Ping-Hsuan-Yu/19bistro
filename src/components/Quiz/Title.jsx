const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="quiz-h1">{title}</h1>
      <p className="quiz-p">{subtitle}</p>
    </div>
  );
};

export default Title;
