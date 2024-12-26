export const saveUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push({ email, password });
  localStorage.setItem('users', JSON.stringify(users));
};

export const findUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  return users.find(user => user.email === email && user.password === password);
};

export const saveProfile = (profile) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const updatedUsers = users.map(user => user.email === profile.email ? { ...user, profile } : user);
  localStorage.setItem('users', JSON.stringify(updatedUsers));
};

export const getProfile = (email) => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(user => user.email === email);
  return user ? user.profile : null;
};

export const saveDailySeedData = (data) => {
  localStorage.setItem('dailySeedData', JSON.stringify(data));
};

export const getDailySeedData = () => {
  return JSON.parse(localStorage.getItem('dailySeedData'));
};