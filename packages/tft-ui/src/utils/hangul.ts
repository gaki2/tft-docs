export function getChosung(word: string) {
  const koreanInitials = [
    'ㄱ',
    'ㄲ',
    'ㄴ',
    'ㄷ',
    'ㄸ',
    'ㄹ',
    'ㅁ',
    'ㅂ',
    'ㅃ',
    'ㅅ',
    'ㅆ',
    'ㅇ',
    'ㅈ',
    'ㅉ',
    'ㅊ',
    'ㅋ',
    'ㅌ',
    'ㅍ',
    'ㅎ',
  ];

  let result = '';

  for (let i = 0; i < word.length; i++) {
    const charCode = word[i].charCodeAt(0) - 44032;
    if (charCode < 0 || charCode > 11171) continue; // 해당 charCode 범위는 모든 한글 음절을 포함합니다.
    result += koreanInitials[Math.floor(charCode / 588)];
  }

  return result;
}
