export default function getStudentIdsSum(studentList) {
  const studentIdSum = studentList.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0,
  );
  return studentIdSum;
}
