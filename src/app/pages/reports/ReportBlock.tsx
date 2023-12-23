import React from 'react';

import { Col } from 'react-bootstrap';

import { getReports } from '@/app/actions/fetch';

import { HorizontalPostImage } from './components/HorizontalPostImage';
import { VerticalPostText } from './components/VerticalPostText';

export async function ReportBlock() {
    const data = await getReports();
    return (<>
        {data.map((item, index) => {
            return (
                <React.Fragment key={index}>
                    {item.isFeatured ? (
                        <Col md={6} className="">
                            <HorizontalPostImage report={item} />
                        </Col>
                    ) : (
                        <Col>
                            <VerticalPostText report={item}/>
                        </Col>
                    )}
                </React.Fragment>
            );
        })}
    </>);
}
