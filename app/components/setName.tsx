"use client";
import { useReducer } from "react";

function reducer(state: Record<string, any>, action: Record<string, any>) {
    if (action.type === "set_name") {
        return {
            name: action.payload,
        };
    }
    throw Error("Unknown action.");
}

export default function SetName() {
    const [state, dispatch] = useReducer(reducer, { name: "Suren" });

    return (
        <div>
            <p>Hello! You are {state.name}</p>
            <input
                type="text"
                onChange={(e) => {
                    dispatch({
                        type: "set_name",
                        payload: e.target.value,
                    });
                }}
            />
        </div>
    );
}