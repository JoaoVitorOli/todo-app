import styled from "styled-components";

interface TaskNameProps {
  isCompleted: boolean;
}

interface ButtonProps {
  isSelected: boolean;
}

export const Container = styled.div`
  max-width: 650px;
  width: 100%;
  margin: 3rem auto 2rem;
  border-radius: 6px;
  background: ${(props) => props.theme.color.card};
  color: ${(props) => props.theme.color.text};
  box-shadow: 0 20px 50px ${(props) => props.theme.color.shadow};
`;

export const Wrapper = styled.div`
  padding: 0 2rem;
`;

export const Task = styled.label`
  z-index: 5;
  display: flex;
  padding: 1.3rem;
  border-bottom: 1px solid ${(props) => props.theme.color.borderBottomColor};
  align-items: center;

  > button {
    z-index: 10;
    background: transparent;
    border: 0;
    font-size: 0;
    margin-left: auto;
    cursor: pointer;
    padding-left: 1rem;
  }

  > button:hover {
      filter: brightness(2);
      transition: 0.2s;
      
      img {
        width: 20px;
      }
    }
`;

export const TaskName = styled.span<TaskNameProps>`
  color: ${(props) => props.theme.color.text};
  font-family: "Josefin Sans", sans-serif;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${(props) => {
    if (props.isCompleted) {
      return "text-decoration: line-through; filter: brightness(0.4);";
    }
    return "text-decoration: none";
  }};

  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1.2rem;

  p {
    font-size: 14px;
  }
`;

export const Button = styled.button<ButtonProps>`
  margin: 0 0.75rem;

  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  font-weight: 700;

  color: ${(props) => {
    if (props.isSelected) {
      return "hsl(220, 98%, 61%)";
    }
    return props.theme.color.buttonTxtColor;
  }};

  :hover {
    color: ${(props) => props.theme.color.hoverText};
  }
`;

export const ButtonClearCompleted = styled.button`
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  font-weight: 400;
  color: ${(props) => props.theme.color.buttonTxtColor};

  :hover {
    color: ${(props) => props.theme.color.hoverText};
  }
`;

export const MobileFooterButtons = styled.div`
  display: flex;
  max-width: 650px;
  width: 100%;
  margin: 0 auto;
  border-radius: 6px;
  background: ${(props) => props.theme.color.card};
  color: ${(props) => props.theme.color.text};
  box-shadow: 0 20px 50px ${(props) => props.theme.color.shadow};
  padding: 1rem;
  justify-content: center;
`;
