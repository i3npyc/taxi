import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button, Card, Input } from '../index';

const ProfileCard = ({
  changeNumber,
  changeName,
  changeData,
  changeCvc,
  nameValue,
  numberCardValue,
  dataValue,
  numberValue,
  cvcValue,
  submitCard
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm();
  return (
    <ProfileCard.Content>
      <ProfileCard.Header>
        <ProfileCard.Title>Профиль</ProfileCard.Title>
        <ProfileCard.Label>Введите платежные данные</ProfileCard.Label>
      </ProfileCard.Header>
      <ProfileCard.Data>
        <ProfileCard.DataItem>
          <ProfileCard.Form onSubmit={handleSubmit(submitCard)}>
            <Input
              hendlerChange={changeName}
              value={nameValue.toLocaleUpperCase()}
              name="name"
              type="text"
              black
              label="Имя владельца"
              register={register}
              errors={errors}
            />
            <Input
              hendlerChange={changeNumber}
              value={numberCardValue}
              type="text"
              black
              label="Номер карты"
              maxlength="19"
              name="number"
              register={register}
              errors={errors}
            />
            <ProfileCard.InputBlock>
              <Input
                hendlerChange={changeData}
                maxlength="5"
                type="text"
                value={dataValue}
                name="data"
                black
                label="MM/YY"
                register={register}
                errors={errors}
              />
              <Input
                hendlerChange={changeCvc}
                maxlength="3"
                type="text"
                value={numberValue(cvcValue)}
                name="cvc"
                black
                label="CVC"
                register={register}
                errors={errors}
              />
            </ProfileCard.InputBlock>
          </ProfileCard.Form>
        </ProfileCard.DataItem>
        <ProfileCard.DataItem>
          <Card
            nameValue={nameValue}
            dataValue={dataValue}
            numberCard={numberCardValue}
          />
        </ProfileCard.DataItem>
      </ProfileCard.Data>
      <ProfileCard.BlockButton>
        <Button onClick={submitCard}>Сохранить</Button>
      </ProfileCard.BlockButton>
    </ProfileCard.Content>
  );
};

ProfileCard.Content = styled.div`
  padding: 59px 44px 67px 44px;
  position: absolute;
  width: 888px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  box-shadow: 0px 10px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
ProfileCard.Header = styled.div`
  margin: 0px 0px 50px 0px;
`;
ProfileCard.Title = styled.div`
  margin: 0px 0px 13px 0px;
  text-align: center;
  font-weight: 700;
  font-size: 32px;
  line-height: 42px;
`;
ProfileCard.Label = styled.div`
  text-align: center;
  font-size: 18px;
  line-height: 21px;
  color: #7b7b7b;
`;
ProfileCard.Data = styled.div`
  margin: 0px 0px 15px 0px;
  display: flex;
  gap: 99px;
`;
ProfileCard.BlockButton = styled.div`
  display: flex;
  justify-content: center;
`;
ProfileCard.DataItem = styled.div`
  flex: 0 1 50%;
`;
ProfileCard.Form = styled.form``;
ProfileCard.InputBlock = styled.div`
  display: flex;
  gap: 35px;
`;

export default ProfileCard;
