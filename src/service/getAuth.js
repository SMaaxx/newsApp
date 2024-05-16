export const getAuth = (data) => {
  return data.login === 'Admin' && data.password === '12345';
}