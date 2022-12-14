import styled from "styled-components";
import {
  DescriptionTextColor,
  BackgroundWhite,
  GreenChecked,
  CheckedHabits,
} from "../constants/colors";
import Vector from "../assets/images/VectorCheck.svg";
import { useState } from "react";

export default function AllHabitsToday(props) {
  const { Habit } = props;

  function IsRecord(habit) {
    if (Concluded === true && habit.currentSequence === habit.highestSequence) {
      return true;
    } else {
      return false;
    }
  }

  const [Concluded, setConcluded] = useState(Habit.done);
  return (
    <EachHabit current={Concluded} record={IsRecord(Habit)} checked={Concluded}>
      <div>
        <h1>{Habit.name}</h1>
        <div>
          <pre>Sequência atual: </pre>
          <h2>{Habit.currentSequence} dias</h2>
        </div>
        <div>
          <pre>Seu recorde: </pre>
          <h3>{Habit.highestSequence} dias</h3>
        </div>
      </div>
      <CheckBox onClick={() => setConcluded(!Concluded)} checked={Concluded}>
        <img src={Vector} />
      </CheckBox>
    </EachHabit>
  );
}

const EachHabit = styled.div`
  position: relative;
  width: 100%;
  min-height: 94px;
  max-height: max-content;
  border-radius: 5px;
  background: ${BackgroundWhite};
  margin-bottom: 10px;
  div {
    margin-left: 15px;
  }
  h1 {
    font-family: "Lexend Deca", sans-serif;
    overflow-wrap: break-word;
    width: calc(100% - 100px);
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${DescriptionTextColor};

    display: inline-block;
    margin-top: 15px;
    margin-bottom: 7px;
  }
  div > div {
    margin-left: 0px;
    display: flex;
    width: calc(100% - 100px);
  }
  pre,
  h2,
  h3 {
    overflow-wrap: break-word;
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: ${DescriptionTextColor};

    margin-bottom: 2px;
  }

  h2 {
    color: ${(props) => (props.current ? GreenChecked : DescriptionTextColor)};
  }

  h3 {
    color: ${(props) => (props.record ? GreenChecked : DescriptionTextColor)};
    margin-bottom: 10px;
  }
`;

const CheckBox = styled.div`
  position: absolute;
  width: 69px;
  height: 69px;
  top: calc((100% - 69px) / 2);
  right: 13px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.checked
      ? CheckedHabits.checked.background
      : CheckedHabits.unchecked.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;
