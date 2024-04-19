import * as Preview from './style';
import magnetic from '../../assets/image/magnetic.svg';
import visa from '../../assets/image/visa.svg';
import masterCard from '../../assets/image/masterCard.svg';
import theme from '../../styles/theme';
import { CardNumberState, ExpirationDateState, ShowImageCondition } from '../../types/Types';
import CONDITION from '../../constants/Condition';

interface CardInformationPreviewProps {
  cardNumberState: CardNumberState;
  expirationDateState: ExpirationDateState;
  userNameState?: string;
  showImageCondition: ShowImageCondition;
}

const CardInformationPreview = ({
  cardNumberState,
  expirationDateState,
  userNameState,
  showImageCondition,
}: CardInformationPreviewProps) => {
  const { first, second, third, fourth } = cardNumberState;
  const { month, year } = expirationDateState;
  const isMonthYearAllVisible = month && year;
  const { isVisa, isMasterCard} = showImageCondition;

  return (
    <Preview.Container>
      <Preview.ImgContainer>
        <Preview.CardImg src={magnetic} alt="magnetic" />
        {isVisa && <Preview.CardImg src={visa} alt="visa" />}
        {isMasterCard && <Preview.CardImg src={masterCard} alt="masterCard" />}
      </Preview.ImgContainer>
      <Preview.UserInformationContainer>
        <Preview.CardNumberContainer>
          <Preview.UserInfomation $typo={theme.typography.cardNumber}>
            {first}
          </Preview.UserInfomation>
          <Preview.UserInfomation $typo={theme.typography.cardNumber}>
            {second}
          </Preview.UserInfomation>
          <Preview.UserInfomation $typo={theme.typography.cardNumber}>
            {CONDITION.hiddenCardNumber.repeat(String(third ?? '').length)}
          </Preview.UserInfomation>
          <Preview.UserInfomation $typo={theme.typography.cardNumber}>
            {CONDITION.hiddenCardNumber.repeat(String(fourth ?? '').length)}
          </Preview.UserInfomation>
        </Preview.CardNumberContainer>
        <Preview.UserInfomation $typo={theme.typography.cardExpirationDate}>
          {`${month ?? ''}${isMonthYearAllVisible ? CONDITION.splitSlash : ''}${year ?? ''}`}
        </Preview.UserInfomation>
        <Preview.UserInfomation $typo={theme.typography.cardUserName}>
          {userNameState ?? ''}
        </Preview.UserInfomation>
      </Preview.UserInformationContainer>
    </Preview.Container>
  );
};

export default CardInformationPreview;
