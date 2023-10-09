// app/chess/page.tsx

'use client'

import { useState } from 'react';
import { Chess } from 'chess.js';
import { Chessboard } from 'react-chessboard';

const ChessPage = () => {
    const [game, setGame] = useState(new Chess());

    function handleDrop(sourceSquare, targetSquare) {
        let move = game.move({
            from: sourceSquare,
            to: targetSquare,
            promotion: "q"
        });

        if (move === null) return;
        setGame(new Chess(game.fen()));
    }

    return (
        <div>
            <h1>Chess Test Page</h1>
            <Chessboard 
                position={game.fen()} 
                onPieceDrop={({sourceSquare, targetSquare}) => handleDrop(sourceSquare, targetSquare)} 
            />
        </div>
    );
}

export default ChessPage;
