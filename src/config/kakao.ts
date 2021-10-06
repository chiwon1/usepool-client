export const kakao = window.Kakao;

export const initKakao = () => {
  if (!kakao.isInitialized()) {
    console.log('카톡 로그인 초기화');

    kakao.init(process.env.REACT_APP_KAKAO_CREDENTIAL!);

    console.log('초기화 여부', kakao.isInitialized());
  }
};
