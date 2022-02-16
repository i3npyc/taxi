import styled from 'styled-components';

import circle from '../../static/img/card/circle.svg';
import chip from '../../static/img/card/chip.svg';
import mastercard from '../../static/img/card/mastercard.svg';

const Card = ({ dataValue, numberCard, nameValue }) => {
  return (
    <Card.Card>
      <Card.CardContent>
        <Card.CardColumn>
          <Card.CardCircle></Card.CardCircle>
          <Card.CardDate>
            {dataValue.length === 5 ? dataValue : ''}
          </Card.CardDate>
        </Card.CardColumn>
        <Card.CardColumn>
          <Card.CardNumber>{numberCard.length === 19 ? numberCard : ''}</Card.CardNumber>
        </Card.CardColumn>
        <Card.CardColumn>
          <Card.Chip></Card.Chip>
          <div>{nameValue.toUpperCase()}</div>
          <Card.MasterCard></Card.MasterCard>
        </Card.CardColumn>
      </Card.CardContent>
    </Card.Card>
  );
};

Card.Card = styled.div`
  width: 100%;
  padding: 16px 16px 16px 27px;
  height: 182px;
  background: #ffffff;
  box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
Card.CardContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
Card.CardColumn = styled.div`
  display: flex;
  justify-content: space-between;
`;
Card.CardCircle = styled.div`
  width: 33px;
  height: 33px;
  background: url(${circle}) no-repeat;
`;
Card.CardDate = styled.div`
  font-size: 12px;
  line-height: 14px;
`;
Card.CardNumber = styled.div`
  font-size: 21px;
  line-height: 25px;
`;
Card.Chip = styled.div`
  width: 30px;
  height: 30px;
  background: url(${chip}) no-repeat;
`;
Card.MasterCard = styled.div`
  width: 46px;
  height: 28px;
  background: url(${mastercard}) no-repeat;
`;

export default Card;
