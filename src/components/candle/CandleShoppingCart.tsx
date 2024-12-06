import React, { useState } from 'react';
import LumiButton from '../forms/LumiButton';
import AddIcon from '@mui/icons-material/Add';
import NewCandle from './NewCandle';


const CandleShoppingCart: React.FC = () => {
    const [candles, setCandles] = useState([]);
    const [open, setOpen] = useState(false);

    function handleNewCandleClick() {
      setOpen(true);
    }

    function handleNewCandleClose() {
      setOpen(false);
    }

    return (
      <>
        <div className="w-full flex flex-col items-center">
  
          {candles.length == 0 && (
            <small>
                Nenhuma vela no carrinho!
            </small>
          )}
  
          <LumiButton title="Adicionar vela" color="primary" variant="outlined" startIcon={<AddIcon />} onClick={handleNewCandleClick} />
          <NewCandle open={open} onClose={handleNewCandleClose} />
        </div>
      </>
    );
}

export default CandleShoppingCart;