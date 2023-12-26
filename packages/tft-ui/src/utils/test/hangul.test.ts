import { describe } from 'vitest';
import { getChosung } from '../hangul';

describe('hangul', () => {
  it('글자에서 초성을 추출한다.', () => {
    const data = ['아리', '홅밡', 'ㅏㅣ', '카키', '카타 리나', '트위스티드 페이 트'];
    const result = ['ㅇㄹ', 'ㅎㅂ', '', 'ㅋㅋ', 'ㅋㅌㄹㄴ', 'ㅌㅇㅅㅌㄷㅍㅇㅌ'];

    for (let i = 0; i < data.length; i++) {
      expect(getChosung(data[i])).toBe(result[i]);
    }
  });
});
