import React, { useEffect } from 'react';
import LogoIcon from "../../assets/Logo/logo-colored.svg";
import { Autocomplete, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState<any>([]);
  const [age, setAge] = React.useState(10);

  useEffect(() => {
    setOptions([
      { value: "realme buds", label: "realme buds", id: 1 },
      { value: "realme buds", label: "realme buds", id: 2 }
    ]);
  }, []);

  return (
    <div>
      <div className="max-w-[80%] m-auto flex items-center justify-between">
        <div className="py-[15px]">
          <img src={LogoIcon} alt="Logo" />
        </div>
        <div className='search border-2 border-[#0D6EFD] rounded-[10px] flex'>
          <div className="">
            
          </div>
          <Autocomplete
            id="google-map-demo"
            sx={{ width: 300, }}
            getOptionLabel={(option: any) =>
              typeof option === 'string' ? option : option.label
            }
            popupIcon={false}
            filterOptions={(x) => x}
            options={inputValue === '' ? [] : options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={(_event: any, newValaue: any) => {
              setValue(newValaue);
            }}
            onInputChange={(_event, newInputValue) => {
              setInputValue(newInputValue);
            }}

            className='border-r-[2px] border-[#0D6EFD] '

            // freeSolo
            renderInput={(params) => (
              <TextField {...params} variant="standard" fullWidth />
            )}
          />
          <Select
            labelId="demo-simple-select-label"
            variant="standard"
            sx={{ width: 100,color:"#808080" }}
            className=' pl-2'
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={(e:any) => setAge(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Button variant="contained" className="radius">Search</Button>

        </div>
        <div>
         <PersonIcon sx={{color:"#8B96A5"}} className='mx-4' />
         <MessageIcon sx={{color:"#8B96A5"}} className='mx-4' />
         <FavoriteIcon sx={{color:"#8B96A5"}} className='mx-4' />
         <ShoppingCartIcon sx={{color:"#8B96A5"}} className='mx-4' />
        </div>
      </div>

    </div>
  );
};

export default Navbar;
