export function uniqueId(length) {
  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charLength = chars.length;
  const idLength = length || 10;

  let id = '';

  for (let i = 0; i < idLength; i += 1) {
    const randomIndex = Math.floor(Math.random() * charLength);
    id += chars.charAt(randomIndex);
  }

  return id;
}
