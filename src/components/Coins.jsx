import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import './Coins.css'

const Coins = ({coins,handlePageChange }) => {
    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {coins.map(coins => {
                    return (
                        <Link to={`/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>

                    )
                })}

            </div>
            <div className="pagination">
                <Stack alignItems='center' spacing={2}>
                    <Pagination onChange={(e)=> handlePageChange(e.target.textContent)} count={30} variant="outlined" shape="rounded" />
                </Stack>
            </div>

        </div>
    )
}

export default Coins
