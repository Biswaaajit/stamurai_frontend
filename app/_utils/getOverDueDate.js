function getOverDueDate(dueDateStr) {
  const dueDate = new Date(dueDateStr);
  const today = new Date();

  dueDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return dueDate < today;
}

export default getOverDueDate;
