import React from 'react'

import copyImg from "../assets/images/copy.svg"

import "../styles/room-code.scss"

type RoomCodeProps = {
    code: string;

}

export function RoomCode(props: RoomCodeProps) {
    // function copyRoomCodeToClipboard(){
    //     navigator.clipboard.writeText('-Mctx5xAA28pXSb4ldej')
    // }

    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}

