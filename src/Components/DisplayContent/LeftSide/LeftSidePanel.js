import React from "react";
import "./LeftSide.css"

const LeftSidePanel = (props) => {
    return (
        <div className="LeftSize_main">
            <div className="LeftSide_header">Brand</div>
            <div className="LeftSide_brandname">
                <label className="brandname">
                    <input type="checkbox" />Apple
                </label>
                <label className="brandname">
                    <input type="checkbox" />Samsung
                </label>
                <label className="brandname">
                    <input type="checkbox" />Mi
                </label>
            </div>
        </div>
    );
}


export default LeftSidePanel;