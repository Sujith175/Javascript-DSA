function palindrom(string) {
  const reversed = [...string].reverse().join("");
  if (reversed === string) {
    return true;
  }
  return false;
}
console.log(palindrom("malayalam"));
