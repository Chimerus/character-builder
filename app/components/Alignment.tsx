"use client";
import React, { useState } from "react";

const Alignment: any = () => {
    const lawChaos: string[] = ["Lawful", "Neutral", "Chaotic"]
    const goodEvil: string[] = ["Good", "Neutral", "Evil"]
    interface AlignProps {
        onClick: (event: React.MouseEvent) => void;
    }

    const [selected, setSelected] = useState("");

    function getAlign(code: string, moral: string):string {
        let align = code + " " + moral;
        if (align == "Neutral Neutral"){
            align = "True Neutral"
        }

        return align
    }

    return (
        <div className="grid grid-rows-3 grid-flow-col gap-4">
            {lawChaos.map((code) => (
                goodEvil.map((moral) => (
                    <div 
                        key={getAlign(code, moral)}
                        onClick={()=>setSelected(getAlign(code, moral))}
                        className={getAlign(code, moral) == selected ? "alignm p-2 border border-indigo-600 active" : "alignm p-2 border border-indigo-600"}
                    >{getAlign(code, moral)} </div>
                ))
            ))}
        </div>
    );
}
export default Alignment;
