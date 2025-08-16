import React from 'react';

function Hero() {
    return (
        <div className='container space'>
          <div className='row text-center aboutcss'>
            <h1 className="font-serif fw-bold" >Charges</h1>
            <p className='fs-4 para'>List of all charges and taxes</p>
          </div>

          <div className='row p-5 text-center'>
            <div className='col-4 '>
              <img src="media\images\pricing0.svg" alt="Image" style={{width:"80%"}} />
              <h2 className="font-serif fw-bold"  >Free equity delivery</h2>
              <p className=' para mt-2'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4 '>
              <img src="media\images\intradayTrades.svg" alt="Image"  style={{width:"80%"}} />
              <h2 className="font-serif fw-bold" >Intraday and F&O trades</h2>
              <p className=' para mt-2'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4 '>
              <img src="media\images\pricingMF.svg" alt="Image" style={{width:"80%"}} />
              <h2 className="font-serif fw-bold" >Free direct MF</h2>
              <p className=' para mt-2'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
          </div>
        </div>
      );
}

export default Hero;