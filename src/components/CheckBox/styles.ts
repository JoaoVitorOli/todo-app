import styled from "styled-components";

interface Props {
  borderColor?: "neutral";
}

export const Container = styled.label<Props>`
  margin-right: 1rem;

  label {
    font-size: 26px;
    color: #4d4d4d;
    position: absolute;
    z-index: 10;
    padding-left: 50px;
    cursor: pointer;
  }

    input {
      opacity: 0;
      visibility: hidden;
      position: absolute;
      cursor: pointer;

      &:checked {
        ~.check {
          border-color: #00EA90;
          /* background: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%); */
          box-shadow: 0px 0px 0px 15px #00EA90 inset;

          &::after {
            opacity: 1;
            transform: scale(1);
          }
        }
      }
    }

    .check {
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 100px;
      background-color: transparent;
      border: 2px solid ${(props) => {
        if (props.borderColor === "neutral") {
          return "hsl(233, 14%, 35%)"
        }
        return "#d78e17";
      }};
      box-shadow: 0px 0px 0px 0px ${(props) => {
        if (props.borderColor === "neutral") {
          return "hsl(233, 14%, 35%)"
        }
        return "#d78e17";
      }} inset;
      transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);
      /* d78e17 */
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 4;
        position: absolute;
        transform: scale(0);
        background-size: 50%;
        background-image: url('http://s6.picofile.com/d/8392306668/c38c12a0-6db3-47d4-a80c-7dad8fab5186/checkmark.svg');
        background-repeat: no-repeat;
        background-position: center;
        transition-delay: 0.2s !important;
        transition: all 0.25s cubic-bezier(0, 1.05, 0.72, 1.07);
      }
    }
`;