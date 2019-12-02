function isPalindrome(s) {
  let cleanSTR = s.toLowerCase().replace(/[^a-z0-9]/gi,'');

  let LeftPointer = 0;
  let RightPointer = cleanSTR.length - 1;

  while (LeftPointer < RightPointer) {
    if (cleanSTR[LeftPointer] !== cleanSTR[RightPointer]) {
      return false;
    }
    LeftPointer++;
    RightPointer--;
  }
  return true;
}

/*
i: string
o: boolean
c: ignore non alpha-numeric characters
e: none
Strategy
  Sanitize input by removing non alpha-numeric characters.
  Create a left and right pointer, initially at start and end of string.
  While left is less than right
    If characters at Left and Right Pointer are not equal, return false

  Return true

  Time complexity: O(N)
  Space complexity: O(1) Left and Right Pointers take up constant space.
*/
module.exports = isPalindrome;
