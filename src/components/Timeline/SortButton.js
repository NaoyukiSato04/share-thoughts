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
                <Button variant="outline-secondary" className="doun" href="#">
                    新着順
                </Button>
                <Button variant="outline-secondary" className="up" href="#page-bottom">
                    投稿順
                </Button>
                <Button variant="outline-secondary" href="#page-bottom">
                    ページの一番下へ
                </Button>
            </Right>
        </>
    )
}
