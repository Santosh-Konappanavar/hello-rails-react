// components/Greetings.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetings } from "../redux/greetingsSlice";

function Greetings() {
  const dispatch = useDispatch();
  const greetingsData = useSelector((state) => state.greetings.greetings);

  useEffect(() => {
    dispatch(fetchGreetings());

    const interval = setInterval(() => {
      dispatch(fetchGreetings());
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div>
      {greetingsData && <h1>{greetingsData.message}</h1>}
    </div>
  );
}

export default Greetings;