import React, { useState } from "react";
import { Container, Box, TextField } from "@mui/material";
import OtpInput from "react-otp-input";
import InputMask from "react-input-mask";

export default function Index() {
  const [otp, setOtp] = useState("");
  const [dob, setDob] = useState("");

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <OtpInput
          value={otp}
          inputStyle={{
            border: "1px solid rgba(22, 25, 29, 0.2)",
            marginRight: "6px",
            height: "2.25rem",
            borderRadius: "0.125rem",
            width: "3rem",
          }}
          onChange={(e) => setOtp(e)}
          numInputs={6}
          isInputNum={true}
          autoComplete="one-time-code"
        />
      </Box>
      <Box sx={{ my: 4 }}>
        <InputMask
          mask="99/99/9999"
          value={dob}
          onChange={(event) => setDob(event.target.value)}
        >
          {(props) => (
            <TextField
              fullWidth
              {...props}
              value={dob}
              placeholder="MM/DD/YYYY"
              name="dob"
            />
          )}
        </InputMask>
      </Box>
    </Container>
  );
}
