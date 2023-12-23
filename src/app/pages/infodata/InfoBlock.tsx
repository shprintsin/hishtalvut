import React from 'react';

import { Col } from 'react-bootstrap';

import { getInfoData } from '@/app/actions/fetch';

import InfoBlockRes from './InfoBlockRes';

export async function InfoBlock() {   
    const data = await getInfoData();
  return (
    <>
      <Col>
       <InfoBlockRes data={data}/>
        </Col>

    </>
  );
}


