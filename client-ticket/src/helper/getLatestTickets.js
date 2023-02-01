export const getLatestTickets = async () => {
  const res = await fetch('http://localhost:4000/lastTickets');
  const data = await res.json();

  return data;
};
