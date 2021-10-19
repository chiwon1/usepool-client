import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import autosize from 'autosize';

interface Props {
  chat: string;
  onSubmitForm: (e: any) => void;
  onChangeChat: (e: any) => void;
}

const ChatBox = ({ chat, onChangeChat, onSubmitForm }: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const onKeydownChat = useCallback(
    (ev) => {
      if (ev.key === 'Enter' && !ev.shiftKey) {
        ev.preventDefault();
        onSubmitForm(ev);
      }
    },
    [onSubmitForm],
  );

  useEffect(() => {
    if (textareaRef.current) {
      autosize(textareaRef.current);
    }
  }, []);

  return (
    <div>
      <ChatArea>
        <div>
          <Wrapper>
            <div></div>
            <div>
              <Form onSubmit={onSubmitForm}>
                <MentionsTextarea
                  id="editor-chat"
                  value={chat}
                  onChange={onChangeChat}
                  onKeyPress={onKeydownChat}
                  placeholder="Your message"
                  ref={textareaRef}
                />
                <StyledButton title="Send" type="submit">
                  <svg
                    aria-hidden="true"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fillRule="evenodd" fill="none">
                      <path
                        d="M3.825 2.83l18.172 8.26a1 1 0 0 1 0 1.82L3.825 21.17a1 1 0 0 1-1.39-1.127l1.402-6.309a1 1 0 0 1 .914-.78L12 12.5a.501.501 0 0 0 0-1l-7.25-.453a1 1 0 0 1-.913-.781l-1.402-6.31a1 1 0 0 1 1.39-1.127z"
                        fill="#00AFF5"
                      />
                    </g>
                  </svg>
                </StyledButton>
              </Form>
            </div>
            <div></div>
          </Wrapper>
        </div>
      </ChatArea>
    </div>
  );
};

export const ChatArea = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 662px;
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  box-sizing: border-box;
  color: rgb(5, 71, 82);
  background-color: rgb(237, 237, 237);
  border-radius: 16px;
  border: 3px solid transparent;
`;

export const MentionsTextarea = styled.textarea`
  outline: none;
  appearance: none;
  border: 0px;
  background-color: rgb(237, 237, 237);
  color: rgb(5, 71, 82);
  flex: 1 1 0%;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  caret-color: rgb(0, 175, 245);
  padding: 0px calc(14px);
  margin: calc(14px) 0px;
  box-sizing: content-box;
  height: 20px;
  max-height: 76px;
  min-height: 20px;
  resize: none;
  height: 20px;
`;

const Wrapper = styled.div`
  background-color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 2;
  width: 662px;

  &>: first-child {
    padding-top: 8px;
  }

  &>: nth-child(2) {
    padding-left: 24px;
    padding-right: 24px;
    position: relative;
    box-sizing: border-box;
  }

  &>: last-child {
    padding-top: 8px;
  }
`;

const StyledButton = styled.button`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  padding: 0px 24px;
  border: 1px solid transparent;
  border-radius: 48px;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  height: 48px;
  min-width: 48px;
  max-width: 100%;
  overflow: hidden;
  user-select: none;
  -webkit-box-align: center;
  align-items: center;
  transition: max-width 500ms ease-in 0s, background-color 200ms ease-in 0s;
  white-space: nowrap;
  background-color: transparent;
  border-radius: inherit;
  color: rgb(0, 175, 245);
  padding: inherit;
  display: inherit;
  line-height: inherit;
  font-size: inherit;
  text-align: left;
  min-width: inherit;
  min-height: inherit;
  height: auto;
  white-space: normal;
  display: inline-block;
  text-align: center;
  padding: 0px;
  line-height: 0;
  width: 48px;
  height: 48px;
  background-color: transparent;
  color: rgb(112, 140, 145);
  position: absolute;
  bottom: 0px;
  right: 0px;

  & > svg {
    fill: rgb(0, 175, 245);
    flex-shrink: 0;
    margin: 0px;

    & > g {
      transform-origin: 0px 0px;
    }
  }
`;

export default ChatBox;
