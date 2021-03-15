import React from 'react'
import { Button } from 'react-bootstrap'

export default function SortButton() {
    // const [scrollBottom, toggleScrollBottom] = useState(false)

    return (
        <>
            <div className="text-right">
                <Button variant="outline-secondary" className="doun" href="#">
                    新着順
                </Button>
                <Button variant="outline-secondary" className="up" href="#page-bottom">
                    投稿順
                </Button>
                <Button variant="outline-secondary" href="#page-bottom">
                    ページの一番下へ
                </Button>
            </div>
        </>
    )
}
