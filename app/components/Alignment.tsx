"use client";
import React, { useState } from "react";

interface AlignProps {
    onSelectItem: (item: string) => void;
}


function Alignment({onSelectItem}: AlignProps) {
    const lawChaos: string[] = ["Lawful", "Neutral", "Chaotic"]
    const goodEvil: string[] = ["Good", "Neutral", "Evil"]
    const [selected, setSelected] = useState("");


    function getAlign(code: string, moral: string):string {
        let align = code + " " + moral;
        if (align == "Neutral Neutral"){
            align = "True Neutral"
        }

        return align
    }

    function updateState(alignment: string) {
        setSelected(alignment)
        // and update character state
        onSelectItem(alignment)
    }

    return (
        <>
            <p>Select Alignment</p>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                {lawChaos.map((code) => (
                    goodEvil.map((moral) => (
                        <div 
                            key={getAlign(code, moral)}
                            onClick={()=>updateState(getAlign(code, moral))}
                            className={getAlign(code, moral) == selected ? "alignm p-2 border border-indigo-600 active" : "alignm p-2 border border-indigo-600"}
                        >{getAlign(code, moral)} </div>
                    ))
                ))}
            </div>
        </>
    );
}
export default Alignment;
