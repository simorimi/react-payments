import styled from 'styled-components';

export const Dropdown = styled.div`
  position: relative;

  width: 100%;
`;

export const Select = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;

  height: 3.2rem;
  padding: 0.8rem;
  border: 0.1rem solid
    ${(props) => (props.$isOpen ? props.theme.color.black : props.theme.color.lightGray)};
  border-radius: 0.2rem;
  ${(props) => props.theme.typography.dropDown};

  cursor: pointer;
`;

export const SelectText = styled.div<{ $selected: string }>`
  color: ${(props) => (props.$selected ? props.theme.color.black : props.theme.color.lightGray)};
`;

export const SelectImage = styled.div<{ $isOpen: boolean }>`
  color: ${(props) => (props.$isOpen ? props.theme.color.black : props.theme.color.lightGray)};
`;

export const Options = styled.ul`
  position: absolute;

  width: 100%;
  margin-top: 0.5rem;
  border: 0.1rem solid ${(props) => props.theme.color.lightGray};
  border-radius: 0.2rem;

  background-color: ${(props) => props.theme.color.white};
`;

export const Option = styled.li`
  height: 3.1rem;
  padding: 0.8rem;

  ${(props) => props.theme.typography.dropDown};
  color: ${(props) => props.theme.color.charcoalGray};

  cursor: pointer;
`;