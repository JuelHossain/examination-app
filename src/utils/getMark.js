const getMark = (questions) => {
  const mark = questions?.reduce((total, q) => {
    if (q.answered === q.answer) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);
  return mark;
};

export default getMark;
