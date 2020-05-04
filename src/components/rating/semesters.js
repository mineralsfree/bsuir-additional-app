export const semesters = [ {label: 'overview', value: 'overview'},  {label: '1', value: '1'}, {
  label: '2',
  value: '2'
}, {label: '3', value: '3'}, {label: '4', value: '4'}, {label: '5', value: '5'}, {
  label: '6',
  value: '6'
}, {label: '7', value: '7'}, {label: '8', value: '8'},]
export const tableHead = ['Discipline', 'Hours', 'Control form', 'Mark', 'Lecturer', 'Retakes']
export const mapMarks =  m => {
  return [m.subject, m.hours, m.formOfControl, m.mark, m.teacher, m.retakesCount];
}

