import { useState } from 'react';
import AppointmentDropdown from './AppointmentDropdown';
import AppointmentInput from './AppointmentInput';
import AppointmentTitle from './AppointmentTitle';
import StepButtons from './StepButtons';

function PatientDetails({search, handlePrev,handleNext}) {
  const [activeBtn, setActiveBtn] = useState('Register');
  const tabItems = ['Register', 'Login'];

  const [showGender, setShowGender] = useState(false);
  const [gender, setGender] = useState("Gender");
  const genders = ["Gender", "Male", "Female"];

  const handleTab = (item) => {
    setActiveBtn(item);
  }

  return (
    <div className="single-content card2 relative h-full w-full flex flex-col justify-between">
      {/* title */}
      <AppointmentTitle title={"Details"} description={"Register if your new, otherwise just login"} search={search}/>

      {/* content */}
      <div className="flex-grow">
        <ul id="tabs-nav" className="flex items-center justify-center mb-6 gap-6">
          {
            tabItems.map((item, i) => (
              <li key={i}>
                <button onClick={() => handleTab(item)} className={`${item === activeBtn ? 'active' : ''} inline-block w-[100px] rounded-[5px] text-center text-secondary leading-[33px] border border-solid border-secondary/20 bg-white text-sm font-semibold`}>{item}</button>
              </li>
            ))
          }
        </ul>

        {/* Registration tab content */}
        <div className={`${activeBtn === 'Register' ? '' : 'hidden'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">

            {/* first name */}
            <AppointmentInput id={"fname"} type={"text"} placeholder={"First Name"} label={"First Name"}/>

            {/* last name */}
            <AppointmentInput id={"lname"} type={"text"} placeholder={"Last Name"} label={"Last Name"}/>

            {/* email */}
            <AppointmentInput id={"email"} type={"email"} placeholder={"Email"} label={"Email"}/>

            {/* Phone */}
            <AppointmentInput id={"phone"} type={"tel"} placeholder={"Phone"} label={"Phone"}/>

            {/* Age */}
            <AppointmentInput id={"age"} type={"text"} placeholder={"Age"} label={"Age"}/>

            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block mb-2 text-sm lg:text-base font-semibold text-primary-text">Gender</label>
              <AppointmentDropdown showDropdown={showGender} setShowDropdown={setShowGender} selectData={gender} setSelectData={setGender} data={genders}/>
            </div>

            {/* Password */}
            <AppointmentInput id={"password"} type={"password"} placeholder={"Password"} label={"Password"}/>

            {/* Confirm Password */}
            <AppointmentInput id={"cpassword"} type={"password"} placeholder={"Confirm Password"} label={"Confirm Password"}/>
          </div>
        </div>

        {/* Login tab content */}
        <div className={activeBtn === 'Login' ? '' : 'hidden'}>
          <div className="max-w-[580px] mx-auto space-y-6">
            {/* email */}
            <AppointmentInput id={"email_login"} type={"email"} placeholder={"Email"} label={"Email"}/>

            {/* password */}
            <AppointmentInput id={"password_login"} type={"password"} placeholder={"Password"} label={"Password"}/>
          </div>
        </div>
      </div>

      {/* buttons */}
      <StepButtons handleNext={handleNext} handlePrev={handlePrev} back={"Back"} next={activeBtn === 'Login' ? 'Login' : 'Register'}/>
    </div>
  )
}

export default PatientDetails;