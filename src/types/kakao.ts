interface ISuccessCallback {
  // eslint-disable-next-line camelcase
  (res: { access_token: string }): void;
}

interface IFailCallback {
  (err: string): void;
}

interface ILoginParameters {
  redirectUri: string;
  state?: string;
  scope?: string;
}

interface ILoginWithPopup {
  (parameter: { success: ISuccessCallback; fail: IFailCallback }): void;
}

interface ILoginWithRedirect {
  (parameter: { redirectUri: string; state?: string; scope?: string }): void;
}

interface ILogin {
  (parameter: ILoginParameters): void;
}

export interface IKakao {
  isInitialized: () => boolean;
  init: (key: string) => void;
  Auth: {
    login: ILoginWithPopup;
    authorize: ILoginWithRedirect;
    createLoginButton: ILogin;
  };
}
