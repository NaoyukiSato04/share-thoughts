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
                    <Sort href="#">新着順</Sort>
                </Button>
                <Button variant="outline-secondary">
                    <Sort href="#page-bottom">投稿順</Sort>
                </Button>
                <Button variant="outline-secondary">
                    <Sort href="#page-bottom">ページの一番下へ</Sort>
                </Button>
            </Right>
        </>
    )
}
