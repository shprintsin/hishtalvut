"use client";
import React, {
  useEffect,
  useState,
} from 'react';

import {
  Col,
  Row,
} from 'react-bootstrap';

import InfoData from './infoData';
import { InfoDataProps } from './Props';
import { SelectData } from './SelectData';

export default function InfoBlockRes({ data }: { data: InfoDataProps[]; }) {
    const [selected, setSelected] = useState([data[0]]);
    const [selectedDataset, setSelectedDataset] = useState(data[0]);
    useEffect(() => { selected && selected.length > 0 ? setSelectedDataset(selected[0]) : setSelectedDataset(data[0]); }, [selected]);
    return (
        <div>
            <Row className={"flex"}>
                <SelectData data={data} setSelected={setSelected} selected={selected} />
            </Row>
            <Row className={"m-0 p-0 d-flex justify-content-center "}>
                <Col md={12} className={"homepage-search-data"}>
                    <InfoData dataset={selectedDataset} />
                </Col>
            </Row>

        </div>
    );
}
