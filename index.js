// export default{
export function rowDice() {
  const dice = [1, 2, 3, 4, 5, 6];
  const lockyNum = Math.floor(Math.random() * 7) + 1;
  if (dice === lockyNum) {
    return true;
  } else {
    return false;
  }
}
// }
