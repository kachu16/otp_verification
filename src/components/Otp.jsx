import React, { useState , useRef} from 'react';
import { useLocation } from 'react-router-dom';


const Otp = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputsRef = useRef([]);

  // const handleChange = (element, index) => {
  //   if(isNaN(element.value)) return false;

  //   setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

  //   if(element.nextSibling) {
  //     element.nextSibling.focus();
  //   }
  // }

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "") {
      if (index === otp.length - 1) {
        inputsRef.current[index].blur();
      } else {
        inputsRef.current[index + 1].focus();
      }
    } else {
      if (index !== 0) {
        inputsRef.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const clipboardData = e.clipboardData.getData("Text").slice(0, 6);
    const newOtp = [...otp];
    for (let i = 0; i < clipboardData.length; i++) {
      if (i === otp.length) break;
      newOtp[i] = clipboardData[i];
    }
    setOtp(newOtp);
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      if (index !== 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (e.key === "ArrowLeft") {
      if (index !== 0) {
        inputsRef.current[index - 1].focus();
      }
    } else if (e.key === "ArrowRight") {
      if (index !== otp.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  };


  const location = useLocation();
  var num = location.state.mynum;
  num = String(num);
  var num1 = num.slice(0, 5);
  var num2 = num.slice(5, 6); 
  return (
    <div>
      <h2>Phone Verification</h2>
      <hr/>
      <p style={{textAlign:'center'}}>Enter the OTP you received on {num ? num1 + " - " + num2 + "XXXX" : "XXXXX-XXXXX"}</p>

      <div className="box">
       {
        otp.map( (digit, index) => (
          <input
            key={index}
            ref={(ref) => (inputsRef.current[index] = ref)}
            type='text'
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className='otp-input'
          />
        ) )
       }
      </div>

      <div className='box small-box'>
        <p>Change Number</p>
        <p>Re-send OTP</p>
      </div>

     <p className='btn-para'> <button>Verify Phone Number</button></p>

    </div>
  )
}

export default Otp
