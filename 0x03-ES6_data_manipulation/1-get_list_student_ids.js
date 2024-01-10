export default function getListStudentsIds(studentArray) {
  if (Array.isArray(studentArray)) {
    const ids = studentArray.map((id) => id.id);
    return ids;
  }

  return [];
}
