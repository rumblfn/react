import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import React from "react";
import {styled} from "@mui/material/styles";
import ButtonUnstyled, {buttonUnstyledClasses} from "@mui/core/ButtonUnstyled";
import Paper from "@mui/material/Paper";

const CustomButtonRoot = styled('button')`
  background-color: rgb(122, 30, 154);
  padding: 15px 20px;
  border-radius: 15px 4px 4px 15px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: rgb(81, 17, 126);
  }

  &.${buttonUnstyledClasses.active} {
    background-color: rgb(27, 7, 73);
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }
`;

function CustomButton(props) {
    return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}

const Paper2 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxSizing: 'border-box',
    height: 60,
    lineHeight: '60px',
    marginBottom: 20,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '15px 4px 4px 15px',
    flexGrow: 1,
}));

export const CreateChatFormView = ({value, setValue, createChat}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
            }}
        >
            <Paper2 elevation={3}>
                <InputBase
                    sx={{m: 2}} placeholder="Type chat name here..."
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                />
                <CustomButton onClick={createChat}>Create chat</CustomButton>
            </Paper2>
        </Box>
    )
}