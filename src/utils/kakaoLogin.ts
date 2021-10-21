export const loginWithKakao = (): void => {
  window.location.href = process.env.REACT_APP_KAKAO_AUTH_URL!;
};
