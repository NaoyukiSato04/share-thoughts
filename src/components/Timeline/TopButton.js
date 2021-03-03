import React from 'react'
import { Button } from 'react-bootstrap'
import styled from 'styled-components'


const Right = styled.div`
    text-align: right;
`;

const Sort = styled.a`
    text-decoration: none;
    color: inherit;
`;

export default function SortButton() {
    return (
        <>
            <Right>
                <Button variant="outline-secondary">
                    <Sort href="#">ページの一番上へ</Sort>
                </Button>
            </Right>
        </>
    )
}
