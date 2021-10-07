export const loginWithKakao = () => {
  window.location.href = process.env.REACT_APP_KAKAO_AUTH_URL!;
};
