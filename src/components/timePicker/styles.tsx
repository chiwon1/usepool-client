import styled from 'styled-components';

export type NormalizeProps = Readonly<{
  hasHorizontalSpacing?: boolean;
}>;

type defaultBranding = {
  [key: string]: string;
};

export const horizontalSpace: defaultBranding = {
  inner: '8px',
  outer: '16px',
  global: '24px',
};

const horizontalMargin = (props: any): string | number =>
  props.hasHorizontalSpacing ? horizontalSpace.outer : 0;

const horizontalPadding = (props: any): string =>
  props.hasHorizontalSpacing ? horizontalSpace.inner : horizontalSpace.global;

export const normalizeHorizontally = (props: NormalizeProps): string => `
  padding-left: ${horizontalPadding(props)} !important;
  padding-right: ${horizontalPadding(props)} !important;
  margin-left: ${horizontalMargin(props)};
  margin-right: ${horizontalMargin(props)};
  `;

const largeBreakPointThreshold = '800px';
const smallBreakPointThreshold = '799px';
export const responsiveBreakpoints = {
  small: smallBreakPointThreshold,
  isMediaLarge: `min-width: ${largeBreakPointThreshold}`,
  isMediaSmall: `max-width: ${smallBreakPointThreshold}`,
};

export const inputBorderSize = {
  default: '1px',
  focus: '3px',
};

interface Color {
  [propName: string]: string;
}

export const color: Color = {
  white: '#FFF',
  gray: '#DDD',
  lightGray: '#EDEDED',
  midnightGreen: '#054752',
  midnightGreenDetail: '#3D5C62',
  lightMidnightGreen: '#708C91',
  blue: '#00AFF5',
  darkBlue: '#008FC1',
  boostBlue: '#2ED1FF',
  green: '#5DD167',
  orange: '#F78B00',
  yellow: '#FFCA0C',
  red: '#F53F5B',
  lightRed: '#FDD8DE',
  facebookBrand: '#1877F2',
  vkBrand: '#2787F5',
  tapHighlight: 'rgba(221, 221, 221, .4)', // gray, 40%
};

type Font = {
  [key: string]: {
    size: string;
    lineHeight: string;
  };
};

export const font: Font = {
  s: {
    size: '13px',
    lineHeight: '16px',
  },
  base: {
    size: '16px',
    lineHeight: '20px',
  },
  m: {
    size: '18px',
    lineHeight: '20px',
  },
  l: {
    size: '22px',
    lineHeight: '24px',
  },
  xl: {
    size: '30px',
    lineHeight: String(Math.floor((32 / 30) * 100) / 100),
  },
  brand: {
    size: '56px',
    lineHeight: '56px',
  },
  xxl: {
    size: '82px',
    lineHeight: '82px',
  },
};

export const StyledTimePickerWrapper = styled.div`
  width: 100%;
  ${normalizeHorizontally};

  // On large media, let's fix the size and center the component
  @media (${responsiveBreakpoints.isMediaLarge}) {
    position: relative;
    width: 320px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const StyledTimePicker = styled.div`
  position: relative;
  width: 100%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
  font-weight: 500;
  line-height: 1;
  background-color: ${color.white};
  color: ${color.midnightGreen};
  border: 1px solid ${color.gray};
  border-radius: 2em;
  box-sizing: border-box;
  cursor: pointer;
  padding: ${inputBorderSize.focus};

  &:hover {
    background-color: ${color.lightGray};
  }

  &.focus {
    border: ${inputBorderSize.focus} solid ${color.blue};
    padding: 1px;
  }

  &::after {
    content: '';
    position: absolute;
    right: 32px;
    top: calc(50% - 8px);
    display: inline-block;
    padding: 5px;
    border: solid ${color.blue};
    border-width: 0 2px 2px 0;
    vertical-align: middle;
    transform: rotate(45deg);
  }

  &.focus::after {
    right: 30px;
  }

  &[aria-disabled='true'] {
    color: ${color.lightGray};
    border-color: transparent;
  }

  &[aria-disabled='true']:hover {
    background-color: ${color.white};
  }

  &[aria-disabled='true']::after {
    border-color: ${color.lightGray};
  }

  & > select,
  & > select:focus {
    z-index: 1; /* Needs to be above ::after so the arrow symbol appears clickable */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    font-size: ${font.base.size};
    /* Required to have <select /> with height 100% in Safari  */
    -webkit-appearance: menulist-button;
    cursor: pointer;
    outline: none;
  }

  & > time {
    display: inline-block;
    padding-top: 6px;
    vertical-align: middle;
  }
`;
