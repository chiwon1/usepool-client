import React, { FC, useCallback } from 'react';
import { CloseMenuButton, CreateMenu } from './styles';
import styled from 'styled-components';

interface Props {
  show: boolean;
  onCloseMenu: () => void;
  closeButton?: boolean;
}

const Menu: FC<Props> = ({ show, onCloseMenu, closeButton }: Props) => {
  const stopProPagation = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }

  return (
    <CreateMenu onClick={onCloseMenu}>
      <Foo onClick={stopProPagation}>
        {closeButton && (
          <CloseMenuButton onClick={onCloseMenu}>&times;</CloseMenuButton>
        )}
      </Foo>
    </CreateMenu>
  );
};

const Foo = styled.div`
  right: 0px;
  top: 72px;
  max-height: calc(100vh - 72px);
  min-height: 160px;
`;

Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
