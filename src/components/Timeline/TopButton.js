import React from 'react'
import { Button } from 'react-bootstrap'

export default function SortButton() {
    return (
        <>
            <div className="text-right">
                <Button variant="outline-secondary" href="#">
                    ページの一番上へ
                </Button>
            </div>
        </>
    )
}
