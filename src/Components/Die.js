import React from "react";

export default function Die(props) {
  let dieFace;
  if (props.value === 1) {
    dieFace = "one";
  } else if (props.value === 2) {
    dieFace = "two";
  } else if (props.value === 3) {
    dieFace = "three";
  } else if (props.value === 4) {
    dieFace = "four";
  } else if (props.value === 5) {
    dieFace = "five";
  } else if (props.value === 6) {
    dieFace = "six";
  }
  return (
    <i
      className={`die${props.selected} fas fa-dice-${dieFace}`}
      onClick={props.handleClick}
    ></i>
  );
}
