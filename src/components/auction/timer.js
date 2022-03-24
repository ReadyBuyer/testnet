import { useState } from "react";

const Timer = (props) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props.endTime));
};
