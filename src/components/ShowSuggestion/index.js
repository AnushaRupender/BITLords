import React from "react";

const ShowSuggestion = (props) => {
    const {suggestionsData} = props;
    return(
        <table>
            <thead>
                <tr>
                    <th>Object</th>
                    <th>Carbon Footprint</th>
                    <th>View Suggestions</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(suggestionsData).map(key=>(<tr key={key}><td>{suggestionsData[key].label}</td><td>{suggestionsData[key]['Carbon Footprints']}</td><td>{suggestionsData[key]['Alternative Idea']}</td></tr>))}
            </tbody>
        </table>
    )
}

export default ShowSuggestion;