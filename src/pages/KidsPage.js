import React, { useState } from "react";
import { useForm } from "react-hook-form";

import DisplayKids from "../components/DisplayKids";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../utils/isEmpty";
import { addKid } from "../redux/actions/kids.action";

export default function KidsPage() {
  const [firstname, setFirstname] = useState("");

  const kids = useSelector((state) => state.kidsReducer);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    e.target.reset();
    setFirstname("");
    alert("kids create!");
    dispatch(addKid(data, firstname));
  };
  const handleChange = (e) => {
    setFirstname(e.target.value);
  };

  return (
    <div className="container-kidspage">
      <h1>Kids</h1>

      <div className="grid-container-kids">
        {!isEmpty(kids) &&
          kids.map((item, index) => <DisplayKids item={item} key={index} />)}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Happy new kid !</h2>
        <input
          type="text"
          placeholder="First name"
          value={firstname}
          onChange={handleChange}
        />
        {errors.Firstname && <span>This field is required</span>}
        <input
          type="text"
          placeholder="Last name"
          {...register("Lastname", { required: true, maxLength: 20 })}
        />
        {errors.Lastname && <span>This field is required</span>}
        <h4>Date of Birth</h4>
        <input
          type="date"
          placeholder="Date of Birth"
          {...register("Date_of_Birth", { required: true })}
        />
        {errors.Date_of_Birth && <span>This field is required</span>}

        <div className="container-label">
          <label>
            <input
              {...register("Sex", { required: true })}
              type="radio"
              value="boy"
            />
            Boy
          </label>
          <label>
            <input
              {...register("Sex", { required: true })}
              type="radio"
              value="girl"
            />
            Girl
          </label>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
