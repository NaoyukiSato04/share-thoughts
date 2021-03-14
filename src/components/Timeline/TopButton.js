import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'


const Right = styled.div`
    text-align: right;
`;

export default function SortButton() {
    return (
        <>
            <Right>
                <Button variant="outline-secondary" href="#">
                    ページの一番上へ
                </Button>
            </Right>
        </>
    )
}
