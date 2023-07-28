function palindrom(string) {
  if (string === "" || typeof string !== "string" || string.length <= 1) {
    return "Sorry error in input";
  }
  const reveresed = [...string].reverse().join("");
  if (string === reveresed) {
    return true;
  }
  return false;
}

console.log(palindrom(""));
